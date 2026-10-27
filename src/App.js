import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ padding: '20px', minHeight: '60vh' }}>
        <h2>Welcome to Team Collaboration Lab</h2>
        <p>This project integrates components built across multiple branches.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;