import { createShipment, updateShipmentStatus } from "../services/shipmentService";
import shipments from "../data/shipments";

describe("Shipment Service", () => {
    beforeEach(() => {
        shipments.length = 0;
    });

    it("should update the shipment status", () => {
        const shipment = createShipment("Norfolk", "Richmond", 25);
        const updated = updateShipmentStatus(shipment.id, "in_transit");
        expect(updated?.status).toBe("in_transit");
    });
});
