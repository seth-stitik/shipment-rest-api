import express from "express";
import shipmentRoute from "./routes/shipmentRoute";

const app = express();
app.use(express.json());

app.use("/shipments", shipmentRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


