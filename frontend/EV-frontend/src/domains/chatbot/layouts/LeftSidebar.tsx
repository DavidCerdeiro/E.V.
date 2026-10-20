import { StatusMessage } from '../components/StatusMessage/StatusMessage';

export function LeftSidebar({ isOnline }: { isOnline: boolean }) {
  return (
    <aside className="ev-sidebar-left">
      {/* Parte Superior: Estado del sistema */}
      <StatusMessage isOnline={isOnline} />

      {/* Parte Inferior: Marca Personal */}
      <div className="flex flex-col gap-4 text-symbiote-muted text-xs">
        <p className="font-light tracking-wider uppercase leading-relaxed">
          Realizado por tu amigo y vecino<br />
          <span className="font-bold text-symbiote-white text-sm tracking-normal flex items-center gap-2 mt-1">
            David Cerdeiro
          </span>
        </p>
        
        <div className="flex gap-4">
          {/* GitHub */}
          <a 
            href="https://github.com/DavidCerdeiro" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub"
            className="hover:text-symbiote-white hover:-translate-y-1 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
              <path d="M12 18v4"></path>
            </svg>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/davidcerdeirogallardo/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
            className="hover:text-[#0a66c2] hover:-translate-y-1 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}