import { Component, Input, OnInit } from '@angular/core';
import { User } from './user';

const USER_LISTS: User[] = [
  { name: 'user1', password: 'changeme' },
];

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['./app.component.css']
})
export class UserListComponent implements OnInit{
    userList = USER_LISTS;
    newUser: User;

    ngOnInit() {
        this.reset();
    }

    add() {
        if(this.newUser.name && this.newUser.password) {
            USER_LISTS.push({ name: this.newUser.name, password: this.newUser.password });
            this.reset();
        }
    }

    remove(index) {
        USER_LISTS.splice(index,1);
    }

    reset() {
        this.newUser = { name: '' , password: ''};
    }
}