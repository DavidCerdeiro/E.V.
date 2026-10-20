import { MIC_STATES, type MicState } from '../components/MicrophoneButton/types';
import { CHAT_PHASES, type ChatPhase } from '../components/ChatMessage/types';
import { AudioWave } from '../components/VoiceWave/VoiceWave';
import { ChatMessage } from '../components/ChatMessage/ChatMessage';
import { MicrophoneButton } from '../components/MicrophoneButton/MicrophoneButton';
import { SpiderLogo } from '../components/SpiderLogo/SpiderLogo'; // <-- Nueva importación

interface InteractionCenterProps {
  micState: MicState;
  chatPhase: ChatPhase;
  onMicClick: () => void;
}

export function InteractionCenter({ micState, chatPhase, onMicClick }: InteractionCenterProps) {
  return (
    <main className="ev-main-column relative">
      
      {/* Componente abstraído para mantener el código limpio */}
      <SpiderLogo />

      <div className="flex-grow w-full flex items-center justify-center z-10">
        <AudioWave isActive={micState !== MIC_STATES.READY} /> 
      </div>
      
      <div className="w-full mb-4 flex justify-center z-10">
        <ChatMessage phase={chatPhase} text="" />
      </div>
      
      <div className="pb-8 z-10">
        <MicrophoneButton currentState={micState} onClick={onMicClick} />
      </div>
    </main>
  );
}