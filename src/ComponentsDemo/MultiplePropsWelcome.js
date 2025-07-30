function Welcome(props){
    return( 
    <div>
        <h3>Hello, {props.name}!</h3>
        <p>You traveled {props.time} minutes to get here.</p>
        <p>You are {props.age ?? 30} years old.</p>
    </div>
    );
}

export default function MultiplePropsWelcome(){
    return (
        <div className='welcome-container'>
            <Welcome name="Mika" time="15"/>
            <Welcome name="Ron" time="10"/>
      </div>
    );
}