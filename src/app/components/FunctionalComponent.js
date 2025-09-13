'use client'

import React, { useState } from "react";

function FunctionalComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="flex flex-col items-center justify-center h-90 bg-gray-100">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Functional Component Counter: {count}
            </h1>

            {/* Buttons */}
            <div className="flex gap-6">
                <button
                    className="px-6 py-2 text-lg font-semibold text-white bg-green-500 rounded-xl shadow-md hover:bg-green-600 transition"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="px-6 py-2 text-lg font-semibold text-white bg-red-500 rounded-xl shadow-md hover:bg-red-600 transition"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );

}
export default FunctionalComponent;