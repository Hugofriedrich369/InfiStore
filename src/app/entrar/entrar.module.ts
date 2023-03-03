import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrarRoutingModule } from './entrar-routing.module';
import { EntrarComponent } from './entrar.component';
import { RouterModule } from '@angular/router';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';


@NgModule({
  declarations: [
    EntrarComponent
  ],
  imports: [
    CommonModule,
    EntrarRoutingModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: EntrarComponent
    }])
  ]
})
export class EntrarModule { }
