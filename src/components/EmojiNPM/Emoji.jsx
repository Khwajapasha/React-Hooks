// import React, { useState } from "react";

// import TextAreaEmoji from "react-input-emoji";

// const Emoji = () => {
//   const [text, setText] = useState("");

//   function handleOnEnter(text) {
//     console.log("enter", text);
//   }
//   return (
//     <div>
//       <TextAreaEmoji
//         value={text}
//         onChange={setText}
//         cleanOnEnter
//         onEnter={handleOnEnter}
//         placeholder="Type a message"
//       />
//     </div>
//   );
// };

// export default Emoji;

import React from "react";
import EmojiTextarea from "react-emoji-textarea";

const Emoji = () => {
  const [submit, setSubmit] = useState(false);
  const [text, setText] = useState("");
  return <div></div>;
};

export default Emoji;
