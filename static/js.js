const loadMoreBtn = document.querySelector('.load-more-btn');
const homeLayoutContainer = document.querySelector('.home-layout');
const codeWithLineElems = document.querySelectorAll('code table tr');
const imgElems = document.querySelectorAll('article img');
const fakeImgElems = document.querySelectorAll('.random-image-placeholder');
const imageBoxElement = document.querySelector('.imagebox');
const navLinks = document.querySelectorAll('.nav-layout a');

// variable for dropdown
let visibleElement = null;
let visibleElementLvlN = null;

document.addEventListener('DOMContentLoaded', function () {
    // Reference: https://codepen.io/Luc-Designs/pen/LXxBPg
    fakeImgElems.forEach(imgElem => {
        let hexColor = createHexColor();
        let hexColor2 = createHexColor();
        let hexColor3 = createHexColor();
        let generatedGradient = `linear-gradient(${Math.floor(Math.random() * 360)}deg, #${hexColor}cc, #${hexColor}00 ${Math.floor(Math.random() * (100 - 60) + 60)}%), linear-gradient(${Math.floor(Math.random() * 360)}deg, #${hexColor2}cc, #${hexColor2}00 ${Math.floor(Math.random() * (100 - 60) + 60)}%), linear-gradient(${Math.floor(Math.random() * 360)}deg, #${hexColor3}cc, #${hexColor3}00 ${Math.floor(Math.random() * (100 - 60) + 60)}%)`;

        imgElem.style.background = generatedGradient;
    });

    // Surrounding img into figure for better accessibility
    imgElems.forEach(img => {
        let createFigure = document.createElement('figure');
        let createFigCaption = document.createElement('figcaption');
        if (img.parentNode.tagName !== 'FIGURE') {
            if (img.parentNode.tagName !== 'ARTICLE') {
                createFigure.classList.add(img.getAttribute('class'));
                img.parentNode.insertAdjacentElement("afterend", createFigure);
                createFigure.append(img);
                createFigCaption.innerHTML = img.getAttribute('alt');
                createFigure.append(createFigCaption);
                createFigure.previousSibling.remove();
            } else {
                createFigure.classList.add(img.getAttribute('class'));
                img.insertAdjacentElement("beforebegin", createFigure);
                createFigure.append(img);
                createFigCaption.innerHTML = img.getAttribute('alt');
                createFigure.append(createFigCaption);
            }
        }
        img.classList.remove(img.getAttribute('class'));
    });

    // Trimming code for better syntax highlight line
    codeWithLineElems.forEach((item, index) => {
        item.childNodes.forEach(child => {
            child.innerText === "\n" && item.remove();
            let startFrom = parseInt(codeWithLineElems[0].firstElementChild.innerHTML);
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

// Reference: https://stackoverflow.com/a/50775012
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('has-submenu')) {
        e.preventDefault();
        document.querySelectorAll('.has-submenu').forEach(item => item.classList.remove('focus'));
        dropdownHandle(e.target);
    } else if (visibleElement) {
        visibleElement.classList.toggle('visible');
        visibleElement = null;
        document.querySelectorAll('.has-submenu').forEach(item => item.classList.remove('focus'));
    }
});

function dropdownHandle(e) {
    e.nextElementSibling.classList.toggle('visible');
    e.classList.toggle('focus');

    if (!visibleElement) {
        visibleElement = e.nextElementSibling;
    } else if (visibleElement == e.nextElementSibling) {
        visibleElement = null;
    } else {
        visibleElement.classList.toggle('visible');
        visibleElement = e.nextElementSibling;
    }
}

function createHexColor() {
    let generatedHex = "";
    let hexNum = "0123456789abcdef";

    for (var i = 0; i < 6; i++) {
        generatedHex += hexNum.charAt(Math.floor(Math.random() * hexNum.length));
    }

    return generatedHex;
}