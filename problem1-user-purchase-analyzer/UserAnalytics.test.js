const Purchase = require('./01_purchase.js');
const UserAnalytics = require('./01_UserAnalytics.js');

test('getTotalSpentPerUser returns correct totals', () => {
  const purchases = [
    new Purchase('user1', 100, 'electronics'),
    new Purchase('user2', 200, 'clothing'),
    new Purchase('user1', 150, 'books'),
    new Purchase('user2', 380, 'furniture')
  ];

  const analytics = new UserAnalytics(purchases);
  const result = analytics.getTotalSpentPerUser();

  expect(result).toEqual({
    user1: 250,
    user2: 580
  });
});
