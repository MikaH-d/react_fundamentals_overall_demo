
export default function UserGreeting({ isLoggedIn, username }) {
    if (isLoggedIn) {
        return <h1>Welcome back, {username}!</h1>
    }
    return <h1>Please log in to continue.</h1>
}

