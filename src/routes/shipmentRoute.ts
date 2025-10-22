import express, { Request, Response } from "express"; 
import { createShipment, getShipmentById, updateShipmentStatus } from "../services/shipmentService";
import { ShipmentStatus } from "../types/shipment";

const router = express.Router();

// create a new shipment
router.post("/", (req: Request, res: Response) => {
    const { originCity, destinationCity, weight } = req.body;

    // validate the request body
    if (!originCity || !destinationCity || typeof weight !== "number") {
        return res.status(400).json({ error: "Invalid request body" });
    }

    const shipment = createShipment(originCity, destinationCity, weight);
    console.log("Created shipment:", shipment);
    res.status(201).json(shipment);
});

// get shipment by id
router.get("/:id", (req: Request, res: Response) => {
    const shipment = getShipmentById(req.params.id);
    
    // validate if shipment exists
    if (!shipment) return res.status(404).json({ error: "Shipment not found" });

    console.log("Retrieved shipment:", shipment);
    res.json(shipment);
});

// update shipment status
router.patch("/:id/status", (req: Request, res: Response) => {
    const { status } = req.body;

    // validate if status is valid
    if (!status || !["pending", "in_transit", "delivered"].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }

    const updated = updateShipmentStatus(req.params.id, status as ShipmentStatus);
    if (!updated) return res.status(404).json({ error: "Shipment not found" }); // if not updated, by logic the shipment was not found
    
    console.log("Updated shipment status:", updated);
    res.json(updated);
});

export default router;