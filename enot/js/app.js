/* eslint-disable */

var modal = document.querySelector("#modal-form");
var modal_action = document.querySelector("#modal-action");
var modal_msg = document.querySelector("#modal-msg");
var modalBtn = document.querySelector("#modal-btn");
var closeBtn = document.querySelector("#modal-form .close");
var closeBtnAction = document.querySelector("#modal-action .close");
var closeBtnMsg = document.querySelector("#modal-msg .close");

// modalBtn.addEventListener("click", openModal);
window.addEventListener("click", outsideClick);
closeBtn.addEventListener("click", closeModal);
closeBtnAction.addEventListener("click", closeModalAction);
closeBtnMsg.addEventListener("click", closeModalMsg);

function openModal() 
{
  modal.style.display = "block";
}

function closeModal() 
{
  document.querySelector(".modal").style.display = "none";
}

function openModalAction() 
{
  modal_action.style.display = "block";
}

function closeModalAction() 
{
  modal_action.style.display = "none";
}

function openModalMsg()
{
  modal_msg.style.display = "block";
}

function closeModalMsg() 
{
  modal_msg.style.display = "none";
  document.querySelector("#modal-msg-text").innerHTML = "";
}

function outsideClick(e) 
{
  if (e.target == modal.querySelector(".modal-dialog") || e.target == modal) 
  {
    modal.style.display = "none";
  } 
  else if (  e.target == modal_action.querySelector(".modal-dialog") 
          || e.target == modal_action
          ) 
  {
    modal_action.style.display = "none";
  } 
  else if (  e.target == modal_msg.querySelector(".modal-dialog") 
          || e.target == modal_msg
          ) 
  {
    modal_msg.style.display = "none";
    document.querySelector("#modal-msg-text").innerHTML = "";
  }
}

function getRandomInt(min, max) 
{
  return Math.floor(Math.random() * (max - min)) + min;
}

