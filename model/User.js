const { Schema, model, Types } = require("mongoose");
const Hubspot = require("./Hubspot");


const Shopify = require("./Shopify");
const Slack = require("./Slack");

const schema = new Schema(
  {
    email:{
      type:String,
    },
    username:{
      type:String,
      required:true  
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "USER",
      enum: ["USER", "ADMIN"],
    },
    Hubspot:Hubspot,
    Shopify:Shopify,
    Slack:Slack
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
