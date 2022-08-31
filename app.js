// alert('Hello World');alert('Hello World')
// let hello = 'Hello World'
// alert(hello);

// let int1 = 1;
// alert(int1);
// 足し算
// alert(4 + 3);
// 引き算
// alert(8 - 5);
// 掛け算
// alert(2 * 6);
// 割り算
// alert(10 / 2);
// alert('Hello' + 'World');

// // じゃんけんの手を入力してもらうプロンプト欄を生成
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// // じゃんけんの手をランダムに作成する関数を呼び出す
// let js_hand = getJShand();

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
// let judge = winLose(user_hand, js_hand);

// // 結果を表示する
// alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// // ランダムでじゃんけんの手を作成する関数
// function getJShand(){
//   let js_hand_num = Math.floor( Math.random() * 3 );
//   let hand_name;

//   if(js_hand_num == 0){
//     hand_name = "グー";
//   } else if(js_hand_num == 1){
//     hand_name = "チョキ";
//   } else if(js_hand_num == 2){
//     hand_name = "パー";
//   }

//   return hand_name;
// }

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数
// function winLose(user, js){
//   let winLoseStr;

//   if(user == "グー"){
//     if(js == "グー"){
//       winLoseStr = "あいこ";
//     } else if(js == "チョキ"){
//       winLoseStr = "勝ち";
//     } else if(js == "パー"){
//       winLoseStr = "負け";
//     }
//   } else if(user == "チョキ"){
//     if(js == "グー"){
//       winLoseStr = "負け";
//     } else if(js == "チョキ"){
//       winLoseStr = "あいこ";
//     } else if(js == "パー"){
//       winLoseStr = "勝ち";
//     }
//   } else if(user == "パー"){
//     if(js == "グー"){
//       winLoseStr = "勝ち";
//     } else if(js == "チョキ"){
//       winLoseStr = "負け";
//     } else if(js == "パー"){
//       winLoseStr = "あいこ";
//     }
//   }

//   return winLoseStr;
// }

const rock = "グー";
const scissors = "チョキ";
const paper = 'パー';
const win = '勝ち';
const lose = '負け';
const draw = 'あいこ';

// じゃんけんの手を入力してもらうプロンプト欄を生成

let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != rock) && (user_hand != scissors) && (user_hand != paper) && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}



function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand;
  if (js_hand_num == 0){
    hand = rock;
  } else if (js_hand_num == 1){
    hand = scissors;
  } else if (js_hand_num == 2){
    hand = paper;
  }
  return hand;
}

function winLose(user, js){
  let winLoseStr;
  if (user == js){
    winLoseStr = draw;
  } else if (user == rock){
    if (js == scissors){
      winLoseStr = win;
    } else if (js == paper){
      winLoseStr = lose;
    }
  } else if (user == scissors){
    if (js == rock){
      winLoseStr = lose;
    } else if (js == paper){
      winLoseStr = win;
    }
  } else if (user == paper){
    if (js == rock){
      winLoseStr = win;
    } else if (js == scissors){
      winLoseStr = lose;
    }
  }
  return winLoseStr;
}