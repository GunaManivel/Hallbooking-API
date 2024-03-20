// HallBooking.controller.js
// Controller functions for hall booking

let rooms = [
  {
    id: 1,
    roomName: "Hotel Rich",
    seatsAvailable: 12,
    amenities: "roads, running water",
    pricePerHour: 350,
  },
  {
    id: 2,
    roomName: "Grand Palace",
    seatsAvailable: 15,
    amenities: "swimming pool, gym",
    pricePerHour: 500,
  },
  {
    id: 3,
    roomName: "Sunset View",
    seatsAvailable: 10,
    amenities: "balcony, air conditioning",
    pricePerHour: 300,
  },
  {
    id: 4,
    roomName: "Ocean Breeze",
    seatsAvailable: 20,
    amenities: "beachfront, spa",
    pricePerHour: 600,
  },
];
let bookings = [
  {
    bookingId: 1,
    customerId: 1,
    roomName: "Hotel Rich",
    date: "2024-03-20",
    startTime: "10:00",
    endTime: "12:00",
  },
  {
    bookingId: 2,
    customerId: 2,
    roomName: "Grand Palace",
    date: "2024-03-21",
    startTime: "14:00",
    endTime: "16:00",
  },
];

// Function to create a room
export const createRoom = (req, res) => {
  const { roomName, seatsAvailable, amenities, pricePerHour } = req.body;
  const newRoom = {
    id: rooms.length + 1,
    roomName: roomName,
    seatsAvailable: seatsAvailable,
    amenities: amenities,
    pricePerHour: pricePerHour,
  };
  rooms.push(newRoom);
  res.status(201).json({ message: "Room created successfully", data: newRoom });
};

// Function to get all rooms
export const getAllRooms = (req, res) => {
  res.status(200).json(rooms);
};

// Function to book a room
export const bookRoom = (req, res) => {
  const { customerId, roomName, date, startTime, endTime } = req.body;

  // Check if the customer already exists
  const existingCustomerIndex = bookings.findIndex(
    (booking) => booking.customerId === customerId
  );

  if (existingCustomerIndex !== -1) {
    // Customer already exists, add booking to their existing bookings
    const existingCustomer = bookings[existingCustomerIndex];
    const newBooking = {
      bookingId: bookings.length + 1,
      customerId,
      roomName,
      date,
      startTime,
      endTime,
    };
    existingCustomer.bookings.push(newBooking);
    res
      .status(201)
      .json({ message: "Room booked successfully", booking: newBooking });
  } else {
    // Customer does not exist, create a new customer object and add booking
    const newCustomer = {
      customerId,
      bookings: [
        {
          bookingId: bookings.length + 1,
          customerId,
          roomName,
          date,
          startTime,
          endTime,
        },
      ],
    };
    bookings.push(newCustomer);
    res.status(201).json({
      message: "Room booked successfully",
      booking: newCustomer.bookings[0],
    });
  }
};
// Function to get all bookings
export const getAllBookings = (req, res) => {
  res.status(200).json(bookings);
};

// Function to get all customers with booked data
export const getAllCustomers = (req, res) => {
  const customers = [];
  for (const booking of bookings) {
    const customerIndex = customers.findIndex(
      (customer) => customer.customerId === booking.customerId
    );
    if (customerIndex === -1) {
      customers.push({ customerId: booking.customerId, bookings: [booking] });
    } else {
      customers[customerIndex].bookings.push(booking);
    }
  }
  res.status(200).json(customers);
};

// Function to get bookings for a specific customer
export const getCustomerBookings = (req, res) => {
  const customerId = parseInt(req.params.customerId);
  const customerBookings = bookings.filter(
    (booking) => booking.customerId === customerId
  );
  res.status(200).json(customerBookings);
};
