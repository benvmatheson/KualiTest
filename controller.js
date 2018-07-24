import elevator from './elevator';

class ElevatorController {
    constructor(floors, elevators) {
        this.activeElevators = new Array(elevators).fill(new Elevator(1));
        this.inactiveElevators = [];
        this.numFloors = floors;
        this.bottomFloor = 1;
    }

    activateElevator(elevator) {
        activeElevators.push(activeElevators);
    } 

    deactivateElevator() {
        // Finish function
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