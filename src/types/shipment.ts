export type ShipmentStatus = "pending" | "in_transit" | "delivered";

export interface Shipment {
    id: string;
    origin: string;
    destination: string;
    status: ShipmentStatus;
    estimatedDeliveryDate: Date;
}