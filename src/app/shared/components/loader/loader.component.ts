import { Component, OnInit } from '@angular/core';
import {LoaderService} from "../../../services/loader/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {


  private isLoading: boolean = false;
  private subscription;

  constructor(private loadService : LoaderService) { }

  ngOnInit() {
    this.subscription = this.loadService.loading$.subscribe(loading=>this.toggle(loading));
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }


  private toggle(loading) {
    this.isLoading = loading;
  }

}
