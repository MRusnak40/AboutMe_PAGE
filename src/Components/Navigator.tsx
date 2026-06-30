


import { Link } from 'react-router-dom'

export default function Navigator() {
  return (
    <nav className="w-full px-6">
      <ul className="flex flex-wrap items-start justify-end gap-x-6 gap-y-2">

        <li>
          <Link
            to="/"
            className="inline-block text-blue-600 transition-transform transition-colors hover:scale-[1.08] hover:text-blue-700"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/om"
            className="inline-block text-blue-600 transition-transform transition-colors hover:scale-[1.08] hover:text-blue-700"
          >
            O MĚ
          </Link>
        </li>
        <li>
          <Link
            to="/vzdelani"
            className="inline-block text-blue-600 transition-transform transition-colors hover:scale-[1.08] hover:text-blue-700"
          >
            VZDĚLÁNÍ
          </Link>
        </li>
        <li>
          <Link
            to="/zkušenosti"
            className="inline-block text-blue-600 transition-transform transition-colors hover:scale-[1.08] hover:text-blue-700"
          >
            ZKUŠENOSTI
          </Link>
        </li>
        <li>
          <Link
            to="/certifikaty"
            className="inline-block text-blue-600 transition-transform transition-colors hover:scale-[1.08] hover:text-blue-700"
          >
            CERTIFIKÁTY
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="inline-block text-blue-600 transition-transform transition-colors hover:scale-[1.08] hover:text-blue-700"
          >
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link
            to="/kontakt"
            className="inline-block text-blue-600 transition-transform transition-colors hover:scale-[1.08] hover:text-blue-700"
          >
            KONTAKT
          </Link>
        </li>
      </ul>
    </nav>
  )
}




