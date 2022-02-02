const { Schema } = require("mongoose");

const schema = new Schema(
  {
    token:{
      type:Object,
      required:true
    },
    billing:{
      type:Number
    },
    activeMembers:{
      type:Number
    },
    newMembers:{
      type:Number
    },
    totalMembers:{
      type:Number
    },
    chats:{
      type:Number
    },
  },
  { timestamps: true }
);

module.exports = schema;