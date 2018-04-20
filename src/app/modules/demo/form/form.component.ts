import {Component, OnInit, ViewChild} from '@angular/core';
import {Users} from '../../../../models/users';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ForbiddenNameDirective, forbiddenNameValidator} from './forbidden-name.directive';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    @ViewChild('f') form: any;
    user: Users;

    constructor() {
    }

    ngOnInit() {
        this.user = new Users();
        this.form = new FormGroup({
            'name': new FormControl(this.user.username, [
                Validators.required,
                Validators.minLength(4),
                forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
            ]),
        });
    }

    onSubmit() {

    }

}
