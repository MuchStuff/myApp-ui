import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CrudService {
    public baseUrl = "http://localhost:8000/api/";
    constructor(
        private http: HttpClient
    ) { }

    sendRequest(path: string, method: string = "GET", data: any = {}): any {
        try {
            const token = localStorage.getItem('token');  
            let httpParams = new HttpParams({ fromObject: data });
            let headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + token
            });
            let httpOptions = { withCredentials: false, body: httpParams, headers: headers };
            let result: any;
            switch (method) {
                case "GET":
                    result = this.http.get(this.baseUrl + path, httpOptions);
                    break;
                case "PUT":
                    result = this.http.put(this.baseUrl + path, data.values, httpOptions);
                    break;
                case "POST":
                    result = this.http.post(this.baseUrl + path, data.values, httpOptions);
                    break;
                case "DELETE":
                    result = this.http.delete(this.baseUrl + path + data.key, httpOptions);
                    break;
            }
            
            return result;
        } catch (e) {
            console.log(e);
        }
    }
}
