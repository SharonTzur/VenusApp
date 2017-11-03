import {Component, OnInit} from '@angular/core';
import {LevelService} from "../../services/level/level.service";

@Component({
    selector: 'app-levels',
    templateUrl: './levels.component.html',
    styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {

    private levels;

    constructor(private levelsService: LevelService) {
    }

    ngOnInit() {
        this.levelsService.getLevels().subscribe((levels)=> {
            this.levels = levels;
        })
    }

    onItemClicked() {
        
    }

}
