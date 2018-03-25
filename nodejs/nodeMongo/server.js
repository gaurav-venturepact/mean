var MongoClient = require('mongodb').MongoClient;

//create database named mydb

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("mydb");

    // Create Collection

  /*  dbo.createCollection("customers",function(err, res){
        if (err) throw err;
        console.log("Collection created");
        db.close();
    }); */

    // Insert into customers collection

   /* var myObj = {name: "Gaurav", address: "Jalandhar"}; 
    dbo.collection("customers").insertOne(myObj, function(err, res){
        if (err) throw err;
        console.log("1 Document inserted");
        db.close();
    }); */

    // Multiplayer data insert into collection

   /* var myObj = [
        { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
    ]; 
    dbo.collection("customers").insertMany(myObj, function(err, res){
        if (err) throw err;
        console.log(res);
        console.log("Number of documents inserted: "+ res.insertedCount);
        db.close();
    }); */

    // Find One Method -> Select data from a collection in mongoDB

    /* dbo.collection("customers").findOne({}, function(err, result){
        if (err) throw err;
        console.log(result.name);
        db.close();
    }); */

    // Find all result

    /* dbo.collection("customers").find({},{ address: 0 }).toArray(function(err, result){
        if (err) throw err;
        for (var i = 0; i < result.length; i++){
            console.log(result[i].name);
        }
        db.close();
    }); */

    // Filter the result

    //var query = {address: "Park Lane 38"}; // find by query
  /*  var query = {address: /^S/}; // find by Regular Expression
    dbo.collection("customers").find(query).toArray(function(err, result){
        if (err) throw err;
        console.log(result);
        db.close();
    }); */

    // Delete one Document

   /* var myquery = { address: "Mountain 21" };
    dbo.collection("customers").deleteOne(myquery, function(err, result){
        if (err) throw err;
        console.log("1 document deleted");
    }); */

    // Update Query

    /* var myquery = { address:'Valley 345' };
    var newvalues = {$set: {name: "Gaurav Karda", address: "Jalandhar"}};

    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res){
        if (err) throw err;
        console.log(res);
        console.log("1 document updated");
        db.close();
    }); */

    // Limit the documents

    dbo.collection("customers").find().limit(5).toArray(function(err, gaurav){
        if (err) throw err;
        console.log(gaurav);
        db.close();
    }); 
});