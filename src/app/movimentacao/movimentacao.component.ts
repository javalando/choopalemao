import { MovimentacaoService } from './movimentacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {

  constructor(private movimentacaoService: MovimentacaoService) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:one-line
  teste(){
    this.movimentacaoService.teste('', '');
  }

}
