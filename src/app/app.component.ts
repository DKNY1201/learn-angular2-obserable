import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated: boolean = false;
  user2Activated: boolean = false;


  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.activatedUser.subscribe(
      (id: number) => {
        this.user1Activated = id === 1 ? true : false;
        this.user2Activated = id === 2 ? true : false;
        // setInterval(
        //   () => { console.log(id); }, 1000);
      }
    );
  }
}
