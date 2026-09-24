import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <svg className="header-eye" viewBox="0 0 220 120" aria-hidden="true">
            <defs>
              <linearGradient id="h-metal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E0BDFF" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#E0BDFF" />
              </linearGradient>
              <clipPath id="h-clip">
                <path d="M30 60 Q70 20 110 20 Q150 20 190 60 Q150 100 110 100 Q70 100 30 60Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#h-clip)">
              <circle cx="110" cy="60" r="37" fill="none" stroke="url(#h-metal)" strokeWidth="5" />
              <polygon
                fill="url(#h-metal)"
                points="110,42 114,54 127,54 117,62 121,74 110,67 99,74 103,62 93,54 106,54"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 110 60"
                  to="360 110 60"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </polygon>
              <polygon
                fill="url(#h-metal)"
                points="110,34 116,52 135,52 120,63 125,81 110,70 95,81 100,63 85,52 104,52"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 110 60"
                  to="-360 110 60"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </polygon>
            </g>
            <path
              d="M30 60 Q70 20 110 20 Q150 20 190 60 Q150 100 110 100 Q70 100 30 60Z"
              fill="none"
              stroke="url(#h-metal)"
              strokeWidth="5"
            />
          </svg>
        </div>
        <nav className="header-nav">
          <a href="#" className="header-link active">Home</a>
          <a href="#" className="header-link">Serviços</a>
          <a href="#portfolio" className="header-link">Portfólio</a>
          <a href="#" className="header-link">Contato</a>
        </nav>
        <div className="header-right">
          <button className="header-btn">Fale Conosco</button>
        </div>
      </div>
    </header>
  )
}
