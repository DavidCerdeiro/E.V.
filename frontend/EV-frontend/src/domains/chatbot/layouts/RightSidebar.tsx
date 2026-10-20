import { ConfigurationButton } from '../components/ConfigurationButton/ConfigurationButton';

export function RightSidebar({ onConfigClick }: { onConfigClick: () => void }) {
  return (
    <aside className="ev-sidebar-right">
      <ConfigurationButton onClick={onConfigClick} />
    </aside>
  );
}