import * as React from 'react'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { cn } from '@/lib/cn'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const scrollingRef = React.useRef(false)
  const settleTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const endScroll = React.useCallback(() => {
    scrollingRef.current = false
    if (settleTimeoutRef.current) {
      clearTimeout(settleTimeoutRef.current)
      settleTimeoutRef.current = null
    }
  }, [])

  const beginScroll = React.useCallback(() => {
    scrollingRef.current = true
    if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current)
    settleTimeoutRef.current = setTimeout(endScroll, 1000)
  }, [endScroll])

  const scrollPrev = React.useCallback(() => {
    if (scrollingRef.current) return
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    if (scrollingRef.current) return
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  React.useEffect(() => {
    if (!api) return
    api.on('select', beginScroll)
    api.on('settle', endScroll)
    api.on('reInit', endScroll)

    return () => {
      api.off('select', beginScroll)
      api.off('settle', endScroll)
      api.off('reInit', endScroll)
      endScroll()
    }
  }, [api, beginScroll, endScroll])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content">
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '' : 'flex-col',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'px-5' : 'py-5',
        className,
      )}
      {...props}
    />
  )
}

const arrowClasses = cn(
  'absolute z-10 inline-flex size-11 touch-manipulation',
  'items-center justify-center rounded-full border-0',
  'bg-transparent text-lavender transition-opacity',
  'opacity-70 hover:opacity-100 disabled:opacity-30',
)

function CarouselPrevious({ className, ...props }: React.ComponentProps<'button'>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button
      type="button"
      data-slot="carousel-previous"
      className={cn(
        arrowClasses,
        orientation === 'horizontal'
          ? 'top-1/2 left-0 -translate-y-1/2'
          : '-top-14 left-1/2 -ml-[44px] rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <span className="text-[1.6rem] leading-none" aria-hidden="true">
        ←
      </span>
      <span className="sr-only">Slide anterior</span>
    </button>
  )
}

function CarouselNext({ className, ...props }: React.ComponentProps<'button'>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <button
      type="button"
      data-slot="carousel-next"
      className={cn(
        arrowClasses,
        orientation === 'horizontal'
          ? 'top-1/2 right-0 -translate-y-1/2'
          : '-bottom-14 left-1/2 -ml-[44px] rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <span className="text-[1.6rem] leading-none" aria-hidden="true">
        →
      </span>
      <span className="sr-only">Próximo slide</span>
    </button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
}
