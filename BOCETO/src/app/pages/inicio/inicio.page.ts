import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // <--- IMPORTANTE
import { RouterLink } from '@angular/router'; // <--- IMPORTANTE PARA NAVEGAR

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink] // <--- AGREGAR ESTO
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
