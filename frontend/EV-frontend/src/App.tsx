import { useState } from 'react';
import { MIC_STATES, type MicState } from './domains/chatbot/components/MicrophoneButton/types';
import { CHAT_PHASES, type ChatPhase } from './domains/chatbot/components/ChatMessage/types';

import { LeftSidebar } from './domains/chatbot/layouts/LeftSidebar';
import { RightSidebar } from './domains/chatbot/layouts/RightSidebar';
import { InteractionCenter } from './domains/chatbot/layouts/InteractionCenter';

export function App() {
  const [micState, setMicState] = useState<MicState>(MIC_STATES.READY);
  const [chatPhase, setChatPhase] = useState<ChatPhase>(CHAT_PHASES.IDLE);
  const [isOnline] = useState(true);
  const [aiResponse, setAiResponse] = useState<string>('');

  const testBackendConnection = async () => {
    try {
      setChatPhase(CHAT_PHASES.THINKING); // Opcional: mostrar estado de "pensando"[cite: 2]
      
      const response = await fetch('http://localhost:8000/chat/response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_message: "Hola E.V., esto es un mensaje de prueba desde el frontend" }),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      setAiResponse(data.model_response); // Guardamos la respuesta según tu Response DTO
      console.log("Respuesta del backend:", data.model_response);
      setChatPhase(CHAT_PHASES.SPEAKING);
      
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      setAiResponse("Error de conexión");
      setChatPhase(CHAT_PHASES.IDLE);
    }
  };

  const handleMicClick = () => {
    if (micState === MIC_STATES.READY) {
      setMicState(MIC_STATES.LISTENING);
      setChatPhase(CHAT_PHASES.LISTENING);
      
      // Llamamos al backend simulando que ya transcribimos el audio
      testBackendConnection();
      
    } else {
      setMicState(MIC_STATES.READY);
      setChatPhase(CHAT_PHASES.IDLE);
    }
  };

  const openConfigModal = () => {
    alert('Abriendo el modal del dominio de configuration');
  };

  return (
    <div className="ev-layout">
      <LeftSidebar isOnline={isOnline} />
      
      <InteractionCenter 
        micState={micState} 
        chatPhase={chatPhase} 
        onMicClick={handleMicClick} 
      />
      
      <RightSidebar onConfigClick={openConfigModal} />
    </div>
  );
}