const fetch = require('node-fetch');

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

module.exports = (cb) => {
fetch('http://dummy.restapiexample.com/api/v1/employees')
  .then(res => res.text())
  .then(employees => {
    let json = JSON.parse(employees);
    setInterval(() =>   {
      let employee=json.data[getRandom(0,json.data.length-1)];
      console.log(employee);
      cb(employee);  
    }, 5000);
  })
}