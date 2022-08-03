export default function Chat({messages, goToScrollDown}) {
  return messages.map(message => {
    return (
      <p key={message.id}>
        {message.msg}
        {/* {message.msg} {goToScrollDown()} */}
      </p>
    );
  });
}
