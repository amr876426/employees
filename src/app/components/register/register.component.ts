import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core'; 
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router , ActivatedRoute , Params } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string ;
  password:string;
  
    constructor(public router:Router,
      public authService:AuthService,
      public flashMessagesService:FlashMessagesService) { }
  
    ngOnInit() {
    }
  
    mySubmit(){
      let flashMessagesService = this.flashMessagesService;
    this.authService.register(this.email, this.password).then((res) => {
      flashMessagesService.show('Registered successfully !  ',{cssClass:'alert-success',timeout:6000});
      this.router.navigate(['/']);
    }).catch( (err)=>{
       flashMessagesService.show( err.message,{cssClass:'alert-danger',timeout:6000});
      this.router.navigate(['/login']);
    });
  } 
  }
  