import authorModel from "../models/authorModel.js";
import slugify from "slugify";

export const createAuthorController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required!" });
    }
    const existingAuthor = await authorModel.findOne({ name });
    if (existingAuthor) {
      return res.status(200).send({
        succes: false,
        message: "Author already exists!",
      });
    }
    const author = await new authorModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "New author added!",
      author,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      succes: false,
      error,
      message: "Error while adding author!",
    });
  }
};

export const updateAuthorController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const author = await authorModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      message: true,
      message: "Author updated successfully",
      author,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating author!",
    });
  }
};

export const authorController = async (req, res) => {
  try {
    const author = await authorModel.find({});
    res.status(200).send({
      success: true,
      message: "All authors list!",
      author,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all authors!",
    });
  }
};

export const singleAuthorController = async (req, res) => {
  try {
    const author = await authorModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Getting single author successfull!",
      author,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting single author!",
    });
  }
};

export const deleteAuthorCOntroller = async (req, res) => {
  try {
    const { id } = req.params;
    await authorModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Author deleted successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting author",
      error,
    });
  }
};
