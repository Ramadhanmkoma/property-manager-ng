import { Component, Input } from '@angular/core';
import { NgIcon, NgIconComponent, provideIcons } from '@ng-icons/core';
// import { featherAirplay } from '@ng-icons/feather-icons';
import { heroBars3, heroBell, heroCog6Tooth, heroUser, heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'pm-header',
  imports: [NgIconComponent, NgIcon],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers: [provideIcons({ heroUser, heroBars3, heroBell, heroCog6Tooth, heroUsers })],
})
export class Header {

  @Input({required: true}) drawer: any;

  icons = {
    menu: heroBars3,
    user: heroUser,
    bell: heroBell,
    settings: heroCog6Tooth
  };
}
