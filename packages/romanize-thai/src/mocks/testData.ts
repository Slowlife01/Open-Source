export const THAI_REGEX = /[\u0E00-\u0E7F]/

export const successTests = [
  {
    input: 'อยากจะเจอเธอทุกวัน',
    romanized: 'yakchachoethoethukwan',
  },
  {
    input: 'คนไทยไม่รักกันใครจะร้องเพลงชาติ',
    romanized: 'khnthaimairakkankhaircharongphelngchati',
  },
  {
    input: 'สมจวย',
    romanized: 'smchuai',
  },
  {
    input: 'ไข่ดิบ (nama tamago)',
    romanized: 'khaidib (nama tamago)',
  },
  {
    input: 'แฟนน่ารักจังเลยยย',
    romanized: 'faennarakchangloeiyy',
  },
  {
    input: 'เติมมาเยอะ',
    romanized: 'toemmayoe',
  },
  {
    input: 'ตะวัน',
    romanized: 'tawan',
  },
  {
    input: 'อยากกินข้าวหมูกรอบ',
    romanized: 'yakkinkhoawhmukrob',
  },
  {
    input: 'ทุกคนเรียกผมว่าแมว',
    romanized: 'thukkhnriakphmuaamaeo',
  },
  {
    input: 'ไก่อยู่ในไข่',
    romanized: 'kaiyunaikhai',
  },
  {
    input: 'รอคิวอิสเวรี่กู้ด',
    romanized: 'rokhioiswerikud',
  },
  {
    input: 'ทำทรงไม่ทำงาน',
    romanized: 'thamthrngmaithamngan',
  },
  {
    input: 'ไม่ต้องเช็คไม่ใช่เด็กใคร',
    romanized: 'maitongchukhmaichaidukkhair',
  },
  {
    input: 'หนุ่มข้าวผัด',
    romanized: 'hnumkhoawphad',
  },
  {
    input: 'ลูซี่บอย',
    romanized: 'lusiboi',
  },
  {
    input: 'อ้ายเหนียว',
    romanized: 'ayheniyua',
  },
  {
    input: 'ออมมี่โยคีในรัศมีวงกลม',
    romanized: 'ommiyokhinairasmiwngklm',
  },
  {
    input: 'ปะกาสิด',
    romanized: 'pakasid',
  },
  {
    input: 'เด็กชายชาตรี  สีสดใส',
    romanized: 'dukchaichatri  sisdsai',
  },
  {
    input: 'วัยรุ่นหมากเก็บ',
    romanized: 'wairunhmakkeb',
  },
  {
    input: 'โซเองนั้น',
    romanized: 'soengnan',
  },
  {
    input: 'อาตอมมมมมมมมมมมมมม',
    romanized: 'atommmmmmmmmmmmmm',
  },
  {
    input: 'มุแง',
    romanized: 'mungae',
  },
  {
    input: 'อยากมัดใจแต่ได้แค่มัดจำ',
    romanized: 'yakmadchaitaedaikhaemadcham',
  },
  {
    input: 'ไข่ดาวต้ม',
    romanized: 'khaidaotom',
  },
  {
    input: 'ฉันพบเจอไก่',
    romanized: 'chanphbchoekai',
  },
  {
    input: 'จองกุกbts',
    romanized: 'chongkukbts',
  },
  {
    input: 'เจ๋ง',
    romanized: 'cheng',
  },
  {
    input: 'เรนนี่เรนโน่นเรนไหนกันแน่',
    romanized: 'rennirennonrenhainkannae',
  },
  {
    input: 'ทำใจ',
    romanized: 'thamchai',
  },
  {
    input: 'มาคับ',
    romanized: 'makhab',
  },
  {
    input: 'จำเราไม่ได้หรอ เราส้มเอง',
    romanized: 'chamraomaidaihro raosomeng',
  },
  {
    input: 'หลอน',
    romanized: 'hlon',
  },
  {
    input: 'บูบู้',
    romanized: 'bubu',
  },
  {
    input: '𖤐⭒๋࣭ ⭑ ꋫ꒒꒐',
    romanized: '𖤐⭒࣭ ⭑ ꋫ꒒꒐',
  },
  {
    input: 'จ้างวาดได้นะฮ้าบ',
    romanized: 'choanguaaddainahoab',
  },
  {
    input: 'หนีฮ่าว',
    romanized: 'hnihaw',
  },
  {
    input: 'อึ่ง',
    romanized: 'ueng',
  },
  {
    input: 'กลับบ้านไม่ถามแม่มึงดูว่ากูใคร',
    romanized: 'klabboanmaithammaemuengduwakukhair',
  },
  {
    input: 'นินะน่ารักจริงนะ',
    romanized: 'ninanarakchringna',
  },
  {
    input: 'เลิกเล่น',
    romanized: 'loeklen',
  },
  {
    input: 'คุณอันกุ่น',
    romanized: 'khunankun',
  },
  {
    input: 'โง่นัก - ZENTYARB',
    romanized: 'ngonak - ZENTYARB',
  },
  {
    input: 'อ้วน',
    romanized: 'wn',
  },
  {
    input: 'ดำดีสีไม่ตก🦄',
    romanized: 'damdisimaitk🦄',
  },
  {
    input: 'Sky(เถียงทันหน่วง)',
    romanized: 'Sky(thiangthanhnwng)',
  },
  {
    input: 'จ้าวเซ็น✨',
    romanized: 'choawsun✨',
  },
  {
    input: 'วุ้นบูด🤞',
    romanized: 'wunbud🤞',
  },
  {
    input: 'เจ้ามันม่วง',
    romanized: 'cheamanomwng',
  },
  {
    input: 'ซี-วิท',
    romanized: 'si-with',
  },
  {
    input: 'ออม',
    romanized: 'om',
  },
  {
    input: 'วอว',
    romanized: 'wow',
  },
  {
    input: 'FC "โอน"',
    romanized: 'FC "on"',
  },
  {
    input: 'หมูปิ้ง',
    romanized: 'hmuping',
  },
  {
    input: 'ปีโป้',
    romanized: 'pipo',
  },
  {
    input: 'ไม่มีอะไรทำ',
    romanized: 'maimiaraitham',
  },
  {
    input: 'เต้าหู้ form China',
    romanized: 'teahu form China',
  },
  {
    input: 'งุงิ',
    romanized: 'ngungi',
  },
  {
    input: 'บะล๊กบะลั๊กกั๊กกะกกกอกอ๊อคออค',
    romanized: 'balkbalakkakkakkkokokhokh',
  },
  {
    input: 'วน',
    romanized: 'wn',
  },
  {
    input: 'วอกน้อย',
    romanized: 'woknooi',
  },
  {
    input: 'ไข่เจียวของออมเล็ต',
    romanized: 'khaichiaokhongomlut',
  },
  {
    input: 'อซฮ \'ㅅ\'',
    romanized: 'sh \'ㅅ\'',
  },
  {
    input: 'ก',
    romanized: 'k',
  },
  {
    input: 'รєє๔',
    romanized: 'rєє4',
  },
  {
    input: 'กนกก้อง',
    romanized: 'knkkong',
  },
  {
    input: 'Ariøภ',
    romanized: 'Ariøph',
  },
  {
    input: 'หายตัว',
    romanized: 'haitua',
  },
  {
    input: 'หยั้ยไหยหยั๊ยยาา',
    romanized: 'hyayhaihyayyaa',
  },
  {
    input: 'ชิก้ามารุ',
    romanized: 'chikoamaru',
  },
  {
    input: 'โฮ่งเหมียว',
    romanized: 'honghemiyua',
  },
  {
    input: 'วัยรุ่นขอบตาดำ',
    romanized: 'wairunkhobtadam',
  },
  {
    input: 'แมวเรืองแสง',
    romanized: 'maeoruangsaeng',
  },
  {
    input: 'แมรี่มี้',
    romanized: 'maerimi',
  },
  {
    input: 'น้องปลาเก๋า',
    romanized: 'nongplakea',
  },
  {
    input: 'มิว. ✈',
    romanized: 'mio. ✈',
  },
  {
    input: 'ϟ ๖  Duda 愛 ᴬᴷᵀ',
    romanized: 'ϟ 6  Duda 愛 ᴬᴷᵀ',
  },
  {
    input: 'หน่องเอฟฟี่',
    romanized: 'hnngeffi',
  },
  {
    input: 'Miเคิล',
    romanized: 'Mikhoel',
  },
  {
    input: 'บู้บินได้ บินแบบไม่มีอะไรมากั้น',
    romanized: 'bubindai binbaebmaimiaraimakan',
  },
  {
    input: 'บะบะบิ',
    romanized: 'bababi',
  },
  {
    input: '๖̶̶̶ζ͜͡Demonikunꡳ҉̶͢͝ꦘ꦳ꦌ꦳',
    romanized: '6̶̶̶ζ͜͡Demonikunꡳ҉̶͢͝ꦘ꦳ꦌ꦳',
  },
  {
    input: 'หลับตลอดไป',
    romanized: 'hlabtlodpai',
  },
  {
    input: 'Ŧєคгɭאรร',
    romanized: 'Ŧєkhгɭאrr',
  },
  {
    input: 'ขาดเธอทำผมเบลอเหมือนขาดหุ้น',
    romanized: 'khadthoethamphmbelohemuenkhadhun',
  },
  {
    input: 'ดูดม้าฟันหลอหรอ',
    romanized: 'dudmoafanhlohro',
  },
  {
    input: 'ไอว้อนทูสะเตอะเวอจิ้น',
    romanized: 'aiwonthusatoewoechin',
  },
  {
    input: 'หนองโพ',
    romanized: 'hnongpho',
  },
  {
    input: 'งั่มมม !!',
    romanized: 'ngammm !!',
  },
  {
    input: 'ηαчтσкร',
    romanized: 'ηαчтσкr',
  },
  {
    input: 'มา3อย่าถาม4',
    romanized: 'ma3oiatham4',
  },
  {
    input: 'สมหมายชายแท้',
    romanized: 'smhmaichaithae',
  },
  {
    input: '! 𝔅𝔢𝔫𝔦𝔱𝔞๖ۣۜᴳᵒ',
    romanized: '! 𝔅𝔢𝔫𝔦𝔱𝔞6ۣۜᴳᵒ',
  },
  {
    input: 'บิ๊กจง',
    romanized: 'bikchng',
  },
  {
    input: 'empty คาเฟ่',
    romanized: 'empty khafe',
  },
  {
    input: 'จองลิซ',
    romanized: 'chonglis',
  },
  {
    input: 'อแปม',
    romanized: 'paem',
  },
  {
    input: 'ชีวิตอยากมี.....................',
    romanized: 'chiwitoiakmi.....................',
  },
  {
    input: 'เราเก่งมาก',
    romanized: 'raokengmak',
  },
  {
    input: 'รำคาญ?',
    romanized: 'ramkhay?',
  },
  {
    input: 'จี๊ดเลอ',
    romanized: 'chidloe',
  },
  {
    input: 'ระบบเติม Valorant โคตรซิ่ง',
    romanized: 'rabbtoem Valorant khotrsing',
  },
  {
    input: 'อะจึ้กกึ๋ยยยยยยยยยย',
    romanized: 'achuekkueyyyyyyyyyy',
  },
  {
    input: 'อ้นเทพซ่า 007',
    romanized: 'nthephsa 007',
  },
  {
    input: '🌈โนนา',
    romanized: '🌈nona',
  },
  {
    input: 'P\'parn NaJa  ป่าน(2)/25',
    romanized: 'P\'parn NaJa  pan(2)/25',
  },
  {
    input: 'ไม่มีตังค่าาาาา``',
    romanized: 'maimitangkhaaaaa``',
  },
  {
    input: 'ปะเย้',
    romanized: 'paye',
  },
  {
    input: 'ยูมิ',
    romanized: 'yumi',
  },
  {
    input: 'หมาหนม',
    romanized: 'hmahnom',
  },
  {
    input: 'สวัสดีท่านผู้เจริญ',
    romanized: 'swasdithanphucheriy',
  },
  {
    input: 'ยูกิ',
    romanized: 'yuki',
  },
  {
    input: '! √૯ทѳʍ !',
    romanized: '! √૯thѳʍ !',
  },
  {
    input: 'กวิน',
    romanized: 'kwin',
  },
  {
    input: 'เจ้าเคออ',
    romanized: 'cheakhoe',
  },
  {
    input: '🌸นุ่มนิ่ม.🌸',
    romanized: '🌸numnim.🌸',
  },
  {
    input: 'มาตามหาไก่ทอด',
    romanized: 'matamahakaithod',
  },
  {
    input: '!τнєυsiทнσ ࣪ ࣪ ࣪',
    romanized: '!τнєυsithнσ ࣪ ࣪ ࣪',
  },
  {
    input: 'บี เอ เอส',
    romanized: 'bi e es',
  },
  {
    input: '🐳แฟนแม่บ้าน',
    romanized: '🐳faenmaeboan',
  },
  {
    input: 'นายเกิอดใหม่มารวยแน่',
    romanized: 'naikoedhaimmaruainae',
  },
  {
    input: 'หัวดอ',
    romanized: 'huado',
  },
  {
    input: 'ชินจัง',
    romanized: 'chinchang',
  },
  {
    input: 'ฟดหดเห้ห้ห',
    romanized: 'fdhdhehoh',
  },
  {
    input: 'ยิ้มม เธอทำได้อยู่แล้ว',
    romanized: 'yimm thoethamdaiyulaew',
  },
  {
    input: 'ชาเหมียว',
    romanized: 'chahemiyua',
  },
  {
    input: 'พี่เขาสุดเท่่',
    romanized: 'phikhaosudthe',
  },
  {
    input: 'มะลิ',
    romanized: 'mali',
  },
  {
    input: 'นุ้งมิ้ว',
    romanized: 'nungmiw',
  },
  {
    input: '๖̶̶̶ζ͜ᴍᴀɴɢᴇᴋʏᴏuჯ',
    romanized: '6̶̶̶ζ͜ᴍᴀɴɢᴇᴋʏᴏuჯ',
  },
  {
    input: 'จัดจ่าดดด',
    romanized: 'chadchaddd',
  },
  {
    input: 'มาจากสีเขียว🈯',
    romanized: 'machaksikhiao🈯',
  },
  {
    input: 'อันดา',
    romanized: 'anda',
  },
  {
    input: 'น๋องมอล',
    romanized: 'nngmol',
  },
  {
    input: '★꧁๖ۣۣۜ𝓓𝖆𝖗ҟ꧂★',
    romanized: '★꧁6ۣۣۜ𝓓𝖆𝖗ҟ꧂★',
  },
  {
    input: 'KUMAʕ•ᴥ•ʔ เด็กดีค้าบบบบบบบ',
    romanized: 'KUMAʕ•ᴥ•ʔ dukdikhoabbbbbbb',
  },
  {
    input: 'ดูควยหน่อย',
    romanized: 'dukhuaihnoi',
  },
  {
    input: 'ชลบุรี สายซิ่ง',
    romanized: 'chlburi saising',
  },
  {
    input: 'ศิลปะ ไร้ขอบเขต',
    romanized: 'silpa raikhobkhet',
  },
  {
    input: 'ครับ',
    romanized: 'khrab',
  },
  {
    input: 'สวัสดีค้าบ',
    romanized: 'swasdikhoab',
  },
  {
    input: 'โลมา',
    romanized: 'loma',
  },
  {
    input: 'ไอเวร',
    romanized: 'aiwer',
  },
  {
    input: 'บังจู งูนิดเดียว',
    romanized: 'bangchu nguniddiao',
  },
  {
    input: 'ผมง่วงครับ',
    romanized: 'phmngwngkhrab',
  },
  {
    input: 'คุณส้มส้ม',
    romanized: 'khunsomsom',
  },
  {
    input: 'ไข่ดาวเจียว',
    romanized: 'khaidaochiao',
  },
  {
    input: 'จะไปเดินเล่นบนดาวไม้ไผ่',
    romanized: 'chapaidoenlenbndaomaiphai',
  },
  {
    input: '⚡๖ۣۜ㉺DEMIﾂ⚡',
    romanized: '⚡6ۣۜ㉺DEMIﾂ⚡',
  },
  {
    input: 'ฮีโร่บาย ร่างโกรธสุดขีด',
    romanized: 'hirobai rangkorthsudkhid',
  },
  {
    input: 'คาโมโนฮาชิ รอน',
    romanized: 'khamonohachi ron',
  },
  {
    input: 'ประธานเบล',
    romanized: 'prathanbel',
  },
  {
    input: 'ด.ช.______________',
    romanized: 'd.ch.______________',
  },
  {
    input: 'หมู',
    romanized: 'hmu',
  },
  {
    input: 'น้องเกมตัวร้ายย',
    romanized: 'nongkemtuaroayy',
  },
  {
    input: 'ฟิวน้อย',
    romanized: 'fuainooi',
  },
  {
    input: 'กระบี่คู่ ผู้พิชิต',
    romanized: 'krabikhu phuphichit',
  },
  {
    input: 'ฮัมตี้ดัมตี้',
    romanized: 'hamtidamti',
  },
  {
    input: 'โล้นซ่า',
    romanized: 'lonsa',
  },
  {
    input: 'แทนแท้น',
    romanized: 'thaenthaen',
  },
  {
    input: 'สยอง',
    romanized: 'syong',
  },
  {
    input: 'มองหา',
    romanized: 'mongha',
  },
  {
    input: 'หอดูดาวโฮชิมาจิ 💫',
    romanized: 'hodudaohochimachi 💫',
  },
  {
    input: 'ครูมอส',
    romanized: 'khrumos',
  },
  {
    input: 'เจ้าหนูจำไม🐭',
    romanized: 'cheahnuchammai🐭',
  },
  {
    input: 'ขี้ค่าคาราบาว',
    romanized: 'khikhakharabao',
  },
  {
    input: 'ตะแน่ว',
    romanized: 'tanaew',
  },
  {
    input: 'สุดคับรีให้',
    romanized: 'sudkhabrihai',
  },
  {
    input: 'พูล',
    romanized: 'phul',
  },
  {
    input: 'แซน :3',
    romanized: 'saen :3',
  },
  {
    input: 'นู๋โมโน ฮาทาริ',
    romanized: 'numono hathari',
  },
  {
    input: '๖ۣۜAntinonymous',
    romanized: '6ۣۜAntinonymous',
  },
  {
    input: 'คิม จุ๊กกุ้',
    romanized: 'khim chukku',
  },
  {
    input: 'น้องเก๋า',
    romanized: 'nongkea',
  },
  {
    input: 'Z\'Gok II ตัวจริง',
    romanized: 'Z\'Gok II tuachring',
  },
  {
    input: 'พาลอยมีอัลลัย',
    romanized: 'phaloimiallai',
  },
  {
    input: '๋࣭⋆⁺₊𝖑𝖎𝖓𝖆',
    romanized: '࣭⋆⁺₊𝖑𝖎𝖓𝖆',
  },
  {
    input: 'เข้าสู่ห้วงนิทรา 🌙✨',
    romanized: 'kheasuhowngnithra 🌙✨',
  },
  {
    input: 'เด็กเอ๋อ',
    romanized: 'duke',
  },
  {
    input: 'วาโรมั้ยอ้าย',
    romanized: 'waromayoay',
  },
  {
    input: 'กุอะรุ่นเก้า',
    romanized: 'kuarunkea',
  },
  {
    input: '่Cyas.74',
    romanized: 'Cyas.74',
  },
  {
    input: 'มัมหมีน้อนหมีเนย🐻',
    romanized: 'mamhminonhminoei🐻',
  },
  {
    input: 'หรอยเลยเจ้า',
    romanized: 'hroiloeichea',
  },
  {
    input: 'พีน้อย1มิล',
    romanized: 'phinooi1mil',
  },
  {
    input: 'นกพิราบ',
    romanized: 'nkphirab',
  },
  {
    input: 'ฟอฟอ',
    romanized: 'fofo',
  },
  {
    input: 'ตัวผมไร้ขนมคงหิว',
    romanized: 'tuaphmraikhnomkhnghio',
  },
  {
    input: 'โคโคมิยะ',
    romanized: 'khokhomiya',
  },
  {
    input: 'โจรบราซิล',
    romanized: 'chorbrasil',
  },
  {
    input: 'กล้วยหอมจอมซน',
    romanized: 'klowyhomchomsn',
  },
  {
    input: 'สามหก',
    romanized: 'samhk',
  },
  {
    input: 'อ้ายอวบบ',
    romanized: 'ayowbb',
  },
  {
    input: 'ไททันปอ',
    romanized: 'thaithanpo',
  },
  {
    input: 'เอ่าเห้ย',
    romanized: 'eahey',
  },
  {
    input: 'ოﻨĸձﻨl  |  սռսรεժռεժ',
    romanized: 'ოﻨĸձﻨl  |  սռսrεժռεժ',
  },
  {
    input: '🧁 ꜜ ᎒ ๑₍ᐢ..ᐢ₎',
    romanized: '🧁 ꜜ ᎒ 1₍ᐢ..ᐢ₎',
  },
  {
    input: 'นายสะเหล่อ',
    romanized: 'naisahel',
  },
  {
    input: 'ɱ૯ςคՐ੮Һɿɱ-ც',
    romanized: 'ɱ૯ςkhՐ੮Һɿɱ-ც',
  },
  {
    input: 'น้อนหมูหยอง',
    romanized: 'nonhmuhyong',
  },
  {
    input: 'โต้โฟ',
    romanized: 'tofo',
  },
  {
    input: 'ﮩ٨ـﮩﮩ٨ـᘜส𝔟𝓻ḭᶓ𝙡𝙡ﮩ٨ـﮩﮩ٨ـ',
    romanized: 'ﮩ٨ـﮩﮩ٨ـᘜs𝔟𝓻ḭᶓ𝙡𝙡ﮩ٨ـﮩﮩ٨ـ',
  },
  {
    input: 'ป่านมีพฤติกรรมลอกเลียนแบบ',
    romanized: 'panmiphruetikamloklianbaeb',
  },
  {
    input: '✎☣♕ώA ҉ しじ✥Є ❧ วี♚☬㎯',
    romanized: '✎☣♕ώA ҉ しじ✥Є ❧ wi♚☬㎯',
  },
  {
    input: 'แม่มึงเก่งสุด',
    romanized: 'maemuengkengsud',
  },
  {
    input: 'ดิวดิ่วดิ้วดิ๊วดิ๋ว',
    romanized: 'diodiwdiwdiwdiw',
  },
  {
    input: 'สิงหา.',
    romanized: 'singha.',
  },
  {
    input: 'ควยเคริง',
    romanized: 'khuaikhering',
  },
  {
    input: '﹆ ⁺₊ ลูกแพร ˎˊ˗',
    romanized: '﹆ ⁺₊ lukphaer ˎˊ˗',
  },
  {
    input: '❥๖Capitão๖',
    romanized: '❥6Capitão6',
  },
  {
    input: 'ดิสโดนhack',
    romanized: 'disdonhack',
  },
  {
    input: 'Zaberคุง',
    romanized: 'Zaberkhung',
  },
  {
    input: 'Asst. Prof. Dr. หม่า',
    romanized: 'Asst. Prof. Dr. hma',
  },
  {
    input: 'ชีแก๊ก',
    romanized: 'chikaek',
  },
  {
    input: '⋆ มู้ววว ♡̶',
    romanized: '⋆ muwuaw ♡̶',
  },
  {
    input: 'หวาดดีฮ้าฟ',
    romanized: 'hwaddihoaf',
  },
  {
    input: 'เด้น',
    romanized: 'den',
  },
  {
    input: 'ฅᨐฅ',
    romanized: 'khᨐkh',
  },
  {
    input: 'ขันที ที่ไม่ขัน',
    romanized: 'khanthi thimaikhan',
  },
  {
    input: 'คำคมบาดแผล',
    romanized: 'khamkhmbadphael',
  },
  {
    input: 'น้องเจนดึกกี้',
    romanized: 'nongchenduekki',
  },
  {
    input: 'ยุงบินหรือยุงเดิน?',
    romanized: 'yungbinhrueyungdoen?',
  },
  {
    input: 'แว ยู ฟันปลอม?',
    romanized: 'wae yu fanplom?',
  },
  {
    input: 'Hauru (๑• . •๑)',
    romanized: 'Hauru (1• . •1)',
  },
  {
    input: 'จ้อน',
    romanized: 'chon',
  },
  {
    input: 'กูว่าแล้วมึงต้องอ่าน',
    romanized: 'kuwalaewmuengtongoan',
  },
  {
    input: 'เซฟ',
    romanized: 'sef',
  },
  {
    input: 'แมวง่วง',
    romanized: 'maeongwng',
  },
  {
    input: 'งูงุ้ยฮุยจุยงาา',
    romanized: 'ngunguyhuichuingaa',
  },
  {
    input: '๖̶̶̶ζ͜͡ᴍᴀᴅᴀʀᴀ 天',
    romanized: '6̶̶̶ζ͜͡ᴍᴀᴅᴀʀᴀ 天',
  },
  {
    input: 'เกลเดซิบ้อง',
    romanized: 'keldesibong',
  },
  {
    input: '悲しみ [คะนะชิมิ] ความเศร้าโศก',
    romanized: '悲しみ [khanachimi] khwamseroasok',
  },
  {
    input: 'หนุ่มรูปงาม',
    romanized: 'hnumrupngam',
  },
  {
    input: 'เลิกบูลลี่แก้มฉัน !!!!!',
    romanized: 'loekbullikaemchan !!!!!',
  },
  {
    input: 'บาบูด',
    romanized: 'babud',
  },
  {
    input: 'อย่าทำให้ผมโกด',
    romanized: 'oiathamhaiphmkod',
  },
  {
    input: 'เซียนไพ่ที่แพ้ริสุครั้งที่ 3',
    romanized: 'sianphaithiphaerisukhrangthi 3',
  },
  {
    input: 'Luภα❥',
    romanized: 'Luphα❥',
  },
  {
    input: 'หมาเฉิน',
    romanized: 'hmachoen',
  },
  {
    input: 'มุแง้༼ つ ◕_◕ ༽つ',
    romanized: 'mungae༼ つ ◕_◕ ༽つ',
  },
  {
    input: 'ไอน้อง',
    romanized: 'ainong',
  },
  {
    input: 'เจ',
    romanized: 'che',
  },
  {
    input: 'น้อนบู้บี้',
    romanized: 'nonbubi',
  },
  {
    input: 'กระผมนายวรชาน วงชายชานชัยช่งชัน',
    romanized: 'kraphmnaiwrchan wngchaichanchaichngchan',
  },
  {
    input: '蝴蝶忍(๑• . •๑)',
    romanized: '蝴蝶忍(1• . •1)',
  },
  {
    input: 'เปิ้ล',
    romanized: 'poel',
  },
  {
    input: 'เธอ',
    romanized: 'thoe',
  },
  {
    input: 'แซ่มแล่ม',
    romanized: 'saemlaem',
  },
  {
    input: 'อาโมจินเยลล',
    romanized: 'amochinyell',
  },
  {
    input: 'PoroTHEPSSA007 (Poroเทพซ่า007)',
    romanized: 'PoroTHEPSSA007 (Porothephsa007)',
  },
  {
    input: 'แกงพะแนง',
    romanized: 'kaengphanaeng',
  },
  {
    input: 'ออซอ',
    romanized: 'oso',
  },
  {
    input: 'พี่หมี🐻',
    romanized: 'phihmi🐻',
  },
  {
    input: 'น้องปลาเค็มของพี่',
    romanized: 'nongplakhumkhongphi',
  },
  {
    input: 'ตกจนท้อขอนอนต่อดีกว่าไหม',
    romanized: 'tkchnthokhonontdikwahaim',
  },
  {
    input: 'เต็มสิบหักหมด',
    romanized: 'tumsibhakhmd',
  },
  {
    input: 'ทาด๊าาาาาาาาาา',
    romanized: 'thadaaaaaaaaaa',
  },
  {
    input: 'กิโรโระ',
    romanized: 'kiroro',
  },
  {
    input: 'ไมกั่น',
    romanized: 'maikan',
  },
  {
    input: 'Suiinetaihennゞ💐(ตุ้ยนุ้ย)',
    romanized: 'Suiinetaihennゞ💐(tuynuy)',
  },
  {
    input: 'มะวิ้งมะแว๊บ',
    romanized: 'mawingmawaeb',
  },
  {
    input: 'โกโก้กล้วย_🍌',
    romanized: 'kokoklowy_🍌',
  },
  {
    input: 'กัร',
    romanized: 'kar',
  },
  {
    input: 'ผมคือผู้วิเศษ',
    romanized: 'phmkhuephuwises',
  },
  {
    input: 'ค้าน',
    romanized: 'khoan',
  },
  {
    input: 'รantymïg_ 🏰',
    romanized: 'rantymïg_ 🏰',
  },
  {
    input: 'ฝุ่นมันเข้าตา',
    romanized: 'funmankheata',
  },
  {
    input: 'พนักงานขายประกัน',
    romanized: 'phnakngankhaiprakan',
  },
  {
    input: 'ดีงับ',
    romanized: 'dingab',
  },
  {
    input: 'ทีมมี่',
    romanized: 'thimmi',
  },
  {
    input: 'อ๋วง',
    romanized: 'wng',
  },
  {
    input: 'นายปากกา',
    romanized: 'naipakka',
  },
  {
    input: 'เชเช่',
    romanized: 'cheche',
  },
  {
    input: 'ตอนู',
    romanized: 'tonu',
  },
  {
    input: 'อีห่านี่  ปากน่าโดนตีนปุดปุดกั๊บ',
    romanized: 'ihani  paknadontinpudpudkab',
  },
  {
    input: 'หนู',
    romanized: 'hnu',
  },
  {
    input: 'สมิตรา',
    romanized: 'smitra',
  },
  {
    input: 'Kunกัน',
    romanized: 'Kunkan',
  },
  {
    input: 'คุ คี คัง คาม',
    romanized: 'khu khi khang kham',
  },
  {
    input: 'นกเดินดิน',
    romanized: 'nkdoendin',
  },
  {
    input: 'ธรรมะกระตุกจิตกระชากใจ',
    romanized: 'thamakratukchitkrachakchai',
  },
  {
    input: 'คิดเชิงทดลอง',
    romanized: 'khidchoengthdlong',
  },
  {
    input: 'โต้',
    romanized: 'to',
  },
  {
    input: 'มาโร',
    romanized: 'maro',
  },
  {
    input: 'หัวใจของเธอมิกิขอนะ💙',
    romanized: 'huachaikhongthoemikikhona💙',
  },
  {
    input: 'คุณท่านขนมต้มโอบทหารราบ',
    romanized: 'khunthankhnomtomobthahanrab',
  },
  {
    input: 'น้องดัง',
    romanized: 'nongdang',
  },
  {
    input: 'แบดบอย',
    romanized: 'baedboi',
  },
  {
    input: 'โอเคร สุดหล่อ',
    romanized: 'okher sudhl',
  },
  {
    input: 'ใข่เจียว',
    romanized: 'khaichiao',
  },
  {
    input: 'kikค',
    romanized: 'kikkh',
  },
  {
    input: 'อ้อมกอด<3',
    romanized: 'mkod<3',
  },
  {
    input: 'มุแง้ด',
    romanized: 'mungaed',
  },
  {
    input: 'ของแบบนี้นี่รักเลย',
    romanized: 'khongbaebninirakloei',
  },
  {
    input: 'ઝ¡ทg -૮ѳѳℓ_gαʍ૯૨54',
    romanized: 'ઝ¡thg -૮ѳѳℓ_gαʍ૯૨54',
  },
  {
    input: 'ไม่ใช่หนาาา',
    romanized: 'maichaihnaaa',
  },
  {
    input: 'บุ้งกี๋',
    romanized: 'bungki',
  },
  {
    input: 'พ่อบ้าน切妻・ファン🥀',
    romanized: 'phboan切妻・ファン🥀',
  },
  {
    input: 'กัปตัน โดนแบน',
    romanized: 'kaptan donbaen',
  },
  {
    input: 'มันคือแป้ง',
    romanized: 'mankhuepaeng',
  },
  {
    input: 'โก๋ยโต๋ย',
    romanized: 'koytoy',
  },
  {
    input: 'โต้เทพในเงา ราชามังกรบนมือขวา',
    romanized: 'tothephnaingao rachamangkrbnmuekhuaa',
  },
  {
    input: 'โฮกปิป',
    romanized: 'hokpip',
  },
  {
    input: 'โลมา',
    romanized: 'loma',
  },
  {
    input: 'ชัคกี้เด็กดี',
    romanized: 'chakhkidukdi',
  },
  {
    input: 'นอยwa',
    romanized: 'noiwa',
  },
  {
    input: 'อาฉิงชี่',
    romanized: 'achingchi',
  },
  {
    input: 'พิกกี้บู้',
    romanized: 'phikkibu',
  },
  {
    input: '่่๋Jane Janebhop',
    romanized: 'Jane Janebhop',
  },
  {
    input: 'ฉันนินิว',
    romanized: 'channinio',
  },
  {
    input: 'ยู มัง กะ ซอ',
    romanized: 'yu mang ka so',
  },
  {
    input: 'พายมึงต้อ',
    romanized: 'phaimuengto',
  },
  {
    input: 'กินนมก่อนนอนนะ!',
    romanized: 'kinnomknnonna!',
  },
  {
    input: '£₹💷❄🧊🧋ไอ้เจv1🌠❗',
    romanized: '£₹💷❄🧊🧋aichev1🌠❗',
  },
  {
    input: 'ไอลาา',
    romanized: 'ailaa',
  },
  {
    input: 'ชินาม่อนนนน',
    romanized: 'chinamnnnn',
  },
  {
    input: 'ขจร',
    romanized: 'khchr',
  },
  {
    input: 'บริกรชาย',
    romanized: 'brikrchai',
  },
  {
    input: 'อย่ามาอยู่กับกุ้ง',
    romanized: 'oiamayukabkung',
  },
  {
    input: 'สมดุ๋ย',
    romanized: 'smduy',
  },
  {
    input: 'รู้อยู้สบู่ไทย',
    romanized: 'ruyusbuthai',
  },
  {
    input: 'อัยแม้ว',
    romanized: 'aymaew',
  },
  {
    input: 'คุณกิตติ',
    romanized: 'khunkitti',
  },
  {
    input: 'มอเฟียส',
    romanized: 'mofias',
  },
  {
    input: 'ฉันคืออาตี๋',
    romanized: 'chankhueati',
  },
  {
    input: 'คุณบอล',
    romanized: 'khunbol',
  },
  {
    input: 'ชาไทยขลั่ยหมาสำหรับน้องมุก',
    romanized: 'chathaikhlayhmasamhrabnongmuk',
  },
  {
    input: 'เห็ดหอมแมวเป้า',
    romanized: 'hedhommaeopea',
  },
  {
    input: 'หมูทอดlover',
    romanized: 'hmuthodlover',
  },
  {
    input: 'มัมมามี่ย่าาาาา',
    romanized: 'mammamiyaaaaa',
  },
  {
    input: 'ตุ๋ยเอง',
    romanized: 'tuyeng',
  },
  {
    input: 'พี่หน่วง',
    romanized: 'phihnwng',
  },
  {
    input: 'จิตปล่อยวาง',
    romanized: 'chitplyuaang',
  },
  {
    input: 'คɭєรเคシ',
    romanized: 'khɭєrkheシ',
  },
  {
    input: 'ส้มส้ม',
    romanized: 'somsom',
  },
  {
    input: 'ปลาทูหาย',
    romanized: 'plathuhai',
  },
  {
    input: 'CQC อวกาศไม้ตียุง',
    romanized: 'CQC uakasmaitiyung',
  },
  {
    input: 'นอนได้แล้ว',
    romanized: 'nondailaew',
  },
  {
    input: '29วันลาบ',
    romanized: '29wanlab',
  },
  {
    input: 'ช่องคลอด',
    romanized: 'chngkhlod',
  },
  {
    input: 'ซึม:7',
    romanized: 'suem:7',
  },
  {
    input: 'น้องแพรพีพีพีอาเอ้ก',
    romanized: 'nongphaerphiphiphiaek',
  },
  {
    input: 'สนองยุพิณ',
    romanized: 'snongyuphin',
  },
  {
    input: 'ข้าวเหนียวข้าวเหนียว',
    romanized: 'khoawheniyuakhoawheniyua',
  },
  {
    input: 'ตวย',
    romanized: 'tuai',
  },
  {
    input: 'ร𝒽∂ค𝐍ч𝓏Đ',
    romanized: 'r𝒽∂kh𝐍ч𝓏Đ',
  },
  {
    input: 'Maka (มากะ)',
    romanized: 'Maka (maka)',
  },
  {
    input: 'nymph 𓏲๋',
    romanized: 'nymph 𓏲',
  },
  {
    input: 'ชีวิต❤',
    romanized: 'chiwit❤',
  },
  {
    input: 'สว่างแดนดิน',
    romanized: 'suaangdaendin',
  },
  {
    input: 'มุซาชิ#6666',
    romanized: 'musachi#6666',
  },
  {
    input: 'ความรักมันคืออะไร',
    romanized: 'khwamrakmankhuearai',
  },
  {
    input: 'ไอ้กล้วย',
    romanized: 'aiklowy',
  },
  {
    input: 'กล้วยอบเนยโรยเกลือ',
    romanized: 'klowyobnoeiroikelue',
  },
  {
    input: 'ปิ้งไก่',
    romanized: 'pingkai',
  },
  {
    input: '₊˚ ᨳ ୨`🍯`୧ Mew ๑₊˚',
    romanized: '₊˚ ᨳ ୨`🍯`୧ Mew 1₊˚',
  },
  {
    input: 'ฟ้ารักพ่อ',
    romanized: 'foarakph',
  },
  {
    input: 'เพ็ดดีกรีอร่อยดี',
    romanized: 'phuddikriroidi',
  },
  {
    input: 'สม.ที่แปลว่าสัดมีน',
    romanized: 'sm.thipaeluaasadmin',
  },
  {
    input: 'ฮา เดส.',
    romanized: 'ha des.',
  },
  {
    input: 'ดำเดิง',
    romanized: 'damdoeng',
  },
  {
    input: 'อยากติดจุฬา',
    romanized: 'yaktidchula',
  },
  {
    input: 'เอราบาบี',
    romanized: 'erababi',
  },
  {
    input: 'ซง จุงกิต',
    romanized: 'sng chungkit',
  },
  {
    input: 'นิติง่ายกี่โมง',
    romanized: 'nitingaykimong',
  },
  {
    input: 'ฮัมตี้ดัมตี้',
    romanized: 'hamtidamti',
  },
  {
    input: 'โกโก้ปั่นตราตุ๊กแก',
    romanized: 'kokopantratukkae',
  },
  {
    input: 'ใข่มุก....อิอิ',
    romanized: 'khaimuk....ii',
  },
  {
    input: 'SoDiumเองงับ',
    romanized: 'SoDiumengngab',
  },
  {
    input: 'เบนจี สมีทาว',
    romanized: 'benchi smithao',
  },
  {
    input: 'หยักกินป๋องแป๋ง~~',
    romanized: 'hyakkinpngpaeng~~',
  },
  {
    input: 'ปิงราชานรก',
    romanized: 'pingrachanrk',
  },
  {
    input: 'รินรักท่านนายพลเฟยเซียว',
    romanized: 'rinrakthannaiphlfaoeisiao',
  },
  {
    input: 'พวกกุเด็กพระนคร Underground',
    romanized: 'phuakkudukphrankhr Underground',
  },
  {
    input: 'ก๋าตุ๋ย🐰',
    romanized: 'katuy🐰',
  },
  {
    input: 'ร้อยคนทักผมรักพ่อหลวง',
    romanized: 'rooikhnthakphmrakphhluang',
  },
  {
    input: 'ไม่รู้อะไร',
    romanized: 'mairuarai',
  },
  {
    input: 'ขนม มี รู',
    romanized: 'khnom mi ru',
  },
  {
    input: 'อะตี๋',
    romanized: 'ati',
  },
  {
    input: 'ขอยาดดAxe,nA.',
    romanized: 'khoiaddAxe,nA.',
  },
  {
    input: 'นอย',
    romanized: 'noi',
  },
  {
    input: 'จ้า',
    romanized: 'choa',
  },
  {
    input: 'ปลิดปลิวดั่งใบไม้ร่วง',
    romanized: 'plidpliodangbaimairwng',
  },
  {
    input: 'ชอบกินมิ้นช้อค',
    romanized: 'chobkinminchokh',
  },
  {
    input: 'ยโสdo not eat',
    romanized: 'ysodo not eat',
  },
  {
    input: 'ดุ๋ย',
    romanized: 'duy',
  },
  {
    input: 'มะม๋า',
    romanized: 'mama',
  },
  {
    input: 'อาบูดดาบี้',
    romanized: 'abuddabi',
  },
  {
    input: '【✨⋆≽ᕕทᴛ҈ᴴδภყ≼⋆⚡】',
    romanized: '【✨⋆≽ᕕthᴛ҈ᴴδphყ≼⋆⚡】',
  },
  {
    input: 'เมฆ',
    romanized: 'mekh',
  },
  {
    input: 'แล้วแต่ชอบ',
    romanized: 'laewtaechob',
  },
  {
    input: '💗(/◕ヮ◕)/💗✦(โม)✦',
    romanized: '💗(/◕ヮ◕)/💗✦(mo)✦',
  },
  {
    input: 'ปุ๊กปิ๊ก',
    romanized: 'pukpik',
  },
  {
    input: 'ผีหลอกวิญญาณหลอน',
    romanized: 'phihlokwiyyanhlon',
  },
  {
    input: 'ไอฟิ้ดเกตูด',
    romanized: 'aifidketud',
  },
  {
    input: 'อ้นนนนนน~~~~~',
    romanized: 'nnnnnn~~~~~',
  },
  {
    input: 'กระต่ายหูตก ! ୨ৎ',
    romanized: 'kratayhutk ! ୨ৎ',
  },
  {
    input: 'MUTUKEK ชายที่กลับมาจากนรก',
    romanized: 'MUTUKEK chaithiklabmachaknrk',
  },
  {
    input: 'ข้าวต้มปลาวาฬ',
    romanized: 'khoawtomplaoal',
  },
  {
    input: 'Arm ลูคีเมีย',
    romanized: 'Arm lukhimia',
  },
  {
    input: 'เจ็บจากเขา โทรหาเราได้',
    romanized: 'chubchakkhao thorharaodai',
  },
  {
    input: 'หวาย',
    romanized: 'hwai',
  },
  {
    input: 'พีเองไอ้น้อง',
    romanized: 'phiengainong',
  },
  {
    input: 'อร่อย',
    romanized: 'roi',
  },
  {
    input: 'มะหมวย',
    romanized: 'mahmuai',
  },
  {
    input: 'ต้นสน',
    romanized: 'tonsn',
  },
  {
    input: 'ถถถถถถ',
    romanized: 'thththththth',
  },
  {
    input: 'อรุ้ยจร้าา 👌😍',
    romanized: 'ruychroaa 👌😍',
  },
  {
    input: 'กูจะบ้า',
    romanized: 'kuchaboa',
  },
  {
    input: 'แอ๋ว',
    romanized: 'aew',
  },
  {
    input: 'แมวฟ้า',
    romanized: 'maeofoa',
  },
  {
    input: 'ไอ้ดุ่ย',
    romanized: 'aiduy',
  },
  {
    input: 'ลูกพระเจ้าตาก',
    romanized: 'lukphracheatak',
  },
  {
    input: 'ญาญ่าญ้าญ๊าญ๋า',
    romanized: 'yayayayaya',
  },
  {
    input: 'ไอ่แพร',
    romanized: 'aiphaer',
  },
  {
    input: 'อย่ายุ่งดิ้!!!',
    romanized: 'oiayungdi!!!',
  },
  {
    input: 'ข้าวจ่าว',
    romanized: 'khoawchaw',
  },
  {
    input: 'ปลุกกู',
    romanized: 'plukku',
  },
  {
    input: 'ต้าวหมาส้ม',
    romanized: 'toawhmasom',
  },
  {
    input: 'นักเล่านิทาน',
    romanized: 'nakleanithan',
  },
  {
    input: 'น้องมี่',
    romanized: 'nongmi',
  },
  {
    input: 'อ้ายส่งสุดแขน เขาแทงสุดโคน',
    romanized: 'aysngsudkhaen khaothaengsudkhon',
  },
  {
    input: 'เปลี่ยนทำไมก่อน',
    romanized: 'peliynthammaikn',
  },
  {
    input: 'มวย',
    romanized: 'muai',
  },
  {
    input: 'ตี๋ใหญ่',
    romanized: 'tihaiy',
  },
  {
    input: 'รุ้',
    romanized: 'ru',
  },
  {
    input: 'อีกานdekhere',
    romanized: 'ikandekhere',
  },
  {
    input: 'แพนนี่ขยี้ใบ',
    romanized: 'phaennikhyibai',
  },
  {
    input: 'แบทแมน',
    romanized: 'baethmaen',
  },
  {
    input: 'โน่ ท้ายอโรสม่า',
    romanized: 'no thoayorosma',
  },
  {
    input: 'โอ่งตูมต้าม',
    romanized: 'ongtumtoam',
  },
  {
    input: '30 สิงหา',
    romanized: '30 singha',
  },
  {
    input: 'แบทแมว',
    romanized: 'baethmaeo',
  },
  {
    input: 'มอลานะมาลีก',
    romanized: 'molanamalik',
  },
  {
    input: 'กินท่อม ไปค่อมเธอ',
    romanized: 'kinthm paikhmthoe',
  },
  {
    input: 'meow - อ่าน berserk',
    romanized: 'meow - an berserk',
  },
  {
    input: 'ป๋าโลมา',
    romanized: 'paloma',
  },
  {
    input: 'กุยช่าย',
    romanized: 'kuichay',
  },
  {
    input: 'กาหนกวัน',
    romanized: 'kahnkwan',
  },
  {
    input: 'โอปอ',
    romanized: 'opo',
  },
  {
    input: 'กูจะบ้า',
    romanized: 'kuchaboa',
  },
  {
    input: 'มุดสังกำลังทำวิจัย',
    romanized: 'mudsangkamlangthamwichai',
  },
  {
    input: 'หมูหมึกกุ้ง',
    romanized: 'hmuhmuekkung',
  },
  {
    input: 'มันอร่อยมากกกกกกก',
    romanized: 'manoroimakkkkkkk',
  },
  {
    input: 'ไก๋ไก่',
    romanized: 'kaikai',
  },
  {
    input: 'ต๋อง',
    romanized: 'tng',
  },
  {
    input: 'สยามเดม',
    romanized: 'syamdem',
  },
  {
    input: 'ค๊อก ค๊อก',
    romanized: 'khk khk',
  },
  {
    input: 'ไม่รู้ไม่บอก',
    romanized: 'mairumaibok',
  },
  {
    input: 'พอจอ',
    romanized: 'phocho',
  },
  {
    input: '۞𝕐𝕒𝕟۞ฅ^•ﻌ•^ฅ',
    romanized: '۞𝕐𝕒𝕟۞kh^•ﻌ•^kh',
  },
  {
    input: 'จุ๋มจิ๋ม',
    romanized: 'chumchim',
  },
  {
    input: 'ไร้นาม',
    romanized: 'rainam',
  },
  {
    input: 'บังเอง',
    romanized: 'bangeng',
  },
  {
    input: 'I have แม่ลิง',
    romanized: 'I have maeling',
  },
  {
    input: 'โหมดไม่ระบุตัวตน',
    romanized: 'homdmairabutuatn',
  },
  {
    input: 'แมวเด๋อ',
    romanized: 'maeode',
  },
  {
    input: 'แมวส๊มมมมม',
    romanized: 'maeosmmmmm',
  },
  {
    input: 'ย้ายดิส',
    romanized: 'yoaydis',
  },
  {
    input: 'น้องออนิว',
    romanized: 'nongonio',
  },
  {
    input: 'ยาหยี',
    romanized: 'yahyi',
  },
  {
    input: 'เลิกเล่นละ',
    romanized: 'loeklenla',
  },
  {
    input: 'เป็นผง',
    romanized: 'punphng',
  },
  {
    input: 'บีม.',
    romanized: 'bim.',
  },
  {
    input: 'วิปครีม',
    romanized: 'wipkhrim',
  },
  {
    input: 'ฮีฮี่~~~~',
    romanized: 'hihi~~~~',
  },
  {
    input: 'นิสิต',
    romanized: 'nisit',
  },
  {
    input: 'ติ๋ม',
    romanized: 'tim',
  },
  {
    input: 'จอจิ๊บ',
    romanized: 'chochib',
  },
  {
    input: 'ททชชชชชชช',
    romanized: 'ththchchchchchchch',
  },
  {
    input: 'มาเฟียไดโน',
    romanized: 'mafiadaino',
  },
  {
    input: 'หลวงพี่ลีจัดให้',
    romanized: 'hluangphilichadhai',
  },
  {
    input: 'เจเจเจ',
    romanized: 'checheche',
  },
  {
    input: 'ข้าวเกรียบกุ้ง',
    romanized: 'khoawkeriybkung',
  },
  {
    input: 'สะม๋อยต๋อย',
    romanized: 'samoitoi',
  },
  {
    input: 'แป๋ว',
    romanized: 'paew',
  },
  {
    input: 'เลิกปากหมาไอ้ควาย',
    romanized: 'loekpakhmaaikhwai',
  },
  {
    input: 'ตบขยะ',
    romanized: 'tbkhya',
  },
  {
    input: 'โก๋ยโต๋ยเรือ',
    romanized: 'koytoyrua',
  },
  {
    input: 'นอยเองหายเอง',
    romanized: 'noienghaieng',
  },
  {
    input: 'Dia ฅ^•ﻌ•^ฅ',
    romanized: 'Dia kh^•ﻌ•^kh',
  },
  {
    input: 'หน้าไม่ผ่านเขาเลยอ่านไม่ตอบ',
    romanized: 'hnoamaiphankhaoloeianmaitob',
  },
  {
    input: 'ผัดไทยใส่เป็ด',
    romanized: 'phadthaisaipud',
  },
  {
    input: 'นปนปนปนปนป',
    romanized: 'npnpnpnpnp',
  },
  {
    input: 'เอมมี่เองคะบ',
    romanized: 'emmiengkhab',
  },
  {
    input: 'มาเฟียหาดใหญ่',
    romanized: 'mafiahadhaiy',
  },
  {
    input: 'เอลซ่า',
    romanized: 'elsa',
  },
  {
    input: 'ต้น',
    romanized: 'ton',
  },
  {
    input: 'เกินปุ้ยมุ้ย',
    romanized: 'koenpuymuy',
  },
  {
    input: 'มุแง',
    romanized: 'mungae',
  },
  {
    input: 'งดเกมครับ หมดสภาพ',
    romanized: 'ngdkemkhrab hmdsphaph',
  },
  {
    input: 'สับปะโร้ด🤩',
    romanized: 'sabparod🤩',
  },
  {
    input: 'ฮัลโล้วมายเฟร้นน',
    romanized: 'hallowmaiferonn',
  },
  {
    input: '★  ไม่มีตัวตน ★',
    romanized: '★  maimituatn ★',
  },
  {
    input: 'เจนนวย',
    romanized: 'chennuai',
  },
  {
    input: 'น้งมอนนี่!',
    romanized: 'nongmonni!',
  },
  {
    input: 'เจ้าตูบ',
    romanized: 'cheatub',
  },
  {
    input: 'คิมคิม',
    romanized: 'khimkhim',
  },
  {
    input: 'ชาน',
    romanized: 'chan',
  },
  {
    input: 'ปอฟอคอบอ',
    romanized: 'pofokhobo',
  },
  {
    input: 'เด็กชายลาพีด',
    romanized: 'dukchailaphid',
  },
  {
    input: 'ตันเอง',
    romanized: 'taneng',
  },
  {
    input: 'นิคกี้',
    romanized: 'nikhki',
  },
  {
    input: 'อนาคตจะเป็นทหารครับ',
    romanized: 'nakhtchapunthahankhrab',
  },
  {
    input: 'โอย',
    romanized: 'oy',
  },
  {
    input: 'มองไรคะ',
    romanized: 'mongraikha',
  },
  {
    input: 'เบ้บ',
    romanized: 'beb',
  },
  {
    input: 'Babeนม',
    romanized: 'Babenom',
  },
  {
    input: 'ถง',
    romanized: 'thng',
  },
  {
    input: 'โอ้',
    romanized: 'o',
  },
  {
    input: '˚ ༘♡ฮันนี่ยากิ❀⋆₊˚',
    romanized: '˚ ༘♡hanniyaki❀⋆₊˚',
  },
  {
    input: 'จุ๊บเหม่ง',
    romanized: 'chubhemng',
  },
  {
    input: 'จจ',
    romanized: 'chch',
  },
  {
    input: 'มอเต็มกระด๋อย',
    romanized: 'motumkradoi',
  },
  {
    input: 'แมวชุบแป้งทอด🐾',
    romanized: 'maeochubpaengthod🐾',
  },
  {
    input: 'ชะม้อย 🐌🌼',
    romanized: 'chamooi 🐌🌼',
  },
  {
    input: 'เกินปุยมุ้ย',
    romanized: 'koenpuimuy',
  },
  {
    input: 'โคตะมีใจ',
    romanized: 'khotamichai',
  },
  {
    input: 'ง่วงนอน',
    romanized: 'ngwngnon',
  },
  {
    input: 'วาววาว',
    romanized: 'waowao',
  },
  {
    input: '𝗠_𝘅𝗻.𖥔 ݁ ˖๋ ࣭ ⭑',
    romanized: '𝗠_𝘅𝗻.𖥔 ݁ ˖ ࣭ ⭑',
  },
  {
    input: 'สุดหล่อออ',
    romanized: 'sudhlo',
  },
  {
    input: 'อิน',
    romanized: 'in',
  },
  {
    input: 'โคตรซิ่ง',
    romanized: 'khotrsing',
  },
  {
    input: '๑ᵒᯅᵒ๑',
    romanized: '1ᵒᯅᵒ1',
  },
  {
    input: 'กูนอนแต่ออนดิส',
    romanized: 'kunontaeondis',
  },
  {
    input: 'ฟ่งTepซ่า007',
    romanized: 'fngTepsa007',
  },
  {
    input: 'ฮายย~',
    romanized: 'haiy~',
  },
  {
    input: 'โจ',
    romanized: 'cho',
  },
  {
    input: 'หา AK ยิงเด็กแว้นแถวบ้าน',
    romanized: 'ha AK yingdukwaentaeoboan',
  },
  {
    input: 'ครับ',
    romanized: 'khrab',
  },
  {
    input: 'คิม',
    romanized: 'khim',
  },
  {
    input: 'ไก่งวงควงไข่',
    romanized: 'kainguangkhuangkhai',
  },
  {
    input: '๖̶ζ͜͡ND Nxmi',
    romanized: '6̶ζ͜͡ND Nxmi',
  },
  {
    input: 'กูวินเว้ย',
    romanized: 'kuwinwey',
  },
  {
    input: 'อย่ากด กูโดนแฮค',
    romanized: 'oiakd kudonhaekh',
  },
  {
    input: 'นายโต้',
    romanized: 'naito',
  },
  {
    input: 'มือเปล่าให้สอง มีของให้หมด',
    romanized: 'muepelahaisong mikhonghaihmd',
  },
  {
    input: 'นอนค้าบบบนอนนน',
    romanized: 'nonkhoabbbnonnn',
  },
  {
    input: 'หมา',
    romanized: 'hma',
  },
  {
    input: 'ตัวตึงเมากาว',
    romanized: 'tuatuengmaokao',
  },
  {
    input: '╰┈➤คrคtค-໓คi-໓คiki-kนຖ˚ ༘ ♡ ⋆.˚',
    romanized: '╰┈➤khrkhtkh-໓khi-໓khiki-knຖ˚ ༘ ♡ ⋆.˚',
  },
  {
    input: 'โรนัลโด้บ้านร่องฟอง',
    romanized: 'ronaldoboanrngfong',
  },
  {
    input: 'น้องเพลงมูฮาฮาฮา',
    romanized: 'nongphelngmuhahaha',
  },
  {
    input: 'คิคุ',
    romanized: 'khikhu',
  },
  {
    input: 'Juliaฅ^•ﻌ•^ฅ',
    romanized: 'Juliakh^•ﻌ•^kh',
  },
  {
    input: 'อยากเล่นฟีฟาย',
    romanized: 'yaklenfifai',
  },
  {
    input: 'โจเซฟ',
    romanized: 'chosef',
  },
  {
    input: 'mkkkkkkkkkkkkสุกี้',
    romanized: 'mkkkkkkkkkkkksuki',
  },
  {
    input: 'นักปราบผู้มีความใจเกเร',
    romanized: 'nakprabphumikhwamchaikere',
  },
  {
    input: 'หิวข้าว24ชม.',
    romanized: 'hiokhoaw24chm.',
  },
  {
    input: 'ขี้',
    romanized: 'khi',
  },
  {
    input: 'เด็กดี',
    romanized: 'dukdi',
  },
  {
    input: '๖ۣۜDᴀᴇᴍᴏɴLᴏʀᴅ_Nᴏᴍɪ༻࿌𖣘',
    romanized: '6ۣۜDᴀᴇᴍᴏɴLᴏʀᴅ_Nᴏᴍɪ༻࿌𖣘',
  },
  {
    input: 'Mr. Best จะพาเธอลอย',
    romanized: 'Mr. Best chaphathoeloi',
  },
  {
    input: 'ตังครับ',
    romanized: 'tangkhrab',
  },
  {
    input: 'กอกิตสกิดไข่',
    romanized: 'kokitskidkhai',
  },
  {
    input: 'แมวโง่',
    romanized: 'maeongo',
  },
  {
    input: 'เด็กน้อย9ตวบบ',
    romanized: 'duknooi9tuabb',
  },
  {
    input: 'ตาย',
    romanized: 'tai',
  },
  {
    input: 'ห๊าา',
    romanized: 'haa',
  },
  {
    input: 'คิว',
    romanized: 'khio',
  },
  {
    input: 'ไอโล้นซ่า007',
    romanized: 'ailonsa007',
  },
  {
    input: 'ไก่เล้ง ต้มแซ่บ',
    romanized: 'kaileng tomsaeb',
  },
  {
    input: 'ไม่มีไรป่าว',
    romanized: 'maimiraipaw',
  },
  {
    input: 'กองมี',
    romanized: 'kongmi',
  },
  {
    input: 'ฟอตอมอ',
    romanized: 'fotomo',
  },
  {
    input: 'ขวยขิง',
    romanized: 'khuaikhing',
  },
  {
    input: 'วุ้นบูด!',
    romanized: 'wunbud!',
  },
  {
    input: 'ไม่ใช่ละมุดแต่เป็นลำไยนิ',
    romanized: 'maichailamudtaepunlamyaini',
  },
  {
    input: 'โบโบ้เอง',
    romanized: 'boboeng',
  },
  {
    input: 'สหายใบขม',
    romanized: 'shaibaikhm',
  },
  {
    input: 'มิจิ',
    romanized: 'michi',
  },
  {
    input: 'เอล',
    romanized: 'el',
  },
  {
    input: 'ตัวร้อนไข้สูง😷🤒',
    romanized: 'tuaronkhaisung😷🤒',
  },
  {
    input: 'จีจี้ ฟอจูน',
    romanized: 'chichi fochun',
  },
  {
    input: '๖ζ͜͡Mikey Sano',
    romanized: '6ζ͜͡Mikey Sano',
  },
  {
    input: '₊🌸❜ ⋮ Arisa ๑˚₊',
    romanized: '₊🌸❜ ⋮ Arisa 1˚₊',
  },
  {
    input: 'Tea ธีฮ้าฟฟู้',
    romanized: 'Tea thihoaffu',
  },
  {
    input: 'สวัสดีครับผมผี',
    romanized: 'swasdikhrabphmphi',
  },
  {
    input: 'พอ.',
    romanized: 'pho.',
  },
  {
    input: 'ยิ้มหวาน✨',
    romanized: 'yimhwan✨',
  },
  {
    input: 'สุกี้ยากี้',
    romanized: 'sukiyaki',
  },
  {
    input: 'พาคินนาคี.com',
    romanized: 'phakhinnakhi.com',
  },
  {
    input: 'ควยnether',
    romanized: 'khuainether',
  },
  {
    input: 'ลูน่าตูดหมึก',
    romanized: 'lunatudhmuek',
  },
  {
    input: '₊˚๑ ଘ🩰ഒ 𝐚𝐩𝐡𝐫𝐨𝐝𝐢𝐭𝐞 ❜₊✧',
    romanized: '₊˚1 ଘ🩰ഒ 𝐚𝐩𝐡𝐫𝐨𝐝𝐢𝐭𝐞 ❜₊✧',
  },
  {
    input: 'ซอยจุ',
    romanized: 'soichu',
  },
  {
    input: 'จะรีบไปไนหทำไมไม่นอนนี่',
    romanized: 'charibpainaihthammaimainonni',
  },
  {
    input: 'นอน',
    romanized: 'non',
  },
  {
    input: 'น้อนน่ารัก',
    romanized: 'nonnarak',
  },
  {
    input: 'lทพซ่าหมาเห่า',
    romanized: 'lthphsahmahea',
  },
  {
    input: 'สวัสดีครับ',
    romanized: 'swasdikhrab',
  },
  {
    input: 'ข้าวมันไก่',
    romanized: 'khoawmankai',
  },
  {
    input: 'กากีนัง',
    romanized: 'kakinang',
  },
  {
    input: 'อยากกินปลาย่าง',
    romanized: 'yakkinplaiang',
  },
  {
    input: 'พระยาพิชัยดาบหัก',
    romanized: 'phrayaphichaidabhak',
  },
  {
    input: 'หาไรกินดีกว่า',
    romanized: 'haraikindikwa',
  },
  {
    input: 'ยินดี',
    romanized: 'yindi',
  },
  {
    input: 'ไปครับเมีย',
    romanized: 'paikhrabmia',
  },
  {
    input: 'เดสคุงง',
    romanized: 'deskhungng',
  },
  {
    input: 'เทอมีABCแต่เทอไม่มีD',
    romanized: 'thoemiABCtaethoemaimiD',
  },
  {
    input: 'หมาป่าขี้เซา',
    romanized: 'hmapakhisao',
  },
  {
    input: 'โดนัทนัทโดโดเนทเนทนัท',
    romanized: 'donathnathdodonethnethnath',
  },
  {
    input: 'ทาจิบานะ',
    romanized: 'thachibana',
  },
  {
    input: 'ملاحظة 🥀(เนซึเกะหน้าม่วง)',
    romanized: 'ملاحظة 🥀(nesuekuhnoamwng)',
  },
  {
    input: 'โลกมันเหลี่ยมมมม',
    romanized: 'lokmanheliymmmm',
  },
  {
    input: 'หยกซี่',
    romanized: 'hyksi',
  },
  {
    input: 'ผัวเผลอแล้วเจอกัน',
    romanized: 'phuaphelolaewchoekan',
  },
  {
    input: 'Guมาลีเอง',
    romanized: 'Gumalieng',
  },
  {
    input: 'เกทอด',
    romanized: 'kethod',
  },
  {
    input: 'sparkle ⭑๋܂෨',
    romanized: 'sparkle ⭑܂෨',
  },
  {
    input: 'ครีมมี่',
    romanized: 'khrimmi',
  },
  {
    input: 'สิฮิน้องบ่',
    romanized: 'sihinongb',
  },
  {
    input: 'พีพีพีพีพีพีพีพีพีพีพีพีพีพีพีพี',
    romanized: 'phiphiphiphiphiphiphiphiphiphiphiphiphiphiphiphi',
  },
  {
    input: 'ต้าทั่วเท่อชั่วปู๋ย้าหลาย',
    romanized: 'toathawthechawpuyoahlai',
  },
  {
    input: 'พิซซ่า',
    romanized: 'phissa',
  },
  {
    input: 'รักพี่เรน♥',
    romanized: 'rakphiren♥',
  },
  {
    input: 'โดนดักช่วยที',
    romanized: 'dondakchwythi',
  },
  {
    input: 'นิคสุดหล่อ',
    romanized: 'nikhsudhl',
  },
  {
    input: 'หัวหน้าเผ่า',
    romanized: 'huahnoaphea',
  },
  {
    input: '＜๑ⵗⵗ﹒﹙`🎹`﹚﹒𝙱𝚎𝚛𝚛𝚢𝟺𝚛 ﹒ ᥪꪫ⌣',
    romanized: '＜1ⵗⵗ﹒﹙`🎹`﹚﹒𝙱𝚎𝚛𝚛𝚢𝟺𝚛 ﹒ ᥪꪫ⌣',
  },
  {
    input: 'รักน้องชา😘',
    romanized: 'raknongcha😘',
  },
  {
    input: 'popcatสุดepic',
    romanized: 'popcatsudepic',
  },
  {
    input: 'ได้เวลาออกล่า',
    romanized: 'daiwelaokla',
  },
  {
    input: 'Rov กัน',
    romanized: 'Rov kan',
  },
]

