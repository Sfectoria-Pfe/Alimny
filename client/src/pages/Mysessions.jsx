import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assurez-vous d'avoir axios installé via npm ou yarn

const MySessions = ({ userId }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Fonction pour charger les sessions de l'utilisateur depuis votre API
    const fetchSessions = async () => {
      try {
        const response = await axios.get(`/api/sessions/${userId}`); // Endpoint à adapter selon votre API
        setSessions(response.data.sessions);
      } catch (error) {
        console.error('Erreur lors du chargement des sessions :', error);
      }
    };

    // Appel de la fonction de chargement des sessions
    fetchSessions();
  }, [userId]);

  return (
    <div>
      <h2>Mes sessions</h2>
      <ul>
        {sessions.map(session => (
          <li key={session.id}>
            <div>Nom : {session.name}</div>
            <div>Date : {session.date}</div>
            <div>Heure : {session.time}</div>
            <div>Professeur : {session.teacher}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MySessions;
