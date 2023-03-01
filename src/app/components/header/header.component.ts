import { Component } from '@angular/core';
import { faTruckFast,faTicket,faMoneyBill,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faTruckFast=faTruckFast;
  faTicket=faTicket;
  faMoneyBill=faMoneyBill;
  faMagnifyingGlass=faMagnifyingGlass;

}
