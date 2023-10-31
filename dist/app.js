const darkButton = document.querySelector('#darkButton');

const darkButtonSmall = document.querySelector('#darkButtonSmall');

darkButton.addEventListener('click', function() {

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
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

darkButtonSmall.addEventListener('click', function() {

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
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
    scrollContainer.scrollLeft -= 250; // Puedes ajustar la cantidad de desplazamiento
  });

  scrollRightButton.addEventListener("click", () => {
    scrollContainer.scrollLeft += 250; // Puedes ajustar la cantidad de desplazamiento
  });
