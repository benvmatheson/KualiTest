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

    moveElevator(floor, deactivate) {
        this.totalTrips++;
        this.targetFloor = floor;
        while (this.floor !== this.targetFloor) {
            if (this.floor < this.targetFloor) {
                this.targetFloor--;
            } else if (this.floor > this.targetFloor) {
                this.targetFloor++;
            }
            this.reportMove();
        }
        if (this.totalTrips > 100) {
            deactivate(this);
        }
    }

    setOccupied(occupied) {
        this.occupied = occupied;
    }
}