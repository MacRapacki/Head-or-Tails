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
const resultInfo = document.querySelector('p.result')


const arr = ['Heads', 'Tails']


const winCheck = () => {
    const indexNumber = (Math.floor(Math.random() * arr.length));
    if (choice.innerHTML === '') {
        alert('Choose Your coin side')
    } else if (choice.innerHTML === arr[indexNumber]) {
        totalGames.innerHTML++;
        winNumber.innerHTML++;
        resultInfo.innerHTML = `You  chosen ${choice.innerHTML} and coin show ${arr[indexNumber]}. You win!`
        choice.innerHTML = '';
    } else {
        totalGames.innerHTML++;
        losNumber.innerHTML++;
        resultInfo.innerHTML = `You  chosen ${choice.innerHTML} and coin show ${arr[indexNumber]}. You Lost!`
        choice.innerHTML = '';
    }
}

playBtn.addEventListener('click', winCheck)