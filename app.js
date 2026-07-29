const INSTAGRAM_URL = "https://www.instagram.com/lunaph29.5?igsh=bmwzczh0ajZjbmxy&utm_source=qr";

const emotions = {
  affection: {
    order: "001",
    name: "めろあ",
    en: "LOVE / 愛情",
    characterName: "めろあ",
    emotionLabel: "愛情",
    worldName: "めろあ",
    motif: "白薔薇",
    theme: "好きすぎる自分を否定しなくていい気持ち",
    characterImage: "./assets/characters/meroa-character.jpg",
    resultImage: "./assets/characters/meroa-result.png",
    supportImage: "./assets/characters/meroa-support.png",
    accent: ["#e782ad", "#ff9fca"],
    definition: "めろあは、好きすぎる自分を否定しなくていい夜に現れる住人です。",
    description:
      "あなたは、人を大切にできるぶん、相手の一言で一日の温度が変わりやすい状態です。返信、表情、声のトーンをちゃんと見てしまう。重いんじゃなくて、心の向け方が丁寧すぎるだけです。",
    deepDescription:
      "今のあなたは、めろあがベッドの真ん中で白薔薇を抱えて座っている状態です。好きな人の返信が遅いだけで支度が止まり、相手の機嫌ひとつで今日の自分の価値まで決めそうになる。生活のリモコンを相手に渡しかけています。でもそれは、愛せる力が強すぎて置き場所を失っているだけです。",
    shareLine: "好きな人の一言で、一日の価値が決まってしまう夜。",
    sceneTitle: "愛情あるある",
    lightScenes: [
      "朝から、大切な人の返信で一日の温度が変わる。",
      "卓では平気な顔をしているのに、裏で「今日ちょっと冷たかった？」を考える。",
      "大切にしたい気持ちが強くて、自分の疲れを後回しにしがち。",
    ],
    deepScenes: [
      "返信が遅いだけで、準備の手が一回止まる。",
      "「大丈夫」って送ったあと、本当は全然大丈夫じゃなくてトーク画面を監視する。",
      "大切な人の機嫌ひとつで、その日の自分の価値まで揺れる。",
    ],
    worldLine: "愛情は重さじゃない。めろあは、好きすぎる自分を否定しないために現れます。",
    archive: "好きすぎる自分を、否定しなくていい気持ち。",
  },
  fear: {
    order: "002",
    name: "ふろむ",
    en: "FEAR / 恐怖",
    characterName: "ふろむ",
    emotionLabel: "恐怖",
    worldName: "ふろむ",
    motif: "黒い羽と月",
    theme: "怖がる自分を否定しなくていい気持ち",
    characterImage: "./assets/characters/furomu-character.png",
    resultImage: "./assets/characters/furomu-result.png",
    supportImage: "./assets/characters/furomu-support.png",
    accent: ["#030305", "#151018"],
    definition: "ふろむは、まだ起きていない怖さを先に見つけてしまう夜に現れる住人です。",
    description:
      "あなたは危険に気づくのが早い状態です。空気の変化、既読の間、相手の声色を普通の人より細かく拾ってしまう。怖がりというより、心の警報がよく働きすぎています。",
    deepDescription:
      "今のあなたは、ふろむが頭の中で警報を鳴らしっぱなしの状態です。何も起きてないのに、もう終わった気がする。返信が短い、目線が違う、誰かの一言が雑だった。それだけで最悪の未来まで勝手に上映されて、まだ怪我してないのに心だけ全身包帯です。",
    shareLine: "何も起きてないのに、心だけ先に最悪まで行ってしまう夜。",
    sceneTitle: "恐怖あるある",
    lightScenes: [
      "返信が短いだけで、嫌われた可能性を考え始める。",
      "店の空気が変わると、全部自分のせいかもと思う。",
      "大丈夫な日でも、念のため最悪のパターンを用意している。",
    ],
    deepScenes: [
      "既読がつかないだけで、嫌われた説、飽きられた説、干された説が同時上映される。",
      "相手の「笑」が一個少ないだけで、文章の温度を検死レベルで読む。",
      "まだ何も起きてないのに、失う準備と傷つく準備だけ完璧に終わっている。",
    ],
    worldLine: "恐怖は弱さじゃない。ふろむは、あなたを守ろうとしすぎた心から現れます。",
    archive: "怖がる自分を、否定しなくていい気持ち。",
  },
  solitude: {
    order: "003",
    name: "くれす",
    en: "CRES / 孤独",
    characterName: "くれす",
    emotionLabel: "孤独",
    worldName: "くれす",
    motif: "欠けた月",
    theme: "ひとりの夜に、そばにいてほしかった気持ち",
    characterImage: "./assets/characters/cres-character.jpg",
    resultImage: "./assets/characters/cres-result.png",
    supportImage: "./assets/characters/cres-support.png",
    accent: ["#f4f2ff", "#ffffff"],
    definition: "くれすは、人の中にいた日の帰り道に現れる、そばにいてほしかった気持ちです。",
    description:
      "あなたは、誰かと会ったあとほど孤独が強くなる状態です。昼も夜もちゃんと話せる。でも本音だけ置いてきたような感覚が残る。くれすは、その言葉になる前の寂しさを抱えて現れます。",
    deepDescription:
      "今のあなたは、くれすが帰り道の端っこで待っている状態です。人前では笑えていたのに、帰宅した瞬間に急に無音が刺さる。通知はあるのに、欲しい人からの言葉だけない。誰かといた日の方が、ひとりが濃くなる。正直、布団に入った瞬間が一番きつい夜です。",
    shareLine: "人と会った日の帰り道ほど、ひとりが濃くなる夜。",
    sceneTitle: "孤独あるある",
    lightScenes: [
      "仕事中は笑えていたのに、帰り道で急に静かになる。",
      "通知はあるのに、欲しい言葉だけ来ていない気がする。",
      "誰かと一緒にいた日ほど、自分の中身だけ置いてきた感じがする。",
    ],
    deepScenes: [
      "人に囲まれていた日の方が、帰宅後に孤独が濃くなる。",
      "外では必要とされてる気がするのに、家に着いた瞬間ぜんぶ演出だった気がする。",
      "誰かに会ったはずなのに、布団の中で『結局わたしの中身知られてない』まで落ちる。",
    ],
    worldLine: "孤独は弱さじゃない。くれすは、ひとりの夜にそばにいてほしかった気持ちです。",
    archive: "ひとりの夜に、そばにいてほしかった気持ち。",
  },
  freedom: {
    order: "004",
    name: "みちる",
    en: "FREE / 自由",
    characterName: "みちる",
    emotionLabel: "自由",
    worldName: "みちる",
    motif: "羽と星",
    theme: "誰にも決められない自分でいたい気持ち",
    characterImage: "./assets/characters/michiru-character.png",
    resultImage: "./assets/characters/michiru-result.png",
    supportImage: "./assets/characters/michiru-support.png",
    accent: ["#ffd24f", "#ffe36e"],
    definition: "みちるは、誰か用の自分から抜け出したい夜に現れる住人です。",
    description:
      "あなたは、求められる自分を演じるのが上手です。だからこそ、たまに自分がどこにいるのかわからなくなる。みちるは、ちゃんとした自分の外側へ連れていくために現れます。",
    deepDescription:
      "今のあなたは、みちるが窓を全開にしている状態です。店用、SNS用、好きな人用、友達用の自分を切り替えすぎて、本体が迷子です。『こう見られたい』に合わせ続けて、素の自分だけログアウトしかけています。自由になりたいのは逃げじゃなく、生存ルートです。",
    shareLine: "ちゃんとしているほど、自分だけが置いていかれる夜。",
    sceneTitle: "自由あるある",
    lightScenes: [
      "求められているキャラを出しすぎて、帰宅後に無になる。",
      "本当は嫌なことを、嫌と言えずに笑って流す。",
      "自由になりたいけど、ちゃんとしている自分も捨てられない。",
    ],
    deepScenes: [
      "店用の自分、SNS用の自分、好きな人用の自分で、本体が一番迷子になる。",
      "『こう見られたい』に合わせすぎて、素の自分がログアウトしている。",
      "全部投げ出したいのに、明日の準備だけはちゃんとしているのがしんどい。",
    ],
    worldLine: "自由はわがままじゃない。みちるは、自分を取り戻すための出口として現れます。",
    archive: "誰にも決められない自分でいたい気持ち。",
  },
  regret: {
    order: "005",
    name: "くゆり",
    en: "REGRET / 後悔",
    characterName: "くゆり",
    emotionLabel: "後悔",
    worldName: "くゆり",
    motif: "手帳と月",
    theme: "過去を思い出してしまうけど、それでも大切に抱えている気持ち",
    characterImage: "./assets/characters/kuyuri-character.png",
    resultImage: "./assets/characters/kuyuri-result.png",
    supportImage: "./assets/characters/kuyuri-support.png",
    accent: ["#87d8ff", "#b9eeff"],
    definition: "くゆりは、終わったはずの場面をまだ抱えている夜に現れる住人です。",
    description:
      "あなたは、終わった会話や選択をあとから何度も見返してしまう状態です。あの時こう言えばよかった、もっと可愛くできた、あの返し変だったかも。くゆりは、その過去を責めるためではなく、優しく抱えるために現れます。",
    deepDescription:
      "今のあなたは、くゆりが同じページを何十回も開いている状態です。寝る前の脳内反省会が長すぎて、もはや夜より自分への説教が本編。終わった会話を再生して、毎回違う選択肢を選び直している。もう変えられないのに、頭の中ではまだ延長戦をしている夜です。",
    shareLine: "終わったはずの場面を、頭の中で何回もやり直す夜。",
    sceneTitle: "後悔あるある",
    lightScenes: [
      "退勤後、今日の返しを思い出して『もっと可愛く言えた』ってなる。",
      "お風呂中に昔の会話のミスを思い出して、普通に一回終わる。",
      "相手は忘れてそうな一言を、自分だけが高画質で保存している。",
    ],
    deepScenes: [
      "寝る前の脳内反省会が長すぎて、もはや店より自分への説教が本業になる。",
      "終わった会話を何番勝負かってくらい再生して、毎回違う選択肢を選び直す。",
      "誰も責めてないのに、自分だけが自分を永久指名で詰め続けている。",
    ],
    worldLine: "後悔は終わりじゃない。くゆりは、過去をまだ大切に抱えている気持ちです。",
    archive: "過去を思い出してしまうけど、それでも大切に抱えている気持ち。",
  },
};

