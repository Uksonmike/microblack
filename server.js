/* eslint-disable no-undef */
const express = require("express");
const app = express();
const path = require("path");

// add middleware
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
console.log("server started on port:", PORT);
app.listen(PORT);

// const { createServer } = require('vite');
// const express = require('express');
// const path = require('path');

// async function createApp() {
//   const app = express();

//   // Create Vite dev server in development
//   if (process.env.NODE_ENV === 'development') {
//     const vite = await createServer({
//       server: { middlewareMode: 'ssr' },
//     });

//     // Use Vite's Connect instance as middleware
//     app.use(vite.middlewares);
//   } else {
//     // Serve the static build folder in production
//     app.use(express.static(path.resolve(__dirname, './dist')));
//   }

//   // Serve the index.html file for all routes
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './dist/index.html'));
//   });

//   return app;
// }

// // Start the server
// const port = process.env.PORT || 3000;
// createApp().then((app) => {
//   app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });
// });
