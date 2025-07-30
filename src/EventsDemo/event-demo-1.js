export default function EventDemo1(){
    const handleClick = () => {
        alert('Button clicked!');       
    };

    return (
        <div>
            <h5>event handles </h5>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}