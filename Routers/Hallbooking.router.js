// HallBooking.router.js
import express from "express";
import {
  createRoom,
  getAllRooms,
  bookRoom,
  getAllBookings,
  getAllCustomers,
  getCustomerBookings,
} from "../Controllers/Hallbooking.controller.js";

const router = express.Router();

// Room routes
router.post("/createrooms", createRoom);
router.get("/rooms", getAllRooms);

// Booking routes
router.post("/bookings", bookRoom);
router.get("/Allbookings", getAllBookings);

// Customer routes
router.get("/customers", getAllCustomers);
router.get("/customers/:customerId/bookings", getCustomerBookings);

export default router;
