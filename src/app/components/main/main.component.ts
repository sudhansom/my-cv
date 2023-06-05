import { Component, Input } from '@angular/core';

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
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @Input() myself: ISelf = {};
  @Input() experience: IExperience[] = [];
  @Input() languages: string[] = [];
  showMore = 1;

  expand(i: number){
    this.showMore = i;
  }
}
