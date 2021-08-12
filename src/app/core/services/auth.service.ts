import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth'
import { AuthOptions, AuthProviders, User } from './auth.types';
import auth from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<firebase.User>;

  constructor(
    private authFacebook: AngularFireAuth
  ) { }
  
  //++++++++++++++++++++++++++++++++++++++++++++++++
  isAuthenticated():Observable<boolean> {
    return this.authState$.pipe(map(user => user != null))
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++
  authenticate({isSignIn,provider, user}: AuthOptions): Promise<auth.auth.UserCredential>{
    let operation: Promise<auth.auth.UserCredential>
    if(provider!=AuthProviders.Email)
      operation = this.signInWithPopUp(provider)
    else
      operation = isSignIn ? this.signInFacebook(user):this.signUpFacebook(user)
    return operation
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++
  logOut():Promise<void>{
    return this.authFacebook.signOut();
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++
  private signInFacebook({name, email, password}:User): Promise<auth.auth.UserCredential> {
    return this.authFacebook.signInWithEmailAndPassword(email,password);


  }
  //++++++++++++++++++++++++++++++++++++++++++++++++
  private signUpFacebook({name, email, password}:User): Promise<auth.auth.UserCredential> {
    return this.authFacebook.createUserWithEmailAndPassword(email, password)
    .then(credential => credential.user.updateProfile({displayName:name, photoURL: null})
    .then (()=>credential)
    );
    
  }
  //++++++++++++++++++++++++++++++++++++++++++++++++
  private signInWithPopUp(provider:AuthProviders):Promise<auth.auth.UserCredential>{
    let signInProvider = null;
    switch(provider){
      case AuthProviders.Facebook:
        signInProvider = new auth.auth.FacebookAuthProvider();
        break;
    }
    
    return this.authFacebook.signInWithPopup(signInProvider);
  }
}
