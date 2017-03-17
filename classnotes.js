var note = {
    link: 'http:'
}
var isImage = false

if (note.link.slice(-4) === '.gif' || ) {
    isImage = true
}

<Layout>
{isImage ? <img src={note.link} /> : <a href={note.link} className}
</Layout>

