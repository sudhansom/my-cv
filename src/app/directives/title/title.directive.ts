import { Directive, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[smPageTitle]',
})
export class TitleDirective {
  @Input() set smPageTitle(title: string) {
    this.title.setTitle(title);
  }

  constructor(private title: Title) {}
}
