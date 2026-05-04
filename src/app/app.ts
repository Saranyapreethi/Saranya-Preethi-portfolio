import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { EducationComponent } from './components/education/education';
import { ProjectsComponent } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact';
import { CoursesComponent } from './components/courses/courses';
import{ExperienceComponent} from './components/Experience/experience'
import{ProjectCardComponent} from './components/project-card/project-card'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    ExperienceComponent,
    ProjectCardComponent
    
  ],
  templateUrl: './app.html'
})
export class AppComponent {
  
}