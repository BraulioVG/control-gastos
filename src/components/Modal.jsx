import { useState } from 'react'
import Mensaje from './Mensaje'
import cerrarBtn from '../img/cerrar.svg'


const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')

    const oculartModal = () => {
        
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 800);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);

         return   
        }

        guardarGasto({nombre, cantidad, categoria})
    }

  return (
    <div className='modal'>
        
        <div className="cerrar-modal">
            <img 
                src={cerrarBtn} 
                alt="Cerrar Modal"
                onClick={oculartModal} 
                
            />
        </div>

        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>

            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}
                
            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input 
                    id='nombre'
                    type="text" 
                    placeholder='Añade el Nombre del Gasto'
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantdiad</label>
                <input 
                    id='cantidad'
                    type="number" 
                    placeholder='Añade la Cantidad del Gasto ejemplo: 300'
                    value={cantidad}
                    onChange={ e => setCantidad(Number(e.target.value))}
                />
            </div>

            <div className="campo">
                <label htmlFor="categoria">Categoria</label>

                <select 
                    id="categoria" 
                    value={categoria}
                    onChange={ e => setCategoria(e.target.value)}>

                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="varios">Varios</option>
                    <option value="entretenimiento">Entretenimiento</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>              
            </div>

            <input 
                type="submit" 
                value="añadir gasto" 
                id="" 
            />

        </form>

    </div>
  )
}

export default Modal