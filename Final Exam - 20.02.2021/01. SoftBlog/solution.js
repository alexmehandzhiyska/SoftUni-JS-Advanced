function solve() {
    let sectionEl = document.querySelector('main > section')
    let creatorEl = document.getElementById('creator')
    let titleEl = document.getElementById('title')
    let categoryEl = document.getElementById('category')
    let contentEl = document.getElementById('content')
    let btnEl = document.getElementsByTagName('button')[0]
    let archiveOlEl = document.getElementsByTagName('ol')[0]

    btnEl.addEventListener('click', e => {
        e.preventDefault()
        
        let title = titleEl.value;
        let btn1El = document.createElement('button')
        btn1El.classList.add('btn', 'delete')
        btn1El.textContent = 'Delete'

        let btn2El = document.createElement('button')
        btn2El.classList.add('btn', 'archive')
        btn2El.textContent = 'Archive'

        let divEl = document.createElement('div')
        divEl.classList.add('buttons')

        divEl.appendChild(btn1El)
        divEl.appendChild(btn2El)

        let h1El = document.createElement('h1')
        h1El.textContent = titleEl.value;

        let p1El = document.createElement('p')
        p1El.innerHTML = `Category: <strong>${categoryEl.value}</strong>`

        let p2El = document.createElement('p')
        p2El.innerHTML = `Creator: <strong>${creatorEl.value}</strong>`

        let p3El = document.createElement('p')
        p3El.textContent = contentEl.value;

        let articleEl = document.createElement('article')
        articleEl.appendChild(h1El)
        articleEl.appendChild(p1El)
        articleEl.appendChild(p2El)
        articleEl.appendChild(p3El)
        articleEl.appendChild(divEl)

        sectionEl.appendChild(articleEl)

        btn1El.addEventListener('click', e => {
            articleEl.remove()
        })

        btn2El.addEventListener('click', e => {
            let liEl = document.createElement('li')
            liEl.textContent = title
            archiveOlEl.appendChild(liEl)

            let allLis = Array.from(archiveOlEl.children);
            allLis.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => {
                archiveOlEl.appendChild(li)
            })
            articleEl.remove()
        })
    })
}
