import {useState} from 'react';
import CHRAT from './pages/HomePage';
import fakeMessages from './fakeMessages';
import {nanoid} from 'nanoid';

export default function App() {
  const [messages, setMessages] = useState(fakeMessages);

  function addNewMessage(newMessage) {
    console.log(addNewMessage);
    setMessages(messages => [...messages, {id: nanoid(), msg: newMessage}]);
  }

  return <CHRAT messages={messages} addNewMessage={addNewMessage} />;
}
