import { FlightBooking } from './FlightBooking.js';
import { BookingValidator } from './BookingValidator.js';

const bookings = [
  new FlightBooking('Ali', 'PK001', '2025-07-01', 20),
  new FlightBooking('John', 'PK002', '2025-06-01', 25)
];

const validator = new BookingValidator(bookings);
console.log(validator.validate());
