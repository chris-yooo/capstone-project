import {useState, useEffect, useRef} from 'react';
import CHRAT from './pages/HomePage';
import {getMessages} from './services/MessageGet';

export default function App() {
  const [messages, setMessages] = useState();

  function jumpTo(anchor_id) {
    window.location.href = '#' + anchor_id;
    enableFocus.current.focus();
  }

  const enableFocus = useRef(null);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const fetchedMessages = await getMessages();
        setMessages(fetchedMessages);
        enableFocus.current.focus();
      } catch (err) {
        console.log(err);
      } finally {
        jumpTo('anchor');
      }
    }
    const fetchInterval = setInterval(fetchMessages, 1000);
    return () => {
      clearInterval(fetchInterval);
    };
  }, []);

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
    sendMessage(newMessage);
  }

  return <CHRAT messages={messages} onNewMessage={onNewMessage} enableFocus={enableFocus} />;
}
