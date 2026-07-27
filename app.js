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
      "優しく接したあと、少しだけ特別に思われたい自分がいる。",
      "仕事として大切にしたはずなのに、気持ちまで置いて帰れない。",
      "相手の言葉ひとつで、その日の温度がわりと変わる。",
    ],
    deep: [
      "優しくした相手の反応が薄いだけで、脳内で反省会と失恋会見が同時開催される。",
      "『仕事だから』と分かっているのに、心だけ勤務終了できていない。",
      "大切にされたい気持ちが強すぎて、返信ひとつで生活リズムまで持っていかれる。",
    ],
    support: "大丈夫。接客中に生まれた優しさが、全部ただの営業じゃなく感じる夜があってもいい。君の愛情は、誰かをちゃんと大切に見られる力だから。",
  },
  fear: {
    emotion: "恐怖",
    partner: "ふろむ",
    light: [
      "卓の空気が一瞬変わっただけで、何か間違えたかもと考える。",
      "その場では笑えても、退勤後に不安の答え合わせを始める。",
      "何も起きていないのに、念のため最悪パターンを用意している。",
    ],
    deep: [
      "返事が少し遅いだけで、嫌われた・怒らせた・もう終わったをフルセットで想像する。",
      "まだ何も起きていないのに、脳内では謝罪文と改善案まで完成している。",
      "ちゃんと盛り上げた日でも、帰宅後の頭の中だけずっと非常ベルが鳴っている。",
    ],
    support: "大丈夫。空気を読みすぎる君は弱いんじゃない。ちゃんと場を見てきたから、不安まで先に拾ってしまうだけ。ふろむは、その警戒心ごと君を守っているよ。",
  },
  solitude: {
    emotion: "孤独",
    partner: "くれす",
    light: [
      "卓では話せていたのに、退勤後の帰り道で急にひとりを感じる。",
      "通知はあるのに、今ほしい言葉だけが来ない気がする。",
      "たくさん話した日の夜ほど、部屋の静けさが濃くなる。",
    ],
    deep: [
      "さっきまで誰かの前で笑っていたのに、家に着いた瞬間『結局ひとり』が刺さる。",
      "スマホを開いて閉じてまた開く。通知はあるのに、欲しい人からだけ来ない夜。",
      "寂しいと言ったら負けな気がして、平気なふりのまま布団で静かに沈む。",
    ],
    support: "大丈夫。接客でたくさん話したあとに寂しくなるのは、おかしくない。明るくしていた時間のぶん、夜に本音が戻ってきただけ。くれすは、その夜のそばにいる。",
  },
  freedom: {
    emotion: "自由",
    partner: "みちる",
    light: [
      "求められるキャラを演じたあと、急に全部脱ぎたくなる。",
      "予定や返信が詰まると、自分が薄くなっていく感じがする。",
      "ちゃんとしている日ほど、退勤後にどこか遠くへ行きたくなる。",
    ],
    deep: [
      "店用、SNS用、好きな人用の自分を切り替えすぎて、本体が行方不明。",
      "『ちゃんとしなきゃ』をやりすぎて、帰宅後に予定も通知も全部捨てたくなる。",
      "自由になりたいのに、急に時間が空くと何をしたいのか分からなくなる。",
    ],
    support: "大丈夫。誰か用の自分を脱ぎたくなる夜があっても、それは冷たいわけじゃない。ちゃんと合わせてきたぶん、君自身に戻る時間が必要なだけ。みちるは出口を照らしている。",
  },
  regret: {
    emotion: "後悔",
    partner: "くゆり",
    light: [
      "退勤後に、今日の返しを少し思い返す。",
      "相手は忘れていそうな一言を、自分だけ細かく覚えている。",
      "寝る前に『あの返し、もっと良くできた』が始まる。",
    ],
    deep: [
      "終わった会話を脳内で30回リテイクして、毎回ちょっと違う負け方をしている。",
      "相手はもう忘れているのに、自分だけ反省会の深夜営業が閉店しない。",
      "過去の一言にまだ刺されていて、今日の自分まで動きが鈍くなる。",
    ],
    support: "大丈夫。終わった会話を何度も思い出す君は、だめな人じゃない。言葉を大切にしているから、あとから直したくなるだけ。くゆりは、その夜のそばにいる。",
  },
};

