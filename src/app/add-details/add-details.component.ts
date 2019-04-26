import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CreateAccount } from '../account.actions';

@Component({
    selector: 'account-creation-form',
    templateUrl: './add-details.component.html',
    styleUrls: ['./add-details.component.scss']
})

export class accountCreation {
    addAccountForm: FormGroup;

    constructor(private fb: FormBuilder, private store: Store) {
        this.addAccountForm = fb.group({
            // 'accountDescriptionCtrl': ''
            'accountDescriptionCtrl': ['', Validators.required]
        });
    }

    submitAccount() {
        const { accountDescriptionCtrl } = this.addAccountForm.value;
        alert(this.addAccountForm.value);
        this.store.dispatch(new CreateAccount(accountDescriptionCtrl));
        this.addAccountForm.reset();

    }
}