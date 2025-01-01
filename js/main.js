$(function () {
    // // 背景アニメーション
    // // x,y
    // const lines = [
    //     ['10%', '10%'], ['20%', '20%'], ['30%', '30%'], ['40%', '40%'], ['50%', '50%'],
    //     ['60%', '60%'], ['70%', '70%'], ['80%', '80%'], ['90%', '90%'], ['15%', '25%'],
    //     ['25%', '35%'], ['35%', '45%'], ['45%', '55%'], ['55%', '65%'], ['65%', '75%'],
    //     ['75%', '85%'], ['85%', '95%'], ['5%', '15%'], ['10%', '20%'], ['20%', '30%'],
    //     ['30%', '40%'], ['40%', '50%'], ['50%', '60%'], ['60%', '70%'], ['70%', '80%'],
    //     ['80%', '90%'], ['90%', '100%'], ['5%', '10%'], ['15%', '20%'], ['25%', '30%'],
    //     ['35%', '40%'], ['45%', '50%'], ['55%', '60%'], ['65%', '70%'], ['75%', '80%'],
    //     ['85%', '90%'], ['95%', '100%'], ['6%', '12%'], ['16%', '26%']
    // ];

    // // ランダムに選べる色のリスト
    // const colors = ['#ffd7d7', '#ffd7e5', '#e6d7ff', '#d7f6ff', '#d7ffd9'];

    // let previousIndex = null; // 前回選ばれたラインのインデックスを保持

    // function createLineAnimation() {
    //     let randomIndex;

    //     // 前回と同じラインが選ばれないようにする
    //     do {
    //         randomIndex = Math.floor(Math.random() * lines.length);
    //     } while (randomIndex === previousIndex);

    //     previousIndex = randomIndex; // 現在のインデックスを記録

    //     const randomLine = lines[randomIndex];
    //     const xPosition = randomLine[0];
    //     const yPosition = randomLine[1];

    //     // ランダムで色を選択
    //     const randomColor = colors[Math.floor(Math.random() * colors.length)];

    //     // ラインの長さを100pxに設定
    //     const lineLength = 100;

    //     // X軸とY軸の線を作成
    //     const lineX = $('<div class="line line-x"></div>').appendTo('body');
    //     const lineY = $('<div class="line line-y"></div>').appendTo('body');
    //     // const circle = $('<div class="circle"></div>').appendTo('body'); // クロス地点に円を追加

    //     // ラインXのアニメーション
    //     lineX.css({
    //         top: yPosition,
    //         left: '0',
    //         width: lineLength + 'px',
    //         height: '2px', // 高さは小さく設定
    //         backgroundColor: randomColor, // ランダムで色を適用
    //         opacity: '0.5',
    //         position: 'absolute',
    //         zIndex: '-1'
    //     }).animate({ width: '100vw' }, 2000, 'swing', function () {
    //         $(this).fadeOut(500, function () {
    //             $(this).remove();
    //         });
    //     });

    //     // ラインYのアニメーション
    //     lineY.css({
    //         top: '0',
    //         left: xPosition,
    //         height: lineLength + 'px',
    //         width: '2px', // 幅は小さく設定
    //         backgroundColor: randomColor, // ランダムで色を適用
    //         opacity: '0.5',
    //         position: 'absolute',
    //         zIndex: '-1'
    //     }).animate({ height: '100vh' }, 2000, 'swing', function () {
    //         $(this).fadeOut(500, function () {
    //             $(this).remove();
    //         });
    //     });

    //     // 円を交差地点に配置
    //     // circle.css({
    //     //     position: 'absolute',
    //     //     top: yPosition,
    //     //     left: xPosition,
    //     //     width: '20px',  // 円の直径
    //     //     height: '20px',
    //     //     backgroundColor: randomColor, // ランダムで色を適用
    //     //     borderRadius: '50%',  // 円形にする
    //     //     transform: 'translate(-50%, -50%)', // 真ん中に配置
    //     //     display: 'none' // 初期状態で非表示
    //     // }).fadeIn(200); // 追加する際にフェードイン

    //     // 円が表示された後、1秒後にフェードアウトさせる
    //     // setTimeout(function () {
    //     //     circle.fadeOut(500, function () {
    //     //         $(this).remove(); // フェードアウト後に削除
    //     //     });
    //     // }, 2000);

    //     // 次のアニメーションを1〜2秒の間でランダムに設定
    //     const randomInterval = Math.floor(Math.random() * 200) + 2500; // 1000ms（1秒）〜2000ms（2秒）

    //     setTimeout(createLineAnimation, randomInterval); // 次のアニメーションを遅延させて実行
    // }

    // // 最初のアニメーションを開始
    // createLineAnimation();

    // ナビゲーション切替＆ページ表示切替
    $('.nav_li').on('click', function () {
        // ナビゲーションのアクティブ切り替え
        $('.nav_li').removeClass('active'); // 表示中ナビゲーション
        $(this).addClass('active'); // 表示したいナビゲーション

        // 対応するページの切り替え
        const pageIndex = $(this).index(); // クリックしたナビゲーションのインデックスを取得
        $('.page_section').fadeOut(500).removeClass('active');
        $('.page_section').eq(pageIndex).delay(750).fadeIn(500).addClass('active');
    });

    // 実績スライダー
    $(".achievement_slider").slick({
        arrows: true,
        dots: true,
        dotsClass: 'dots-wrap',
        infinite: true,
        nextArrow: '<button class="slick-next"><img src="./images/next.png" alt="Next" width="20px" height="20px"></button>',
        prevArrow: '<button class="slick-prev"><img src="./images/prev.png" alt="Previous" width="20px" height="20px"></button>',
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // 作品
    $('.work_li').on('click', function () {
        // ナビゲーションのアクティブ切り替え
        $('.work_li').removeClass('active');
        $(this).addClass('active');

        // 対応するページの切り替え
        const pageIndex = $(this).index();

        // 対応するページの切り替え
        $('.work_detail').fadeOut(500).removeClass('active');
        $('.work_detail').eq(pageIndex).delay(750).fadeIn(500).addClass('active');
    });

    // お問い合わせバリデーション
    $("#contactForm").on("submit", function (e) {
        // 連続送信阻止
        $('#submit').prop("disabled", true);

        e.preventDefault(); // デフォルトのフォーム送信を防ぐ

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();

        // バリデーションの条件
        if (!name) {
            alert("お名前を入力してください。");
            return;
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("有効なメールアドレスを入力してください。");
            return;
        }
        if (!message) {
            alert("お問い合わせ内容を入力してください。");
            return;
        }

        // バリデーション通過後にデータ送信
        const formData = new FormData(this);

        // 現ページのURLをベースにする
        const baseUrl = window.location.origin;
        // 環境の確認
        const isLocal = baseUrl.includes('http://portfolio.local.com');
        // ベースの作成
        const url = isLocal ? baseUrl : baseUrl + '/portfolio'

        $.ajax({
            url: url + "/send.php",
            type: "POST",
            data: formData,
            processData: false, // フォームデータを文字列として処理しない
            contentType: false, // Content-Typeを自動設定
            success: function (data) {
                try {
                    const jsonData = JSON.parse(data); // JSONとして解析
                    if (jsonData.status === 'success') {
                        alert("お問い合わせが送信されました！");
                        $('#submit').prop("disabled", false);
                    } else {
                        alert("エラーが発生しました");
                    }
                } catch (error) {
                    console.error("レスポンスが無効なJSON形式です:", data);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#response").text("エラーが発生しました。再度お試しください。");
            },
        });
    });
})