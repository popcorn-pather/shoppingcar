document.addEventListener('DOMContentLoaded', () => {
    // 取得所有的增減按鈕和價格元素
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
    const valueDisplays = document.querySelectorAll('.value');
    const priceElements = document.querySelectorAll('.pricespace');
    const totalDisplay = document.querySelector('.totalprice'); 

    // 綁定增減按鈕事件
    incrementButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            updateCount(index, 1);
        });
    });

    decrementButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            updateCount(index, -1);
        });
    });

    function updateCount(index, change) {
        const valueDisplay = valueDisplays[index];
        const priceElement = priceElements[index];
        const unitPrice = parseInt(incrementButtons[index].getAttribute('data-price'));

        let currentCount = parseInt(valueDisplay.textContent);
        currentCount += change;
        if (currentCount < 0) currentCount = 0;

        // 更新顯示
        valueDisplay.textContent = currentCount;
        priceElement.textContent = `$${currentCount * unitPrice}`;

        // 更新總價格
        updateTotalPrice();
    }

    function updateTotalPrice() {
        let totalPrice = 0;

        // 計算所有商品的總價格
        priceElements.forEach(priceElement => {
            const priceText = priceElement.textContent.replace('$', '');
            totalPrice += parseInt(priceText);
        });

        // 更新總價格顯示
        totalDisplay.textContent = `$${totalPrice}`;
    }

    // 初始化總價格顯示
    updateTotalPrice();
});



    
  