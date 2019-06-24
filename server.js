var levelup = require('levelup')
var leveldown = require('leveldown')

// 1) Create our database
var db = levelup(leveldown("./mydb"))

// 2) Put in a key and value
db.put("A", 123, function (err) {

  if(err){return console.log("Error: ",error);}

  // 3) Get the key's value
  db.get("A", function (err, value) {
    if(err){return console.log("Error: ",error);}
    
    console.log('' + value) //FOR SOME REASON, YOU NEED A STRING+VALUE OR ELSE IT RETURNS A <BUFFER> THING
  })
})
