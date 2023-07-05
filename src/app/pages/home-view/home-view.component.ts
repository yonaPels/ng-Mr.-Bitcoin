import { Component } from '@angular/core';
import { User } from 'src/app/models/contact.model';
import { BitcoinService } from 'src/app/servises/bitcoin.service';
import { UserService } from 'src/app/servises/user.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {
  user: User | undefined;
  inputValue: string = ''
  bitcoinRate: number | undefined;

  constructor(
    private bitcoinService: BitcoinService,
    private userService: UserService
    ) {}

  onLoggedinUser(value:string): void{
    this.user = this.userService.getLoggedinUser(value)
    this.inputValue = ''
    // setTimeout((): void => {
    //   console.log(this.user);
    // },2000)
  }
  onLogout():void{
    this.user = undefined
  }

  ngOnInit(): void {
    this.bitcoinService.getRate().subscribe(
      rate => {
        this.bitcoinRate = rate;
      },
      error => {
        console.log('Error fetching bitcoin rate:', error);
      }
    );
  }
}
