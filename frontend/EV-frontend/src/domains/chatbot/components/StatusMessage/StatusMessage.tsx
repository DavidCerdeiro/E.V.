import type { StatusMessageProps } from "./types";

export function StatusMessage({ isOnline }: StatusMessageProps) {
  const statusText = isOnline ? 'En línea' : 'Desconectado';
  const statusAriaLabel = `Estado del asistente: ${statusText}`;

  return (
    <div 
      aria-live="polite"
      aria-label={statusAriaLabel}
      className="ev-status-pill"
    >
      {/* Indicador visual (punto semántico) */}
      <span 
        aria-hidden="true" 
        className={`${isOnline ? 'ev-status-dot-online' : 'ev-status-dot-offline'}`}
      />
      <span className="ev-status-text">{statusText}</span>
    </div>
  );
}