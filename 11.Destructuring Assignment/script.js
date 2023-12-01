// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Hasan',
    umur: '17',
    email:'akjdak@gmail.com'
}

function getIDMhs({ id }) {
    return id;
}

console.log(getIDMhs(mhs));