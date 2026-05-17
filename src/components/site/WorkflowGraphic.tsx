// Animated SVG workflow graphic for hero - automation nodes connected by red lines
export default function WorkflowGraphic() {
  const nodes = [
    { x: 60, y: 80, label: "CRM" },
    { x: 60, y: 200, label: "Salesforce" },
    { x: 60, y: 320, label: "Meta Ads" },
    { x: 280, y: 60, label: "n8n" },
    { x: 280, y: 200, label: "AI Engine" },
    { x: 280, y: 340, label: "Slack" },
    { x: 500, y: 80, label: "ClickUp" },
    { x: 500, y: 200, label: "Reports" },
    { x: 500, y: 320, label: "Email" },
  ];
  const links: [number, number][] = [
    [0, 3], [0, 4], [1, 4], [2, 4], [2, 5],
    [3, 6], [4, 6], [4, 7], [4, 8], [5, 8], [3, 7],
  ];

  return (
    <div className="relative w-full aspect-[5/4] max-w-2xl mx-auto">
      {/* glow */}
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.62 0.26 27 / 0.18), transparent 70%)" }} />
      <svg viewBox="0 0 560 400" className="w-full h-full">
        <defs>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.26 27)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="oklch(0.62 0.26 27)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.62 0.26 27)" stopOpacity="0.1" />
          </linearGradient>
          <filter id="g">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* faint grid */}
        <g opacity="0.08" stroke="white">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="0" x2="560" y1={i * 50} y2={i * 50} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} x2={i * 50} y1="0" y2="400" />
          ))}
        </g>

        {/* connection lines */}
        {links.map(([a, b], i) => {
          const A = nodes[a], B = nodes[b];
          const d = `M ${A.x} ${A.y} C ${(A.x + B.x) / 2} ${A.y}, ${(A.x + B.x) / 2} ${B.y}, ${B.x} ${B.y}`;
          return (
            <g key={i}>
              <path d={d} fill="none" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
              <path
                d={d}
                fill="none"
                stroke="oklch(0.62 0.26 27)"
                strokeWidth="1.2"
                strokeDasharray="4 200"
                className="animate-flow"
                style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${3 + (i % 3)}s` }}
              />
            </g>
          );
        })}

        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="22" fill="oklch(0.09 0 0)" stroke="oklch(1 0 0 / 0.12)" />
            <circle cx={n.x} cy={n.y} r="4" fill="oklch(0.62 0.26 27)" className="animate-pulse-red" style={{ animationDelay: `${i * 0.2}s` }} />
            <text x={n.x} y={n.y + 42} textAnchor="middle" fill="white" fillOpacity="0.7" fontSize="11" fontFamily="Inter, sans-serif">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
