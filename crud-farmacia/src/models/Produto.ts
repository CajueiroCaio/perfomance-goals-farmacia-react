import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nomeProduto: string;
  descricaoProduto: string;
  dataValidade: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}