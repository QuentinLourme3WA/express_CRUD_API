import express from "express";
const router = express.Router();

let motorcycles = [
  { id: 1, brand: "Yamaha", model: "Tracer 700", year: 2020 },
  { id: 2, brand: "Honda", model: "CBR660R", year: 2019 },
  { id: 3, brand: "Kawasaki", model: "Ninja ZX-6R", year: 2021 },
];

router.get("/motorcycles", (req, res) => {
  res.json(motorcycles);
});

router.get("/motorcycles/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const motorcycle = motorcycles.find((motorcycle) => motorcycle.id === id);
  if (!motorcycle) {
    return res.status(404).send("Motorcycle not found");
  }
  res.json(motorcycle);
});

router.post("/motorcycles", (req, res) => {
  const { brand, model, year } = req.body;
  const id = motorcycles.length + 1;
  const newMotorcycle = { id, brand, model, year };
  motorcycles.push(newMotorcycle);
  res.status(201).json(newMotorcycle);
});

router.put("/motorcycles/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { brand, model, year } = req.body;
  const motorcycleIndex = motorcycles.findIndex(
    (motorcycle) => motorcycle.id === id
  );
  if (motorcycleIndex === -1) {
    return res.status(404).send("Motorcycle not found");
  }
  motorcycles[motorcycleIndex] = { id, brand, model, year };
  res.json(motorcycles[motorcycleIndex]);
});

router.delete("/motorcycles/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const motorcycleIndex = motorcycles.findIndex(
    (motorcycle) => motorcycle.id === id
  );
  if (motorcycleIndex === -1) {
    return res.status(404).send("Motorcycle not found");
  }
  motorcycles.splice(motorcycleIndex, 1);
  res.sendStatus(204);
});

export default router;
