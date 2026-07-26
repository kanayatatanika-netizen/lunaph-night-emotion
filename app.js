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
    accent: ["#d889ad", "#f2a6c8"],
    definition: "めろあは、好きすぎる自分を否定しなくていい夜に現れる住人です。",
    description:
      "あなたは、人を大切にできるぶん、相手の一言で一日の温度が変わりやすい状態です。返信、表情、声のトーンをちゃんと見てしまう。重いんじゃなくて、心の向け方が丁寧すぎるだけです。",
    deepDescription:
      "今のあなたは、めろあがベッドの真ん中で白薔薇を抱えて座っている状態です。好きな人の返信が遅いだけで支度が止まり、相手の機嫌ひとつで今日の自分の価値まで決めそうになる。生活のリモコンを相手に渡しかけています。でもそれは、愛せる力が強すぎて置き場所を失っているだけです。",
    shareLine: "好きな人の一言で、一日の価値が決まってしまう夜。",
    sceneTitle: "めろあの夜あるある",
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
    accent: ["#05050a", "#111018"],
    definition: "ふろむは、まだ起きていない怖さを先に見つけてしまう夜に現れる住人です。",
    description:
      "あなたは危険に気づくのが早い状態です。空気の変化、既読の間、相手の声色を普通の人より細かく拾ってしまう。怖がりというより、心の警報がよく働きすぎています。",
    deepDescription:
      "今のあなたは、ふろむが頭の中で警報を鳴らしっぱなしの状態です。何も起きてないのに、もう終わった気がする。返信が短い、目線が違う、誰かの一言が雑だった。それだけで最悪の未来まで勝手に上映されて、まだ怪我してないのに心だけ全身包帯です。",
    shareLine: "何も起きてないのに、心だけ先に最悪まで行ってしまう夜。",
    sceneTitle: "ふろむの夜あるある",
    lightScenes: [
      "返信が少し短いだけで、嫌われた可能性を考え始める。",
      "店の空気が少し変わると、全部自分のせいかもと思う。",
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
    accent: ["#807cc2", "#d9d4ff"],
    definition: "くれすは、人の中にいた日の帰り道に現れる、そばにいてほしかった気持ちです。",
    description:
      "あなたは、誰かと会ったあとほど孤独が強くなる状態です。昼も夜もちゃんと話せる。でも本音だけ置いてきたような感覚が残る。くれすは、その言葉になる前の寂しさを抱えて現れます。",
    deepDescription:
      "今のあなたは、くれすが帰り道の端っこで待っている状態です。人前では笑えていたのに、帰宅した瞬間に急に無音が刺さる。通知はあるのに、欲しい人からの言葉だけない。誰かといた日の方が、ひとりが濃くなる。正直、布団に入った瞬間が一番きつい夜です。",
    shareLine: "人と会った日の帰り道ほど、ひとりが濃くなる夜。",
    sceneTitle: "くれすの夜あるある",
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
    accent: ["#e7bd56", "#ffe7a1"],
    definition: "みちるは、誰か用の自分から抜け出したい夜に現れる住人です。",
    description:
      "あなたは、求められる自分を演じるのが上手です。だからこそ、たまに自分がどこにいるのかわからなくなる。みちるは、ちゃんとした自分の外側へ連れていくために現れます。",
    deepDescription:
      "今のあなたは、みちるが窓を全開にしている状態です。店用、SNS用、好きな人用、友達用の自分を切り替えすぎて、本体が迷子です。『こう見られたい』に合わせ続けて、素の自分だけログアウトしかけています。自由になりたいのは逃げじゃなく、生存ルートです。",
    shareLine: "ちゃんとしているほど、自分だけが置いていかれる夜。",
    sceneTitle: "みちるの夜あるある",
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
    accent: ["#8e95c8", "#cfd9ff"],
    definition: "くゆりは、終わったはずの場面をまだ抱えている夜に現れる住人です。",
    description:
      "あなたは、終わった会話や選択をあとから何度も見返してしまう状態です。あの時こう言えばよかった、もっと可愛くできた、あの返し変だったかも。くゆりは、その過去を責めるためではなく、優しく抱えるために現れます。",
    deepDescription:
      "今のあなたは、くゆりが同じページを何十回も開いている状態です。寝る前の脳内反省会が長すぎて、もはや夜より自分への説教が本編。終わった会話を再生して、毎回違う選択肢を選び直している。もう変えられないのに、頭の中ではまだ延長戦をしている夜です。",
    shareLine: "終わったはずの場面を、頭の中で何回もやり直す夜。",
    sceneTitle: "くゆりの夜あるある",
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
    light: [
      "好きな人の返信で、その日の気分が少し変わる。",
      "優しくしたあとに、重かったかなと考える。",
      "平気なふりをするけど、本当はもっと大事にされたい。",
    ],
    deep: [
      "通知が来ないだけで、脳内で破局会見が始まる。",
      "相手の機嫌が悪いと、自分の存在価値まで一緒に下がる。",
      "好きな人中心に一日が回って、もはや自分の予定がサブ扱い。",
    ],
    support: "好きすぎる君でも大丈夫。愛情が大きいのは、誰かを本気で大切にできる証拠だから。",
  },
  fear: {
    emotion: "恐怖",
    partner: "ふろむ",
    light: [
      "予定の前に、失敗パターンを先に考える。",
      "相手の反応が少し薄いだけで、不安になる。",
      "何も起きてないのに、念のため最悪を想像する。",
    ],
    deep: [
      "返信が遅いだけで、嫌われた・怒らせた・終わったをフルセットで考える。",
      "起きてもいない失敗で、もう謝罪文まで作っている。",
      "大丈夫な日でも、脳内だけ常に非常ベルが鳴っている。",
    ],
    support: "怖がる君でも大丈夫。ふろむは、君を壊すためじゃなく守ろうとして現れている。",
  },
  solitude: {
    emotion: "孤独",
    partner: "くれす",
    light: [
      "人といた帰り道ほど、急にひとりを感じる。",
      "通知はあるのに、今ほしい言葉だけが来ない。",
      "楽しかった日の夜ほど、部屋の静けさが濃くなる。",
    ],
    deep: [
      "誰かと会った直後なのに、家に着いた瞬間『結局ひとり』が来る。",
      "スマホを開いて閉じてまた開く。来てほしい人からだけ来ない。",
      "寂しいって言ったら負けな気がして、平気なふりのまま沈む。",
    ],
    support: "寂しい君でも大丈夫。くれすは、ひとりの夜にそばにいてほしかった気持ちだから。",
  },
  freedom: {
    emotion: "自由",
    partner: "みちる",
    light: [
      "誰かに合わせたあと、急に全部投げ出したくなる。",
      "予定が詰まると、自分が薄くなっていく感じがする。",
      "ちゃんとしているほど、どこか遠くへ行きたくなる。",
    ],
    deep: [
      "人に合わせすぎて、自分の本体が行方不明。",
      "『ちゃんとしなきゃ』をやりすぎて、帰宅後に全部捨てたくなる。",
      "自由になりたいのに、予定を空けた瞬間なにしていいか分からない。",
    ],
    support: "逃げたくなる君でも大丈夫。みちるは、君が君に戻るための出口を探している。",
  },
  regret: {
    emotion: "後悔",
    partner: "くゆり",
    light: [
      "帰り道に、今日の言い方を少し思い返す。",
      "相手は忘れてそうな一言を、自分だけ覚えている。",
      "寝る前に、あの時こう言えばよかったが始まる。",
    ],
    deep: [
      "終わった会話を脳内で30回リテイクしている。",
      "相手は寝てるのに、自分だけ反省会の深夜営業中。",
      "過去の一言にまだ刺されていて、今日の自分まで動きが鈍い。",
    ],
    support: "引きずる君でも大丈夫。くゆりは、過去を大切に抱えている気持ちから生まれた子だから。",
  },
};

