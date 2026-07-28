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
      "ドリンク一杯で『今日まだ頑張れる』まで回復する。単純じゃなくて燃料が欲しかっただけ。",
      "推しって言われたら営業中の顔で受けるけど、内心ちょっと本気で保存してる。",
      "チェキを大事そうに持って帰られると、仕事なのに普通にうれしい。",
    ],
    deep: [
      "神客ムーブを一回されただけで、脳内のめろあが勝手に祭壇を組み始める。",
      "『また来るね』を社交辞令かもしれないと分かりつつ、来店予定表に心だけ先走って書き込む。",
      "営業って分かってるのに、優しくされた記憶だけ閉店後も居残りしてくる。",
    ],
    support: "大丈夫。接客中に生まれた優しさが、全部ただの営業じゃなく感じる夜があってもいい。君の愛情は、誰かをちゃんと大切に見られる力だから。",
  },
  fear: {
    emotion: "恐怖",
    partner: "ふろむ",
    light: [
      "初回卓の沈黙3秒で、接客通信簿が脳内で赤点になる。",
      "お客さんがスマホを見ただけで『つまらない？帰る？』まで勝手に上映される。",
      "ドリタイで盛り上げながら、心の中ではずっと地雷処理班をしている。",
    ],
    deep: [
      "場内が少し静かになっただけで『今日の私、干され確定？』まで脳内で判決が出る。",
      "返信が短い、目線が違う、笑が一個少ない。それだけで謝罪文と改善案が完成する。",
      "卓では笑顔なのに、内側のふろむだけ警報レベルMAXで羽ばたいている。",
    ],
    support: "大丈夫。空気を読みすぎる君は弱いんじゃない。ちゃんと場を見てきたから、不安まで先に拾ってしまうだけ。ふろむは、その警戒心ごと君を守っているよ。",
  },
  solitude: {
    emotion: "孤独",
    partner: "くれす",
    light: [
      "満卓なのに、心だけずっとお茶してる時がある。",
      "場内で笑ってるのに、自分の本音だけバックヤードに置き去り。",
      "推し被りの空気を見た瞬間、店内にいるのに透明人間になる。",
    ],
    deep: [
      "お茶じゃないのに心がお茶。隣に人がいても、内側のくれすだけぼっち卓。",
      "『今日も楽しかった』って言われても、私の中身までは誰も見てない気がする。",
      "場内で必要とされてるはずなのに、急に『役としての私だけ』が残ってしんどい。",
    ],
    support: "大丈夫。接客でたくさん話したあとに寂しくなるのは、おかしくない。明るくしていた時間のぶん、夜に本音が戻ってきただけ。くれすは、その夜のそばにいる。",
  },
  freedom: {
    emotion: "自由",
    partner: "みちる",
    light: [
      "キャラ守りすぎて、たまに本体がログアウトする。",
      "予約、DM、出勤ツイ、全部ちゃんとしてるのに心だけ逃走中。",
      "求められる自分を出せるほど、素の自分がどこ行ったか分からなくなる。",
    ],
    deep: [
      "店用、SNS用、推し用、初回卓用。人格のシフト表だけ過密で本人が欠勤してる。",
      "『また来てね』を言いすぎて、自分がどこに帰りたいのか分からなくなる。",
      "通知も予約もありがたいのに、全部ミュートして誰にも見つからない場所へ行きたくなる。",
    ],
    support: "大丈夫。誰か用の自分を脱ぎたくなる夜があっても、それは冷たいわけじゃない。ちゃんと合わせてきたぶん、君自身に戻る時間が必要なだけ。みちるは出口を照らしている。",
  },
  regret: {
    emotion: "後悔",
    partner: "くゆり",
    light: [
      "チェキのポーズ、会話の返し、ドリンクのお礼。全部あとから微修正したくなる。",
      "お客さんは忘れてそうな一言を、自分だけ高画質で保存してる。",
      "初回卓の第一声を、なぜか閉店後までリプレイしている。",
    ],
    deep: [
      "終わった卓を脳内で30回リテイクして、毎回ちょっと違う接客事故を起こしている。",
      "相手はもう帰ってるのに、自分だけ反省会のアフターに永久参加してる。",
      "『もっと可愛く返せた』が呪文化して、くゆりが脳内で同じページをめくり続ける。",
    ],
    support: "大丈夫。終わった会話を何度も思い出す君は、だめな人じゃない。言葉を大切にしているから、あとから直したくなるだけ。くゆりは、その夜のそばにいる。",
  },
};

