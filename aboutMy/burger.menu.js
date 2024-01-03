document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.burger').addEventListener('click', function () {
        this.classList.toggle('active');
        document.querySelector('.menu_item').classList.toggle('open');
    });
});
