"use client";

// C10K: Server Architecture Diagram
// Shows the thread model: accept thread → thread pool workers → each with own kqueue
export function C10KArchitecture() {
  return (
    <div className="my-10 overflow-x-auto">
      <svg
        viewBox="0 0 820 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-3xl mx-auto block font-mono"
        aria-label="C10K HTTP server architecture diagram"
      >
        <rect width="820" height="400" fill="#fafafa" rx="12" />

        {/* ── Clients ── */}
        <rect x="20" y="160" width="90" height="40" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="65" y="176" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1d4ed8">Clients</text>
        <text x="65" y="191" textAnchor="middle" fontSize="9" fill="#1e40af">TCP connect</text>

        {/* Arrow: clients → accept thread */}
        <line x1="110" y1="180" x2="165" y2="180" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arr-b)" />

        {/* ── Accept Thread (main) ── */}
        <rect x="165" y="140" width="150" height="80" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
        <text x="240" y="165" textAnchor="middle" fontSize="11" fontWeight="700" fill="#92400e">Accept Thread</text>
        <text x="240" y="181" textAnchor="middle" fontSize="9.5" fill="#78350f">kqueue (server fd)</text>
        <text x="240" y="195" textAnchor="middle" fontSize="9.5" fill="#78350f">kevent() — waits for</text>
        <text x="240" y="207" textAnchor="middle" fontSize="9.5" fill="#78350f">new connections</text>

        {/* setrlimit badge */}
        <rect x="165" y="230" width="150" height="30" rx="5" fill="#fee2e2" stroke="#dc2626" strokeWidth="1" />
        <text x="240" y="244" textAnchor="middle" fontSize="9" fontWeight="700" fill="#b91c1c">setrlimit(RLIMIT_NOFILE)</text>
        <text x="240" y="256" textAnchor="middle" fontSize="9" fill="#991b1b">max_fd = 10 000</text>

        {/* Arrow: accept thread → round-robin */}
        <line x1="315" y1="180" x2="380" y2="180" stroke="#ca8a04" strokeWidth="1.5" markerEnd="url(#arr-y)" />
        <text x="348" y="172" fontSize="9" fill="#ca8a04" textAnchor="middle">round-robin</text>

        {/* ── Thread Pool ── */}
        <rect x="375" y="110" width="430" height="270" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="6 3" />
        <text x="590" y="133" textAnchor="middle" fontSize="11" fontWeight="700" fill="#15803d">Thread Pool  (POOL_SIZE = 5)</text>

        {/* Worker 1 */}
        <rect x="390" y="145" width="180" height="110" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
        <text x="480" y="168" textAnchor="middle" fontSize="10" fontWeight="700" fill="#15803d">Worker 1</text>
        <text x="480" y="184" textAnchor="middle" fontSize="9" fill="#166534">own kqueue instance</text>
        <text x="480" y="198" textAnchor="middle" fontSize="9" fill="#166534">wait_worker_events()</text>
        <text x="480" y="212" textAnchor="middle" fontSize="9" fill="#166534">non-blocking recv</text>
        <text x="480" y="226" textAnchor="middle" fontSize="9" fill="#166534">SO_RCVBUF = 4 MB</text>
        <text x="480" y="240" textAnchor="middle" fontSize="9" fill="#166534">HTTP parser + router</text>

        {/* Worker 2 */}
        <rect x="590" y="145" width="180" height="110" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
        <text x="680" y="168" textAnchor="middle" fontSize="10" fontWeight="700" fill="#15803d">Worker 2</text>
        <text x="680" y="184" textAnchor="middle" fontSize="9" fill="#166534">own kqueue instance</text>
        <text x="680" y="198" textAnchor="middle" fontSize="9" fill="#166534">wait_worker_events()</text>
        <text x="680" y="212" textAnchor="middle" fontSize="9" fill="#166534">non-blocking recv</text>
        <text x="680" y="226" textAnchor="middle" fontSize="9" fill="#166534">SO_RCVBUF = 4 MB</text>
        <text x="680" y="240" textAnchor="middle" fontSize="9" fill="#166534">HTTP parser + router</text>

        {/* Worker N dots */}
        <text x="590" y="300" textAnchor="middle" fontSize="18" fill="#16a34a">· · ·</text>
        <text x="590" y="318" textAnchor="middle" fontSize="9" fill="#16a34a">Workers 3–5 (same structure)</text>
        <text x="590" y="332" textAnchor="middle" fontSize="9" fill="#16a34a">No shared mutable state on hot path</text>
        <text x="590" y="346" textAnchor="middle" fontSize="9" fill="#16a34a">O_NONBLOCK on all client fds</text>
        <text x="590" y="360" textAnchor="middle" fontSize="9" fill="#16a34a">EAGAIN handled, edge-triggered</text>

        {/* Arrow: accept → worker 1 */}
        <line x1="380" y1="170" x2="390" y2="190" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arr-g)" />

        {/* Arrow: accept → worker 2 */}
        <line x1="380" y1="190" x2="590" y2="190" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arr-g)" />

        {/* HTTP Parser box */}
        <rect x="20" y="300" width="310" height="80" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="175" y="322" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5b21b6">Hand-rolled HTTP Parser</text>
        <text x="175" y="338" textAnchor="middle" fontSize="9" fill="#4c1d95">Scans byte-by-byte for \r\n\r\n</text>
        <text x="175" y="352" textAnchor="middle" fontSize="9" fill="#4c1d95">Stateful across split reads</text>
        <text x="175" y="366" textAnchor="middle" fontSize="9" fill="#4c1d95">Validates method, URI, version — throws HttpException on bad input</text>

        <defs>
          <marker id="arr-b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#3b82f6" />
          </marker>
          <marker id="arr-y" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#ca8a04" />
          </marker>
          <marker id="arr-g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#16a34a" />
          </marker>
        </defs>
      </svg>
      <p className="text-center text-xs text-text-muted mt-3 font-mono">
        C10K server — accept thread dispatches via round-robin to 5 independent workers
      </p>
    </div>
  );
}

