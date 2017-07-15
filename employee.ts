
interface Iemp {
    _id: number;
    name: string;
}

export class Employee {
    employees: Iemp[];
    ////sssssssss
    add(): void {
        this.employees.push({ _id: 1, name: "Parik" });
    }
    // 1
    // 2
    // 3
    // 4
}