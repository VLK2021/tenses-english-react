import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import PresentSimple from "./components/PresentSimple/PresentSimple";


function App() {

    // PAST SIMPLE
    // Layout.js:12 FUTURE SIMPLE
    // Layout.js:12 PRESENT CONTINUOUS
    // Layout.js:12 PRESENT CONTINUOUS
    // Layout.js:12 PAST CONTINUOUS
    // Layout.js:12 FUTURE CONTINUOUS
    // Layout.js:12 PRESENT PERFECT
    // Layout.js:12 PAST PERFECT
    // Layout.js:12 FUTURE PERFECT
    // Layout.js:12 PRESENT PERFECT CONTINUOUS
    // Layout.js:12 PAST PERFECT CONTINUOUS
    // Layout.js:12 FUTURE PERFECT CONTINUOUS

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/1'} element={<PresentSimple/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
