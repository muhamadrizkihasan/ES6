// Destructuring function arguments
const mhs1 = {
    nama: 'Hasan',
    umur: 11,
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 95
    }
}

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas} } ) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}
console.log(cetakMhs(mhs1));