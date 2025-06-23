// main.js

import Purchase from './01_purchase.js';
import UserAnalytics from './01_UserAnalytics.js';

const purchases = [
  new Purchase('user1', 100, 'electronics'),
  new Purchase('user2', 200, 'clothing'),
  new Purchase('user1', 150, 'books'),
  new Purchase('user2', 380, 'furniture')
];

const analytics = new UserAnalytics(purchases);
const result = analytics.getTotalSpentPerUser();

console.log(result);

