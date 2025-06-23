// UserAnalytics.js

import Purchase from './01_purchase.js';

class UserAnalytics {
  constructor(purchases) {
    this.purchases = purchases;
  }

  getTotalSpentPerUser() {
    const summary = {};

    for (const purchase of this.purchases) {
      const userId = purchase.userId;
      const amount = purchase.amount;

      if (summary[userId]) {
        summary[userId] += amount;
      } else {
        summary[userId] = amount;
      }
    }

    return summary;
  }
}

export default UserAnalytics;
