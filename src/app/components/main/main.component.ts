import { Component, Input } from '@angular/core';

interface ISelf {
  [key: string]: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @Input() myself: ISelf = {};
}
