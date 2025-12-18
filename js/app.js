//犬の名前を日本語にするオブジェクト
const breedTranslation = {
    "affenpinscher": "アッフェンピンシャー",
    "african": "アフリカンドッグ",
    "airedale": "エアデールテリア",
    "akita": "秋田犬",
    "appenzeller": "アッペンツェラー",
    "australian": "オーストラリアン・シェパード",
    "basenji": "バセンジー",
    "beagle": "ビーグル",
    "bluetick": "ブルーティック・クーンハウンド",
    "borzoi": "ボルゾイ",
    "bouvier": "ブービエ・デ・フランダース",
    "boxer": "ボクサー",
    "brabancon": "プチ・ブラバンソン",
    "briard": "ブリアール",
    "buhund": "ノルウェー・ブーフント",
    "bulldog": "ブルドッグ",
    "bullterrier": "ブルテリア",
    "cattledog": "キャトルドッグ",
    "cavapoo": "キャバプー",
    "chihuahua": "チワワ",
    "chow": "チャウチャウ",
    "clumber": "クランバー・スパニエル",
    "cockapoo": "コッカプー",
    "collie": "コリー",
    "coonhound": "クーンハウンド",
    "corgi": "コーギー",
    "cotondetulear": "コトン・ド・テュレアール",
    "dachshund": "ダックスフンド",
    "dalmatian": "ダルメシアン",
    "dane": "グレート・デーン",
    "deerhound": "ディアハウンド",
    "dhole": "ドール",
    "dingo": "ディンゴ",
    "doberman": "ドーベルマン",
    "elkhound": "エルクハウンド",
    "entlebucher": "エントレブッハー",
    "eskimo": "エスキモー・ドッグ",
    "finnish": "フィニッシュ・ラップハウンド",
    "frise": "ビション・フリーゼ",
    "german": "ジャーマン・シェパード",
    "greyhound": "グレイハウンド",
    "groenendael": "グローネンダール",
    "havanese": "ハバニーズ",
    "hound": "ハウンド",
    "husky": "ハスキー",
    "keeshond": "キースホンド",
    "kelpie": "ケルピー",
    "komondor": "コモンドール",
    "kuvasz": "クバース",
    "labradoodle": "ラブラドゥードル",
    "labrador": "ラブラドール・レトリバー",
    "leonberg": "レオンベルガー",
    "lhasa": "ラサアプソ",
    "malamute": "マラミュート",
    "malinois": "マリノア",
    "maltese": "マルチーズ",
    "mastiff": "マスティフ",
    "mexicanhairless": "メキシカン・ヘアレス・ドッグ",
    "mix": "ミックス犬",
    "mountain": "バーニーズ・マウンテン・ドッグ",
    "newfoundland": "ニューファンドランド",
    "otterhound": "オッターハウンド",
    "ovcharka": "オヴチャルカ",
    "papillon": "パピヨン",
    "pekinese": "ペキニーズ",
    "pembroke": "ウェルシュ・コーギー・ペンブローク",
    "pinscher": "ピンシャー",
    "pitbull": "ピットブル",
    "pointer": "ポインター",
    "pomeranian": "ポメラニアン",
    "poodle": "プードル",
    "pug": "パグ",
    "puggle": "パグル",
    "pyrenees": "グレート・ピレニーズ",
    "redbone": "レッドボーン・クーンハウンド",
    "retriever": "レトリバー",
    "ridgeback": "リッジバック",
    "rottweiler": "ロットワイラー",
    "saluki": "サルーキ",
    "samoyed": "サモエド",
    "schipperke": "スキッパーキ",
    "schnauzer": "シュナウザー",
    "segugio": "セグージョ",
    "setter": "セッター",
    "sharpei": "シャーペイ",
    "sheepdog": "シープドッグ",
    "shiba": "柴犬",
    "shihtzu": "シーズー",
    "spaniel": "スパニエル",
    "spitz": "スピッツ",
    "springer": "スプリンガー・スパニエル",
    "stbernard": "セント・バーナード",
    "terrier": "テリア",
    "tervuren": "タービュレン",
    "vizsla": "ビズラ",
    "waterdog": "ウォータードッグ",
    "weimaraner": "ワイマラナー",
    "whippet": "ウィペット",
    "wolfhound": "ウルフハウンド"
};


$(document).ready(async function() {
    //データ取得
   const fetchDog = async () =>{
    try {
        const url = ``;
        const res = await fetch(url);
        const data= await res.json();
        // 1. 画像URLを取得
        const dogUrl = data.message;
        // 2. URLから犬種名を抜き出す処理
        // URL例: https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg
        const urlParts = dogUrl.split('/');
        // スラッシュで区切った時の5番目（インデックス4）が犬種名
        let breedName = urlParts[4];
        // 1. まずハイフンより前の名前だけを取り出す（例: "poodle-standard" -> "poodle"）
        // これで辞書のキー ("poodle") と一致するようになります
            let breedKey = breedName.split('-')[0];
        //辞書から日本語を探す（breedNameの辞書＝URL内の4つ目の文節があればオブジェクトから日本語訳して出力）
        //なければ英語の加工版（1文字目大文字）を出す
            let displayName = breedTranslation[breedKey] || (breedKey.charAt(0).toUpperCase() + breedKey.slice(1).replace('-', ' '));

            $('#dog-image').attr('src', dogUrl);
            $('#dog-breed').text(displayName);
        // .attr→「src」属性を「data.message（新しいURL）」に書き換えて！という命令
        $('#dog-image').attr('src', data.message);
        $('#dog-breed').text(displayName); // 大文字にして表示
        console.log("取得成功:", data.message);
    }
    catch(error){
        console.error("失敗しました",error);
        alert("わんちゃんの取得に失敗しました。ネット環境を確認してください。");
    }
   };
   //ボタンクリックイベント
   $('#btn').on('click', fetchDog);
   //初回読み込み
   await fetchDog();

});