const supportMessages = {
  affection: {
    title: "しおんから、愛情を抱えているあなたへ",
    line: "大丈夫。接客中に生まれた優しさが、全部ただの営業じゃなく感じる夜があってもいい。君の愛情は、誰かをちゃんと大切に見られる力だから。",
  },
  fear: {
    title: "しおんから、恐怖を抱えているあなたへ",
    line: "大丈夫。空気を読みすぎる君は弱いんじゃない。ちゃんと場を見てきたから、不安まで先に拾ってしまうだけ。ふろむは、その警戒心ごと君を守っているよ。",
  },
  solitude: {
    title: "しおんから、孤独を抱えているあなたへ",
    line: "大丈夫。接客でたくさん話したあとに寂しくなるのは、おかしくない。明るくしていた時間のぶん、夜に本音が戻ってきただけ。そんな君でも、ちゃんとここにいていいよ。",
  },
  freedom: {
    title: "しおんから、自由を抱えているあなたへ",
    line: "大丈夫。誰か用の自分を脱ぎたくなる夜があっても、それは冷たいわけじゃない。ちゃんと合わせてきたぶん、君自身に戻る時間が必要なだけ。少しずつ、君の呼吸に戻っていいよ。",
  },
  regret: {
    title: "しおんから、後悔を抱えているあなたへ",
    line: "大丈夫。終わった会話を何度も思い出す君は、だめな人じゃない。言葉を大切にしているから、あとから直したくなるだけ。過去の君を責め続けなくても、今の君はここから変われるよ。",
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
    scene: "SCENE 01 / 出勤して最初の卓。笑顔を作って、空気を読む。",
    text: "最初の卓で、裏で一番走ってる思考は？",
    answers: [
      ["今の反応薄くない？って表情を拾いにいく", "fear", ""],
      ["盛り上げながら、自分の本音だけは奥にしまう", "solitude", ""],
      ["さっきの返し、もう一段うまく言えたかもと思う", "regret", ""],
      ["どうしたら今日いちばん楽しかったって思ってもらえるか考える", "affection", ""],
    ],
  },
  {
    scene: "SCENE 02 / 卓が盛り上がったあと。席を離れて、少しだけ息をつく。",
    text: "席を離れた瞬間、脳内で始まるのは？",
    answers: [
      ["ちゃんと刺さってた？退屈させてない？の確認作業", "fear", ""],
      ["急に音が消えて、自分だけ置いていかれた感じ", "solitude", ""],
      ["あの一言、いらなかった説を勝手に検証する", "regret", ""],
      ["楽しかったって言葉を、ちょっとだけ本気で信じたい", "affection", ""],
    ],
  },
  {
    scene: "SCENE 03 / DMやリプを返す時間。画面の向こうにも自分がいる。",
    text: "DMを返す時、裏でやってることは？",
    answers: [
      ["絵文字ひとつで温度ミスらないか見直す", "fear", ""],
      ["明るく返すけど、踏み込まれすぎない距離を作る", "solitude", ""],
      ["送信後にもう一回開いて、文章の事故を探す", "regret", ""],
      ["相手が喜びそうな言葉をちゃんと選んでしまう", "affection", ""],
    ],
  },
  {
    scene: "SCENE 04 / 褒められたあと。嬉しいのに、少し信じきれない。",
    text: "褒められた瞬間、心の中の第一声は？",
    answers: [
      ["本気？お世辞？どっち？って疑う", "fear", ""],
      ["嬉しいのに、どこか自分の話じゃないみたいに聞こえる", "solitude", ""],
      ["今の返し可愛くなかった、やり直したい", "regret", ""],
      ["その言葉、今日のメンタルのお守りにしたい", "affection", ""],
    ],
  },
  {
    scene: "SCENE 05 / 退勤前。今日の会話と通知が頭に残っている。",
    text: "退勤前、スマホで一番チェックする地雷は？",
    answers: [
      ["未返信、既読、予定抜け。燃える前に潰したい", "fear", ""],
      ["今日の自分、ちゃんと人間として残ってるか確認する", "solitude", ""],
      ["会話のミスっぽい場所を勝手に掘り返す", "regret", ""],
      ["嬉しかった言葉をもう一回見て、少し回復する", "affection", ""],
    ],
  },
  {
    scene: "SCENE 06 / 退勤後の帰り道。スマホの光だけが近い。",
    text: "帰り道、急に襲ってくるやつは？",
    answers: [
      ["明日もこのテンション作れる？という不安", "fear", ""],
      ["あれだけ話したのに、急に誰とも繋がってない感じ", "solitude", ""],
      ["終わった会話を今さら編集したくなる衝動", "regret", ""],
      ["誰かの一言を、まだ胸の中で温めている感じ", "affection", ""],
    ],
  },
  {
    scene: "SCENE 07 / 家に着いた。外用の自分を脱いで、部屋着になる。",
    text: "外用の自分を脱いだら、何が残る？",
    answers: [
      ["何か来てないかスマホを見て、何もなくてまた見る", "fear", ""],
      ["静かで落ち着くのに、急に取り残された感じ", "solitude", ""],
      ["今日の自分に勝手に点数をつけ始める", "regret", ""],
      ["誰かに『今日がんばったね』って言われたい", "affection", ""],
    ],
  },
  {
    scene: "SCENE 08 / お風呂。メイクも声のトーンも、少しずつ落ちる。",
    text: "メイクを落としながら、何が蘇る？",
    answers: [
      ["一瞬だけ卓の空気が冷えた気がした場面", "fear", ""],
      ["鏡に映る、誰にも見せてない素の顔", "solitude", ""],
      ["あの返し、別ルートなら勝てたかもという後悔", "regret", ""],
      ["今日優しくできた相手の顔や言葉", "affection", ""],
    ],
  },
  {
    scene: "SCENE 09 / ベッドの上。通知を見て、見ないふりをする。",
    text: "寝る前、スマホ握ったまま何に負けてる？",
    answers: [
      ["返信の温度と既読のタイミングに負ける", "fear", ""],
      ["賑やかだったぶん、部屋の静けさに負ける", "solitude", ""],
      ["自分だけ閉店してない反省会に負ける", "regret", ""],
      ["大切にされたかった気持ちに負ける", "affection", ""],
    ],
  },
  {
    scene: "SCENE 10 / 朝になる直前。今日の接客で残った感情をひとつ選ぶ。",
    text: "今日の営業スマイルの裏にいたのは？",
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
  elements.resultDefinition.textContent = `営業スマイルの裏にいた感情は「${view.emotion}」でした。`;
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
  const text = `営業スマイルの裏にいた感情は「${view.emotion}」でした。\nパートナーは${view.partner}。\n${activeScenes[0]}\n\n#LUNAPH #営業スマイルの裏診断`;
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
  context.fillText("営業スマイルの裏にいた感情が、夜に姿を持つ。", 92, 308);

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
  context.fillText("#LUNAPH  #営業スマイルの裏診断", 92, 1220);
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
