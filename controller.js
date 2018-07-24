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
    
    initiateMoveElevator() {
        // cannot be above max floor
        // cannot be below min floor
        // find closest elevator
    }

    findClosestElevator() {
        // Is an occupied elevator going to pass this floor
        // Is there an unoccupied elevator on this floor
        // Closest unoccupied
    }
}