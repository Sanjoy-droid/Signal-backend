// message.endpoint.js
const Conversation = require("../Models/conversation.js");
const Message = require("../Models/message.js");

const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!!!" });
  }
};

module.exports = getMessage;
