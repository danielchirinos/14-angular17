import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './side-menu.component.html',
  styles: ``,
})
export class SideMenuComponent {

    public menuItems = routes
    .map( route => route.children ?? [] )
    .flat()
    .filter( route => route && route.path != "")
    .filter( route => route.path != "**")
    .filter( router => !router.path?.includes(":") )

}
