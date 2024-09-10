const {MongoClient}=require('mongodb');
// const url ="mongodb+srv://vermaritik360:Ritik9812@cluster0.rsluyk1.mongodb.net/triptasc";
const url ="mongodb+srv://12114054:y4hDFkQqHI2TpaKr@cluster0ni.eun2g.mongodb.net/";

const client=new MongoClient(url);
const dbname="allusers";
async function getData()
{
 const result=await client.connect();
 const db=result.db(dbname);
 if(result)
 {
  
    console.log("success");
 }
 return db;
} 
getData();
module.exports = getData;