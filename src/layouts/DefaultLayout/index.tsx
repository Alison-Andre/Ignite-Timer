import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import { LayoutConainer } from './styles'

export default function DefaultLayout() {
  return (
    <LayoutConainer>
      <Header />
      <Outlet />
    </LayoutConainer>
  )
}
