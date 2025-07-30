export default function LogicalANDExample({ isLoggedIn, username }) {
    return (
        <div>
            {isLoggedIn && <h1>Welcome back, {username}!</h1>}
            {!isLoggedIn && <h1>Please log in to continue.</h1>}
        </div>
    );
} 