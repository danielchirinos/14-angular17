import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <!-- <h1 class="text-3xl mb-5">{{title}} - {{ withShadow }}</h1> -->
    <h1 class="text-3xl mb-5">{{title}}</h1>
  `,
  styles: ``,
})
export class TitleComponent {

    @Input({required: true}) title! : string;

    // esto se usa para verificar que si no llega una variable por el componente, se agregue directo en falso
    @Input({ transform: booleanAttribute }) withShadow  : boolean = false;

}
