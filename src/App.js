import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import PresentSimple from "./components/tensesInEnglish/PresentSimple/PresentSimple";
import PastSimple from "./components/tensesInEnglish/PastSimple/PastSimple";
import FutureSimple from "./components/tensesInEnglish/FutureSimple/FutureSimple";
import PresentContinuous from "./components/tensesInEnglish/PresentContinuous/PresentContinuous";
import PastContinuous from "./components/tensesInEnglish/PastContinuous/PastContinuous";
import FutureContinuous from "./components/tensesInEnglish/FutureContinuous/FutureContinuous";
import IrregularVerbs from "./components/IrregularVerbs/IrregularVerbs";
import Vocabulary from "./components/vocabularyArchive/Vocabulary/Vocabulary";
import ForItComponent from "./components/vocabularyArchive/ForItComponent/ForItComponent";
import AlphabetComponent from "./components/AlphabetComponent/AlphabetComponent";
import FruitsAndVegetables from "./components/vocabularyArchive/FruitsAndVegetables/FruitsAndVegetables";
import PresentPerfect from "./components/tensesInEnglish/PresentPerfect/PresentPerfect";
import HomeVocabularyComponent from "./components/vocabularyArchive/HomeVocabularyComponent/HomeVocabularyComponent";
import AdverbsVocabulary from "./components/vocabularyArchive/AdverbsVocabulary/AdverbsVocabulary";
import PastPerfect from "./components/tensesInEnglish/PastPerfect/PastPerfect";
import FuturePerfect from "./components/tensesInEnglish/FuturePerfect/FuturePerfect";
import PresentPerfectContinuous from "./components/tensesInEnglish/PresentPerfectContinuous/PresentPerfectContinuous";
import PastPerfectContinuous from "./components/tensesInEnglish/PastPerfectContinuous/PastPerfectContinuous";
import FuturePerfectContinuous from "./components/tensesInEnglish/FuturePerfectContinuous/FuturePerfectContinuous";
import UsedToComponent from "./components/UsedToComponent/UsedToComponent";


function App() {


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
                    <Route path={'7'} element={<PresentPerfect/>}/>
                    <Route path={'8'} element={<PastPerfect/>}/>
                    <Route path={'9'} element={<FuturePerfect/>}/>
                    <Route path={'10'} element={<PresentPerfectContinuous/>}/>
                    <Route path={'11'} element={<PastPerfectContinuous/>}/>
                    <Route path={'12'} element={<FuturePerfectContinuous/>}/>
                    <Route path={'20'} element={<UsedToComponent/>}/>
                    <Route path={'21'} element={<IrregularVerbs/>}/>
                    <Route path={'23'} element={<AlphabetComponent/>}/>
                    <Route path={'24'} element={<Vocabulary/>}>
                        <Route path={'VT1'} element={<HomeVocabularyComponent/>}/>
                        <Route path={'VT3'} element={<ForItComponent/>}/>
                        <Route path={'VT7'} element={<FruitsAndVegetables/>}/>
                        <Route path={'VT8'} element={<AdverbsVocabulary/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
