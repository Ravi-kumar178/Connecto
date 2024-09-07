import Message from "../Models/message.auth.js";
import Conversation from "../Models/conversation.model.js";

export const sendMessage = async(req,res) => {
    try {
        const senderId = req.user._id;
        const {id:receiverId} = req.params;
        const {message} = req.body;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId]
            })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        await conversation.save();

        return res.status(200).json(newMessage);
        
    } 
    catch (error) {
        console.log("Error in sending message: ",error.message);
        res.status(500).json({
            message:"Internal Server error"
        })
    }
}

export const getMessages = async(req,res) => {
    try {
        const {id:chatToId} = req.params;
        const senderId = req.user._id;        
        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,chatToId]}
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([]);
        }
        const message = conversation.messages;
        return res.status(200).json(message);
    }
    catch (error) {
        console.log("Error in sending message: ",error.message);
        res.status(500).json({
            message:"Internal Server error"
        })
    }
}