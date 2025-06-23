export class FlightBooking {
  constructor(passengerName, flightNumber, date, baggageWeight) {
    this.passengerName = passengerName;
    this.flightNumber = flightNumber;
    this.date = new Date(date);
    this.baggageWeight = baggageWeight;
  }
}
