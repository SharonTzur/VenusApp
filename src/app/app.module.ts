import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app.routes";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AccountModule} from "./account/account.module";
import {RouterModule} from "@angular/router";
import {LoaderComponent} from "./shared/components/loader/loader.component";
import {SharedModule} from "./shared/shared.module";
import {UserService} from "./services/user/user.service";
import {HttpService} from "./services/http/http.service";
import {LoaderService} from "./services/loader/loader.service";
import {LocalStorageService} from "./services/local-storage/local-storage.service";
import {AuthService} from "./services/auth/auth.service";
import {HttpModule, JsonpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ContentModule} from "./content/content.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule,
        SharedModule,
        AccountModule,
        ContentModule
    ],
    providers: [
        UserService,
        LoaderService,
        HttpService,
        LocalStorageService,
        AuthService,
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
