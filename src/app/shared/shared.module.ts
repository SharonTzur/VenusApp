import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './components/loader/loader.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {LoggedInGuard} from "./guards/logged-in.guard";
import {RouterModule} from "@angular/router";
import {
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule, MdSidenavModule
} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MdButtonModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdCardModule,
        MdSidenavModule
    ],
    declarations: [LoaderComponent],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        LoaderComponent,
        MdButtonModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdCardModule,
        MdSidenavModule,
    ],
    providers: [
        LoggedInGuard
    ],
})
export class SharedModule {
}
