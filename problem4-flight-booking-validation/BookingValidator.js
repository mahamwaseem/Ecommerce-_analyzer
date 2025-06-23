import { FlightBooking } from './FlightBooking.js';

export class BookingValidator {
  constructor(bookings) {
    this.bookings = bookings;
  }

  validate() {
    const today = new Date();
    const result = [];

    for (const { passengerName, date, baggageWeight } of this.bookings) {
      let status = 'OK';
      if (baggageWeight > 23) status = 'Overweight';
      else if (date < today) status = 'Invalid Date';

      result.push({ passengerName, status, date });
    }

    return result.sort((a, b) => a.date - b.date)
                 .map(({ passengerName, status }) => ({ passengerName, status }));
  }
}
