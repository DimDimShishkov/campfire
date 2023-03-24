import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { IAbility } from 'src/interface/page';

/**
 *
 * чекбокс для выбора навыка
 */

@Component({
  selector: 'app-ability-item',
  templateUrl: './ability-item.component.html',
  styleUrls: ['./ability-item.component.scss'],
})
export class AbilityItemComponent implements OnChanges {
  // handleOnChange(event: React.FormEvent<HTMLInputElement>): void;
  @Input() skill: IAbility | undefined;
  @Input() itemName: string;
  @Output() handleOnChange = new EventEmitter<{ id: string; checked: boolean }>();
  @Input() itemText?: string;
  public value: string = '0';
  public isChecked: boolean = false;

  constructor() {}

  ngOnChanges() {
    if (this.skill) {
      this.isChecked = this.skill.checked;
      this.value = this.skill.value;
    }
  }

  onChange() {
    this.handleOnChange.emit({ id: this.itemName, checked: !this.isChecked });
  }
}
