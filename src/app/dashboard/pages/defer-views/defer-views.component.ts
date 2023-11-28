import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
    standalone: true,
    imports: [ CommonModule, TitleComponent, HeavyLoadersSlowComponent ],
    templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent { 

    constructor(){
        const start = Date.now()
        while( Date.now() - start < 3000 ) {}

        console.log("cargado");
        
    }

}
