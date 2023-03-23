import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAbility } from 'src/interface/page';

/**
 *
 * чекбокс для выбора навыка
 */

@Component({
  selector: 'app-abilities-wrap',
  templateUrl: './abilities-wrap.component.html',
  styleUrls: ['./abilities-wrap.component.scss'],
})
export class AbilitiesWrapComponent implements OnInit {
  // handleOnChange(event: React.FormEvent<HTMLInputElement>): void;
  @Input() skill: IAbility;
  @Input() itemName: string;
  @Output() handleOnChange = new EventEmitter<number>();
  @Input() itemText?: string;
  public value: number = 0;
  public isChecked: boolean = false;

  constructor() {}

  ngOnInit() {
    // this.isChecked = !!this.skills.find((item) => item.name === this.itemName)?.checked;
    this.isChecked = !!this.skill?.checked;
    // this.value = +this.skills.find((item) => item.name === this.itemName)?.value || 0;
    this.value = +this.skill?.value;
  }

  onChange(event: KeyboardEvent) {
    console.log(event);
    // const { id, checked } = event;
  }
}
