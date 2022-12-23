import {Injectable, NgModule} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserSiaService } from './pages/userSia/user-sia.service';



@Injectable()
export class HttpRequestInterceptor implements HttpRequestInterceptor{

    constructor(private userSiaService: UserSiaService){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>>{

        let token = localStorage.getItem("token");
        console.log(token);
        if(token == null)
        {
            const dupReq = req.clone({
            
                // headers: req.headers.set('Authorization',this.userSiaService.getToken()),
            });
            return next.handle(dupReq);
        }

            const dupReq = req.clone({
            
                headers: req.headers.set('Authorization',token),
            });
            return next.handle(dupReq);
        

        
    }

}

@NgModule({

    providers:[
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true,
    },
],
})

export class Interceptor { }