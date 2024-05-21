import { Component } from '@angular/core';
import { Standalone2Component } from '../standalone2/standalone2.component';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.scss',
  standalone: true, // This is the key to making this component standalone,
  imports: [Standalone2Component]
})
export class StandaloneComponent {

}
