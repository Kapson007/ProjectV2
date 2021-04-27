
class WordPack{
    constructor(pos, pol){
        this.polish = pol;
        this.posen = pos;
    }
    
};

const containerOfWords = new Array();
        const fs = require('fs');
        let text = fs.readFileSync("file.txt", 'utf-8');
        let textByLine = text.split('\n');
        textByLine.forEach(e =>{
            let x = e.split('-');
            // console.log(`${x[0]} -${x[1]}`);
            containerOfWords.push(new WordPack(x[0], x[1]));
            
            // console.log(x);
        });
console.log(containerOfWords);
let jsonArr = JSON.stringify(containerOfWords);

fs.writeFile ("input.json", jsonArr, function(err) {
            if (err) throw err;
            }
);

