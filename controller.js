import elevator from './elevator';

class ElevatorController {
    constructor(floors, elevators) {
        this.activeElevators = new Array(elevators).fill(new Elevator(1));
        this.allElevators = activeElevators.slice();
        this.inactiveElevators = [];
        this.numFloors = floors;
        this.bottomFloor = 1;
        this.currentId = elevators;
    }

    activateElevator(elevator) {
        activeElevators.push(activeElevators);
    } 

    deactivateElevator(elevator) {
        this.inactiveElevators.push(elevator);
        this.activeElevators = activeElevators.filter(e => {
            return (elevator.id !== e.id);
        });
    }
    
    initiateMoveElevator(floor) {
        if (floor > this.numFloors) {
            throw 'That floor is higher than the highest floor';
        } else if (floor < this.bottomFloor) {
            throw 'That floor is lower than the lowest floor';
        } else {
            this.findClosestElevator(floor).moveElevator(floor);
        }
    }

    findClosestElevator(floor) {
        this.activeElevators.forEach(elevator => {
            if (elevator.floor === floor) {
                return elevator;
            }
        });
        this.activeElevators.forEach(elevator => {
            if (elevator.targetFloor < floor < elevator.floor
                || elevator.targetFloor > floor > elevator.floor) {
                    return elevator;
                }
        });
        this.activeElevators.reduce((closest, elevator) => {
            if (Math.abs(elevator.floor - floor) < closest) {
                return elevator;
            }
            return closest;
        });
    }
}