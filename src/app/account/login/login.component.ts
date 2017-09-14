import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {AuthService} from "../../services/auth/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    private errorMsg: string;

    constructor(private fb: FormBuilder, private userService: UserService,  private authService:AuthService, private router: Router) {
    }

    ngOnInit() {
        this.createForm();
    }

    private createForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            scope:['ms']
        });
    }

    login(formValues) {
        this.userService.login(formValues).subscribe(
            //Todo: ask sharon if this is good practice
            () => {
                if (this.authService.isLoggedIn()) {
                    this.router.navigate(['/content/dashboard']);
                }
            },
            error => this.errorMsg = error
        );

    }
}
