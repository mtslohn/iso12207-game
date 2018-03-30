import { Component } from '@angular/core';
import { GrupoProcesso } from './grupo-processo';
import { Processo } from './processo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  gruposProcessos = [
    new GrupoProcesso('Processos contratuais'),
    new GrupoProcesso('Processos organizacionais capacitores de projeto'),
    new GrupoProcesso('Processos de projeto'),
    new GrupoProcesso('Processos técnicos'),
    new GrupoProcesso('Processos de implementação de software'),
    new GrupoProcesso('Processos de apoio de software'),
    new GrupoProcesso('Processos de reúso de software')
  ];

  processos = [

    new Processo('Processo de Aquisição', this.gruposProcessos[0]),
    new Processo('Processo de Fornecimento', this.gruposProcessos[0]),
    
    new Processo('Processo de Gestão de Modelo de Ciclo de Vida', this.gruposProcessos[1]),
    new Processo('Processo de Gestão de Infraestrutura', this.gruposProcessos[1]),
    new Processo('Processo de Gestão de Portfólio de Projetos', this.gruposProcessos[1]),
    new Processo('Processo de Gestão de Recursos Humanos', this.gruposProcessos[1]),
    new Processo('Processo de Gestão da Qualidade', this.gruposProcessos[1]),
    
    new Processo('Processo de Planejamento de Projeto', this.gruposProcessos[2]),
    new Processo('Processo de Controle e Avaliação de Projeto', this.gruposProcessos[2]),
    new Processo('Processo de Tomada de Decisão', this.gruposProcessos[2]),
    new Processo('Processo de Gestão de Risco', this.gruposProcessos[2]),
    new Processo('Processo de Gestão de Configuração', this.gruposProcessos[2]),
    new Processo('Processo de Gestão da Informação', this.gruposProcessos[2]),
    new Processo('Processo de Medição', this.gruposProcessos[2]),
    
    new Processo('Processo de Definição dos Requisitos dos Stakeholders', this.gruposProcessos[3]),
    new Processo('Processo de Análise dos Requisitos do Sistema', this.gruposProcessos[3]),
    new Processo('Processo de Projeto de Arquitetura de Sistema', this.gruposProcessos[3]),
    new Processo('Processo de Implementação', this.gruposProcessos[3]),
    new Processo('Processo de Integração do Sistema', this.gruposProcessos[3]),
    new Processo('Processo de Teste de Qualificação de Sistema', this.gruposProcessos[3]),
    new Processo('Processo de Instalação de Software', this.gruposProcessos[3]),
    new Processo('Processo de Suporte na Aceitação de Software', this.gruposProcessos[3]),
    new Processo('Processo de Operação de Software', this.gruposProcessos[3]),
    new Processo('Processo de Manutenção de Software', this.gruposProcessos[3]),
    new Processo('Processo de Desativação de Software', this.gruposProcessos[3]),
    
    new Processo('Processo de Implementação de Software', this.gruposProcessos[4]),
    new Processo('Processo de Análise de Requisitos de Software', this.gruposProcessos[4]),
    new Processo('Processo de Arquitetura de Software', this.gruposProcessos[4]),
    new Processo('Processo de Projeto de Software', this.gruposProcessos[4]),
    new Processo('Processo de Construção de Software', this.gruposProcessos[4]),
    new Processo('Processo de Integração de Software', this.gruposProcessos[4]),
    new Processo('Processo de Testes de Qualificação de Software', this.gruposProcessos[4]),
    
    new Processo('Processo de Gestão de Documentação de Software', this.gruposProcessos[5]),
    new Processo('Processo de Gestão de Configuração de Software', this.gruposProcessos[5]),
    new Processo('Processo de Garantia da Qualidade de Software', this.gruposProcessos[5]),
    new Processo('Processo de Verificação de Software', this.gruposProcessos[5]),
    new Processo('Processo de Validação de Software', this.gruposProcessos[5]),
    new Processo('Processo de Revisão de Software', this.gruposProcessos[5]),
    new Processo('Processo de Auditoria de Software', this.gruposProcessos[5]),
    new Processo('Processo de Resolução de Problemas de Software', this.gruposProcessos[5]),

    new Processo('Processo de Engenharia de Domínio', this.gruposProcessos[6]),
    new Processo('Processo de Gestão de Programa de Reúso', this.gruposProcessos[6]),
    new Processo('Processo de Gestão de Reúso de Ativos', this.gruposProcessos[6]),
    
  ];

  gruposProcessosDireita: GrupoProcesso[];
  gruposProcessosEsquerda: GrupoProcesso[];

  acertos = 0;
  erros = 0;

  onItemDrop(e: any) {
    // Get the dropped data here
    const processo = e.dragData;
    processo.grupo.processos.push(processo);
    this.removeItem(processo, this.processos);
    this.acertos++;
  }

  removeItem(item: any, list: Array<any>) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
    this.gruposProcessosEsquerda = this.gruposProcessos.slice(0, 4);
    this.gruposProcessosDireita = this.gruposProcessos.slice(4);

    this.processos = this.shuffle(this.processos);
  }

  shuffle(array: any[]): any[] {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  onDragEnd(e: any): void {
    this.erros++;    
  }

}
