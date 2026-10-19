export const CHAT_PHASES = {
  IDLE: 'idle',             // Listo para escuchar
  LISTENING: 'listening',   // Escuchándote... (puede mostrar texto en tiempo real del usuario)
  THINKING: 'thinking',     // Pensando... (Esperando a la respuesta del backend)
  SPEAKING: 'speaking'      // IA hablando (Muestra la respuesta)
} as const;

export type ChatPhase = typeof CHAT_PHASES[keyof typeof CHAT_PHASES];

export interface ChatMessageProps {
  phase: ChatPhase;
  text?: string; // Lo que diga el usuario o la IA. 
}