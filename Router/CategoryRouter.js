const Express = require("express");

const {
  getAllCategory,
  updateCategory,
  deleteCategory,
  getSingleCategory,
  createCategory,
} = require("../Controllers/CategoryController");

const router = Express.Router();

// Category Routes
router.post("/add-category", createCategory);
router.get("/get-all-category", getAllCategory);
router.put("/update-caegory/:id", updateCategory);
router.delete("/delete-category/:id", deleteCategory);
router.get("/get-category/:id", getSingleCategory);

module.exports = router;