const questions = [];

const resultViewCopy = {
  affection: {
    emotion: "愛情",
    partner: "めろあ",
    typeName: "好きが接客に漏れるタイプ",
    light: [
      "初回卓で聞いた好きなもの、次の出勤まで普通に覚えてる。",
      "お礼DMを短くするつもりが、気づいたらしっかり長文。",
      "シャンパン後、『営業だし』と思いながら普通に一日機嫌いい。",
    ],
    deep: [
      "優しい常連の一言で、その日のテンション全部決まる。",
      "返信が遅いだけで『嫌われた？』ってスマホ見て発狂しかける。",
      "好きな卓だけ目も声も甘くなって、隠す気ある？状態になる。",
    ],
    support: "人を大切にしようとする接客は、重いんじゃなくて強みです。売上や数字だけじゃなく、相手の時間を良くしたいと思えるところがあなたの魅力です。",
  },
  fear: {
    emotion: "恐怖",
    partner: "ふろむ",
    typeName: "空気を読みすぎるタイプ",
    light: [
      "卓が静かになると『今つまんない？』ってすぐ焦る。",
      "シャンパンもらって嬉しいのに、喜び方が正解か不安になる。",
      "初回卓で少し強い冗談を言われると、笑いながら内心ビビる。",
    ],
    deep: [
      "客の『うん』だけで『怒ってる？』って勝手に終わる。",
      "店内が静かなだけで、自分のせいにして脳内反省会スタート。",
      "DMの返信が短いと、嫌われた説で頭が埋まる。",
    ],
    support: "空気を読む力が強い人ほど、先に不安まで拾います。それは弱さではなく、場内を壊さないための観察力です。使いすぎた日だけ、自分を責めないでください。",
  },
  solitude: {
    emotion: "孤独",
    partner: "くれす",
    typeName: "満卓でもひとりになるタイプ",
    light: [
      "満卓だったのに、退勤後『今日誰とも本音話してない』になる。",
      "ずっと笑ってたのに、帰り道で急に無になる。",
      "通知は多いのに、欲しい一言がなくて普通に寂しくなる。",
    ],
    deep: [
      "一日中しゃべったのに、帰り道で孤独すぎて笑えない。",
      "『人気あるじゃん』と言われても、素の自分は誰も知らないと思う。",
      "家に着いた瞬間スイッチが切れて『何のために頑張った？』になる。",
    ],
    support: "たくさん話したのに孤独が残るのは、会話量の問題ではありません。本音を出せなかった日ほど、あとから静かに疲れます。あなたが薄いわけではありません。",
  },
  freedom: {
    emotion: "自由",
    partner: "みちる",
    typeName: "キャラ固定されたくないタイプ",
    light: [
      "求められるキャラはできる。でも毎回それだと普通に飽きる。",
      "SNS用の自分と店用の自分を切り替えすぎて疲れる。",
      "予約もDMも嬉しいけど、自分の時間まで奪われると無理。",
    ],
    deep: [
      "『こういう子だよね』と決めつけられると、全部逆をやりたくなる。",
      "可愛い・面白い・聞き上手を全部やらされると爆発寸前。",
      "予定と通知で埋まると、全部投げて消えたくなる。",
    ],
    support: "キャラを変えたい、距離を取りたい、自分のペースを守りたい。それは冷たさではありません。長く続けるために、自分の輪郭を残そうとしているだけです。",
  },
  regret: {
    emotion: "後悔",
    partner: "くゆり",
    typeName: "退勤後に脳内反省会するタイプ",
    light: [
      "チェキの顔と返しを、退勤後に見返して一人反省。",
      "『さっきの言い方きつかった？』が風呂で急に来る。",
      "お礼DMを送ったあと、誤字と温度感を何回も見る。",
    ],
    deep: [
      "終わった卓を頭の中で再放送して、別ルートを探し続ける。",
      "客は帰って寝てるのに、自分だけ深夜の接客裁判してる。",
      "『もっと可愛く返せた』で、朝まで自分にキレてる。",
    ],
    support: "終わった会話を見直すのは、雑にやっていない証拠です。反省できる人は伸びます。ただ、全部を自分のせいにしなくて大丈夫です。",
  },
};

