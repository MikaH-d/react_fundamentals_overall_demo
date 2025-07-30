export default function EventDemo2() {
    function handleClick (message){
        alert(message);
    };

    return (
        <div>
            <h5>Passing arguments to event handlers: </h5>
            <button onClick={()=>{handleClick('Hi Hi... Button clicked!')}}>Click Me</button>
        </div>
    );
}