const supportMessages = {
  affection: {
    title: "神客から、愛情を抱えているあなたへ",
    line: "大丈夫。ちゃんと大切にしようとしてくれてたの、伝わってるよ。営業だからって全部軽いわけじゃないし、優しくした自分まで否定しなくていい。君の愛情は、ちゃんと人を見ている証拠だよ。",
  },
  fear: {
    title: "神客から、恐怖を抱えているあなたへ",
    line: "大丈夫。空気を読みすぎてるんじゃなくて、ちゃんと卓を見てくれてたんだよね。少しの沈黙で焦る日があっても、君が弱いわけじゃない。怖くても笑ってくれたこと、ちゃんと届いてるよ。",
  },
  solitude: {
    title: "神客から、孤独を抱えているあなたへ",
    line: "大丈夫。卓では明るくしてたのに、心だけ置いていかれる日もあるよね。誰かと話してるのに孤独になるのは、君が変なんじゃない。本音まで見せられる場所が少なかっただけだよ。",
  },
  freedom: {
    title: "神客から、自由を抱えているあなたへ",
    line: "大丈夫。求められるキャラを頑張ったぶん、全部脱ぎたくなる時もあるよね。それは冷たいわけじゃない。合わせられる君もすごいし、誰か用じゃない君に戻りたい気持ちもちゃんと大事だよ。",
  },
  regret: {
    title: "神客から、後悔を抱えているあなたへ",
    line: "大丈夫。終わった卓を何回も思い出すのは、雑に接客してない証拠だよ。あの返し、もっと可愛くできたかもって考える君は、ちゃんと向き合ってた。今日の君を責めすぎなくていいよ。",
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
    scene: "SCENE 01 / 初回卓。はじめましての空気を、笑顔で受け止める。",
    text: "初回卓で、心の中に一番出やすい本音は？",
    answers: [
      ["この卓、私で楽しませられる？って先に不安になる", "fear", ""],
      ["明るく自己紹介しながら、自分の素は奥にしまう", "solitude", ""],
      ["第一声、もっと刺さる入り方できたかもって反省する", "regret", ""],
      ["初回でも、来てくれたならちゃんと大切にしたい", "affection", ""],
    ],
  },
  {
    scene: "SCENE 02 / お茶。店内は動いているのに、自分の前だけ静か。",
    text: "お茶してる時、隠しがちな感情は？",
    answers: [
      ["このまま誰も来なかったらどうしようって焦る", "fear", ""],
      ["店内にいるのに、自分だけ透明になった感じがする", "solitude", ""],
      ["さっきの動き、もっとできたかもって考える", "regret", ""],
      ["次に来てくれた人を絶対楽しませたいと思う", "affection", ""],
    ],
  },
  {
    scene: "SCENE 03 / 推しって言われた。営業中だから、喜び方にも加減がいる。",
    text: "推しって言われた瞬間、内側では？",
    answers: [
      ["本気？ノリ？どこまで信じていい？って探る", "fear", ""],
      ["嬉しいのに、どうせ一瞬かもって距離を置く", "solitude", ""],
      ["もっと上手く喜べばよかったって後から思う", "regret", ""],
      ["正直ちゃんと嬉しい。大事にしたくなる", "affection", ""],
    ],
  },
  {
    scene: "SCENE 04 / チェキ。盛れたいし、ポーズ事故もしたくない。",
    text: "チェキ前、いちばん強い感情は？",
    answers: [
      ["盛れなかったらどうしようって内心かなり怖い", "fear", ""],
      ["写真の中では笑うけど、見られるほど孤独になる", "solitude", ""],
      ["ポーズも表情も、あとで絶対反省すると思う", "regret", ""],
      ["その一枚を大事にしてくれたら嬉しい", "affection", ""],
    ],
  },
  {
    scene: "SCENE 05 / ドリタイ。ドリンクを入れてもらえて、少しだけ呼吸が戻る。",
    text: "ドリタイで近い本音は？",
    answers: [
      ["ちゃんと返せてる？お礼薄くない？って気になる", "fear", ""],
      ["嬉しいけど、結局ここでしか必要とされないのかなと思う", "solitude", ""],
      ["もっと可愛く喜べばよかったってすぐ思う", "regret", ""],
      ["素直に嬉しい。大切にされてる気がして少し救われる", "affection", ""],
    ],
  },
  {
    scene: "SCENE 06 / 推し被りっぽい空気。他の子の卓がかなり盛り上がっている。",
    text: "推し被りっぽい空気を見た時、心の中は？",
    answers: [
      ["自分の卓、負けてない？って勝手に焦る", "fear", ""],
      ["店内にいるのに、自分だけ視界から消えた感じがする", "solitude", ""],
      ["自分の接客、もっとできたはずって比べてしまう", "regret", ""],
      ["楽しそうでいいなと思いつつ、自分も選ばれたい", "affection", ""],
    ],
  },
  {
    scene: "SCENE 07 / 来店予定の話。また来るね、予約するねと言われた。",
    text: "来店予定っぽい話が出た時、内側では？",
    answers: [
      ["本当に来る？社交辞令？って先に疑う", "fear", ""],
      ["嬉しいのに、信じたら傷つきそうで距離を置く", "solitude", ""],
      ["もっと次に繋がる返しができたかもって考える", "regret", ""],
      ["信じたい。次も会えるなら普通に嬉しい", "affection", ""],
    ],
  },
  {
    scene: "SCENE 08 / 遠隔やリプ返も気になる時間。店内とスマホ、両方に自分がいる。",
    text: "遠隔や通知も気になる時、心の奥で出るものは？",
    answers: [
      ["全部ちゃんと返せてる？抜けてない？って怖くなる", "fear", ""],
      ["店内にもSNSにもいるのに、自分だけ空っぽになる", "solitude", ""],
      ["さっきの返信、もっと可愛くできたかもって引っかかる", "regret", ""],
      ["画面越しでも、ちゃんと大切にしたい", "affection", ""],
    ],
  },
  {
    scene: "SCENE 09 / ラストオーダー前。今日の場内が終わりに近づいている。",
    text: "ラスオ前、隠しがちな感情は？",
    answers: [
      ["最後に失敗したくなくて、空気を読みすぎる", "fear", ""],
      ["笑ってるのに、今日は誰にも本音言ってないなと思う", "solitude", ""],
      ["今日の点数を勝手につけて、足りない所を探す", "regret", ""],
      ["帰る前に、少しでも覚えていてほしいと思う", "affection", ""],
    ],
  },
  {
    scene: "SCENE 10 / 今日の場内。笑顔の下で、一番長くいた感情を選ぶ。",
    text: "今日の場内で、あなたが一番隠していた感情は？",
    answers: [
      ["嫌われたくないから先回りする恐怖", "fear", ""],
      ["人の中にいても消えない孤独", "solitude", ""],
      ["終わった会話を直したい後悔", "regret", ""],
      ["誰か用の自分から抜け出したい自由", "freedom", ""],
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
  elements.resultDefinition.textContent = `営業中、あなたが隠していた感情は「${view.emotion}」でした。`;
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
  const text = `営業中、私が隠していた感情は「${view.emotion}」でした。\nパートナーは${view.partner}。\n${activeScenes[0]}\n\n#LUNAPH #営業中の隠し感情診断`;
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
  context.fillText("営業中に隠した感情が、夜に姿を持つ。", 92, 308);

  context.fillStyle = "#f7f3ff";
  context.font = "300 118px 'Yu Mincho', serif";
  context.fillText(view.emotion, 88, 500);
  context.fillStyle = emotion.accent[1];
  context.font = "18px Arial";
  context.fillText(`${emotion.en} / ${resultDepth === "deep" ? "DEEP" : "LIGHT"}`, 94, 568);

  context.fillStyle = "#eee9f4";
  context.font = "31px 'Yu Mincho', serif";
  wrapCanvasText(context, `あなたのパートナーは、${view.partner}`, 92, 700, 860, 52);
  context.fillStyle = "#d6d0df";
  context.font = "25px 'Yu Mincho', serif";
  wrapCanvasText(context, activeScenes[0], 92, 845, 850, 46);
  context.fillStyle = "#bdb5c8";
  context.font = "21px 'Yu Mincho', serif";
  wrapCanvasText(context, resultCopy, 92, 1000, 850, 40);
  context.fillStyle = "#90889d";
  context.font = "17px Arial";
  context.fillText("#LUNAPH  #営業中の隠し感情診断", 92, 1220);
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
