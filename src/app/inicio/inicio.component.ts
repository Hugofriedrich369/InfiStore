import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router){
  }
  goToEntrar($myParam: string = ''): void {
    const navigationDetails: string[] = ['/entrar'];
    this.router.navigate(navigationDetails);
  }
  
  goToCadastrar($MyParam: string = ''): void {
    const navigationDetails: string[] = ['/cadastrar'];
    this.router.navigate(navigationDetails);
  }
}
