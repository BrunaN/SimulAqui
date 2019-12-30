export class Simulation {
    name: string;
    monthly: number;
    time: number;
    result: number;
    constructor(name, monthly, time, result) {
        this.name = name;
        this.monthly = monthly;
        this.time = time;
        this.result = result;
    }
}
