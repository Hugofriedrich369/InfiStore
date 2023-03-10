import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

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

  goToInicio($MyParam: string = ''): void {
    const navigationDetails: string[] = ['/inicio'];
    this.router.navigate(navigationDetails);
  }
}
