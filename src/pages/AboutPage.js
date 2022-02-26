import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <main>
        <div>
          <h1>AboutPage</h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage;