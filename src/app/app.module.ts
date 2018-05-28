import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { MovimentacaoModule } from './movimentacao/movimentacao.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    MovimentacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
