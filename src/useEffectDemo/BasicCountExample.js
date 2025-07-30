import { useState, useEffect } from 'react';

function ExCountEffect(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('Count updated: ${count}');
    }, [count])

    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={()=>setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default ExCountEffect;