type NodeKind = "mission" | "system" | "identity" | "vendor" | "infra";
type Node = {
  id: string;
  x: number;
  y: number;
  r: number;
  kind: NodeKind;
  label?: string;
  critical?: boolean;
  risk?: boolean;
};

const NODES: Node[] = [
  { id: "m1", x: 120, y: 50, r: 7, kind: "mission", label: "電力供給" },
  { id: "m2", x: 280, y: 50, r: 8, kind: "mission", label: "通信基盤", critical: true },
  { id: "m3", x: 440, y: 50, r: 7, kind: "mission", label: "監視業務" },
  { id: "s1", x: 80, y: 140, r: 5, kind: "system" },
  { id: "s2", x: 200, y: 145, r: 5, kind: "system" },
  { id: "s3", x: 320, y: 140, r: 5, kind: "system" },
  { id: "s4", x: 420, y: 150, r: 5, kind: "system" },
  { id: "s5", x: 510, y: 140, r: 5, kind: "system" },
  { id: "i1", x: 60, y: 240, r: 4, kind: "identity" },
  { id: "i2", x: 160, y: 245, r: 4, kind: "identity" },
  { id: "v1", x: 250, y: 240, r: 5, kind: "vendor", risk: true },
  { id: "i3", x: 340, y: 248, r: 4, kind: "identity" },
  { id: "v2", x: 430, y: 240, r: 4, kind: "vendor" },
  { id: "i4", x: 520, y: 246, r: 4, kind: "identity" },
  { id: "o1", x: 100, y: 340, r: 4, kind: "infra" },
  { id: "o2", x: 220, y: 348, r: 4, kind: "infra" },
  { id: "o3", x: 320, y: 340, r: 4, kind: "infra" },
  { id: "o4", x: 440, y: 350, r: 4, kind: "infra" },
];

const EDGES: Array<[string, string]> = [
  ["m1", "s1"], ["m1", "s2"], ["m2", "s2"], ["m2", "s3"], ["m2", "s4"],
  ["m3", "s4"], ["m3", "s5"],
  ["s1", "i1"], ["s2", "i2"], ["s2", "v1"], ["s3", "v1"], ["s3", "i3"],
  ["s4", "v2"], ["s4", "i3"], ["s5", "i4"],
  ["i1", "o1"], ["v1", "o2"], ["i3", "o3"], ["v2", "o3"], ["i4", "o4"],
  ["o2", "o3"],
];

const RISK_PATH: Array<[string, string]> = [
  ["v1", "s3"],
  ["s3", "s2"],
  ["s2", "m2"],
];

const TIER_LABELS: Array<[string, number]> = [
  ["M", 70],
  ["S", 165],
  ["I·V", 265],
  ["O", 360],
];

export function MissionGraph({ width = 560, height = 420, dim = false }: {
  width?: number;
  height?: number;
  dim?: boolean;
}) {
  const findNode = (id: string): Node => {
    const n = NODES.find((node) => node.id === id);
    if (!n) throw new Error(`Unknown node: ${id}`);
    return n;
  };
  const colorFor = (kind: NodeKind) => {
    if (dim) return "var(--ink-300)";
    return ({
      mission: "var(--ink-900)",
      system: "var(--ink-700)",
      identity: "var(--ink-500)",
      vendor: "var(--ink-500)",
      infra: "var(--ink-500)",
    } as const)[kind];
  };

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      style={{ display: "block" }}
      role="img"
      aria-label="Mission Graph"
    >
      <defs>
        <pattern id="mg-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="var(--ink-100)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width={width} height={height} fill="url(#mg-grid)" opacity="0.6" />
      {[100, 195, 295, 395].map((y) => (
        <line
          key={y}
          x1="20"
          x2={width - 20}
          y1={y}
          y2={y}
          stroke="var(--ink-200)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
      ))}
      {TIER_LABELS.map(([sh, y]) => (
        <text
          key={sh}
          x="20"
          y={y - 22}
          style={{
            font: "500 9px var(--font-mono)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fill: "var(--fg-muted)",
          }}
        >
          {sh}
        </text>
      ))}
      {EDGES.map(([a, b]) => {
        const A = findNode(a);
        const B = findNode(b);
        return (
          <line
            key={`e-${a}-${b}`}
            x1={A.x}
            y1={A.y}
            x2={B.x}
            y2={B.y}
            stroke="var(--ink-200)"
            strokeWidth="1"
          />
        );
      })}
      {!dim &&
        RISK_PATH.map(([a, b]) => {
          const A = findNode(a);
          const B = findNode(b);
          return (
            <line
              key={`rp-${a}-${b}`}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke="var(--shu)"
              strokeWidth="1.5"
            />
          );
        })}
      {NODES.map((n) => (
        <g key={n.id}>
          {n.critical && !dim && (
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r + 6}
              fill="none"
              stroke="var(--shu)"
              strokeWidth="1"
              opacity="0.5"
            />
          )}
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.kind === "mission" ? (dim ? "var(--ink-300)" : "var(--washi)") : colorFor(n.kind)}
            stroke={colorFor(n.kind)}
            strokeWidth={n.kind === "mission" ? 1.5 : 1}
          />
          {n.risk && !dim && (
            <circle cx={n.x + n.r + 3} cy={n.y - n.r - 3} r="3" fill="var(--shu)" />
          )}
        </g>
      ))}
      {NODES.filter((n) => n.kind === "mission").map((n) => (
        <text
          key={`l${n.id}`}
          x={n.x}
          y={n.y - 14}
          textAnchor="middle"
          style={{ font: "500 11px var(--font-sans)", fill: "var(--fg)" }}
        >
          {n.label}
        </text>
      ))}
    </svg>
  );
}
