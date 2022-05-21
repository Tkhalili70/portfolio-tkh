import {routes} from './app.routing.module';
import {FirstPageComponent} from "./components/first-page/first-page.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {EducationComponent} from "./components/education/education.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
describe('routes' , () => {

  it('should contain a route for /first-page', function () {
    expect(routes).toContain({path:'first-page' , component:FirstPageComponent});
  });
  it('should contain a route for /about', function () {
    expect(routes).toContain({path:'about' , component:AboutComponent});
  });
  it('should contain a route for /contact', function () {
    expect(routes).toContain({path:'contact' , component:ContactComponent});
  });
  it('should contain a route for /education', function () {
    expect(routes).toContain({path:'education' , component:EducationComponent});
  });
  it('should contain a route for /experience', function () {
    expect(routes).toContain({path:'experience' , component:ExperienceComponent});
  });
  it('should contain a route for /projects', function () {
    expect(routes).toContain({path:'projects' , component:ProjectsComponent});
  });
  it('should contain a route for /skills', function () {
    expect(routes).toContain({path:'skills' , component:SkillsComponent});
  });
  it('should contain a route for /not-found', function () {
    expect(routes).toContain({path:'not-found' , component:NotFoundComponent});
  });
})
