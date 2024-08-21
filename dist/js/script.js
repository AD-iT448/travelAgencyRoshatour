
        const languageSelect = document.getElementById('language-select');
        const mainTitle = document.getElementById('main-title');
        const subtitle = document.getElementById('subtitle');
        const homeLink = document.getElementById('home-link');
        const paketLink = document.getElementById('paket-link');
        const portfolioLink = document.getElementById('portfolio-link');
        const kontakLink = document.getElementById('kontak-link');
        const deskHomeLink = document.getElementById('deskripsi-home');

        const translations = {
            id: {
                mainTitle: "Kami Melayani dengan Hemat",
                subtitle: "Apakah Anda siap untuk menjelajahi Jogja dan menciptakan kenangan tak terlupakan?",
                home: "Beranda",
                paket: "Paket",
                portfolio: "Portfolio",
                kontak: "Kontak",
                deskripsiHome : "Apakah Anda siap untuk menjelajahi Jogja dan menciptakan kenangan tak terlupakan? Di   Roushatour, kami mengerti bahwa setiap perjalanan adalah kesempatan untuk  menemukan keajaiban baru, Kami berkomitmen untuk memberikan pengalaman yang dirancang khusus untuk memenuhi keinginan dan kebutuhan Anda."
            },
            en: {
                mainTitle: "We Serve with Save",
                subtitle: "Are you ready to explore Jogja and create unforgettable memories?",
                home: "Home",
                paket: "Packages",
                portfolio: "Portfolio",
                kontak: "Contact",
                deskripsiHome : "Are you ready to explore Jogja and create unforgettable memories? At Roushatour, we understand that every trip is an opportunity to discover new wonders. We are committed to providing experiences that are tailored to meet your desires and needs."
            }
        };

        languageSelect.addEventListener('change', (e) => {
            const lang = e.target.value;
            mainTitle.textContent = translations[lang].mainTitle;
            subtitle.textContent = translations[lang].subtitle;
            homeLink.textContent = translations[lang].home;
            paketLink.textContent = translations[lang].paket;
            portfolioLink.textContent = translations[lang].portfolio;
            kontakLink.textContent = translations[lang].kontak;
            deskHomeLink.textContent = translations[lang].deskripsiHome;
        });

        //Navbar fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.scrollY> fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}


// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu'); 

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// window.addEventListener('click', function(e){
//     if(e.target != hamburger && e.target != navMenu ){
//         hamburger.classList.remove('hamburger-active');
//         navMenu.classList.add('hidden');
        
//     }
// });

// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
if(darkToggle.checked){
    html.classList.add('dark');
}else{
    html.classList.remove('dark');
}
});


// slick

// $(document).ready(function(){
//     $('.slick-slider').slick({
//       lazyLoad: 'ondemand',
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       arrows: false,
//       responsive: [
//         {
//           breakpoint: 1024, // Ukuran layar iPad atau lebih kecil
//           settings: {
//             slidesToShow: 2, // Tampilkan 2 gambar
//             slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 640, // Ukuran layar mobile
//           settings: {
//             slidesToShow: 1, // Tampilkan 1 gambar
//             slidesToScroll: 1,
//             vertical: true // Gambar memanjang ke bawah
//           }
//         }
//       ]
//     });
//   });

