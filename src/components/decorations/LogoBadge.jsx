function LogoBadge({ className = '' }) {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div className="relative flex size-28 items-center justify-center rounded-full border-[3px] border-brand-ink bg-brand-yellow">
        <span className="absolute top-2 left-6 h-6 w-4 -rotate-12 rounded-full bg-brand-ink" />
        <span className="absolute top-2 right-6 h-6 w-4 rotate-12 rounded-full bg-brand-ink" />
        <span className="absolute top-1/2 h-10 w-9 -translate-y-1/2 rounded-full bg-white" />
        <span className="absolute top-[52%] left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-ink" />
        <span className="absolute top-[38%] left-[38%] size-1.5 rounded-full bg-brand-ink" />
        <span className="absolute top-[38%] right-[38%] size-1.5 rounded-full bg-brand-ink" />
      </div>

      <div className="relative -mt-3 flex items-center justify-center">
        <span className="absolute -left-3 size-6 rounded-full border-[3px] border-brand-ink bg-white" />
        <span className="absolute -right-3 size-6 rounded-full border-[3px] border-brand-ink bg-white" />
        <div className="relative rounded-full border-[3px] border-brand-ink bg-white px-6 pt-1 pb-0.5 text-center">
          <p className="text-[9px] leading-none font-semibold tracking-wide text-brand-yellow">
            homemade dog food
          </p>
          <p className="font-display text-lg leading-tight font-bold text-brand-ink">pot hound</p>
        </div>
      </div>
    </div>
  )
}

export default LogoBadge
