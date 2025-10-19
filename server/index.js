import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

await pool.query(`
CREATE TABLE IF NOT EXISTS public.workout_logs (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  exercise TEXT NOT NULL,
  weight_kg NUMERIC(5,2),
  reps INT,
  note TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`);

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/api/workouts", async (req, res) => {
  const { date, exercise, weight_kg, reps, note } = req.body || {};
  if (!date || !exercise) return res.status(400).json({ error: "date & exercise are required" });
  try {
    const { rows } = await pool.query(
      `INSERT INTO public.workout_logs (date, exercise, weight_kg, reps, note)
       VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [date, exercise, weight_kg ?? null, reps ?? null, note ?? null]
    );
    res.status(201).json(rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

app.get("/api/workouts", async (_req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM public.workout_logs ORDER BY date DESC, id DESC`
    );
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

app.delete("/api/workouts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await pool.query(`DELETE FROM public.workout_logs WHERE id=$1`, [id]);
    if (!rowCount) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on :${port}`));