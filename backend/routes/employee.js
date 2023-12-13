var express = require('express');
var router = express.Router();

const mysqlConn = require('../db/mysql');

/* GET employee listing. */
router.get('/get-all', function(req, res, next) {
  const columns = ['dob', 'salary', 'position', 'department', 'id', 'joiningDate'];
  mysqlConn.query("SELECT CONCAT(firstName, ' ', lastName) as name, ??  FROM Employee", [columns], (err, rows, fields)=>{
    if(err) throw err;
    // res.send(rows);
    const result = [];
    Object.keys(rows).forEach(key=>{
      result.push(rows[key]);
    })
    console.log(rows);
    res.send(result)
    // res.render('SQLTest',{data:result})
  })
  // res.send('Hit');
});

/* CREATE Record */
router.post('/create', function(req, res, next) {

  // const columns = ['firstName', 'lastName', 'dob', 'salary', 'position', 'department'];
  // const values = ['Naveen', 'SK','14-02-2004', 30000, 'developer', 'development'];
  const data = req.body;
  console.log(data);
  const columns = Object.keys(data);
  const values = Object.values(data);
  const SQL_STRING = "INSERT INTO Employee (??) VALUES (?)";
  const query = mysqlConn.format(SQL_STRING, [columns, values]);
  mysqlConn.query(query, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send({"Query": "OK"});
  })
  // res.send('Hit');
});

module.exports = router;
