import reviewModel from "../models/reviewModel.js";
import productModel from "../models/productModel.js";
import userModel from "../models/userModel.js";
import fs from "fs";
import slugify from "slugify";

export const addReviewController = async (req, res) => {
  try {
    const { id } = req.params;

    const data = {
      product: id,
      rating: req.body.rating,
      description: req.body.description,
    };

    const review = new reviewModel(data);
    await review.save();

    res.status(200).send(review);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in adding a review",
    });
  }
};

export const getAllReviewsController = async (req, res) => {
  try {
    const reviews = await reviewModel.find({});
    res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting all reviews",
      error: error.message,
    });
  }
};
