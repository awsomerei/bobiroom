const h_men = document.querySelector('.men');
const h_women = document.querySelector('.women');
const l_men = document.querySelector('.menu_men');
const l_women = document.querySelector('.menu_women');

h_men.addEventListener('mouseover', () => {
    l_men.classList.toggle('active');
});
h_men.addEventListener('mouseout', () => {
    l_men.classList.toggle('active');
});
h_women.addEventListener('mouseover', () => {
    l_women.classList.toggle('active');
});
h_women.addEventListener('mouseout', () => {
    l_women.classList.toggle('active');
});