import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
import { RouterModule } from '@angular/router';
// 1. Importamos las herramientas para los iconos
import { addIcons } from 'ionicons';
import { logoGoogle } from 'ionicons/icons';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule] 
})
export class RegistroPage implements OnInit {

  constructor() {
    // 2. Registramos el icono de Google para que Ionic lo reconozca
    addIcons({ logoGoogle });
  }

  ngOnInit() {
  }

  // 3. Agregamos la función que se ejecutará al hacer clic
  async registroGoogle() {
    console.log('Botón de Google presionado');
    // Nota: Aquí irá la lógica de Firebase más adelante
    alert('Conexión con Google iniciada (falta configurar Firebase)');
  }

}