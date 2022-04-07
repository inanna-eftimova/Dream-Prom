import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged  
} from "firebase/auth";
import { ToastrService } from 'ngx-toastr';

let userdata: any;
let token: any = null;

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  constructor(private toastr: ToastrService, private router: Router) { }
  public uid: any;
  register(email: string, password: string){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(data =>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          userdata = user;
           token = userdata.accessToken;
           localStorage.setItem('token', token);
           this.uid = userdata.uid;
           localStorage.setItem('email', userdata.email)
           this.router.navigate(['/auth/profile']);
           this.toastr.success('Singed Up', 'Success');
        }
      })
    })
    .catch(err => this.toastr.error(err.message, "Warning"))
  }

  login(email: string, password: string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(data => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
           userdata = user;
           token = userdata.accessToken;
           localStorage.setItem('token', token);
           this.uid = userdata.uid;
           localStorage.setItem('email', userdata.email)
           this.router.navigate(['/auth/profile']);
           this.toastr.success('Logged In', 'Success');
        }
      })
    })
    .catch(err => this.toastr.error(err.message, "Warning"));
  }

  logout(){
    const auth = getAuth();
    signOut(auth)
    .then((data) => {
      token = null;
      this.router.navigate(['']);
      this.toastr.success('Logged Out', 'Success');
      localStorage.removeItem('token');
      localStorage.removeItem('email');
    })
    .catch(err => this.toastr.error(err.message, "Warning"));
  }

  // getToken(){
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       userdata = user;
  //       token = userdata.accessToken;
  //     }
  //   })

  //   return token;
  // }


  getUId(): any{
    return this.uid;
  }

  isAuthenticated(): boolean{
    return localStorage.getItem('token')!=undefined;
  }
}
