import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAbility, IClass, IData } from 'src/interface/page';
import classJson from '@mockData/classes.json';

/**
 * @title Диалоговое окно с фильмом (Этап 2)
 */

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnChanges {
  @Input() selectedRace: string;
  @Input() selectedClass: string;
  @Input() selectedAbilities: IAbility[];
  public chosenClass: IClass;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IData) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit() {
    this.selectedRace = this.data.selectedRace;
    this.selectedClass = this.data.selectedClass;
    this.selectedAbilities = this.data.selectedAbilities;
    this.chosenClass = classJson.find((item) => item.name === this.selectedClass)!;
  }
}
