// index.js
import express from "express";
import hallBookingRouter from "./Routers/Hallbooking.router.js";

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", hallBookingRouter);
// Route for the API documentation
app.get("/api-docs", (req, res) => {
  // Redirect to the URL where your API documentation is hosted
  res.redirect("https://documenter.getpostman.com/view/31934300/2sA358d5ck");
});

// Route for the root endpoint
app.get("/", (req, res) => {
  res.send(`
     <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to the Hall Booking API</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 700px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
            }
            p {
                color: #666;
            }
            ul {
                list-style-type: none;
                padding: 0;
                text-align: left;
            }
            li {
                margin-bottom: 10px;
            }
            strong {
                color: #555;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to the Hall Booking API</h1>
            <p>This API allows you to manage hall bookings. Below are the available endpoints:</p><br/>
            <ul>
                <li><strong>POST /api/createrooms:</strong> Create a new room</li><br/>
                <li><strong>GET /api/rooms:</strong> Retrieve all rooms</li><br/>
                <li><strong>POST /api/bookings:</strong> Book a room</li><br/>
                <li><strong>GET /api/Allbookings:</strong> Retrieve all bookings</li><br/>
                <li><strong>GET /api/customers:</strong> Retrieve all customers with booked data</li><br/>
                <li><strong>GET /api/customers/:customerId/bookings:</strong> Retrieve bookings for a specific customer</li><br/>
            </ul>
            <p>For detailed information on how to use each endpoint, refer to the <a href="/api-docs" class="https://documenter.getpostman.com/view/31934300/2sA358d5ck">API documentation</a>.</p>
        </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
