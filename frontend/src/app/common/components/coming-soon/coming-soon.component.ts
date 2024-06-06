import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent implements OnInit {
  fullText: string = 'Coming Soon...';
  displayTextArray: string[] = [];
  currentIndex: number = 0;
  fadingOut: boolean = false;

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping(): void {
    if (this.currentIndex < this.fullText.length) {
      console.log(this.currentIndex, this.fullText.charAt(this.currentIndex), this.displayTextArray);
      this.displayTextArray.push(this.fullText.charAt(this.currentIndex));
      this.currentIndex++;
      setTimeout(() => this.startTyping(), 100);
    } else {
      setTimeout(() => this.startFadeOut(), 5000);
    }
  }

  startFadeOut(): void {
    this.fadingOut = true;
    setTimeout(() => this.resetTyping(), 1000);
  }

  resetTyping(): void {
    this.displayTextArray = [];
    this.currentIndex = 0;
    this.fadingOut = false;
    this.startTyping();
  }
}
