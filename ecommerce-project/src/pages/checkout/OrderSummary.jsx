import dayjs from "dayjs";
import axios from "axios";
import { DeliveryOptions } from "./DeliveryOptions";

export function OrderSummary({cart , deliveryOptions}) {
  return (
    <div className="order-summary">
      {
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions
            .find((deliveryOption) => {
              return cartItem.deliveryOptionId === deliveryOption.id;
            });
            const deleteCartItem = async ()=>{
              await axios.delete(`/api/cart-items/${cartItem.productId}`);
            }
          return (
            <>
              <div key={cartItem.productId} className="cart-item-container">
                {selectedDeliveryOption && <div className="delivery-date">
                  Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM d')}
                </div>}

                <div className="cart-item-details-grid">
                  <img className="product-image"
                    src={cartItem.product.image} />

                  <div className="cart-item-details">
                    <div className="product-name">
                      {cartItem.product.name}
                    </div>
                    <div className="product-price">
                      ${(cartItem.product.priceCents / 100).toFixed(2)}
                    </div>
                    <div className="product-quantity">
                      <span>
                        Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                      </span>
                      <span className="update-quantity-link link-primary">
                        Update
                      </span>
                      <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                      </span>
                    </div>
                  </div>
                  <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} />
                </div>
              </div>
            </>
          );
        })
      }
    </div>
  );
} 