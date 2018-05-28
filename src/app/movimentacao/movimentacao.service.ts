import { Injectable } from '@angular/core';

@Injectable()
export class MovimentacaoService {

  constructor() { }

  teste(limit: string, term: string): void {
     alert('test');
      console.log('servico test foi chamado');
  }
}
