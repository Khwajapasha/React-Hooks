import React, { useState, useRef } from "react";
// import Picker from "emoji-picker-react";
import InputEmoji from "react-input-emoji";

const Emoji = () => {
  //   const [chosenEmoji, setChosenEmoji] = useState(null);
  const [text, setText] = useState("");

  //   const onEmojiClick = (event, emojiObject) => {
  //     setChosenEmoji(emojiObject);
  //   };
  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <div>
      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        placeholder="Type a message"
      />
    </div>
  );
};

export default Emoji;
