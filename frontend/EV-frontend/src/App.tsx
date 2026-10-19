import { useState } from 'react';

// Importaciones figuradas de nuestros componentes
import { MIC_STATES, type MicState } from './domains/chatbot/components/MicrophoneButton/types';
import { MicrophoneButton } from './domains/chatbot/components/MicrophoneButton/MicrophoneButton';
import { CHAT_PHASES, type ChatPhase } from './domains/chatbot/components/ChatMessage/types';
import { StatusMessage } from './domains/chatbot/components/StatusMessage/StatusMessage';
import { AudioWave } from './domains/chatbot/components/VoiceWave/VoiceWave';
import { ChatMessage } from './domains/chatbot/components/ChatMessage/ChatMessage';
import { ConfigurationButton } from './domains/chatbot/components/ConfigurationButton/ConfigurationButton';

export function App() {
  const [micState, setMicState] = useState<MicState>(MIC_STATES.READY);
  const [chatPhase, setChatPhase] = useState<ChatPhase>(CHAT_PHASES.IDLE);
  const [isOnline] = useState(true);

  // Función temporal para ir probando cómo reaccionan los componentes
  const handleMicClick = () => {
    if (micState === MIC_STATES.READY) {
      setMicState(MIC_STATES.LISTENING);
      setChatPhase(CHAT_PHASES.LISTENING);
    } else {
      setMicState(MIC_STATES.READY);
      setChatPhase(CHAT_PHASES.IDLE);
    }
  };

  return (
    <div 
      style={{
        display: 'grid',
        // Creamos 3 columnas: Las laterales ocuparán un espacio fijo/proporcional, la central coge el resto
        gridTemplateColumns: 'minmax(150px, 1fr) 3fr minmax(150px, 1fr)', 
        height: '100vh',
        width: '100vw',
        backgroundColor: '#000000', // Aplicando el fondo negro puro de tu fase de diseño
        color: '#ffffff',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* =========================================
          BARRA LATERAL IZQUIERDA
          ========================================= */}
      <aside 
        style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // Alinea el mensaje de estado a la izquierda
          borderRight: '1px solid #1a1a1a' // Borde temporal sutil para delimitar la caja
        }}
      >
        <StatusMessage isOnline={isOnline} />
      </aside>

      {/* =========================================
          COLUMNA CENTRAL
          ========================================= */}
      <main 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // Reparte los 3 bloques: arriba, centro y abajo[cite: 6]
          alignItems: 'center',
          padding: '2rem',
          height: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* Bloque Superior: VoiceWave[cite: 6] */}
        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          {/* Le pasamos true si el micro NO está en estado READY */}
          <AudioWave isActive={micState !== MIC_STATES.READY} /> 
        </div>

        {/* Bloque Central: ChatMessage[cite: 6] */}
        <div style={{ width: '100%', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
          <ChatMessage phase={chatPhase} text="" />
        </div>

        {/* Bloque Inferior: MicrophoneButton[cite: 6] */}
        <div style={{ paddingBottom: '2rem' }}>
          <MicrophoneButton currentState={micState} onClick={handleMicClick} />
        </div>
      </main>

      {/* =========================================
          BARRA LATERAL DERECHA[cite: 6]
          ========================================= */}
      <aside 
        style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end', // Alinea el botón de configuración a la derecha
          borderLeft: '1px solid #1a1a1a' // Borde temporal sutil para delimitar la caja
        }}
      >
        <ConfigurationButton onClick={() => alert('Aquí se abrirá el modal superpuesto')} />
      </aside>
    </div>
  );
}