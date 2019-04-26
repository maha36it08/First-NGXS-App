import { Account } from './account';

export class CreateAccount {
    static readonly type = "[Account] Create Account";

    constructor(public payload: string) { }
}

export class DeleteAccount {
    static readonly type = "[Account] Delete Account";

    constructor(public payload: Account) {}
}

export class ToggleAccount {
    static readonly type = '[TODO] Toggle Account';
  
    constructor(public payload: Account) {}
  }