import { CHAT_PHASES, type ChatMessageProps } from "./types";

export function ChatMessage({ phase, text = '' }: ChatMessageProps) {
  
  // Función para determinar qué mostrar según la fase
  const renderContent = () => {
    switch (phase) {
      case CHAT_PHASES.IDLE:
        return 'Listo para escuchar.';
      case CHAT_PHASES.LISTENING:
        return text ? `"${text}"` : 'Escuchándote...';
      case CHAT_PHASES.THINKING:
        return 'Pensando...';
      case CHAT_PHASES.SPEAKING:
        return text;
      default:
        return '';
    }
  };

  return (
    <div 
      aria-live="assertive" 
      style={{
        width: '100%',
        maxWidth: '600px', // Limita el ancho para mejor legibilidad
        height: '150px',   // Altura fija para no desplazar el botón de micrófono inferior
        overflowY: 'auto', // Scroll automático si el texto de la IA es muy largo
        textAlign: 'center',
        padding: '1rem',
        boxSizing: 'border-box'
      }}
    >
      <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
        {renderContent()}
      </p>
    </div>
  );
}