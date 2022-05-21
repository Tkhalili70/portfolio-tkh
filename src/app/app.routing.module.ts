import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FirstPageComponent} from "./components/first-page/first-page.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {EducationComponent} from "./components/education/education.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";

export const routes:Routes = [
  {path:'' , component:HomeComponent , pathMatch:'full'},
  {path:'first-page' , component:FirstPageComponent},
  {path:'about' , component:AboutComponent },
  {path:'contact' , component:ContactComponent },
  {path:'education' , component:EducationComponent },
  {path:'experience' , component:ExperienceComponent },
  {path:'projects' , component:ProjectsComponent },
  {path:'skills' , component:SkillsComponent },
  {path:'not-found' , component:NotFoundComponent },
  {path:'**' , redirectTo:'not-found' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
