var app = document.getElementById('app');
var year = new Date().getFullYear();

// asking user to insert: name, surname, favorite color
var name = prompt('Qual è il tuo nome?');
var surname = prompt('Qual è il tuo cognome?');
var color = prompt('Qual è il tuo colore preferito?');

// print everything on html
app.innerHTML = '<h1>Ciao ' + name + ' ' + surname + '!</h1>';
app.innerHTML += '<h2>La tua insicurissima password generata è:<br>' + name + surname + color + year + '</h2>';