const supportMessages = {
  affection: {
    title: "愛情を抱えているあなたへ",
    line: "人を大切にしようとする接客は、重いんじゃなくて強みです。売上や数字だけじゃなく、相手の時間を良くしたいと思えるところがあなたの魅力です。",
  },
  fear: {
    title: "恐怖を抱えているあなたへ",
    line: "空気を読む力が強い人ほど、先に不安まで拾います。それは弱さではなく、場内を壊さないための観察力です。使いすぎた日だけ、自分を責めないでください。",
  },
  solitude: {
    title: "孤独を抱えているあなたへ",
    line: "たくさん話したのに孤独が残るのは、会話量の問題ではありません。本音を出せなかった日ほど、あとから静かに疲れます。あなたが薄いわけではありません。",
  },
  freedom: {
    title: "自由を抱えているあなたへ",
    line: "キャラを変えたい、距離を取りたい、自分のペースを守りたい。それは冷たさではありません。長く続けるために、自分の輪郭を残そうとしているだけです。",
  },
  regret: {
    title: "後悔を抱えているあなたへ",
    line: "終わった会話を見直すのは、雑にやっていない証拠です。反省できる人は伸びます。ただ、全部を自分のせいにしなくて大丈夫です。",
  },
};

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const answerLetters = ["A", "B", "C", "D"];
const emotionKeys = ["affection", "fear", "solitude", "freedom", "regret"];
const questionMoods = [
  "street",
  "mirror",
  "phone",
  "draft",
  "closet",
  "bed",
  "bath",
  "window",
  "ceiling",
  "dawn",
];
const questionGuides = [
  "fear",
  "solitude",
  "affection",
  "regret",
  "freedom",
  "solitude",
  "regret",
  "freedom",
  "fear",
  "affection",
];

