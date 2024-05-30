    // Tab js part
    // Selectors
    let tabs = document.querySelectorAll('.tab__header li a');
    tabs.forEach((v) => {
        v.addEventListener('click', function (e) {
            e.preventDefault();
            click.play();

            tabs.forEach((v) =>{
                v.classList.remove('active__a');
                v.parentElement.classList.remove('active__border');
                document.querySelector((v.getAttribute('href'))).classList.remove('tab__body__show');
            })

            this.classList.add('active__a');
            this.parentElement.classList.add('active__border');
            document.querySelector((this.getAttribute('href'))).classList.add('tab__body__show');
        })
    })

    let click  = new Audio();
    click.src = './click.wav';

// Accordion task
// Selectors
let accordionQuestions = document.querySelectorAll('.accordion__question');

accordionQuestions.forEach( function (v)  {
    v.addEventListener('click', function(e)  {

        let clearAnswers = document.querySelectorAll('.accordion__answer');
        clearAnswers.forEach(function(v) {
            v.classList.remove('show__answer');
        })

        click.play();
        this.parentElement.querySelector('.accordion__answer').classList.add('show__answer');
    })
})