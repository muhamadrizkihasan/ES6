// for..of
// Bisa melooping string
const nama = 'kiki';

for (const n of nama) {
    console.log(n);
}

// for..in
// Bisa melooping object
const mhs = {
    nama: 'kiki',
    umur: 11,
    email: 'djandjan@gmail.com'
}

for (m in mhs) {
    console.log(mhs[m]);
}