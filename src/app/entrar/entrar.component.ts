import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent {
  constructor(private router: Router){
  }
  goToCadastrar($MyParam: string = ''): void {
    const navigationDetails: string[] = ['/cadastrar'];
    this.router.navigate(navigationDetails);
  }

}
