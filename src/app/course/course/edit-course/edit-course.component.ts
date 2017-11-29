import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/startWith';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../models/user';
import '../../../operators/behaviorSubject';
import {UserService} from '../../../services/user.service';
import {CourseService} from '../../course.service';
import {Course} from '../../models/course';
import {Participant} from '../../models/participant';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
  public course: BehaviorSubject<Course>;
  public participants: BehaviorSubject<Participant[]>;
  public courseTitleInput = new FormControl('');
  public courseDescriptionInput = new FormControl('');
  public courseStartDate = new FormControl(new Date());
  public courseEndDate = new FormControl(new Date());
  public filteredUsers: Observable<User[]>;
  private users: Observable<User[]>;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private userService: UserService,
              private snackBar: MatSnackBar) {
  }


  ngOnInit() {
    this.course = this.route.params
      .map(params => Number(params.id))
      .switchMap(id => this.courseService.getCourse(id))
      .behaviorSubject(new Course());

    this.course.subscribe(course => {
      this.courseTitleInput.setValue(course.title);
      this.courseDescriptionInput.setValue(course.description);
      this.courseStartDate.setValue(course.startDate);
      this.courseEndDate.setValue(course.endDate);
    });

    this.users = this.userService.getUsers();


    this.participants = this.course
      .map(course => course.participants)
      .combineLatest(this.users)
      .map(([participants, users]) =>
        participants.map(participant =>
          ({
            ...participant,
            name: (users.find(user => user.id === participant.userId) || {name: 'Unknown'}).name,
          })))
      .behaviorSubject([]);

    this.filteredUsers = this.users
      .combineLatest(this.participants)
      .map(([users, participants]) => users.filter(user => !participants.some(participant => participant.userId === user.id)));
  }

  public updateCourse(): void {
    let course = this.course.value;
    course = {
      ...course,
      startDate: this.courseStartDate.value,
      endDate: this.courseEndDate.value,
      title: this.courseTitleInput.value,
      description: this.courseDescriptionInput.value,
      participants: this.participants.value,
    };

    this.courseService.updateCourse(course)
      .subscribe(() => this.snackBar.open('Successfully updated course', '', {duration: 2000}),
        (err) => {
          if (err.error && err.error.message) {
            this.snackBar.open('Failed to update course: ' + err.error.message);
          } else {
            this.snackBar.open('Failed to update course', '', {duration: 2000});
          }
          console.error('Could not update course', err);
        });
  }

  public formatName(user: any) {
    return user ? `${user.name} (${user.userId || user.id})` : '';
  }

  public addParticipant(user: User) {
    let participants = this.participants.value;
    participants = [...participants, this.newParticipant(user)];
    this.participants.next(participants);
  }

  public removeParticipant(participant: Participant) {
    let participants = this.participants.value;
    participants = participants.filter(p => p.userId !== participant.userId);
    this.participants.next(participants);
  }

  private newParticipant(user: User): Participant {
    return {
      name: user.name,
      userId: user.id,
      id: 0,
    };
  }
}