// C10K: Request Lifecycle Flow
export function C10KRequestFlow() {
  const steps = [
    {
      label: "TCP Connect",
      sub: "Client connects\nto port 8081\nSO_REUSEADDR set",
      color: "#dbeafe", border: "#3b82f6", text: "#1d4ed8",
    },
    {
      label: "kevent() fires",
      sub: "Accept thread\nwakes — new fd\nO_NONBLOCK set",
      color: "#fef9c3", border: "#ca8a04", text: "#92400e",
    },
    {
      label: "Round-robin",
      sub: "ThreadPool picks\nnext worker\nadd_client(fd)",
      color: "#fef9c3", border: "#ca8a04", text: "#92400e",
    },
    {
      label: "Worker reads",
      sub: "Worker kqueue\nfires — recv() loop\nEAGAIN = done",
      color: "#dcfce7", border: "#16a34a", text: "#15803d",
    },
    {
      label: "HTTP parsed",
      sub: "Method, path,\nheaders, body\nstateful parser",
      color: "#ede9fe", border: "#7c3aed", text: "#5b21b6",
    },
    {
      label: "Route matched",
      sub: "app.get() /\napp.put()\nstd::function",
      color: "#fee2e2", border: "#dc2626", text: "#b91c1c",
    },
  ];

  return (
    <div className="my-10 overflow-x-auto">
      <svg
        viewBox="0 0 820 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-3xl mx-auto block font-mono"
        aria-label="C10K request lifecycle flow"
      >
        <rect width="820" height="200" fill="#fafafa" rx="12" />
        <text x="410" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill="#555">
          Request Lifecycle
        </text>

        {steps.map((s, i) => {
          const x = 20 + i * 133;
          return (
            <g key={i}>
              <rect x={x} y="35" width="120" height="110" rx="7"
                fill={s.color} stroke={s.border} strokeWidth="1.5" />
              <text x={x + 60} y="57" textAnchor="middle" fontSize="10" fontWeight="700" fill={s.text}>
                {s.label}
              </text>
              {s.sub.split("\n").map((line, j) => (
                <text key={j} x={x + 60} y={73 + j * 14} textAnchor="middle" fontSize="9" fill={s.text}>
                  {line}
                </text>
              ))}
              {/* Step number */}
              <circle cx={x + 60} cy="158" r="9" fill={s.border} />
              <text x={x + 60} y="162" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">{i + 1}</text>
              {/* Arrow */}
              {i < steps.length - 1 && (
                <line x1={x + 120} y1="90" x2={x + 132} y2="90"
                  stroke="#999" strokeWidth="1.5" markerEnd="url(#arr-flow-c10k)" />
              )}
            </g>
          );
        })}

        <defs>
          <marker id="arr-flow-c10k" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="#999" />
          </marker>
        </defs>
      </svg>
      <p className="text-center text-xs text-text-muted mt-3 font-mono">
        From TCP connect to route handler — no blocking at any step
      </p>
    </div>
  );
}
