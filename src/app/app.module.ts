import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProdutosModule } from './produtos/produtos.module';
import { SharedModule } from './_shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent

    
  ],
  imports: [
    SharedModule,
    AppRoutingModule
    ,ProdutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
