import './App.css';
import { useState } from 'react';
const Players = (props) => {

  const [emojip1, setEmojip1] = useState('');
  const [emojip2, setEmojip2] = useState('');
  const [p1, setP1] = useState('Játékos1');
  const [p2, setP2] = useState('Játékos2');
  const allEmojis = [
    "😀",
    "😁",
    "😂",
    "😃",
    "😄",
    "😅",
    "😆",
    "😇",
    "😈",
    "👿",
    "😉",
    "😊",
    "☺️",
    "😋",
    "😌",
    "😍",
    "😎",
    "😏",
    "😐",
    "😑",
    "😒",
    "😓",
    "😔",
    "😕",
    "😖",
    "😗",
    "😘",
    "😙",
    "😚",
    "😛",
    "😜",
    "😝",
    "😞",
    "😟",
    "😠",
    "😡",
    "😢",
    "😣",
    "😤",
    "😥",
    "😦",
    "😧",
    "😨",
    "😩",
    "😪",
    "😫",
    "😬",
    "😭",
    "😮",
    "😯",
    "😰",
    "😱",
    "😲",
    "😳",
    "😴",
    "😵",
    "😶",
    "😷",
    "😸",
    "😹",
    "😺",
    "😻",
    "😼",
    "😽",
    "😾",
    "😿",
    "🙀",
    "👣",
    "👤",
    "👥",
    "👶",
    "👶🏻",
    "👶🏼",
    "👶🏽",
    "👶🏾",
    "👶🏿",
    "👦",
    "👦🏻",
    "👦🏼",
    "👦🏽",
    "👦🏾",
    "👦🏿",
    "👧",
    "👧🏻",
    "👧🏼",
    "👧🏽",
    "👧🏾",
    "👧🏿",
    "👨",
    "👨🏻",
    "👨🏼",
    "👨🏽",
    "👨🏾",
    "👨🏿",
    "👩",
    "👩🏻",
    "👩🏼",
    "👩🏽",
    "👩🏾",
    "👩🏿",
    "👪",
    "👨‍👩‍👧",
    "👨‍👩‍👧‍👦",
    "👨‍👩‍👦‍👦",
    "👨‍👩‍👧‍👧",
    "👩‍👩‍👦",
    "👩‍👩‍👧",
    "👩‍👩‍👧‍👦",
    "👩‍👩‍👦‍👦",
    "👩‍👩‍👧‍👧",
    "👨‍👨‍👦",
    "👨‍👨‍👧",
    "👨‍👨‍👧‍👦",
    "👨‍👨‍👦‍👦",
    "👨‍👨‍👧‍👧",
    "👫",
    "👬",
    "👭",
    "👯",
    "👰",
    "👰🏻",
    "👰🏼",
    "👰🏽",
    "👰🏾",
    "👰🏿",
    "👱",
    "👱🏻",
    "👱🏼",
    "👱🏽",
    "👱🏾",
    "👱🏿",
    "👲",
    "👲🏻",
    "👲🏼",
    "👲🏽",
    "👲🏾",
    "👲🏿",
    "👳",
    "👳🏻",
    "👳🏼",
    "👳🏽",
    "👳🏾",
    "👳🏿",
    "👴",
    "👴🏻",
    "👴🏼",
    "👴🏽",
    "👴🏾",
    "👴🏿",
    "👵",
    "👵🏻",
    "👵🏼",
    "👵🏽",
    "👵🏾",
    "👵🏿",
    "👮",
    "👮🏻",
    "👮🏼",
    "👮🏽",
    "👮🏾",
    "👮🏿",
    "👷",
    "👷🏻",
    "👷🏼",
    "👷🏽",
    "👷🏾",
    "👷🏿",
    "👸",
    "👸🏻",
    "👸🏼",
    "👸🏽",
    "👸🏾",
    "👸🏿",
    "💂",
    "💂🏻",
    "💂🏼",
    "💂🏽",
    "💂🏾",
    "💂🏿",
    "👼",
    "👼🏻",
    "👼🏼",
    "👼🏽",
    "👼🏾",
    "👼🏿",
    "🎅",
    "🎅🏻",
    "🎅🏼",
    "🎅🏽",
    "🎅🏾",
    "🎅🏿",
    "👻",
    "👹",
    "👺",
    "💩",
    "💀",
    "👽",
    "👾",
    "🙇",
    "🙇🏻",
    "🙇🏼",
    "🙇🏽",
    "🙇🏾",
    "🙇🏿",
    "💁",
    "💁🏻",
    "💁🏼",
    "💁🏽",
    "💁🏾",
    "💁🏿",
    "🙅",
    "🙅🏻",
    "🙅🏼",
    "🙅🏽",
    "🙅🏾",
    "🙅🏿",
    "🙆",
    "🙆🏻",
    "🙆🏼",
    "🙆🏽",
    "🙆🏾",
    "🙆🏿",
    "🙋",
    "🙋🏻",
    "🙋🏼",
    "🙋🏽",
    "🙋🏾",
    "🙋🏿",
    "🙎",
    "🙎🏻",
    "🙎🏼",
    "🙎🏽",
    "🙎🏾",
    "🙎🏿",
    "🙍",
    "🙍🏻",
    "🙍🏼",
    "🙍🏽",
    "🙍🏾",
    "🙍🏿",
    "💆",
    "💆🏻",
    "💆🏼",
    "💆🏽",
    "💆🏾",
    "💆🏿",
    "💇",
    "💇🏻",
    "💇🏼",
    "💇🏽",
    "💇🏾",
    "💇🏿",
    "💑",
    "👩‍❤️‍👩",
    "👨‍❤️‍👨",
    "💏",
    "👩‍❤️‍💋‍👩",
    "👨‍❤️‍💋‍👨",
    "🙌",
    "🙌🏻",
    "🙌🏼",
    "🙌🏽",
    "🙌🏾",
    "🙌🏿",
    "👏",
    "👏🏻",
    "👏🏼",
    "👏🏽",
    "👏🏾",
    "👏🏿",
    "👂",
    "👂🏻",
    "👂🏼",
    "👂🏽",
    "👂🏾",
    "👂🏿",
    "👀",
    "👃",
    "👃🏻",
    "👃🏼",
    "👃🏽",
    "👃🏾",
    "👃🏿",
    "👄",
    "💋",
    "👅",
    "💅",
    "💅🏻",
    "💅🏼",
    "💅🏽",
    "💅🏾",
    "💅🏿",
    "👋",
    "👋🏻",
    "👋🏼",
    "👋🏽",
    "👋🏾",
    "👋🏿",
    "👍",
    "👍🏻",
    "👍🏼",
    "👍🏽",
    "👍🏾",
    "👍🏿",
    "👎",
    "👎🏻",
    "👎🏼",
    "👎🏽",
    "👎🏾",
    "👎🏿",
    "☝",
    "☝🏻",
    "☝🏼",
    "☝🏽",
    "☝🏾",
    "☝🏿",
    "👆",
    "👆🏻",
    "👆🏼",
    "👆🏽",
    "👆🏾",
    "👆🏿",
    "👇",
    "👇🏻",
    "👇🏼",
    "👇🏽",
    "👇🏾",
    "👇🏿",
    "👈",
    "👈🏻",
    "👈🏼",
    "👈🏽",
    "👈🏾",
    "👈🏿",
    "👉",
    "👉🏻",
    "👉🏼",
    "👉🏽",
    "👉🏾",
    "👉🏿",
    "👌",
    "👌🏻",
    "👌🏼",
    "👌🏽",
    "👌🏾",
    "👌🏿",
    "✌",
    "✌🏻",
    "✌🏼",
    "✌🏽",
    "✌🏾",
    "✌🏿",
    "👊",
    "👊🏻",
    "👊🏼",
    "👊🏽",
    "👊🏾",
    "👊🏿",
    "✊",
    "✊🏻",
    "✊🏼",
    "✊🏽",
    "✊🏾",
    "✊🏿",
    "✋",
    "✋🏻",
    "✋🏼",
    "✋🏽",
    "✋🏾",
    "✋🏿",
    "💪",
    "💪🏻",
    "💪🏼",
    "💪🏽",
    "💪🏾",
    "💪🏿",
    "👐",
    "👐🏻",
    "👐🏼",
    "👐🏽",
    "👐🏾",
    "👐🏿",
    "🙏",
    "🙏🏻",
    "🙏🏼",
    "🙏🏽",
    "🙏🏾",
    "🙏🏿",
    "🌱",
    "🌲",
    "🌳",
    "🌴",
    "🌵",
    "🌷",
    "🌸",
    "🌹",
    "🌺",
    "🌻",
    "🌼",
    "💐",
    "🌾",
    "🌿",
    "🍀",
    "🍁",
    "🍂",
    "🍃",
    "🍄",
    "🌰",
    "🐀",
    "🐁",
    "🐭",
    "🐹",
    "🐂",
    "🐃",
    "🐄",
    "🐮",
    "🐅",
    "🐆",
    "🐯",
    "🐇",
    "🐰",
    "🐈",
    "🐱",
    "🐎",
    "🐴",
    "🐏",
    "🐑",
    "🐐",
    "🐓",
    "🐔",
    "🐤",
    "🐣",
    "🐥",
    "🐦",
    "🐧",
    "🐘",
    "🐪",
    "🐫",
    "🐗",
    "🐖",
    "🐷",
    "🐽",
    "🐕",
    "🐩",
    "🐶",
    "🐺",
    "🐻",
    "🐨",
    "🐼",
    "🐵",
    "🙈",
    "🙉",
    "🙊",
    "🐒",
    "🐉",
    "🐲",
    "🐊",
    "🐍",
    "🐢",
    "🐸",
    "🐋",
    "🐳",
    "🐬",
    "🐙",
    "🐟",
    "🐠",
    "🐡",
    "🐚",
    "🐌",
    "🐛",
    "🐜",
    "🐝",
    "🐞",
    "🐾",
    "⚡️",
    "🔥",
    "🌙",
    "☀️",
    "⛅️",
    "☁️",
    "💧",
    "💦",
    "☔️",
    "💨",
    "❄️",
    "🌟",
    "⭐️",
    "🌠",
    "🌄",
    "🌅",
    "🌈",
    "🌊",
    "🌋",
    "🌌",
    "🗻",
    "🗾",
    "🌐",
    "🌍",
    "🌎",
    "🌏",
    "🌑",
    "🌒",
    "🌓",
    "🌔",
    "🌕",
    "🌖",
    "🌗",
    "🌘",
    "🌚",
    "🌝",
    "🌛",
    "🌜",
    "🌞",
    "🍅",
    "🍆",
    "🌽",
    "🍠",
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🍔",
    "🍕",
    "🍖",
    "🍗",
    "🍘",
    "🍙",
    "🍚",
    "🍛",
    "🍜",
    "🍝",
    "🍞",
    "🍟",
    "🍡",
    "🍢",
    "🍣",
    "🍤",
    "🍥",
    "🍦",
    "🍧",
    "🍨",
    "🍩",
    "🍪",
    "🍫",
    "🍬",
    "🍭",
    "🍮",
    "🍯",
    "🍰",
    "🍱",
    "🍲",
    "🍳",
    "🍴",
    "🍵",
    "☕️",
    "🍶",
    "🍷",
    "🍸",
    "🍹",
    "🍺",
    "🍻",
    "🍼",
    "🎀",
    "🎁",
    "🎂",
    "🎃",
    "🎄",
    "🎋",
    "🎍",
    "🎑",
    "🎆",
    "🎇",
    "🎉",
    "🎊",
    "🎈",
    "💫",
    "✨",
    "💥",
    "🎓",
    "👑",
    "🎎",
    "🎏",
    "🎐",
    "🎌",
    "🏮",
    "💍",
    "❤️",
    "💔",
    "💌",
    "💕",
    "💞",
    "💓",
    "💗",
    "💖",
    "💘",
    "💝",
    "💟",
    "💜",
    "💛",
    "💚",
    "💙",
    "🏃",
    "🏃🏻",
    "🏃🏼",
    "🏃🏽",
    "🏃🏾",
    "🏃🏿",
    "🚶",
    "🚶🏻",
    "🚶🏼",
    "🚶🏽",
    "🚶🏾",
    "🚶🏿",
    "💃",
    "💃🏻",
    "💃🏼",
    "💃🏽",
    "💃🏾",
    "💃🏿",
    "🚣",
    "🚣🏻",
    "🚣🏼",
    "🚣🏽",
    "🚣🏾",
    "🚣🏿",
    "🏊",
    "🏊🏻",
    "🏊🏼",
    "🏊🏽",
    "🏊🏾",
    "🏊🏿",
    "🏄",
    "🏄🏻",
    "🏄🏼",
    "🏄🏽",
    "🏄🏾",
    "🏄🏿",
    "🛀",
    "🛀🏻",
    "🛀🏼",
    "🛀🏽",
    "🛀🏾",
    "🛀🏿",
    "🏂",
    "🎿",
    "⛄️",
    "🚴",
    "🚴🏻",
    "🚴🏼",
    "🚴🏽",
    "🚴🏾",
    "🚴🏿",
    "🚵",
    "🚵🏻",
    "🚵🏼",
    "🚵🏽",
    "🚵🏾",
    "🚵🏿",
    "🏇",
    "🏇🏻",
    "🏇🏼",
    "🏇🏽",
    "🏇🏾",
    "🏇🏿",
    "⛺️",
    "🎣",
    "⚽️",
    "🏀",
    "🏈",
    "⚾️",
    "🎾",
    "🏉",
    "⛳️",
    "🏆",
    "🎽",
    "🏁",
    "🎹",
    "🎸",
    "🎻",
    "🎷",
    "🎺",
    "🎵",
    "🎶",
    "🎼",
    "🎧",
    "🎤",
    "🎭",
    "🎫",
    "🎩",
    "🎪",
    "🎬",
    "🎨",
    "🎯",
    "🎱",
    "🎳",
    "🎰",
    "🎲",
    "🎮",
    "🎴",
    "🃏",
    "🀄️",
    "🎠",
    "🎡",
    "🎢",
    "🚃",
    "🚞",
    "🚂",
    "🚋",
    "🚝",
    "🚄",
    "🚅",
    "🚆",
    "🚇",
    "🚈",
    "🚉",
    "🚊",
    "🚌",
    "🚍",
    "🚎",
    "🚐",
    "🚑",
    "🚒",
    "🚓",
    "🚔",
    "🚨",
    "🚕",
    "🚖",
    "🚗",
    "🚘",
    "🚙",
    "🚚",
    "🚛",
    "🚜",
    "🚲",
    "🚏",
    "⛽️",
    "🚧",
    "🚦",
    "🚥",
    "🚀",
    "🚁",
    "✈️",
    "💺",
    "⚓️",
    "🚢",
    "🚤",
    "⛵️",
    "🚡",
    "🚠",
    "🚟",
    "🛂",
    "🛃",
    "🛄",
    "🛅",
    "💴",
    "💶",
    "💷",
    "💵",
    "🗽",
    "🗿",
    "🌁",
    "🗼",
    "⛲️",
    "🏰",
    "🏯",
    "🌇",
    "🌆",
    "🌃",
    "🌉",
    "🏠",
    "🏡",
    "🏢",
    "🏬",
    "🏭",
    "🏣",
    "🏤",
    "🏥",
    "🏦",
    "🏨",
    "🏩",
    "💒",
    "⛪️",
    "🏪",
    "🏫",
    "💻",
    "⏰",
    "⏳",
    "⌛️",
    "📷",
    "📹",
    "🎥",
    "📺",
    "📻",
    "📟",
    "📞",
    "☎️",
    "📠",
    "💽",
    "💾",
    "💿",
    "📀",
    "📼",
    "🔋",
    "🔌",
    "💡",
    "🔦",
    "📡",
    "💳",
    "💸",
    "💰",
    "💎",
    "🌂",
    "👝",
    "👛",
    "👜",
    "💼",
    "🎒",
    "💄",
    "👓",
    "👒",
    "👡",
    "👠",
    "👢",
    "👞",
    "👟",
    "👙",
    "👗",
    "👘",
    "👚",
    "👕",
    "👔",
    "👖",
    "🚪",
    "🚿",
    "🛁",
    "🚽",
    "💈",
    "💉",
    "💊",
    "🔬",
    "🔭",
    "🔮",
    "🔧",
    "🔪",
    "🔩",
    "🔨",
    "💣",
    "🚬",
    "🔫",
    "🔖",
    "📰",
    "🔑",
    "✉️",
    "📩",
    "📨",
    "📧",
    "📥",
    "📤",
    "📦",
    "📯",
    "📮",
    "📪",
    "📫",
    "📬",
    "📭",
    "📄",
    "📃",
    "📑",
    "📈",
    "📉",
    "📊",
    "📅",
    "📆",
    "🔅",
    "🔆",
    "📜",
    "📋",
    "📖",
    "📓",
    "📔",
    "📒",
    "📕",
    "📗",
    "📘",
    "📙",
    "📚",
    "📇",
    "🔗",
    "📎",
    "📌",
    "✂️",
    "📐",
    "📍",
    "📏",
    "🚩",
    "📁",
    "📂",
    "✒️",
    "✏️",
    "📝"
  ];
const max = allEmojis.length;
const startGame = () => {
  console.log("START");
props.setp1name(p1+ ' ' +emojip1);
props.setp2name(p2+ ' ' +emojip2);
props.sethiddenplayers('hidden')
}


 
  const handleChange1 = event => {
    setEmojip1(allEmojis[Math.floor(Math.random() * (max - 1 + 1))]);
    setP1(event.target.value);
  };
  const handleChange2 = event => {
    setEmojip2(allEmojis[Math.floor(Math.random() * (max - 1 + 1))]);
    setP2(event.target.value);
  };



  return(
  <div className='scoreBoard'>
<h1>
{p1} 
</h1>
<h1>
{p2} 
</h1>
 <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange1}
        value={p1}
      />
 <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange2}
        value={p2}
      />


<button className='button-normal' onClick={startGame} >START</button>

</div>

  )}
  

export default Players;
