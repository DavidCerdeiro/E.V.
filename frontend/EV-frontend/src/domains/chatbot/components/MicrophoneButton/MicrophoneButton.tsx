import { MIC_STATES } from './types';
import type { MicrophoneButtonProps } from './types';

export function MicrophoneButton({ currentState = MIC_STATES.READY, onClick }: MicrophoneButtonProps) {
  let buttonContent = '';
  let ariaLabel = '';

  switch (currentState) {
    case MIC_STATES.READY:
      buttonContent = '🎤 Iniciar'; 
      ariaLabel = 'Empezar a escuchar';
      break;
      
    case MIC_STATES.LISTENING:
      buttonContent = '🔴 Escuchando...'; 
      ariaLabel = 'Detener grabación manual';
      break;
      
    case MIC_STATES.IA_SPEAKING:
      buttonContent = '⏹️ Detener IA'; 
      ariaLabel = 'Interrumpir respuesta de la IA';
      break;
      
    default:
      buttonContent = '🎤';
      ariaLabel = 'Botón de micrófono';
  }

  return (
    <button 
      onClick={onClick}
      aria-label={ariaLabel}
      aria-live="polite"
      type="button" 
    >
      {buttonContent}
    </button>
  );
}