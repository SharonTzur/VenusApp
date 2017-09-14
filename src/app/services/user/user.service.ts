import { Injectable} from "@angular/core";
import { Response} from "@angular/http";
import { Observable} from "rxjs";
import { HttpService} from "../http/http.service";
import { Router} from "@angular/router";
import { AuthService} from "../auth/auth.service";

@Injectable()
export class UserService {

    constructor(private httpService: HttpService,
                private router: Router,
                private authService: AuthService) {}

     login(formObject): Observable<any> {
        return this.httpService.post(formObject, '/auth/login', false)
            .map(this.updateAuth.bind(this))
    }

     resetPassword(formObject: any) {
        return this.httpService.post(formObject, '/user/agent/resetpassword', false)
            .map(this.updateAuth.bind(this));
    }

     forgetPassword(email: string) {
        return this.httpService.post(email, '/user/agent/sendnewpassword', false);
    }

     changePassword(formObject: any) {
        formObject.email = this.getUserEmail();
        return this.httpService.post(formObject, '/user/agent/changepassword', true);
    }

    // Get user
     getUser() {
        return this.authService.getUser();
    }

     getUserEmail() {
        let user = this.authService.getUser();
        return user ? user.email : null;
    }

    getUserId(){
        let user = this.authService.getUser();
        return user ? user.id : null;
    }

    // Get if user has specific role
     hasRole(roleEnum) {
        let user = this.getUser();
        if (user) {
            return user.roles[0].id == roleEnum;
        }
        else {
            return false;
        }
    }

     logout() {
        this.authService.deleteAuthObject();
        this.router.navigate(['account/login']);
    }

    // PRIVATE FUNCTIONS
    private updateAuth(res: Response) {
        this.authService.setAuthObject(res);
        this.router.navigate(['content/dashboard']);
        return res;
    }
}
