const mysql      = require('mysql');
var bodyParser = require('body-parser')
const express = require('express')
var app = express()
app.use(bodyParser.json());

//connection properties
var mysqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'employeedb'
});
 
//Check connection
mysqlConnection.connect((err) =>{
    if(!err){
        console.log("DB Connected");
    }else {
        console.log("Connection fail :" +JSON.stringify(err,undefined,2));
    }
});
 

//port   
app.listen(3000,() => console.log("Express server is running on the port 3000")); 

//get all employees api
app.get('/employees',  (req, res) => {
    mysqlConnection.query('SELECT * FROM employee',(err,rows,fields) =>{
        if(!err){
            //console.log(rows);
            res.send(rows);  
        }else {
            console.log(err)
        }

    })
  });
  
 //get an employee by id api
app.get('/employees/:id',(req, res) => {
    mysqlConnection.query('SELECT * FROM employee WHERE EmpID = ?',[req.params.id],(err,rows,fields) =>{
        if(!err){
            res.send(rows);  
        }else {
            console.log(err)
        }

    })
  });

 //add new employee
app.post('/employees',(req, res) => {
    let data = {Name: req.body.Name, EmpCode: req.body.EmpCode,Salary: req.body.Salary};
    let sql = "INSERT INTO employee SET ?";
    mysqlConnection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  }); 

//update employee
app.put('/employees/:id',(req, res) => {
    let sql = "UPDATE employee SET Name='"+req.body.Name+"', EmpCode='"+req.body.EmpCode+"',Salary="+req.body.Salary+" WHERE EmpID="+req.params.id;
    mysqlConnection.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });


 //delete an employee  api
app.delete('/employees/:id',(req, res) => {
    mysqlConnection.query('DELETE FROM employee WHERE EmpID = ?',[req.params.id],(err,rows,fields) =>{
        if(!err){
            res.send('Deleted');  
        }else {
            console.log(err)
        }

    })
  });
