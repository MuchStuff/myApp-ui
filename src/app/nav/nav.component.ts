import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from "../_services/auth.service";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    @Input() loggedIn: boolean;
    @Output() logStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    login() {
        this.authService.login({Username: "user"}).subscribe(() => {
            this.loggedIn = true;
            this.logStatus.emit(this.loggedIn);
        }, error => {
            console.log(error);
        });
    }

    logout() {
        localStorage.removeItem("token");
        this.loggedIn = false;
    }
}
