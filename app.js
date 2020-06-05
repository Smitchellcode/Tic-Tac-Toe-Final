let cells = document.querySelectorAll('.row > div');
let playerX = 'X';
let playerO = 'O';
let turn = 1;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)
}

function cellClicked(event) {
    if (turn == 1) {
        event.target.textContent = playerX;
        turn = 0;
    } else if (turn == 0) {
        event.target.textContent = playerO;
        turn = 1;
    }
    gameValidation()
}

function gameValidation() {
        if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {
            alert('Winner!')
        } else if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') {
            alert('Winner!')
        } else if (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {
            alert('Winner!')
        } else if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
            alert('Winner!')
        } else if (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {
            alert('Winner!')
        } else if (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
            alert('Winner!')
        } else if (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
            alert('Winner!')
        } else if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
            alert('Winner!')
        } else if (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
            alert('Winner!')
        } else if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
            alert('Winner!')
        } else if (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
            alert('Winner!')
        } else if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
            alert('Winner!')
        } else if (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
            alert('Winner!')
        } else if (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
            alert('Winner!')
        } else if (cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X') {
            alert('Winner!')
        } else if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
            alert('Winner!')
        } else if (cells[0].textContent !== '' && cells[1].textContent !== '' && cells[2].textContent !== '' && cells[3].textContent !== '' && cells[4].textContent !== '' && 
            cells[5].textContent !== '' && cells[6].textContent !== '' && cells[7].textContent !== '' && cells[8].textContent !== '') {
                alert('Draw!')
            }
}

function resetGame() {
    for (let j = 0; j < cells.length; j++) {
        cells[j].textContent = '';
        turn = 1;
    }
}
