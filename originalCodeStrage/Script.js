//初期コードの保存版
//元ファイル名　Script.js


enchant();

window.onload = function () {
	//　！画面サイズをディスプレイにあうようにする
	const game = new Game(800, 1000);  				//画面サイズを400*500にする。（このサイズだとスマホでも快適なのでおススメ）

	/////////////////////////////////////////////////
	//ゲーム開始前に必要な画像・音を読み込む部分


	//クリック音読み込み
	const clickSndUrl = "Quiz-Buzzer02-2.wav";						//game.htmlからの相対パス
	game.preload([clickSndUrl]); 				//データを読み込んでおく
	const clickNgUrl = "Quiz-Wrong_Buzzer02-2.wav";						//game.htmlからの相対パス
	game.preload([clickNgUrl]); 				//データを読み込んでおく


	const oneUrl = "1.png";			
	game.preload([oneUrl]);			
	const twoUrl = "2.png";			
	game.preload([twoUrl]);			
	const threeUrl = "3.png";		
	game.preload([threeUrl ]);		
	const fourUrl = "4.png";		
	game.preload([fourUrl]);		
	const fiveUrl = "5.png";		
	game.preload([fiveUrl]);		
	const sixUrl = "6.png";			
	game.preload([sixUrl]);			
	const sevenUrl = "7.png";		
	game.preload([sevenUrl]);		
	const eightUrl = "8.png";		
	game.preload([eightUrl]);		
	const nineUrl = "9.png";		
	game.preload([nineUrl]);			

	//表示位置の最大最小
	var random_min = 20;
	var random_max = 700;
	//リトライボタン
	const retryImgUrl = "retry.png";						//game.htmlからの相対パス
	game.preload([retryImgUrl]);					//データを読み込んでおく

	//ツイートボタン
	const tweetImgUrl = "tweet.png";						//game.htmlからの相対パス
	game.preload([tweetImgUrl]);					//データを読み込んでおく		

	//読み込み終わり
	/////////////////////////////////////////////////


	game.onload = function () {					//ロードが終わった後にこの関数が呼び出されるので、この関数内にゲームのプログラムを書こう

		console.log("aa")
		/////////////////////////////////////////////////
		//グローバル変数 

		let state = 0;								//現在のゲーム状態

		//グローバル変数終わり
		/////////////////////////////////////////////////

		const mainScene = new Scene();					//シーン作成
		game.pushScene(mainScene);  					//mainSceneシーンオブジェクトを画面に設置
		mainScene.backgroundColor = "black"; 			//mainSceneシーンの背景は黒くした

		//ポイント表示テキスト
		const scoreText = new Label(); 					//テキストはLabelクラス
		scoreText.font = "20px Meiryo";				//フォントはメイリオ 20px 変えたかったらググってくれ
		scoreText.color = 'rgba(255,255,255,1)';		//色　RGB+透明度　今回は白
		scoreText.width = 400;							//横幅指定　今回画面サイズ400pxなので、width:400pxだと折り返して二行目表示してくれる
		scoreText.moveTo(0, 30);						//移動位置指定
		mainScene.addChild(scoreText);					//mainSceneシーンにこの画像を埋め込む


		// このあたり本当は関数化してきれいに書くべきだが、めんどうなのでこのような表記で。。。。
		// ！時間経過に応じてボタンサイズが小さくなるように設定したい

		
		const oneImg = new Sprite(87, 80);				
		oneImg.image = game.assets[oneUrl];			
		mainScene.addChild(oneImg);					
		const twoImg = new Sprite(87, 80);				
		twoImg.image = game.assets[twoUrl];			
		mainScene.addChild(twoImg);					
		const threeImg = new Sprite(87, 80);				
		threeImg.image = game.assets[threeUrl];			
		mainScene.addChild(threeImg);					
		const fourImg = new Sprite(87, 80);				
		fourImg.image = game.assets[fourUrl];			
		mainScene.addChild(fourImg);					
		const fiveImg = new Sprite(87, 80);				
		fiveImg.image = game.assets[fiveUrl];			
		mainScene.addChild(fiveImg);					
		const sixImg = new Sprite(87, 80);				
		sixImg.image = game.assets[sixUrl];			
		mainScene.addChild(sixImg);					
		const sevenImg = new Sprite(87, 80);				
		sevenImg.image = game.assets[sevenUrl];			
		mainScene.addChild(sevenImg);					
		const eightImg = new Sprite(87, 80);				
		eightImg.image = game.assets[eightUrl];			
		mainScene.addChild(eightImg);					
		const nineImg = new Sprite(87, 80);				
		nineImg.image = game.assets[nineUrl];			
		mainScene.addChild(nineImg);					

		oneImg.x = Math.random() * ( random_max - random_min ) + random_min;					
		oneImg.y = Math.random() * ( random_max - random_min ) + random_min;					
		twoImg.x = Math.random() * ( random_max - random_min ) + random_min;					
		twoImg.y = Math.random() * ( random_max - random_min ) + random_min;					
		for (let i =0;i <=100000; i++){
			//50以上（適当）離れるまで10万回ループ
			if ((oneImg.x - 50 > twoImg.x || oneImg.x + 50 < twoImg.x) && (oneImg.y - 50 > twoImg.y || oneImg.y + 50 < twoImg.y)) {
				break;
			}
			twoImg.x = Math.random() * ( random_max - random_min ) + random_min;					
			twoImg.y = Math.random() * ( random_max - random_min ) + random_min;					
			if (i == 100000){
				console.log("giveup two");
			}
		}

		threeImg.x = Math.random() * ( random_max - random_min ) + random_min;					
		threeImg.y = Math.random() * ( random_max - random_min ) + random_min;					
		for (let i =0;i <=100000; i++){
			if (((oneImg.x - 50 > threeImg.x || oneImg.x + 50 < threeImg.x) && (oneImg.y - 50 > threeImg.y || oneImg.y + 50 < threeImg.y)) && 
				((twoImg.x - 50 > threeImg.x || twoImg.x + 50 < threeImg.x) && (twoImg.y - 50 > threeImg.y || twoImg.y + 50 < threeImg.y)))
			{
				break;
			}
			threeImg.x = Math.random() * ( random_max - random_min ) + random_min;					
			threeImg.y = Math.random() * ( random_max - random_min ) + random_min;					
			if (i == 100000){
				console.log("giveup 3");
			}
			}

		fourImg.x = Math.random() * ( random_max - random_min ) + random_min;					
		fourImg.y = Math.random() * ( random_max - random_min ) + random_min;					
		for (let i =0;i <=100000; i++){
			if (((oneImg.x - 50 > fourImg.x || oneImg.x + 50 < fourImg.x) && (oneImg.y - 50 > fourImg.y || oneImg.y + 50 < fourImg.y)) && 
				((twoImg.x - 50 > fourImg.x || twoImg.x + 50 < fourImg.x) && (twoImg.y - 50 > fourImg.y || twoImg.y + 50 < fourImg.y)) &&
				((threeImg.x - 50 > fourImg.x || threeImg.x + 50 < fourImg.x) && (threeImg.y - 50 > fourImg.y || threeImg.y + 50 < fourImg.y)))
			{
				break;
			}
			fourImg.x = Math.random() * ( random_max - random_min ) + random_min;					
			fourImg.y = Math.random() * ( random_max - random_min ) + random_min;					
			if (i == 100000){
				console.log("giveup 4");
			}
			}

		fiveImg.x = Math.random() * ( random_max - random_min ) + random_min;					
		fiveImg.y = Math.random() * ( random_max - random_min ) + random_min;					
		for (let i =0;i <=100000; i++){
			if (((oneImg.x - 50 > fiveImg.x || oneImg.x + 50 < fiveImg.x) && (oneImg.y - 50 > fiveImg.y || oneImg.y + 50 < fiveImg.y)) && 
				((twoImg.x - 50 > fiveImg.x || twoImg.x + 50 < fiveImg.x) && (twoImg.y - 50 > fiveImg.y || twoImg.y + 50 < fiveImg.y)) &&
				((threeImg.x - 50 > fiveImg.x || threeImg.x + 50 < fiveImg.x) && (threeImg.y - 50 > fiveImg.y || threeImg.y + 50 < fiveImg.y)) &&
				((fourImg.x - 50 > fiveImg.x || fourImg.x + 50 < fiveImg.x) && (fourImg.y - 50 > fiveImg.y || fourImg.y + 50 < fiveImg.y))) 
			{
				break;
			}
			fiveImg.x = Math.random() * ( random_max - random_min ) + random_min;					
			fiveImg.y = Math.random() * ( random_max - random_min ) + random_min;					
			if (i == 100000){
				console.log("giveup 5");
			}
			}

		sixImg.y = Math.random() * ( random_max - random_min ) + random_min;					
		sixImg.x = Math.random() * ( random_max - random_min ) + random_min;					
		for (let i =0;i <=100000; i++){
			if (((oneImg.x - 50 > sixImg.x || oneImg.x + 50 < sixImg.x) && (oneImg.y - 50 > sixImg.y || oneImg.y + 50 < sixImg.y)) && 
				((twoImg.x - 50 > sixImg.x || twoImg.x + 50 < sixImg.x) && (twoImg.y - 50 > sixImg.y || twoImg.y + 50 < sixImg.y)) &&
				((threeImg.x - 50 > sixImg.x || threeImg.x + 50 < sixImg.x) && (threeImg.y - 50 > sixImg.y || threeImg.y + 50 < sixImg.y)) &&
				((fourImg.x - 50 > sixImg.x || fourImg.x + 50 < sixImg.x) && (fourImg.y - 50 > sixImg.y || fourImg.y + 50 < sixImg.y)) &&
				((fiveImg.x - 50 > sixImg.x || fiveImg.x + 50 < sixImg.x) && (fiveImg.y - 50 > sixImg.y || fiveImg.y + 50 < sixImg.y))) 
			{
				break;
			}
			sixImg.x = Math.random() * ( random_max - random_min ) + random_min;					
			sixImg.y = Math.random() * ( random_max - random_min ) + random_min;					
			if (i == 100000){
				console.log("giveup 6");
			}
			}

		sevenImg.y = Math.random() * ( random_max - random_min ) + random_min;					
		sevenImg.x = Math.random() * ( random_max - random_min ) + random_min;					
		for (let i =0;i <=100000; i++){
			if (((oneImg.x - 50 > sevenImg.x || oneImg.x + 50 < sevenImg.x) && (oneImg.y - 50 > sevenImg.y || oneImg.y + 50 < sevenImg.y)) && 
				((twoImg.x - 50 > sevenImg.x || twoImg.x + 50 < sevenImg.x) && (twoImg.y - 50 > sevenImg.y || twoImg.y + 50 < sevenImg.y)) &&
				((threeImg.x - 50 > sevenImg.x || threeImg.x + 50 < sevenImg.x) && (threeImg.y - 50 > sevenImg.y || threeImg.y + 50 < sevenImg.y)) &&
				((fourImg.x - 50 > sevenImg.x || fourImg.x + 50 < sevenImg.x) && (fourImg.y - 50 > sevenImg.y || fourImg.y + 50 < sevenImg.y)) &&
				((fiveImg.x - 50 > sevenImg.x || fiveImg.x + 50 < sevenImg.x) && (fiveImg.y - 50 > sevenImg.y || fiveImg.y + 50 < sevenImg.y)) &&
				((sixImg.x - 50 > sevenImg.x || sixImg.x + 50 < sevenImg.x) && (sixImg.y - 50 > sevenImg.y || sixImg.y + 50 < sevenImg.y))) 
			{
				break;
			}
			sevenImg.x = Math.random() * ( random_max - random_min ) + random_min;					
			sevenImg.y = Math.random() * ( random_max - random_min ) + random_min;					
			if (i == 100000){
				console.log("giveup 7");
			}
			}

		eightImg.y = Math.random() * ( random_max - random_min ) + random_min;					
		eightImg.x = Math.random() * ( random_max - random_min ) + random_min;					
		for (let i =0;i <=100000; i++){
			if (((oneImg.x - 50 > eightImg.x || oneImg.x + 50 < eightImg.x) && (oneImg.y - 50 > eightImg.y || oneImg.y + 50 < eightImg.y)) && 
				((twoImg.x - 50 > eightImg.x || twoImg.x + 50 < eightImg.x) && (twoImg.y - 50 > eightImg.y || twoImg.y + 50 < eightImg.y)) &&
				((threeImg.x - 50 > eightImg.x || threeImg.x + 50 < eightImg.x) && (threeImg.y - 50 > eightImg.y || threeImg.y + 50 < eightImg.y)) &&
				((fourImg.x - 50 > eightImg.x || fourImg.x + 50 < eightImg.x) && (fourImg.y - 50 > eightImg.y || fourImg.y + 50 < eightImg.y)) &&
				((fiveImg.x - 50 > eightImg.x || fiveImg.x + 50 < eightImg.x) && (fiveImg.y - 50 > eightImg.y || fiveImg.y + 50 < eightImg.y)) &&
				((sixImg.x - 50 > eightImg.x || sixImg.x + 50 < eightImg.x) && (sixImg.y - 50 > eightImg.y || sixImg.y + 50 < eightImg.y)) &&
				((sevenImg.x - 50 > eightImg.x || sevenImg.x + 50 < eightImg.x) && (sevenImg.y - 50 > eightImg.y || sevenImg.y + 50 < eightImg.y))) 
			{
				break;
			}
			eightImg.x = Math.random() * ( random_max - random_min ) + random_min;					
			eightImg.y = Math.random() * ( random_max - random_min ) + random_min;					
			if (i == 100000){
				console.log("giveup 8");
			}
		}

		nineImg.x = Math.random() * ( random_max - random_min ) + random_min;					
		nineImg.y = Math.random() * ( random_max - random_min ) + random_min;					
		for (let i =0;i <=100000; i++){
			if (((oneImg.x - 50 > nineImg.x || oneImg.x + 50 < nineImg.x) && (oneImg.y - 50 > nineImg.y || oneImg.y + 50 < nineImg.y)) && 
				((twoImg.x - 50 > nineImg.x || twoImg.x + 50 < nineImg.x) && (twoImg.y - 50 > nineImg.y || twoImg.y + 50 < nineImg.y)) &&
				((threeImg.x - 50 > nineImg.x || threeImg.x + 50 < nineImg.x) && (threeImg.y - 50 > nineImg.y || threeImg.y + 50 < nineImg.y)) &&
				((fourImg.x - 50 > nineImg.x || fourImg.x + 50 < nineImg.x) && (fourImg.y - 50 > nineImg.y || fourImg.y + 50 < nineImg.y)) &&
				((fiveImg.x - 50 > nineImg.x || fiveImg.x + 50 < nineImg.x) && (fiveImg.y - 50 > nineImg.y || fiveImg.y + 50 < nineImg.y)) &&
				((sixImg.x - 50 > nineImg.x || sixImg.x + 50 < nineImg.x) && (sixImg.y - 50 > nineImg.y || sixImg.y + 50 < nineImg.y)) &&
				((sevenImg.x - 50 > nineImg.x || sevenImg.x + 50 < nineImg.x) && (sevenImg.y - 50 > nineImg.y || sevenImg.y + 50 < nineImg.y)) &&
				((eightImg.x - 50 > nineImg.x || eightImg.x + 50 < nineImg.x) && (eightImg.y - 50 > nineImg.y || eightImg.y + 50 < nineImg.y))) 
			{
				break;
			}
			nineImg.x = Math.random() * ( random_max - random_min ) + random_min;					
			nineImg.y = Math.random() * ( random_max - random_min ) + random_min;					
			if (i == 100000){
				console.log("giveup 9");
			}
		}

		// ！クリックしたらボタン消えるようにする？		
		oneImg.ontouchend  = function () {			
			if(state == 0){
				game.assets[clickSndUrl].clone().play();
				state = 1;
			}
			else{
				game.assets[clickNgUrl].clone().play();
			}
		};
		twoImg.ontouchend  = function () {			
			if(state == 1){
				game.assets[clickSndUrl].clone().play();
				state = 2;
			}
			else{
				game.assets[clickNgUrl].clone().play();
			}
		};
		threeImg.ontouchend  = function () {			
			if(state == 2){
				game.assets[clickSndUrl].clone().play();
				state = 3;
			}
			else{
				game.assets[clickNgUrl].clone().play();
			}
		};
		fourImg.ontouchend  = function () {			
			if(state == 3){
				game.assets[clickSndUrl].clone().play();
				state = 4;
			}
			else{
				game.assets[clickNgUrl].clone().play();
			}
		};
		fiveImg.ontouchend  = function () {			
			if(state == 4){
				game.assets[clickSndUrl].clone().play();
				state = 5;
			}
			else{
				game.assets[clickNgUrl].clone().play();
			}
		};
		sixImg.ontouchend  = function () {			
			if(state == 5){
				game.assets[clickSndUrl].clone().play();
				state = 6;
			}
			else{
				game.assets[clickNgUrl].clone().play();
			}
		};
		sevenImg.ontouchend  = function () {			
			if(state == 6){
				game.assets[clickSndUrl].clone().play();
				state = 7;
			}
			else{
				game.assets[clickNgUrl].clone().play();
			}
		};
		eightImg.ontouchend  = function () {			
			if(state == 7){
				game.assets[clickSndUrl].clone().play();
				state = 8;
			}
			else{
				game.assets[clickNgUrl].clone().play();
			}
		};
		nineImg.ontouchend  = function () {			
			if(state == 8){
				game.assets[clickSndUrl].clone().play();
				state = 9;
			}
			else{
				game.assets[clickNgUrl].clone().play();
			}
		};


		///////////////////////////////////////////////////
		//メインループ　ここに主要な処理をまとめて書こう
		game.onenterframe = function () {
				
			if (state == 9) {					
				game.popScene();				
				game.pushScene(endScene);			

				//ゲームオーバー後のテキスト表示
				gameOverText.text = "おわり";			
		        }


		};



		////////////////////////////////////////////////////////////////
		//結果画面
		const endScene = new Scene();
		endScene.backgroundColor = "blue";

		//GAMEOVER
		const gameOverText = new Label(); 					//テキストはLabelクラス
		gameOverText.font = "20px Meiryo";				//フォントはメイリオ 20px 変えたかったらググってくれ
		gameOverText.color = 'rgba(255,255,255,1)';		//色　RGB+透明度　今回は白
		gameOverText.width = 400;							//横幅指定　今回画面サイズ400pxなので、width:400pxだと折り返して二行目表示してくれる
		gameOverText.moveTo(0, 30);						//移動位置指定
		endScene.addChild(gameOverText);						//endSceneシーンにこの画像を埋め込む



		//リトライボタン
		const retryBtn = new Sprite(120, 60);				//画像サイズをここに書く。使う予定の画像サイズはプロパティで見ておくこと
		retryBtn.moveTo(340, 470);						//リトライボタンの位置
		retryBtn.image = game.assets[retryImgUrl];			//読み込む画像の相対パスを指定。　事前にgame.preloadしてないと呼び出せない
		endScene.addChild(retryBtn);					//endSceneにこのリトライボタン画像を貼り付ける  

		retryBtn.ontouchend = function () {				//S_Retryボタンをタッチした（タッチして離した）時にこの中の内容を実行する
			state = 0;
			game.popScene();						//endSceneシーンを外す
			game.pushScene(mainScene);					//mainSceneシーンを入れる
			game.onload();
		};

		//ツイートボタン
//		const tweetBtn = new Sprite(120, 60);				//画像サイズをここに書く。使う予定の画像サイズはプロパティで見ておくこと
//		tweetBtn.moveTo(300, 600);						//リトライボタンの位置
//		tweetBtn.image = game.assets[tweetImgUrl];			//読み込む画像の相対パスを指定。　事前にgame.preloadしてないと呼び出せない
//		endScene.addChild(tweetBtn);					//endSceneにこのリトライボタン画像を貼り付ける  
//
//		tweetBtn.ontouchend = function () {				//S_Tweetボタンをタッチした（タッチして離した）時にこの中の内容を実行する
//			//ツイートＡＰＩに送信
//			//結果ツイート時にURLを貼るため、このゲームのURLをここに記入してURLがツイート画面に反映されるようにエンコードする
//			const url = encodeURI("https://hothukurou.com");
//			window.open("http://twitter.com/intent/tweet?text=頑張っておわったよ"); //ハッシュタグにahogeタグ付くようにした。
//		};

	};
	game.start();
};
