import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This is the selector that identifies this component in the HTML host web page which is index.html.
  templateUrl: './app.component.html',
  //template:'<h1>{{title}}</h1>',  // This is used when we want to write the HTML code in the same file without using the external HTML file.
                                  // To use multiple lines of HTML code, we can use backticks(`) instead of single quotes(').
  //styleUrls: ['./app.component.scss'], // This is used to apply the CSS to the HTML code. styleUrls is an array of strings that specifies the location of the CSS file.
  //styles:['h1{color:blue}'] // This is used for inline CSS. 
  styleUrl:'./app.component.scss' // This is used for one external CSS file.

})

export class AppComponent {
  title = 'AngularTutorial';
  name : string ="";
  text : string = "Hello World!";
  person : {name: string, surname:string};
}