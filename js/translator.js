'use strict';
class WordPack{
    // polish = '';
    // posen = '';
    constructor(pos, pol){
        
        this.posen = pos;
        this.polish = pol;
    }
    // getPolish(){
    //     return this.polish;
    // }
    // getPosen(){
    //     return this.posen;
    // }
};

class Dictionary{
    containerOfWords = new Array();
    constructor(){
        
        fetch('./js/input.json')
        .then(response => {
            if(response.status !== 200){
                throw Error('This is not an answer!');
            }else{
                return response.json();
            }
        })
        .then(data => {
            console.log(data);
            data.forEach(x =>{
                this.containerOfWords.push(new WordPack(x.posen, x.polish));

                // console.log(`${x.polish} - ${x.posen}`);
            });
            // this.showWords(json.results);
            // console.log(data.pole);
            // containerOfWords.forEach(word => {
            //     console.log(word);
            // });
            // console.log(json);
        })
        .catch(err => console.log(err))
        // document.getElementById('')
        // console.log(containerOfWords);
        // containerOfWords.forEach(e =>{
        //     console.log(`${e.polish} - ${e.posen}`);
        // });
    }
    toPosen(toSearch){
        // this.containerOfWords.forEach(x =>{
        //     // console.log(`${x.polish} - ${x.posen}`);
        //     if(toSearch === x.polish){
        //         console.log(`${x.posen}`);
        //         return 0;
        //     }else{
        //         console.log('Nie znaleziono');
        //     }
        // })
        try{
            for(let i = 0; i<this.containerOfWords.length; ++i){
                if(this.containerOfWords[i].polish === toSearch.trim().toLowerCase()){
                    return this.containerOfWords[i].posen;
                }
            }
            throw "Brak frazy";
        }catch(err){
            return err;
        }
    }

    toPolish(toSearch){
        
        try{
            for(let i = 0; i<this.containerOfWords.length; ++i){
                if(this.containerOfWords[i].posen === toSearch.trim().toLowerCase()){
                    return this.containerOfWords[i].polish;
                }
            }
            throw "Brak frazy";
        }catch(err){
            return err;
        }
    }

};

const x = new Dictionary();




const search = document.querySelector('#submit');
search.addEventListener('click', (e)=>{
    e.preventDefault();
    const poland = document.querySelector('.pole');
    const poz = document.querySelector('.posen');
    console.log(poland.value);
    console.log(poz.value);
    if(poz.value !== ""){
        let result = x.toPolish(poz.value);
        poland.value = result;
    }
    if(poland.value !== ""){
        let result = x.toPosen(poland.value)
        poz.value = result;
    }
    
    // console.log(result);
    // poz.value = result;
});


