


import { Link } from 'react-router-dom'

export default function Navigator() {
  return (
    <nav className="p-4">
      <ul className="flex flex-col gap-2">
        <li>
          <Link className="text-blue-600 hover:underline" to="/home">
            HOME
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" to="/om">
            O MĚ
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" to="/vzdelani">
            VZDĚLÁNÍ
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" to="/zkušenosti">
            ZKUŠENOSTI
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" to="/certifikaty">
            CERTIFIKÁTY
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" to="/portfolio">
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" to="/kontakt">
            KONTAKT
          </Link>
        </li>
      </ul>
    </nav>
  )
}



