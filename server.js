var levelup = require("levelup")
var leveldown = require("leveldown")

// 1) Create our database:
var db = levelup(leveldown("./mydb")

// 2) Put in a key and value
db.put("A", 123, function(error){
  if(error){
    return console.log("Error: ",error);
  }
  
  // 3) Get the key's value
  db.get("A",function(error,value){
    if(error){
      return console.log("Error: ",error);
    }
    console.log(value)
  });
  
});
