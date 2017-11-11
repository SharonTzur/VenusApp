import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service'

@Injectable()
export class LearningResourcesService {

  constructor( private httpService:HttpService) { }

  public getResources(level){
    return this.httpService.get([], '/v1/levels/' + level + '/learningResources',  true)
  }
}
