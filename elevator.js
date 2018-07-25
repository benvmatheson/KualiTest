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
        // Combine with target floor if there's time
        this.additionalStops = [];
    }

    reportMove() {
        console.log(`Elevator ${this.id} moved to ${this.floor}`)
    }

    reportDoorState() {
        console.log(`Elevator ${this.id} opened doors on floor ${this.floor}`)
    }

    openDoors(floor) {
        if (targetFloor = floor) {
            this.occupied = false;
        }
        this.reportDoorState();
    }

    moveElevator = (floor, deactivate) => {
        this.occupied = true;
        this.totalTrips++;
        this.targetFloor = floor;
        while (this.floor !== this.targetFloor) {
            if (this.additionalStops.includes(floor)) {
                this.openDoors(floor);
            }
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