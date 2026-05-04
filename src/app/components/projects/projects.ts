import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],  // ✅ IMPORTANT
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {

 projects = [
  {
    title: 'Third-Party Appointment Platform (TPAP)',
    desc: `Designed and implemented a data migration solution to integrate appointment data from a third-party system into internal databases. Developed backend ETL services for data transformation, validation, and error handling to ensure data integrity. Optimized bulk database operations for performance and collaborated with teams to achieve seamless integration with minimal downtime.`,
    tech: ['Java', 'Spring Boot', 'SQL']
  },
  {
    title: 'License Appointment Registration System (LARS)',
    desc: `Developed and maintained a License Appointment Registration system supporting end-to-end user workflows. Worked on both frontend (Angular) and backend (Java, Spring Boot) to build and enhance application features. Monitored scheduled jobs and background processes to ensure smooth system operations. Identified and resolved bugs, improving system stability and overall performance.`,
    tech: ['Angular', 'Java', 'Spring Boot', 'SQL']
  },
  {
    title: 'Customer Verification Tool (CVT)',
    desc: `Developed a Customer Verification Tool to streamline identity validation and onboarding processes. Built responsive frontend interfaces using Angular and integrated them with backend services using Java and Spring Boot. Implemented secure data handling and validation using SQL. Optimized API interactions to ensure efficient and smooth end-to-end workflow execution.`,
    tech: ['Angular', 'Java', 'Spring Boot', 'SQL']
  }
];
}