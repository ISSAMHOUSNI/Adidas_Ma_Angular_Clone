import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emailverifivation',
  templateUrl: './emailverifivation.component.html',
  styleUrls: ['./emailverifivation.component.scss']
})
export class EmailverifivationComponent implements OnInit {
  constructor(private sRoute:Router){}
ngOnInit(): void {
  setTimeout(() => {
    this.sRoute.navigate(['/', 'SignIn']).then(
      ()=>
      {
        console.log("---------------------------- Redirect To SignIn  ----------------------------");
      },err =>
      {
        console.log("---------------------------- ERROR NAVIGATE  ----------------------------");
      }
      );
  }, 10000);
}
}
