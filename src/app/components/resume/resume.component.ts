import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environment/environment';

interface ISelf {
  [key: string]: string;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {
  mySkills: {
    tech: string,
    details: string,
  }[] = environment.data.myKills;

  myself: ISelf = environment.data.myself;
  experience = environment.data.experience;
  languages = environment.data.languages;
}
