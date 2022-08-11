import {useState, useEffect} from 'react';
import CHRAT from './pages/HomePage';
import {nanoid} from 'nanoid';
import {getMessages} from './services/MessageGet';
import fakeMessages from './fakeMessages';

export default function App() {
  const [messages, setMessages] = useState();
  const [shouldUpdate, setShouldUpdate] = useState(true);
  useEffect(() => {
    async function fetchMessages() {
      try {
        const fetchedMessages = await getMessages();
        setMessages(fetchedMessages);
      } catch (err) {
        console.log(err);
      } finally {
        setShouldUpdate(false);
      }
    }

    if (shouldUpdate) {
      fetchMessages();
    }
  }, [shouldUpdate]);

  function onNewMessage(newMessage) {
    setMessages(messages => [...messages, {id: nanoid(), msg: newMessage}]);
  }

  return <CHRAT messages={messages} onNewMessage={onNewMessage} />;
}
