import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {EducationComponent} from "./components/education/education.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfilePicComponent} from "./components/profile-pic/profile-pic.component";
import {HeaderComponent} from "./components/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ExperienceChildComponent} from "./components/experience/experience-child/experience-child.component";
import {ImageSliderComponent} from "./components/image-slider/image-slider.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TooltipDirective} from "./directives/tooltip.directive";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FirstPageComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    ExperienceChildComponent,
    ProjectsComponent,
    SkillsComponent,
    ProfilePicComponent,
    NotFoundComponent,
    ImageSliderComponent,
    TooltipDirective
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
