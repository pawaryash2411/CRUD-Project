const CategoryDB = require("../Models/CategoryModel");

const createCategory = async (req, res) => {
  try {
    const { category_name } = req.body;

    const category = new CategoryDB({
      category_name,
    });

    await category.save();
    res.status(201).json({
      success: true,
      category,
      message: "Category Created Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!!" });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const category = CategoryDB.find();

    await category.save();
    res.status(201).json({
      success: true,
      category,
      message: "All Category Fetched Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!!" });
  }
};

const getSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = CategoryDB.findOne({ id });

    if (!category) {
      res.status(401).json({ error: "This Category is not found!!" });
    }
    await category.save();
    res.status(201).json({
      success: true,
      category,
      message: "Category Fetched Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!!" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { category_name } = req.body;

    const category = CategoryDB.findByIdAndUpdate(
      id,
      {
        category_name,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    await category.save();
    res.status(201).json({
      success: true,
      category,
      message: "Category Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!!" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = CategoryDB.findByIdAndDelete(id);

    await category.save();
    res.status(201).json({
      success: true,
      message: "Category Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!!" });
  }
};

module.exports = {
  createCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
