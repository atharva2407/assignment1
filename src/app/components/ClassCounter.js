'use client'

import React, { Component } from "react";

class ClassCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div className="flex flex-col items-center justify-center bg-gray-100">
                {/* Heading */}
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Class Component Counter: {this.state.count}
                </h1>

                {/* Buttons */}
                <div className="flex gap-6">
                    <button
                        className="px-6 py-2 text-lg font-semibold text-white bg-green-500 rounded-xl shadow-md hover:bg-green-600 transition"
                        onClick={this.increment}
                    >
                        Increment
                    </button>
                    <button
                        className="px-6 py-2 text-lg font-semibold text-white bg-red-500 rounded-xl shadow-md hover:bg-red-600 transition"
                        onClick={this.decrement}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        );


    }
}

export default ClassCounter;