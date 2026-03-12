const fs=require('fs');
fs.writeFileSync("sample.txt","hello world..!");
console.log("file created");
const data=fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error occured");
        console.log(err);
    }else{
        console.log("file content");
        console.log(data);
    }
});
