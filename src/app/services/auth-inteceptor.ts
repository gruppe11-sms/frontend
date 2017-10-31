import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {TokenService} from "./token.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public constructor(private tokenService: TokenService) {
  }

  public intercept(req: HttpRequest<any>,
                   next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url !== '/api/auth/login') {
      return this.tokenService.token.take(1)
        .switchMap(token => {
          req = req.clone({headers: req.headers.append('authorization', token)});

          return next.handle(req);
        });
    }
    return next.handle(req);
  }
}
