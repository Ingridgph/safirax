import { useId } from 'react'
import { cn } from '@/lib/cn'
import './Logo.module.css'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  const uid = useId().replace(/:/g, '')
  const clipId = `${uid}-eye-clip`
  const strokeId = `${uid}-metal-stroke`
  const beamId = `${uid}-highlight-beam`
  const filterId = `${uid}-eye-3d`

  return (
    <svg
      className={cn('logo', className)}
      viewBox="0 0 220 120"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M30 60 Q70 20 110 20 Q150 20 190 60 Q150 100 110 100 Q70 100 30 60Z" />
        </clipPath>

        <linearGradient id={strokeId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-violet)" />
          <stop offset="20%" stopColor="var(--color-magenta)" />
          <stop offset="40%" stopColor="var(--color-cyan)" />
          <stop offset="50%" stopColor="var(--color-lavender)" />
          <stop offset="60%" stopColor="var(--color-cyan)" />
          <stop offset="80%" stopColor="var(--color-magenta)" />
          <stop offset="100%" stopColor="var(--color-violet)" />
        </linearGradient>

        <linearGradient id={beamId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-lavender)" stopOpacity="0" />
          <stop offset="40%" stopColor="var(--color-lavender)" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="60%" stopColor="var(--color-lavender)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--color-lavender)" stopOpacity="0" />
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

        <filter id={filterId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="shadowBlur1" />
          <feOffset dx="-1" dy="-1" result="shadowOffset1" />
          <feFlood
            floodColor="var(--color-cyan)"
            floodOpacity="0.6"
            result="shadowColor1"
          />
          <feComposite in="shadowColor1" in2="shadowOffset1" operator="in" result="shadow1" />

          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="shadowBlur2" />
          <feOffset dx="-0.5" dy="-0.5" result="shadowOffset2" />
          <feFlood
            floodColor="var(--color-cyan)"
            floodOpacity="0.6"
            result="shadowColor2"
          />
          <feComposite in="shadowColor2" in2="shadowOffset2" operator="in" result="shadow2" />

          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="glowBlur" />
          <feFlood floodColor="var(--color-magenta)" floodOpacity="0.18" result="glowColor" />
          <feComposite in="glowColor" in2="glowBlur" operator="in" result="glow" />

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
          fill="none"
          stroke="none"
        />
        <g clipPath={`url(#${clipId})`}>
          <g>
            <circle
              cx="110"
              cy="60"
              r="37"
              fill="none"
              stroke={`url(#${strokeId})`}
              strokeWidth="5"
            />
            <circle
              cx="110"
              cy="60"
              r="37"
              fill="none"
              stroke={`url(#${beamId})`}
              strokeWidth="2"
            />

            <g>
              <polygon
                fill={`url(#${strokeId})`}
                stroke={`url(#${strokeId})`}
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
                points="110,42 114,54 127,54 117,62 121,74 110,67 99,74 103,62 93,54 106,54"
              />
              <polygon
                fill="none"
                stroke={`url(#${beamId})`}
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
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
                fill={`url(#${strokeId})`}
                stroke={`url(#${strokeId})`}
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
                points="110,34 116,52 135,52 120,63 125,81 110,70 95,81 100,63 85,52 104,52"
              />
              <polygon
                fill="none"
                stroke={`url(#${beamId})`}
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
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
          stroke={`url(#${strokeId})`}
          strokeWidth="5"
          filter={`url(#${filterId})`}
        />
        <path
          d="M30 60 Q70 20 110 20 Q150 20 190 60 Q150 100 110 100 Q70 100 30 60Z"
          fill="none"
          stroke={`url(#${beamId})`}
          strokeWidth="1.5"
        />
      </g>
    </svg>
  )
}
