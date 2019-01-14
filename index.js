const alphabets = {
    A : 'aaaaa', 
    B : 'aaaab', 
    C : 'aaaba', 
    D : 'aaabb', 
    E : 'aabaa', 
    F : 'aabab', 
    G : 'aabba', 
    H : 'aabbb', 
    I : 'abaaa', 
    J : 'abaaa', 
    K : 'abaab', 
    L : 'ababa', 
    M : 'ababb', 
    N : 'abbaa', 
    O : 'abbab', 
    P : 'abbba', 
    Q : 'abbbb', 
    R : 'baaaa', 
    S : 'baaab', 
    T : 'baaba', 
    U : 'baabb', 
    V : 'baabb', 
    W : 'babaa', 
    X : 'babab', 
    Y : 'babba', 
    Z : 'babbb'  
};


let words = process.argv[2];
let wordArr = words.split(" ");

let noOfWords = process.argv[3];

function encoder(word) {
    let resultArr = [];

    wordArr.forEach(word => {
        for (var i=0; i<word.length; i++){
            for (let element in alphabets){
                if (element === word[i].toUpperCase()) {
                    resultArr.push(alphabets[element]);
                }
            }
        }
        resultArr.push(" ");
    });
    console.log(resultArr.join(" "));
}

encoder(wordArr);


