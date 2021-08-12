import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  user:string = 'Juliana Vaz'; 
  isLoged=true;


  public appPages = [
    { title: 'Perfil', url: '/perfil', icon: 'person-circle' },
    { title: 'Salas', url: '/ambientes', icon: 'pricetag' },
    { title: 'Embarcados', url: '/listaembarcados', icon: 'hardware-chip' },

  ];
  public labels = [
    { title: 'Localização', url:'', icon:'locate-outline' },
    { title: 'Telefones', url: '', icon:'call-outline' },
    { title: 'Suporte Técnico', url: '', icon:'construct-outline' },
  ];  
    
}
