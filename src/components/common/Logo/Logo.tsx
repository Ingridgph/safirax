import { cn } from '@/lib/cn'
import './Logo.module.css'

interface LogoProps {
  variant?: 'hero' | 'header'
  className?: string
}

export function Logo({ variant = 'hero', className }: LogoProps) {
  if (variant === 'header') {
    return (
      <svg
        className={cn('logo', className)}
        viewBox="0 0 220 120"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="h-metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-purple-100)" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="var(--color-purple-100)" />
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
    )
  }

  return (
    <svg
      className={cn('logo', className)}
      viewBox="0 0 220 120"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <clipPath id="eye-clip">
          <path d="M30 60 Q70 20 110 20 Q150 20 190 60 Q150 100 110 100 Q70 100 30 60Z" />
        </clipPath>

        <linearGradient id="metal-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-purple-800)" />
          <stop offset="20%" stopColor="var(--color-purple-700)" />
          <stop offset="40%" stopColor="var(--color-purple-400)" />
          <stop offset="50%" stopColor="var(--color-purple-50)" />
          <stop offset="60%" stopColor="var(--color-purple-400)" />
          <stop offset="80%" stopColor="var(--color-purple-700)" />
          <stop offset="100%" stopColor="var(--color-purple-800)" />
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
            floodColor="var(--color-purple-200)"
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
            floodColor="var(--color-purple-200)"
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
          <feFlood floodColor="var(--color-purple-400)" floodOpacity="0.5" result="glowColor" />
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
      </defs>

      <g>
        <path
          d="M30 60 Q70 20 110 20 Q150 20 190 60 Q150 100 110 100 Q70 100 30 60Z"
          fill="var(--color-purple-50)"
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
  )
}