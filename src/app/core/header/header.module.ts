import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./container/header.component";
import {CalendarComponent} from "./ui/calendar/calendar.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {SearchComponent} from "../../features/search/search.component";

@NgModule({
    exports: [
        HeaderComponent,
    ],
    declarations: [
        HeaderComponent,
        SearchComponent,
        CalendarComponent,
    ],
    imports: [
        CommonModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: []
})
export class HeaderModule { }
