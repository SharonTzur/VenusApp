import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ContentComponent} from "./content.component";
import {SharedModule} from "../shared/shared.module";
import { DashboardComponent } from './dashboard/dashboard.component';
// import { LearningProcessComponent } from './learning-process/learning-process.component';
// import { LearningResourcesComponent } from './learning-resources/learning-resources.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ContentComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    // LearningProcessComponent,
    // LearningResourcesComponent
  ]
})

export class ContentModule { }