
import { useEffect } from 'react';
import { useContratoStore } from '../../hooks/useContratoStore';
import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export const IndexPage = () => {

  const {cargarSalarios} = useContratoStore();
  useEffect(() => {
    cargarSalarios(localStorage.getItem('idPlan'));
  
    
  }, [])
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}
