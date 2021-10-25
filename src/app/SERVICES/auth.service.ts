import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData : any;

  constructor(private fbAuth: AngularFireAuth, private ngZone: NgZone,
    private router : Router) { 
      this.fbAuth.authState.subscribe(user=>{
        if(user){
         // console.log('user', user)
         this.userData = user;
         localStorage.setItem('user', this.userData.email)
        }
      })
    }

    signIn(email,password){
      return this.fbAuth.signInWithEmailAndPassword(email,password)
      .then((result)=>{
        this.router.navigate(['/'])
      }).catch((error)=>{
        window.alert(error.message)
      })
    }
    singUp(email, password){
      return this.fbAuth.createUserWithEmailAndPassword(email,password)
      .then((result)=>{
        this.router.navigate(['/'])
      }).catch((error)=>{
        window.alert(error.message)
      })
    }
    logOut(){
      return this.fbAuth.signOut().then(()=>{
        localStorage.removeItem('user')
        this.router.navigate['login']
      })
    }
    isLoggedIn(){
      const user = localStorage.getItem('user');
      return user? true: false;

    }
    getUser(){
      const user = localStorage.getItem('user')
      return user? user: null;
    }
}
function result(result: any) {
  throw new Error('Function not implemented.');
}

