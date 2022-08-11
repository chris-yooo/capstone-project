import mongoose from 'mongoose';
import {MessageSchema} from './MessageSchema';

export const Message = mongoose.model('message', MessageSchema, 'messages');
