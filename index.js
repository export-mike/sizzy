#!/usr/bin/env node

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3033;

process.title = 'sizzy';

app.use(express.static(`${__dirname}/build`));

app.listen(PORT, err => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log('Sizzy is listening on PORT:', PORT);
});
