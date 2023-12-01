// Highlight
const nama = 'Hasan';
const umur = 16;
const email = 'muhamadrizkihasan@smkwikram.sch.id';

function Highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = Highlight `Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;

document.body.innerHTML = str;