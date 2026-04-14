// Inline SVG shirt design graphics — these simulate real merch-ready artwork
// Each is a self-contained visual that looks like an actual product design

export function DesignBornWild() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <text x="150" y="100" textAnchor="middle" fill="#f0f0f5" fontFamily="Georgia, serif" fontSize="52" fontWeight="bold" letterSpacing="-1">BORN</text>
      <text x="150" y="160" textAnchor="middle" fill="#22d3ee" fontFamily="Georgia, serif" fontSize="58" fontWeight="bold" fontStyle="italic" letterSpacing="-2">WILD</text>
      <line x1="60" y1="175" x2="240" y2="175" stroke="#22d3ee" strokeWidth="1.5" opacity="0.5" />
      <text x="150" y="200" textAnchor="middle" fill="#8888a0" fontFamily="sans-serif" fontSize="11" letterSpacing="6">EST. 2024</text>
    </svg>
  )
}

export function DesignSkullCrown() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      {/* Crown */}
      <polygon points="110,100 120,70 140,90 150,55 160,90 180,70 190,100" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
      {/* Skull */}
      <ellipse cx="150" cy="160" rx="50" ry="55" fill="none" stroke="#f0f0f5" strokeWidth="2.5" />
      <circle cx="132" cy="148" r="12" fill="#0a0a0f" stroke="#f0f0f5" strokeWidth="2" />
      <circle cx="168" cy="148" r="12" fill="#0a0a0f" stroke="#f0f0f5" strokeWidth="2" />
      <path d="M140 178 L145 185 L150 178 L155 185 L160 178" fill="none" stroke="#f0f0f5" strokeWidth="2" />
      <text x="150" y="245" textAnchor="middle" fill="#8888a0" fontFamily="sans-serif" fontSize="11" letterSpacing="5">FEARLESS</text>
    </svg>
  )
}

export function DesignNoLimits() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <rect x="50" y="70" width="200" height="160" rx="8" fill="none" stroke="#2a2a3a" strokeWidth="1.5" />
      <rect x="60" y="80" width="180" height="140" rx="4" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.3" />
      <text x="150" y="128" textAnchor="middle" fill="#f0f0f5" fontFamily="Impact, sans-serif" fontSize="42" letterSpacing="3">NO</text>
      <text x="150" y="180" textAnchor="middle" fill="#22d3ee" fontFamily="Impact, sans-serif" fontSize="42" letterSpacing="3">LIMITS</text>
      <line x1="80" y1="195" x2="220" y2="195" stroke="#f0f0f5" strokeWidth="0.5" opacity="0.3" />
      <text x="150" y="215" textAnchor="middle" fill="#55556a" fontFamily="sans-serif" fontSize="10" letterSpacing="8">STREETWEAR</text>
    </svg>
  )
}

export function DesignLightning() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      {/* Lightning bolt */}
      <polygon points="170,50 120,155 155,155 130,250 210,130 170,130 195,50" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="170,50 120,155 155,155 130,250 210,130 170,130 195,50" fill="#22d3ee" opacity="0.08" />
      <text x="150" y="285" textAnchor="middle" fill="#8888a0" fontFamily="sans-serif" fontSize="11" letterSpacing="6">ELECTRIC</text>
    </svg>
  )
}

export function DesignVintage() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <circle cx="150" cy="145" r="85" fill="none" stroke="#2a2a3a" strokeWidth="2" />
      <circle cx="150" cy="145" r="75" fill="none" stroke="#f0f0f5" strokeWidth="1" opacity="0.3" />
      <text x="150" y="115" textAnchor="middle" fill="#f0f0f5" fontFamily="Georgia, serif" fontSize="22" fontWeight="bold">ORIGINAL</text>
      <line x1="90" y1="125" x2="210" y2="125" stroke="#22d3ee" strokeWidth="1.5" />
      <text x="150" y="150" textAnchor="middle" fill="#22d3ee" fontFamily="Georgia, serif" fontSize="32" fontWeight="bold">1987</text>
      <text x="150" y="175" textAnchor="middle" fill="#8888a0" fontFamily="sans-serif" fontSize="10" letterSpacing="4">AUTHENTIC GOODS</text>
      {/* Stars */}
      <text x="105" y="152" textAnchor="middle" fill="#22d3ee" fontSize="14">&#9733;</text>
      <text x="195" y="152" textAnchor="middle" fill="#22d3ee" fontSize="14">&#9733;</text>
    </svg>
  )
}

