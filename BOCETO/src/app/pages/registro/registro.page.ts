import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, personOutline } from 'ionicons/icons';

addIcons({
  'mail-outline': mailOutline,
  'lock-closed-outline': lockClosedOutline,
  'person-outline': personOutline
});

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroPage {

  usuario: string = '';
  password: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {

    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario') || '{}');

    if (
      this.usuario === usuarioGuardado.usuario &&
      this.password === usuarioGuardado.password
    ) {

      localStorage.setItem('sesionActiva', 'true');
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/servicios']);

    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
