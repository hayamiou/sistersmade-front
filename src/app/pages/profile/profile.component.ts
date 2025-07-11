import { Component } from '@angular/core';
import { AvailabilityCalendarComponent } from './availability-calendar/availability-calendar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    AvailabilityCalendarComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
