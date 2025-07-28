import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FootarComponent } from "./footar/footar.component";
import { NotfoundComponent } from "./notfound/notfound.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FootarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app2';
}
