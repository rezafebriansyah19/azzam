document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('nav ul');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const pesan = document.getElementById('pesan').value;

            const nomorWhatsApp = "6285603088178";
            const pesanMentah = `Assalamu'alaikum, saya ingin bertanya tentang Pondok Pesantren Modern Al-Fath.\n\nNama: ${nama}\nEmail: ${email}\n\nPesan: ${pesan}`;
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${encodeURIComponent(pesanMentah)}`;
            window.open(urlWhatsApp, '_blank');
            contactForm.reset();
        });
    }
});