questions.splice(0, questions.length, ...[
  {
    scene: "SCENE 01 / 初回卓。はじめましての空気を、笑顔で受け止める。",
    text: "初回卓で、まず意識することは？",
    answers: [
      ["相手の話す速度やテンションに合わせる", "fear", ""],
      ["まず名前や好きなものを覚える", "affection", ""],
      ["自分のキャラが伝わる話題を出す", "freedom", ""],
      ["自分の話は出しすぎず、相手の温度を見る", "solitude", ""],
    ],
  },
  {
    scene: "SCENE 02 / お茶。店内は動いているのに、自分の前だけ静か。",
    text: "お茶の時間、どう動く？",
    answers: [
      ["来てくれた人へのお礼を先に考える", "affection", ""],
      ["バックヤードで気持ちを整える", "solitude", ""],
      ["メイクや髪を直して気分を切り替える", "freedom", ""],
      ["さっきの卓で拾った会話をメモする", "regret", ""],
    ],
  },
  {
    scene: "SCENE 03 / 推しって言われた。営業中だから、喜び方にも加減がいる。",
    text: "推しって言われた時、返し方は？",
    answers: [
      ["軽く受けつつ、次も来やすい空気を作る", "fear", ""],
      ["ちゃんと喜んで、相手にも伝わるように返す", "affection", ""],
      ["自分の気持ちは出しすぎず、相手の言葉を受け止める", "solitude", ""],
      ["あとで使えるように、その言葉を覚えておく", "regret", ""],
    ],
  },
  {
    scene: "SCENE 04 / チェキ。盛れたいし、ポーズ事故もしたくない。",
    text: "チェキ前、まず考えることは？",
    answers: [
      ["無理に盛り上げず、自然な表情で撮る", "solitude", ""],
      ["相手が喜ぶポーズを提案する", "affection", ""],
      ["自分らしいポーズで印象を残す", "freedom", ""],
      ["次回も話題にできる一枚にする", "regret", ""],
    ],
  },
  {
    scene: "SCENE 05 / シャンパンを入れてもらえた。店内の空気が変わる。",
    text: "シャンパンをもらった時、最初にすることは？",
    answers: [
      ["周りにも伝わるように、しっかり盛り上げる", "fear", ""],
      ["相手に向けて、ちゃんとお礼を伝える", "affection", ""],
      ["写真や動画で、自分らしく残す", "freedom", ""],
      ["写真より、その場の空気をちゃんと覚えておく", "solitude", ""],
    ],
  },
  {
    scene: "SCENE 06 / 隣の卓がかなり盛り上がっている。自分の席にも笑顔はある。",
    text: "隣の卓が盛り上がっている時、どうする？",
    answers: [
      ["自分の卓の空気を崩さないようにする", "fear", ""],
      ["周りを見すぎず、目の前の会話に戻す", "solitude", ""],
      ["比べずに、自分の見せ方を変える", "freedom", ""],
      ["盛り上がっている理由を見て学ぶ", "regret", ""],
    ],
  },
  {
    scene: "SCENE 07 / 来店予定の話。また来るね、予約するねと言われた。",
    text: "また来るねと言われた時、返し方は？",
    answers: [
      ["日程や予定を自然に確認する", "fear", ""],
      ["素直に喜んで、次も楽しみにしてると伝える", "affection", ""],
      ["軽く返して、期待しすぎない距離を保つ", "solitude", ""],
      ["次に話す内容まで考えておく", "regret", ""],
    ],
  },
  {
    scene: "SCENE 08 / 卓についている間、スマホの未読が増えている。",
    text: "卓についている間、スマホの未読が増えていたら？",
    answers: [
      ["誰から来ているかだけ気になってしまう", "fear", ""],
      ["通知より、今の卓の空気を切らさないことを優先する", "solitude", ""],
      ["見ないと決めたら、閉店までスマホを置いておく", "freedom", ""],
      ["終わったあとに返す文章を、頭の中で考え始める", "regret", ""],
    ],
  },
  {
    scene: "SCENE 09 / 閉店前。今日最後の卓で、まだ笑顔を作っている。",
    text: "閉店前の卓で、意識することは？",
    answers: [
      ["最後までテンションを落とさない", "fear", ""],
      ["今日話した内容をちゃんと覚えて帰す", "affection", ""],
      ["疲れを出さずに、自分のペースで締める", "freedom", ""],
      ["明日につながる一言を残す", "regret", ""],
    ],
  },
  {
    scene: "SCENE 10 / 営業後。今日の自分を振り返る。",
    text: "今日の営業を一言で言うなら？",
    answers: [
      ["場内の空気をかなり見ていた", "fear", ""],
      ["目の前の人を大切にできた", "affection", ""],
      ["自分の見せ方を守れた", "freedom", ""],
      ["次はもっと良くできると思った", "regret", ""],
    ],
  },
]);

