import mongoose from "mongoose";

const rentDetailsSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: function () {
      return this.parent().rent === true;
    },
  },
  period: {
    type: String,
    required: function () {
      return this.parent().rent === true;
    },
  },
});

export default mongoose.model("Rent", rentDetailsSchema);
