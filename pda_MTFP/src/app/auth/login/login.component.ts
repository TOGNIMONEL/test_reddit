import { RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-login',
  imports: [FooterComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
