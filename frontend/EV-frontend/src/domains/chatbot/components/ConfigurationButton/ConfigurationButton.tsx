export function ConfigurationButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      type="button" 
      onClick={onClick}
      aria-haspopup="dialog"
      aria-label="Abrir panel de configuración"
      title="Configuración"
    >
      <span aria-hidden="true">⚙️</span> Configuración
    </button>
  );
}