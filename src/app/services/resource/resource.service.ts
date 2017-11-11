import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service'

@Injectable()
export class ResourceService {

  constructor(private httpService:HttpService) { }
  
  public getResource(level, id){
    return this.httpService.get([], '/v1/levels/' + level + '/learningResources/' + id,  true)
  }
  
}
