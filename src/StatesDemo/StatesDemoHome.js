import CharacterCounter from "./CharacterCounter";
import ToggleVisibility from "./ToggleVisibility";
import WhenCorrected from "./WhenCorrected";
import WhenVarsFail from "./WhenVarsFail";
import { useState } from "react";

function StatesDemoHome(){
    const [page, setPage] = useState("states-demo-home");
    let content;

    switch (page) {
        case 'when-vars-fail':
            content = <WhenVarsFail />;
            break;
        case 'when-corrected':
            content = <WhenCorrected />;
            break;
        case 'toggle-visibility':
            content = <ToggleVisibility />;
            break;
        case 'character-counter':
            content = <CharacterCounter />
            break;
        // default:
        //     content = <h2>Welcome to States Demo</h2>
    }

    return (
        <div className="demos-container">
            <h2>States Demo</h2>
            <nav className="available-demos-list">
                <button className="demo-option" onClick={() => setPage('when-vars-fail')}>Example: When Variables Fail</button>
                <button className="demo-option" onClick={() => setPage('when-corrected')}>When Variables Fail - Corrected</button>
                <button className="demo-option" onClick={() => setPage('toggle-visibility')}>Toggle text visibility</button>
                <button className="demo-option" onClick={() => setPage('character-counter')}>Real-time character counter</button>
            </nav>
            <div className="content-container">
            {content}
            </div>
        </div>
    );
}

export default StatesDemoHome;