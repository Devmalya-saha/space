(function () {
    let rocketpieces = document.querySelectorAll('.second div')
    let rocket = document.querySelector('.desc')
    let trigger = window.innerHeight / 5;
    let rocketoffsettop = rocket.offsetTop;
    document.addEventListener('scroll', (e) => {
        if(window.scrollY > (rocketoffsettop - trigger)) {
            rocketpieces[0].classList.add('active');
            rocketpieces[1].classList.add('active');
            rocketpieces[2].classList.add('active');
        }
    });
}())