
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const menu = document.querySelector(".menu-screen")
const audio = new Audio('images/audio_theme.mp3')
const audioGameOver = new Audio('images/audio_gameover.mp3')

audio.play()

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval (() => {

    console.log ('loop')

    const  pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); 
    if (pipePosition <= 120 && pipePosition > 0  && marioPosition < 80) {
        
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;  

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`;  

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        audio.pause()
        audioGameOver.play()
        GameOver()


        clearInterval(loop);
    }
    

}, 10)

const GameOver = () => {
    direction = undefined
    menu.style.display = "flex"
}


document.addEventListener('keydown', jump); 

