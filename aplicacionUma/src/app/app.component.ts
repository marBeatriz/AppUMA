import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Reclouting', url: '/folder/RECLOUTING', icon: 'home' },
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Postulaciones', url: '/folder/Postulaciones', icon: 'paper-plane' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Contadores', 'Abogados', 'Electricista', 'Emprendedores'];
  constructor() {}
}
