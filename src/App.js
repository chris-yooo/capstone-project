import {useState, useEffect} from 'react';
import CHRAT from './pages/HomePage';
import {nanoid} from 'nanoid';
import {getMessages} from './services/MessageGet';

export default function App() {
  const [messages, setMessages] = useState();
  const [shouldUpdate, setShouldUpdate] = useState(true);

  function jumpTo(anchor_id) {
    window.location.href = '#' + anchor_id;
  }

  function machScroll() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  setTimeout(function () {
    setShouldUpdate(true);
  }, 7000);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const fetchedMessages = await getMessages();
        setMessages(fetchedMessages);
      } catch (err) {
        console.log(err);
      } finally {
        setShouldUpdate(false);

        jumpTo('anchor');
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
    machScroll();
    setTimeout(function () {
      setShouldUpdate(true);
    }, 500);
  }

  return <CHRAT messages={messages} onNewMessage={onNewMessage} />;
}
