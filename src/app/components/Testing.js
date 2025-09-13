
import React from 'react';
const car_object= {name: "Ford", model: "Mustang"};
function Testing() {
    console.log(
        <p>This is a test component!</p>
    )
    return (
        <div><p>{car_object.name}</p></div>
    );
}

export default Testing;