import React from 'react';

const FirstComponent = (props) => {

    const { firstName, lastName, hairColor } = props;

    console.log(props)
    return (
        <div className="App">
            <h1>
                {lastName}, {firstName}
            </h1>
            <p> Age: {props.Age}</p>
            <p> Hair Color: {hairColor}</p>
        </div>
    );
}

export default FirstComponent;