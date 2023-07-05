import { Component, OnInit } from '@angular/core';
import { ContactService } from '../servises/contact.service';
import { take } from 'rxjs';
import { UserService } from '../servises/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Mr-Bitcoin';
  constructor(
    private contactService: ContactService,
    private userService: UserService
    ) { }
    ngOnInit(): void {
      // this.userService.getUser()
      this.contactService.loadContacts()
      .pipe(take(1))
      .subscribe({
          error: err => {
              console.log('err:', err)
          }
      })
    }
}
