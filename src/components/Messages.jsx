export default function Chat() {
  const Message = Messages.map(Message => <p key={Message.toString()}>{Message} </p>);
  return Message;
}

const Messages = [
  'Hey Moin was geht :D',
  'Samma das geht aber auch auf Bayrisch oder ?',
  'Vui spernzaln do mehra do legst di nieda, eam sog i. Ham samma ja, wo samma denn dahoam aasgem, Mongdratzal. Measi glei Gschicht, Schaung kost nix Gamsbart Maßkruag da, hog di hi!',
  'Ja und noch mehr oder ?',
  'A bissal wos gehd ollaweil Semmlkneedl do dahoam in da. Maderln nackata zua Kaiwe hogg di hera gwiss a bissal, umananda Biawambn damischa! Do owe Kirwa sog i, Gstanzl!',
  'Und noch was ?',
  'Schbozal obandeln anbandeln wolpern großherzig barfuaßat, gscheckate wuid: Mechad a hawadere midananda ozapfa heitzdog jo mei is des schee Woibbadinga lem und lem lossn, i moan scho aa a bissal. Do Hetschapfah nomoi Ohrwaschl, ?',
  'Bavaria ipsum dolor sit amet Deandlgwand Gams nomoi pfundig, wolln blärrd dahoam hob. Milli i daad nomoi, is. Dahoam allerweil glacht, Biazelt so Maderln Weibaleid.',
];
