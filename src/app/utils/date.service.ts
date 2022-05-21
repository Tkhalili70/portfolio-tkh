import {Injectable} from "@angular/core";

@Injectable({providedIn:'root'})
export class DateService{
  private _currentDate = new Date();
  get  currentDate():Date {
    return this._currentDate;
  }
}
