import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoggedInGuard} from "./shared/guards/logged-in.guard";
import {AccountComponent} from "./account/account.component";
import {ResetPasswordComponent} from "./account/reset-password/reset-password.component";
import {ForgetPasswordComponent} from "./account/forget-password/forget-password.component";
import {ChangePasswordComponent} from "./account/change-password/change-password.component";
import {LoginComponent} from "./account/login/login.component";
import {ContentComponent} from "./content/content.component";
import {DashboardComponent} from "./content/dashboard/dashboard.component";
import {LearningProcessComponent} from "./content/learning-process/learning-process.component";
import {LearningResourcesComponent} from "./content/learning-resources/learning-resources.component";

const appRoutes: Routes = [

    {path: '', redirectTo: 'account/login', pathMatch: 'full'},
    {
        path: 'account', component: AccountComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'resetPassword', component: ResetPasswordComponent},
            {path: 'forgotPassword', component: ForgetPasswordComponent},
            {path: 'changePassword', component: ChangePasswordComponent}
        ]
    },
    {
        path: 'content', component: ContentComponent, canActivate: [LoggedInGuard],
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'learning-process', component: LearningProcessComponent},
            {path: 'learning-resources', component: LearningResourcesComponent},
        ]
    }


];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}