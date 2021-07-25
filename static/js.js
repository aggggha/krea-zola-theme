const loadMoreBtn = document.querySelector('.load-more-btn');
const homeLayoutContainer = document.querySelector('.home-layout');
const codeWithLineElem = document.querySelectorAll('code table tr');
const imgElem = document.querySelectorAll('article img');
const imageBoxElement = document.querySelector('.imagebox');

window.addEventListener('DOMContentLoaded', function () {
    // Surrounding img into figure for better accessibility
    imgElem.forEach(img => {
        console.log(img);
        let createFigure = img.parentElement;
        if (createFigure.tagName !== 'FIGURE') {
            if (createFigure.tagName !== 'ARTICLE') {
                createFigure.outerHTML = `
                    <figure>
                        ${img.outerHTML}
                        <figcaption>${img.getAttribute('alt')}</figcaption>
                    </figure>
                `;
            } else {
                img.outerHTML = `
                    <figure class='${img.getAttribute('class')}'>
                        ${img.outerHTML}
                        <figcaption>${img.getAttribute('alt')}</figcaption>
                    </figure>
                `;
            }
        }
        img.classList.remove(img.getAttribute('class'));


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

    // Trimming code for better syntax highlight line
    codeWithLineElem.forEach((item, index) => {
        item.childNodes.forEach(child => {
            child.innerText === "\n" && item.remove();
            let startFrom = parseInt(codeWithLineElem[0].firstElementChild.innerHTML);
            item.firstElementChild.innerHTML = startFrom + Math.round(index / 2);
        }); // Trimming
    });
    
    // Load more button function on home
    let page = 2;
    let i = 2;
    let currentPager;
    let postUrl = loadMoreBtn.getAttribute('href');
    const totalPages = Math.round(loadMoreBtn.getAttribute('data-total-page'));
    if (postUrl === '') loadMoreBtn.remove();

    loadMoreBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        currentPager = postUrl.indexOf('/', window.location.href.length + 1); // get the last slash '/' index after '/page'
        postUrl = `${postUrl.substring(0, currentPager)}/${page}/`;
        loadMoreBtn.setAttribute('href', `${postUrl.substring(0, currentPager)}/${++i}/`)

        if (page === totalPages) loadMoreBtn.remove();


        xhr.onreadystatechange = function () {
            if (xhr.readyState === 3) {
                // TODO when loading
            } else if (xhr.readyState === 4) {
                const children = xhr.response.querySelectorAll('.inner');
                for (let i = 0; i < children.length; i++) {
                    homeLayoutContainer.append(children[i]);
                }
            }
        };

        xhr.open('GET', postUrl);
        xhr.responseType = 'document';
        xhr.send();
        page++;
    });
});

// window.addEventListener('load', function () {
//     imgElem.forEach(img => {
//         img.addEventListener('click', function () {
//             imageBoxElement.classList.add('visible');
//             imageBoxElement.children[1].children[0].setAttribute('src', this.getAttribute('src'));
//             imageBoxElement.children[1].children[0].setAttribute('alt', this.getAttribute('alt'));
//             // imageBoxElement.children[1].children[1].innerHTML = this.parentElement.lastElementChild.innerHTML;
//             document.querySelector('body').classList.add('no-overflow');
//         });

//         // close imageBox
//         imageBoxElement.firstElementChild.addEventListener('click', function () {
//             this.parentElement.classList.remove('visible');
//             document.querySelector('body').classList.remove('no-overflow');
//         });
//     });
// });