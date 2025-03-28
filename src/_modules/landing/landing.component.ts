import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { count } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
})
export class LandingComponent {
  more: boolean = false;
  countList = [
    {
      icon: 'calendar_today',
      count: 6,
      description: 'Hey, Years Experience',
    },
    {
      icon: 'work',
      count: 6,
      description: 'Projects worked',
    },
    {
      icon: 'person',
      count: 6,
      description: 'Clients worked',
    },
  ];
  offersList = [
    {
      icon: 'desktop_windows',
      heading: 'Web Application',
      description:
        'Crafting visually appealing and user-friendly interfaces from scratch if needed, using HTML5, CSS3, TypeScript, and modern frameworks like Angular and React.',
    },
    {
      icon: 'adjust',
      heading: 'Responsive Application',
      description:
        'Designing adaptive and user-friendly interfaces that work seamlessly across all devices, using HTML5, CSS3, TypeScript, and modern frameworks like Angular and React.',
    },
    {
      icon: 'cast_connected',
      heading: 'API Development',
      description:
        'Building scalable and efficient APIs from scratch if needed, using modern technologies and best practices to ensure seamless communication between frontend and backend.',
    },
  ];

  educationDetails = [
    {
      year: '2015-2018',
      institute: ' Sri Jayachamarajendra Collage of Engineering',
      desc: "Masters's in Computer Application(MCA)",
    },
    {
      year: '2012-2015',
      institute: ' Gopalaswamy Collage of proffesional studies',
      desc: "Bachelor's in Computer Application(BCA)",
    },
    {
      year: '2009-2012',
      institute: ' Gopalaswamy PU Collage',
      desc: 'Pre-University (state board)',
    },
    {
      year: '2006-2009',
      institute: "St Joseph's High School",
      desc: 'High School (state board)',
    },
  ];
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}
}
