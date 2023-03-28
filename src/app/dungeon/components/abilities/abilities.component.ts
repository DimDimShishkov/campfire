import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import abilitiesJson from '@mockData/abilities.json';
import classJson from '@mockData/classes.json';
import { IAbility, IClass, IParameters } from 'src/interface/page';

/**
 *
 * этап выбора навыков
 */

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss'],
})
export class AbilitiesComponent implements OnChanges {
  // handleOnChange(event: React.FormEvent<HTMLInputElement>): void;
  @Input() selectedRace: string;
  @Input() selectedClass: string;
  @Input() selectedParams: IParameters[];
  @Output() setResult = new EventEmitter<IAbility[]>();

  public isAbilitiesComplete: boolean = false;
  public abilitiesArr: IAbility[] = abilitiesJson;
  public resultArr: IAbility[] = [];
  public chosenClass: IClass;
  public abilitiesCounter: number;
  private findParam: IParameters | undefined;
  private resultParam: number | string;

  constructor() {}

  // Расчёт параметров для чарника
  ngOnChanges() {
    this.isAbilitiesComplete =
      !!this.selectedParams?.length &&
      this.selectedRace !== 'Подлежит выбору' &&
      this.selectedClass !== 'Подлежит выбору';
    if (this.isAbilitiesComplete) {
      this.abilitiesArr = this.abilitiesArr.map((skill) => {
        this.findParam = this.selectedParams.find((item) => skill.name.split('-')[0] === item.nameEN);
        return this.findParam?.nameEN === skill.name
          ? {
              name: skill.name,
              checked: false,
              value: `${this.findParam?.value}`,
            }
          : {
              name: skill.name,
              checked: false,
              value: `${this.findParam?.bonus}`,
            };
      });
      this.chosenClass = classJson.find((item) => item.name === this.selectedClass)!;
      this.abilitiesCounter = this.chosenClass.skillsCounter;
    }
  }
  valueHandler(v: string, mode: number) {
    return this.abilitiesArr.find((item) => item.name === v)?.value;
  }
  abilityHandler(v: string) {
    return this.abilitiesArr.find((item) => item.name === v);
  }

  handleChangeSpecial(obj: { id: string; checked: boolean }) {
    const { id, checked } = obj;
    this.abilitiesCounter = checked ? this.abilitiesCounter - 1 : this.abilitiesCounter + 1;
    if (this.abilitiesCounter < 0) {
      this.abilitiesCounter = 0;
      return;
    }
    this.abilitiesArr = this.abilitiesArr.map((el) => {
      if (el.name === id) {
        this.resultParam = checked ? +el.value + 2 : +el.value - 2;
        this.resultParam = this.resultParam > 0 ? `+${this.resultParam}` : `${this.resultParam}`;
        return { ...el, checked: checked, value: this.resultParam };
      } else {
        return { ...el };
      }
    });
  }

  handleSubmitForm() {
    this.setResult.emit(this.abilitiesArr);
  }
}
