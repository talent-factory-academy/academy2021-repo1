import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-right',
  template: `
    <p>
      right works!
    </p>
    
    <button (click)="memberService.clear()"></button>
  `,
  styles: [
  ]
})
export class RightComponent implements OnInit {

  constructor(public memberService: MembersService) { }

  ngOnInit(): void {
  }

}
