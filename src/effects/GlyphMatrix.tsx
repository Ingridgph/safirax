import { useEffect, useRef } from "react"

interface GlyphMatrixProps extends React.HTMLAttributes<HTMLCanvasElement> {
  glyphs?: string
  cellSize?: number
  mutationRate?: number
  interval?: number
  fadeBottom?: number
  color?: string
  highlightColor?: string
  highlightRadius?: number
  highlightStrength?: number
}

function cssColorToRgb(hex: string) {
  const probe = document.createElement("canvas")
  probe.width = 1
  probe.height = 1
  const ctx = probe.getContext("2d")
  if (!ctx) return { r: 0, g: 0, b: 0 }
  ctx.fillStyle = "#000"
  ctx.fillStyle = hex
  ctx.fillRect(0, 0, 1, 1)
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
  return { r, g, b }
}

export function GlyphMatrix({
  glyphs = "01·•+*/\\<>=",
  cellSize = 14,
  mutationRate = 0.04,
  interval = 90,
  className,
  fadeBottom = 0.6,
  color = "#6B7280",
  highlightColor = "#a855f7",
  highlightRadius = 110,
  highlightStrength = 0.9,
  style,
  ...props
}: GlyphMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rgbaRef = useRef({ r: 107, g: 114, b: 128, a: 1 })
  const hlRgbRef = useRef({ r: 168, g: 85, b: 247 })
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    rgbaRef.current = { ...cssColorToRgb(color), a: 1 }
  }, [color])

  useEffect(() => {
    hlRgbRef.current = cssColorToRgb(highlightColor)
  }, [highlightColor])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let cols = 0
    let rows = 0
    let cells: string[] = []
    let alphas: number[] = []
    let raf = 0
    let last = 0
    let stopped = false

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseleave", onMouseLeave)

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const { clientWidth: w, clientHeight: h } = canvas

      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      cols = Math.ceil(w / cellSize)
      rows = Math.ceil(h / cellSize)

      cells = new Array(cols * rows)
        .fill(0)
        .map(() => glyphs[Math.floor(Math.random() * glyphs.length)])
      alphas = new Array(cols * rows)
        .fill(0)
        .map(() => 0.05 + Math.random() * 0.35)
    }

    const draw = () => {
      const { clientWidth: w, clientHeight: h } = canvas
      ctx.clearRect(0, 0, w, h)

      ctx.font = `${cellSize - 2}px ui-monospace, SFMono-Regular, Menlo, monospace`
      ctx.textBaseline = "top"

      const { r: br, g: bg, b: bb, a: baseAlpha } = rgbaRef.current
      const { r: hr, g: hg, b: hb } = hlRgbRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const radius = highlightRadius
      const radiusSq = radius * radius

      for (let y = 0; y < rows; y++) {
        const fade = fadeBottom > 0 ? 1 - (y / rows) * fadeBottom : 1
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x
          const cellX = x * cellSize + cellSize / 2
          const cellY = y * cellSize + cellSize / 2
          const dx = cellX - mx
          const dy = cellY - my
          const distSq = dx * dx + dy * dy
          const t = distSq < radiusSq ? (1 - distSq / radiusSq) * highlightStrength : 0
          const r = Math.round(br + (hr - br) * t)
          const g = Math.round(bg + (hg - bg) * t)
          const b = Math.round(bb + (hb - bb) * t)
          const a = Math.min(1, (alphas[i] + t * 0.9) * fade * baseAlpha)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
          ctx.fillText(cells[i], x * cellSize, y * cellSize)
        }
      }
    }

    const tick = (t: number) => {
      if (stopped) return

      if (t - last >= interval) {
        last = t

        const total = cols * rows
        const mutations = Math.max(1, Math.floor(total * mutationRate))

        for (let n = 0; n < mutations; n++) {
          const i = Math.floor(Math.random() * total)
          cells[i] = glyphs[Math.floor(Math.random() * glyphs.length)]
          alphas[i] = 0.05 + Math.random() * 0.45
        }
      }

      draw()
      raf = requestAnimationFrame(tick)
    }

    resize()
    draw()
    raf = requestAnimationFrame(tick)

    const ro = new ResizeObserver(() => {
      resize()
      draw()
    })
    ro.observe(canvas)

    return () => {
      stopped = true
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [glyphs, cellSize, mutationRate, interval, fadeBottom, highlightRadius, highlightStrength])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block", cursor: "default", ...style }}
      aria-hidden="true"
      {...props}
    />
  )
}
