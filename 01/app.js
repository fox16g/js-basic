// コメントアウト
console.log('----consolelog----');
console.log('hoge');

console.log('----四則演算----');
console.log(1 + 1);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log('5 % 2'); //シングルコーテーションで囲うと文字列として扱われる

console.log('----文字列連結----');
console.log('hashimoto'+'tae');

console.log('-----変数----');
// 変数とは、データを入れるための箱。
// 箱の名前が変数名
// 変数を使用する理由
// 1.変更に対応しやすい
// 2.同じ値を繰り返し使える
// 3.値の意味がわかりやすい

let name = 'まつしま';
// nameに橋本を代入
console.log(name);
console.log(name);
console.log(name);
console.log('はしもと');
console.log('はしもと');
console.log('はしもと');

let num = 2;
console.log(num);
console.log(num = num + 2);

console.log(num += 2);
// 変数を使った計算と省略形

// 定数
const age = 20;
console.log(age);
// 定数には代入ができないので赤色のTypeErrorがでる
// age = 30;

console.log(`年齢は${age}です`);

console.log('----条件分岐----');
console.log('if文--------');
//if(条件式){ 
// 		処理;
// }

let int = 10;
if(int > 3){
	console.log(`${int}は3より大きいです`);
}
// true　もしくは　false　で返す
// 真偽値

// 比較演算子
// <,<=,>,>=,===(equal),!==(not equal)

// 論理演算子
// &&（〇〇かつ〇〇）,||(〇〇もしくは〇〇)

console.log('else if----');
if(int > 10){
	console.log(int + 'は10以上です');
}else if (int > 3) {
	console.log(int + 'は3より大きいです');
}else{
	console.log(int + 'は3以下です');
}

console.log('switch文--------');
let signal ='green';
switch (signal) {
	case 'red':
		console.log('止まれ');
		break;
	case 'green':
		console.log('進め');
		break;
	default:
		console.log('その他');
		break;
}

console.log('-------繰り返し処理------------');
console.log('for-------------');
// for(変数の定義、条件式、変数の更新)｛処理｝
for(let i = 1; i <= 10; i++){
	console.log(i);
}
// 条件式になるまで続ける

console.log('whileーーーーーーーーーーーーー');
let j = 11;
while(j <= 20){
	console.log(j);
	j++;
}
// 中の条件式を満たすまで繰り返してください
// ブログの記事を全件表示させる
// ブログを5件ずつ表示とか



console.log('fizzbuzz問題--------------');
// 3の倍数はfizz
// ５の倍数はbuzz
// 3と5の倍数はfizzbuzz

let num2 = 30;
// 1～num2(30)の値になるまで、続ける


let num3 = 1;

while(num3 <= 30){

	if(num3 % 15 == 0){
		console.log('fizzbuzz');
	}else if (num3 % 5 == 0) {
		console.log('buzz');
	}else if(num3 % 3 == 0){
		console.log('fizz');
	}
	else{
		console.log(`${num3}`);
		// 文字として処理される
	}
	num3++;
}

for(num4 = 1; num4 <= 30; num4++){
	if (num4 % 3 == 0 && num4 % 5 ==0) {
		console.log('fizzbuzz');
	}else if(num4 % 5 ==0){
		console.log('buzz');
	}
	else if (num4 % 3 ==0) {
		console.log('fizz');
	}
	else{
		console.log(num4);
		// 数字として処理される
	}
}

console.log('-----関数----')

// 関数とは
// 複数の処理をまとめたもの
// function 関数名(){処理}
// 関数自体を変数に代入することもできる

// function greeting(){
// 	console.log('おはよう');
// }
// greeting();
// ↑でさっき作った関数を呼び出す

// 変数名も関数もキャメルケースにする
// ex)let schoolName

console.log('-----引数-----');

function greeting(say){
	console.log('佐藤さんが'+ say + 'と言っています');
}

greeting('こんにちは');


console.log('ローカル変数--------------------');
function local(name){
	let hoge ='私の名前は' + name + 'です';
	return hoge;
	// 結果を返す
}
// {}の間でしか使えない…スコープ


console.log(local('くによし'));
// console.log(hoge);


console.log('----------配列-----------');
// 配列=グループ化されたデータ,タンスのようなもの
// [値1,値2]
let studentList = ['橋本さん','三宅さん','佐藤さん'];
console.log(studentList);
console.log(studentList[1]); //二番目の人が出ます
console.log(studentList[1] = '藤並さん');　//値を上書き
console.log(studentList); //三宅さんから藤並さんに変更
studentList.push('松島さん'); //末尾に値が追加される
console.log(studentList);
studentList.pop(); //末尾を消す
studentList.shift(); //先頭の値を消す
console.log(studentList);


console.log('----------連想配列----------');
// ラベルをつけて管理を行う
// {キー1:値1 ,キー2:値2}
let user = {
	food:'ラーメン',
	age:50,
	from:'沖縄'
};

let user2 ={
	food:'焼きそば',
	age:40,
	from:'大阪'
};

console.log(user);
console.log(user2);
console.log(user['food']);
//　ラベル名から中身の値を引き出したいときは　(関数名['ラベル名'])

console.log('------2次元配列-----');
let users = [user,user2];
console.log(users);

// question　沖縄の文字を表示させたいときは…？
console.log(users[0]['from']);
console.log(users[0].from); //連想配列(オブジェクト)は . でつなぐことができる

console.log('--------------メソッド-----------');
let user3 = {
	food:'寿司',
	age:20,
	from:'千葉',
	greet:function(name){ //メソッド…オブジェクトのキーに代入された関数
		console.log('私の名前は' + name + 'です。' + this.from + 'から来ました');
	}
} 
// this.from = user3.from

user3.greet('斉藤');

// console.log('日付--------------------');
// let date = new Data();
// console.log(date);



console.log('DOM---------------------');
// javascriptからhtmlにアクセスするための命令を
// DOM(Docment Object Model)という。

let test = document.getElementById('test');
// document...html
test.style.color = 'blue';
// test>style>color

console.log(test);
// htmlを取得した状態に

test.className = 'addClass';
// classの名前が追加される

test.textContent ='変更します';
// textが変更される

console.log('イベント------------------');

document.getElementById('btn').addEventListener('click',function(){
// btnのidがついているものを取得→何をするか決める
		let tag = document.createElement('p');
		let text = document.createTextNode('Hello js');
		document.body.appendChild(tag).appendChild(text);
		// 子要素としてpタグを入れる　そのまた子要素としてtext
	})
// 実行エラーがnullのときはhtml側を保存できているか確認する
// どんな状況か確認するときはいちいちconsoleで確認する
console.log('tag');