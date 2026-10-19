import { useEffect, useRef } from 'react';
import SiriWave from 'siriwave';

interface AudioWaveProps {
  isActive: boolean; // Si el usuario habla la onda se moverá más, si no, se quedará en un latido mínimo
}

export function AudioWave({ isActive }: AudioWaveProps) {
  // Referencia al contenedor div donde SiriWave inyectará el canvas
  const containerRef = useRef<HTMLDivElement>(null);
  // Referencia a la instancia de la animación para poder modificarla o destruirla
  const waveInstance = useRef<SiriWave | null>(null);

  // Efecto de inicialización y montaje
  useEffect(() => {
    if (containerRef.current && !waveInstance.current) {
      waveInstance.current = new SiriWave({
        container: containerRef.current,
        width: 300, // Ancho base, se ajustará con CSS en la siguiente fase
        height: 100,
        style: 'ios9',
        speed: 0.1,
        amplitude: 0.1, // Amplitud base (reposo)
        color: '#ffffff', // Blanco nítido para tu diseño Simbionte
        autostart: true,
      });
    }

    // Limpieza (Unmount): Destruye el canvas si el componente desaparece para evitar fugas de memoria
    return () => {
      if (waveInstance.current) {
        waveInstance.current.dispose();
        waveInstance.current = null;
      }
    };
  }, []);

  // Efecto de reactividad: Ajusta la amplitud de la onda según el estado activo
  useEffect(() => {
    if (waveInstance.current) {
      // Si está activo subimos la amplitud, si no, lo dejamos en un latido mínimo
      waveInstance.current.setAmplitude(isActive ? 1.5 : 0.1);
    }
  }, [isActive]);

  return (
    <div 
      ref={containerRef}
      aria-hidden="true"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} // Centrado
    />
  );
}