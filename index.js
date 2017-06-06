const express = require('express');
const app = require('app');

app.listen(3400, function () {
  console.log('here comes dat boi');
});

app.use(express.static('public'));
