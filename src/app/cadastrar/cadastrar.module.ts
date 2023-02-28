import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarRoutingModule } from './cadastrar-routing.module';
import { CadastrarComponent } from './cadastrar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CadastrarComponent
  ],
  imports: [
    CommonModule,
    CadastrarRoutingModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: CadastrarComponent
    }])
  ]
})
export class CadastrarModule { }
