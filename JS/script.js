//..Chiedo all’utente il suo nome

let nome = prompt('Inserisci il tuo nome');

//..Chiedo il cognome utente

let sourname = prompt('Inserisci il tuo cognome');

//..Chiedo il  colore preferito

let colour = prompt('Inserisci il tuo colore preferito');

//..Password generator

let passwordPC = nome + sourname + colour;

document.getElementById('mio_id').innerHTML = `La tua nuova password è ${passwordPC}`;