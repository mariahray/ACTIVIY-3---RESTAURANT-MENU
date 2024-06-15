<script>
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        
    }
    const orderList = [];
    let totalAmount = 0;

    function addToOrder(itemName, itemPrice) {
        orderList.push({ name: itemName, price: itemPrice });
        totalAmount += itemPrice;
        updateOrderDisplay();
    }

    function updateOrderDisplay() {
        const orderListElement = document.getElementById('order-list');
        const totalElement = document.getElementById('total');

        orderListElement.innerHTML = '';
        orderList.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;
            orderListElement.appendChild(listItem);
        });

        totalElement.textContent = `Total: ₱${totalAmount.toFixed(2)}`;
    }
</script>