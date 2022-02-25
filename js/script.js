const elements = {
    contactCover: document.getElementById("contact-cover"),
    location: document.getElementById("location")
}

elements.contactCover.addEventListener('mouseover', () => {
    elements.location.style.display = 'block';
})

elements.contactCover.addEventListener('mouseout', () => {
    elements.location.style.display = 'none';
});

window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("loading-bar").style.width = scrolled + "%";
};