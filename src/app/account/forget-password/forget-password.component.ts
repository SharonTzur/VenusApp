import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";

@Component({
    selector: 'app-forget-password',
    templateUrl: 'forget-password.component.html',
    styleUrls: ['forget-password.component.scss']
})

export class ForgetPasswordComponent implements OnInit {

    private errorMessage: string;
    private text;

    public myForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes

    constructor(private userService: UserService,
                private _fb: FormBuilder,
                private router: Router) {}

    ngOnInit() {
        this.initForm();
        this.initText();
    }

    save(model, isValid: boolean) {
        this.submitted = true; // set form submit to true
        this.errorMessage = '';
        if (isValid) {
                this.forgetPassword(model);
        }
    }

    private forgetPassword(model) {
        this.userService.forgetPassword(model).subscribe(
            response => {
                this.errorMessage = 'הודעת אימות תשלח לכתובת המייל שציינת';

            },
            error => {
                this.errorMessage = error;
            });
    }

    private initText() {
        this.text = {};
        this.text.title = 'שכחתי סיסמא';
        this.text.insertEmail = 'הזן מייל';
        this.text.button = 'אישור'
    }

    private initForm() {
        this.myForm = this._fb.group({
            email: ['', [<any>Validators.required]]
        });
    }
}
