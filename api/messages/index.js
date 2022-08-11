import connectToMongodb from '../_database/connect-to-mongodb';
import {Message} from '../_database/models';

const Handler = async (request, response) => {
  switch (request.method) {
    case 'GET':
      try {
        await connectToMongodb();
        const messages = await Message.find({});
        if (messages) {
          return response.json(
            messages.map(message => {
              return {_id: message._id, msg: message.msg};
            })
          );
        } else {
          const error = new Error({message: 'sorry, there are no messages yet', status: 500});
          throw error;
        }
      } catch (err) {
        console.log(err);
        return response.status(500).json({message: 'Server error'});
      }
    default:
      return response.status(405).json({message: `Method ${request.method} not allowed`});
    case 'POST':
      try {
        await connectToMongodb();
        const newMessage = await Message.create({
          msg: request.body.message,
        });
        return response.json(newMessage);
      } catch (err) {
        console.log(err);
        return response.status(500).json({message: 'Server error'});
      }
  }
};

export default Handler;
