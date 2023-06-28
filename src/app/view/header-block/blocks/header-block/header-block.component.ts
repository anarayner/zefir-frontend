import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.css']
})
export class HeaderBlockComponent implements OnInit{
  constructor(private store: Store, private httpClient: HttpClient) {
  }



  ngOnInit(): void {
  }

}