export const failingTests = [
  {
    input: 'วิบวูบ',
    romanized: 'wibuaูb',
  },
  {
    input: 'บนบ้านมีอะไรว่ะ',
    romanized: 'bnboanmiaไruaะ',
  },
  {
    input: 'แจ้มๆ',
    romanized: 'chaemๆ',
  },
  {
    input: 'ผมอยากเป็นสตรีมเมอร์',
    romanized: 'phmoiakpunstrimmoer์',
  },
  {
    input: 'ทีนี้ก็ว้าวุ่นเลย',
    romanized: 'thinik็woawunloei',
  },
  {
    input: 'ไวท์',
    romanized: 'waith์',
  },
  {
    input: 'แพะบุญชื่น',
    romanized: 'phaebuychืn',
  },
  {
    input: 'ใส่สบงเเล้วทรงเเรปเปอร์',
    romanized: 'saisbngเlewthrngเreppoer์',
  },
  {
    input: 'คิดชื่อ ไม่ออก',
    romanized: 'khidchื maiok',
  },
  {
    input: 'คิดถึงพี่มี้',
    romanized: 'khidthึngphimi',
  },
  {
    input: 'มะคำพรื่อหนิ',
    romanized: 'makhamphrืhni',
  },
  {
    input: 'น้องนํ้าตาล',
    romanized: 'nongnํatal',
  },
  {
    input: 'ไฟต์ ราฟาเอล.',
    romanized: 'fait์ rafael.',
  },
  {
    input: 'เศร้าว่ะ',
    romanized: 'seroawะ',
  },
  {
    input: 'วันนี้กูชนหมาวันหน้ากูจะชนมึง',
    romanized: 'wannikuchnhmaoัnhnoakuchachnmueng',
  },
  {
    input: 'ไม่หล่อเท่าเขาแต่เราเท่าแขน',
    romanized: 'maihlเthakhaotaeraoเthakhaen',
  },
  {
    input: 'แกออกจากเซฟโซนเมื่อไหร่แกเจอแน่',
    romanized: 'แkokchaksefsonmeืhairkaechoenae',
  },
  {
    input: 'ด.ญ. สไปเดอร์แมน',
    romanized: 'd.y. spaidoer์maen',
  },
  {
    input: 'นอร์ท (North)',
    romanized: 'nor์th (North)',
  },
  {
    input: 'น้องคานะน่ารักนะะะ',
    romanized: 'nongkhananaraknaะะ',
  },
  {
    input: 'ก๋วยเตี๋ยว~',
    romanized: 'kwyเtiyua~',
  },
  {
    input: 'ก๋วยเตี๋ยว',
    romanized: 'kwyเtiyua',
  },
  {
    input: 'SZ-★Takumi★สไปร์ท',
    romanized: 'SZ-★Takumi★spair์th',
  },
  {
    input: 'ซุปค้างคาวไม่ค้างคืน',
    romanized: 'supkhoangkhaomaikhoangkhืn',
  },
  {
    input: 'บะ..บัดสีที่สุดค่ะ!!!',
    romanized: 'ba..badsithisudkhะ!!!',
  },
  {
    input: 'เจ๊สี่น้ำหดอดล้างตูด',
    romanized: 'chesinoำhdodloangtud',
  },
  {
    input: 'ก็เขียวเเหละ',
    romanized: 'k็khiaoเhela',
  },
  {
    input: 'มองหน้าหาเรื่อง',
    romanized: 'monghnoahareืng',
  },
  {
    input: 'ผมทำเพื่อพ่อ แต่ผมโดนงอน',
    romanized: 'phmthampheืph taephmdonngon',
  },
  {
    input: 'NOoๅเอน',
    romanized: 'NOoๅen',
  },
  {
    input: 'เสือ',
    romanized: 'เsue',
  },
  {
    input: 'DANGแดงวิไรรัตน์Vilairat',
    romanized: 'DANGdaenguaิrairatn์Vilairat',
  },
  {
    input: 'บล็อคเคอรี่บ๋อย',
    romanized: 'bl็khkhoeriboi',
  },
  {
    input: 'ฟอร์ด เรนเจอร์ แร็พเตอร์',
    romanized: 'for์d renchoer์ rae็phtoer์',
  },
  {
    input: '๋ซอซองอึน',
    romanized: 'sosongoึn',
  },
  {
    input: 'สตอร์เบอรี่มรกต',
    romanized: 'stor์boerimrkt',
  },
  {
    input: 'ศุภวิชญ์แก๊งโตเกียวมันจิไค',
    romanized: 'suphwichy์kaengtokiaomanchikhai',
  },
  {
    input: 'แม่มึงอะโดนกูตุ๋ย',
    romanized: 'maemuengoะdonkutuy',
  },
  {
    input: '! ด.ช.สมเย็ด เอียงซ้ายแม่ยายรัก',
    romanized: '! d.ch.smyud เiyngsoaymaeyairak',
  },
  {
    input: 'เชฟเอียน',
    romanized: 'chefเiyn',
  },
  {
    input: 'พ่ำ เพ่ง โพ่ง',
    romanized: 'phำ pheng phong',
  },
  {
    input: 'ไม่เคยลืมเลือน',
    romanized: 'maikhoeilืmเluen',
  },
  {
    input: 'ฝนตกฟ้ามันฮึมๆ',
    romanized: 'fntkfoamanhuemๆ',
  },
  {
    input: 'เกมเมอร์โตนสเลง',
    romanized: 'kemmoer์tonsleng',
  },
  {
    input: 'พระนครอยู่บนเเมพ',
    romanized: 'phrankhroiูbnเmeph',
  },
  {
    input: 'กบิลพัสดุ์คุง',
    romanized: 'kbilphasdu์khung',
  },
  {
    input: 'ง่วงนอนเเต่ไม่นอน',
    romanized: 'ngwngnonเtemainon',
  },
  {
    input: 'ผู้ที่ก้าวไปบนวิถีแห่งสวรรค์',
    romanized: 'phuthikoawpaibnuaิthีhaengswakh์',
  },
  {
    input: 'บาราเอียเอ',
    romanized: 'baraเiye',
  },
  {
    input: 'มีหัวใจไว้รักก๋วยเตี๋ยว',
    romanized: 'mihuachaiwairakkwyเtiyua',
  },
  {
    input: 'ถึงจะเตี้ยแต่ก็เหยียบตีนมึงได้นะ',
    romanized: 'thึngchaเtiytaek็hoeiีybtinmuengdaina',
  },
  {
    input: 'ไาดไ่ดไยดยสไท',
    romanized: 'ไadไdyaidysthai',
  },
  {
    input: 'ปัสสาวะ',
    romanized: 'passaoะ',
  },
  {
    input: 'น้ำปลาจืด',
    romanized: 'noำplachืd',
  },
  {
    input: 'พ้คข้ขรเีขเรขเขอ',
    romanized: 'phokhkhokhrเีkhrekhkhoe',
  },
  {
    input: 'ไวรุ่นไหวชิว',
    romanized: 'wairunไhuachio',
  },
  {
    input: 'ไม่สนิทบิดหมดไม่สลดบิดอีก',
    romanized: 'maisnithbidhmdmaisldbidoีk',
  },
  {
    input: 'ฤฆ๐ฎกไกแ',
    romanized: 'ruekh0dkkaiแ',
  },
  {
    input: 'ตะแมะแอ๊ะะะ',
    romanized: 'tamaeaeะะะ',
  },
  {
    input: 'เบื่อมึง',
    romanized: 'beืmueng',
  },
  {
    input: 'เล่นให้ดีเหมือนปากก็พอ',
    romanized: 'lenhaidihemuenpakk็pho',
  },
  {
    input: 'Bank จะเอา GTR อะ',
    romanized: 'Bank chaเa GTR a',
  },
  {
    input: 'ผู้หมวดกิบส์เจ๋ง',
    romanized: 'phuhmuadkibs์cheng',
  },
  {
    input: 'ตัวแสบแถบอีสาน',
    romanized: 'tuasaebแthboีsan',
  },
  {
    input: 'จักเถื่อเเน่',
    romanized: 'chakเthืเne',
  },
  {
    input: 'เพื่อนๆอย่าร้อนเงินกัน',
    romanized: 'pheืnๆoiaronngoenkan',
  },
  {
    input: 'ดอร็อค',
    romanized: 'dor็kh',
  },
  {
    input: 'ยัตล็อค8',
    romanized: 'yatl็kh8',
  },
  {
    input: 'กูชื่อ \'Kailek โว้ยยย!',
    romanized: 'kuchื \'Kailek woyyy!',
  },
  {
    input: 'เหวย',
    romanized: 'เhuai',
  },
  {
    input: 'นนท์',
    romanized: 'nnth์',
  },
  {
    input: '✦ ผู้ใช้บัญชีนี้ถูกแบน !!!',
    romanized: '✦ phuchaibaychinithูkbaen !!!',
  },
  {
    input: 'เตงโย๊ะ',
    romanized: 'tengyoะ',
  },
  {
    input: 'พรี่แซมเองน่ะเออ  /-.-.-/',
    romanized: 'phrisaemengnะe  /-.-.-/',
  },
  {
    input: 'ถุงพิหิตให',
    romanized: 'thุngphihithai',
  },
  {
    input: 'เฟรชไงที่ยิ้มหวานๆッ',
    romanized: 'ferchngaithiyimhwanๆッ',
  },
  {
    input: 'แมวดีย์🔧',
    romanized: 'maeodiy์🔧',
  },
  {
    input: 'หมอลำเอาให้',
    romanized: 'hmolamเahai',
  },
  {
    input: 'พี่ยงจะเฟี้ยวและเลี้ยวไปไหนอยูปะ',
    romanized: 'phiyngchaเfiyualaeเliyuapaihainoiูpa',
  },
  {
    input: 'เบื่อว้อยยยยยย',
    romanized: 'beืuaoiyyyyy',
  },
  {
    input: 'พันตรี ทาเนีย เดอกูเรเชฟฟ์ 💢',
    romanized: 'phantri thania doekurecheff์ 💢',
  },
  {
    input: 'ทายเอา',
    romanized: 'thaiเa',
  },
  {
    input: 'เธอๆชื่อไรอะ',
    romanized: 'thoeๆchืไroะ',
  },
  {
    input: 'ไหวป่าวลุงงงงงงงงงงงงงงงงงง',
    romanized: 'ไhuapawlungngngngngngngngngngngngngngngngngng',
  },
  {
    input: 'คุณชายลืม นอน',
    romanized: 'khunchailืm non',
  },
  {
    input: 'มาร์ติน',
    romanized: 'mar์tin',
  },
  {
    input: 'น่าเบื่อจังเลย!!!!!!!!',
    romanized: 'nabeืchangloei!!!!!!!!',
  },
  {
    input: 'แม็ก',
    romanized: 'mae็k',
  },
  {
    input: 'ชี้นกชี้ไม้ชี้พ่อมึงก็ตายนะไอสัส',
    romanized: 'chinkchimaichiphmuengk็tainaaisas',
  },
  {
    input: 'เอ็กซ์',
    romanized: 'e็ks์',
  },
  {
    input: 'เจ็บจี๊ด! หวานเจี๊ยบ!',
    romanized: 'chubchid! hwanเchiyb!',
  },
  {
    input: 'เคาะงวย',
    romanized: 'khaoะnguai',
  },
  {
    input: 'ม่วงชิงทรัพย์',
    romanized: 'mwngchingthraphy์',
  },
  {
    input: 'อ.น้องไอซ์',
    romanized: '.nongais์',
  },
  {
    input: 'เรียลมั้ยล่ะ',
    romanized: 'rialmaylะ',
  },
  {
    input: 'ภะวะรัน',
    romanized: 'phะwaran',
  },
  {
    input: 'โอ็ตแหละ',
    romanized: 'o็thaela',
  },
  {
    input: 'สระไอไม้มะลายอออ่างซอโซ่การันต์',
    romanized: 'sraaimaimalaioangsosokanัnt์',
  },
  {
    input: 'แฮ่มๆ ツ',
    romanized: 'haemๆ ツ',
  },
  {
    input: 'มุ้บมิ้บอุอิอุอิ',
    romanized: 'mubmiboุiui',
  },
  {
    input: 'ซันเงาะ',
    romanized: 'sanngaoะ',
  },
  {
    input: 'จบละะ',
    romanized: 'chblaะ',
  },
  {
    input: 'เบื่อด้วย',
    romanized: 'beืdowy',
  },
  {
    input: 'เรียลเบียวเบื่อ',
    romanized: 'rialbiaobeื',
  },
  {
    input: 'ไก่เหี่ยว',
    romanized: 'kaiเhiyua',
  },
  {
    input: 'กระหนูยทมๆ',
    romanized: 'krahnuythmๆ',
  },
  {
    input: 'ขอเผือกหน่อยครับ 😏หุ้หิ...',
    romanized: 'khoเphuekhnoikhrab 😏huhi...',
  },
  {
    input: 'สารวัตรแจ๊ะ',
    romanized: 'saruaัtrchaeะ',
  },
  {
    input: 'สมองดีเท่าปากก็น่าจะฉลาดเป็นอสต.',
    romanized: 'smongdiเthapakk็nachachladpunost.',
  },
  {
    input: 'ตัวร้ายฝั่งธนล่ารอยยิ้มวันเพ็ญ',
    romanized: 'tuaroayfangthnlaroiyimuaัnphuy',
  },
  {
    input: 'น้องภาระ',
    romanized: 'nongphanะ',
  },
  {
    input: 'เจมส์ ชาวไร่',
    romanized: 'chems์ chaorai',
  },
  {
    input: 'มะแงวมีอาไย',
    romanized: 'maแnguamiayai',
  },
  {
    input: 'บันนี่บุ๋ยๆ🫧',
    romanized: 'bannibuyๆ🫧',
  },
  {
    input: 'สมศักดิ์ จู๋ยืนยง',
    romanized: 'smsakdi์ chuyืnyng',
  },
  {
    input: 'มะเขือเทศ',
    romanized: 'maเkhuethes',
  },
  {
    input: '1%ก็ถือว่าเป็นโอกาส',
    romanized: '1%k็thืuaapunokas',
  },
  {
    input: 'อ า ซ้ อ K̶ G̶ ( หั ว แ ค ล น )',
    romanized: ' a so  K̶ G̶ ( ha w แ kh l n )',
  },
  {
    input: 'นปโปะหม่ำๆ',
    romanized: 'nppohmำๆ',
  },
  {
    input: 'ดางหางฮัลเลย์',
    romanized: 'danghanghalloei์',
  },
  {
    input: 'เจนที่ชื่อว่าเจน',
    romanized: 'chenthichืuaachen',
  },
  {
    input: 'สวัสดีครับคุณอาธรรมมรงค์',
    romanized: 'swasdikhrabkhunathammrngkh์',
  },
  {
    input: 'ดริปๆ',
    romanized: 'dripๆ',
  },
  {
    input: 'รק๏t.',
    romanized: 'rק๏t.',
  },
  {
    input: 'ซอยๆนกคุ้มหลี่',
    romanized: 'soiๆnkkhumhli',
  },
  {
    input: '🤤น้ำลายไหลย้อน',
    romanized: '🤤noำlaihailyon',
  },
  {
    input: 'เลือนลางจางหาย',
    romanized: 'เluenlangchanghai',
  },
  {
    input: 'ไม่ใหญ่ไม่โต๋เลยไม่โก้ไม่เฟี้ยว',
    romanized: 'maihaiymaitoloeimaikomaiเfiyua',
  },
  {
    input: 'น้องนอร์ทเอง',
    romanized: 'nongnor์theng',
  },
  {
    input: 'แงว',
    romanized: 'แngua',
  },
  {
    input: 'ชานมวันมอ☕',
    romanized: 'chanmuaัnmo☕',
  },
  {
    input: 'ภาวิณี',
    romanized: 'phawinี',
  },
  {
    input: 'มู มินฯ.',
    romanized: 'mu minฯ.',
  },
  {
    input: 'บริษัท กำจัดเรื้อน',
    romanized: 'brisath kamchadreืn',
  },
  {
    input: 'เเมวเมี๊ยวจะรับฟังคุณเอง',
    romanized: 'เเmuaเmiyuacharabfangkhuneng',
  },
  {
    input: 'ธรรมนัสพงษ์เผ่า',
    romanized: 'thamnasphngs์phea',
  },
  {
    input: 'รคlคzคг ภเl๏',
    romanized: 'rkhlkhzkhг phเl๏',
  },
  {
    input: 'ไซส์โล',
    romanized: 'sais์lo',
  },
  {
    input: 'ชื่อยูครับ',
    romanized: 'chืyukhrab',
  },
  {
    input: 'คิงส์แลนด์',
    romanized: 'khings์laend์',
  },
  {
    input: 'เภง',
    romanized: 'เphng',
  },
  {
    input: 'จตุรงค์ เสาเวียง',
    romanized: 'chturngkh์ saowiang',
  },
  {
    input: 'โก๊ะโจ',
    romanized: 'koะcho',
  },
  {
    input: 'เอ๊ะ?!',
    romanized: 'eะ?!',
  },
  {
    input: 'ฉันหน่ะเป็นนึ่งเดี๋ยวกับความือ',
    romanized: 'chanhnะpunnuengเdiyuakabkhwamื',
  },
  {
    input: 'มนต์รักน้องอึนแช',
    romanized: 'mnt์raknongoึnchae',
  },
  {
    input: 'ม้าเบอร์ตอง888',
    romanized: 'moaboer์tong888',
  },
  {
    input: 'แล้วพี่ทำไรเธอยัง',
    romanized: 'laewphithamraiเthoiัng',
  },
  {
    input: 'มองดาวในถุงกาว',
    romanized: 'mongdaonaithุngkao',
  },
  {
    input: 'ฟู่่ๆๆๆๆๆๆๆๆๆ',
    romanized: 'fuๆๆๆๆๆๆๆๆๆ',
  },
  {
    input: 'อู้ดๆ',
    romanized: 'udๆ',
  },
  {
    input: 'คุณหนูฟอร์ด',
    romanized: 'khunhnufor์d',
  },
  {
    input: 'อิฐจะเอาGTR',
    romanized: 'ithchaเaGTR',
  },
  {
    input: 'น้องเดียร์',
    romanized: 'nongdiar์',
  },
  {
    input: 'ควยไรไอสัสห๊ะ',
    romanized: 'khuairaiaisashะ',
  },
  {
    input: 'ฮุสซาซ่า บัทเตอร์ฟาย',
    romanized: 'hussasa bathtoer์fai',
  },
  {
    input: 'น้ำดื่มสิงโตนำโชครถแห่',
    romanized: 'noำdืmsingtonamchokhrthhae',
  },
  {
    input: 'กันตพัฒน์',
    romanized: 'kantphathn์',
  },
  {
    input: 'เบืิอพวกอ่อร',
    romanized: 'beืิphuakor',
  },
  {
    input: 'คิดถึงนะครับคนเก่งของพี่',
    romanized: 'khidthึngnakhrabkhnkengkhongphi',
  },
  {
    input: 'ชื่อหัวกล้วย',
    romanized: 'chืhuaklowy',
  },
  {
    input: 'ประมาณนี้ๆ',
    romanized: 'pramanniๆ',
  },
  {
    input: 'Iแอมยัวfาเฐ้อ',
    romanized: 'Iaemyuafaเth',
  },
  {
    input: 'กุ๊กละกุ๊กละอู๊ดๆๆ',
    romanized: 'kuklakuklaudๆๆ',
  },
  {
    input: 'เหนื่อย',
    romanized: 'henืoi',
  },
  {
    input: 'ควายไไไ',
    romanized: 'khwaiไไไ',
  },
  {
    input: 'จั๊กส์',
    romanized: 'chaks์',
  },
  {
    input: 'บอมเงี่ยน',
    romanized: 'bomเngiyn',
  },
  {
    input: 'เฌอแตม<3',
    romanized: 'เchtaem<3',
  },
  {
    input: 'อยากกินเค้กสกู้ปี้ดูในวันเกิด',
    romanized: 'yakkinkhekskupiduใnuaัnkoed',
  },
  {
    input: 'หมาป่าในเงามืด',
    romanized: 'hmapanaingaomืd',
  },
  {
    input: 'หนูอ้วนนักแร็ป',
    romanized: 'hnuwnnakrae็p',
  },
  {
    input: 'เอิ๊ก',
    romanized: 'เik',
  },
  {
    input: 'ประตู4หมี่เกี้ยว',
    romanized: 'pratu4hmiเkiyua',
  },
  {
    input: 'กูอะเตอร์มึงควยไร',
    romanized: 'kuatoer์muengkhuairai',
  },
  {
    input: 'จ้วบวัดดอน',
    romanized: 'chowbuaัddon',
  },
  {
    input: 'หวังปี้เจ้า ฟ้าแว็ปๆ',
    romanized: 'hwangpichea foawae็pๆ',
  },
  {
    input: 'จอนๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ',
    romanized: 'chonๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆๆ',
  },
  {
    input: '🇹🇭นัחบุ₪เລืටดເઈ็थ🇹🇭',
    romanized: '🇹🇭naחbu₪เລืටdເઈ็थ🇹🇭',
  },
  {
    input: 'หมาลืมไข่',
    romanized: 'hmalืmkhai',
  },
  {
    input: 'กลมกล่อมแต่ไม่เอามะขาม',
    romanized: 'klmklmtaemaiเamakham',
  },
  {
    input: 'หัวเกรียนมีสิทธิ์ไร',
    romanized: 'huakeriynmisiththิ์rai',
  },
  {
    input: 'สิทธิทัต เอมเมอรัล',
    romanized: 'siththิthat emmoeral',
  },
  {
    input: 'มาเบวว',
    romanized: 'maเbuaw',
  },
  {
    input: 'งั่มๆๆ',
    romanized: 'ngamๆๆ',
  },
  {
    input: 'ชิงกะเบว',
    romanized: 'chingkaเbua',
  },
  {
    input: 'สะเง๊าะสะแง๊ะ',
    romanized: 'sangeaะsangaeะ',
  },
  {
    input: 'ศูนย์เทพศิรินทร์โหดๆ',
    romanized: 'suny์thephsirinthr์hodๆ',
  },
  {
    input: 'อ้วนเทพประสิทธิ์',
    romanized: 'wnthephprasiththิ์',
  },
  {
    input: 'ผมชื่อ ปอนด์ ไม่ใช่ ปอน',
    romanized: 'phmchื pond์ maichai pon',
  },
  {
    input: 'ใครปิดไมค์กู',
    romanized: 'khairpidmaikh์ku',
  },
  {
    input: 'เหงาๆ',
    romanized: 'hengaๆ',
  },
  {
    input: 'อยากเสียวเลี้ยวมา',
    romanized: 'yaksiaoเliyuama',
  },
  {
    input: 'เฟิร์นเฟิน',
    romanized: 'foer์nfoen',
  },
  {
    input: 'ร่างแยกของจอห์นชาวไร่',
    romanized: 'rangyaekkhongchoh์nchaorai',
  },
  {
    input: 'ลูกอีเสี่ยว',
    romanized: 'lukoีเsiyua',
  },
  {
    input: 'ไน๋ไหนไนท์',
    romanized: 'naihainnaith์',
  },
  {
    input: 'ม า ย ด์ ยู ☁',
    romanized: 'm a y d์ yu ☁',
  },
  {
    input: 'ฟันเหล้กเด้กเเนว',
    romanized: 'fanhelokdekเเnua',
  },
  {
    input: 'เหงาตุ่ยยยย',
    romanized: 'hengatุyyyy',
  },
  {
    input: 'เพื่อแม่แพ้บ่ได้',
    romanized: 'pheืmaephaebdai',
  },
  {
    input: 'เฮีนจินแฟนแก้ว',
    romanized: 'เhinchinfaenkaew',
  },
  {
    input: 'ร่างทรงนนท์นี่',
    romanized: 'rangthrngnnth์ni',
  },
  {
    input: 'ไม่ถึงกับแย่แค่แม่ไม่ปลิ้ม',
    romanized: 'maithึngkabyaekhaemaemaiplim',
  },
  {
    input: 'ไล่ฆ่าพวกเรื้อน',
    romanized: 'laikhaphuakreืn',
  },
  {
    input: 'ลืมกันแล้วหรือยัง',
    romanized: 'lืmkanlaewhrueyang',
  },
  {
    input: 'พอเเล้วกูกลัว',
    romanized: 'phoเlewkuklua',
  },
  {
    input: 'น้องแม็กงุงิ',
    romanized: 'nongmae็kngungi',
  },
  {
    input: 'แมวอ้วนชาร์จแบต',
    romanized: 'maeownchar์chbaet',
  },
  {
    input: 'แล้วเองคิดถึงข้าบ้างปร้าาา',
    romanized: 'laewengkhidthึngkhoaboangproaaa',
  },
  {
    input: 'ตัวเหล็ก><',
    romanized: 'tuahel็k><',
  },
  {
    input: 'เครรรรรรรรรรร',
    romanized: 'เkhararara',
  },
  {
    input: 'นป หม่ำๆ',
    romanized: 'np hmำๆ',
  },
  {
    input: 'เมี๊ยววววววว',
    romanized: 'เmiyuawuawuawua',
  },
  {
    input: 'ไไผ',
    romanized: 'ไphai',
  },
  {
    input: 'รีเฟ็กซ์เอ็กทรู',
    romanized: 'rifuks์e็kthru',
  },
  {
    input: 'หนุ่มเมืองดาวมีใจให้สาวเมืองร้อน',
    romanized: 'hnumเmuengdaomichaihaisaoเmuengron',
  },
  {
    input: 'เจ้าก็อต',
    romanized: 'cheak็t',
  },
  {
    input: 'หื้ม',
    romanized: 'hืm',
  },
  {
    input: 'อีหยังวะทำไมยังไม่นอน',
    romanized: 'ihyanguaะthammaiัngmainon',
  },
  {
    input: 'ไม่ลืมๆ',
    romanized: 'mailืmๆ',
  },
  {
    input: 'เตยจาเรื้อน!',
    romanized: 'toeichareืn!',
  },
  {
    input: 'แล้วเธอแม่งเป็นเกือบทุกอย่าง',
    romanized: 'laewthoemaengpunเkuebthukoiang',
  },
  {
    input: '⇝Uภkภ๏wภ gสmΐήg⇜',
    romanized: '⇝Uphkph๏wph gsmΐήg⇜',
  },
  {
    input: 'ไอ้ทีอยากโซโล่เก่งๆ TT',
    romanized: 'aithiyaksolokengๆ TT',
  },
  {
    input: 'มูฮัมหมัด ซะเดาะกอน',
    romanized: 'muhamhmad sadaoะkon',
  },
  {
    input: 'อ้ายยังอยู่ม่งเก่า',
    romanized: 'ayyangoiูmngkea',
  },
  {
    input: 'กูชื่อข้าวมึงเห็นป่ะเนี่ยไอตาบอด',
    romanized: 'kuchืkhoawmuenghenpะเniyaitabod',
  },
  {
    input: 'ระวังเมียคุณดีๆนะครับ',
    romanized: 'rawangmiakhundiๆnakhrab',
  },
  {
    input: 'ภ๏гเ ☆',
    romanized: 'ph๏гเ ☆',
  },
  {
    input: 'кเllยค',
    romanized: 'кเllykh',
  },
  {
    input: 'แมวเรื้อน',
    romanized: 'maeoreืn',
  },
  {
    input: 'ว่าแต่กูชื่ออะไรนะ',
    romanized: 'wataekuchืoะraina',
  },
  {
    input: 'อู๊ดอู๊ด',
    romanized: 'udoูd',
  },
  {
    input: 'กูบีมีไรป่ะ',
    romanized: 'kubimiraipะ',
  },
  {
    input: 'เเบงค์ 47',
    romanized: 'เbengkh์ 47',
  },
  {
    input: 'ลูกฉันเป็นคนดีย์!',
    romanized: 'lukchanpunkhndiy์!',
  },
  {
    input: 'แง่งแง่งแง่งแ่วงง',
    romanized: 'ngaengngaengngaengแwngng',
  },
  {
    input: 'ไกรวิชญ์ฯ',
    romanized: 'kairuaิchy์ฯ',
  },
  {
    input: 'ซาร่าห์',
    romanized: 'sarah์',
  },
  {
    input: 'นํ้ากับเต้เรื้อนจาด',
    romanized: 'nํakabtereืnchad',
  },
  {
    input: 'ซุปเปอร์ตุ๋ย',
    romanized: 'suppoer์tuy',
  },
  {
    input: 'เด็กเอ็นงับบบ',
    romanized: 'duke็nngabbb',
  },
  {
    input: 'ไม่เสือกนะคับสุดหล่อ',
    romanized: 'maiเsueknakhabsudhl',
  },
  {
    input: 'ไม่รู้ลืม\'ม เมื่อคืนหลับฯ',
    romanized: 'mairulืm\'m meืkhืnhlabฯ',
  },
  {
    input: 'แม่ชื่อติ๋ม',
    romanized: 'maechืtim',
  },
  {
    input: 'เสี่ยเต้',
    romanized: 'เsiyte',
  },
  {
    input: 'อย่าเสือก เดี๋ยวเงือกสั่น',
    romanized: 'oiaเsuek เdiyuaเngueksan',
  },
  {
    input: 'เรื่องมันยาว',
    romanized: 'reืngmanyao',
  },
  {
    input: 'หลุดเดี่ยวโรนัลโด้',
    romanized: 'hludเdiyuaronaldo',
  },
  {
    input: 'เปี๊ยก',
    romanized: 'เpiyk',
  },
  {
    input: 'ตัวเบี๋ยว',
    romanized: 'tuaเbiyua',
  },
  {
    input: 'ข้าวมันไก่ ใส่น้ำจิ้ม',
    romanized: 'khoawmankai sainoำchim',
  },
  {
    input: 'า้ดเดเ',
    romanized: 'addeเ',
  },
  {
    input: 'โย้วๆๆ',
    romanized: 'yowๆๆ',
  },
  {
    input: 'มิโอะ',
    romanized: 'mioะ',
  },
  {
    input: 'จิ๋มโบ๋ชื่อนี้เสียไม่ได้😝',
    romanized: 'chimbochืnisiamaidai😝',
  },
]
