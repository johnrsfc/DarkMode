const darkToggle = document.querySelector('#toggle');

darkToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

