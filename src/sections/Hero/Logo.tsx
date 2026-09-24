export function Logo() {
  return (
    <svg
      className="logo-eye"
      viewBox="0 0 220 120"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <clipPath id="eye-clip">
          <path d="M30 60 Q70 20 110 20 Q150 20 190 60 Q150 100 110 100 Q70 100 30 60Z" />
        </clipPath>

        <linearGradient id="metal-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a0035" />
          <stop offset="20%" stopColor="#49008A" />
          <stop offset="40%" stopColor="#8915EF" />
          <stop offset="50%" stopColor="#A48CC4" />
          <stop offset="60%" stopColor="#8915EF" />
          <stop offset="80%" stopColor="#49008A" />
          <stop offset="100%" stopColor="#1a0035" />
        </linearGradient>

        <linearGradient id="highlight-beam" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c9a0ff" stopOpacity="0" />
          <stop offset="40%" stopColor="#d9b3ff" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#e8ccff" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#d9b3ff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#c9a0ff" stopOpacity="0" />
          <animate
            attributeName="x1"
            values="-50%;0%;50%;100%;150%"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="50%;100%;150%;200%;250%"
            dur="4s"
            repeatCount="indefinite"
          />
        </linearGradient>

        <filter id="eye-3d" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur
            in="SourceAlpha"
            stdDeviation="4"
            result="shadowBlur1"
          />
          <feOffset dx="-2" dy="-2" result="shadowOffset1" />
          <feFlood
            floodColor="#C2A5E8"
            floodOpacity="1"
            result="shadowColor1"
          />
          <feComposite
            in="shadowColor1"
            in2="shadowOffset1"
            operator="in"
            result="shadow1"
          />

          <feGaussianBlur
            in="SourceAlpha"
            stdDeviation="2"
            result="shadowBlur2"
          />
          <feOffset dx="-1" dy="-1" result="shadowOffset2" />
          <feFlood
            floodColor="#C2A5E8"
            floodOpacity="1"
            result="shadowColor2"
          />
          <feComposite
            in="shadowColor2"
            in2="shadowOffset2"
            operator="in"
            result="shadow2"
          />

          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="6"
            result="glowBlur"
          />
          <feFlood floodColor="#8915EF" floodOpacity="0.5" result="glowColor" />
          <feComposite
            in="glowColor"
            in2="glowBlur"
            operator="in"
            result="glow"
          />

          <feMerge>
            <feMergeNode in="shadow1" />
            <feMergeNode in="shadow2" />
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="circle-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur
            in="SourceAlpha"
            stdDeviation="3"
            result="shadowBlur"
          />
          <feOffset dx="-1.5" dy="-1.5" result="shadowOffset" />
          <feFlood
            floodColor="#190030"
            floodOpacity="0.6"
            result="shadowColor"
          />
          <feComposite
            in="shadowColor"
            in2="shadowOffset"
            operator="in"
            result="shadow"
          />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="star-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur
            in="SourceAlpha"
            stdDeviation="1.5"
            result="shadowBlur"
          />
          <feOffset dx="-1" dy="-1" result="shadowOffset" />
          <feFlood
            floodColor="#190030"
            floodOpacity="0.35"
            result="shadowColor1"
          />
          <feComposite
            in="shadowColor"
            in2="shadowOffset"
            operator="in"
            result="shadow"
          />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g>
        <path
          d="M30 60 Q70 20 110 20 Q150 20 190 60 Q150 100 110 100 Q70 100 30 60Z"
          fill="#A48CC4"
          stroke="none"
        />
        <g clipPath="url(#eye-clip)">
          <g>
            <circle
              cx="110"
              cy="60"
              r="37"
              fill="none"
              stroke="url(#metal-stroke)"
              strokeWidth="5"
            />
            <circle
              cx="110"
              cy="60"
              r="37"
              fill="none"
              stroke="url(#highlight-beam)"
              strokeWidth="2"
            />

            <g>
              <polygon
                fill="url(#metal-stroke)"
                points="110,42 114,54 127,54 117,62 121,74 110,67 99,74 103,62 93,54 106,54"
              />
              <polygon
                fill="none"
                stroke="url(#highlight-beam)"
                strokeWidth="1"
                points="110,42 114,54 127,54 117,62 121,74 110,67 99,74 103,62 93,54 106,54"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 110 60"
                to="360 110 60"
                dur="4s"
                repeatCount="indefinite"
              />
            </g>
            <g>
              <polygon
                fill="url(#metal-stroke)"
                points="110,34 116,52 135,52 120,63 125,81 110,70 95,81 100,63 85,52 104,52"
              />
              <polygon
                fill="none"
                stroke="url(#highlight-beam)"
                strokeWidth="1"
                points="110,34 116,52 135,52 120,63 125,81 110,70 95,81 100,63 85,52 104,52"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 110 60"
                to="-360 110 60"
                dur="6s"
                repeatCount="indefinite"
              />
            </g>
          </g>
        </g>

        <path
          d="M30 60 Q70 20 110 20 Q150 20 190 60 Q150 100 110 100 Q70 100 30 60Z"
          fill="none"
          stroke="url(#metal-stroke)"
          strokeWidth="5"
          filter="url(#eye-3d)"
        />
        <path
          d="M30 60 Q70 20 110 20 Q150 20 190 60 Q150 100 110 100 Q70 100 30 60Z"
          fill="none"
          stroke="url(#highlight-beam)"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
