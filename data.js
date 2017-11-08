module.exports = () => {
  const d = {
    musicList: [
      'https://www.youtube.com/watch?v=FPLxRe4ho_A', // 記念撮影
      'https://www.youtube.com/watch?v=6m3A1MP_gbU', // リボン
      'https://www.youtube.com/watch?v=bRWQckbQ9tQ', // アンサー
      'https://www.youtube.com/watch?v=plXjYiRcBtA', // GO
      'https://www.youtube.com/watch?v=jVOpvX3tDN0', // アリア
    ],
    messages: [
      'ライブってゆうのはお茶の間でせんべえかじりながら見るようなもんじゃねぇんだよ。チケット取れなかったとか色々あるかもしれないけど死ぬ気でチケット取れ。で、見にこい。俺らあれだから。ブラウン管の前で評価されたくないから',
      '「頑張れ」って言葉は嫌いだよ。君はがんばりやさんだから。無理じゃなくて一生懸命やればそれでいいよ',
      '聞いてくれる君がいなきゃ、俺は歌えないんだ。自分のことを「世の中に必要ない人間」なんて思わないでください。現にこんなにも俺が必要としています。どうか生きてください',
      'ボクシングって勝った方が腕を上げるじゃないですか。でも天秤は負けた(軽い)方が上がるんですよ。それっておもしれぇなぁって思って。',
      '『自分にはなにもない』って言う人いるけど、そんなことない。コンビニの店員がいなかったら、お弁当あっためてもらえないし、銭湯のおばちゃんがいなかったら、銭湯入れない。みんなやることやってる。それを誇りに持てよ',
      'お前が｢死にたい｣と言って無駄に過ごした今日は昨日死んだ奴が一生懸命生きたかった明日なんだ',
      '素晴らしい夢ほど笑われるものです。もし他人に自分の夢を笑われたら「あぁ、自分の夢は素晴らしいのだ」と誇って下さい。',
      '(音楽にスーパースターは必要？という質問に対し)自分がなればいいんじゃないッスか、自分にとってね。そう思えないヤツはずっと誰かの真似になっちゃうんじゃないかな',
      '絶対に誰かと肩がぶつかる。生きるってそういうことだと思う。',
      '後ろまでちゃんと見えてっからな、聴くのをｻﾎﾞんなよ、俺歌うから。（LIVE中）',
      '泣きそうなときこそ、泣くのをｸﾞｯとこらえた分だけ、弱くなるような気がする。だから、泣きたいときはないていいんだよ',
      '出会わなければ良かった出会いなんてきっとない…ないよ。',
      '神に誓うな、己に誓え!!!!',
      '幸せじゃない瞬間も含めて幸せだと思います。',
      '『うわ、眩しい。すっげぇ眩しいんだけどさ、消えてくんない？』と思うくらい眩しいのが夢だと思うし、『いや、あれを見てないと俺の生きてる意味がないとか、存在自体が怪しくなってくる。だから俺は目がつぶれてもいいから、あれを見るぞ』っつうのが夢を見てる人だと思うし、夢を見てる人ってそんぐらいかっこいい人だと思うし、そんぐらい覚悟してる人だと思うし、そんぐらいリスクを背負ってる人だと思う。',
      '要は自分次第なんですよ。世の中君の映るように映る。君の感じるように感じる。君が変えれば変えるほど変わってく',
      '心に鍵をかけてるひと、かけすぎて人と話すのが苦手になったりしてる人、自殺をしようとした事がある人、俺はそのままでもいいと思うよ。かっこ良いと思うよ。でもどうか　生き延びてください。',
      '今年を振り返ってあんな事があって嬉しかった、こんな事があって悲しかったっていうよりもまず、それを考えることができる[今]があるって事がすごく大事だと思うんですよね。',
      '独りでも生きていける強さ｣なんてモノは要らん。リボン付きでプレゼントされても捨てちまうだろうな。独りで生きる意味ってあるのか？俺は孤独には全力で抵抗するよ。いつだって誰かを探すよ。他人が居てこその俺だろう。傷付け合って存在確認だろう。これらを放棄した俺なんて死んでいる様なモンだ。',
      '俺は、『ひとりじゃ生きていけねぇ』っていう弱々しい感覚を、本当に強く言える男だから。',
      '『この曲すごいです』って言ってくれる人いるんですけど、そう言ってくれるあなたがすごいと思います。',
      '自分がちゃんと物事をやってる時って人はさ、温和でいられるけど、自分が何もしてない時ほど人が醜く見えるモンだから。',
      '誰かを愛するより　誰かに愛されるよりも　自分を愛する事が幸せの始まりだと思う。',
      '客の二酸化炭素が､俺らの酸素なんだ',
      '千人お客さんが入ってても、俺は別に１人に歌う気持ちで歌っているんですよ',
      '人と繋がんないと、俺は生きてるカタチがわかんないです',
      '言葉っていうのは、感覚に１番近いものを当てはめるだけだから感覚が伝わるわけじゃないんだよね。自分の心中で生まれた感情・感覚に、１番似合った服を着せたものが言葉だから',
      '独りでも生きていける強さなんてものは要らん。リボン付きでプレゼントされても捨てちまうだろうな。独りでいきる意味ってあるのか？俺は孤独には全力で抵抗するよ。いつだって誰かを探すよ。他人が居てこその俺だろう。傷付けあって存在確認だろう。これらを放棄した俺なんて死んでいる様なもんだ',
    ],
    playstyle: [
      'ガチで食おうぜ、ドン勝',
      '死ぬことを恐れぬ勇気を持て',
      '使おうぜクロスボウ',
      '殴り合え',
      'ちゃんと集まろうな、ちゃんとな',
      '王になれ',
      '気楽にいこうや',
      'バイクは全速力',
    ],
    img: [
      'https://i.pinimg.com/originals/84/79/fb/8479fb49c35e4f88fc8c11dc87f93f85.jpg',
      'https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/c0.0.630.630/22638974_1994989007384812_6997528638979571712_n.jpg',
      'https://img.fril.jp/img/108465133/m/306396467.jpg?1509879244',
      'https://pbs.twimg.com/media/DNi-Tu4U8AA3EUa.jpg',
      'http://bumpofchicken-info.up.seesaa.net/image/19425244_314853215620799_7650006876448358400_n-thumbnail2.jpg',
      'https://scontent.cdninstagram.com/t51.2885-15/e35/23101564_390402194712743_5928381583877734400_n.jpg',
      'http://kyun2-girls.com/file/parts/I0001881/a4e28a97e1579439e7e7245d413b8275.jpg',
      'https://ro69-bucket.s3.amazonaws.com/uploads/text_image/image/122008/width:750/resize_image.jpg',
      'https://i1.wp.com/dayrepo.com/wp-content/uploads/2017/01/%E8%97%A4%E5%8E%9F%E5%9F%BA%E5%A4%AE.jpeg?fit=480%2C640',
      'http://doramazyou.xyz/wp-content/uploads/2017/03/1219bf623356aba6e834516581042f04-14.png',
    ],
    bleach: [
      { img: 'http://ecx.images-amazon.com/images/I/51RqypO2UYL.jpg', poem: '我等は 姿無きが故に\nそれを畏れ'},
      { img: 'http://ecx.images-amazon.com/images/I/518dzw9souL.jpg', poem: '人が希望を持ちえるのは\n死が目に見えぬものであるからだ'},
      { img: 'http://ecx.images-amazon.com/images/I/51opRvyI0RL.jpg', poem: 'もし わたしが雨だったなら\nそれが永遠に交わることのない\n空と大地を繋ぎ留めるように\n誰かの心を繋ぎ留めることができただろうか'},
      { img: 'http://ecx.images-amazon.com/images/I/51GyJFfdizL.jpg', poem: 'ぼくたちは ひかれあう\n水滴のように 惑星のように\nぼくたちは 反発しあう\n磁石のように 肌の色のように'},
      { img: 'http://ecx.images-amazon.com/images/I/51hjQw%2BTDoL.jpg', poem: '剣を握らなければ おまえを守れない\n剣を握ったままでは おまえを抱き締められない'},
      { img: 'http://ecx.images-amazon.com/images/I/51mvhd11x%2BL.jpg', poem: 'そう、 我々に運命などない\n無知と恐怖にのまれ\n足を踏み外したものたちだけが\n運命と呼ばれる濁流の中へと\n堕ちてゆくのだ'},
      { img: 'http://ecx.images-amazon.com/images/I/51QpNyFmrLL.jpg', poem: '我々は涙を流すべきではない\nそれは心に対する肉体の敗北であり\n我々が心というものを\n持て余す存在であるということの\n証明にほかならないからだ'},
      { img: 'http://ecx.images-amazon.com/images/I/51oIHK9PanL.jpg', poem: '錆びつけば 二度と突き立てられず\n掴み損なえば我が身を裂く\nそう 誇りとは\n刃に似ている'},
      { img: 'http://ecx.images-amazon.com/images/I/51xH-oX0qQL.jpg', poem: 'ああ おれたちは皆\n眼をあけたまま\n空を飛ぶ夢を見てるんだ'},
      { img: 'http://ecx.images-amazon.com/images/I/517antuaz%2BL.jpg', poem: '俺達は 手を伸ばす\n雲を払い 空を貫き\n月と火星は掴めても\n真実には まだ届かない'},
      { img: 'http://ecx.images-amazon.com/images/I/51-8RRTi70L.jpg', poem: '届かぬ牙に 火を灯す\nあの星を見ずに済むように\nこの吭を裂いて しまわぬように'},
      { img: 'http://ecx.images-amazon.com/images/I/51Z5N5ssgcL.jpg', poem: '我々が岩壁の花を美しく思うのは\n我々が岩壁に足を止めてしまうからだ\n悚れ無き その花のように\n空へと踏み出せずにいるからだ'},
      { img: 'http://ecx.images-amazon.com/images/I/51ElSnEIOHL.jpg', poem: '誇りを一つ捨てるたび\n我等は獣に一歩近付く\n心を一つ殺すたび\n我等は獣から一歩遠退く'},
      { img: 'http://ecx.images-amazon.com/images/I/51uLoPrVdML.jpg', poem: '軋む軋む 浄罪の塔\n光のごとくに 世界を貫く\n揺れる揺れる 背骨の塔\n堕ちてゆくのは ぼくらか 空か'},
      { img: 'http://ecx.images-amazon.com/images/I/51EhakzR8EL.jpg', poem: 'ぼくは ただ きみに\nさよならを言う練習をする'},
      { img: 'http://ecx.images-amazon.com/images/I/515Km7I2ZSL.jpg', poem: '降り頻る太陽の鬣が\n薄氷に残る足跡を消してゆく\n欺かれるを恐れるな\n世界はすでに欺きの上にある'},
      { img: 'http://ecx.images-amazon.com/images/I/51-apwojkHL.jpg', poem: '血のように赤く\n骨のように白く\n孤独のように赤く\n沈黙のように白く\n獣の神経のように赤く\n神の心臓のように白く\n溶け出す憎悪のように赤く\n凍てつく傷歎のように白く\n夜を食む影のように赤く\n月を射抜く吐息のように\n白く輝き 赤く散る'},
      { img: 'http://ecx.images-amazon.com/images/I/51xI%2BGJdPPL.jpg', poem: 'あなたの影は 密やかに\n行くあての無い 毒針のように\n私の歩みを縫いつける\nあなたの光は しなやかに\n給水塔を打つ 落雷のように\n私の命の源を断つ'},
      { img: 'http://ecx.images-amazon.com/images/I/51BgxxmgYGL.jpg', poem: 'そう、 何ものも わたしの世界を 変えられはしない'},
      { img: 'http://ecx.images-amazon.com/images/I/51EO0EAKvtL.jpg', poem: '美しきを愛に譬ふのは\n愛の姿を知らぬ者\n醜きを愛に譬ふのは\n愛を知ったと驕る者'},
      { img: 'http://ecx.images-amazon.com/images/I/51-kAfW3boL.jpg', poem: 'この世のすべては\nあなたを追い詰める為にある'},
      { img: 'http://ecx.images-amazon.com/images/I/51fIZ%2BINzWL.jpg', poem: '我等の世界に意味など無く\nそこに生きる我等にも 意味など無い\n無意味な我等は 世界を想う\nそこに意味は無いと知ることにすら\n意味など無いというのに'},
      { img: 'http://ecx.images-amazon.com/images/I/51WW728hbHL.jpg', poem: '俺たちは滝の前の魚\n俺たちは籠の中の虫\n俺たちは波濤の残骸\n髑髏の錫杖\n力の奔流 それを呑む鯨\n俺たちは五本角の雄牛\n俺たちは火を吹く怪物\n泣き叫ぶ子供\nああ 俺たちは\n月光に毒されている'},
      { img: 'http://ecx.images-amazon.com/images/I/51wbRcDrPYL.jpg', poem: 'どいつもこいつも、\nぶっ壊れちまえ'},
      { img: 'http://ecx.images-amazon.com/images/I/51yUjQDuHFL.jpg', poem: '我々は皆\n生まれながらにして死んでいる\n終焉は常に\n始まりの前から そこに在るのだ\n生きることが\n何かを知り続けることならば\n我々が最後に知るものこそが終焉であり\n終焉をついに見出し\n完全に知ることこそが\n即ち死なのだ\n我々は何かを知ろうとしてはならない\n死を超越できぬ者は\n何ものも知ろうとしてはならないのだ'},
      { img: 'http://ecx.images-amazon.com/images/I/51XCxEUDimL.jpg', poem: '私の胸に深く突き刺さるその声は\n鳴り止まぬ歓声に似ている'},
      { img: 'http://ecx.images-amazon.com/images/I/515StaE6BpL.jpg', poem: '私達\n一つとして\n混じりあうものはない\n二つとして\n同じ貌をしていない\n三つ目の\n瞳を持たぬばかりに\n四つ目の\n方角に希望はない\n五つ目は\n心臓の場所にある'},
      { img: 'http://ecx.images-amazon.com/images/I/51RFslr0yZL.jpg', poem: '主よ、我々は\n孔雀を見るような目つきで\nあなたを見る\nそれは期待と、渇仰と\n恐怖に似た底知れぬものに\n縁どられているのだ'},
      { img: 'http://ecx.images-amazon.com/images/I/51d%2BeIQxg8L.jpg', poem: 'ただ執拗に 飾り立てる\n切り落とされると知りながら\nただ執拗に 磨き上げる\n切り落とされると知りながら\n恐ろしいのだ 恐ろしいのだ\n切り落とされる その時が\n切り落とされた その髪は\n死んだあなたに 似てしまう\n髪も爪も みな宝物のように\n美しく飾り立てるのに\nなぜ自らの体から切り離されただけで\n汚く不気味なものとなってしまうのだろう\n答えは簡単\nそれらは全て\n自らの死した姿に ほかならないからだ'},
      { img: 'http://ecx.images-amazon.com/images/I/51FXWgE4ZNL.jpg', poem: 'その疵深し、海淵の如し\nその罪赤し、死して色無し'},
      { img: 'http://ecx.images-amazon.com/images/I/51PGW9HfuuL.jpg', poem: '世界一嫌いだと言ってくれ'},
      { img: 'http://ecx.images-amazon.com/images/I/51ry6lcSp5L.jpg', poem: '王は駆ける\n?\n影を振り切り\n鎧を鳴らし\n骨を蹴散らし\n血肉を啜り\n軋みを上げる\n心を潰し\n?\n独り踏み入る\n遙か彼方へ'},
      { img: 'http://ecx.images-amazon.com/images/I/51SHRnN4HzL.jpg', poem: '俺達は虫\n不揮発性の\n悪意の下で\n這い回る蠕虫\n首をもたげる\n月より高く\n憐れなお前等が\n見えなくなるまで'},
      { img: 'http://ecx.images-amazon.com/images/I/51i3USGAQ8L.jpg', poem: '私に翼をくれるなら\n私はあなたのために飛ぼう\nたとえば この 大地のすべてが\n水に沈んでしまうとしても\n私に剣をくれるなら\n私はあなたのために立ち向かおう\nたとえば この 空のすべてが\nあなたを光で射抜くとしても'},
      { img: 'http://ecx.images-amazon.com/images/I/515fuIyE5OL.jpg', poem: '産まれ堕ちれば、\n死んだも同然'},
      { img: 'http://ecx.images-amazon.com/images/I/51HkGnVcZrL.jpg', poem: '信じるのは、まだ早い'},
      { img: 'http://ecx.images-amazon.com/images/I/510tiuur%2B8L.jpg', poem: '人を美しいとは思わないけれど\n花を美しいとは思う\n人の姿が花に似るのは\nただ斬り裂かれて倒れる時だ'},
      { img: 'http://ecx.images-amazon.com/images/I/511aMuxCcyL.jpg', poem: '恐れることは ただ一つ\n恐れを知らぬ 戦士と為ること'},
      { img: 'http://ecx.images-amazon.com/images/I/51LfEGh769L.jpg', poem: '愆つは、人\n殺すは、魔'},
      { img: 'http://ecx.images-amazon.com/images/I/51vQuEuQx0L.jpg', poem: '心在るが故に妬み\n心在るが故に喰らい\n心在るが故に奪い\n心在るが故に傲り\n心在るが故に惰り\n心在るが故に怒り\n心在るが故に\nお前のすべてを欲する'},
      { img: 'http://ecx.images-amazon.com/images/I/51mGG8VVq%2BL.jpg', poem: '失くしたものを\n奪い取る\n血と肉と骨と\nあとひとつ'},
      { img: 'http://ecx.images-amazon.com/images/I/51b46EK0LQL.jpg', poem: '犠牲無き世界など ありはしない\n気付かないのか\n我々は\n血の海に 灰を浮かべた地獄の名を\n仮に世界と\n呼んでいるのだ'},
      { img: 'http://ecx.images-amazon.com/images/I/51sKmszyUmL.jpg', poem: '腐敗は我が友\n夜は我が僕\n鴉にこの身を啄ませながら\n楡の館でお前を待つ'},
      { img: 'http://ecx.images-amazon.com/images/I/51Q5WKFSpdL.jpg', poem: '人は皆すべからく悪であり\n自らを正義であると錯覚する為には\n己以外の何者かを 己以上の悪であると\n錯覚するより 他にないのだ\n確信した正義とは、悪である\n正義が正義たり得る為には\n常に自らの正義を疑い続けなければならない'},
      { img: 'http://ecx.images-amazon.com/images/I/61S%2Bn02yqOL.jpg', poem: '伏して生きるな、\n立ちて死すべし'},
      { img: 'http://ecx.images-amazon.com/images/I/51kx7%2BvNNcL.jpg', poem: '不幸を知ることは\n怖ろしくはない\n怖ろしいのは\n過ぎ去った幸福が\n戻らぬと知ること'},
      { img: 'http://ecx.images-amazon.com/images/I/51FS-kVv8YL.jpg', poem: '君が明日 蛇となり\n人を喰らい 始めるとして\n人を喰らった その口で\n僕を愛すと 咆えたとして\n僕は果して 今日と同じに\n君を愛すと 言えるだろうか'},
      { img: 'http://ecx.images-amazon.com/images/I/51QtNfJxElL.jpg', poem: '人は皆、猿のまがいもの\n神は皆、人のまがいもの'},
      { img: 'http://ecx.images-amazon.com/images/I/51ZZssaz09L.jpg', poem: '僕は、ついてゆけるだろうか\n君のいない世界のスピードに'},
      { img: 'http://ecx.images-amazon.com/images/I/51s25FszQEL.jpg', poem: '時は常に背後から迫り\n唸りを上げて眼前に流れ去る\n踏み止まれ\n時がお前を 美しい世界へ押し流そうと\nどれほど牙を剥こうとも\n前を見るな\nお前の希望は 背後に迫る\n冥冥たる濁流の中にしかない'},
      { img: 'http://ecx.images-amazon.com/images/I/51-PiQRz-qL.jpg', poem: 'あたしの心に 指を入れないで'},
      { img: 'http://ecx.images-amazon.com/images/I/51m89rIgJlL.jpg', poem: '一緒に数えてくれるかい\n君についた\n僕の歯型を'},
      { img: 'http://ecx.images-amazon.com/images/I/51AJx25RzuL.jpg', poem: '僕が こんなにも若く\nこんなにも未熟であるということが\n老いさらばえ\n完全無欠である大人達には\nどうにも許し難いことのようなのだ'},
      { img: 'http://ecx.images-amazon.com/images/I/516fHQXxN8L.jpg', poem: '変わらぬものは 心だと\n言えるのならば それが強さ'},
      { img: 'http://ecx.images-amazon.com/images/I/51NgW1lSFqL.jpg', poem: '一歩踏み出す 二度と戻れぬ\n三千世界の 血の海へ'},
      { img: 'http://ecx.images-amazon.com/images/I/51acCf%2BupJL.jpg', poem: '軍勢ゆきゆきて喇叭を吹く\n耳鳴り止まず星屑のごとく\n軍靴の轟き雷鳴のごとく'},
      { img: 'http://ecx.images-amazon.com/images/I/51GHaAc5xeL.jpg', poem: '散りて二度とは 咲かずとも\n炎のごとくに 散るぞ美し'},
      { img: 'http://ecx.images-amazon.com/images/I/51pVWKpjn4L.jpg', poem: '魂 燃え立つ\n天の降るとも'},
      { img: 'http://ecx.images-amazon.com/images/I/51xTZjIkwoL.jpg', poem: '戦いこそすべて'},
      { img: 'http://ecx.images-amazon.com/images/I/51TH0XbNI8L.jpg', poem: '罪無きあなたは 太陽のよう\n罪深きあなたも 太陽のよう'},
      { img: 'http://ecx.images-amazon.com/images/I/51ffDt5wLgL.jpg', poem: '私が 世界には危険が満ちていると信じ\nその危険からお前を護りたいと願うのは\n私の中にその危険と同質の\n衝動があるからに ほかならない'},
      { img: 'http://ecx.images-amazon.com/images/I/51jjXAgVqkL.jpg', poem: '己の生に\n抗い続ける\n己の心に\n牙ある限り'},
      { img: 'http://ecx.images-amazon.com/images/I/51KaO6w1SAL.jpg', poem: '生きることと 生かされることに\n違いは無い\n死ぬことと 殺されることに\n違いが無いように'},
      { img: 'http://ecx.images-amazon.com/images/I/511nY%2BvvxeL.jpg', poem: '美しさとは、\nそこに何もないこと'},
      { img: 'http://ecx.images-amazon.com/images/I/51WZN7IasiL.jpg', poem: 'すきだよ\nしぬほど'},
      { img: 'http://ecx.images-amazon.com/images/I/51ZEBwU%2Bp9L.jpg', poem: '断ち斬るものは\n命だけかい'},
      { img: 'http://ecx.images-amazon.com/images/I/519NKOQgJDL.jpg', poem: '御先\n真黒\n真逆様'},
      { img: 'http://ecx.images-amazon.com/images/I/51NGOCOfnkL.jpg', poem: '毒々しくって、\n眩々するだろ？'},
      { img: 'http://ecx.images-amazon.com/images/I/510oxO6tVlL.jpg', poem: '銃弾、鉤爪、軍旗、刀剣、\n五本指折り\nお前を待つ'},
      { img: 'http://ecx.images-amazon.com/images/I/510r8PyyLML.jpg', poem: '痛みはない\nその天秤から\n目を逸らせぬ事以外に'},
      { img: 'http://ecx.images-amazon.com/images/I/51jmle6mYhL.jpg', poem: '吾子の手かわいや さまよう手\n吾をもとめて 流離うて\n寄らば離れる 手をとって\n引きて歩もう 沙汰の果て'},
      { img: 'http://ecx.images-amazon.com/images/I/51dfD2zQ2%2BL.jpg', poem: '言葉に姿があったなら\n暗闇に立つきみに届きはしないだろう'},
      { img: 'http://ecx.images-amazon.com/images/I/51WPDf1DjBL.jpg', poem: '牙より滴る火は消えず\n刃立つ野を焼き払い\n友の姿を炙り出す'},
      { img: 'http://ecx.images-amazon.com/images/I/51tc99r9KpL.jpg/', poem: '我等は 姿無くとも\n歩みは止めず'},
    ],
  };
  return d;
};
