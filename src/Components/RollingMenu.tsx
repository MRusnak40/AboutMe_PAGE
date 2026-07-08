import { useState } from 'react'

interface RollingMenuProps {
  children: React.ReactNode
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="flex h-8 w-8 flex-col justify-center gap-[5px]" aria-hidden>
      <span className={`block h-0.5 w-full rounded-full bg-blue-600 transition-all duration-300
        ${open ? 'translate-y-[7px] rotate-45' : ''}`}
      />
      <span className={`block h-0.5 w-full rounded-full bg-blue-600 transition-all duration-300
        ${open ? 'scale-x-0 opacity-0' : ''}`}
      />
      <span className={`block h-0.5 w-full rounded-full bg-blue-600 transition-all duration-300
        ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
      />
    </span>
  )
}

export default function RollingMenu({ children }: RollingMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="w-full select-none"
      onMouseLeave={() => setOpen(false)}   // ← myš opustí wrapper = zavře
    >
      {/* Tlačítko */}
      <div className="flex justify-end px-6 py-3">
        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          className="cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <HamburgerIcon open={open} />
        </button>
      </div>

      {/* Rolling wrapper */}
      <div
        className="grid"
        style={{
          gridTemplateRows: open ? '1fr' : '0fr',
          transition: 'grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}
