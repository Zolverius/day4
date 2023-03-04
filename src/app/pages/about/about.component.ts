import { Component } from '@angular/core';
import { district } from 'src/assets/district';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
collections = district;

}