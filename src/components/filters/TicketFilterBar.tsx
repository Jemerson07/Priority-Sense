import { useInboxFilters } from '../../store/useInboxFilters';
import '../../styles/filter-bar.css';

export function TicketFilterBar() {
  const {
    search,
    channel,
    priority,
    status,
    setSearch,
    setChannel,
    setPriority,
    setStatus,
    resetFilters,
  } = useInboxFilters();

  return (
    <section className="filter-bar surface-card">
      <input
        className="filter-input"
        type="text"
        value={search}
        placeholder="Search by subject, customer or ticket id"
        onChange={(event) => setSearch(event.target.value)}
      />

      <select className="filter-select" value={channel} onChange={(event) => setChannel(event.target.value as typeof channel)}>
        <option value="all">All channels</option>
        <option value="email">Email</option>
        <option value="whatsapp">WhatsApp</option>
      </select>

      <select className="filter-select" value={priority} onChange={(event) => setPriority(event.target.value as typeof priority)}>
        <option value="all">All priorities</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>

      <select className="filter-select" value={status} onChange={(event) => setStatus(event.target.value as typeof status)}>
        <option value="all">All statuses</option>
        <option value="New">New</option>
        <option value="Triaged">Triaged</option>
        <option value="In Progress">In Progress</option>
        <option value="Waiting">Waiting</option>
        <option value="Resolved">Resolved</option>
      </select>

      <button className="secondary-action compact-action" onClick={resetFilters}>
        Reset filters
      </button>
    </section>
  );
}
