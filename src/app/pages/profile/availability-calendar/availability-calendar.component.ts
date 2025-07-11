import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarOptions } from '@fullcalendar/core';
import { FullCalendarModule, FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-availability-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './availability-calendar.component.html',
  styleUrls: ['./availability-calendar.component.scss']
})
export class AvailabilityCalendarComponent {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    editable: true,
    selectable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,dayGridMonth'
    },
    events: [
      {
        title: '🆘 Need help',
        start: new Date().toISOString().split('T')[0] + 'T10:00:00',
        end: new Date().toISOString().split('T')[0] + 'T11:00:00',
        color: '#f87171'
      },
      {
        title: '💪 Available',
        start: new Date().toISOString().split('T')[0] + 'T15:00:00',
        end: new Date().toISOString().split('T')[0] + 'T16:30:00',
        color: '#34d399'
      }
    ],
    select: this.handleSelect.bind(this)
  };

  handleSelect(selectInfo: any) {
    const type = prompt('💬 Dispo 💪 ou besoin d’aide 🆘 ? (Tape "help" ou "available")');
    if (type === 'help' || type === 'available') {
      const calendarApi = selectInfo.view.calendar;
      calendarApi.unselect();

      calendarApi.addEvent({
        title: type === 'help' ? '🆘 Need help' : '💪 Available',
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        color: type === 'help' ? '#f87171' : '#34d399'
      });
    }
  }
}
