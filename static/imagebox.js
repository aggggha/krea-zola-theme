document.addEventListener('DOMContentLoaded', function () {
    // Image viewer
    imgElems.forEach(img => {
        img.addEventListener('click', function () {
            imageBoxElement.classList.add('visible');
            imageBoxElement.children[1].children[0].setAttribute('src', this.getAttribute('src'));
            imageBoxElement.children[1].children[0].setAttribute('alt', this.getAttribute('alt'));
            // imageBoxElement.children[1].children[1].innerHTML = this.parentElement.lastElementChild.innerHTML;
            document.querySelector('body').classList.add('no-overflow');
        });

        // close imageBox
        imageBoxElement.firstElementChild.addEventListener('click', function () {
            this.parentElement.classList.remove('visible');
            document.querySelector('body').classList.remove('no-overflow');
        });
    });
})