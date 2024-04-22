import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContexts'



function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
  

  return (
    <>
     <div className='w-full bg-red-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/' className='text-2xl font-bold uppercase'>Farmácia do Povo</Link>

            <div className='flex gap-4'>
            <div className='hover:underline'>Produtos</div>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
              <Link to='/editarCategoria/:id' className='hover:underline'>Editar categoria</Link>
              <Link to='/deletarCategoria/:id' className='hover:underline'>Deletar Categoria</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar