import { GrupoProcesso } from './grupo-processo';

export class Processo {

  nome: string;
  grupo: GrupoProcesso;

  constructor (nome: string, grupoProcesso: GrupoProcesso) {
    this.nome = nome;
    this.grupo = grupoProcesso;
  }

}
