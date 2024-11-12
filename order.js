// Giả định lấy thông tin đơn hàng từ giỏ hàng (có thể thay thế bằng thực tế trong ứng dụng)
const orderDetails = [
    { id: 1, name: "Sản phẩm 1", price: 100000 },
    { id: 2, name: "Sản phẩm 2", price: 200000 }
];

// Hiển thị thông tin đơn hàng
function renderOrder() {
    const orderDetailsDiv = document.getElementById('order-details');
    orderDetailsDiv.innerHTML = '';

    orderDetails.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'order-item';
        itemDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Giá: ${product.price.toLocaleString()} VNĐ</p>
        `;
        orderDetailsDiv.appendChild(itemDiv);
    });
}

// Gọi hàm hiển thị thông tin đơn hàng khi tải trang
renderOrder();
