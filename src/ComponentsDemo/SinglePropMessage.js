function Message (props){
    return <p>{props.text}</p>
}

export default function SinglePropMessage(){
    return (
        <div className='messages-container'>
        <Message text="This is the first message"/>
        <Message text="this is the second message"/>
        <Message text="this is the second message"/>
      </div>
    )
}

