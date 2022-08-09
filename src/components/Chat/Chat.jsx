export default function Chat({messages, goToScrollDown}) {
  console.log(messages);

  return messages?.map(message => {
    // console.log(message);
    return (
      <p key={message._id}>
        {message.msg}
        {/* {message.msg} {goToScrollDown()} */}
      </p>
    );
  });
}
