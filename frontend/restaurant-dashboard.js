document.addEventListener('DOMContentLoaded',()=>{

  // DOM Elements
const sideNavLinks = document.querySelectorAll('.side-nav a');
const contentSections = document.querySelectorAll('.content-section');
const closenav = document.getElementById('closeSignUpForm');
const opennav = document.getElementById('side-btn');

function closenavHandler() {
  document.getElementById('side-nav').style.display = 'none';
  opennav.style.display = 'flex' // Show the open button
}

function opennavHandler() {
  document.getElementById('side-nav').style.display = 'flow';
  opennav.style.display = 'none'; // Hide the open button
}


closeSignUpForm.addEventListener('click', closenavHandler);
opennav.addEventListener('click', opennavHandler);

// Function to switch between sections
function switchSection(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href').substring(1);

  // Remove active class from all sections and links
  contentSections.forEach(section => section.classList.remove('active'));
  sideNavLinks.forEach(link => link.classList.remove('active'));

  // Add active class to the target section and link
  document.getElementById(targetId).classList.add('active');
  this.classList.add('active');
}

// Event Listeners
sideNavLinks.forEach(link => link.addEventListener('click', switchSection));


// Sample data for the Home section
const restaurantProfile = {
  name: "Delicious Bites",
  email: "info@deliciousbites.com",
  bio: "Serving the community with love and delicious food!",
  profilePicture: "default-profile.jpg"
};

const analytics = {
  totalDonations: 12,
  totalFoodSaved: 50, // in kg
  requestsFulfilled: 8
};

const recentOrders = [
  { id: 1, foodType: 'Pizza', quantity: 2, customer: 'John Doe', status: 'Completed' },
  { id: 2, foodType: 'Burger', quantity: 3, customer: 'Jane Smith', status: 'Pending' }
];

const recentDonations = [
  { id: 1, foodType: 'Sandwiches', quantity: 20, charity: 'Charity A', date: '2023-10-01' },
  { id: 2, foodType: 'Salads', quantity: 15, charity: 'Charity B', date: '2023-10-05' }
];

// Function to render the Home section
function renderHome() {
  // Update profile info
  document.getElementById('restaurantNameDisplay').textContent = restaurantProfile.name;
  document.getElementById('emailDisplay').textContent = restaurantProfile.email;
  document.getElementById('bioDisplay').textContent = restaurantProfile.bio;
  document.getElementById('profilePicturePreview').src = restaurantProfile.profilePicture;

  // Update analytics
  document.getElementById('totalDonations').textContent = analytics.totalDonations;
  document.getElementById('totalFoodSaved').textContent = `${analytics.totalFoodSaved} kg`;
  document.getElementById('requestsFulfilled').textContent = analytics.requestsFulfilled;

  // Render recent orders
  const recentOrdersList = document.getElementById('recentOrders');
  recentOrdersList.innerHTML = recentOrders.map(order => `
    <div class="order-card">
      <h4>${order.foodType} (${order.quantity})</h4>
      <p>Customer: ${order.customer}</p>
      <p>Status: ${order.status}</p>
    </div>
  `).join('');

  // Render recent donations
  const recentDonationsList = document.getElementById('recentDonations');
  recentDonationsList.innerHTML = recentDonations.map(donation => `
    <div class="donation-card">
      <h4>${donation.foodType} (${donation.quantity})</h4>
      <p>Charity: ${donation.charity}</p>
      <p>Date: ${donation.date}</p>
    </div>
  `).join('');
}

// Initial render
renderHome();

// Sample data for requests and donation history
const requests = [
  { id: 1, foodType: 'Sandwiches', quantity: 20, charity: 'Charity A', status: 'Pending' },
  { id: 2, foodType: 'Salads', quantity: 15, charity: 'Charity B', status: 'Approved' }
];

const donationHistory = [
  { id: 1, foodType: 'Pizza', quantity: 10, charity: 'Charity C', date: '2023-10-01' },
  { id: 2, foodType: 'Burgers', quantity: 25, charity: 'Charity D', date: '2023-10-05' }
];

// Function to render requests
function renderRequests() {
  const requestList = document.getElementById('requestList');
  requestList.innerHTML = requests.map(request => `
    <div class="request-card">
      <h3>${request.foodType} (${request.quantity})</h3>
      <p>Charity: ${request.charity}</p>
      <p>Status: ${request.status}</p>
      <div class="request-actions">
        <button class="accept" onclick="acceptRequest(${request.id})">Accept</button>
        <button class="reject" onclick="rejectRequest(${request.id})">Reject</button>
      </div>
      <div class="request-message">
        <textarea id="message-${request.id}" placeholder="Send a message to the charity..."></textarea>
      </div>
    </div>
  `).join('');
}

// Function to handle accepting a request
function acceptRequest(requestId) {
  const message = document.getElementById(`message-${requestId}`).value;
  console.log(`Request ${requestId} accepted with message: ${message}`);
  // Update the request status in your backend or data structure
  const request = requests.find(req => req.id === requestId);
  if (request) {
    request.status = 'Accepted';
    renderRequests();
  }
}

// Function to handle rejecting a request
function rejectRequest(requestId) {
  const message = document.getElementById(`message-${requestId}`).value;
  console.log(`Request ${requestId} rejected with message: ${message}`);
  // Update the request status in your backend or data structure
  const request = requests.find(req => req.id === requestId);
  if (request) {
    request.status = 'Rejected';
    renderRequests();
  }
}

// Function to render donation history
function renderDonationHistory() {
  const donationHistoryList = document.getElementById('donationHistory');
  donationHistoryList.innerHTML = donationHistory.map(donation => `
    <div class="donation-card">
      <h3>${donation.foodType} (${donation.quantity})</h3>
      <p>Charity: ${donation.charity}</p>
      <p>Date: ${donation.date}</p>
    </div>
  `).join('');
}

// Function to update analytics
function updateAnalytics() {
  document.getElementById('totalDonations').textContent = donationHistory.length;
  document.getElementById('totalFoodSaved').textContent = donationHistory.reduce((sum, donation) => sum + donation.quantity, 0) + ' kg';
  document.getElementById('requestsFulfilled').textContent = requests.filter(request => request.status === 'Approved').length;
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkMode');
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Sample data for orders
const orders = [
  { id: 1, foodType: 'Pizza', quantity: 2, customer: 'John Doe', status: 'Pending' },
  { id: 2, foodType: 'Burger', quantity: 3, customer: 'Jane Smith', status: 'Pending' }
];

// Function to render orders
function renderOrders() {
  const orderList = document.getElementById('orderList');
  orderList.innerHTML = orders.map(order => `
    <div class="order-card">
      <h3>${order.foodType} (${order.quantity})</h3>
      <p>Customer: ${order.customer}</p>
      <p>Status: ${order.status}</p>
      <div class="order-actions">
        <button class="complete" onclick="completeOrder(${order.id})">Complete</button>
        <button class="cancel" onclick="cancelOrder(${order.id})">Cancel</button>
      </div>
    </div>
  `).join('');
}

// Function to handle completing an order
function completeOrder(orderId) {
  console.log(`Order ${orderId} completed`);
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = 'Completed';
    renderOrders();
  }
}

// Function to handle canceling an order
function cancelOrder(orderId) {
  console.log(`Order ${orderId} canceled`);
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = 'Canceled';
    renderOrders();
  }
}

// Initial render
renderOrders();

// Initial render
renderRequests();
renderDonationHistory();
updateAnalytics();

});