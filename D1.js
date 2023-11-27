/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
// Stringhe, caratteri alfanumerici, unico calcolo possibile addizione in quanto altre operzioni disponibili solo con numeri
let prima = "prima stringa";
let seconda = "indicherà il tuo nome";
let stringa = prima + " " + seconda;
let stringaSottrazione = prima - seconda;
console.log("VALORE STRINGHE", stringa);
console.log("STRINGA PRIMA MENO STRINGA SECONDA,NaN", stringaSottrazione);
// Valori booleani, binari, vero o falso
let num1 = 1;
let num2 = 7;
let num3 = 9;
console.log("1 MINORE DI 7", num1 < num2);
console.log("9 MINORE DI 7", num3 <= num2);
// Numeri, variabile con stesso nome assumerà valore di ultima variabile
let num = 10;
num = 7;
num = num + 5;
num2 = num - 2;
console.log("SOMMA", num);
console.log("SOTTRAZIONE", num2);
// Null, valore di stringa è nullo, è presente un valore nullo in quella variabile (dopo = non viene assegnato nessun valore)
let niente = null;
console.log("VALORE NULLO", niente);
// Undefinded, nome di stringa non assegnato affatto (esempio: let = 5 o let = "ciao")
let nonDefinito = undefined;
console.log("VALORE UNDEFINED", nonDefinito);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let nome = "Alessandro";
console.log("NOME", nome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let somma = 12;
somma = somma + 20;
console.log("SOMMA 12 + 20", somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log("VALORE X", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
let nome1 = "Alessandro";
nome1 = "Perri";
console.log("NOME DIVENTA COGNOME", nome1);
// const prova = 5;
// const prova = 10;
// console.log("CONST NON PUò CAMBIARE DI VALORE", prova);     ERRORE

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
x = x - 4;
x2 = 4 - x;
console.log("12 - 4", x);
console.log("4 - 8", x2);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "jhon";
let name2 = "Jhon";
name3 = name1 !== name2;
name4 = name1 === name2;
console.log("jhon DIVERSO DA Jhon", name3);
console.log("jhon UGUALE A Jhon", name4);
console.log(
  "DIVENTERANNO UGAULI SE ENTRAMBI SARANNO SCRITTI CON LA LETTERA MAIUSCOLA",
  name1 !== name2 && name2 === name2
);
let sonoUguali = name1.toLowerCase() === name2.toLocaleLowerCase();
console.log(
  "UGUALI SE TRASFORMATI CON L'INIZIALE MINUSCOLA (o maiuscola)",
  sonoUguali
);

/* SCRIVI QUI LA TUA RISPOSTA */
