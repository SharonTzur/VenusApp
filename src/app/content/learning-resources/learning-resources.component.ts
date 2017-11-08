import { Component, OnInit } from '@angular/core';
import { LearningResourcesService } from '../../services/learning-resources/learning-resources.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrls: ['./learning-resources.component.scss']
})
export class LearningResourcesComponent implements OnInit {
  id

  resourceList
  constructor(private learningResourcesService:LearningResourcesService, private route:ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.learningResourcesService.getResources(this.id).subscribe((data)=>{
        this.resourceList = data;
      })
    });
  }
}