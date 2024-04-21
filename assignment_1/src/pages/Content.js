import React from "react";

const Content = () => {
    const Banana = localStorage.getItem("Banana");
    const Potato = localStorage.getItem("Potato");
    const Cherry = localStorage.getItem("Cherry");
    return (
        <section class="col-span-3 px-5">
            <div>
                <div class="flex h-full items-center justify-center">
                    <h1 class="text-5xl font-bold flex justify centre">Our Current Specials</h1>
                </div>
            <div class="py-10 mx-auto grid grid-cols-3 gap-20 mb-10">
                <div class="w-72 rounded-xl bg-white shadow-md">
                        <img src="https://media.gettyimages.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU=" alt="Bananas" class="h-80 w-72 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                        <p class="text-lg font-bold text-black truncate block capitalize">Bananas</p>
                            <p class="text-lg font-bold text-black truncate block capitalize">{Banana + "% off"}</p>
                        <p class="py-3 px-14 text-lg font-bold text-black truncate block capitalize"><a href="#">Add to Cart?</a></p>
                    </div>
                </div>
                <div class="w-72 rounded-xl bg-white shadow-md">
                        <img src="https://media.gettyimages.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=" alt="Bananas" class="h-80 w-72 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                        <p class="text-lg font-bold text-black truncate block capitalize">Potatoes</p>
                            <p class="text-lg font-bold text-black truncate block capitalize">{Potato + "% off"}</p>
                        <p class="py-3 px-14 text-lg font-bold text-black truncate block capitalize"><a href="#">Add to Cart?</a></p>
                    </div>
                </div>
                <div class="w-72 rounded-xl bg-white shadow-md">
                        <img src="https://media.gettyimages.com/id/157428769/photo/cherry-trio-with-stem-and-leaf.jpg?s=612x612&w=0&k=20&c=y3GkCgHCudOsGS07y3pL8D2LF2ikaBflYvAXLD4DJ3s=" alt="Bananas" class="h-80 w-72 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                        <p class="text-lg font-bold text-black truncate block capitalize">Cherries</p>
                            <p class="text-lg font-bold text-black truncate block capitalize">{Cherry + "% off"}</p>
                        <p class="py-3 px-14 text-lg font-bold text-black truncate block capitalize"><a href="#">Add to Cart?</a></p>
                    </div>
                </div>
                </div>
            </div>
    
        </section>
        
    );
};




export default Content;