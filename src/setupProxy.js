const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/auth/google", { target: "https://job-hunter-api.onrender.com" })
  );
  app.use(proxy("/api/**", { target: "https://job-hunter-api.onrender.com" }));
};
