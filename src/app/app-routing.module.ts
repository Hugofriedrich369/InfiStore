import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'entrar', component: EntrarComponent},
  { path: 'entrar', loadChildren: () => import('./entrar/entrar.module').then(m => m.EntrarModule) },
  { path: 'cadastrar', loadChildren: () => import('./cadastrar/cadastrar.module').then(m => m.CadastrarModule) },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
