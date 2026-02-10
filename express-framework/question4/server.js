import express from "express";
import mainRoutes from "./routes/mainRoutes.js";

const app = express();

// EJS setup
app.set("view engine", "ejs");

// Routes
app.use("/", mainRoutes);

// ✅ Custom 404 Middleware (always last)
app.use((req, res) => {
  res.status(404).render("404", { url: req.originalUrl });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
