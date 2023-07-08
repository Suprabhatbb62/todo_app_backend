const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes

// Create a todo
app.post("/todos/:behavior", async (req, res) => {
  try {
    const { behavior } = req.params;
    const { description } = req.body;

    let tableName;
    if (behavior === 'health') {
      tableName = 'health_todo';
    } else if (behavior === 'technical') {
      tableName = 'technical_todo';
    } else if (behavior === 'communication') {
      tableName = 'communication_todo';
    } else if (behavior === 'presentation') {
      tableName = 'presentation_todo';
    } else if (behavior === 'physical') {
      tableName = 'physical_todo';
    } else {
      return res.status(400).json({ message: 'Invalid behavior' });
    }

    const newTodo = await pool.query(
      `INSERT INTO ${tableName} (description) VALUES ($1) RETURNING *`,
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get all todos
app.get("/todos/:behavior", async (req, res) => {
  try {
    const { behavior } = req.params;

    let tableName;
    if (behavior === 'health') {
      tableName = 'health_todo';
    } else if (behavior === 'technical') {
      tableName = 'technical_todo';
    } else if (behavior === 'communication') {
      tableName = 'communication_todo';
    } else if (behavior === 'presentation') {
      tableName = 'presentation_todo';
    } else if (behavior === 'physical') {
      tableName = 'physical_todo';
    } else {
      return res.status(400).json({ message: 'Invalid behavior' });
    }

    const allTodos = await pool.query(`SELECT * FROM ${tableName}`);
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get a specific todo
app.get("/todos/:behavior/:id", async (req, res) => {
  try {
    const { behavior, id } = req.params;

    let tableName;
    if (behavior === 'health') {
      tableName = 'health_todo';
    } else if (behavior === 'technical') {
      tableName = 'technical_todo';
    } else if (behavior === 'communication') {
      tableName = 'communication_todo';
    } else if (behavior === 'presentation') {
      tableName = 'presentation_todo';
    } else if (behavior === 'physical') {
      tableName = 'physical_todo';
    } else {
      return res.status(400).json({ message: 'Invalid behavior' });
    }

    const todo = await pool.query(
      `SELECT * FROM ${tableName} WHERE todo_id = $1`,
      [id]
    );

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update a todo
app.put("/todos/:behavior/:id", async (req, res) => {
  try {
    const { behavior, id } = req.params;
    const { description } = req.body;

    let tableName;
    if (behavior === 'health') {
      tableName = 'health_todo';
    } else if (behavior === 'technical') {
      tableName = 'technical_todo';
    } else if (behavior === 'communication') {
      tableName = 'communication_todo';
    } else if (behavior === 'presentation') {
      tableName = 'presentation_todo';
    } else if (behavior === 'physical') {
      tableName = 'physical_todo';
    } else {
      return res.status(400).json({ message: 'Invalid behavior' });
    }

    const updateTodo = await pool.query(
      `UPDATE ${tableName} SET description = $1 WHERE todo_id = $2`,
      [description, id]
    );

    res.json({ message: "Todo was updated" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete a todo
app.delete("/todos/:behavior/:id", async (req, res) => {
  try {
    const { behavior, id } = req.params;

    let tableName;
    if (behavior === 'health') {
      tableName = 'health_todo';
    } else if (behavior === 'technical') {
      tableName = 'technical_todo';
    } else if (behavior === 'communication') {
      tableName = 'communication_todo';
    } else if (behavior === 'presentation') {
      tableName = 'presentation_todo';
    } else if (behavior === 'physical') {
      tableName = 'physical_todo';
    } else {
      return res.status(400).json({ message: 'Invalid behavior' });
    }

    const deleteTodo = await pool.query(
      `DELETE FROM ${tableName} WHERE todo_id = $1`,
      [id]
    );

    res.json({ message: "Todo was deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
