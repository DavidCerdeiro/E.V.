import type { StatusMessageProps } from "./types";

export function StatusMessage({ isOnline }: StatusMessageProps) {
  const statusText = isOnline ? 'En línea' : 'Desconectado';
  const statusAriaLabel = `Estado del asistente: ${statusText}`;

  return (
    <div 
      aria-live="polite"
      aria-label={statusAriaLabel}
      style={{ display: 'flex', alignItems: 'center', gap: '8px' }} // Layout básico
    >
      {/* Indicador visual (punto semántico) */}
      <span 
        aria-hidden="true" 
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: isOnline ? '#22c55e' : '#ef4444', // Verde/Rojo genérico temporal
          display: 'inline-block'
        }}
      />
      <span>{statusText}</span>
    </div>
  );
}