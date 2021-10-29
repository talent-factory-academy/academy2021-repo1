import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      left works!
    </p>
    {{memberService.values}}
  `,
  styles: [
  ]
})
export class LeftComponent implements OnInit {

  constructor(public memberService: MembersService) { }

  ngOnInit(): void {
  }

}
