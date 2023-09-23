const quiz =[
    {
       question: '熊本地震が起きた年は？',
       answers:['1999年','2002年','2016年','2009年'],
       correct: '2016年'
    },
    {
        question:'2011年にゆるキャラグランプリで優勝した熊本県の有名なゆるキャラは？',
        answers:['ひごまるくん','せんとくん','ひこにゃん','くまモン'],
        correct: 'くまモン'
    },
    {
        question: '熊本城のカーブ状になっている石垣のことを何という？',
        answers:['武者返し','つばめ返し','忍び返し','肥後返し'],
        correct:'武者返し'
    }
];

const quizlength = quiz.length;
let quizIndex = 0;
let score = 0;

//クイズの問題,選択肢を定義
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = ()=>{
 document.getElementById('js-question').textContent = quiz[quizIndex].question;
 let buttonIndex = 0;
 while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
 }
}
setupQuiz ();

const clickHandler = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解') ;
        score++;
     }else{
         window.alert('不正解');
     }
     quizIndex++;

     if(quizIndex < quizlength){
     //問題数がまだあればこちらを実行
     setupQuiz ();
     }else{
　　　//問題数がもうなければこちらを実行
　　　window.alert('終了！！あなたの正解は'+ score + '/' + quizlength + 'です！');

     }
  };


 //ボタンを押したら正誤判定
 let handlerIndex = 0;
 while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e) => {
            clickHandler(e);
         });
         handlerIndex++;
    }
 
