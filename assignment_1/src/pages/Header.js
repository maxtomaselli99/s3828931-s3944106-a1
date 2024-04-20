import React from "react";
import logo from '../logo.svg';

const Header = () => {
    return (
        <div
            class="relative h-[350px] overflow-hidden bg-[url('https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salad-vegetable-box_0-d1bbe91.jpg?quality=90&webp=true&fit=700,350')] bg-cover bg-[50%] bg-no-repeat">
            <div
                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
                <div class="flex h-full items-center justify-center">
                    <div class="px-6 text-center text-white md:px-12">
                        <h1 class="mb-6 text-5xl font-bold">SOIL</h1>
                        <h3 class="mb-8 text-3xl font-bold">Our Products</h3>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
