/* eslint-disable no-undef */

/* eslint-disable no-undef */
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    console.log(__dirname);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
