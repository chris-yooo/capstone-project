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

  const sendMessage = async message => {
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({message}),
      });
      if (response.ok) {
        const newMessage = await response.json();
        return newMessage;
      } else {
        throw new Error(`${response.status}`);
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  function onNewMessage(newMessage) {
    setMessages(messages => [...messages, {id: nanoid(), msg: newMessage}]);
    sendMessage(newMessage);
  }

  return <CHRAT messages={messages} onNewMessage={onNewMessage} />;
}
