import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/components/header/header';
import { Sidenav } from '../../shared/components/sidenav/sidenav';

@Component({
  selector: 'pm-main-layout',
  imports: [RouterOutlet, MatSidenavModule, Sidenav, Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {
  currentYear = new Date().getFullYear();
}
