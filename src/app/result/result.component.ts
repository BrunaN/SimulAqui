import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../service/data.service';
import { Simulation } from '../model/simulation.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  data: Simulation;
  timeReal: string;
  resultReal: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.data;
    if (this.data.time > 11) {
      const aux = this.data.time / 12;
      if (aux % 1 === 0) {
        this.timeReal = aux + (aux > 1 ? ' anos' : ' ano');
      } else {
        const years = this.data.time / 12 | 0;
        const months = this.data.time % 12;
        this.timeReal = years + (years > 1 ? ' anos e ' : ' ano e ') + months + (months > 1 ? ' meses' : ' mês');
      }
    } else {
      this.timeReal = this.data.time + (this.data.time > 1 ? ' meses' : ' mês');
    }
    this.resultReal = this.data.result.toFixed(2);
  }

  ngOnInit() {
  }

}
