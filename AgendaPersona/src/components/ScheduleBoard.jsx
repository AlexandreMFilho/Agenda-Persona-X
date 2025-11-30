import React from "react";
import "./ScheduleBoard.css";

export default function ScheduleBoard() {
  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  return (
    <div className="schedule-container">
      {/* Lado esquerdo - Daytime */}
      <div className="left-section daytime">
        <span className="vertical-text">Daytime</span>
      </div>

      {/* Conteúdo central */}
      <div className="center-section">
        {/* Cabeçalho dos dias */}
        <div className="days-header">
          {days.map((d) => (
            <div key={d} className="day-cell header-cell">
              {d}
            </div>
          ))}
        </div>

        {/* Grade Daytime */}
        <div className="grid-content daytime-grid">
          {days.map((d) => (
            <div key={d} className="day-cell content-cell"></div>
          ))}
        </div>

        {/* Linha divisória */}
        <div className="divider"></div>

        {/* Grade Evening */}
        <div className="grid-content evening-grid">
          {days.map((d) => (
            <div key={d} className="day-cell content-cell"></div>
          ))}
        </div>
      </div>

      {/* Lado esquerdo - Evening */}
      <div className="left-section evening">
        <span className="vertical-text">Evening</span>
      </div>
    </div>
  );
}
