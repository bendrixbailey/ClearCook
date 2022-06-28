import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  today = new Date();

  test = true;

  pipe = new DatePipe('en-US');

  constructor(public auth: AuthService, private http: HttpClient) {
    this.user = {};
  }

  ngOnInit(): void {
    this.auth.user$.subscribe((success: any) => {
      this.user = success;
      console.log(this.user);
      // this.updateNewUserInfo();
    });
    this.auth.getUser().subscribe(user => {
      console.log(user)
    })

    this.auth.getAccessTokenSilently().subscribe((val) => {
      console.log(val)
      const tokenHeaders = new HttpHeaders({
        "Authorization" : "Bearer " + val,
        "content-type" : "application/x-www-form-urlencoded",
      })
      this.http.get("https://dev-map2rm8b.us.auth0.com/userinfo", {headers : tokenHeaders}).subscribe((val) =>{
        console.log(val)
      })
    })
    
    
  }

  generateWelcomeText(){

  }

  updateNewUserInfo(){
    if(!this.user.created_at){

      const tokenHeaders = new HttpHeaders({
        "content-type" : "application/x-www-form-urlencoded",
    })
      let tokenBody = {
        "grant_type" : "client_credentials",
        "client_id" : environment.auth0.clientId,
        "client_secret" : environment.auth0.secret,
        "audience" : "https://dev-map2rm8b.us.auth0.com/api/v2/"
      }
      this.http.post(environment.userUpdateUri + "oauth/token", tokenBody, {headers : tokenHeaders}).subscribe((val : any) =>{
        console.log(val.access_token);
      })

        //not sure

      // let headers = new HttpHeaders().set("Authorization" : "Bearer")

      // this.http.patch(environment.userUpdateUri + "api/v2/users/" + this.user.sub, 
      // {
      //   "user_metadata" : 
      //   {
      //     "created_date" : this.pipe.transform(this.today, "YYYY-MM-dd"),
      //     "saved" : []
      //   }
      // }
      // ).subscribe((val) =>{
      //   console.log(val)
      // })
    }
  }

  calculateUserTime(user: any){
    let todaysDate = this.pipe.transform(this.today, "YYYY-MM-dd");;
    let userJoinDate = new Date(user.created_at);
    // console.log(userJoinDate)
    return "114";
  }

}
