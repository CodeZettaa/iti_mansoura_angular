import { Component, OnDestroy } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";



@Component({
    selector: 'btee5',
    templateUrl: "./setting.component.html",
    styleUrl: "./setting.component.scss",
    imports: [RouterOutlet, RouterLink]
})

export default class SettingComponent implements OnDestroy {


    ngOnDestroy(): void {
        console.log("ngOnDestroy");

    }
}