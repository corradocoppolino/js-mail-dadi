// mail

// creo un vettore pieno di mail

var arrayemail = [
    "paolodondo@gmail.com",
    "giuseppeSimona@gmail.com",
    "martinaciao@gmail.com",
    "giovannicasa@gmail.com",
    "annabue@gmail.com",
    "francescahola@gmail.com",
    "antoniocane@gmail.com",
    "filippognam@gmail.com",
    "caterinabo@gmail.com",
    "alessandraxxoxx@gmail.com"
];

// faccio inserire una mail all'utente

var inserisci = prompt("Inserisci la tua email");

// ciclo for per caricare il vettore
  
for(var i = 0; i < arrayemail.length; i++){
    var email = arrayemail[i];
    console.log(email);

    // if per vedere se la mail è registrata

    if(inserisci === email){
        document.getElementById("output").innerHTML="La tua mail è registrata";
        break;
    }else{
        document.getElementById("output").innerHTML="La tua mail non è registrata";
    }
}
  
  
  
  

// dadi

// math random sia per il giocatore che per il computer

var giocatore = Math.ceil(Math.random()*6);
console.log(giocatore);

var computer = Math.ceil(Math.random()*6);
console.log(computer);

// numeri estratti a schermo

document.getElementById("estrattogiocatore").innerHTML="Hai estratto il numero: " + giocatore;
document.getElementById("estrattocomputer").innerHTML="Il computer ha estratto il numero: " + computer;

// if per vedere chi vince

if(giocatore > computer){
    document.getElementById("dadi").innerHTML="Hai vinto"
}else if(giocatore === computer){
    document.getElementById("dadi").innerHTML="Hai pareggiato"
}else{
    document.getElementById("dadi").innerHTML="Hai perso"
}

