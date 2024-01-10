const darkButton = document.querySelector('#darkButton');
const iconElement = darkButton.querySelector('i');

const darkButtonSmall = document.querySelector('#darkButtonSmall');

darkButton.addEventListener('click', function () {

    iconElement.classList.toggle('bi-moon-stars-fill');
    iconElement.classList.toggle('bi-sun-fill');

   
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});

darkButtonSmall.addEventListener('click', function () {

    
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});

const scrollLeftButton = document.getElementById("scrollLeftButton");
const scrollRightButton = document.getElementById("scrollRightButton");

const scrollContainer = document.querySelector(".overflow-x-auto");

scrollLeftButton.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 250; 
});

scrollRightButton.addEventListener("click", () => {
    scrollContainer.scrollLeft += 250; 
});

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.visibility = 'visible';
            entry.target.classList.add('fall-animation');
            observer.unobserve(entry.target); 
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

const section = document.querySelector('.fall-animation');
observer.observe(section);


document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        section.classList.remove('fall-animation');
        section.style.visibility = 'hidden';
        observer.observe(section);
    }
});
