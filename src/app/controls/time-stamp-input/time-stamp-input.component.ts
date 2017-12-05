import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-time-stamp-input',
  templateUrl: './time-stamp-input.component.html',
  styleUrls: ['./time-stamp-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeStampInputComponent {

  @Input()
  public inputControl: FormControl;

  @Input()
  public placeholder: string;

  public value: any;
}
