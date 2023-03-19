import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

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
    public isModalOpen: boolean = false;

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e: Event) {
        this.scrollPosition = this.document.documentElement.scrollTop;
    }

    constructor(@Inject(DOCUMENT) private document: Document) {}

    openModal() {
        this.isModalOpen = !this.isModalOpen;
    }
}
