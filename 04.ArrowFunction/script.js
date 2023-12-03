let mahasiswa = ['Rizki', 'Hasan', 'Ikyy'];

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));
console.log(jumlahHuruf);