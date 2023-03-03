import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { RouterModule } from '@angular/router';
import { EntrarComponent } from '../entrar/entrar.component';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: EntrarComponent
    }])
  ]
})
export class InicioModule { }