$(function() 
{
  var user = baraban_user;
  var waiting_server = false;

  function showError(msg)
  {
    $("#modal-msg-text").html(msg);
    openModalMsg();
  }
	
  function queryServer(data, callback) 
  {
    waiting_server = true;
    $.ajax({
      url: "./play.php",
      type: "POST",
      data: data
    })
    .done(function(result) {
      waiting_server = false;
      try {
        result = $.parseJSON(result);

        if (result.debug) 
           console.log(result.debug);

        if (callback) 
          callback(result);
        else 
          console.log("success", result);
      } 
      catch (e) 
      {
        showError("Ошибка соединения с сервером! Обратитесь к администратору.");
      }
    })      
    .fail(function() 
    {
        waiting_server = false;
        // console.log("error");
        showError("Ошибка соединения с сервером! Обратитесь к администратору.");
        // callback(false, result);
    })
    .always(function() {
        waiting_server = false;
        // console.log("complete");
    });
  }

  function queryRun(run_type, callback)
  {
    queryServer({ cmd: "run", run_type: run_type }, callback);
  }

  function queryUseFreeRun(callback)
	{
		queryRun('free_run', callback);
  }

	function queryGetTicket(callback)
	{
		queryServer({cmd: 'get_ticket'}, callback);
  }

	function queryUseTicket(callback)
	{
		queryRun('ticket', callback);
  }

	function queryGetShare(callback)
	{
		queryServer({cmd: 'get_share'}, callback);
  }

	function queryUseShare(callback)
	{
		queryRun('share', callback);
  }

  // Загрузка

  var progress_time = 0;

  function runProgress() 
  {
		if(progress_time <= 5000 )
		{
      var next = getRandomInt(0, 200);

      progress_time += next;

      var progress = Math.floor(progress_time / 50);
      if (progress > 100) progress = 100;

      $(".progress__count").css("width", progress + "%");
      $(".progress__text").text(progress + "%");

      setTimeout(runProgress, next);
    } 
    else 
    {
      $(".load-box__text").hide();
      $("#baraban").show();
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#baraban").offset().top
        },
        500
      );
    }
  }


  runProgress();

  function showGift(gift_id) 
  {
    // получаем описание выигрыша
    var $item = $(".carousel__gift > *:nth-of-type(" + (gift_id + 1) + ") ");
    var $res = $(".gift-result");

    // отображаем выигрыш
    $res.find("img")[0].src = $item.find("img")[0].src;
    $res.find(".gift-result-title").text($item.find(".gift-item__text").text());
    $res.find(".gift-result-sub").text($item.find(".gift-item__sub").text());

    // прячем вопросительный знак
    $(".gift-body__text").hide();

    $res.show();
  }

  function updateTries()
  {
    var n = (user["free_run_used"] ? 0 : 1 ) 
          + ((user["ticket_taken"] && !user["ticket_used"]) ? 1 : 0 ) 
          + ((user["share_taken"] && !user["share_used"]) ? 1 : 0 );

    $('.tries-left img')[0].src = 'img/tries'+(n >=3 ? 3 : n)+'.png';

    if( user["free_run_used"] ) 
      $("#modal-btn").css('opacity', 1);
  }
  updateTries();


  // Барабан

  var $carousel = $(".carousel");
  var current_item = 0;
  var total_items = 10;
  var gift_recieved = user["last_prize"] !== false;
  var running = false;
  var rotations = 0;

  if (gift_recieved) showGift(user["last_prize"]);

  function spinBaraban(run_to_item) 
  {
    if (!running) 
    {
      running = true;

      user["last_prize"] = run_to_item; //getRandomInt(0, total_items-1);

      // прячем кнопку
      $("#modal-btn").css("opacity", 1);

      // stopShake();
      // включаем размытие движения
      $carousel.addClass("running");

      ++rotations;
      // запускаем анимацию вращения
      $(".carousel__gift").css(
        "transform",
        "rotate(" + (rotations * 1800 + 36 * (10 - run_to_item)) + "deg)"
      );

      setTimeout(function() 
      {
        // отключаем размытие движения
        $carousel.removeClass("running");
      }, 6200);

      setTimeout(function() 
      {
        // выдаём приз по окончании анимации
        running = false;
        gift_recieved = true;

        showGift(run_to_item);

        $("#modal-btn").css("opacity", 1);
      }, 8200);
    }
  }

  function runGame() 
  {
    if (!running && !waiting_server) 
    {

      if (!user["free_run_used"]) 
      {
        queryUseFreeRun(function(result) {
          if (result.error) 
            showError(result.error);
          else if(result['prize'] !== undefined )
          {
            user["free_run_used"] = 1;
            updateTries();
            spinBaraban(result.prize);
          }
        });
      } 
      else if ( user["ticket_taken"] && !user["ticket_used"]) 
      {
        queryUseTicket(function(result) 
        {
          if (result.error)
             showError(result.error);
          else if (result['prize'] !== undefined) 
          {
            user["ticket_used"] = 1;
            updateTries();
            spinBaraban(result.prize);
          }
        });
      }
      else if (user["share_taken"] && !user["share_used"]) 
      {
        queryUseShare(function(result) 
        {
          if (result.error) 
            showError(result.error);
          else if (result['prize'] !== undefined) 
          {
            user["share_used"] = 1;
            updateTries();
            spinBaraban(result.prize);
          }
        });
      } 
      else if (!user["ticket_taken"] || !user["share_taken"]) 
      {
        openModalAction();
      }
      else 
      {
		    showError('Ваши попытки закончились! Спасибо, что поиграли с Енотиком! ;)');
      }
      updateTries();
    }
  }

  $(".carousel__start").click(runGame);
  $(".social").hide();

  //получить подарок
  $(".gift").click(function(event) {
    if (gift_recieved && !running) 
    {
      openModal();
    }
  });

  // получить шанс
  $("#modal-btn").click(function(event) {
    if (!running) 
    {
      openModalAction();
    }
  });

  // к покупке билета
  $(".buy-ticket").click(function(event) {
    queryGetTicket(function(res) 
    {
      if (res.error) 
        showError(res.error);
      else 
      {
        window.open("https://enotopolis.ru/?utm_source=yandex&utm_medium=cpc&utm_campaign=enotopolis&utm_content=cpc&utm_term=present", "_blank");
        closeModalAction();
        user["ticket_taken"] = 1;
        updateTries();
        if(!res.warn)
          showError('Вращайте барабан!');
      }
      // $("#modal-btn").hide();
      if (res.warn) showError(res.warn);
    });
  });

  // к поделиться ссылкой
  $(".share-link").click(function(event) {
    event.preventDefault();
    $(".social").show();
  });

  // к поделиться ссылкой
  $(".share_btn").click(function(event) {
    // event.preventDefault();
    queryGetShare(function(res) 
    {
      if (res.error) 
        showError(res.error);
      else 
      {
        $(".social").show();

        // window.open('https://enotopolis.ru/?utm_source=yandex&utm_medium=cpc&utm_campaign=enotopolis&utm_content=cpc&utm_term=present', '_blank');
        // closeModalAction();
        user['share_taken'] = 1;
        updateTries();
        if(!res.warn)
          showError('Вращайте барабан!');
      }
      // $("#modal-btn").hide();
      if (res.warn) showError(res.warn);
    });
  });


  $(".reg-form").submit(function(e) 
  {
    e.preventDefault();
    var f = this;
    // var $f = $(this);
    if(!f.agree.checked)
    {
        showError('Вы должны принять условия политики конфиденциальности!');
    }
    else
      queryServer({cmd: 'register', user_name: f.user_name.value, user_phone: f.user_phone.value}, function(res)
      {
        if(res.error)
          showError(res.error);
        else
        {
          closeModal();
          showError('Спасибо за регистрацию!');
  	    }
      });
  });

  // SHAKER

  //listen to shake event
  var shakeEvent = new Shake({ threshold: 15 });
  shakeEvent.start();
  window.addEventListener("shake", runGame, false);

  //stop listening
  function stopShake() {
    shakeEvent.stop();
  }

  //check if shake is supported or not.
  if (!("ondevicemotion" in window)) {
    $(".modal-msg-text").html(msg);
    openModalMsg();
  }

  // /SHAKER
});


