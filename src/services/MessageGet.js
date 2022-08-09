export const getMessages = async () => {
  try {
    const response = await fetch(`/api/messages`);
    if (response.ok) {
      const messages = await response.json();
      return await messages;
    } else {
      throw new Error(`${response.status}`);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
