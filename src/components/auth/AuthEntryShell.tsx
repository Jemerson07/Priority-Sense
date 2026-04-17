import '../../styles/auth-entry.css';

type AuthEntryShellProps = {
  title?: string;
  subtitle?: string;
};

export function AuthEntryShell({
  title = 'Priority-Sense access control',
  subtitle = 'Enter the operational hub to manage email and WhatsApp priorities with a premium triage workflow.',
}: AuthEntryShellProps) {
  return (
    <section className="auth-entry-shell surface-card">
      <div className="auth-copy-block">
        <span className="item-meta">Secure access</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <form className="auth-form-block">
        <label className="auth-field">
          <span>Email</span>
          <input type="email" placeholder="operator@priority-sense.io" />
        </label>

        <label className="auth-field">
          <span>Password</span>
          <input type="password" placeholder="••••••••" />
        </label>

        <button type="button" className="primary-action">
          Enter workspace
        </button>
      </form>
    </section>
  );
}
