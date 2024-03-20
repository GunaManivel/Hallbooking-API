# Hall Booking API

This API provides endpoints for managing hall bookings including creating rooms, booking rooms, and retrieving booking information.

## Technologies Used

- Node.js
- Express.js

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```


The server will run on http://localhost:4000 by default.

## API Endpoints

### Create Room

- Method: `POST `
- Endpoint: `/api/createrooms`

Create a new room with the following JSON body parameters:

- `roomName`: Name of the room
- `seatsAvailable`: Number of seats available in the room
- `amenities`: Amenities available in the room
- `pricePerHour`: Price per hour for booking the room

### Get All Rooms

- Method: `GET` 
- Endpoint: `/api/rooms`

Retrieve all rooms available for booking.

### Book Room

- Method: `POST` 
- Endpoint: `/api/bookings`

Book a room with the following JSON body parameters:

- `customerId`: ID of the customer making the booking
- `roomName`: Name of the room to book
- `date`: Date of the booking (YYYY-MM-DD format)
- `startTime`: Start time of the booking (HH:MM format)
- `endTime`: End time of the booking (HH:MM format)

### Get All Bookings

- Method: `GET `
- Endpoint: `/api/Allbookings`

Retrieve all bookings made.

### Get All Customers with Booked Data

- Method: `GET `
- Endpoint: `/api/customers`
  
Retrieve all customers along with their booked data.

### Get Bookings for a Specific Customer

- Method: GET 
- Endpoint: `/api/customers/:customerId/bookings`

Retrieve bookings for a specific customer identified by `customerId`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or want to suggest improvements.

## License

This project is licensed under the [MIT License](LICENSE).

API documentation availble at : https://documenter.getpostman.com/view/31934300/2sA358dR2C





