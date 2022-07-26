export default function Chat({messages}) {
  return messages.map(message => {
    return <p key={message.id}>{message.msg}</p>;
  });
}
