
let dBconnection = require("../data/dbconnection");
const objectId = require("mongodb").ObjectID;

module.exports.mGamesDisplay = function(req, res) {

    const db = dBconnection.get();
    
    console.log("the db is ", db);
    const collection = db.collection("games");
    let offset = 0;
    let count = 4;

    if(req.query && req.query.offset && req.query.count) {

        let offset = parseInt(req.query.offset);
        let count = parseInt(req.query.count);
        if(count >8) {
            count=8;
        }

        collection.find().skip(offset).limit(count).toArray(function(err, docs) {
    
            console.log(docs);
    
            res.status(200).json(docs);
        })


       
    }
    else {


        collection.find().skip(offset).limit(count).toArray(function(err, docs) {
    
            console.log(docs);
    
            res.status(200).json(docs);
        })
       

       // res.status(200).json({"received":true});
    }

   

}