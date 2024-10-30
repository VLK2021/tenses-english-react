import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import PresentSimple from "./components/tensesInEnglish/PresentSimple/PresentSimple";
import PastSimple from "./components/tensesInEnglish/PastSimple/PastSimple";
import FutureSimple from "./components/tensesInEnglish/FutureSimple/FutureSimple";
import PresentContinuous from "./components/tensesInEnglish/PresentContinuous/PresentContinuous";
import PastContinuous from "./components/tensesInEnglish/PastContinuous/PastContinuous";
import FutureContinuous from "./components/tensesInEnglish/FutureContinuous/FutureContinuous";
import Vocabulary from "./components/vocabularyArchive/Vocabulary/Vocabulary";
import PresentPerfect from "./components/tensesInEnglish/PresentPerfect/PresentPerfect";
import PastPerfect from "./components/tensesInEnglish/PastPerfect/PastPerfect";
import FuturePerfect from "./components/tensesInEnglish/FuturePerfect/FuturePerfect";
import PresentPerfectContinuous from "./components/tensesInEnglish/PresentPerfectContinuous/PresentPerfectContinuous";
import PastPerfectContinuous from "./components/tensesInEnglish/PastPerfectContinuous/PastPerfectContinuous";
import FuturePerfectContinuous from "./components/tensesInEnglish/FuturePerfectContinuous/FuturePerfectContinuous";
import SequenceOfTensesComponent
    from "./components/tensesInEnglish/SequenceOfTensesComponent/SequenceOfTensesComponent";
import {
    AAnTheComponent,
    AlphabetComponent,
    CanCouldComponent,
    HaveToComponent,
    HomeComponent,
    IrregularVerbs,
    ThereIsThereAreComponent,
    ToBeComponent,
    ToBeGoingToComponent,
    UsedToComponent,
    VocabularyGeneralComponent,
    WillWouldComponent
} from "./components";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/home'} element={<HomeComponent/>}/>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<PresentSimple/>}/>
                    <Route path={'1'} element={<PresentSimple/>}/>
                    <Route path={'2'} element={<PastSimple/>}/>
                    <Route path={'3'} element={<FutureSimple/>}/>
                    <Route path={'4'} element={<PresentContinuous/>}/>
                    <Route path={'5'} element={<PastContinuous/>}/>
                    <Route path={'6'} element={<FutureContinuous/>}/>
                    <Route path={'7'} element={<PresentPerfect/>}/>
                    <Route path={'8'} element={<PastPerfect/>}/>
                    <Route path={'9'} element={<FuturePerfect/>}/>
                    <Route path={'10'} element={<PresentPerfectContinuous/>}/>
                    <Route path={'11'} element={<PastPerfectContinuous/>}/>
                    <Route path={'12'} element={<FuturePerfectContinuous/>}/>
                    <Route path={'13'} element={<AAnTheComponent/>}/>
                    <Route path={'14'} element={<ThereIsThereAreComponent/>}/>
                    <Route path={'15'} element={<ToBeComponent/>}/>
                    <Route path={'16'} element={<HaveToComponent/>}/>
                    <Route path={'17'} element={<ToBeGoingToComponent/>}/>
                    <Route path={'18'} element={<CanCouldComponent/>}/>
                    <Route path={'19'} element={<WillWouldComponent/>}/>
                    <Route path={'20'} element={<UsedToComponent/>}/>
                    <Route path={'21'} element={<IrregularVerbs/>}/>
                    <Route path={'22'} element={<SequenceOfTensesComponent/>}/>
                    <Route path={'23'} element={<AlphabetComponent/>}/>
                    <Route path={'24'} element={<Vocabulary/>}>
                        <Route path={':id'} element={<VocabularyGeneralComponent/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
