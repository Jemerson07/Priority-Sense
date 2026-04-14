import { NavLink, Outlet } from 'react-router-dom';
import { BellRing } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { InteractiveBackground } from '../background/InteractiveBackground';
import '../../styles/layout.css';

export function AppLayout() {
  return (
    <div className="layout-shell">
      <InteractiveBackground intensity="medium" />

      <aside className="layout-sidebar">
        <div className="brand-block">
          <div className="brand-icon">
            <BellRing size={18} />
          </div>
          <div>
            <strong>Priority-Sense</strong>
            <span>Operational triage center</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link${isActive ? ' sidebar-link-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="layout-main">
        <header className="topbar">
          <div>
            <span className="topbar-kicker">Queue intelligence</span>
            <h1>Priority-Sense control center</h1>
          </div>
          <div className="topbar-badge">Free MVP stack</div>
        </header>

        <Outlet />
      </div>
    </div>
  );
}
