import { useState } from 'react';


export default function WhenCorrected(){
    const [index, setIndex] = useState(0);


    function handleClick(){
        setIndex(index + 1);
    }

    return (
        <div>
            <button onClick={handleClick}> Next</button>
            <h1>{index}</h1>
        </div>
    );
}