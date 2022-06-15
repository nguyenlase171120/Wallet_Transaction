import './App.scss';
import ListImages from './container/ListImages';
import Header from './header/Header';
import Introduce from './introduce/Introduce';
import '@stripe/stripe-js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './stateStripe/Success';
import Cancel from './stateStripe/Cancel';

const App = () => {
    return (
        <div>
            <header>
                <Header />
            </header>

            <section>
                <Introduce />

                <ListImages />
            </section>

            <BrowserRouter>
                <Routes>
                    <Route path='/success' element={<Success />} />
                    <Route path='/cancel' element={<Cancel />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
