let questions = document.querySelectorAll('.heading');

for (const element of questions) {
    element.addEventListener('click', expandQuestion);
}

function expandQuestion(e) {
    e.target.closest("li").classList.toggle('collapsed');
}