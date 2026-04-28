interface LogoProps {
  variant?: 'full' | 'icon'
  scrolled?: boolean
  className?: string
}

export default function Logo({ variant = 'full', scrolled, className = '' }: LogoProps) {
  const textColor = scrolled ? '#0F2846' : '#FFFFFF'
  const taglineColor = scrolled ? '#007878' : '#99CCC0'
  const rungColor = scrolled ? '#2D3436' : '#FFFFFF'

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
        <defs>
          <linearGradient id="iconDna1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3DC9A5" />
            <stop offset="100%" stopColor="#1A8A6E" />
          </linearGradient>
          <linearGradient id="iconDna2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7EECD4" />
            <stop offset="100%" stopColor="#3DC9A5" />
          </linearGradient>
        </defs>
        {/* DNA helix scaled to fit 80×80 icon */}
        <g transform="translate(17, 8) scale(0.65)">
          <path d="M 15 10 Q 55 45 25 80 Q -5 115 35 145" stroke="url(#iconDna1)" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M 50 10 Q 10 45 40 80 Q 70 115 30 145" stroke="url(#iconDna2)" strokeWidth="8" fill="none" strokeLinecap="round" />
          <line x1="28" y1="30" x2="40" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <line x1="20" y1="55" x2="32" y2="55" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <line x1="25" y1="80" x2="40" y2="80" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <line x1="35" y1="105" x2="48" y2="105" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <line x1="28" y1="130" x2="38" y2="130" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </g>
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 400 160"
      width="180"
      height="72"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="dnaGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2BA084" />
          <stop offset="100%" stopColor="#1A8A6E" />
        </linearGradient>
        <linearGradient id="dnaGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3DC9A5" />
          <stop offset="100%" stopColor="#2BA084" />
        </linearGradient>
      </defs>

      {/* DNA helix mark — scaled to fit left column */}
      <g transform="translate(8, 4) scale(0.82)">
        <path d="M 15 10 Q 55 45 25 80 Q -5 115 35 145" stroke="url(#dnaGrad1)" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M 50 10 Q 10 45 40 80 Q 70 115 30 145" stroke="url(#dnaGrad2)" strokeWidth="7" fill="none" strokeLinecap="round" />
        <line x1="28" y1="30" x2="40" y2="30" stroke={rungColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
        <line x1="20" y1="55" x2="32" y2="55" stroke={rungColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
        <line x1="25" y1="80" x2="40" y2="80" stroke={rungColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
        <line x1="35" y1="105" x2="48" y2="105" stroke={rungColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
        <line x1="28" y1="130" x2="38" y2="130" stroke={rungColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
      </g>

      {/* Wordmark */}
      <text x="78" y="92" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="300" fontSize="48" letterSpacing="8" fill={textColor}>VITAE</text>

      {/* Tagline */}
      <text x="80" y="118" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="300" fontSize="13" letterSpacing="5" fill={taglineColor}>TECHNOLOGIES</text>
    </svg>
  )
}
