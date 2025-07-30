import { useState } from "react";
import ExCountEffect from './BasicCountExample';
import UserList from "./FetchingData";

function UseEffectDemoHome(){
    const [page, setPage] = useState("states-demo-home");
    let content;

    switch (page) {
        case 'first-example':
            content = <ExCountEffect />;
            break;
        case 'fetching-data':
            content = <UserList />;
            break;
        // default:
        //     content = <h2>Welcome to States Demo</h2>
    }

    return (
        <div>
            <h2>useEffect Demo</h2>
            <nav className="available-demos-list">
                <button className="demo-option" onClick={() => setPage('first-example')}>useEffect hook first example</button>
                <button className="demo-option" onClick={() => setPage('fetching-data')}>Fetching data with useEffect</button>
            </nav>
            <div className="content-container">
            {content}
            </div>
        </div>
    );
}

export default UseEffectDemoHome;