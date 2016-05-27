'use strict';

const express = require('express'),
  app = express(),
  args = require('yargs').argv,
  server = app.listen(args.port || 3000);

app.get('/oodles/:plainString', function (req, res) {
  res.writeHead(200, {'content-type': 'application/json'});
  res.write(req.params.plainString.replace(/[aeiou]/gi, 'oodle'));
  res.end();
});

app.delete('/die', function (req, res) {
  res.writeHead(204);
  res.end();
  server.close();
  process.exit();
});
