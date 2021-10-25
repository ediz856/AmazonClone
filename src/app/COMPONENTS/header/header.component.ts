import { AuthService } from './../../SERVICES/auth.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCartService,
    public auth : AuthService) { }

  ngOnInit(): void {
  }

  signOut(){
    this.auth.logOut()
  }

}