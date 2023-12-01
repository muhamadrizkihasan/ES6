// Conditionals
// ternary
const lagu = {
    judul: 'Bolu ubi',
    penyanyi: 'dimas ukin',
    feat: 'jajang',
}

const el = `<div class="lagu">
<ul>
    <li>${lagu.penyanyi}</li>
    <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
</ul>
</div>`;

document.body.innerHTML = el;