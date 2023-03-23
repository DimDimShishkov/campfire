import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import parametersJson from '@mockData/parameters.json';
import { IParameters } from 'src/interface/page';

/**
 *
 * этап выбора SPECIAL
 */

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss'],
})
export class ParametersComponent implements OnInit {
  public parametersArr: IParameters[] = parametersJson;
  public summaryParam: number = 0;

  @Output() setParameters = new EventEmitter<IParameters[]>();

  ngOnInit(): void {
    this.parametersArr.forEach((item) => {
      return (this.summaryParam = this.summaryParam + item.value);
    });
  }

  handleSubmitForm() {
    this.setParameters.emit(this.parametersArr);
  }

  handleChangeSpecial(value: string) {
    const item = value.split('-');
    if (item[1] === 'decrease' && this.summaryParam > 48) {
      return this.parametersArr.map((el) => {
        if (el.nameEN === item[0] && el.value > 8) {
          this.summaryParam = el.value > 13 ? this.summaryParam - 2 : this.summaryParam - 1;
          return (el.value -= 1);
        } else return el;
      });
    } else if (item[1] === 'increase' && this.summaryParam < 75) {
      return this.parametersArr.map((el) => {
        if (el.nameEN === item[0] && el.value < 15) {
          this.summaryParam = el.value > 12 ? this.summaryParam + 2 : this.summaryParam + 1;
          return (el.value += 1);
        } else return el;
      });
    } else return this.parametersArr;
  }
}
