import { Link } from 'react-router-dom'

export default function Navigator() {
  {"{ name: 'ABOUT ME', path: '/about' },"}
  const navLinks = [
    { name: 'HOME', path: '/' },
    
    { name: 'EDUCATION', path: '/education' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'CERTIFICATES', path: '/certificates' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'CONTACT', path: '/contact' },
  ]

  return (
    <ul className="flex flex-col gap-y-6 md:gap-y-8 px-8 md:px-24 w-full items-center md:items-end cursor-default">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            to={link.path}
            className="text-3xl md:text-5xl font-black tracking-widest text-gray-400 hover:text-red-500 transition-colors duration-300"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}