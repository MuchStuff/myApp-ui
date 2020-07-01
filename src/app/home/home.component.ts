import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../_services/crud.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    @Input() loggedIn: boolean;
    
    public weatherForecast: any = [];

    constructor(private crudService: CrudService) { }

    ngOnInit() {
    }

    getForecast() {
        this.crudService.sendRequest("weatherforecast")
            .subscribe((data: any) => {
                this.weatherForecast = data;
            });
    }
}
