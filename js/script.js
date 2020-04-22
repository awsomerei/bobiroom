const h_men = document.querySelector('.men');
const h_women = document.querySelector('.women');
const l_men = document.querySelector('.menu_men');
const l_women = document.querySelector('.menu_women');

h_men.addEventListener('click', () => {
    l_men.classList.toggle('active');

});

h_women.addEventListener('click', () => {
    l_women.classList.toggle('active');
});