import './App.css';
import dart from "./dart.png";
import { useState } from 'react';
const Players = (props) => {

  const [emojip1, setEmojip1] = useState('');
  const [emojip2, setEmojip2] = useState('');
  const [p1, setP1] = useState('Játékos1');
  const [p2, setP2] = useState('Játékos2');
  const allEmojis = [
    "",
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
    "🖕",
    "🖕",
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
    "🐐🍆",
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
    "📝",
    "🖕",
    "( ͡⚈ ͜ʖ ͡⚈)",
    "🖕",
    "╭ᑎ╮",
    "╰⋃╯",
    "𓀐",
    "👯",
    "ʍⅎsu",
    "🔞",
    "♛",
    "👉👌",
    ""
  ];
const max = allEmojis.length;
const startGame = () => {
  console.log("START");
props.setp1name(p1+ ' ' +emojip1);
props.setp2name(p2+ ' ' +emojip2);
props.sethiddenplayers('none')
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
  <h2>RETEK DARTS APP</h2>
<img className="dart-img-main" src={dart} alt="" />
  
<div className="form__group field">
<input
 className="form__field"
        type="text"
        id="message"
        name="message"
        onChange={handleChange1}
        placeholder={p1}
        value={p1}
      />
  <label className="form__label">Név</label>
</div>
<div className="form__group field">
<input
 className="form__field"
        type="text"
        id="message"
        name="message"
        onChange={handleChange2}
        placeholder={p2}
        value={p2}
      />
  <label className="form__label">Név</label>
</div>

<button className='button-dart' onClick={startGame} >START</button>
</div>
  )}
  

export default Players;
