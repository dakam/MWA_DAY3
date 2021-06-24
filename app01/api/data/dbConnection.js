const {MongoClient} = require("mongodb")

const dbName ="meanGames";
const dburl = "mongodb://localhost:27017/"+dbName;
var _connection = null;
module.exports.open= function() {
    MongoClient.connect(dburl, {useUnifiedTopology: true}, function (err, client) {
        if(err) {
            console.log("connection failed");
            return;
        }

        _connection = client.db(dbName);
        console.log("db conn opened", _connection);
    });
   
};

module.exports.get = function() {
console.log("conn=", _connection);
return _connection;
}

/* module.exports= {
    open: open,
    get : get
    }; */