const screens = {
  intro: document.querySelector("#intro"),
  quiz: document.querySelector("#quiz"),
  interlude: document.querySelector("#interlude"),
  result: document.querySelector("#result"),
  archive: document.querySelector("#archive"),
};

const elements = {
  currentNumber: document.querySelector("#current-number"),
  progress: document.querySelector("#progress-fill"),
  progressTrack: document.querySelector(".progress-track"),
  questionScene: document.querySelector("#question-scene"),
  questionRoman: document.querySelector("#question-roman"),
  questionText: document.querySelector("#question-text"),
  answers: document.querySelector("#answers"),
  choiceEcho: document.querySelector("#choice-echo"),
  encounterPanel: document.querySelector("#encounter-panel"),
  encounterImage: document.querySelector("#encounter-image"),
  encounterName: document.querySelector("#encounter-name"),
  encounterNext: document.querySelector("#encounter-next"),
  back: document.querySelector("#back-button"),
  resultEmotion: document.querySelector("#result-emotion"),
  resultEn: document.querySelector("#result-en"),
  resultMainArt: document.querySelector("#result-main-art"),
  resultDefinition: document.querySelector("#result-definition"),
  resultDescription: document.querySelector("#result-description"),
  sceneTitle: document.querySelector("#scene-title"),
  sceneList: document.querySelector("#scene-list"),
  emotionNumber: document.querySelector("#emotion-number"),
  worldName: document.querySelector("#world-name"),
  worldLine: document.querySelector("#world-line"),
  characterFrame: document.querySelector("#character-frame"),
  characterImage: document.querySelector("#character-image"),
  characterPlaceholder: document.querySelector("#character-placeholder"),
  characterSectionTitle: document.querySelector("#character-section-title"),
  characterName: document.querySelector("#character-name"),
  characterTheme: document.querySelector("#character-theme"),
  collectionName: document.querySelector("#collection-name"),
  collectionLine: document.querySelector("#collection-line"),
  baseLink: document.querySelector("#base-link"),
  canvas: document.querySelector("#share-canvas"),
  saveStatus: document.querySelector("#save-status"),
  imageModal: document.querySelector("#image-modal"),
  imagePreview: document.querySelector("#result-image-preview"),
  imageDownload: document.querySelector("#image-download"),
  quizGuide: document.querySelector("#quiz-guide"),
  guideImage: document.querySelector("#guide-image"),
  guideName: document.querySelector("#guide-name"),
  guideHint: document.querySelector("#guide-hint"),
};

let currentQuestion = 0;
let responses = [];
let resultKey = "solitude";
let resultDepth = "light";
let resultImageUrl = "";
let pendingAdvance = false;
const lightTransitionMs = 360;
const deepTransitionMs = 860;

const characterArtworkImages = {};
Object.entries(emotions).forEach(([key, emotion]) => {
  const image = new Image();
  image.src = emotion.resultImage || emotion.characterImage;
  characterArtworkImages[key] = image;
});

