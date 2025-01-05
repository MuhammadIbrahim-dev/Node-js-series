const fs =require('fs');
const path = require('path');
const dirpath =path.join(__dirname, 'files');

for(i=0; i <=10; i++) {
    fs.writeFileSync(dirpath + `/files${i}.text` , `this ${i}file is creted`, (ess) => {
        if(ess) {
            console.log(ess);
        }
    })
}