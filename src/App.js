import {useState, useEffect} from 'react';
import CHRAT from './pages/HomePage';
import {nanoid} from 'nanoid';
import {getMessages} from './services/MessageGet';
import fakeMessages from './fakeMessages';

export default function App() {
  const [messages, setMessages] = useState(fakeMessages);

  useEffect(() => {
    async function fetchMessages() {
      const fetchedMessages = await getMessages();
      return fetchedMessages;
    }
    setMessages(fetchMessages());
  }, [messages]);

  function onNewMessage(newMessage) {
    setMessages(messages => [...messages, {id: nanoid(), msg: newMessage}]);
  }

  return <CHRAT messages={messages} onNewMessage={onNewMessage} />;
}
