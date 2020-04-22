import store from './data/store.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const image = formData.get('image');
    getBase64(image, (base64Url) => {

        const product = {
            code: formData.get('code'),
            name: formData.get('name'),
            image: base64Url,
            category: formData.get('category'),
            price: +formData.get('price'),
            description: formData.get('description')
        };

        store.addProduct(product);

        alert('product saved');

        form.reset();

    });

});

function getBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        callback(reader.result);
    };

}