import {Component, Input} from "@angular/core";
import "rxjs/add/operator/startWith";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';
import {User} from "../../../models/user";
import {Role} from "../../../models/role";
import {MatChipInputEvent} from "@angular/material";
import {ENTER} from '@angular/cdk/keycodes';

const COMMA = 188;


@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent {

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  @Input()
  public user: User;
  @Input()
  public roles: Role[];

  separatorKeysCodes = [ENTER, COMMA];

  add(event: MatChipInputEvent) {
    let input = event.input;
    let value = event.value;

    if ((value || '').trim()) {
      let role = this.roles.find(role => role.title.toLowerCase() === value.toLowerCase());
      role ? this.user.roles.push(role) : console.log("Role not found");
    }

    if (input) {
      input.value = ''
    }
  }

  remove(role: Role) {
    const index = this.user.roles.indexOf(role);
    this.user.roles.splice(index, 1)
  }

}

