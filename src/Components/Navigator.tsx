import { NavLink} from 'react-router-dom'



export default function Navigator() {
  { "{ name: 'ABOUT ME', path: '/about' }," }
  const navLinks = [
    { name: 'HOME', path: '/' },

    { name: 'EDUCATION', path: '/education' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'CERTIFICATES', path: '/certificates' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'CONTACT', path: '/contact' },
  ]

  return (<>

    <ul className="flex flex-col gap-y-6 md:gap-y-8 px-8 md:px-24 w-full items-center md:items-end cursor-default">
      {navLinks.map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
                // ZDE JE OPRAVA: Všimni si zpětných uvozovek na začátku a na konci, a znaku $ před podmínkou
                `text-3xl md:text-5xl font-black tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] scale-105"
                    : "text-gray-400 hover:text-red-500 " 
                }`
          }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
    
    </>
  )
}