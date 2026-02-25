"use client";

// AI Agent Skill: BLoC + Clean Architecture decision tree diagram
export function SkillArchitecture() {
  return (
    <div className="my-10 overflow-x-auto">
      <svg
        viewBox="0 0 820 420"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-3xl mx-auto block font-mono"
        aria-label="BLoC Clean Architecture skill diagram"
      >
        <rect width="820" height="420" fill="#fafafa" rx="12" />

        {/* Title */}
        <text x="410" y="28" textAnchor="middle" fontSize="12" fontWeight="700" fill="#333">
          Skill Decision Tree — BLoC + Clean Architecture
        </text>

        {/* ── AI Prompt (input) ── */}
        <rect x="310" y="45" width="200" height="45" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="410" y="65" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">AI Coding Request</text>
        <text x="410" y="81" textAnchor="middle" fontSize="9.5" fill="#1e40af">"Add a new feature / widget / datasource"</text>

        {/* Arrow down to decision */}
        <line x1="410" y1="90" x2="410" y2="118" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-sk)" />

        {/* ── Skill reads context ── */}
        <rect x="285" y="118" width="250" height="40" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
        <text x="410" y="136" textAnchor="middle" fontSize="10" fontWeight="700" fill="#92400e">Skill reads project context</text>
        <text x="410" y="150" textAnchor="middle" fontSize="9" fill="#78350f">Existing features? New or extending?</text>

        {/* Branches */}
        <line x1="285" y1="138" x2="170" y2="185" stroke="#555" strokeWidth="1.2" markerEnd="url(#arr-sk)" />
        <line x1="410" y1="158" x2="410" y2="185" stroke="#555" strokeWidth="1.2" markerEnd="url(#arr-sk)" />
        <line x1="535" y1="138" x2="640" y2="185" stroke="#555" strokeWidth="1.2" markerEnd="url(#arr-sk)" />

        <text x="200" y="175" textAnchor="middle" fontSize="9" fill="#555">New feature</text>
        <text x="410" y="180" textAnchor="middle" fontSize="9" fill="#555">Add widget</text>
        <text x="620" y="175" textAnchor="middle" fontSize="9" fill="#555">New datasource</text>

        {/* ── Branch 1: New Feature ── */}
        <rect x="40" y="188" width="260" height="140" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="170" y="210" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5b21b6">New Feature Scaffold</text>
        <text x="170" y="228" textAnchor="middle" fontSize="9" fill="#4c1d95">feature/</text>
        <text x="170" y="243" textAnchor="middle" fontSize="9" fill="#4c1d95">  bloc/  — events, states, BLoC class</text>
        <text x="170" y="258" textAnchor="middle" fontSize="9" fill="#4c1d95">  data/  — repo, datasource, models</text>
        <text x="170" y="273" textAnchor="middle" fontSize="9" fill="#4c1d95">  view/  — pages, widgets only</text>
        <text x="170" y="288" textAnchor="middle" fontSize="9" fill="#4c1d95">Design tokens: AppColors, AppSpacing</text>
        <text x="170" y="303" textAnchor="middle" fontSize="9" fill="#4c1d95">No hardcoded colors or sizes anywhere</text>
        <text x="170" y="318" textAnchor="middle" fontSize="9" fill="#4c1d95">Loading + error states mandatory</text>

        {/* ── Branch 2: Add Widget ── */}
        <rect x="285" y="188" width="250" height="140" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
        <text x="410" y="210" textAnchor="middle" fontSize="10" fontWeight="700" fill="#15803d">Add Widget to Existing Feature</text>
        <text x="410" y="228" textAnchor="middle" fontSize="9" fill="#166534">Widget lives in view/ only</text>
        <text x="410" y="243" textAnchor="middle" fontSize="9" fill="#166534">Reads state via BlocBuilder</text>
        <text x="410" y="258" textAnchor="middle" fontSize="9" fill="#166534">Dispatches events — no business logic</text>
        <text x="410" y="273" textAnchor="middle" fontSize="9" fill="#166534">No direct repo/datasource access</text>
        <text x="410" y="288" textAnchor="middle" fontSize="9" fill="#166534">Tokens from AppColors/AppTypography</text>
        <text x="410" y="303" textAnchor="middle" fontSize="9" fill="#166534">All sizes from AppSpacing</text>

        {/* ── Branch 3: New Datasource ── */}
        <rect x="520" y="188" width="280" height="140" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
        <text x="660" y="210" textAnchor="middle" fontSize="10" fontWeight="700" fill="#b91c1c">New Datasource Integration</text>
        <text x="660" y="228" textAnchor="middle" fontSize="9" fill="#991b1b">Datasource in data/datasource/</text>
        <text x="660" y="243" textAnchor="middle" fontSize="9" fill="#991b1b">Abstract interface first</text>
        <text x="660" y="258" textAnchor="middle" fontSize="9" fill="#991b1b">Repository wraps datasource</text>
        <text x="660" y="273" textAnchor="middle" fontSize="9" fill="#991b1b">BLoC depends on repo only</text>
        <text x="660" y="288" textAnchor="middle" fontSize="9" fill="#991b1b">No network calls from BLoC or view</text>
        <text x="660" y="303" textAnchor="middle" fontSize="9" fill="#991b1b">Result/Either pattern for errors</text>

        {/* ── Data Flow strip at bottom ── */}
        <rect x="40" y="355" width="740" height="50" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.2" />
        <text x="410" y="374" textAnchor="middle" fontSize="10" fontWeight="700" fill="#334155">
          Enforced Data Flow (all paths)
        </text>
        <text x="410" y="391" textAnchor="middle" fontSize="9" fill="#475569">
          UI dispatches Event  →  BLoC emits Loading  →  Repo calls Datasource  →  Result propagates up  →  BLoC emits Success / Error  →  UI rebuilds
        </text>

        <defs>
          <marker id="arr-sk" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="#555" />
          </marker>
        </defs>
      </svg>
      <p className="text-center text-xs text-text-muted mt-3 font-mono">
        Skill decision tree — three entry paths, one enforced data flow
      </p>
    </div>
  );
}
