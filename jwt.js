const expressJwt = require("express-jwt");
const config = require("./config.json");

module.exports = jwt;

function jwt() {
  const { secret } = config;
  return expressJwt({ secret, algorithms: ["HS256"] }).unless({
    path: [
      // public routes that don't require authentication
      "/api/faqs/getAllFaqs",
      "/api/notifications/getAllNotifications",
      "/api/users/authenticate",
      "/api/users/add-user",
      "/api/properties/allProperties",
      new RegExp('/api/properties/allNearByProperties.*', 'i'),
      new RegExp('/api/properties/filterallNearByProperties.*', 'i'),
    ],
  });
}
