export function message2DevConsole() {
  console.group(
    `%cShamanCoders`,
    'color: yellowgreen; font-size: 1.4em; background-color: #161634;'
  ),
    console.log(
      `%cRentonest:%cNodeJs, NextJs, MongoDb ve büyük bir aşkla geliştirildi.`,
      'font-size: 1.4em;color:cornflowerblue;',
      'color: yellowgreen; font-size: 1.4em;'
    ),

    console.log(
      `%cBizimle çalışmak ister misiniz? https://rentonest.miajupiter.com/slave-market/`,
      'font-size: 1.4em;'
    ),
    console.groupEnd()

  // console.group(`%c ShamanCoders`, "text-shadow: #a0f9fa 0 0 2px; font-family: monospace; font-size: 1.4em;"),
  // console.log(`%c Rentonest: NodeJs, NextJs, MongoDb ve büyük bir aşk.`, "text-shadow: #a0f9fa 0 0 2px; font-family: monospace; font-size: 1.4em;"),
  // console.log(`%c Bizimle çalışmak ister misiniz? https://rentonest.miajupiter.com/carier/`, "text-shadow: #a0f9fa 0 0 2px; font-family: monospace; font-size: 1.4em;"),
  // console.groupEnd()
}
