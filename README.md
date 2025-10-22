# Shipment REST API Demostration

Simple REST API built with **TypeScript**, **Node**, and **Express** using in-memory storage.

---

## Features
- Create a shipmenmt (`POST /shipments`)
- Get shipment by ID (`GET /shipments/:id`)
- Update shipment status (`PATCH /shipments/:id/status`)
- Delivery time estimation between cities

---

## Storage
- In-memory storage

---

## Testing
- Unit test for status update logic (Jest)
- Run 
    ```bash
    npm test
    ```
---

## Setup

- Install Dependencies
```bash 
npm install
```

- Run Server 
```bash
npm run dev
```

