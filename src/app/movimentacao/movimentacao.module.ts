import { MovimentacaoService } from './movimentacao.service';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimentacaoComponent } from './movimentacao.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MovimentacaoComponent],
  providers: [MovimentacaoService],
  exports: [MovimentacaoComponent]
})
export class MovimentacaoModule { }
