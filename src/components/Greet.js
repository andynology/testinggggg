import React from 'react';

const Greet = ({name, heroName}) => {

    function sayHello() {
        alert('Hellooooo');
    }
    
    return <h1 onClick={sayHello}>Hello {name} {heroName}</h1>
}

export default Greet;