import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ISelf {
  [key: string]: string;
}


interface IExperience {
  type: string,
  all : {
    name: string,
    position: string,
    address: string,
    date: string,
    features: string[],
    note: string,
  }[],
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  @Input() myself: ISelf = {};
  @Input() experience: IExperience[] = [];
  @Input() languages: string[] = [];
  showMore$ = new BehaviorSubject(1);

  expand(i: number){
    this.showMore$.next(i);
  }
}
