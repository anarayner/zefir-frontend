import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {isAuth} from "../../../../store/auth-store/store/auth.selectors";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  isAuth$: Observable<boolean> = this.store.select(isAuth)

  ngOnInit(): void {
    this.isAuth$.subscribe(value => {
      console.log('IS_AUTH', value);
    });
  }

  testProfile() {
    this.httpClient.get('http://localhost:5000/users')
      .subscribe(console.log);
  }


  constructor(private store: Store, private httpClient: HttpClient) {
  }
}
