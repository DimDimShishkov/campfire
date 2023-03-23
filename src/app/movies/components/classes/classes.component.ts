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
  @ViewChild('raceSelectButton') raceSelectButton: ElementRef;
  @Output() setClass = new EventEmitter<string>();

  handleSelectClass(race: string): void {
    this.setClass.emit(race);
  }
}
