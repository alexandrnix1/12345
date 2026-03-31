document.querySelectorAll('button[data-group]').forEach(button => {
    button.onclick = event => {
        document.querySelectorAll('.page').forEach(Element =>{
            console.log(Element)
            Element.classList.toggle('show');
        })
    }
})