import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service'

@Injectable()
export class LearningResourcesService {

  constructor( private httpService:HttpService) { }

  public getResources(id){
    return this.httpService.get([], '/v1/levels/' + id + '/learningResources',  true)
  }
}
