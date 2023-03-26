import { Component, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IAbility, IParameters } from 'src/interface/page';
import { ModalComponent } from '../../components/modal/modal.component';

/**
 *
 * Итоговый компонент
 */

@Component({
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements DoCheck {
  public selectedRace: string = 'Подлежит выбору';
  public selectedParams: IParameters[];
  public selectedClass: string = 'Подлежит выбору';
  public selectedAbilities: IAbility[];

  constructor(public dialog: MatDialog) {}

  // переделать под RxJS и подпиской на localStorage
  ngDoCheck() {
    const cardID = +(localStorage.getItem('selectedCard') || 0);
  }

  setRaceEvent(race: string) {
    this.selectedRace = race;
  }
  setParametersEvent(parameters: IParameters[]) {
    this.selectedParams = parameters;
  }
  setClassEvent(className: string) {
    this.selectedClass = className;
  }
  setAbilitiesEvent(abilities: IAbility[]) {
    this.selectedAbilities = abilities;
  }
  openCharListModal() {
    this.dialog.open(ModalComponent, {
      data: {
        selectedRace: this.selectedRace,
        selectedClass: this.selectedClass,
        selectedAbilities: this.selectedAbilities,
      },
      // overflowX: 'visible',
      // width: '800px',

      //  scrollStrategy:
    });
  }
}
