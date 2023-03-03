import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicioModule } from './inicio/inicio.module';
import { InicioRoutingModule } from './inicio/inicio-routing.module';


@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        pathMatch: 'full',
      },
      {
        path: 'entrar',
        loadChildren: () => import('./entrar/entrar.module').then(m => m.EntrarModule),
        component: EntrarComponent
      },
      {
        path: 'cadastrar',
        loadChildren: () => import('./cadastrar/cadastrar.module').then(m => m.CadastrarModule),
        component: CadastrarComponent
      },
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule),
        component: InicioComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
