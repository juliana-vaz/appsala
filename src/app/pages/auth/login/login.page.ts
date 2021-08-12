import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthProviders } from 'src/app/core/services/auth.types';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup
  provider = AuthProviders

  private nameControl = new FormControl('',[Validators.required, Validators.minLength(3)])

  configs = {
    isSignIn:true,
    action:'Login',
    actionChange:'Conta Criada'
  }

  constructor(
    private formBuilder:FormBuilder,
    private authService: AuthService) { }


  ngOnInit() {
    this.createForm()
  }
  createForm():void {
    this.authForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
      })

  }

  get email():FormControl{
    return <FormControl> this.authForm.get('email')
  } 

  get password():FormControl{
    return <FormControl> this.authForm.get('password')
  }

  get name():FormControl{
    return <FormControl> this.authForm.get('name')
  }


  async clicklogin(provider:AuthProviders):Promise<null>{
    try {
      await this.authService.authenticate({
        isSignIn: this.configs.isSignIn,
        provider,
        user:this.authForm.value
      })
    } catch (error) {
      console.log(error)
    }
    return
  }

  changeAuthAction():void{
    this.configs.isSignIn =! this.configs.isSignIn;
    const {isSignIn} = this.configs;
    this.configs.action = isSignIn ? 'Login':'SignUp';
    this.configs.actionChange = isSignIn ? 'Criar Conta':'Conta Criada';

    !isSignIn ? this.authForm.addControl('name', this.nameControl): this.authForm.removeControl('name');
  }
}
