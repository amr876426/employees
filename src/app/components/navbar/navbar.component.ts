import { Component, OnInit } from '@angular/core';
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router   } from '@angular/router';
import {AuthService   } from '../../services/auth.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLogIn:boolean;
  isUserLogin:string;
  enableRegister:boolean;
 
  constructor(
    public router:Router,
    public authService:AuthService,
    public flashMessagesService:FlashMessagesService, 
  ) { }


  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogIn=true;
        this.isUserLogin=auth.email;
      }else{
        this.isLogIn=false;
      }
    }); 

  }


  logoutClick(){
    this.authService.logout();
    this.flashMessagesService.show( "Your are logged out !",{cssClass:'alert-success',timeout:6000});
    this.router.navigate(['/login']);
  }


}
