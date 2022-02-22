const elements = {
    count: document.querySelector(".count"),
    addItem: document.querySelector(".more"),
    removeItem: document.querySelector(".less"),
    button: document.querySelector("button[name='add-button']"),
    cart: document.querySelector(".header__cart"),
    newItem: document.getElementById("new-item"),
    cartResume: document.getElementById("cart-resume"),
    itemPrice: document.getElementById("is-price"),
    itemTotal: document.getElementById("is-total"),
    warning: document.getElementById("warning"),
    list: document.getElementById("list"),
    modal: document.getElementById("modal"),
    img: document.querySelectorAll(".product"),
    thumbnail: document.querySelector(".product-overview"),
    imgModal: document.querySelectorAll(".product-mdl"),
    thumbnailModal: document.querySelector(".product-overview--modal")
};

let count = 0;
let listCount = 0;

elements.addItem.addEventListener('click', () => {
    count += 1;
    elements.count.innerText = count;
});

elements.removeItem.addEventListener('click', () => {
    count -= 1;
    if (count < 0) {
        count = 0;
        elements.count.innerText = count;
    } else {
        elements.count.innerText = count;
    }
});

elements.cart.addEventListener('click', () => {
    elements.newItem.style.display = 'none';
});

elements.cart.addEventListener('click', () => {
    if (elements.cartResume.style.display === 'none') {
        elements.cartResume.style.display = 'block';
    } else {
        elements.cartResume.style.display = 'none';
    }
});

elements.button.addEventListener('click', () => {
    if (count > 0) {
        elements.newItem.style.display = 'block';
        elements.warning.style.display = 'none';
        elements.cartResume.style.height = '460px';

        document.querySelector(".is-count").innerText = count;
        elements.itemTotal.innerText = `${(Number(elements.itemPrice.innerHTML) * count).toFixed(2)}`;

        let newItem = document.querySelectorAll(".header__item--cart")[0].cloneNode(true);
        elements.list.appendChild(newItem);

        listCount += 1;
    }
});

function removeItem(element) {
    element.parentNode.parentNode.removeChild(element.parentElement);
    listCount -= 1;
    if (listCount === 0) {
        elements.warning.style.display = 'block';
        elements.cartResume.style.height = '200px';
    }
};

elements.img.forEach(img => {
    img.addEventListener('click', function() {
        switch (img.getAttribute("data-picture")) {
            case 'product1':
                img.classList.add("is-focused");
                elements.thumbnail.setAttribute("src", "/images/image-product-1.jpg");
                for (let i = 0; elements.img.length; ++i) {
                    if (elements.img[i].getAttribute("data-picture") !== "product1") {
                        elements.img[i].classList.remove("is-focused");
                    }
                }
                break;
            case 'product2':
                img.classList.add("is-focused");
                elements.thumbnail.setAttribute("src", "/images/image-product-2.jpg");
                for (let i = 0; elements.img.length; ++i) {
                    if (elements.img[i].getAttribute("data-picture") !== "product2") {
                        elements.img[i].classList.remove("is-focused");
                    }
                }
                break;
            case 'product3':
                img.classList.add("is-focused");
                elements.thumbnail.setAttribute("src", "/images/image-product-3.jpg");
                for (let i = 0; elements.img.length; ++i) {
                    if (elements.img[i].getAttribute("data-picture") !== "product3") {
                        elements.img[i].classList.remove("is-focused");
                    }
                }
                break;
            case 'product4':
                img.classList.add("is-focused");
                elements.thumbnail.setAttribute("src", "/images/image-product-4.jpg");
                for (let i = 0; elements.img.length; ++i) {
                    if (elements.img[i].getAttribute("data-picture") !== "product4") {
                        elements.img[i].classList.remove("is-focused");
                    }
                }
                break;
        }
    })
});

elements.imgModal.forEach(img => {
    img.addEventListener('click', function() {
        switch (img.getAttribute("data-picture")) {
            case 'product1-mdl':
                img.classList.add("is-focused");
                elements.thumbnailModal.setAttribute("src", "/images/image-product-1.jpg");
                for (let i = 0; elements.imgModal.length; ++i) {
                    if (elements.imgModal[i].getAttribute("data-picture") !== "product1-mdl") {
                        elements.imgModal[i].classList.remove("is-focused");
                    }
                }
                break;
            case 'product2-mdl':
                img.classList.add("is-focused");
                elements.thumbnailModal.setAttribute("src", "/images/image-product-2.jpg");
                for (let i = 0; elements.imgModal.length; ++i) {
                    if (elements.imgModal[i].getAttribute("data-picture") !== "product2-mdl") {
                        elements.imgModal[i].classList.remove("is-focused");
                    }
                }
                break;
            case 'product3-mdl':
                img.classList.add("is-focused");
                elements.thumbnailModal.setAttribute("src", "/images/image-product-3.jpg");
                for (let i = 0; elements.imgModal.length; ++i) {
                    if (elements.imgModal[i].getAttribute("data-picture") !== "product3-mdl") {
                        elements.imgModal[i].classList.remove("is-focused");
                    }
                }
                break;
            case 'product4-mdl':
                img.classList.add("is-focused");
                elements.thumbnailModal.setAttribute("src", "/images/image-product-4.jpg");
                for (let i = 0; elements.imgModal.length; ++i) {
                    if (elements.imgModal[i].getAttribute("data-picture") !== "product4-mdl") {
                        elements.imgModal[i].classList.remove("is-focused");
                    }
                }
                break;
        }
    })
});



elements.thumbnail.addEventListener('click', () => {
    elements.modal.style.display = 'block';
});

elements.thumbnail.addEventListener('touchmove', () => {
    window.alert("Olá")
});

document.querySelector(".modal__close").addEventListener('click', () => {
    elements.modal.style.display = 'none';
});

document.getElementById("open-mobile-menu").addEventListener('click', () => {
    document.getElementById("mobile-menu").style.display = 'block';
});

document.getElementById("close-mobile-menu").addEventListener('click', () => {
    document.getElementById("mobile-menu").style.display = 'none';
})