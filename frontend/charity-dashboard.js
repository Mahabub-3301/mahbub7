document.addEventListener("DOMContentLoaded", function() {
    const pages = {
        home: "<h1>Welcome to Your Charity Dashboard</h1><p>Manage your food donations, track requests, and view analytics.</p>",
        orders: "<h1>Orders</h1><p>View and manage food donation orders.</p>",
        donations: "<h1>Donations</h1><p>Track and manage food donations.</p>",
        requests: "<h1>Requests</h1><p>See pending food requests from charities.</p>",
        "donation-history": "<h1>Donation History</h1><p>View past donations and their details.</p>",
        analytics: "<h1>Analytics</h1><p>Track statistics and performance of food donations.</p>",
        settings: "<h1>Settings</h1><p>Manage your dashboard settings and preferences.</p>",
        "live-tracking": "<h1>Live Tracking</h1><p>Track food deliveries in real-time.</p>"
    };

    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", function() {
            document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
            this.classList.add("active");
            const page = this.getAttribute("data-page");
            document.getElementById("page-content").innerHTML = pages[page];
        });
    });
});
