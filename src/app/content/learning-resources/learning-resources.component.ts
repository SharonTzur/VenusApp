import { Component, OnInit } from '@angular/core';
import { LearningResourcesService } from '../../services/learning-resources/learning-resources.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrls: ['./learning-resources.component.scss']
})
export class LearningResourcesComponent implements OnInit {
  level

  resourceList
  constructor(private learningResourcesService:LearningResourcesService, private route:ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.level = params['level'];
      this.learningResourcesService.getResources(this.level).subscribe((data)=>{
        this.resourceList = data;
      })
    });
  }
}