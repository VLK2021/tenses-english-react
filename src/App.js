import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import PresentSimple from "./components/PresentSimple/PresentSimple";
import PastSimple from "./components/PastSimple/PastSimple";
import FutureSimple from "./components/FutureSimple/FutureSimple";
import PresentContinuous from "./components/PresentContinuous/PresentContinuous";
import PastContinuous from "./components/PastContinuous/PastContinuous";
import FutureContinuous from "./components/FutureContinuous/FutureContinuous";
import IrregularVerbs from "./components/IrregularVerbs/IrregularVerbs";
import Vocabulary from "./components/vocabularyArchive/Vocabulary/Vocabulary";
import ForItComponent from "./components/vocabularyArchive/ForItComponent/ForItComponent";
import AlphabetComponent from "./components/AlphabetComponent/AlphabetComponent";


function App() {

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
                    <Route index element={<HomeComponent/>}/>
                    <Route path={'1'} element={<PresentSimple/>}/>
                    <Route path={'2'} element={<PastSimple/>}/>
                    <Route path={'3'} element={<FutureSimple/>}/>
                    <Route path={'4'} element={<PresentContinuous/>}/>
                    <Route path={'5'} element={<PastContinuous/>}/>
                    <Route path={'6'} element={<FutureContinuous/>}/>
                    <Route path={'21'} element={<IrregularVerbs/>}/>
                    <Route path={'23'} element={<AlphabetComponent/>}/>
                    <Route path={'24'} element={<Vocabulary/>}>
                        <Route path={'VT3'} element={<ForItComponent/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