/* Share Buttons*/

$(function(){
    // клик по кнопке шаринга
    $(".share_btn").click(function(){
        var social = $(this).data("social");
        // урл текущей страницы
        var url_share = location.href;
        // если задан атрибут data-url, то берем урл из него
        if (typeof $(this).attr("data-url") !== typeof undefined && $(this).attr("data-url") !== false) {
            url_share = $(this).data("url");        
        }
        // открываем окно для репоста
        share(social, url_share);
    });
});
 
 
/**
* Создание нового окна браузера для репоста в соц.сеть
*
* @param string social - социальная сеть, в которую будет сделан репост
* @param string url_share - url страницы, которая будет опубликована в соц.сети
*/
function share(social, url_share){
    // определяем ссылку для нужной соц.сети
    var url_soc = false;
    switch (social) {
        case "vk":
            url_soc = "https://vk.com/share.php?url="+url_share;
            break;
        case "fb":
            url_soc = "https://www.facebook.com/sharer/sharer.php?u="+url_share;
            break;
        case "ok":
            url_soc = "https://connect.ok.ru/offer?url="+url_share;
            break;
        case "tw":
            url_soc = "https://twitter.com/intent/tweet?url="+url_share;
            break;
        case "gp":
            url_soc = "https://plus.google.com/share?url="+url_share;
            break;
    }
     
    // открытие нового окна для шаринга
    if(url_soc){
        // размеры окна
        var width = 800, height = 500;
        // центруем окно
        var left = (window.screen.width - width) / 2;
        var top = (window.screen.height - height) / 2;
        // открываем окно
        social_window = window.open(url_soc, "share_window", "height=" + height + ",width=" + width + ",top=" + top + ",left=" + left);
        // устанавливаем на окно фокус
        social_window.focus();
    }
}
