const { Schema, model, Types } = require("mongoose");
const Hubspot = require("./Hubspot");
const Google = require("./Google");
const Shopify = require("./Shopify");
const Slack = require("./Slack");

const schema = new Schema(
  {
      totalPayment:{type:Number},
      totalUsers:{type:Number},
      organisationName:{type:String},
      username:{type:String,required:true},
      Google:Google,
      Slack:Slack,
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      userList:[
          {
              type:Types.ObjectId,
              ref:"User"
          }
      ]
  },
  {
    timestamps: true,
  }
);

module.exports = model("Organisation", schema);
