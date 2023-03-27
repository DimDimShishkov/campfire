import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import classJson from '@mockData/classes.json';
import { IClass } from 'src/interface/page';

/**
 *
 * этап выбора класса
 */

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent {
  public classesArr: IClass[] = classJson;
  public expandedIndex = 0;
  @ViewChild('classSelectButton') classSelectButton: ElementRef;
  @Output() setClass = new EventEmitter<string>();

  handleSelectClass({ event, className }: { event: Event; className: string }): void {
    event.stopPropagation();
    this.classSelectButton.nativeElement.focus();
    this.setClass.emit(className);
  }
}
