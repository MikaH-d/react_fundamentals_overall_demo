import { useState } from "react";
import UserGreeting from './IfStatementExample';
import LoadingIndicator from './TernaryOperatorExample';
import LogicalANDExample from './LogicalANDExample';
import Notification from "./SwitchStatmentExample";

function ConditionalRenderingDemoHome(){

    const [page, setPage] = useState("states-demo-home");
    let content;

    switch (page) {
        case 'if-statment':
            content = <UserGreeting isLoggedIn={true} username="Mika" /> 
            break;
        case 'ternary-operato':
            content = <LoadingIndicator isLoading={true} />;
            break;
        case 'logical-and':
            content = <LogicalANDExample isLoggedIn={true} username={'Ron'} />;
            break;
        case 'switch-statment':
            content = <Notification text="This is a warning for being too good at your job" status="warning0" />
            break;}

    return (
        <div className="demos-container">
            <h2>Conditional Rendering Demo</h2>
            <nav className="available-demos-list">
                <button className="demo-option" onClick={() => setPage('if-statment')}>If statments</button>
                <button className="demo-option" onClick={() => setPage('ternary-operator')}>Ternarty operator</button>
                <button className="demo-option" onClick={() => setPage('logical-and')}>Logical AND (&&)</button>
                <button className="demo-option" onClick={() => setPage('switch-statment')}>Switch statments</button>
            </nav>
            <div className="content-container">
            {content}
            </div>
        </div>
    );
}

export default ConditionalRenderingDemoHome;