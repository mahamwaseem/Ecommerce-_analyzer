const FlightBooking = require('./FlightBooking');
const BookingValidator = require('./BookingValidator');

test('validates bookings and returns status correctly', () => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 1); // tomorrow
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 1); // yesterday

  const bookings = [
    new FlightBooking('Ali', 'PK001', futureDate.toISOString(), 20),     // OK
    new FlightBooking('John', 'PK002', pastDate.toISOString(), 20),     // Invalid Date
    new FlightBooking('Sara', 'PK003', futureDate.toISOString(), 30)    // Overweight
  ];

  const validator = new BookingValidator(bookings);
  const result = validator.validate();

  expect(result).toEqual([
    { passengerName: 'John', status: 'Invalid Date' },
    { passengerName: 'Ali', status: 'OK' },
    { passengerName: 'Sara', status: 'Overweight' }
  ]);
});
