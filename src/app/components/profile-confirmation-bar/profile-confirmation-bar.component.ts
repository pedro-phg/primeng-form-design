import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-confirmation-bar',
  standalone: true,
  imports: [],
  templateUrl: './profile-confirmation-bar.component.html',
  styleUrl: './profile-confirmation-bar.component.scss'
})
export class ProfileConfirmationBarComponent {
    @Input() pictureUrl: string = '';
    @Input() profileName: string = '';
    @Input() profileMail: string = '';
}
