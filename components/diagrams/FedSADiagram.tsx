"use client";

// FedSA-AI: System Architecture Diagram
// Shows the 5 Docker modules and how they connect
export function FedSAArchitecture() {
  return (
    <div className="my-10 overflow-x-auto">
      <svg
        viewBox="0 0 820 460"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-3xl mx-auto block font-mono"
        aria-label="FedSA-AI system architecture diagram"
      >
        {/* Background */}
        <rect width="820" height="460" fill="#fafafa" rx="12" />

        {/* ── DB_Splitter ── */}
        <rect x="20" y="30" width="150" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="95" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">DB_Splitter</text>
        <text x="95" y="72" textAnchor="middle" fontSize="9.5" fill="#1e40af">Partitions dataset</text>
        <text x="95" y="84" textAnchor="middle" fontSize="9.5" fill="#1e40af">across nodes</text>

        {/* FLConfig */}
        <rect x="335" y="30" width="150" height="60" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
        <text x="410" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill="#92400e">FLConfig</text>
        <text x="410" y="72" textAnchor="middle" fontSize="9.5" fill="#78350f">M:semi-async, K:3</text>
        <text x="410" y="84" textAnchor="middle" fontSize="9.5" fill="#78350f">R:10, E:10, lr:0.01</text>

        {/* ── FLServer ── */}
        <rect x="335" y="190" width="150" height="80" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
        <text x="410" y="216" textAnchor="middle" fontSize="11" fontWeight="700" fill="#15803d">FLServer</text>
        <text x="410" y="232" textAnchor="middle" fontSize="9.5" fill="#166534">FedAvg / FedAvgM</text>
        <text x="410" y="246" textAnchor="middle" fontSize="9.5" fill="#166534">Semi-async aggregation</text>
        <text x="410" y="260" textAnchor="middle" fontSize="9.5" fill="#166534">4 resource channels</text>

        {/* ── FLClients (x3) ── */}
        {/* Client 1 */}
        <rect x="20" y="190" width="150" height="100" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="95" y="216" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5b21b6">FLClient 1</text>
        <text x="95" y="232" textAnchor="middle" fontSize="9.5" fill="#4c1d95">LSTM Autoencoder</text>
        <text x="95" y="246" textAnchor="middle" fontSize="9.5" fill="#4c1d95">Local training</text>
        <text x="95" y="260" textAnchor="middle" fontSize="9.5" fill="#4c1d95">Kafka consumer</text>
        <text x="95" y="274" textAnchor="middle" fontSize="9.5" fill="#4c1d95">NTP sync</text>

        {/* Client 2 */}
        <rect x="20" y="320" width="150" height="100" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="95" y="346" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5b21b6">FLClient 2</text>
        <text x="95" y="362" textAnchor="middle" fontSize="9.5" fill="#4c1d95">LSTM Autoencoder</text>
        <text x="95" y="376" textAnchor="middle" fontSize="9.5" fill="#4c1d95">Local training</text>
        <text x="95" y="390" textAnchor="middle" fontSize="9.5" fill="#4c1d95">Kafka consumer</text>
        <text x="95" y="404" textAnchor="middle" fontSize="9.5" fill="#4c1d95">NTP sync</text>

        {/* Client 3 */}
        <rect x="200" y="320" width="150" height="100" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="275" y="346" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5b21b6">FLClient 3</text>
        <text x="275" y="362" textAnchor="middle" fontSize="9.5" fill="#4c1d95">LSTM Autoencoder</text>
        <text x="275" y="376" textAnchor="middle" fontSize="9.5" fill="#4c1d95">Local training</text>
        <text x="275" y="390" textAnchor="middle" fontSize="9.5" fill="#4c1d95">Kafka consumer</text>
        <text x="275" y="404" textAnchor="middle" fontSize="9.5" fill="#4c1d95">NTP sync</text>

        {/* ── FLInference ── */}
        <rect x="640" y="190" width="160" height="80" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
        <text x="720" y="216" textAnchor="middle" fontSize="11" fontWeight="700" fill="#b91c1c">FLInference</text>
        <text x="720" y="232" textAnchor="middle" fontSize="9.5" fill="#991b1b">Real-time scoring</text>
        <text x="720" y="246" textAnchor="middle" fontSize="9.5" fill="#991b1b">MSE anomaly detection</text>
        <text x="720" y="260" textAnchor="middle" fontSize="9.5" fill="#991b1b">Kafka consumer</text>

        {/* Kafka bus */}
        <rect x="200" y="390" width="440" height="50" rx="8" fill="#f0fdf4" stroke="#15803d" strokeWidth="1.5" strokeDasharray="6 3" />
        <text x="420" y="411" textAnchor="middle" fontSize="11" fontWeight="700" fill="#15803d">Kafka</text>
        <text x="420" y="428" textAnchor="middle" fontSize="9.5" fill="#166534">Network metrics stream  |  deployment_state_topic</text>

        {/* ─── Arrows ─── */}
        {/* DB_Splitter → Client 1 */}
        <line x1="95" y1="90" x2="95" y2="190" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
        <text x="50" y="145" fontSize="9" fill="#3b82f6">data split</text>

        {/* DB_Splitter → Client 2 */}
        <line x1="95" y1="90" x2="95" y2="320" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-blue)" />

        {/* DB_Splitter → Client 3 */}
        <line x1="150" y1="90" x2="275" y2="320" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-blue)" />

        {/* FLConfig → FLServer */}
        <line x1="410" y1="90" x2="410" y2="190" stroke="#ca8a04" strokeWidth="1.5" markerEnd="url(#arrow-yellow)" />
        <text x="420" y="145" fontSize="9" fill="#ca8a04">config</text>

        {/* Client 1 → FLServer (gRPC weights up) */}
        <line x1="170" y1="230" x2="335" y2="230" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#arrow-purple)" />
        <text x="240" y="222" fontSize="9" fill="#7c3aed" textAnchor="middle">gRPC weights</text>

        {/* Client 2 → FLServer */}
        <line x1="170" y1="360" x2="300" y2="270" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-purple)" />

        {/* Client 3 → FLServer */}
        <line x1="350" y1="360" x2="400" y2="270" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-purple)" />

        {/* FLServer → Client 1 (global model back, scp) */}
        <line x1="335" y1="250" x2="170" y2="250" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arrow-green)" />
        <text x="253" y="265" fontSize="9" fill="#16a34a" textAnchor="middle">global model (scp)</text>

        {/* FLServer → FLInference */}
        <line x1="485" y1="230" x2="640" y2="230" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arrow-red)" />
        <text x="562" y="222" fontSize="9" fill="#dc2626" textAnchor="middle">.h5 model</text>

        {/* Kafka → Client 1 */}
        <line x1="240" y1="390" x2="95" y2="290" stroke="#15803d" strokeWidth="1.2" strokeDasharray="4 2" markerEnd="url(#arrow-green-sm)" />

        {/* Kafka → FLInference */}
        <line x1="560" y1="390" x2="720" y2="270" stroke="#15803d" strokeWidth="1.2" strokeDasharray="4 2" markerEnd="url(#arrow-green-sm)" />

        {/* Arrow markers */}
        <defs>
          <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#3b82f6" />
          </marker>
          <marker id="arrow-yellow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#ca8a04" />
          </marker>
          <marker id="arrow-purple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#7c3aed" />
          </marker>
          <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#16a34a" />
          </marker>
          <marker id="arrow-green-sm" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="#15803d" />
          </marker>
          <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#dc2626" />
          </marker>
        </defs>
      </svg>
      <p className="text-center text-xs text-text-muted mt-3 font-mono">
        FedSA-AI system architecture — 5 Docker modules
      </p>
    </div>
  );
}

