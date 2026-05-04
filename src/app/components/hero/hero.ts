import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit, OnDestroy {

  roles = [
    "Java Full Stack Developer",
    "Backend Developer (Spring Boot)",
    "Angular Frontend Developer"
  ];

  displayText = "";

  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  private interval: any;

  ngOnInit() {
    this.startTyping();
  }

  startTyping() {
    this.interval = setInterval(() => {

      const current = this.roles[this.roleIndex];

      if (this.isDeleting) {
        this.charIndex--;
      } else {
        this.charIndex++;
      }

      this.displayText = current.substring(0, this.charIndex);

      // FULL WORD TYPED
      if (!this.isDeleting && this.charIndex === current.length) {
        this.isDeleting = true;
        this.pause(1500);
      }

      // FULL WORD DELETED
      else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }

    }, 80);
  }

  pause(duration: number) {
    clearInterval(this.interval);

    setTimeout(() => {
      this.startTyping();
    }, duration);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}