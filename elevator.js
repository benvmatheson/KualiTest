export default class elevator {
    constructor(floor, id) {
        this.floor = floor;
        this.doorOpen = false;
        this.occupied = false;
        this.totalTrips = 0;
        this.totalFloorsPassed = 0;
        // Fix if there's time
        this.id = Math.floor((Math.random() * 100000) + 1);
        this.targetFloor = null;
    }

    reportMove() {
        // Finish function
    }

    reportDoorState() {
        // increment total floors
        // Finish function
    }

    moveElevator() {
        // increment totalTrips
        // Finish function
        // deactivate if over 100 trips
    }

    setOccupied(occupied) {
        this.occupied = occupied;
    }
}