interface LogoProps {
  variant?: 'full' | 'icon'
  scrolled?: boolean
  className?: string
}

export default function Logo({ variant = 'full', scrolled, className = '' }: LogoProps) {
  const textColor = scrolled ? '#0F2846' : '#FFFFFF'
  const taglineColor = scrolled ? '#007878' : '#99CCC0'

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 80 80"
        width="32"
        height="32"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="80" height="80" rx="16" fill="#007878" />
        <path
          d="M20 22 L40 58 L60 22"
          stroke="white"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 440 160"
      width="180"
      height="65"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="dotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3DC9A5' }} />
          <stop offset="100%" style={{ stopColor: '#1A8A6E' }} />
        </linearGradient>
      </defs>

      <g transform="translate(30, 30)">
        {/* V */}
        <path d="M 0 10 L 22 80 L 44 10" stroke={textColor} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* I - stem */}
        <line x1="68" y1="10" x2="68" y2="80" stroke={textColor} strokeWidth="7" strokeLinecap="round" />

        {/* Living dot on the I - leaf/droplet shape */}
        <path d="M 68 -8 Q 75 -14 78 -6 Q 80 0 68 4 Q 56 0 58 -6 Q 61 -14 68 -8 Z" fill="url(#dotGrad)" />
        <line x1="68" y1="-8" x2="68" y2="2" stroke="#1A6B5A" strokeWidth="0.8" opacity="0.5" />

        {/* T */}
        <line x1="92" y1="10" x2="132" y2="10" stroke={textColor} strokeWidth="7" strokeLinecap="round" />
        <line x1="112" y1="10" x2="112" y2="80" stroke={textColor} strokeWidth="7" strokeLinecap="round" />

        {/* A */}
        <path d="M 150 80 L 172 10 L 194 80" stroke={textColor} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="158" y1="55" x2="186" y2="55" stroke={textColor} strokeWidth="5" strokeLinecap="round" />

        {/* E */}
        <line x1="218" y1="10" x2="218" y2="80" stroke={textColor} strokeWidth="7" strokeLinecap="round" />
        <line x1="218" y1="10" x2="250" y2="10" stroke={textColor} strokeWidth="7" strokeLinecap="round" />
        <line x1="218" y1="45" x2="244" y2="45" stroke={textColor} strokeWidth="7" strokeLinecap="round" />
        <line x1="218" y1="80" x2="250" y2="80" stroke={textColor} strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* Tagline */}
      <text x="32" y="135" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="300" fontSize="14" letterSpacing="12" fill={taglineColor}>TECHNOLOGIES</text>
    </svg>
  )
}