function getActiveScenes(emotion) {
  return resultDepth === "deep" ? emotion.deepScenes : emotion.lightScenes;
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  currentQuestion = 0;
  responses = [];
  document.body.className = "";
  renderQuestion();
  showScreen("quiz");
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const displayNumber = String(currentQuestion + 1).padStart(2, "0");
  const guideKey = questionGuides[currentQuestion] || "solitude";
  const guide = emotions[guideKey];
  document.body.dataset.questionMood = questionMoods[currentQuestion] || "night";
  document.body.dataset.questionPhase = currentQuestion < 5 ? "light" : "deep";
  document.body.dataset.guide = guideKey;
  document.body.classList.remove("is-guiding");
  document.body.classList.remove("is-door-opening");
  elements.quizGuide?.classList.remove("is-guiding");
  elements.quizGuide?.classList.add("is-waiting");
  if (elements.guideImage) {
    elements.guideImage.src = guide.characterImage;
    elements.guideImage.alt = `${guide.characterName} guide`;
  }
  if (elements.guideName) elements.guideName.textContent = guide.characterName;
  if (elements.guideHint) elements.guideHint.textContent = "この場面を見ている住人";
  elements.currentNumber.textContent = displayNumber;
  if (elements.questionScene) elements.questionScene.textContent = question.scene;
  elements.questionRoman.textContent = romanNumerals[currentQuestion];
  elements.questionText.textContent = question.text;
  elements.progress.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  elements.progressTrack.setAttribute("aria-valuenow", String(currentQuestion + 1));
  elements.back.disabled = currentQuestion === 0;
  elements.answers.innerHTML = "";
  elements.choiceEcho.textContent = "";
  elements.encounterPanel.hidden = true;
  elements.encounterPanel.className = "encounter-panel";
  elements.encounterImage.removeAttribute("src");
  elements.encounterImage.alt = "";
  elements.encounterName.textContent = "";
  if (elements.encounterNext) elements.encounterNext.textContent = "この子に案内してもらう";
  pendingAdvance = false;

  question.answers.forEach(([text, emotion, echo], index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `<span>${answerLetters[index]}</span><strong>${text}</strong>`;
    button.addEventListener("click", () => chooseAnswer(emotion, button, echo));
    elements.answers.appendChild(button);
  });
}

function chooseAnswer(emotion, button, echo) {
  if (button.classList.contains("is-selected") || pendingAdvance) return;
  elements.answers.querySelectorAll("button").forEach((item) => {
    item.disabled = true;
  });
  button.classList.add("is-selected");
  const guideKey = questionGuides[currentQuestion] || "solitude";
  const guide = emotions[guideKey];
  document.documentElement.style.setProperty("--accent", guide.accent[1]);
  elements.quizGuide?.classList.remove("is-waiting");
  document.body.dataset.guide = guideKey;
  if (elements.guideImage) {
    elements.guideImage.src = guide.characterImage;
    elements.guideImage.alt = `${guide.characterName} guide`;
  }
  if (elements.guideName) elements.guideName.textContent = guide.characterName;
  responses[currentQuestion] = emotion;
  transitionToNextQuestion();
}

function transitionToNextQuestion() {
  pendingAdvance = true;
  document.body.classList.add("is-door-opening");
  const transitionMs = currentQuestion < 5 ? lightTransitionMs : deepTransitionMs;
  window.setTimeout(() => {
    pendingAdvance = false;
    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      renderQuestion();
    } else {
      document.body.classList.remove("is-door-opening");
      calculateResult();
    }
  }, transitionMs);
}

function advanceAfterEncounter() {
  if (!pendingAdvance) return;
  transitionToNextQuestion();
}
function calculateResult() {
  const scores = Object.keys(emotions).reduce((all, key) => {
    all[key] = 0;
    return all;
  }, {});
  responses.forEach((emotion) => {
    scores[emotion] += 1;
  });

  const highestScore = Math.max(...emotionKeys.map((key) => scores[key]));
  const tiedResults = emotionKeys.filter((key) => scores[key] === highestScore);
  const tieSeed = responses.reduce((seed, emotion, index) => {
    return seed + emotionKeys.indexOf(emotion) * (index + 3);
  }, responses.length);
  resultKey = tiedResults[tieSeed % tiedResults.length];
  resultDepth = scores[resultKey] >= 4 ? "deep" : "light";

  showScreen("interlude");
  window.setTimeout(() => {
    renderResult(resultKey);
    showScreen("result");
  }, 4400);
}

