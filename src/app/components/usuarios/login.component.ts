import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import Swal from "sweetalert2";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  titulo = 'Login';
  usuario : Usuario;
  
  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
    
  }

  login():void {
    
    if (this.usuario.email == null || this.usuario.password == null){
      Swal.fire({
        icon: 'error', title: 'Login Failed', text: 'User Name o Password No han sido ingresados', 
        footer: 'Kalum v1.0.0'
      });
      return;
    }
    this.authService.login(this.usuario).subscribe(response=>{
      const payload = this.authService.getToken(response.token);
      this.authService.saveToken(response.token);
      this.authService.saveUser(payload);
      //this.router.navigate(['/home']);
      //this.authService.saveUser({...payload, password: this.usuario.password});

      Swal.fire({
        icon: 'success', title: 'Login Success', text: `Bienvenido  ${payload.email}  al sistema`,
        footer: 'Kalum v1.0.0'
      }).then((result) => { 
        if (result.isConfirmed){
          this.router.navigate(['/home']);
        }

      });

    }, error=> {
       if (error.status == 400) {
        
        Swal.fire({
          icon: 'error', title: 'Login Failed', text: 'User Name o Password son Incorrectos', 
          footer: 'Kalum v1.0.0'
        });

       } else {

          Swal.fire({
            icon: 'error', title: 'Service Failed', text: 'Error de Conexion a la plataforma Kalum', 
            footer: 'Kalum v1.0.0'
          });
       }
    });
  }
}
