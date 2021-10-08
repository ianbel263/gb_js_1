(function () {
    'use strict';

    class Cart {
        constructor() {   
            this.products = [];
            this.totalCount = 0
            this.cartIcon = document.querySelector('.cartIconWrap');
            this.cartDetails = document.querySelector('.cartDetails');
            this.addToCartButtons = document.querySelectorAll('.featuredItem button');

            this.addListeners();
        }

        add(product) {
            const index = this.getIndexProductByName(product.name);
            if (index < 0) {
                this.products.push(product);
                this.updateCartDetailsMarkUp(product);
            } else {
                this.products[index].count++;
                this.updatePrice(this.products[index]);
                this.updateCartDetailsMarkUp(this.products[index], false);
            }
            this.updateTotalCount(++this.totalCount);
            this.updateTotalPrice();
        }

        updateTotalCount(count) {
            this.cartIcon.querySelector('span').innerText = count;
        }

        updatePrice(product) {
            product.totalPrice = Math.round(product.price * product.count * 100) / 100;
        }

        updateTotalPrice() {
            const totalPriceEl = this.cartDetails.querySelector('.cartDetails__total span');
            totalPriceEl.innerText = this.products.reduce((acc, el) => acc + el.totalPrice, 0);
            totalPriceEl.innerText = Math.round(+totalPriceEl.innerText * 100) / 100;
        }

        updateCartDetailsMarkUp(product, isNew=true) {
            const {name, price, count, totalPrice} = product;
            const tbodyEl = this.cartDetails.querySelector('tbody');
            if (isNew) {
                tbodyEl.insertAdjacentHTML('beforeend', this.getCardDetailMarUp(product));
            } else {
                const currentTR = tbodyEl.querySelector(`td[data-name="${name}"]`).parentElement;
                currentTR.querySelector('.cartDetails__count').innerText = `${count} шт.`;
                currentTR.querySelector('.cartDetails__price_total').innerText = `$${totalPrice}`;
            }
        }

        getCardDetailMarUp(product) {
            const {name, price, count, totalPrice} = product;
            return `
                <tr>
                    <td class="cartDetails__name" data-name="${name}">${name}</td>
                    <td class="cartDetails__count">${count} шт.</td>
                    <td class="cartDetails__price_per_piece">$${price}</td>
                    <td class="cartDetails__price_total">$${totalPrice}</td>
                </tr>
            `;
        }

        getProducts() {
            return this.products;
        }

        getIndexProductByName(name) {
            return this.products.findIndex(product => product.name === name);
        }

        parse(node) {
            const nameNode = node.querySelector('.featuredName');
            const priceNode = node.querySelector('.featuredPrice');
            return {
                name: nameNode.innerText,
                price: +priceNode.innerText.slice(1),
                count: 1,
                totalPrice: +priceNode.innerText.slice(1)
            }
        }

        addListeners() {
            this.cartIcon.addEventListener('click', this.onCartIconClick);
            this.addToCartButtons.forEach(button => button.addEventListener('click', this.onAddToCartButtonClick));
        }

        onCartIconClick = () => {
            this.cartDetails.classList.toggle('cartDetails--hidden');
        }

        onAddToCartButtonClick = (evt) => {
            const product = this.parse(evt.target.closest('.featuredItem'));
            this.add(product);
        }
    }

    new Cart();
})();