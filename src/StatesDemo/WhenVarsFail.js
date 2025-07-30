export default function WhenVarsFail(){
    let index = 0;
    function handleClick(){
        index = index + 1;
    }

    return (
        <div>
            <button onClick={handleClick}> Next</button>
            <h1>{index}</h1>
        </div>
    );
}