export function DesignWaveAbstract() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <path d="M40 130 Q100 80 150 130 Q200 180 260 130" fill="none" stroke="#22d3ee" strokeWidth="2.5" opacity="0.8" />
      <path d="M40 155 Q100 105 150 155 Q200 205 260 155" fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.5" />
      <path d="M40 180 Q100 130 150 180 Q200 230 260 180" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.3" />
      <text x="150" y="100" textAnchor="middle" fill="#f0f0f5" fontFamily="sans-serif" fontSize="14" fontWeight="bold" letterSpacing="8">FLOW</text>
      <text x="150" y="240" textAnchor="middle" fill="#55556a" fontFamily="sans-serif" fontSize="10" letterSpacing="5">ABSTRACT</text>
    </svg>
  )
}

export function DesignRiseUp() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      {/* Arrow up */}
      <polygon points="150,60 200,130 175,130 175,210 125,210 125,130 100,130" fill="none" stroke="#f0f0f5" strokeWidth="2" />
      <polygon points="150,60 200,130 175,130 175,210 125,210 125,130 100,130" fill="#f0f0f5" opacity="0.05" />
      <text x="150" y="250" textAnchor="middle" fill="#22d3ee" fontFamily="Impact, sans-serif" fontSize="36" letterSpacing="6">RISE</text>
      <text x="150" y="275" textAnchor="middle" fill="#55556a" fontFamily="sans-serif" fontSize="10" letterSpacing="8">ABOVE IT ALL</text>
    </svg>
  )
}

export function DesignMidnight() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      {/* Moon crescent */}
      <circle cx="150" cy="120" r="45" fill="none" stroke="#f0f0f5" strokeWidth="2" />
      <circle cx="170" cy="110" r="38" fill="#0a0a0f" stroke="none" />
      {/* Stars */}
      <circle cx="100" cy="80" r="2" fill="#22d3ee" />
      <circle cx="210" cy="95" r="1.5" fill="#22d3ee" opacity="0.7" />
      <circle cx="195" cy="70" r="1" fill="#22d3ee" opacity="0.5" />
      <circle cx="120" cy="60" r="1.5" fill="#f0f0f5" opacity="0.4" />
      <text x="150" y="210" textAnchor="middle" fill="#f0f0f5" fontFamily="Georgia, serif" fontSize="28" fontWeight="bold" letterSpacing="2">MIDNIGHT</text>
      <text x="150" y="238" textAnchor="middle" fill="#22d3ee" fontFamily="Georgia, serif" fontSize="16" fontStyle="italic">Society</text>
    </svg>
  )
}

// Design collection for easy import
export const designs = [
  { id: '001', Component: DesignBornWild, label: 'Born Wild', category: 'Typography' },
  { id: '002', Component: DesignSkullCrown, label: 'Skull Crown', category: 'Streetwear' },
  { id: '003', Component: DesignNoLimits, label: 'No Limits', category: 'Streetwear' },
  { id: '004', Component: DesignLightning, label: 'Electric', category: 'Abstract' },
  { id: '005', Component: DesignVintage, label: 'Original 1987', category: 'Vintage' },
  { id: '006', Component: DesignWaveAbstract, label: 'Flow', category: 'Abstract' },
  { id: '007', Component: DesignRiseUp, label: 'Rise Up', category: 'Typography' },
  { id: '008', Component: DesignMidnight, label: 'Midnight Society', category: 'Vintage' },
]

// Shirt mockup wrapper that places a design on a t-shirt silhouette
export function ShirtWithDesign({ design: Design, shirtColor = '#1a1a1a', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 240" className="w-full h-full">
        {/* Shirt silhouette */}
        <path
          d="M40,55 L15,75 L30,95 L50,80 L50,220 L150,220 L150,80 L170,95 L185,75 L160,55 L140,30 Q120,15 100,20 Q80,15 60,30 Z"
          fill={shirtColor}
          stroke="#ffffff08"
          strokeWidth="1"
        />
        {/* Design area on shirt */}
        <foreignObject x="60" y="60" width="80" height="80">
          <div className="w-full h-full">
            <Design />
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}
