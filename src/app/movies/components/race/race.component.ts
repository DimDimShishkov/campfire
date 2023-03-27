import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import raceJson from '@mockData/race.json';
import { IRace } from 'src/interface/page';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent {
  public raceArr: IRace[] = raceJson;
  public expandedIndex = 0;
  @ViewChild('raceSelectButton') raceSelectButton: ElementRef;
  @Output() setRace = new EventEmitter<string>();

  handleSelectRace({ event, race }: { event: Event; race: string }): void {
    event.stopPropagation();
    this.raceSelectButton.nativeElement.focus();
    this.setRace.emit(race);
  }
}
