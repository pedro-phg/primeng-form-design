import { Component } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-step-bar',
  standalone: true,
  imports: [StepsModule],
  templateUrl: './step-bar.component.html',
  styleUrl: './step-bar.component.scss',
})
export class StepBarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Dados',
        routerLink: 'step-1',
      },
      {
        label: 'Resumo',
        routerLink: 'step-2',
      },
      {
        label: 'Confirmação',
        routerLink: 'step-3',
      },
    ]
  }
}
