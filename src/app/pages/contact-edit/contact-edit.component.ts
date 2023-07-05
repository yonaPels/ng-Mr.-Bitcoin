import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/servises/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    // private router: Router
) { }

router = inject(Router)

contact = this.contactService.getEmptyContact() as Contact
subscription!: Subscription

ngOnInit(): void {
    this.route.data
        .pipe(
            map(data => data['contact']),
            filter(contact => !!contact),
        )
        .subscribe(contact => this.contact = contact)

// console.log('this.contact:', this.contact)

    // this.route.params
    //     .pipe(
    //         map(params => params['id']),
    //         filter(id => id),
    //         switchMap(id => this.contactService.getById(id))
    //     )
    //     .subscribe(contact => this.contact = contact)
}


onSaveContact() {

    this.subscription = this.contactService.saveContact(this.contact)
        .subscribe({
            next: () => this.router.navigateByUrl('contact'),
            error: err => console.log('err:', err)
        })
}


ngOnDestroy(): void {
    this.subscription?.unsubscribe()
}
}
