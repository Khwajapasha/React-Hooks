import React, { useState } from "react";
import Picker from "emoji-picker-react";

const Emoji = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  return (
    <div>
      {/* <span>You chose: {chosenEmoji.emoji}</span> */}
      <input type="text" value={chosenEmoji || ""} />
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};

export default Emoji;
