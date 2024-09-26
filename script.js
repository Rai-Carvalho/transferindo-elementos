const caixa1 = document.querySelector('.caixa1')
const caixa2 = document.querySelector('.caixa2')
const cursos = document.querySelectorAll('.cursos')
const btn = document.getElementsByTagName('button')[0]

cursos.forEach(curso => {
    curso.addEventListener('click', (event) => {
        let elementoClicado = event.target
        elementoClicado.classList.toggle('selected')
        
    })
})

btn.addEventListener('click', () => {
    const selected = document.querySelectorAll('.selected')
    selected.forEach(select => {

        if(caixa1.contains(select)){
            caixa2.appendChild(select)
        }else{
            caixa1.appendChild(select)
        }    
        select.classList.remove('selected')
    })
})
