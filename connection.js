const sql = require('mssql/msnodesqlv8')


var config={
    database:'testdb',
    server:'LAPTOP-IPGJQJPR\\SQLEXPRESS',
    driver:'msnodesqlv8',
    options:{
       trustedConnection:true 
    }
}
// connect to database
sql.connect(config,function(err){
    if(err){
        console.log(err);
    }
    // create the request object
    var request = new sql.Request();
    // database query
    request.query('select * from empTable',function(err,recordSet){
        if(err){
            console.log(recordSet);
            
        }
        console.log(request);
        console.log(recordSet);
        
    })
})