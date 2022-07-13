const express = require("express");
var bodyparser = require("body-parser");
const sql = require("mssql");

const cors =  require("cors");

const app = express();
app.use(bodyparser.urlencoded({extended:false}))

app.use(cors());
app.use(express.json());


   

    // config for your database
var config = {
        user: 'tweshin24',
        password: 'tweshin*24',
        server: 'server-tb.database.windows.net', 
        database: 'demodb' 
    };

    
sql.connect(config, function (err) {
    if (err){
        console.log(err);
    } 
    // else{

    //     console.log("connected");
    //     var request = new sql.Request();
           
    //     // query to the database and get the records
    //     request.query("INSERT INTO registration (name,password) VALUES ('tweshin', 'tweshin')", function (err, recordset) {
            
    //         if (err) console.log(err)

    //         // send records as a response
    //         console.log(recordset);
    // });
    // };
    
    
});



app.post('/register', (req, res) => {
    
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    console.log("username : ",username)
    console.log("usernames : ",email)
    // var s = "INSERT INTO registration (name,password) VALUES (?,?)";
    // sql.query(s,(username,password), function(err, rows, fields) {
    // });
    sql.query(`INSERT INTO registration (username,email,password) VALUES ('${username}','${email}','${password}')`,(err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("result : ",result);
    console.log("r : ",result.recordset);
    res.send(result);
      };
});
});

app.get('/login',(req,res) => {
    var email = req.body.email;
    console.log("login");
    
    sql.query(`SELECT * FROM registration WHERE email = '${email}'`,(err,result) => {
        if(err){
            console.log(err)
        }
        else{
        console.log(result);
        res.send(result);
        }
    })
})


app.post('/certificate', (req, res) => {
    
    var name = req.body.certname;
    var id = req.body.certid;
    var email = req.body.certmail;
    console.log("username : ",name);
    sql.query(`INSERT INTO certfication (certname,certid,email) VALUES ('${name}','${id}','${email}')`,(err, result) => {
  if (err) {
    console.log(err);
  } else {
      res.send(result);
      };
});
});

// app.get('/getdisplay',(req,res) => {
//     const email = req.body.mail;
//     sql.query(`SELECT * FROM certication WHERE email = '${mail}'`,(err,result) => {
//         if(err){
//             console.log(err)
//         }
//     })
// })

app.post('/display',(req,res) => {
    var email = req.body.email;
    console.log("success");
    console.log("cert mail : ",email);
    sql.query(`SELECT * FROM certfication  WHERE email = '${email}'`,(err,result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("sent");
            res.send(result);
        }
    });
})
app.post('/delete/:id',(req,res) => {
    const id = req.params.id
    sql.query(`DELETE FROM certfication WHERE certid = '${id}'`, (err,result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})



var server = app.listen(5000, function () {
    console.log('Server is running..');
});
