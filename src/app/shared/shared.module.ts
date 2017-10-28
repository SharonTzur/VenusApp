import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './components/loader/loader.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {LoggedInGuard} from "./guards/logged-in.guard";
import {RouterModule} from "@angular/router";
import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, MatSidenavModule
} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule
    ],
    declarations: [LoaderComponent],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        LoaderComponent,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
    ],
    providers: [
        LoggedInGuard
    ],
})
export class SharedModule {
}
