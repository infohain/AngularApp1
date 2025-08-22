import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitreComponent } from './components/titre/titre.component';
import { NavbarComponent } from './components/navbar/navbar.component';  // ✅ importe ton navbar
import { PaysComponent } from './components/pays/pays.component';  // ✅ importe ton pays
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,TitreComponent,PaysComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app4');
}
