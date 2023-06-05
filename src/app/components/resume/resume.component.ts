import { Component } from '@angular/core';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  mySkills: {
    tech: string,
    details: string,
  }[] = environment.data.myKills;
}
