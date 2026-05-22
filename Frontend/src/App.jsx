import './App.css';
import { useEffect, useState, Suspense, lazy } from 'react';
import HeaderLg from "./Components/ui_lg/Header";
import HeaderSm from "./Components/ui_sm/Header";
import IntroBodyLg from './Components/ui_lg/Home';
import AboutMeLg from "./Components/ui_lg/About";
import IntroBodySm from './Components/ui_sm/Home';
import AboutMeSm from "./Components/ui_sm/About";
import Loader from './Components/animate/lottie';
import ErrorPage from "./Components/ErrorPage";
const ScrollTriggered = lazy(() => import('./Components/Project'));

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const isDarkMode = globalThis.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) setTheme(false);
    else setTheme(true);
  }, []);

  const screen_small = globalThis.matchMedia('(max-width: 767px)').matches;

  return (
    <Router>
      <div className={`overflow-x-hidden h-screen w-full ${theme ? 'bg-[#ece9e2] text-gray-950' : 'bg-gradient-to-r from-gray-950 to-black text-[#ece9e2]'}`}>
        {!screen_small && <HeaderLg setheme={setTheme} theme={theme} /> }
        {screen_small && <HeaderSm setheme={setTheme} theme={theme} />}
        <Suspense fallback={<div className='font-serif text-red-500 text-xl'>Loading Projects...</div>}>
          <Routes>
            <Route path="/" element={<>{screen_small ? (<><IntroBodySm theme={theme} /><AboutMeSm theme={theme} /></>) : (<><IntroBodyLg theme={theme} /><AboutMeLg theme={theme} /></>)}</>}/>
            <Route path="/projects" element={<Suspense fallback={<Loader />}><ScrollTriggered /></Suspense>}/>
            <Route path="*" element={<ErrorPage />}
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
