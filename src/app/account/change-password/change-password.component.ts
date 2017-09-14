import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-change-password',
  templateUrl: 'change-password.component.html',
  styleUrls: ['change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {

  private errorMessage:string;
  private text;

  public myForm:FormGroup; // our model driven form
  public submitted:boolean; // keep track on whether form is submitted
  public events:any[] = []; // use later to display form changes

  constructor(private userService: UserService,
              private _fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
    this.initText();
  }

  save(model, isValid:boolean) {
    this.submitted = true; // set form submit to true
    this.errorMessage = '';
    if (isValid) {
      this.changePassword(model);
    }
  }

  private changePassword(model) {
    this.userService.changePassword(model).subscribe(
        response => {
          this.router.navigate(['content/dashboard'])
        },
        error => {
          this.errorMessage = error;
        });
  }

  private initText() {
    this.text = {};
    this.text.title = 'שינוי סיסמא';
    this.text.insertPassword = 'הזן סיסמא';
    this.text.button = 'אישור'
  }

  private initForm() {
    this.myForm = this._fb.group({
      password: ['', [<any>Validators.required]],
    });
  }

}
