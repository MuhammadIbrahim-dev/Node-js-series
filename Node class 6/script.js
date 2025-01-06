
// show file listing
const fs =require('fs');
const path = require('path');
const dirpath =path.join(__dirname, 'files');

for(i=0; i <=10; i++) {
    fs.writeFileSync(dirpath + `/files${i}.text` , `this ${i}file is creted`, (err) => {
        if(err) {
            console.log(err);
        }else{
            console.log("your file is successfully created");
            
        }
    }
)

    
}
fs.readFile('demo.txt','utf-8',(err,files)=> {
    console.log(files);
        
       })

