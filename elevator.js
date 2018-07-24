export default class elevator {
    constructor(floor) {
        this.floor = floor;
        this.doorOpen = false;
        this.occupied = false;
        this.totalTrips = 0;
        this.totalFloorsPassed;
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