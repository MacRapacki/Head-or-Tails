const head = document.querySelector('.heads')
const tail = document.querySelector('.tails')
const choice = document.querySelector('p span.choice')

const headBtn = () => {
    choice.innerHTML = 'Heads'
}

const tailBtn = () => {
    choice.innerHTML = 'Tails'
}

head.addEventListener('click', headBtn)
tail.addEventListener('click', tailBtn)

///////////////////////////////////////////

const playBtn = document.querySelector('.play')
const winNumber = document.querySelector('p.win span')
const losNumber = document.querySelector('p.lost span')
const totalGames = document.querySelector('p.total span')

const arr = ['Heads', 'Tails']


const winCheck = () => {
    const indexNumber = (Math.floor(Math.random() * arr.length));
    if (choice.innerHTML === '') {
        alert('Choose Your coin side')
    } else if (choice.innerHTML === arr[indexNumber]) {
        totalGames.innerHTML++;
        winNumber.innerHTML++;
        choice.innerHTML = '';

    } else {
        totalGames.innerHTML++;
        losNumber.innerHTML++;
        choice.innerHTML = '';

    }
}

playBtn.addEventListener('click', winCheck)