import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from './../../footer/footer.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FooterComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
