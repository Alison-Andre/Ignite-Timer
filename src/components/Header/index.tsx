import { HeaderContainer } from './styles'
import Logo from '../../assets/logoIgnite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderContainer>
      <img
        src={Logo}
        alt="Dois triângulos verde claro, um sobreposto sobre o outro"
      />

      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
