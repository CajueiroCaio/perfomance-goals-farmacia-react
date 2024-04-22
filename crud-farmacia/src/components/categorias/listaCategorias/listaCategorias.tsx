import React, { useContext, useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardCategorias/cardCategorias';

function listaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias, {
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      <h1>Aqui é pra listar as categorias</h1>
    </>
  );
}

export default listaCategorias;