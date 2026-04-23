const elInput = document.querySelector('.input')
const elBoxes = document.querySelector('.boxes')

const show = (personage) => {
    elBoxes.innerHTML = personage.map(per => `<div class="box">
        <span class="queue">${per.id}</span>
        <img src="${per.img}" class="pic">
        <h2 class="name">${per.name}</h2>
        <ul>
            ${per.weaknesses.map(weak => `<li class="list">${weak}</li>`).join('')}
        </ul>
    </div>`).join('')
}

show(pokemons)

elInput.addEventListener('input', () => {
    let t = elInput.value.trim()

    const searched = pokemons.filter(per => per.name.toLowerCase().includes(t))

    show(searched)
})