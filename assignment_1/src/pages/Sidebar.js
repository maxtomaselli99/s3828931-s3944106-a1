import React from "react";
import logo from '../logo.svg';

const Sidebar = () => {
    return (
        <section className="px-10 py-10">
            <div className="w-80 bg-white shadow-md">
                <h1 className="text-2xl font-bold flex justify centre">Want to grow Veggies like us?</h1>
                <p>1. Choose a sunny location</p>
                <p>2. Use soil rich in organic matter</p>
                <p>3. Water just the right amount</p>
                <p>4. Pest Control</p>
                <p>5. Don't Fertilise, use compost</p>
                <p>6. Pair veggies to complement growth</p>
            </div>
        </section>
    );
};

export default Sidebar;
