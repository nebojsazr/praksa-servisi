import { Injectable } from '@angular/core';

export interface IUser {
    firstName: string;
    lastName: string;
    isMember: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = false;

    // tslint:disable-next-line:variable-name
    private _user: IUser = {
        firstName: '',
        lastName: '',
        isMember: false
    };

    public get user(): IUser {
        return this._user;
    }
    public set user(value: IUser) {
        this._user = value;
    }
}