// Method Chaining
// Cari angka
// kalikan 3
// Jumlahkan

const hasil = angka.filter(a => a > 5) // 8, 9, 9
    .map(a => a * 3) // 24, 27, 27
    .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);