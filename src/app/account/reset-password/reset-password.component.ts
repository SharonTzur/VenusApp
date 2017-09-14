import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router, Route, Params, ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user/user.service";

@Component({
    selector: 'app-reset-password',
    templateUrl: 'reset-password.component.html',
    styleUrls: ['../shared/styles/account-form.scss']
})

export class ResetPasswordComponent implements OnInit {

    private errorMessage: string;
    private text;

    public myForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes

    constructor(private userService: UserService,
                private _fb: FormBuilder,
                private router: Router,
                private route: ActivatedRoute ) {
    }

    ngOnInit() {
        this.initForm();
        this.initText();
    }

    save(model, isValid: boolean) {
        this.submitted = true; // set form submit to true
        this.errorMessage = '';
        if (isValid) {
            if (model.password === model.password2) {
                this.resetPassword(model);
            }
            else {
                this.errorMessage = 'סיסמאות לא תואמות';
            }
        }
    }

    private resetPassword(model) {
        model.token = this.getTempPassword();
        this.userService.resetPassword(model).subscribe(
            response => {
            },
            error => {
                this.errorMessage = error;
            });
    }

    private initText() {
        this.text = {};
        this.text.title = 'איפוס סיסמא';
        this.text.insertEmail = 'הזן מייל';
        this.text.insertPassword = 'הזן סיסמא';
        this.text.insertPassword2 = 'הזן סיסמא שנית';
        this.text.button = 'אישור'
    }

    private initForm() {
        this.myForm = this._fb.group({
            email: ['', [<any>Validators.required]],
            password: ['', [<any>Validators.required]],
            password2: ['', [<any>Validators.required]]
        });
    }

    private getTempPassword() {
        let token = this.route.snapshot.params['token'];
        return token;
    }
}
