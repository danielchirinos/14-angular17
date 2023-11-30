import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/req-response';

import { toSignal } from "@angular/core/rxjs-interop"
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [ CommonModule, TitleComponent ],
  templateUrl: './user.component.html',
  styles: ``,
})
export default class UserComponent {

    private route = inject( ActivatedRoute );
    private userService = inject( UsersService );


    // public user = signal<User | undefined>(undefined)
    
    public user = toSignal( 
        this.route.params.pipe(
            switchMap( ({ id }) => this.userService.getUserById( id ))
        )
    )


    // señal computada para concatenar el usuario
    public titleLabel = computed( () => {

        if(!this.user()){
            return "Cargando informacion"
        }

        return `Informacion del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`
    })

    // constructor(){
    //     console.log(this.route.params.subscribe( params => {
    //         console.log({ params });
            
    //     }));
        
    // }

}
