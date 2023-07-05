import { Location } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/servises/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }
  @Output() back = new EventEmitter<void>()
  subscription!: Subscription

  ans = ''
  contact$!: Observable<Contact>
  contact!: Contact
  ngOnInit(): void {
    this.contact$ = this.route.data.pipe(map(data => data['contact']))
    console.log('this.contact$:',this.route.data.pipe(map(data => data['contact'])) )
  }
//   onShouldAdoptContact() {
//     this.contactService.shouldAdoptContact().subscribe(ans => {
//         this.ans = ans
//         setTimeout(() => {
//             this.ans = ''
//         }, 1500);
//     })
// }

onBack() {
    this.router.navigateByUrl('/contact')
    // this.router.navigate(['/'])
    // this.location.back()
}

ngOnDestroy(): void {
    this.subscription?.unsubscribe()
}
}
