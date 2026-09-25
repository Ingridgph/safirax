import { cn } from '@/lib/cn'

interface AuroraProps {
  className?: string
}

export function Aurora({ className }: AuroraProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden pointer-events-none animate-aurora-zoom will-change-transform',
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="absolute -top-[10%] -left-[10%] w-1/2 h-1/2 rounded-full mix-blend-screen blur-[87px] bg-[var(--color-lavender)] animate-aurora will-change-[transform,opacity,filter]"
        style={{ opacity: 0.67, animationDelay: '0s' }}
      />
      <div
        className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-[40%] mix-blend-screen blur-[87px] bg-[var(--color-magenta)] animate-aurora will-change-[transform,opacity,filter]"
        style={{ opacity: 0.67, animationDelay: '2s' }}
      />
      <div
        className="absolute -bottom-[20%] left-[20%] w-1/2 h-[60%] rounded-[60%] mix-blend-screen blur-[87px] bg-[var(--color-cyan)] animate-aurora will-change-[transform,opacity,filter]"
        style={{ opacity: 0.67, animationDelay: '4s' }}
      />
      <div
        className="absolute top-[10%] right-[20%] w-[40%] h-[40%] rounded-full mix-blend-screen blur-[87px] bg-[var(--color-violet)] animate-aurora will-change-[transform,opacity,filter]"
        style={{ opacity: 0.67, animationDelay: '1s' }}
      />
    </div>
  )
}