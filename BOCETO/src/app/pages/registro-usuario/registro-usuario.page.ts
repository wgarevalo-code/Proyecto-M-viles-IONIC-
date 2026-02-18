import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroUsuarioPage {

  usuario: any = {
    nombres: '',
    apellidos: '',
    correo: '',
    celular: '',
    direccion: '',
    ciudad: '',
    usuario: '',
    password: ''
  };

  constructor(private router: Router) {}

  crearCuenta() {

    localStorage.setItem('usuario', JSON.stringify(this.usuario));

    alert('Cuenta creada correctamente');

    this.router.navigate(['/registro']);
  }

}
