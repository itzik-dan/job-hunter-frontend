const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth/google",
    createProxyMiddleware({
      target: "https://job-hunter-api.onrender.com",
      changeOrigin: true,
    })
  );
  app.use(
    "/api/**",
    createProxyMiddleware({
      target: "https://job-hunter-api.onrender.com",
      changeOrigin: true,
    })
  );
};
