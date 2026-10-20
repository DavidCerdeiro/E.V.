import React from 'react';
import { MIC_STATES, type MicState } from './types';

interface MicrophoneButtonProps {
  currentState?: MicState;
  onClick: () => void;
}

export function MicrophoneButton({ currentState = MIC_STATES.READY, onClick }: MicrophoneButtonProps) {
  // Cambiamos el tipo a ReactNode para poder guardar los SVGs
  let buttonContent: React.ReactNode = null; 
  let ariaLabel = '';
  let styles = 'ev-mic-base '; // El espacio al final es importante para concatenar

  switch (currentState) {
    case MIC_STATES.READY:
      buttonContent = (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" x2="12" y1="19" y2="22"></line>
          </svg>
          Iniciar
        </>
      );
      ariaLabel = 'Empezar a escuchar';
      styles += 'ev-mic-ready';
      break;
      
    case MIC_STATES.LISTENING:
      buttonContent = (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {/* Círculo relleno de grabación */}
            <circle cx="12" cy="12" r="8" fill="currentColor"></circle> 
          </svg>
          Escuchando...
        </>
      );
      ariaLabel = 'Detener grabación manual';
      styles += 'ev-mic-listening';
      break;
      
    case MIC_STATES.IA_SPEAKING:
      buttonContent = (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="14" height="14" x="5" y="5" rx="2" ry="2"></rect>
          </svg>
          Detener IA
        </>
      );
      ariaLabel = 'Interrumpir respuesta de la IA';
      styles += 'ev-mic-speaking';
      break;
  }

  return (
    <button 
      onClick={onClick}
      aria-label={ariaLabel}
      aria-live="polite"
      type="button"
      className={styles}
    >
      {buttonContent}
    </button>
  );
}