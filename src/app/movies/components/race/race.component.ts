import { Component } from '@angular/core';

interface IRaceProps {
    setRace(v: string): void;
}

/* interface IRaceItem {
    race: IRace;
    setRace: (v: string) => void;
    active: boolean;
    onToggle: () => void;
} */

@Component({
    selector: 'app-race',
    templateUrl: './race.component.html',
    styleUrls: ['./race.component.scss'],
})
export class RaceComponent {
    /*   const [clicked, setClicked] = useState<number>(-1);
  const handleToggle = (index: number) => {
    if (clicked === index) { setClicked(-1)    }
    setClicked(index);
  }; */
    /*   const contentEl = useRef<HTMLDivElement>(null);
  const openItemHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setRace(race.value);
  }; */
}
