import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MdDrawer} from "@angular/material";

@Component({
    selector: 'app-content',
    templateUrl: 'content.component.html',
    styleUrls: ['content.component.scss'],
})
export class ContentComponent implements OnInit {

    public currentRoute;
    @ViewChild('sidenav') sidenav;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.currentRoute = this.router.url;
    }

    toggleSidenav() {
        this.sidenav.toggle();
    }
}
