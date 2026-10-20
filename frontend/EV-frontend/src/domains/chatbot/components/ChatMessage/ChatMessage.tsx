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
      className="ev-chat-container"
    >
      <p className={`ev-chat-text-${phase}`}>
        {renderContent()}
      </p>
    </div>
  );
}