function renderResult(key) {
  const emotion = emotions[key];
  const view = resultViewCopy[key];
  const support = supportMessages[key];
  resultKey = key;
  document.body.className = `result-${key} depth-${resultDepth}`;
  document.documentElement.style.setProperty("--accent", emotion.accent[1]);
  elements.resultEmotion.textContent = view.emotion;
  elements.resultEn.textContent = `PARTNER / ${view.partner}`;
  elements.resultDefinition.textContent = `あなたは「${view.typeName}」。`;
  elements.resultDescription.textContent = support.line;
  if (elements.resultMainArt) {
    elements.resultMainArt.src = emotion.resultImage || emotion.characterImage;
    elements.resultMainArt.alt = "";
  }
  const activeScenes = resultDepth === "deep" ? view.deep : view.light;
  elements.sceneTitle.textContent = `${resultDepth === "deep" ? "重度" : "軽度"}の${view.emotion}あるある`;
  elements.sceneList.innerHTML = activeScenes.map((scene) => `<li>${scene}</li>`).join("");
  elements.emotionNumber.textContent = emotion.order;
  elements.worldName.textContent = `あなたのパートナーは、${view.partner}`;
  elements.worldLine.textContent = support.line;
  if (elements.characterSectionTitle) {
    elements.characterSectionTitle.textContent = `${emotion.emotionLabel}の化身 ${emotion.characterName}`;
  }
  if (elements.characterSectionTitle) {
    elements.characterSectionTitle.textContent = `あなたのパートナー：${view.partner}`;
  }
  elements.characterName.textContent = view.partner;
  elements.characterTheme.textContent = support.line;
  elements.collectionName.textContent = `${emotion.worldName}の夜`;
  elements.collectionLine.textContent =
    `${emotion.worldName}は、LUNAPHの世界で「${emotion.emotionLabel}」から生まれる住人です。Instagramでは、営業中に隠した感情が姿を持つ夜の物語を見られます。`;
  elements.baseLink.href = INSTAGRAM_URL;
  const funnelTitle = document.querySelector("#funnel-title");
  const supportLine = document.querySelector("#support-line") || document.querySelector(".funnel p:not(.eyebrow)");
  const supportCharacter = document.querySelector("#support-character-image");
  if (funnelTitle) funnelTitle.textContent = support.title;
  if (supportLine) supportLine.textContent = support.line;
  if (supportCharacter) {
    supportCharacter.src = emotion.supportImage || emotion.resultImage || emotion.characterImage;
    supportCharacter.alt = `${view.partner} image`;
  }
  setImageFrame(
    elements.characterFrame,
    elements.characterImage,
    elements.characterPlaceholder,
    emotion.resultImage || emotion.characterImage,
    `${emotion.characterName} character`,
    emotion.motif,
  );
  elements.saveStatus.textContent = "";
}

function setImageFrame(frame, image, placeholder, source, alt, label) {
  const showPlaceholder = () => {
    frame.classList.remove("has-image");
    image.hidden = true;
    image.removeAttribute("src");
    image.alt = "";
    placeholder.hidden = false;
    placeholder.textContent = label;
  };

  if (!source) {
    showPlaceholder();
    return;
  }

  frame.classList.add("has-image");
  image.hidden = false;
  placeholder.hidden = true;
  placeholder.textContent = label;
  image.onerror = showPlaceholder;
  image.onload = () => {
    frame.classList.add("has-image");
    image.hidden = false;
    placeholder.hidden = true;
  };
  image.src = source;
  image.alt = alt;
}

function goBack() {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  responses = responses.slice(0, currentQuestion);
  renderQuestion();
}

function shareOnX() {
  const view = resultViewCopy[resultKey];
  const activeScenes = resultDepth === "deep" ? view.deep : view.light;
  const text = `営業中の裏感情診断、私は「${view.typeName}」でした。\n${activeScenes[0]}\n\n#LUNAPH #営業中の裏感情診断`;
  const url = window.location.protocol.startsWith("http") ? window.location.href : "";
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  window.open(shareUrl, "_blank", "noopener,noreferrer,width=650,height=520");
}

