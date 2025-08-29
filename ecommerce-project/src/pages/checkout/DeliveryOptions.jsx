import dayjs from "dayjs";

export function DeliveryOptions({deliveryOptions , cartItem}) {
  return (

    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>

      {
        deliveryOptions.map((option) => {
          let priceString = 'FREE Shipping';
          if (option.priceCents > 0) {
            priceString = `$${(option.priceCents / 100).toFixed(2)} - Shipping`;
          }
          return (
            <div key={option.id} className="delivery-option">
              <input type="radio" className="delivery-option-input"
                checked={option.id === cartItem.deliveryOptionId}
                name={`delivery-option-2-${cartItem.productId}`} />
              <div>
                <div className="delivery-option-date">
                  {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                </div>
                <div className="delivery-option-price">
                  {priceString}
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}