// FedSA-AI: Training Round Flow Diagram
// Shows one complete federated learning round
export function FedSARoundFlow() {
  const steps = [
    { x: 60,  color: "#dbeafe", border: "#3b82f6", text: "#1d4ed8", label: "DB_Splitter", sub: "Partitions dataset\nper client (file-based\nsync)" },
    { x: 210, color: "#ede9fe", border: "#7c3aed", text: "#5b21b6", label: "FLClient", sub: "Trains LSTM on\nlocal data batch\n(E=10 epochs)" },
    { x: 360, color: "#dcfce7", border: "#16a34a", text: "#15803d", label: "FLServer", sub: "Collects K=3\nweight sets,\nruns FedAvg" },
    { x: 510, color: "#dcfce7", border: "#16a34a", text: "#15803d", label: "FLServer", sub: "Broadcasts global\nmodel via scp\nto all clients" },
    { x: 660, color: "#fee2e2", border: "#dc2626", text: "#b91c1c", label: "FLInference", sub: "Loads .h5 model,\nscores live traffic\nvia Kafka" },
  ];

  return (
    <div className="my-10 overflow-x-auto">
      <svg
        viewBox="0 0 820 220"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-3xl mx-auto block font-mono"
        aria-label="FedSA-AI training round flow diagram"
      >
        <rect width="820" height="220" fill="#fafafa" rx="12" />

        {/* Round label */}
        <text x="410" y="22" textAnchor="middle" fontSize="11" fontWeight="700" fill="#555">
          One Federated Learning Round  (R = 10 total)
        </text>

        {steps.map((s, i) => (
          <g key={i}>
            {/* Box */}
            <rect x={s.x} y="40" width="130" height="110" rx="8"
              fill={s.color} stroke={s.border} strokeWidth="1.5" />
            <text x={s.x + 65} y="64" textAnchor="middle" fontSize="11" fontWeight="700" fill={s.text}>
              {s.label}
            </text>
            {s.sub.split("\n").map((line, j) => (
              <text key={j} x={s.x + 65} y={82 + j * 14} textAnchor="middle" fontSize="9.5" fill={s.text}>
                {line}
              </text>
            ))}
            {/* Arrow to next */}
            {i < steps.length - 1 && (
              <>
                <line
                  x1={s.x + 130} y1="95" x2={s.x + 147} y2="95"
                  stroke="#888" strokeWidth="1.5"
                  markerEnd="url(#arrow-flow)"
                />
              </>
            )}
          </g>
        ))}

        {/* Step numbers */}
        {steps.map((s, i) => (
          <g key={`n-${i}`}>
            <circle cx={s.x + 65} cy="168" r="10" fill={s.border} />
            <text x={s.x + 65} y="172" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">
              {i + 1}
            </text>
          </g>
        ))}

        {/* Semi-async note */}
        <rect x="240" y="190" width="340" height="20" rx="4" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
        <text x="410" y="204" textAnchor="middle" fontSize="9.5" fill="#92400e">
          Semi-async: server aggregates after 70s timeout — does not wait for all clients
        </text>

        <defs>
          <marker id="arrow-flow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="#888" />
          </marker>
        </defs>
      </svg>
      <p className="text-center text-xs text-text-muted mt-3 font-mono">
        One complete training round — repeated R=10 times
      </p>
    </div>
  );
}
