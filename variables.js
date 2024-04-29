/* les types des variables*/

//variable modifiable 
    let a = 3;
    a=4;

//variable non modifiable
    const b=5;

// chaine de carractéres 
    // single cote
    const d = 'salut';
    //double cote
    const c ="les gents";
    //les backtick
    const result = `${d} ${c}`;

//boolean
    isPerson=true;

//array
    const notes=[12,13.5,3,'hello',[1,2,3]];

//object
    const person={
        name:'Fatima zahra ',
        tel:'09653253',
        note:[8,7,9],
        job:{
            title:'developer',
            company:null
        },
        'les gens':3,//lorsque la variable contient des espaces
        [result]:3//ajouter une variable comme clef
    }