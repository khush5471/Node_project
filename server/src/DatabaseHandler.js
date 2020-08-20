var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "tp_music",
  
  
});
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM  playlist ", function (err, result) {
      if (err) throw err;
      console.log(result);

      result.forEach(row => {
        console.log(`from not ${row.title}  ${row.id}`);

      });
    });
    
  });

   function getCatagoryList(request,response){
        var resultantArray = [];

        console.log("in category")
         con.query("SELECT * FROM  playlist ", function (err, result) {
            console.log("step 1");

            if (err) throw err;
            if (err) {
              response.json({
                error: 404
              })
              return
            }
            // console.log(result);
      
            result.forEach(row => {
            //   console.log(`"from method "${row.title}  ${row.id}`);

              resultantArray.push({"id": row.id, "title": row.title});
              // console.log("step 2");

              // console.log("TSETS ", resultantArray[0])

                
            });
            response.json
          });

    
    console.log("step 3");
    
    console.log("***********",resultantArray)
    // response.contentType('application/json');
    // response.send(JSON.stringify(resultantArray));


    // response.json(resultantArray);

    setTimeout(() => {
        console.log("*******IN TIME OUT****",resultantArray)
        response.json(resultantArray);
    }, 3000);

  }

// console.log("start test databse")

 function insertData(req,res){
  console.log("i am  tryitng to add into database")
  if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    console.log(req.body.title)
    // Create a Track
    const track = {
      t_id: req.body.id, 
      t_title: req.body.title ? req.body.title: "null" ,
      t_uri: req.body.uri? req.body.uri: "null",
      t_master_id: req.body.master_id ? req.body.master_id :101,
      t_playlist_id: req.body.playlist_id ? req.body.playlist_id :101,
      t_thumb: req.body.thumb ? req.body.thumb :"null"
    };
   const sql= "INSERT INTO track (playlist_id, title, uri, master_id) VALUES ("+track.t_playlist_id+",'"+track.t_title+"','"+track.t_uri+"',"+track.t_master_id+")";
   con.query(sql, function (err, result) {                                        
        if (err) throw err;
        console.log(result)
       // response.send(JSON.stringify(result))
       // response.send(result)
      });
}

module.exports={
    getCatagoryList,
    insertData
}