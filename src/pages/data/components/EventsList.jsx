import React, { useState } from "react";
import eventsData from "../eventsData.json";
import "./EventsList.css";

function EventsList() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="events-container">
      <h1 className="events-title">Current Events</h1>
      <ul className="events-list">
        {eventsData.map((event) => (
          <li key={event.id} className="event-item">
            <button className="event-button" onClick={() => handleEventClick(event)}>
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-details">
                <h2>{event.title}</h2>
                <p><strong>Date:</strong> {event.date}</p>
                <p>{event.description}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {selectedEvent && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="modal-image" />
            <h2>{selectedEvent.title}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p>{selectedEvent.description}</p>
            <p>{selectedEvent.details}</p> {/* Additional details */}
          </div>
        </div>
      )}
    </div>
  );
}

export default EventsList;
