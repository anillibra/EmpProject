
interface Iemp {
    _id: number;
    name: string;
}
// This is Employee class
// Another class comments
export class Employee {
    employees: Iemp[];

    add(): void {
        this.employees.push({ _id: 1, name: "Parik" });
    }
}