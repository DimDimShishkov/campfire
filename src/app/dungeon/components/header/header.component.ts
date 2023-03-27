import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Input, Output } from '@angular/core';

/* interface IHeaderProps {
    isModalOpen: boolean;
    openModal: () => void;
}
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public scrollPosition: number = 0;
  @Input() isMobileWidth: number;
  @Output()
  openCharList = new EventEmitter();

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    this.scrollPosition = this.document.documentElement.scrollTop;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  openModal() {
    this.openCharList.emit();
  }
}
