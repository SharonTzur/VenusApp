import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource/resource.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  id
  level
  resource
  
  constructor(private route:ActivatedRoute, private resourceService:ResourceService) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.level = params['level'];
      this.id = params['id'];
      this.resourceService.getResource(this.level, this.id).subscribe((data)=>{
        this.resource = data;
      })
    });
  }

}
