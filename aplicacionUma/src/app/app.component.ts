import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Postulaciones', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archivos', url: '/folder/archived', icon: 'archive' },
    { title: 'Borradores', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Contadores', 'Abogados', 'Electricista', 'Emprendedores'];
  constructor() {}
}
