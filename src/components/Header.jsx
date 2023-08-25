import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from "./ControlPresupuesto";

export const Header = ({ //Props pero en forma de lista
    gastos,
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto}) => {
  return (
    <header>

        <h1>Planificador de gastos</h1>

        {isValidPresupuesto ? (
           <ControlPresupuesto
            gastos = {gastos}
            presupuesto = {presupuesto}
           />
        ) : (
            <NuevoPresupuesto
            presupuesto = {presupuesto}
            setPresupuesto = {setPresupuesto} 
            setIsValidPresupuesto = {setIsValidPresupuesto}
            />
        )}


       


    </header>
  )
}

export default Header
