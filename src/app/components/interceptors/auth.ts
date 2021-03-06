import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { AuthService } from "../usuarios/auth.service";
import { catchError } from "rxjs/operators";
import swal from "sweetalert2";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router : Router, private authService: AuthService){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(request).pipe(
            catchError( e => {
                if(e.status === 401) {
                    if(this.authService.isAuthenticated()){
                        this.authService.logout();
                    }
                    this.router.navigate(['/login']);
                }
                if(e.status === 403){
                    swal.fire(
                        {
                            icon: 'error',
                            title: 'Acceso denegado',
                            text: 'No tiene acceso al recurso solicitado',
                            footer: 'Kalum v1.0.0'
                        });
                    this.router.navigate(['/home']);
                }    
                return throwError(e);
            })
        );
    }
}







