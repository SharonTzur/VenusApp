import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private user;
    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.user = this.authService.getUser();
    }

}
