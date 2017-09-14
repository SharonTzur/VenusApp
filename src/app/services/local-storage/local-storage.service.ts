import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() {
    }

    set(name, object) {
        let stringObject: string = JSON.stringify(object);

        localStorage.setItem(name, stringObject);
    }

    get(name: string): any {
        let stringObject: string = localStorage[name];

        return stringObject ? JSON.parse(stringObject) : null;
    }
}
