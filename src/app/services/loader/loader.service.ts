import { Injectable } from '@angular/core';
import { Observable, Observer} from "rxjs/Rx";

@Injectable()
export class LoaderService {

  public loading$: Observable<any>;
  private observer: Observer<any>;

  constructor() {
     this.loading$ = new Observable( observer => this.observer=observer).share();
  }

  public toggleLoader(bol){
    if(this.observer){
      this.observer.next(bol);
    }
  }

}
