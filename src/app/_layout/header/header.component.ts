import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit{
  texts: string[] = ['Hithesh Nandeesh', 'Front End Developer'];
  displayedText: string = '';
  textIndex: number = 0;

  ngOnInit() {
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    interval(5000).subscribe(() => {
      this.displayedText = '';
      let text = this.texts[this.textIndex];
      let i = 0;
      let typingInterval = setInterval(() => {
        if (i < text.length) {
          this.displayedText += text[i];
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Typing speed

      this.textIndex = (this.textIndex + 1) % this.texts.length;
    });
  }

  socialTab(application: string) {
    if (application == 'linkedin') {
      window.open(
        'https://www.linkedin.com/in/hithesh-m-n-ab53a4158/',
        '_blank'
      );
    } else if (application == 'insta') {
      window.open('https://www.instagram.com/hitheshmn/?next=', '_blank');
    } else if (application == 'github') {
      window.open('https://github.com/MnHithesh', '_blank');
    }
  }
}