const supportMessages = {
  affection: {
    title: "しおんから、愛情を抱えているあなたへ",
    line: "大丈夫。好きが大きい日は、相手より先に自分を責めがちになる。でも、愛情が重く見える夜は、それだけ本気で大切にしたかった夜でもあるよ。君の気持ちは、消さなくていい。",
  },
  fear: {
    title: "しおんから、恐怖を抱えているあなたへ",
    line: "大丈夫。怖がる自分を弱いと思わなくていい。最悪を考えすぎる夜は、ちゃんと傷つきたくなかっただけ。君は壊れてない。ただ、心が先回りして守ろうとしているだけだよ。",
  },
  solitude: {
    title: "しおんから、孤独を抱えているあなたへ",
    line: "大丈夫。人といたのに寂しくなる夜があっても、それはわがままじゃない。笑えていた日ほど、帰ってから急に静かになることもある。そんな君でも、ちゃんとここにいていいよ。",
  },
  freedom: {
    title: "しおんから、自由を抱えているあなたへ",
    line: "大丈夫。全部投げ出したくなる夜があっても、それは逃げたいだけじゃない。誰か用の自分を頑張りすぎた証拠。少しずつでいいから、君のための呼吸を取り戻していいよ。",
  },
  regret: {
    title: "しおんから、後悔を抱えているあなたへ",
    line: "大丈夫。終わったことを何度も思い出す君は、だめな人じゃない。ちゃんと大切にしたかったから、引っかかっているだけ。過去の君を責め続けなくても、今の君はここから変われるよ。",
  },
};

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const answerLetters = ["A", "B", "C", "D"];
const tiePriority = ["solitude", "fear", "affection", "regret", "freedom"];
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
    scene: "SCENE 01 / 仕事終わり。駅まで歩きながら、スマホを開く。",
    text: "帰り道で、最初にやることは？",
    answers: [
      ["明日の予定や通知を軽く確認する", "fear", ""],
      ["イヤホンをつけて、ひとりの時間に切り替える", "solitude", ""],
      ["今日の会話を少し思い返す", "regret", ""],
      ["少し遠回りして、夜の空気を吸って帰る", "freedom", ""],
    ],
  },
  {
    scene: "SCENE 02 / 家に着いた。鍵を閉めて、部屋の電気をつける。",
    text: "玄関に入った瞬間、とる行動は？",
    answers: [
      ["鍵とスマホを確認して、落ち着こうとする", "fear", ""],
      ["部屋の静かさに少しほっとする", "solitude", ""],
      ["カバンを置きながら、今日のことを整理する", "regret", ""],
      ["すぐ部屋着に着替えて、外の自分を脱ぐ", "freedom", ""],
    ],
  },
  {
    scene: "SCENE 03 / 夜ごはん。コンビニ袋を置いて、何を食べるか迷う。",
    text: "夕食前することは？",
    answers: [
      ["明日の予定を見てから、食べるものを決める", "fear", ""],
      ["動画や音楽を流して、部屋を静かすぎないようにする", "solitude", ""],
      ["今日やり残したことをメモしてから食べる", "regret", ""],
      ["その時食べたいものを選んで、自分を甘やかす", "freedom", ""],
    ],
  },
  {
    scene: "SCENE 04 / お風呂。シャワーの音で、やっと外の音が消える。",
    text: "お風呂でよく考えてしまうことは？",
    answers: [
      ["誰かの表情が曇った場面を、まだ気にしている", "fear", ""],
      ["湯船に入った瞬間、誰にも見せない顔になる", "solitude", ""],
      ["あの時こう言えばよかった、と会話を直し始める", "regret", ""],
      ["大切な人に、今日あったことを聞いてほしくなる", "affection", ""],
    ],
  },
  {
    scene: "SCENE 05 / ベッドの上。スマホだけが暗い部屋で光っている。",
    text: "寝る前、ついやってしまうことは？",
    answers: [
      ["通知や返信を確認してから寝たい", "fear", ""],
      ["SNSを眺めながら、静かな時間を過ごす", "solitude", ""],
      ["今日送った文章や会話を軽く見返す", "regret", ""],
      ["大切な人の投稿や写真を見てから眠る", "affection", ""],
    ],
  },
  {
    scene: "SCENE 06 / 電気を消す前。明日の予定を見てしまう。",
    text: "明日のことを考えた瞬間、近いのは？",
    answers: [
      ["不安な予定を先に確認して、心の準備をする", "fear", ""],
      ["明日は少しだけ人と距離を置きたいと思う", "solitude", ""],
      ["今日のやり残しを、明日どう直すか考える", "regret", ""],
      ["予定を少し空けて、自由な時間を作りたくなる", "freedom", ""],
    ],
  },
  {
    scene: "SCENE 07 / 送らなかったメッセージが、下書きに残っている。",
    text: "本当は送りたいけど、消してしまう言葉は？",
    answers: [
      ["『大丈夫だった？』と確認したいけど、少し迷う", "fear", ""],
      ["『今日少し寂しかった』と言いたいけど、考え直す", "solitude", ""],
      ["『さっきの言い方ごめん』を送るか迷う", "regret", ""],
      ["『もっと話したかった』を送るか迷う", "affection", ""],
    ],
  },
  {
    scene: "SCENE 08 / 窓を少し開ける。朝になる前の冷たい空気が入る。",
    text: "今すぐ少しだけ離れたいものは？",
    answers: [
      ["相手の機嫌や空気を読みすぎる時間", "fear", ""],
      ["誰かに合わせて明るくしている時間", "solitude", ""],
      ["寝る前に始まるひとり反省会", "regret", ""],
      ["仕事用、SNS用、好きな人用で分かれた自分", "freedom", ""],
    ],
  },
  {
    scene: "SCENE 09 / 眠れないまま、天井を見ている。午前4時すぎ。",
    text: "眠れない時、頭の中で一番うるさいものは？",
    answers: [
      ["明日のことを先に考えすぎる未来予想", "fear", ""],
      ["誰かと話した日ほど、静けさが気になる感じ", "solitude", ""],
      ["言い方、表情、文章を頭の中で直す声", "regret", ""],
      ["大切な人の一言を何度も思い出す感じ", "affection", ""],
    ],
  },
  {
    scene: "SCENE 10 / 朝になる直前。今日の夜をひとつだけ保存する。",
    text: "今夜の自分に一番近かったものは？",
    answers: [
      ["不安で先回りしやすい夜だった", "fear", ""],
      ["人といた後の静けさが残る夜だった", "solitude", ""],
      ["終わったことを何度も思い出す夜だった", "regret", ""],
      ["誰か用の自分から少し離れたい夜だった", "freedom", ""],
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

  resultKey = tiePriority.reduce((best, key) => {
    return scores[key] > scores[best] ? key : best;
  }, tiePriority[0]);
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
  elements.resultDefinition.textContent = `あなたの隠している感情は「${view.emotion}」でした。`;
  elements.resultDefinition.textContent = "あなたの隠している感情は「" + view.emotion + "」でした。";
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
    `${emotion.worldName}は、LUNAPHの世界で「${emotion.emotionLabel}」から生まれる住人です。Instagramでは、しおんがその感情と一緒に過ごす夜の物語を見られます。`;
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
  const text = `私の隠している感情は「${view.emotion}」でした。\nパートナーは${view.partner}。\n${activeScenes[0]}\n\n#LUNAPH #あなたの隠している感情は`;
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
  const resultCopy = resultDepth === "deep" ? emotion.deepDescription : emotion.description;
  const activeScenes = getActiveScenes(emotion);
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
  context.fillText("昼は隠せる。夜は、感情が姿を持つ。", 92, 308);

  context.fillStyle = "#f7f3ff";
  context.font = "300 118px 'Yu Mincho', serif";
  context.fillText(emotion.name, 88, 500);
  context.fillStyle = emotion.accent[1];
  context.font = "18px Arial";
  context.fillText(`${emotion.en} / ${resultDepth === "deep" ? "DEEP" : "LIGHT"}`, 94, 568);

  context.fillStyle = "#eee9f4";
  context.font = "31px 'Yu Mincho', serif";
  wrapCanvasText(context, emotion.shareLine, 92, 700, 860, 52);
  context.fillStyle = "#d6d0df";
  context.font = "25px 'Yu Mincho', serif";
  wrapCanvasText(context, activeScenes[0], 92, 845, 850, 46);
  context.fillStyle = "#bdb5c8";
  context.font = "21px 'Yu Mincho', serif";
  wrapCanvasText(context, resultCopy, 92, 1000, 850, 40);
  context.fillStyle = "#90889d";
  context.font = "17px Arial";
  context.fillText("#LUNAPH  #あなたの夜の感情は", 92, 1220);
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
