import {Injectable, NgZone} from '@angular/core';
import {Http, Headers, RequestOptions, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {LoaderService} from "../loader/loader.service";
import {environment} from "../../../environments/environment";
declare var EventSource: any;

@Injectable()
export class HttpService {

    constructor(private http: Http,
                private authService: AuthService,
                private router: Router,
                private loaderService: LoaderService) {
    }

    public get(paramsArray: Array<any>, routeUrl: string, withAccessToken: boolean, base_url = environment.apiUrl, dontHideLoader = false): Observable<any> {

        base_url = base_url || environment.apiUrl;

        this.loaderService.toggleLoader(true);

        let headers = this._createHeaders(withAccessToken, true, false);

        let params = this._createParamForGetMethod(paramsArray);

        return this.http.get(base_url + routeUrl, {search: params, headers: headers})
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this))
            .finally(this.hideLoader.bind(this, dontHideLoader));

    }

    public remove(paramsArray: Array<any>, routeUrl: string, withAccessToken: boolean, base_url = environment.apiUrl, dontHideLoader = false): Observable<any> {

        base_url = base_url || environment.apiUrl;

        this.loaderService.toggleLoader(true);

        let headers = this._createHeaders(withAccessToken, true, false);

        let params = this._createParamForGetMethod(paramsArray);

        return this.http.delete(base_url + routeUrl, {search: params, headers: headers})
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this))
            .finally(this.hideLoader.bind(this, dontHideLoader));

    }

    public post(object, routeUrl: string, withAccessToken: boolean, base_url = environment.apiUrl, dontHideLoader = false): Observable<any> {

        this.loaderService.toggleLoader(true);

        let body = object;
        let headers = this._createHeaders(withAccessToken, false, false);
        let options = new RequestOptions({headers});

        return this.http.post(base_url + routeUrl, body, options)
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this))
            .finally(this.hideLoader.bind(this, dontHideLoader));
    }

    public put(object, routeUrl: string, withAccessToken: boolean, base_url = environment.apiUrl, dontHideLoader = false, withoutLoader = false): Observable<any> {

        let baseUrl = base_url || environment.apiUrl;
        if (!withoutLoader) {
            this.loaderService.toggleLoader(true);
        }
        let body = object;
        let headers = this._createHeaders(withAccessToken, false, false);
        let options = new RequestOptions({headers});

        return this.http.put(baseUrl + routeUrl, body, options)
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this))
            .finally(this.hideLoader.bind(this, dontHideLoader));
    }


    public putWithFile(object, routeUrl: string, withAccessToken: boolean, base_url = environment.apiUrl, dontHideLoader = false, withoutLoader = false): Observable<any> {

        this.loaderService.toggleLoader(true);
        let data = new FormData();
        Object.keys(object).forEach((key)=> {
            if (object[key] != null) {
                data.append(key, object[key]);
            }
        });
        data.append('_method', 'put');
        return new Observable((observer)=> {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.getResponseHeader('Authorization')) {
                        this.authService.setToken(xhr.getResponseHeader('Authorization').replace('Bearer ', ''));
                    }
                    else if (  xhr.getResponseHeader('authorization')){
                        this.authService.setToken(xhr.getResponseHeader('authorization').replace('Bearer ', ''));
                    }
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        this.loaderService.toggleLoader(false);
                    }
                    else if(xhr.status == 401){
                        this.router.navigate(['account/login']);
                        this.loaderService.toggleLoader(false);
                    }else {
                        observer.error(JSON.parse(xhr.response).errors[0].message);
                        this.loaderService.toggleLoader(false);
                    }
                }
            }
            xhr.open("POST", (base_url + routeUrl), true);
            // xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', 'Bearer ' + this.authService.getToken());
            xhr.setRequestHeader('enctype', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('processData', 'false');
            xhr.send(data);
            return () => {
                xhr.abort();
            };
        });
    }


    public postWithFile(object, routeUrl: string, withAccessToken: boolean, base_url = environment.apiUrl, dontHideLoader = false): Observable<any> {
        this.loaderService.toggleLoader(true);
        let data = new FormData();
        Object.keys(object).forEach((key)=> {
            if (object[key] != null) {
                data.append(key, object[key]);
            }
        });
        return new Observable((observer)=> {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.getResponseHeader('Authorization')) {
                        this.authService.setToken(xhr.getResponseHeader('Authorization').replace('Bearer ', ''));
                    }
                    else if (  xhr.getResponseHeader('authorization')){
                        this.authService.setToken(xhr.getResponseHeader('authorization').replace('Bearer ', ''));
                    }
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        this.loaderService.toggleLoader(false);
                    }
                    else if(xhr.status == 401){
                        this.router.navigate(['account/login']);
                        this.loaderService.toggleLoader(false);
                    }else {
                        observer.error(JSON.parse(xhr.response).errors[0].message);
                        this.loaderService.toggleLoader(false);
                    }
                }
            }
            xhr.open("POST", (base_url + routeUrl), true);
            // xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', 'Bearer ' + this.authService.getToken());
            xhr.setRequestHeader('enctype', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('processData', 'false');
            xhr.send(data);
            return () => {
                xhr.abort();
            };
        })
        /*  let body = object;
         let headers = this._createHeaders(withAccessToken, false, true);
         let options = new RequestOptions({headers});

         return this.http.post(base_url + routeUrl, body, options)
         .map(this.extractData.bind(this))
         .catch(this.handleError.bind(this))
         .finally(this.hideLoader.bind(this, dontHideLoader));*/
    }


    private extractData(res: Response) {
        if (res.headers.has('authorization')) {
            this.authService.setToken(res.headers.get('authorization').replace('Bearer ', ''));
        }
        else if(res.headers.has('Authorization')){
            this.authService.setToken(res.headers.get('Authorization').replace('Bearer ', ''));
        }
        let body = res.json().data;

        return body || {};
    }

    private handleError(error: any) {
        if (error.status === 401) {
            this.router.navigate(['account/login']);
            return;
        }
        let parsedError = error.json();
        let errMsg = error ? parsedError.errors[0] : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg.message);
    }

    // PRIVATE FUNCTIONS

    // Create request headers
    private _createHeaders(withAccessToken, isGetMethod, isFormData) {
        let headers = new Headers();
        if (!isGetMethod) {
            headers.append('Content-Type', 'application/json');
        }
        if (withAccessToken) {
            headers.append('Authorization', 'Bearer ' + this.authService.getToken());
        }
        if (isFormData) {
            headers.append('enctype', 'multipart/form-data');
        }
        return headers;
    }

    //prepare params for get
    private _createParamForGetMethod(paramsArray): any {

        if (!paramsArray) {
            return null;
        }

        let urlParams: URLSearchParams = new URLSearchParams();
        for (let param of paramsArray) {
            urlParams.set(param['key'], param['val']);
        }

        return urlParams;
    }

    private hideLoader(dontHideLoader) {
        if (!dontHideLoader) {
            this.loaderService.toggleLoader(false);
        }
    }


}

