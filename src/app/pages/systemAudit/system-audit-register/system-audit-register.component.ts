import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-system-audit-register',
  templateUrl: './system-audit-register.component.html',
  styleUrls: ['./system-audit-register.component.scss']
})
export class SystemAuditRegisterComponent implements OnInit {
  
  nameContent: string = 'Cadastrar  Auditoria de Sistema';//valor default

  ngOnInit()
  {
    
  }


}
