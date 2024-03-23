jQuery(function ($) {

  $(document).ready(function () {
    var menuIconCheckbox = $('#menu-icon');

    function closeMenu() {
      if (menuIconCheckbox.prop('checked')) {
        menuIconCheckbox.prop('checked', false);
      }
    }

    function handleLinkClick(targetId) {
      var navElement = $('.nav');
     

      var allSections = $('.section');
      allSections.css('display', 'none');

      var targetSection = $(targetId);
      if (targetSection.length) {
        targetSection.css('display', 'block');
        closeMenu();
      }
    }

    var clickableItem = $('#clickableItem');
    clickableItem.click(closeMenu);

    var links = $('.nav a');
    links.click(function (event) {
      event.preventDefault();

      var targetId = $(this).attr('href');
      handleLinkClick(targetId);

      $(targetId).get(0).scrollIntoView({
        behavior: 'smooth'
      });

      closeMenu();
    });
  });

  
var stalker = $("#stalker");




$(function(){
    //カーソル要素の指定
    var cursor=$("#cursor");
    
    //mousemoveイベントでカーソル要素を移動させる
    $(document).on("mousemove",function(e){
      //カーソルの座標位置を取得
      var x=e.clientX;
      var y=e.clientY;
      //カーソル要素のcssを書き換える用
      cursor.css({
        "opacity":"1",
        "top":y+"px",
        "left":x+"px"
      });
    });
  
     //aタグホバー
     $("a").on({
      "mouseenter": function() {
        //activeクラス付与
        cursor.addClass("active");
        stalker.addClass("active");
      },
      "mouseleave": function() {
        cursor.removeClass("active");
        stalker.removeClass("active");
      }
    });
  
     //buttonタグホバー
     $("button").on({
      "mouseenter": function() {
        //activeクラス付与
        cursor.addClass("active");
        stalker.addClass("active");
      },
      "mouseleave": function() {
        cursor.removeClass("active");
        stalker.removeClass("active");
      }
    });
  
      //liタグホバー
      $("li").on({
      "mouseenter": function() {
        //activeクラス付与
        cursor.addClass("active");
        stalker.addClass("active");
      },
      "mouseleave": function() {
        cursor.removeClass("active");
        stalker.removeClass("active");
      }
    });
    
    //buttonタグホバー
     $("#hamburger").on({
      "mouseenter": function() {
        //activeクラス付与
        cursor.addClass("active");
        stalker.addClass("active");
      },
      "mouseleave": function() {
        cursor.removeClass("active");
        stalker.removeClass("active");
      }
    });
  });

// 文字を横から出現させるアニメーション

  $(function() {
    $('.js-button').click(function() {
      // #js-button の次の兄弟要素に js-city クラスを付与
      var jsCityElement = $(this).next().addClass('js-city');
  
      // visibility: hidden; を無効化
      jsCityElement.css('visibility', 'visible');
  
      var txt_array = jsCityElement.text().split('');
  
      jsCityElement.html('');
  
      // テキストの各文字に対してアニメーションを実行
      $.each(txt_array, function(index, element) {
        var new_element = $("<span/>").text(element).css({ opacity: 0 });
        jsCityElement.append(new_element);
        new_element.delay(index * 100);
        new_element.animate({ opacity: 1 }, 1000);
      });
    });
  });
  
// 送信完了画面を表示する 
  $(document).ready(function () {

    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/hogehoge",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".end-message").slideDown();
            $(".submit-btn").fadeOut();
            //window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });
  //WOWの繰り返しアニメーション//

window.addEventListener('scroll', function (e) {
  if ($(window).scrollTop() <= 50) {
      $('.wow').removeClass('animated');
      $('.wow').removeAttr('style');
      new WOW().init();
  }
});

//トップに戻るボタンがスクロールされた時の表示//

jQuery(window).on("scroll", function () {
  //トップから100pxスクロールしたら//
  if (100 < $(window).scrollTop()) {
    //出現させる//
    $('#js-page-top').addClass("is-show");
    //それ以外の時は、is-showを外して見えなくする//    
  } else {

    jQuery('#js-page-top').removeClass("is-show");
  }});
  
  //スムーススクロール//

//aタグの先頭が# の場合、
jQuery('a[href^="#"]').on("click", function (e) {
  //hrefの中身の属性を取得する//
  const id = $(this).attr("href");

  //IDの値が、#だけの場合htmlをターゲットにする//
  //IDの値が、#の後に続くものの時は、そのidの要素を指定してあげる//
  const target = $("#" == id ? "html" : id);
  const position = $(target).offset().top;

  //html と body に対して、//
  jQuery("html, body").animate(
    {
      scrollTop: position,
      //scrollTop: 0,// 一番上に戻る //
    },
    1000,  //1000で1秒//
    "swing" // swing だとゆっくりからだんだん早く linear だと一定の速さで//
  );
});
MicroModal.init({
  disableScroll: true,
});

function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('mail').value;
  var inquiryType = document.querySelector('input[name="entry.1781688909"]:checked').value;
  
  v
var message = document.getElementById('your-message').value;

  
}
function sendDataToGoogleForm(name, email, inquiryType, message) {
  // Googleフォームの送信先URL
  var googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSe7JSiC2SdtpmnvejTe6f0jWCr3i6rg_rPqqJ8r73L78s1-gg/formResponse';

  // Googleフォームの送信データを作成
  var formData = new FormData();
  formData.append('entry.1143772600', name);  // 名前
  formData.append('entry.1763403160', email); // メールアドレス
  formData.append('entry.1781688909', inquiryType);  // お問い合わせ項目
  formData.append('entry.1350839370', message); // お問い合わせ内容

  // HTTPリクエストを作成してGoogleフォームにデータを送信
  fetch(googleFormURL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // クロスオリジン制約をバイパスするためのモード
  })
  .then(function(response) {
      // レスポンスを処理する（必要に応じて）
      console.log('Form data sent successfully');
  })
  .catch(function(error) {
      // エラーを処理する（必要に応じて）
      console.error('Error sending form data:', error);
  });
}

function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('mail').value;
  var inquiryType = document.querySelector('input[name="entry.1781688909"]:checked').value;
  var message = document.getElementById('your-message').value;

  sendDataToGoogleForm(name, email, inquiryType, message);
}

})