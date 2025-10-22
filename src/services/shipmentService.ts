import shipments from "../data/shipments";
import { Shipment, ShipmentStatus } from "../types/shipment";
import { estimateDeliveryHours } from "../utils/deliveryEstimator";

// basic function for id generation
let counter = 0;
function generateId(): string {
    return `${++counter}`;
}

// function to create a shipment 
export function createShipment(originCity: string, destinationCity: string, weight: number): Shipment {
    const shipment: Shipment = {
        id: generateId(),
        origin: originCity,
        destination: destinationCity,
        weight,
        status: "pending",
        estimatedDeliveryHours: estimateDeliveryHours(originCity, destinationCity)
    };

    shipments.push(shipment);
    return shipment;
}

// function to get a shipment by id
export function getShipmentById(id: string): Shipment | undefined {
    return shipments.find(s => s.id === id);
}

// fnction to update shipment status
export function updateShipmentStatus(id: string, newStatus: ShipmentStatus): Shipment | undefined {
    const shipment = shipments.find(s => s.id === id);
    if (!shipment) return undefined;
    shipment.status = newStatus;
    return shipment;
}