function shareOnLine() {
  const emotion = emotions[resultKey];
  const text = `私の夜に現れた住人は「${emotion.name}」でした。${emotion.shareLine}`;
  const url = window.location.protocol.startsWith("http") ? window.location.href : "";
  window.open(
    `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

function drawShareImage() {
  const emotion = emotions[resultKey];
  const view = resultViewCopy[resultKey];
  const activeScenes = resultDepth === "deep" ? view.deep : view.light;
  const resultCopy = supportMessages[resultKey].line;
  const canvas = elements.canvas;
  const context = canvas.getContext("2d");
  const gradient = context.createLinearGradient(0, 0, 1080, 1350);
  gradient.addColorStop(0, "#110820");
  gradient.addColorStop(0.55, "#160f2a");
  gradient.addColorStop(1, "#05040a");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const art = getLoadedCharacterImage(resultKey);
  if (art?.complete && art.naturalWidth) {
    context.save();
    context.globalAlpha = 0.27;
    drawCoverImage(context, art, 520, 0, 560, 1350);
    context.restore();
  }

  const glow = context.createRadialGradient(820, 220, 10, 820, 220, 520);
  glow.addColorStop(0, `${emotion.accent[1]}55`);
  glow.addColorStop(1, "rgba(0,0,0,0)");
  context.fillStyle = glow;
  context.fillRect(0, 0, 1080, 1350);

  context.fillStyle = "rgba(5,4,10,.48)";
  context.fillRect(0, 0, 1080, 1350);

  context.strokeStyle = "rgba(255,255,255,.18)";
  context.strokeRect(70, 76, 940, 1198);
  context.fillStyle = "#f5f0ff";
  context.font = "600 27px Arial";
  context.fillText("LUNAPH", 92, 138);
  context.fillStyle = "#c5acd9";
  context.font = "21px serif";
  context.fillText("営業中の裏感情が、夜に姿を持つ。", 92, 308);

  context.fillStyle = "#f7f3ff";
  context.font = "300 118px 'Yu Mincho', serif";
  context.fillText(view.emotion, 88, 500);
  context.fillStyle = emotion.accent[1];
  context.font = "18px Arial";
  context.fillText(`${emotion.en} / ${resultDepth === "deep" ? "DEEP" : "LIGHT"}`, 94, 568);

  context.fillStyle = "#eee9f4";
  context.font = "31px 'Yu Mincho', serif";
  wrapCanvasText(context, `あなたは、${view.typeName}`, 92, 700, 860, 52);
  context.fillStyle = "#d6d0df";
  context.font = "25px 'Yu Mincho', serif";
  wrapCanvasText(context, activeScenes[0], 92, 845, 850, 46);
  context.fillStyle = "#bdb5c8";
  context.font = "21px 'Yu Mincho', serif";
  wrapCanvasText(context, resultCopy, 92, 1000, 850, 40);
  context.fillStyle = "#90889d";
  context.font = "17px Arial";
  context.fillText("#LUNAPH  #営業中の裏感情診断", 92, 1220);
  return canvas;
}

function getLoadedCharacterImage(key) {
  const preloaded = characterArtworkImages[key];
  if (preloaded?.complete && preloaded.naturalWidth) return preloaded;
  if (elements.characterImage?.complete && elements.characterImage.naturalWidth) return elements.characterImage;
  return null;
}

function drawCoverImage(context, image, x, y, width, height) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const drawWidth = image.naturalWidth * scale;
  const drawHeight = image.naturalHeight * scale;
  context.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
}

function wrapCanvasText(context, text, x, y, maxWidth, lineHeight) {
  let line = "";
  let lineY = y;
  [...text].forEach((character) => {
    const testLine = line + character;
    if (context.measureText(testLine).width > maxWidth && line) {
      context.fillText(line, x, lineY);
      line = character;
      lineY += lineHeight;
    } else {
      line = testLine;
    }
  });
  context.fillText(line, x, lineY);
}

function closeImageModal() {
  elements.imageModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function saveImage() {
  const emotion = emotions[resultKey];
  const wallpaper = emotion.resultImage || emotion.characterImage;
  const filename = `LUNAPH_wallpaper_${resultKey}.png`;
  if (resultImageUrl?.startsWith("blob:")) URL.revokeObjectURL(resultImageUrl);
  resultImageUrl = wallpaper;
  elements.imagePreview.src = wallpaper;
  elements.imageDownload.href = wallpaper;
  elements.imageDownload.download = filename;
  elements.imageDownload.textContent = "壁紙を保存";
  elements.imageModal.hidden = false;
  document.body.classList.add("modal-open");
  elements.saveStatus.textContent = "この住人の壁紙画像を保存できます。";
}

function renderArchive() {
  const grid = document.querySelector("#emotion-grid");
  grid.innerHTML = Object.values(emotions)
    .sort((a, b) => a.order.localeCompare(b.order))
    .map(
      (emotion) => `
        <article class="emotion-entry">
          <span>${emotion.order}</span>
          <p>${emotion.characterName} / ${emotion.emotionLabel}</p>
          <h3>${emotion.name}</h3>
          <small>${emotion.en}</small>
          <p>${emotion.theme}<br />${emotion.archive}</p>
        </article>
      `,
    )
    .join("");
}

document.querySelector("#start-button").addEventListener("click", startQuiz);
document.querySelectorAll("[data-start-proxy]").forEach((button) => {
  button.addEventListener("click", startQuiz);
});
document.querySelector("#back-button").addEventListener("click", goBack);
document.querySelector("#encounter-next").addEventListener("click", advanceAfterEncounter);
const shareButton = document.querySelector("#share-button");
shareButton.textContent = "結果をXで投稿";
shareButton.addEventListener("click", shareOnX);
const lineShareButton = document.querySelector("#line-share-button");
lineShareButton.hidden = true;
lineShareButton.addEventListener("click", shareOnLine);
const saveButton = document.querySelector("#save-button");
saveButton.textContent = "壁紙を受け取る";
saveButton.addEventListener("click", saveImage);
document.querySelector("#retry-button").addEventListener("click", startQuiz);
document.querySelector("#emotion-guide-button").addEventListener("click", () => showScreen("archive"));
document.querySelector("#archive-back").addEventListener("click", () => showScreen("result"));
document.querySelectorAll("[data-close-image]").forEach((button) => {
  button.addEventListener("click", closeImageModal);
});
document.querySelectorAll("[data-home]").forEach((button) => {
  button.addEventListener("click", () => showScreen("intro"));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.imageModal.hidden) closeImageModal();
});

document.querySelector("#line-register-link").href = INSTAGRAM_URL;
renderArchive();
