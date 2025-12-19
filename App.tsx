
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { ReservationForm } from './components/ReservationForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fffcf9] text-gray-800 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Process />
        <FAQ />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
