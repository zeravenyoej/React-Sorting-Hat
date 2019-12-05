import React from 'react';

const Greeting = (props)=>{



    return(
        <div>
            <h1>Greetings, student!</h1>
            <h2>It's time to figure out to which house you belong.</h2>
            <button onClick={()=>props.history.push('/form')}>Start</button>
        </div>
    );
};

export default Greeting;