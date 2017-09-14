
import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {LoginComponent} from "./login/login.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import {AccountComponent} from "./account.component";

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        LoginComponent,
        ResetPasswordComponent,
        AccountComponent,
        ForgetPasswordComponent,
        ChangePasswordComponent,
    ],
    providers: [],
})
export class AccountModule {

}
