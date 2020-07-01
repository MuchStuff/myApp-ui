import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public loggedIn: boolean = false;

    logStatus(mode) {
        this.loggedIn = mode;
    }
}
