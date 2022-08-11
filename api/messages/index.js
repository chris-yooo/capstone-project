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
          const error = new Error({message: 'Message not known', status: 500});
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

// try {
//   await connectToMongodb();
//   const searchTerm = request.query.userid
//     ? {
//         user: request.query.userid,
//       }
//     : {};
//   const palettes = await Palette.find(searchTerm, null, {
//     limit: 10,
//     sort: {savedAt: -1},
//   })
//     .populate('user')
//     .exec();
//   return response.json(palettes);
// } catch (error) {
//   console.log(error);
//   return response.status(500).json({message: 'Server error'});
// }

// const Handler = async (request, response) => {
//   console.log(request.body);
//   if (request.method !== 'GET') {
//     return response.status(405).json({message: `Method ${request.method} not allowed`});
//   }
//   try {
//     await connectToMongodb();
//     const message = await Message.find({});
//     if (message) {
//       return response.json(message);
//     } else {
//       const error = new Error({message: 'Message not known', status: 500});
//       throw error;
//     }
//   } catch (err) {
//     console.log(err);
//     return response.status(500).json({message: 'Server error'});
//   }
// };

export default Handler;
