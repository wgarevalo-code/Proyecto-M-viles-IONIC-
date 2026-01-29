import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // <--- 1. Importamos esto
import { RouterModule } from '@angular/router'; // <--- 2. Para que funcionen los enlaces

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  // 3. AGREGAMOS IonicModule y RouterModule AQUÍ ABAJO:
  imports: [IonicModule, CommonModule, FormsModule, RouterModule] 
})
export class RegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}