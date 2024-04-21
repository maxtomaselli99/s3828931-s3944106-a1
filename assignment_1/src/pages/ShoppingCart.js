import React from "react";

const Cart = () => {
    const Banana = JSON.parse(localStorage.getItem("Banana"));
    const Potato = JSON.parse(localStorage.getItem("Potato"));
    const Cherry = JSON.parse(localStorage.getItem("Cherry"));
    const Cart = JSON.parse(localStorage.getItem("Cart"));
    let tempCart = [];
    return (
        <div>
            <div className="py-5 grid mx-auto grid-cols-3 grod-flow-col rounded bg-white shadow-md">
                <div class="px-4">Name</div>
                <div>Amount</div>
            </div>
            {Cart[0] > 0 &&
                <div className="py-5 grid mx-auto grid-cols-3 grod-flow-col rounded bg-white shadow-md">
                    <div class="px-4">Banana</div>
                    <div>{Cart[0]}</div>
                    <button onClick={() => {
                        tempCart = JSON.parse(localStorage.getItem("Cart"));
                        tempCart[0] = 0;
                        localStorage.setItem('Cart', JSON.stringify(tempCart));
                    }}>
                        Remove?</button>
                </div>
            }
            {Cart[1] > 0 &&
                <div className="py-5 grid mx-auto grid-cols-3 grod-flow-col rounded bg-white shadow-md">
                    <div class="px-4">Potato</div>
                    <div>{Cart[1]}</div>
                    <button onClick={() => {
                        tempCart = JSON.parse(localStorage.getItem("Cart"));
                        tempCart[1] = 0;
                        localStorage.setItem('Cart', JSON.stringify(tempCart));
                    }}>
                        Remove?</button>
                </div>
            }
            {Cart[2] > 0 &&
                <div className="py-5 grid mx-auto grid-cols-3 grod-flow-col rounded bg-white shadow-md">
                    <div class="px-4">Cherry</div>
                    <div>{Cart[2]}</div>
                    <button onClick={() => {
                        tempCart = JSON.parse(localStorage.getItem("Cart"));
                        tempCart[2] = 0;
                        localStorage.setItem('Cart', JSON.stringify(tempCart));
                    }}>
                        Remove?</button>
                </div>
            }
            {(((Cart[0] > 0) || Cart[1] > 0) || Cart[2] > 0) &&
                <div className="py-5 grid mx-auto grid-cols-3 grod-flow-col rounded bg-white shadow-md">
                    <div class="px-4">Total</div>
                    <div>{"$" + parseFloat((Cart[0] * (Banana[1] - Banana[1] * Banana[0] / 100) +
                        (Cart[1] * (Potato[1] - Potato[1] * Potato[0] / 100)) +
                        (Cart[2] * (Cherry[1] - Cherry[1] * Cherry[0] / 100)))).toFixed(2)}</div>
                    <button onClick={() => {
                        tempCart = JSON.parse(localStorage.getItem("Cart"));
                        tempCart = [0,0,0]
                        localStorage.setItem('Cart', JSON.stringify(tempCart));
                    }}>
                        Clear?</button>
                </div>
            }
            {Cart[0] == 0 && Cart[1] == 0 && Cart[2] == 0 &&
                <div>
                    <div>Cart is Empty</div>
                </div>
            }
        </div>
    )
}

export default Cart;