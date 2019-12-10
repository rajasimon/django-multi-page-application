// Expess server import
import express from 'express';
import cors from 'cors';

// Need in all the preact modules
import { h } from 'preact';

// Server side rendering support package
import Router from 'preact-router';
import render from 'preact-render-to-string';

// All the page module imports
import CSVUploader from './src/csvuploader';

// INIT EXPRESS
const app = express();
app.use(cors())

// on each request, render and return a component:
app.get('/csvuploader', (req, res) => {
  let html = render(<CSVUploader />);
  
  // send it back wrapped up as an HTML5 document:
	res.send(`<!DOCTYPE html><html><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"><body>${html}</body></html>`);
});

app.listen(8080, function() {
  console.log('CORS-enabled web server listening on port 8080');
});
