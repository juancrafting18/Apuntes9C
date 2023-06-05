const menuIcon = document.querySelector('.menu-icon');
const menuSubjects = document.querySelector('.menu-subjects');
menuIcon.addEventListener('click', openMenuSubjects); 
function openMenuSubjects(){
    menuSubjects.classList.toggle('inactive');
}
const subjectsPages = document.querySelector('subjects-push');
