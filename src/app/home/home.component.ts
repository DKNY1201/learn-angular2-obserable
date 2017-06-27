import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Observer} from "rxjs/Observer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    //
    // myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next("first data package");
        }, 2000);
        setTimeout(() => {
          observer.next("second data package");
        }, 4000);
        setTimeout(() => {
          // observer.error("this does not work!")
          observer.complete();
        }, 5000);
        setTimeout(() => {
          observer.next("first data package again");
        }, 2000);
        setTimeout(() => {
          observer.next("third data package");
        }, 6000);
      });

    myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log("completed");
      }
    );
  }

}
