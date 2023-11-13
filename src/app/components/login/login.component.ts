import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  title: string = 'Login';
  username: string = 'Prueba técnica';
  user: any = new User();
  mobile: boolean = false;
  rememberMe: boolean = false;
  error: boolean = false;

  constructor(public loginService: LoginService) {}

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.mobile = window.innerWidth <= 960;
  }
  // Cambiamos el valor del checkbox rememberMe
  changeRememberMe() {
    this.rememberMe = !this.rememberMe;
    console.log('Remember me: ', this.rememberMe);
  }

  logIn(form: NgForm) {
    this.user = { ...form.value };
    console.log(this.user);
    this.validateParams();
  }

  validateParams() {
    if (
      this.validateEmail(this.user.email) &&
      this.validatePass(this.user.password)
    ) {
      console.log('‘OK’');
      this.error = false;
      /*this.loginService.getUser().subscribe((res) => {
        console.log(res);
        console.log('Bienvenido ', res);
      });*/
      console.log('Bienvenido ' + this.user.email);
    } else {
      this.error = true;
      // TODO: Mostrar mensaje de error
      console.error('Error en el login');
    }
    if (this.user && this.user.rememberMe) {
      console.log('Añadimos a sesionStorage');
    }
  }

  // Validamos que el email tenga un formato correcto
  validateEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Validamos que la contraseña tenga un minimo de longitud
  validatePass(password: string) {
    if (password.length < 5) {
      return false;
    } else {
      return true;
    }
  }
}
