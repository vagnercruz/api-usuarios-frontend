import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importe o RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected readonly title = signal('api-usuarios-frontend');
}