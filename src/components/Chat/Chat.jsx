export default function Chat({messages}) {
  return messages?.map(message => {
    return <p key={message._id}>{message.msg}</p>;
  });
}
