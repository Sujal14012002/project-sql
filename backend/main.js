// const express = require("express");
// const mysql = require("mysql2");
// const app = express();
// const cors = require('cors');
// app.use(cors()); 



// app.use(express.json());


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Sujal@14012002',
//     database: 'coding_school'
// });


// connection.connect((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Connected to the database");
//     }
// });





// app.post('/post', (req, res) => {
//     console.log("Received body:", req.body); 
    

//     const { name, email, mobile,zipcode,Adress,password,city,state,counrty } = req.body;
    

//     connection.query(


//         'INSERT INTO schoolingdata (name, email, mobile,zipcode,Adress,password,city,state,counrty) VALUES (?, ?, ? , ?, ?, ?, ?, ?, ?)',
//         [name, email, mobile,zipcode,Adress,password,city,state,counrty],

//         (err, result) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send('Error inserting data');
//             }
//             res.send("Data POSTED successfully");

            
//         }
//     );
// });



// app.listen(3000, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Server running on port 3000");
//     }
// });





const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sujal@14012002",
  database: "coding_school",
});

connection.connect((err) => {
  if (err) {
    console.error(" Database connection failed:", err);
  } else {
    console.log(" Connected to MySQL database");
  }
});


app.get('/users', (req, res) => {
  connection.query('SELECT * FROM schoolingdata', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});










app.post("/post", (req, res) => {
  const {
    name,
    email,
    mobile,
    zipcode,
    Adress,
    password,
    city,
    state,
    counrty,
  } = req.body;

  const query = "CALL InsertStudentData(?, ?, ?, ?, ?, ?, ?, ?, ?)";

  connection.query(
    query,
    [name, email, mobile, zipcode, Adress, password, city, state, counrty],
    (err, result) => {
      if (err) {
        console.error(" Error inserting data via SP:", err);
        return res.status(500).send("Error inserting data via stored procedure");
      }
      res.send(" Data inserted via stored procedure!");
    
    }
  );
});

app.listen(3000, () => {
  console.log(" Server running on http://localhost:3000");
});


