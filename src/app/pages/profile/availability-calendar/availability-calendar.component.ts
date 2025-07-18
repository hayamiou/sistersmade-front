import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarOptions } from '@fullcalendar/core';
import { FullCalendarModule, FullCalendarComponent } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';     // plugin for week view
import dayGridPlugin  from '@fullcalendar/daygrid';      // plugin for month view

@Component({
  selector: 'app-availability-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './availability-calendar.component.html',
  styleUrls: ['./availability-calendar.component.scss'],
})
export class AvailabilityCalendarComponent {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  private static readonly _ISO_DATE_PARTS = { DATE: 0, TIME: 1 } as const;
  // separate date / time for ISO strings ↑

  private get _todayDateOnly(): string {
    return new Date().toISOString()
      .split('T')[AvailabilityCalendarComponent._ISO_DATE_PARTS.DATE];
  }
  // returns 'YYYY-MM-DD'

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin, dayGridPlugin],        // ← indispensable
    editable: true,
    selectable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,dayGridMonth',
    },
    events: [
      {
        title: '🆘 Need help',
        start: `${this._todayDateOnly}T10:00:00`,
        end:   `${this._todayDateOnly}T11:00:00`,
        color: '#f87171',
      },
      {
        title: '✨ Available',
        start: `${this._todayDateOnly}T15:00:00`,
        end:   `${this._todayDateOnly}T16:30:00`,
        color: '#34d399',
      },
    ],
  };
}
