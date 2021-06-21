const character = document.getElementById('character');
const block = document.getElementById('block');
const game = document.getElementById('game');

window.addEventListener('keydown', jump);

function jump(e) {
    if(e.keyCode === 32 && character.classList != 'animate'){
        character.classList.add('animate')
    }
    setTimeout(() => {
        character.classList.remove('animate')
    }, 500);
};

const checkDead = setInterval(() => {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('You lost!');
    }
}, 10);
