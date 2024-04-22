import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css'; // Fichier CSS pour styliser le composant

const Agenda = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== '' && selectedDate) {
      setTasks([...tasks, { date: selectedDate, task: newTask }]);
      setNewTask('');
      setSelectedDate(null);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Fonction pour trier les tâches par date
  const sortedTasks = tasks.sort((a, b) => a.date - b.date);

  // Fonction pour mettre en évidence les dates avec des tâches
  const highlightDates = sortedTasks.map(task => task.date);

  return (
    <div className="agenda-container">
      <h1 className="agenda-title">Agenda</h1>
      <div className="task-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ajouter une nouvelle tâche..."
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Sélectionner une date"
          className="date-picker"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={15}
          onClickOutside={() => setShowCalendar(false)}
          onFocus={() => setShowCalendar(true)}
          open={showCalendar}
          highlightDates={highlightDates} // Mettre en évidence les dates avec des tâches
        />
        <button onClick={addTask}>Ajouter</button>
      </div>
      <ul className="task-list">
        {sortedTasks.map((task, index) => (
          <li key={index} className="task-item">
            <div>
              <p>{task.date.toLocaleDateString()} - {task.task}</p>
            </div>
            <button onClick={() => deleteTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Agenda;
