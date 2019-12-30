import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Simulation } from '../model/simulation.model';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    data: Simulation;
    url = 'http://api.mathjs.org/v4/';

    doSimulation(monthy: number, time: number) {
        return this.http.post(this.url,
            {
                "expr": `${monthy} * (((1 + 0.00517) ^ ${time} - 1) / 0.00517)`
            });
    }

    addData(simulation: Simulation) {
        this.data = simulation;
    }
}
