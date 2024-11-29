import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import type { InvestmentOutput } from '../investment-output.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input<InvestmentOutput>();
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
