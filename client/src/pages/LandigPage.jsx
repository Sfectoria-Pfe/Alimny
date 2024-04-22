import React from 'react';
import '../App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-content">
          <h1>Bienvenue sur notre Learning Management System</h1>
          <p>Une plateforme d'apprentissage en ligne pour les étudiants et les enseignants.</p>
          <a href="#features" className="btn">Découvrez nos fonctionnalités</a>
        </div>
      </header>

      <section id="features" className="features-section">
        <h2>Nos fonctionnalités</h2>
        <div className="feature">
          <img src="https://www.iberdrola.com/documents/20125/40126/Deep_Learning_746x419.jpg/6f72011f-444c-bbfc-9d43-659d463a22c3?t=1626932434616" alt="Illustration fonctionnalité 1" />
          <h3>Gestion des cours</h3>
          <p>Créez, organisez et gérez facilement vos cours en ligne.</p>
        </div>
        <div className="feature">
          <img src="https://www.iberdrola.com/documents/20125/40126/Deep_Learning_746x419.jpg/6f72011f-444c-bbfc-9d43-659d463a22c3?t=1626932434616" alt="Illustration fonctionnalité 2" />
          <h3>Suivi des progrès</h3>
          <p>Suivez les progrès des étudiants et évaluez leur performance.</p>
        </div>
        <div className="feature">
          <img src="https://www.iberdrola.com/documents/20125/40126/Deep_Learning_746x419.jpg/6f72011f-444c-bbfc-9d43-659d463a22c3?t=1626932434616" alt="Illustration fonctionnalité 3" />
          <h3>Interaction en ligne</h3>
          <p>Favorisez l'interaction entre les étudiants et les enseignants grâce à des outils de communication.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 LMS. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
