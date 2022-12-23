import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { Unit } from 'src/app/pages/unit/Unit.model';
import { UserSiaListComponent } from 'src/app/pages/userSia/user-sia-list/user-sia-list.component';
import { UserSiaService } from 'src/app/pages/userSia/user-sia.service';
import { UserSia } from 'src/app/pages/userSia/UserSia.model';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent implements OnInit {
  
  loop$!: Observable<any>;
  userSia!: UserSia;
  userLogged!: UserSia;
  // unitLogged!: Unit;
  logged!: boolean;
  nameUser!: string;
  codeUser!: number;

  constructor(
    private router: Router,
    private userSiaService: UserSiaService
    ) { }

  ngOnInit(): void {
    // console.log("LOCALSTORAGE  = ", this.userSiaService.getLocalStorageUser());
    this.userLogged = this.userSiaService.getLocalStorageUser();
    // this.unitLogged = this.userSiaService.getLocalStorageUnit();
    // this.nameUser = this.userLogged.name;
    // this.codeUser = this.userLogged.code;
  }

  
 
}
