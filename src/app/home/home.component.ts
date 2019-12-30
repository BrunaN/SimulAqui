import { Component, OnInit } from '@angular/core';
import { Simulation } from '../model/simulation.model';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = '';
  monthly: number;
  time: number;
  timeOption: number = 1;
  loading = false;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  post(event) {
    event.preventDefault();
    if (this.timeOption == 2) {
      this.time = this.time * 12;
    }

    if (this.name != '' && this.monthly != undefined && this.time != undefined) {
      this.loading = true;
      this.dataService.doSimulation(this.monthly, this.time).subscribe((response: any) => {
        const result = response.result;
        const simulation = new Simulation(this.name, this.monthly, this.time, parseFloat(result));
        this.dataService.addData(simulation);
        this.router.navigate(['/result']);
      }, (error) => {
        this.loading = false;
        alert(`Ocorreu um erro! \nPor favor, informe os dados novamente.`);
      });
    } else {
      alert('Por favor, informe os dados corretamente.');
    }
  }

}
