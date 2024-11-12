// Danh sách sản phẩm giả định
const products = [
    { id: 1, name: "Sản phẩm 1", price: 100000, image: "path/to/image1.jpg" },
    { id: 2, name: "Sản phẩm 2", price: 200000, image: "path/to/image2.jpg" },
    { id: 3, name: "Sản phẩm 3", price: 300000, image: "path/to/image3.jpg" }
];

// Giỏ hàng lưu trữ sản phẩm đã chọn
let cart = [];

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        renderCart();
    }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    renderCart();
}

// Hiển thị sản phẩm trong giỏ hàng
function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    cart.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>Giá: ${product.price.toLocaleString()} VNĐ</p>
            <button onclick="removeFromCart(${product.id})">Xóa</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });
}

// Chức năng thanh toán
document.getElementById('checkout-button').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Giỏ hàng trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
    } else {
        window.location.href = 'order.html'; // Chuyển hướng tới trang đơn hàng
    }
});

// Thêm sản phẩm mẫu vào giỏ hàng để thử nghiệm
addToCart(1);
addToCart(2);
