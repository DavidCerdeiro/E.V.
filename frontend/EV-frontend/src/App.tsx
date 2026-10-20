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

  const handleMicClick = () => {
    if (micState === MIC_STATES.READY) {
      setMicState(MIC_STATES.LISTENING);
      setChatPhase(CHAT_PHASES.LISTENING);
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