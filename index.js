const express = require('express');
const app = require('app');


app.listen(8000, function () {
  console.log('Git Swol!!');
});

app.use(express.static('catattack'));
