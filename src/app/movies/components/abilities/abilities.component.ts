import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import AbilitiesJson from '@mockData/abilities.json';
import { IAbility, IParameter } from 'src/interface/page';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss'],
})
export class AbilitiesComponent implements OnInit {
  // handleOnChange(event: React.FormEvent<HTMLInputElement>): void;
  @Input() race: string;
  @Input() character: string;
  @Input() parameters: IParameter[];
  @Output() setResult = new EventEmitter<IAbility[]>();

  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log(AbilitiesJson);
  }
}
