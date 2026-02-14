const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

/*
    Professional Safe Calculator API
*/
app.post("/calculate", (req, res) => {
    const { expression } = req.body;

    if (!expression) {
        return res.status(400).json({ error: "Expression is required" });
    }

    try {
        // Basic validation (only numbers and operators allowed)
        const validExpression = /^[0-9+\-*/().\s]+$/;

        if (!validExpression.test(expression)) {
            return res.status(400).json({ error: "Invalid characters detected" });
        }

        // Calculate result
        const result = eval(expression);

        // Simulated delay for animation effect
        setTimeout(() => {
            res.json({
                success: true,
                result: result
            });
        }, 600);

    } catch (error) {
        res.status(400).json({
            success: false,
            error: "Invalid mathematical expression"
        });
    }
});

// Health Check Route
app.get("/", (req, res) => {
    res.json({ message: "Calculator Backend Running 🚀" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
