import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ ADD THIS

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],  // ✅ ADD THIS
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css']
})
export class ProjectCardComponent {

  @Input() title!: string;
  @Input() desc!: string;
  @Input() tech!: string[]; // ✅ already added
}