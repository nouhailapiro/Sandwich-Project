document.addEventListener('DOMContentLoaded', function () {
    const toppings = document.querySelectorAll('.draggable');
    const breadContainer = document.querySelector('.breadcontainer');
    const resetButton = document.getElementById('r');

    toppings.forEach(topping => {
        topping.addEventListener('dragstart', dragStart);
        topping.addEventListener('dragend', dragEnd);
    });

    breadContainer.addEventListener('dragover', dragOver);
    breadContainer.addEventListener('dragenter', dragEnter);
    breadContainer.addEventListener('dragleave', dragLeave);
    breadContainer.addEventListener('drop', drop);

    resetButton.addEventListener('click', resetPage);
});

function dragStart() {
    this.classList.add('dragging');
}

function dragEnd() {
    this.classList.remove('dragging');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function drop(e) {
    e.preventDefault();
    const draggingTopping = document.querySelector('.dragging');

    if (draggingTopping) {
        const rect = this.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        draggingTopping.style.position = 'absolute';
        draggingTopping.style.left = offsetX - draggingTopping.clientWidth / 2 + 'px';
        draggingTopping.style.top = offsetY - draggingTopping.clientHeight / 2 + 'px';

        this.appendChild(draggingTopping);
    }
}

function resetPage() {
    location.reload(); 
}