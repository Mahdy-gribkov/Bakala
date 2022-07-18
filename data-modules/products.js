
function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error('Nothing is for free! please supply a price');
    }

    const vat = 1.17; // = maam
    const total = (price * vat).toFixed(2);
    return total;
}

class Product {
    constructor(productPrice, productName, productImage, productDescription) {
        this.price = productPrice;
        this.name = productName;
        this.image = productImage;
        this.description = productDescription;
        this.id = this.generateId();
    }

    // for inner use - inside the class
    generateId() {
        const time = new Date().getTime();
        return Math.floor(Math.random() * time);
    }

    // for outer user - outside the class
    getPrice() {
        const totalPrice = addTax(this.price);
        return `$${totalPrice}`;
    }

    getName() {
        return this.name;
    }

    getImage() {
        const IMG_PATH = 'https://cdn.pixabay.com/photo/'; // configuration of the project
        return `${IMG_PATH}${this.image}`;
    }

    getDescription() {
        return this.description;
    }

    getId() {
        return this.id;
    }
}

const products = [
    new Product(
        15,
        'Yellow cheese',
        '2016/03/05/19/24/cheese-1238395_960_720.jpg',
        'great product really!'
    ),
    new Product(
        3,
        'Ice cream',
        '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        'be careful - very cold'
    ),
    new Product(
        55,
        'aaa',
        '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        '',
    ),
];

export { products };