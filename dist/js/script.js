
        const languageSelect = document.getElementById('language-select');
        const mainTitle = document.getElementById('main-title');
        const subtitle = document.getElementById('subtitle');
        const homeLink = document.getElementById('home-link');
        const paketLink = document.getElementById('paket-link');
        const portfolioLink = document.getElementById('portfolio-link');
        const kontakLink = document.getElementById('kontak-link');
        const deskHomeLink = document.getElementById('deskripsi-home');
        const paketKamiLink = document.getElementById('paket-kami');
        const adminSatuLink = document.getElementById('adminSatu');
        const adminDuaLink = document.getElementById('adminDua');
        const adminTigaLink = document.getElementById('adminTiga');
        const portofoliopageLink = document.getElementById('portofoliopage');
        const deskripsiPortLink = document.getElementById('deskripsi-port');
        const deskripsiPortDownLink = document.getElementById('deskripsiDown-port');
        const judulKontakKami = document.getElementById('kontak-kami');
        const deskripsiKontak = document.getElementById('deskripsi-kontak');
        const namaLengkap = document.getElementById('nama');
        const alamatData = document.getElementById('alamat');
        const pesanData = document.getElementById('pesan');
        const kirimBtn = document.getElementById('kirim');


        

        const translations = {
            id: {
                mainTitle: "Kami Melayani dengan Keselamatan",
                subtitle: "Apakah Anda siap untuk menjelajahi Jogja dan menciptakan kenangan tak terlupakan?",
                home: "Beranda",
                paket: "Paket",
                portfolio: "Portofolio",
                kontak: "Kontak",
                deskripsiHome : "Apakah Anda siap untuk menjelajahi Jogja dan menciptakan kenangan tak terlupakan? Di   Roushatour, kami mengerti bahwa setiap perjalanan adalah kesempatan untuk  menemukan keajaiban baru, Kami berkomitmen untuk memberikan pengalaman yang dirancang khusus untuk memenuhi keinginan dan kebutuhan Anda.",
                paketKami :"Paket Kami",
                hubungiAdminSatu: "Hubungi Admin",
                hubungiAdminDua: "Hubungi Admin",
                hubungiAdminTiga: "Hubungi Admin",
                portofoliopageKami: "Portofolio",
                deskripsiPagePort:"Lihatlah beberapa perjalanan yang telah kami buat untuk para pelanggan kami! Di bawah ini adalah galeri yang menampilkan gambar-gambar dari paket wisata kami yang paling populer",
                deskripsiPageDown:"Kami siap membantu Anda merencanakan perjalanan yang sempurna!",
                judulPageKontakKami:"Kontak Kami",
                deskripsiPageKontak:"Jika Anda tertarik untuk mengetahui lebih lanjut atau ingin berkonsultasi langsung dengan tim kami, jangan ragu untuk menghubungi kami. Anda dapat Mengirim pesan WhatsApp melalui formulir di bawah ini:",
                titleNama:"Nama Lengkap",
                titleAlamat:"Alamat",
                titlePesan:"Pesan",
                titleKirim:"Kirim",
                

            },
            en: {
                mainTitle: "We Serve with Safety",
                subtitle: "Are you ready to explore Jogja and create unforgettable memories?",
                home: "Home",
                paket: "Packages",
                portfolio: "Portfolio",
                kontak: "Contact",
                deskripsiHome : "Are you ready to explore Jogja and create unforgettable memories? At Roushatour, we understand that every trip is an opportunity to discover new wonders. We are committed to providing experiences that are tailored to meet your desires and needs.",
                paketKami : "Our Packages",
                hubungiAdminSatu:"Contact Admin",
                hubungiAdminDua:"Contact Admin",
                hubungiAdminTiga:"Contact Admin",
                portofoliopageKami: "Portfolio",
                deskripsiPortLink: "Check out some of the trips we have created for our customers! Below is a gallery featuring images from our most popular tour packages.",
                deskripsiPageDown: "We are ready to help you plan the perfect trip!",
                judulPageKontakKami: "Contact Us",
                deskripsiPageKontak: "If you are interested in learning more or want to consult directly with our team, do not hesitate to contact us. You can Send a WhatsApp message via the form below:",
                titleNama:"FullName",
                titleAlamat:"Address",
                titlePesan:"Message",
                titleKirim:"Send",
                
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
            paketKamiLink.textContent = translations[lang].paketKami;
            adminSatuLink.textContent = translations[lang].hubungiAdminSatu;
            adminDuaLink.textContent = translations[lang].hubungiAdminDua;
            adminTigaLink.textContent = translations[lang].hubungiAdminTiga;
            portofoliopageLink.textContent = translations[lang].portofoliopageKami;
            deskripsiPortLink.textContent = translations[lang].deskripsiPortLink;
            deskripsiPortDownLink.textContent = translations[lang].deskripsiPageDown;
            judulKontakKami.textContent = translations[lang].judulPageKontakKami;
            deskripsiKontak.textContent = translations[lang].deskripsiPageKontak;
            namaLengkap.textContent = translations[lang].titleNama;
            alamatData.textContent = translations[lang].titleAlamat;
            pesanData.textContent = translations[lang].titlePesan;
            kirimBtn.textContent = translations[lang].titleKirim;
            
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

const ask = document.querySelector('#ask');
const deskripsiline = document.querySelector('#deskripsi-line'); 

ask.addEventListener('click', function(){
    ask.classList.toggle('ask-active');
    navMenu.classList.toggle('hidden');
});


// window.addEventListener('click', function(e){
//     if(e.target != hamburger && e.target != navMenu ){
//         hamburger.classList.remove('hamburger-active');
//         navMenu.classList.add('hidden');
        
//     }


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


// KONTAK

function sendToWhatsApp(){
    const urlToWhatsApp = `https://wa.me/6281241539225?text=Halo,Nama Saya ${fullName.value}, dari ${address.value}, ${id=message.value}`;

    window.open(urlToWhatsApp,"_blank");
}


document.getElementById('toggleButton').onclick = function() {
    var description = document.getElementById('description');

    if (description.classList.contains('hidden')) {
      description.classList.remove('hidden');
    } else {
      description.classList.add('hidden');
    }
  };


//   Hubungi admin fullday
function sendToWhatsApp(){
    const urlToWhatsAppPaketSatu = `https://wa.me/6281241539225?text=Halo,Nama Saya ${fullName.value}, dari ${address.value}, ${id=message.value}`;

    window.open(urlToWhatsApp,"_blank");
}