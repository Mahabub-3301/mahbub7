document.addEventListener('DOMContentLoaded',()=>{

  // DOM Elements
const sideNavLinks = document.querySelectorAll('.side-nav a');
const contentSections = document.querySelectorAll('.content-section');

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