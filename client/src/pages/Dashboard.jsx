import React from 'react';
import '../App.css'; // Fichier CSS pour styliser le composant
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Tableau de bord</h1>
        <div className="dashboard-actions">
          <button className="action-button">Exporter</button>
          <button className="action-button">Imprimer</button>
        </div>
      </div>
      <div className="dashboard-summary">
        <div className="summary-item">
          <h2>En Cours</h2>
          <p>250</p>
        </div>
        <div className="summary-item">
          <h2>Complet</h2>
          <p>20</p>
        </div>
        <div className="summary-item">
          <h2>Progression moyenne</h2>
          <p>75%</p>
        </div>
      </div>
      <div className="dashboard-charts">
        <h2>Graphiques</h2>
        <div className="chart-container">
          <div className="chart">
            <h3>Graphique à barres</h3>
            <div className="bar-chart">
              <div className="bar" style={{ height: '150px' }}></div>
              <div className="bar" style={{ height: '200px' }}></div>
              <div className="bar" style={{ height: '100px' }}></div>
              <div className="bar" style={{ height: '250px' }}></div>
            </div>
          </div>
          <div className="chart">
            <h3>Graphique circulaire</h3>
            <div className="pie-chart">
              {/* Exemple de graphique circulaire à venir */}
              <p>Graphique circulaire à venir...</p>
            </div>
          </div>
          <div className="chart">
            <h3>Graphique extra</h3>
            <div className="extra-chart">
              {/* Exemple de graphique "extra" à venir */}
              <p>Graphique extra à venir...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;





