import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";

@Injectable()
export class LevelService {

  constructor(private httpService: HttpService) { }

  getLevels(){
    return this.httpService.get([],'/v1/levels',true);
  }
}
