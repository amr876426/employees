import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core'; 
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router , ActivatedRoute , Params } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string ;
password:string;

  constructor(public router:Router,
    public authService:AuthService,
    public flashMessagesService:FlashMessagesService) { }

  ngOnInit() {
  }

  login(){ 
  this.authService.login(this.email, this.password).then((res) => {
    this.flashMessagesService.show('you are logged in ! ',{cssClass:'alert-success',timeout:6000});
    this.router.navigate(['/']);
  }).catch( (err)=>{
    this.flashMessagesService.show( err.message,{cssClass:'alert-danger',timeout:6000});
    this.router.navigate(['/login']);
  });
} 
}
