import './App.css';
import { useEffect, useState } from 'react';
import { Suspense, lazy } from "react";
import HeaderLg from "./Components/ui_lg/Header";
import HeaderSm from "./Components/ui_sm/Header";
import IntroBodyLg from './Components/ui_lg/Home';
import AboutMeLg from "./Components/ui_lg/About";
import IntroBodySm from './Components/ui_sm/Home';
import AboutMeSm from "./Components/ui_sm/About";
import Loader from './Components/animate/lottie';
const ScrollTriggered = lazy(() => import('./Components/Project'));

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [theme, setheme] = useState();

  useEffect(() => {
    const isDarkMode = globalThis.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) setheme(false);
    else setheme(true);
  }, []);

  const screen_small = globalThis.matchMedia('(max-width: 767px)').matches;

  return (
    <Router>
      <div className={`overflow-x-hidden h-screen w-full ${theme ? 'bg-[#ece9e2] text-gray-950' : 'bg-gradient-to-r from-gray-950 to-black text-[#ece9e2]'}`}>
        {!screen_small && <HeaderLg setheme={setheme} theme={theme} /> }
        {screen_small && <HeaderSm setheme={setheme} theme={theme} />}
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

function ErrorPage(){
return (
        <main className="text-center px-4 flex items-center justify-center h-screen font-sans">
            <div className='mr-12'>
              <h1 className="text-8xl font-extrabold tracking-tight text-purple-700 drop-shadow-lg">404</h1>
              <p className="text-2xl mt-4 font-semibold">Oops! Page not found</p>
            </div>
            <div className="mt-6">
              <p className="text-gray-400">Looks like you took a wrong turn into the void of Parthism 💫</p>
              <a aria-label='Go back to Home Page' href="/" className="mt-5 inline-block px-6 py-3 bg-purple-700 hover:bg-purple-800 hover:shadow-fuchsia-800 text-white font-medium rounded-xl transition-all duration-200 shadow-md">
                🏠 Back to Home
              </a>
            </div>
          </main>
              )
}

export default App;
