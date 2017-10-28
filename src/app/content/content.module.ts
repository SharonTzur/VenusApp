import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ContentComponent} from "./content.component";
import {SharedModule} from "../shared/shared.module";
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
// import { LearningProcessComponent } from './learning-process/learning-process.component';
// import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
=======
import { LearningProcessComponent } from './learning-process/learning-process.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { LevelsComponent } from './levels/levels.component';
>>>>>>> 35bcabde05b030bfbc4e407b1178ea26d4f55c4b

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ContentComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    LearningProcessComponent,
    LearningResourcesComponent,
    LevelsComponent
  ]
})

export class ContentModule { }