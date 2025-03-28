import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.sass'],
})
export class ExperienceSectionComponent implements OnInit {
  expList = [
    {
      companyName: 'Delivery Centric pvt Ltd',
      startTime: 1640649600000,
      endTime: new Date().getTime(),
      logo: 'https://www.deliverycentric.com/wp-content/uploads/2021/08/image-101.png',
      position: 'Frontend Developer',
      description: [
        'Worked on the "CoinCentric" project, a crypto coin trading application, involving Angular version migration, TradingView chart integration, HTML Canvas enhancements, and user interface (UI) development to improve usability, responsiveness, and user experience.',
        'Led the UI team for the "Interate Maths" project, an e-learning application, focusing on designing and developing an intuitive and interactive user interface.',
        'Led as UI Lead for an internal portal application for recruiters, a CMS project, focusing on designing a seamless user experience and usability.',
        'Worked on UI/UX design and basic API development for the last three projects, ensuring seamless integration and optimal support for UI development.'
      ],
      skills: [
        'Angualr 14',
        'ExpressJS',
        'HTML canvas',
        'TradingView chart',
        'High charts',
        'SASS',
        'Angualr migration',
      ],
    },
    {
      companyName: 'Qualitas Technologies pvt Ltd',
      startTime: 1593734400000,
      endTime: 1640908800000,
      logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFC8blF6ILH2A/company-logo_200_200/company-logo_200_200/0/1668403863396/qualitastech_logo?e=1748476800&v=beta&t=-KJYpADyEEHikeQnUUPeyOmU_eKs_Q-_v9lm6_NzL1U',
      position: 'Junior System Engineer',
      description: [
        'Contributed to the "Eagle Eye Cloud" application, building User Interface for machine learning and artificial intelligence.',
        'Worked on Angular Directives, Plotly Graphs, and Reusable Modules to enhance application functionality and maintainability.',
      ],
      skills: ['HTML5', 'SCSS', 'Angualr 11', 'Adobe XD', 'Plotly Graphs'],
    },
    {
      companyName: 'Elephanttree Technologies pvt Ltd',
      startTime: 1530576000000,
      endTime: 1577145600000,
      logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFtDtQJAUr1Zw/company-logo_200_200/company-logo_200_200/0/1631325517816?e=1748476800&v=beta&t=xFuM0CFNWndWO_Q9kSD1RDltdGMbRmz5eyrc6otEf4I',
      position: 'Junior Software Engineer',
      description: [
        'Contributed User Interface to the "Move My Goods" truck booking application, which includes Google Maps integration for route booking and tracking.',
        'Developed the "Live Stock" e-commerce application from scratch, focusing on scalability and performance.',
      ],
      skills: ['Angualr 6', 'Resposive web applciation', 'Designing Modules'],
    },
    {
      companyName: 'Nokia networks and solutions',
      startTime: 1514937600000,
      endTime: 1530230400000,
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGL8hpduEqGKQ/company-logo_100_100/company-logo_100_100/0/1677420439270/nokia_logo?e=1748476800&v=beta&t=jK4nJ13y9QC28RQI_7pnuCE2xbuVEwMVg1HNQN_hiZI',
      position: 'Intern',
      description: [
        'Developed the CERT Automation Tool, which generates vulnerability reports for applications to enhance security and compliance.',
        'Hands-on experience in manual testing and GUI testing to ensure application functionality and user experience.',
      ],
      skills: ['Docker', 'Jenkins', 'Linux', 'Manul Testing'],
    },
  ];
  position: any;
  description: any[] = [];
  skills: any[] = [];
  activeIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.companySelect(this.expList[this.activeIndex], this.activeIndex);
  }

  formatDate(timestamp: number): string {
    const date = new Date(timestamp);

    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const month = monthNames[date.getUTCMonth()];
    const year = Math.floor(timestamp / (1000 * 60 * 60 * 24 * 365.25)) + 1970;
    return `${month} ${year}`;
  }

  getYearMonthDifference(startTime: number, endTime: number): string {
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);

    let years = endDate.getUTCFullYear() - startDate.getUTCFullYear();
    let months = endDate.getUTCMonth() - startDate.getUTCMonth();

    if (endDate.getDate() >= startDate.getDate()) {
      months += 1;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    if (years === 0) {
      return `${months} months`;
    } else if (months === 0) {
      return `${years} years`;
    } else {
      return `${years} years and ${months} months`;
    }
  }

  isToday(timestamp: number): boolean {
    const today = new Date();
    const date = new Date(timestamp);
    return (
      date.getUTCFullYear() === today.getUTCFullYear() &&
      date.getUTCMonth() === today.getUTCMonth() &&
      date.getUTCDate() === today.getUTCDate()
    );
  }

  companySelect(data: any, index: number) {
    this.position = data.position;
    this.description = data.description;
    this.skills = data.skills;
    this.activeIndex = index;
  }
}
