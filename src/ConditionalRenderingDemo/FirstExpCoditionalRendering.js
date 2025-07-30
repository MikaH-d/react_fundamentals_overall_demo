
// if statment
function UserGreeting({ isLoggedIn, username }) {
    if (isLoggedIn) {
        return <h1>Welcome back, {username}!</h1>
    }
    return <h1>Please log in to continue.</h1>
}

<UserGreeting isLoggedIn={true} username="Mika" /> 


//Ternaty operator
function UserGreeting({ isLoggedIn, username }) {
    return (<div> {isLoggedIn ? (<h1>Welcome back, {username}!</h1>) : (<h1>Please log in to continue.</h1>)}</div>)
}

<UserGreeting2 isLoggedIn={true} username="Mika" /> 

