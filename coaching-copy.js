const firstButton1=document.getElementById('first-button1');
const firstButton2=document.getElementById('first-button2');

const finish=document.getElementById('finish');
const main=document.getElementById('main');
const explanation=document.getElementById('explanation');
const sub=document.getElementById('sub');


//firstButtonを押された時の共通反応
function firstButton() {
    finish.innerHTML='食べたいものは<input type="text" id="finish-text">です！<button onclick="finishButton()">決定</button>';
    explanation.innerText='';
    explanation.innerText='ここにあなたが答えた質問と回答が表示されます';
    sub.innerHTML='<div id="question-wright" class=""></div>';
    let answerBox=document.createElement('div');
    answerBox.id='under-answer';
    sub.appendChild(answerBox);

    const underAnswer=document.getElementById('under-answer');
    underAnswer.innerHTML='<input type=text id="answer-text"><br><button onclick="change()">次の質問</button>';

}

//quwstionを表示する反応
function secondQuestion(questionsNumber) {
    let answerText=document.getElementById('answer-text');
    const questionWright=document.getElementById('question-wright');

    let i=0;
    questionWright.innerText=questionsNumber[i];

    //決定ボタンを押したときの反応
    window.change=function change() {
        if (0 === answerText.value.length){
            return;  //入力欄に記述がなければ先へ進まない
        }

        i = i+1;

        if (i>=questionsNumber.length-1) {
            //質問が終われば入力欄を消す
            const underAnswer=document.getElementById('under-answer');
            underAnswer.innerHTML='';
        }
        if (i>=questionsNumber.length) {
            return;  //質問数を超えたら先へ進まない
        }

        //現在の質問を表示
        questionWright.innerHTML=questionsNumber[i];

        //前回の質問を表示
        let mainQuestion=document.createElement('div');
        mainQuestion.innerText=questionsNumber[i-1];
        main.appendChild(mainQuestion);
        
        //前回の回答を表示
        let mainAnswer=document.createElement('div');
        mainAnswer.innerText=answerText.value;
        main.appendChild(mainAnswer);
        answerText.value='';
        answers.push(answerText.value);

        if (i===0) {
            main.innerText='';
        }
    }
    window.document.onkeydown=function(event) {
        if (event.key === 'Enter') {
            change();
        }
    }
}

//決定ボタンを押したとき
window.finishButton=function finishButton(){
    const finishText=document.getElementById('finish-text');
    if (0 === finishText.value.length){
        return;  //入力欄に記述がなければ先へ進まない
    }
    finish.innerHTML='';
    explanation.innerText='';
    sub.innerHTML='';
    //決まったことを書く
    dinnerName=finishText.value;
    let finishStage=document.createElement('div');
    finishStage.className='center-text'
    finishStage.innerHTML='今日の夜ご飯は'+dinnerName+'に決まったんですね！！！<br>今日は'+dinnerName+'を食べましょう！！';
    main.appendChild(finishStage);
}

firstButton1.onclick = () => {
    firstButton();
    secondQuestion(questionsA);
}
firstButton2.onclick = () => {
    firstButton();
    secondQuestion(questionsB);
}

let answers=[

];