import { Component, OnInit} from '@angular/core';
import { OffersService } from 'src/app/core/service/offers-service/offers.service';

@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css']
})
export class MyProfilePageComponent implements OnInit{
  offers: any;
  uid: any;
  email: any;
  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getAllOffers().subscribe(data => {
       this.offers = Object.values(data);
       this.uid = localStorage.getItem('uid');
       this.email = localStorage.getItem('email');
    })
  }

}
