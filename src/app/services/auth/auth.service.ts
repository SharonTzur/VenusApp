import {Injectable} from '@angular/core';
import {LocalStorageService} from "../local-storage/local-storage.service";

@Injectable()
export class AuthService {

    private authObject = null;
    private token = null;

    constructor(private localStorageService: LocalStorageService) {
        this.authObject = this.localStorageService.get('authObject');
        this.token = this.localStorageService.get('token');
    }

    isLoggedIn() {
        return (this.authObject !== null);
    }

    // Get user
    getUser() {
        return this.authObject ? this.authObject.user : null;
    }

    setToken(token) {
        this.localStorageService.set('token', token);
        return this.token = token;
    }

    // Get user token
    getToken() {
        return this.token ? this.token : null;
    }

    setAuthObject(authObject) {
        this.authObject = authObject;
        this.token = authObject.token;
        this.localStorageService.set('authObject', authObject);
        this.localStorageService.set('token', authObject.token);
    }

    deleteAuthObject() {
        this.authObject = null;
        this.localStorageService.set('authObject', null);
        this.localStorageService.set('token', null);
    }
}
