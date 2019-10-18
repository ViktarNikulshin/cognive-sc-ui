import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'cognive-sc-ui';
  users = [
    { name: 'viktar',
      password: '1111'
    },
    { name: 'roman',
      password: 'qwer'
    },
    { name: 'admin',
      password: 'admin'
    },
  ];
}
