// CRUD file system   STAND FOR  CREATE READ UPDATE DELETE

const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname ,'filefolder')
const filepath = `${dirpath}/text.txt`
// create file
// fs.writeFileSync(filepath,'this file is created',(err)=> {
//     if(err) {
//         console.log(err);
        
//     }
// })

// REad file
// fs.readFile(filepath,'utf-8',(err,file)=>{
//     console.log(file);
    
// })

// file text updated
// fs.appendFile(filepath,'on js',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log('file successfully updated');
        
//     }
    
// });
// file name update
// fs.rename(filepath,`${dirpath}/update.txt`,(err) => {
//     if(err) {
//         console.log(err);
        
//     }
// });

// Delete file
// fs.unlinkSync(`${dirpath}/update.txt`,(err)=>{
//     if(err){
//         console.log(err);
        
//     }
// })






