// Synchrounous Callback
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama : ');
//     callback(nama);
// }
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }
// getDataMahasiswa('data/mahasiswa.json', result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
//
// });

// JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    Error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');