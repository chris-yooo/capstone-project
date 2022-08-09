import connectToMongodb from '../_database/connect-to-mongodb';
import {Message} from '../_database/models';

const Handler = async (request, response) => {
  console.log(request.body);
  if (request.method !== 'GET') {
    return response.status(405).json({message: `Method ${request.method} not allowed`});
  }
  try {
    await connectToMongodb();
    const message = await Message.find({});
    if (message) {
      return response.json(message);
    } else {
      const error = new Error({message: 'Message not known', status: 500});
      throw error;
    }
  } catch (err) {
    console.log(err);
    return response.status(500).json({message: 'Server error'});
  }
};

export default Handler;
