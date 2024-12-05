// Name: Anson Mah
// Date: 11 April, 2024

let score=0;
let question_counter=-1;

// This switch sets the questions as the ones that match the quiz that the user chose. 
switch(document.getElementById('identifier').value) {
  case "china":
    var max_questions=22;
    var question_countdown=22;

    var questionList = [
      {
        question: 'What is the capital of Guangdong(广东省)?',
        media: '<img src="Media/China Provinces/Guangdong.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Guangzhou(广州市)', correct: true},
          {text: 'Shenzhen(深圳市)', correct: false},
          {text: 'Tsingyun(清远市)', correct: false},
          {text: 'Zhaoqing(肇庆市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Fujian(福建省)?',
        media: '<img src="Media/China Provinces/Fujian.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Fuzhou(福州市)', correct: true},
          {text: 'Quanzhou(泉州市)', correct: false},
          {text: 'Longyan(龙岩市)', correct: false},
          {text: 'Xiamen(厦门市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Hebei(河北省)?',
        media: '<img src="Media/China Provinces/Hebei.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Shijiazhuang(石家庄市)', correct: true},
          {text: 'Zhangjiakou(张家口市)', correct: false},
          {text: 'Hengshui(衡水市)', correct: false},
          {text: 'Qinhuangdao(秦皇岛市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Shanxi(山西省)?',
        media: '<img src="Media/China Provinces/Shanxi.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Taiyuan(太原市)', correct: true},
          {text: 'Changzhi(长治市)', correct: false},
          {text: 'Yangquan(阳泉市)', correct: false},
          {text: 'Yuncheng(运城市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Liaoning(辽宁省)?',
        media: '<img src="Media/China Provinces/Liaoning.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Shenyang(沈阳市)', correct: true},
          {text: 'Jinzhou(锦州市)', correct: false},
          {text: 'Panjin(盘锦市)', correct: false},
          {text: 'Anshan(鞍山市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Jilin(吉林省)?',
        media: '<img src="Media/China Provinces/Jilin.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Changchun(长春市)', correct: true},
          {text: 'Jilin City(吉林市)', correct: false},
          {text: 'Tonghua(通化市)', correct: false},
          {text: 'Yanbian Korean Autonomous Prefecture(延边朝鲜族自治州)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Heilongjiang(黑龙江省)?',
        media: '<img src="Media/China Provinces/Heilongjiang.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Harbin(哈尔滨市)', correct: true},
          {text: 'Suihua(绥化市)', correct: false},
          {text: 'Daqing(大庆市)', correct: false},
          {text: 'Qiqihar(齐齐哈尔市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Jiangsu(江苏省)?',
        media: '<img src="Media/China Provinces/Jiangsu.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Nanjig(南京市)', correct: true},
          {text: 'Zhenjiang(镇江市)', correct: false},
          {text: 'Changzhou(常州市)', correct: false},
          {text: 'Taizhou(泰州市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Zhejiang(浙江省)?',
        media: '<img src="Media/China Provinces/Zhejiang.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Hangzhou(杭州市)', correct: true},
          {text: 'Jinhua(金华市)', correct: false},
          {text: 'Quzhou(衢州市)', correct: false},
          {text: 'Ningbo(宁波市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Anhui(安徽省)?',
        media: '<img src="Media/China Provinces/Anhui.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Hefei(杭州市)', correct: true},
          {text: 'Anqing(安庆市)', correct: false},
          {text: 'Jieshou(界首市)', correct: false},
          {text: 'Xuancheng(宣城市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Jiangxi(江西省)?',
        media: '<img src="Media/China Provinces/Jiangxi.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Nanchang(南昌市)', correct: true},
          {text: 'Yichun(宜春市)', correct: false},
          {text: 'Jiujiang(九江市)', correct: false},
          {text: 'Ganzhou(赣州市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Shandong(山东省)?',
        media: '<img src="Media/China Provinces/Shandong.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Jinan(济南市)', correct: true},
          {text: 'Qingdao(青岛市)', correct: false},
          {text: 'Linyi(临沂市)', correct: false},
          {text: 'Weihai(威海市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Henan(河南省)?',
        media: '<img src="Media/China Provinces/Henan.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Zhengzhou(郑州市)', correct: true},
          {text: 'Xuchang(许昌市)', correct: false},
          {text: 'Luoyang(洛阳市)', correct: false},
          {text: 'Kaifeng(开封市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Qinghai(青海省)?',
        media: '<img src="Media/China Provinces/Qinghai.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Xining(西宁市)', correct: true},
          {text: 'Haidong(海东市)', correct: false},
          {text: 'Yushu(玉树藏族自治州)', correct: false},
          {text: 'Haibei(海北藏族自治州)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Hunan(湖南省)?',
        media: '<img src="Media/China Provinces/Hunan.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Changsha(长沙市)', correct: true},
          {text: 'Changde(常德市)', correct: false},
          {text: 'Chenzhou(郴州市)', correct: false},
          {text: 'Changning(常宁市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Hainan(海南省)?',
        media: '<img src="Media/China Provinces/Hainan.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Haikou(海口市)', correct: true},
          {text: 'Sanya(三亚市)', correct: false},
          {text: 'Wuzhishan(五指山市)', correct: false},
          {text: 'Dongfang(东方市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Hubei(湖北省)?',
        media: '<img src="Media/China Provinces/Hubei.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Wuhan(长沙市)', correct: true},
          {text: 'Haunggang(黄冈市)', correct: false},
          {text: 'Yichang(宜昌市)', correct: false},
          {text: 'Xiangyang(襄阳市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Sichuan(四川省)?',
        media: '<img src="Media/China Provinces/Sichuan.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Chengdu(成都市)', correct: true},
          {text: 'Nanchong(南充市)', correct: false},
          {text: 'Mianyang(绵阳市)', correct: false},
          {text: 'Yaan(雅安市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Guizhou(贵州省)?',
        media: '<img src="Media/China Provinces/Guizhou.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Guiyang(贵阳市)', correct: true},
          {text: 'Zunyi(遵义市)', correct: false},
          {text: 'Liupanshui(六盘水市)', correct: false},
          {text: 'Tongren(铜仁市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Yunnan(云南省)?',
        media: '<img src="Media/China Provinces/Yunnan.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Kunming(长沙市)', correct: true},
          {text: 'Qujing(曲靖市)', correct: false},
          {text: 'Yuxi(玉溪市)', correct: false},
          {text: 'Zhaotong(昭通市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Shaanxi(陕西省)?',
        media: '<img src="Media/China Provinces/Shaanxi.svg">',
        type: 'multiple_choice',
        answers: [
          {text: "Xi'An(西安市)", correct: true},
          {text: 'Xianyang(咸阳市)', correct: false},
          {text: 'Shenmu(神木市)', correct: false},
          {text: 'Shangluo(商洛市)', correct: false},
        ]
      },
      {
        question: 'What is the capital of Gansu(甘肃省)?',
        media: '<img src="Media/China Provinces/Gansu.svg">',
        type: 'multiple_choice',
        answers: [
          {text: 'Lanzhou(兰州市)', correct: true},
          {text: 'Jiuquan(酒泉市)', correct: false},
          {text: 'Wuwei(武威市)', correct: false},
          {text: 'Linxia(临夏市)', correct: false},
        ]
      },
    ]
    break;
  case "will_wood":
    var max_questions=20;
    var question_countdown=20;

    var questionList = [
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/In Case I Make It/questions_Against the Kitchen Floor.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Against the Kitchen Floor", correct: true, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Against the Kitchen Floor.mp3",},
          {text: "White Knuckle Jerk (Where Do You Get Off?)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-White Knuckle Jerk (Where Do You Get Off_).mp3",},
          {text: "Willard!", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Willard!.mp3",},
          {text: "Cicada Days", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Cicada Days.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/In Case I Make It/questions_Cicada Days.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Cicada Days", correct: true, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Cicada Days.mp3",},
          {text: "That's Enough, Let's Get You Home", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Thats Enough, Lets Get You Home.mp3",},
          {text: "¡Aikido! (Neurotic Erotic)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-¡Aikido! (Neurotic Erotic).mp3",},
          {text: "White Noise", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_White Noise.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/In Case I Make It/questions_Half-Decade Hangover.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Half-Decade Hangover", correct: true, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Half-Decade Hangover.mp3",},
          {text: "Jimmy Mushrooms' Last Drink Bedtime in Wayne, NJ", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers_Jimmy Mushrooms Last Drink Bedtime in Wayne, NJ.mp3",},
          {text: "2econd 2ight 2eer (that was fun, goodbye.)", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-02 2econd 2ight 2eer (that was fun, goodbye.).mp3",},
          {text: "Tomcat Disposables", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Tomcat Disposables.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/In Case I Make It/questions_Thats Enough, Lets Get You Home.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "That's Enough, Let's Get You Home", correct: true, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Thats Enough, Lets Get You Home.mp3",},
          {text: "White Noise", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_White Noise.mp3",},
          {text: "Vampire Reference in a Minor Key", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Vampire Reference in a Minor Key.mp3",},
          {text: "Cover This Song (A Little Bit Mine)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Cover This Song (A Little Bit Mine).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/In Case I Make It/questions_The Main Character.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "The Main Character", correct: true, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_The Main Character.mp3",},
          {text: "Lysergide Daydream", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Lysergide Daydream.mp3",},
          {text: "Against the Kitchen Floor", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Against the Kitchen Floor.mp3",},
          {text: "Laplace's Angel (Hurt People? Hurt People!)", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Laplaces Angel (Hurt People Hurt People).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/In Case I Make It/questions_Tomcat Disposables.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Tomcat Disposables", correct: true, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Tomcat Disposables.mp3",},
          {text: "Against the Kitchen Floor", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Against the Kitchen Floor.mp3",},
          {text: "Cicada Days", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Cicada Days.mp3",},
          {text: "¡Aikido! (Neurotic Erotic)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-¡Aikido! (Neurotic Erotic).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/In Case I Make It/questions_Um, its Kind of a Lot.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Um, it's Kind of a Lot", correct: true, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Um, its Kind of a Lot.mp3",},
          {text: "White Noise", correct: false, src: "Media/Will Wood Songs/Questions/In Case I Make It/questions_White Noise.mp3",},
          {text: "White Knuckle Jerk (Where Do You Get Off?)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-White Knuckle Jerk (Where Do You Get Off_).mp3",},
          {text: "Willard!", correct: false, src: "Media/Will Wood Songs/Questions/In Case I Make It/questions_Willard!.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/In Case I Make It/questions_Vampire Reference in a Minor Key.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Vampire Reference in a Minor Key", correct: true, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Vampire Reference in a Minor Key.mp3",},
          {text: "Chemical Overreaction / Compound Fracture", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Chemical Overreaction _ Compound Fracture.mp3",},
          {text: "Half-Decade Hangover", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Half-Decade Hangover.mp3",},
          {text: "Laplace's Angel (Hurt People? Hurt People!)", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Laplaces Angel (Hurt People Hurt People).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/In Case I Make It/questions_White Noise.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "White Noise", correct: true, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_White Noise.mp3",},
          {text: "¡Aikido! (Neurotic Erotic)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-¡Aikido! (Neurotic Erotic).mp3",},
          {text: "2econd 2ight 2eer (that was fun, goodbye.)", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-02 2econd 2ight 2eer (that was fun, goodbye.).mp3",},
          {text: "Suburbia Overture", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Suburbia Overture.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/In Case I Make It/questions_Willard!.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Willard!", correct: true, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Willard!.mp3",},
          {text: "The First Step", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers_The First Step.mp3",},
          {text: "Jimmy Mushroom's Last Drink Bedtime in Wayne, NJ", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers_Jimmy Mushrooms Last Drink Bedtime in Wayne, NJ.mp3",},
          {text: "Tomcat Disposables", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Tomcat Disposables.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/Everything is a Lot/questions_Jimmy Mushrooms Last Drink Bedtime in Wayne, NJ.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Jimmy Mushrooms' Last Drink Bedtime in Wayne, NJ", correct: true, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers_Jimmy Mushrooms Last Drink Bedtime in Wayne, NJ.mp3",},
          {text: "Cicada Days", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Cicada Days.mp3",},
          {text: "Vampire Reference in a Minor Key", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Vampire Reference in a Minor Key.mp3",},
          {text: "6up 5oh Cop-Out (Pro-Con)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-6up 5oh Cop-Out (Pro-Con).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/Everything is a Lot/questions_The First Step.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "The First Step", correct: true, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers_The First Step.mp3",},
          {text: "I / Me / Myself", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-I - Me - Myself.mp3",},
          {text: "BlackBoxWarrior - OKULTRA", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-BlackBoxWarrior - OKULTRA.mp3",},
          {text: "Red Moon", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Red Moon.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/Everything is a Lot/questions-¡Aikido! (Neurotic Erotic).mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "¡Aikido! (Neurotic Erotic)", correct: true, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-¡Aikido! (Neurotic Erotic).mp3",},
          {text: "That's Enough, Let's Get You Home", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Thats Enough, Lets Get You Home.mp3",},
          {text: "Laplace's Angel (Hurt People? Hurt People!)", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Laplaces Angel (Hurt People Hurt People).mp3",},
          {text: "Skeleton Appreciation Day in Vestal, NY (Bones)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Skeleton Appreciation Day in Vestal, NY (Bones).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/Everything is a Lot/questions-6up 5oh Cop-Out (Pro-Con).mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "6up 5oh Cop-Out (Pro-Con)", correct: true, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-6up 5oh Cop-Out (Pro-Con).mp3",},
          {text: "BlackBoxWarrior - OKULTRA", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-BlackBoxWarrior - OKULTRA.mp3",},
          {text: "Front Street", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Front Street.mp3",},
          {text: "Outliars and Hyppocrates - a fun fact about apples", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Outliars and Hyppocrates - a fun fact about apples.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/Everything is a Lot/questions-Chemical Overreaction _ Compound Fracture.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Chemical Overreaction / Compound Fracture", correct: true, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Chemical Overreaction _ Compound Fracture.mp3",},
          {text: "6up 5oh Cop-Out (Pro-Con)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-6up 5oh Cop-Out (Pro-Con).mp3",},
          {text: "Marsha, Thankk You for the Dialectics, but I Need You to Leave", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Marsha, Thankk You for the Dialectics, but I Need You to Leave.mp3",},
          {text: "Half-Decade Hangover", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Half-Decade Hangover.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/Everything is a Lot/questions-Cover This Song (A Little Bit Mine).mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Cover This Song (A Little Bit Mine)", correct: true, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Cover This Song (A Little Bit Mine).mp3",},
          {text: "Thermodynamic Lawyer Esq, G.F.D.", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Thermodynamic Lawyer Esq, G.F.D..mp3",},
          {text: "Half-Decade Hangover", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Half-Decade Hangover.mp3",},
          {text: "Lysergide Daydream", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Lysergide Daydream.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/Everything is a Lot/questions_Front Street.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Front Street", correct: true, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Front Street.mp3",},
          {text: "6up 5oh Cop-Out (Pro-Con)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-6up 5oh Cop-Out (Pro-Con).mp3",},
          {text: "Laplace's Angel (Hurt People? Hurt People!)", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Laplaces Angel (Hurt People Hurt People).mp3",},
          {text: "Love, Me Normally", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Love, Me Normally.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/Everything is a Lot/questions-Lysergide Daydream.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Lysergide Daydream", correct: true, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Lysergide Daydream.mp3",},
          {text: "2econd 2ight 2eer (that was fun, goodbye.)", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-02 2econd 2ight 2eer (that was fun, goodbye.).mp3",},
          {text: "Vampire Reference in a Minor Key", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Vampire Reference in a Minor Key.mp3",},
          {text: "Skeleton Appreciation Day in Vestal, NY (Bones)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Skeleton Appreciation Day in Vestal, NY (Bones).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/Everything is a Lot/questions-Red Moon.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Red Moon", correct: true, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Red Moon.mp3",},
          {text: "The Main Character", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_The Main Character.mp3",},
          {text: "Front Street", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Front Street.mp3",},
          {text: "White Knuckle Jerk (Where Do You Get Off?)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-White Knuckle Jerk (Where Do You Get Off_).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/Everything is a Lot/questions-Skeleton Appreciation Day in Vestal, NY (Bones).mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Skeleton Appreciation Day in Vestal, NY (Bones)", correct: true, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Skeleton Appreciation Day in Vestal, NY (Bones).mp3",},
          {text: "BlackBoxWarrior - OKULTRA", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-BlackBoxWarrior - OKULTRA.mp3",},
          {text: "Suburbia Overture", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Suburbia Overture.mp3",},
          {text: "Cover This Song (A Little Bit Mine)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Cover This Song (A Little Bit Mine).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/Everything is a Lot/questions-Thermodynamic Lawyer Esq, G.F.D..mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Thermodynamic Lawyer Esq, G.F.D.", correct: true, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Thermodynamic Lawyer Esq, G.F.D..mp3",},
          {text: "6up 5oh Cop-Out (Pro-Con)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-6up 5oh Cop-Out (Pro-Con).mp3",},
          {text: "Willard!", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Willard!.mp3",},
          {text: "Chemical Overreaction / Compound Fracture", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Chemical Overreaction _ Compound Fracture.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/Everything is a Lot/questions-White Knuckle Jerk (Where Do You Get Off_).mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "White Knuckle Jerk (Where Do You Get Off?)", correct: true, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-White Knuckle Jerk (Where Do You Get Off_).mp3",},
          {text: "Um, it's Kind of a Lot", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Um, its Kind of a Lot.mp3",},
          {text: "BlackBoxWarrior - OKULTRA", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-BlackBoxWarrior - OKULTRA.mp3",},
          {text: "Red Moon", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Red Moon.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/The Normal Album/questions-02 2econd 2ight 2eer (that was fun, goodbye.).mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "2econd 2ight 2eer (that was fun, goodbye.)", correct: true, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-02 2econd 2ight 2eer (that was fun, goodbye.).mp3",},
          {text: "The Main Character", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_The Main Character.mp3",},
          {text: "Against the Kitchen Floor", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Against the Kitchen Floor.mp3",},
          {text: "Laplace's Angel (Hurt People? Hurt People!)", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Laplaces Angel (Hurt People Hurt People).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/The Normal Album/questions-BlackBoxWarrior - OKULTRA.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "BlackBoxWarrior - OKULTRA", correct: true, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-BlackBoxWarrior - OKULTRA.mp3",},
          {text: "Skeleton Appreciation Day in Vestal, NY (Bones)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Skeleton Appreciation Day in Vestal, NY (Bones).mp3",},
          {text: "Lysergide Daydream", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Lysergide Daydream.mp3",},
          {text: "Outliars and Hyppocrates - a fun fact about apples", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Outliars and Hyppocrates - a fun fact about apples.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/The Normal Album/questions-I - Me - Myself.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "I / Me / Myself", correct: true, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-I - Me - Myself.mp3",},
          {text: "Cicada Days", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Cicada Days.mp3",},
          {text: "Marsha, Thankk You for the Dialectics, but I Need You to Leave", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Marsha, Thankk You for the Dialectics, but I Need You to Leave.mp3",},
          {text: "Love, Me Normally", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Love, Me Normally.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/The Normal Album/questions-Laplaces Angel (Hurt People Hurt People).mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Laplace's Angel (Hurt People? Hurt People!)", correct: true, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Laplaces Angel (Hurt People Hurt People).mp3",},
          {text: "I / Me / Myself", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-I - Me - Myself.mp3",},
          {text: "Chemical Overreaction / Compound Fracture", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Chemical Overreaction _ Compound Fracture.mp3",},
          {text: "6up 5oh Cop-Out (Pro-Con)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-6up 5oh Cop-Out (Pro-Con).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/The Normal Album/questions-Love, Me Normally.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Love, Me Normally", correct: true, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Love, Me Normally.mp3",},
          {text: "Red Moon", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Red Moon.mp3",},
          {text: "Chemical Overreaction / Compound Fracture", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Chemical Overreaction _ Compound Fracture.mp3",},
          {text: "Front Street", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Front Street.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/The Normal Album/questions-Marsha, Thankk You for the Dialectics, but I Need You to Leave.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Marsha, Thankk You for the Dialectics, but I Need You to Leave", correct: true, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Marsha, Thankk You for the Dialectics, but I Need You to Leave.mp3",},
          {text: "Suburbia Overture", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Suburbia Overture.mp3",},
          {text: "The Main Character", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_The Main Character.mp3",},
          {text: "Cover This Song (A Little Bit Mine)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Cover This Song (A Little Bit Mine).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/The Normal Album/questions-Memento Mori - the most important thing in the world.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Memento Mori - the most important thing in the world", correct: true, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Memento Mori - the most important thing in the world.mp3",},
          {text: "Thermodynamic Lawyer Esq, G.F.D.", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Thermodynamic Lawyer Esq, G.F.D..mp3",},
          {text: "Cicada Days", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Cicada Days.mp3",},
          {text: "¡Aikido! (Neurotic Erotic)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-¡Aikido! (Neurotic Erotic).mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/The Normal Album/questions-Outliars and Hyppocrates - a fun fact about apples.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Outliars and Hyppocrates - a fun fact about apples", correct: true, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Outliars and Hyppocrates - a fun fact about apples.mp3",},
          {text: "The First Step", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers_The First Step.mp3",},
          {text: "Willard!", correct: false, src: "Media/Will Wood Songs/Answers/In Case I Make It/answers_Willard!.mp3",},
          {text: "Front Street", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-Front Street.mp3",},
        ]
      },
      {
        question: 'What song is this?',
        media: '<audio src="Media/Will Wood Songs/Questions/The Normal Album/questions-Suburbia Overture.mp3" id="audioFileThatIsPairedWithTheQuestion" controls></audio>',
        type: 'multiple_choice',
        answers: [
          {text: "Suburbia Overture", correct: true, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Suburbia Overture.mp3",},
          {text: "Memento Mori - the most important thing in the world", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-Memento Mori - the most important thing in the world.mp3",},
          {text: "White Knuckle Jerk (Where Do You Get Off?)", correct: false, src: "Media/Will Wood Songs/Answers/Everything is a Lot/answers-White Knuckle Jerk (Where Do You Get Off_).mp3",},
          {text: "2econd 2ight 2eer (that was fun, goodbye.)", correct: false, src: "Media/Will Wood Songs/Answers/The Normal Album/answers-02 2econd 2ight 2eer (that was fun, goodbye.).mp3",},
        ]
      },
    ]
    break;
  case "chess":
    var max_questions=12;
    var question_countdown=12;

    var questionList = [
      {
        question: 'Find the best move for white.',
        media: '<img src="https://neal.fun/password-game/chess/puzzle121.svg">',
        type: "text_input",
        answer_to_be_displayed: "Rc8+",
        answers: [
          'RC8+',
        ]
      },
      {
        question: 'Find the best move for white.',
        media: '<img src="https://neal.fun/password-game/chess/puzzle1.svg">',
        type: "text_input",
        answer_to_be_displayed: "Qd5+",
        answers: [
          'QD5+',
        ]
      },
      {
        question: 'Find the best move for black.',
        media: '<img src="https://neal.fun/password-game/chess/puzzle180.svg">',
        type: "text_input",
        answer_to_be_displayed: "Ne4+",
        answers: [
          'NE4+',
        ]
      },
      {
        question: 'Find the best move for white.',
        media: '<img src="https://neal.fun/password-game/chess/puzzle122.svg">',
        type: "text_input",
        answer_to_be_displayed: "g5+",
        answers: [
          'G5+',
        ]
      },
      {
        question: 'Find the best move for white.',
        media: '<img src="https://neal.fun/password-game/chess/puzzle125.svg">',
        type: "text_input",
        answer_to_be_displayed: "Qxe6+",
        answers: [
          'QXE6+',
        ]
      },
      {
        question: 'Find the best move for white.',
        media: '<img src="https://neal.fun/password-game/chess/puzzle4.svg">',
        type: "text_input",
        answer_to_be_displayed: "Qxg6",
        answers: [
          'QXG6',
        ]
      },
      {
        question: 'Find the best move for white.',
        media: '<img src="https://neal.fun/password-game/chess/puzzle137.svg">',
        type: "text_input",
        answer_to_be_displayed: "Rd8+",
        answers: [
          'RD8+',
        ]
      },
      {
        question: 'Find the best move for white.',
        media: '<img src="https://neal.fun/password-game/chess/puzzle33.svg">',
        type: "text_input",
        answer_to_be_displayed: "Nf6+",
        answers: [
          'NF6+',
        ]
      },
      {
        question: 'Find the best move for white.',
        media: '<img src="https://neal.fun/password-game/chess/puzzle156.svg">',
        type: "text_input",
        answer_to_be_displayed: "Re8+",
        answers: [
          'RE8+',
        ]
      },
      {
        question: 'Find the best move for white.',
        media: '<img src="https://neal.fun/password-game/chess/puzzle96.svg">',
        type: "text_input",
        answer_to_be_displayed: "Rxf6+",
        answers: [
          'RXF6+',
        ]
      },
      {
        question: 'Find the best move for white.',
        media: '<img src="https://neal.fun/password-game/chess/puzzle189.svg">',
        type: "text_input",
        answer_to_be_displayed: "Nf7+",
        answers: [
          'NF7+',
        ]
      },
      {
        question: 'Find the best move for white.',
        media: '<img src="https://neal.fun/password-game/chess/puzzle183.svg">',
        type: "text_input",
        answer_to_be_displayed: "Qd8+",
        answers: [
          'QD8+',
        ]
      },
    ]
    break;
  case "latam":
    var max_questions=20;
    var question_countdown=20;

    var questionList = [
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/ar.svg">',
        type: "text_input",
        answer_to_be_displayed: "Argentina",
        answers: [
          'ARGENTINA',
          'AR',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/br.svg">',
        type: "text_input",
        answer_to_be_displayed: "Brazil",
        answers: [
          'BRAZIL',
          'BR',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="Media/Modified LATAM Flags/bo.svg">',
        type: "text_input",
        answer_to_be_displayed: "Bolivia",
        answers: [
          'BOLIVIA',
          'BO',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/cu.svg">',
        type: "text_input",
        answer_to_be_displayed: "Cuba",
        answers: [
          'CUBA',
          'CU',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/cl.svg">',
        type: "text_input",
        answer_to_be_displayed: "Chile",
        answers: [
          'CHILE',
          'CL',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/co.svg">',
        type: "text_input",
        answer_to_be_displayed: "Colombia",
        answers: [
          'COLOMBIA',
          'CO',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="Media/Modified LATAM Flags/cr.svg">',
        type: "text_input",
        answer_to_be_displayed: "Costa Rica",
        answers: [
          'COSTA RICA',
          'CR',
          'COSTARICA',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="Media/Modified LATAM Flags/do.svg">',
        type: "text_input",
        answer_to_be_displayed: "Dominican Republic",
        answers: [
          'DOMINICAN REPUBLIC',
          'DO',
          'DR', 
          'DOMINICANREPUBLIC',
          'REPUBLICADOMINICANA',
          'REPUBLICA DOMINICANA',
          'REPÚBLICADOMINICANA',
          'REPÚBLICA DOMINICANA',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/ec.svg">',
        type: "text_input",
        answer_to_be_displayed: "Ecuador",
        answers: [
          'ECUADOR',
          'EC',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/gt.svg">',
        type: "text_input",
        answer_to_be_displayed: "Guatemala",
        answers: [
          'GUATEMALA',
          'GT',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/hn.svg">',
        type: "text_input",
        answer_to_be_displayed: "Honduras",
        answers: [
          'HONDURAS',
          'HN',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/mx.svg">',
        type: "text_input",
        answer_to_be_displayed: "Mexico",
        answers: [
          'MEXICO',
          'MX',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="Media/Modified LATAM Flags/ni.svg">',
        type: "text_input",
        answer_to_be_displayed: "Nicaragua",
        answers: [
          'NICARAGUA',
          'NI',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/pa.svg">',
        type: "text_input",
        answer_to_be_displayed: "Panama",
        answers: [
          'PANAMA',
          'PA',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/pe.svg">',
        type: "text_input",
        answer_to_be_displayed: "Peru",
        answers: [
          'PERU',
          'PE',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/pr.svg">',
        type: "text_input",
        answer_to_be_displayed: "Puerto Rico",
        answers: [
          'PUERTO RICO',
          'PR',
          'PUERTORICO'
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="Media/Modified LATAM Flags/py.svg">',
        type: "text_input",
        answer_to_be_displayed: "Paraguay",
        answers: [
          'PARAGUAY',
          'PY',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="Media/Modified LATAM Flags/sv.svg">',
        type: "text_input",
        answer_to_be_displayed: "El Salvador",
        answers: [
          'EL SALVADOR',
          'SV',
          'ES',
          'ELS',
          'ELSALVADOR'
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/uy.svg">',
        type: "text_input",
        answer_to_be_displayed: "Uruguay",
        answers: [
          'URUGUAY',
          'UY',
        ]
      },
      {
        question: 'Which country is this flag associated with?',
        media: '<img src="https://flagcdn.com/ve.svg">',
        type: "text_input",
        answer_to_be_displayed: "Venezuela",
        answers: [
          'VENEZUELA',
          'VE',
        ]
      },
    ]
    break;
}

// Shuffles the questions so that they show up in a different order every time you take the quiz.
for (let i = questionList.length-1; i>0; i--) {
  let j = Math.floor(Math.random()*(i+1));
  [questionList[i], questionList[j]] = [questionList[j], questionList[i]];
}

// This function displays a new question whenever it is called. 
function new_question() {

  // Ends the quiz if there are no questions left.
  if (question_countdown==0) {
    show_results();
  }

  // Shows the user the amount of progress they have made on the quiz. 
  question_counter++;
  document.getElementById('progress_fraction').innerHTML=`Question ${question_counter+1}/${max_questions}`;
  document.getElementById('progress_percent').innerHTML=`${Math.round(100*(question_counter/max_questions))}% Complete`;
  document.getElementById("question").innerHTML = questionList[question_counter].question;
  question_countdown--;

  // Displays the media associated with the question. (ex. A country flag)
  let media = document.createElement("div");
  media.setAttribute('id', 'media');
  media.innerHTML=questionList[question_counter].media
  document.getElementById("qmo").appendChild(media);

  // Displays either a multiple choice input or a textbox input depending on the question selected.
  if (questionList[question_counter].type == "multiple_choice") {
    let multiple_choice_container = document.createElement("div");
    multiple_choice_container.setAttribute('id', 'multiple_choice');
    document.getElementById("qmo").appendChild(multiple_choice_container);

    // Randomises the order of the answers choices.
    for (let i = questionList[question_counter].answers.length-1; i>0; i--) {
      let j = Math.floor(Math.random()*(i+1));
      [questionList[question_counter].answers[i], questionList[question_counter].answers[j]] = [questionList[question_counter].answers[j], questionList[question_counter].answers[i]];
    };

    // If the quiz is the one with Will Wood songs, then the answer choices will have a paired audio file with it.
    if (document.getElementById('identifier').value=="will_wood") {
      for (let i=0; i<4; i++) {
        let option_button = document.createElement("button");
        option_button.setAttribute('id', `option${i+1}`);
        option_button.setAttribute('value', questionList[question_counter].answers[i].correct);
        option_button.setAttribute('onclick', 'checkAnswer_multipleChoice(value, id)');
        option_button.classList.add('options');
        option_button.innerHTML=questionList[question_counter].answers[i].text;
        document.getElementById("multiple_choice").appendChild(option_button);
        
        let audio_answer = document.createElement("audio");
        audio_answer.setAttribute('id', `audio_file${i+1}`);
        audio_answer.setAttribute('value', questionList[question_counter].answers[i].correct);
        audio_answer.setAttribute('onclick', 'checkAnswer_multipleChoice(value, id)');
        audio_answer.classList.add('audio_option');
        audio_answer.setAttribute('src', questionList[question_counter].answers[i].src)
        audio_answer.setAttribute('controls', "true")
        document.getElementById("multiple_choice").appendChild(audio_answer);
      }
    } else {
        for (let i=0; i<4; i++) {
          let option_button = document.createElement("button");
          option_button.setAttribute('id', `option${i+1}`);
          option_button.setAttribute('value', questionList[question_counter].answers[i].correct);
          option_button.setAttribute('onclick', 'checkAnswer_multipleChoice(value, id)');
          option_button.classList.add('options');
          option_button.innerHTML=questionList[question_counter].answers[i].text;
          document.getElementById("multiple_choice").appendChild(option_button);
        }
      }

  } else {
    // Makes an area for the user to input their answer.
    let text_input_container = document.createElement("div")
    text_input_container.setAttribute('id', 'text_input');
    text_input_container.innerHTML = '<b>Your Answer: </b>';
    document.getElementById("qmo").appendChild(text_input_container);

    // Adds the input box.
    let input_field = document.createElement("input");
    input_field.setAttribute('id', 'input_box');
    input_field.setAttribute('type', 'text');
    input_field.setAttribute('onkeypress', 'detectEnterKey()');
    document.getElementById("text_input").appendChild(input_field);
    document.getElementById("input_box").focus();

    //Adds a submit button.
    let submit_button = document.createElement("button");
    submit_button.setAttribute('id', 'submit_button');
    submit_button.setAttribute('value', questionList[question_counter].answers);
    submit_button.setAttribute('onclick', 'checkAnswer_textInput()');
    submit_button.innerHTML='Submit'
    document.getElementById("text_input").appendChild(submit_button);

    // If the user is taking the Chess Puzzles quiz, then a notice will appear reminding them to input their answer in Algebraic Chess Notation.
    if (document.getElementById('identifier').value=="chess") {
      let h3 = document.createElement("h3");
      h3.setAttribute('id', 'chess_input_notice')
      h3.innerHTML = "Input your answer in <a target='_blank' id='algebraicChessNotationWikipediaLink' href='https://en.wikipedia.org/wiki/Algebraic_notation_(chess)'>Algebraic Chess Notation</a>.";
      document.getElementById("qmo").appendChild(h3);
    }
  }

}

function checkAnswer_multipleChoice(value, id) {
  if (value == "true") {
    score++;
    document.getElementById(id).style.backgroundColor="green";
  } else {
    document.getElementById(id).style.backgroundColor="red";
    for (let i=0; i<4; i++) {
      let button_id = `option${i+1}`;
      let ishowspeed = document.getElementById(button_id).value;
      if (ishowspeed == 'true') {
        document.getElementById(button_id).style.backgroundColor="green";
      }
    }
  }
  document.getElementById("option1").disabled=true;
  document.getElementById("option2").disabled=true;
  document.getElementById("option3").disabled=true;
  document.getElementById("option4").disabled=true;
  setTimeout(remove_previous, 2000);
}

function checkAnswer_textInput() {
  let skibidi_toilet = document.getElementById('input_box').value.trim();
  let user_answer = skibidi_toilet.toUpperCase();
  if (questionList[question_counter].answers.includes(user_answer)==true) {
    document.getElementById('input_box').style.color="white";
    document.getElementById('input_box').style.backgroundColor="green";
    score++
  } else {
    document.getElementById('input_box').style.color="white";
    document.getElementById('input_box').style.backgroundColor="red";
    let h3 = document.createElement("h3");
    h3.setAttribute('id', 'show_correct_answer')
    h3.innerHTML = `The correct answer is <u>${questionList[question_counter].answer_to_be_displayed}</u>`
    document.getElementById("qmo").appendChild(h3);
  }
  document.getElementById("input_box").disabled=true;
  document.getElementById("submit_button").disabled=true;
  setTimeout(remove_previous, 2000);
}

function detectEnterKey() {
  if (event.key == "Enter") {
    checkAnswer_textInput();
  }
}

// Deletes a few HTML elements before moving on to the next question. 
function remove_previous() {
  if (document.getElementById("multiple_choice") != null) {
    document.getElementById("multiple_choice").remove();
    document.getElementById("media").remove();
  }
  if (document.getElementById("text_input") != null) {
    document.getElementById("text_input").remove();
    document.getElementById("media").remove();
    if (document.getElementById('identifier').value=="chess") {
      document.getElementById("chess_input_notice").remove();
    }
    if (document.getElementById('show_correct_answer') != null) {
      document.getElementById("show_correct_answer").remove();
    }
  }
  new_question()
}

// After the quiz has been finished, this function is called.
function show_results() {
  document.getElementById("actual_quiz").style.visibility="hidden";
  document.getElementById("actual_quiz").remove();
  document.getElementById("results_container").style.visibility="visible";
  document.getElementById("results_text").innerText=`Your Score: ${score}/${max_questions} or ${Math.round(100*100*(score/max_questions))/100}%`
}

// Starts the quiz.
new_question()

// Chooses a random color scheme for the page. 
let colors = ['red', 'blue', 'green'];
let page_color = Math.floor(Math.random()*colors.length);
switch (colors[page_color]) {
  case 'red': 
    document.documentElement.style.setProperty('--background-color', 'hsl(350, 100%, 88%)');
    document.documentElement.style.setProperty('--color', 'hsl(335, 100%, 60%)');
    document.documentElement.style.setProperty('--quiz_choice-color', 'hsl(347, 100%, 95%)');
    document.documentElement.style.setProperty('--quiz_choice-hover', 'hsl(60, 100%, 89%)');
  break;
  case 'blue': 
    document.documentElement.style.setProperty('--background-color', 'hsl(222, 100%, 90%)');
    document.documentElement.style.setProperty('--color', 'hsl(208, 78%, 53%)');
    document.documentElement.style.setProperty('--quiz_choice-color', 'hsl(217, 100%, 96%)');
    document.documentElement.style.setProperty('--quiz_choice-hover', 'hsl(21, 70%, 85%)');
  break;
  case 'green': 
    document.documentElement.style.setProperty('--background-color', 'hsl(110, 100%, 90%)');
    document.documentElement.style.setProperty('--color', 'hsl(118, 62%, 33%)');
    document.documentElement.style.setProperty('--quiz_choice-color', 'hsl(140, 70%, 97%)');
    document.documentElement.style.setProperty('--quiz_choice-hover', 'hsl(155, 82%, 75%)');
  break;
}