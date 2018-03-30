import { Processo } from './processo';

export class GrupoProcesso {

  nome: string;
  processos: Array<Processo> = [];

  constructor(nome: string) {
    this.nome = nome;
  }

}
