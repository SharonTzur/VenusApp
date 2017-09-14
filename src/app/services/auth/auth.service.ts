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
        this.authObject = authObject.data;
        this.token = authObject.data.token;
        this.localStorageService.set('authObject', authObject.data);
        this.localStorageService.set('token', authObject.data.token);
    }

    deleteAuthObject() {
        this.authObject = null;
        this.localStorageService.set('authObject', null);
        this.localStorageService.set('token', null);
    }
}
