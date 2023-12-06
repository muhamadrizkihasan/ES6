// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=aaa50647&s=dilan')
// xhr.send();

// Promise
// Object yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji(terpenuhi/ingkar)
// states(fulfilled/rejected/pending)
// callback(resolve/reject/finally)
// aksi(then/catch)

// Contoh
let ditepati = true;
const janji = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('Janji telah ditepati!');
    } else {
        reject('Ingkar Janji..');
    }
});

janji1
    .then(Response => console.log('OK! : ' + Response))
    .catch(Response => console.log('NOT OK!!! : ' + Response))
