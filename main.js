const goUpBtn = document.querySelector('.goUpBtn');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 800) {
        goUpBtn.style.display = 'block';
    } else {
        goUpBtn.style.display = 'none';
    }
};

goUpBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
});