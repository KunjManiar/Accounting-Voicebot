hideChat(0);

$('#prime').click(function() {
  toggleFab();
  // update
});


//Toggle chat and links
function toggleFab() {
  $('.prime').toggleClass('zmdi-comment-outline');
  $('.prime').toggleClass('zmdi-close');
  $('.prime').toggleClass('is-active');
  $('.prime').toggleClass('is-visible');
  $('#prime').toggleClass('is-float');
  $('.chat').toggleClass('is-visible');
  $('.fab').toggleClass('is-visible');

}

  $('#chat_first_screen').click(function(e) {
        hideChat(1);
  });

  $('#chat_second_screen').click(function(e) {
        hideChat(2);
  });

  $('#chat_third_screen').click(function(e) {
        hideChat(3);
  });

  $('#chat_fourth_screen').click(function(e) {
        hideChat(4);
  });

  $('#chat_fullscreen_loader').click(function(e) {
      $('.fullscreen').toggleClass('zmdi-window-maximize');
      $('.fullscreen').toggleClass('zmdi-window-restore');
      $('.chat').toggleClass('chat_fullscreen');
      $('.fab').toggleClass('is-hide');
      $('.header_img').toggleClass('change_img');
      $('.img_container').toggleClass('change_img');
      $('.chat_header').toggleClass('chat_header2');
      $('.fab_field').toggleClass('fab_field2');
      $('.chat_converse').toggleClass('chat_converse2');
      //$('#chat_converse').css('display', 'none');
     // $('#chat_body').css('display', 'none');
     // $('#chat_form').css('display', 'none');
     // $('.chat_login').css('display', 'none');
     // $('#chat_fullscreen').css('display', 'block');
  });

function hideChat(hide) {
    switch (hide) {
      case 0:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'block');
            $('.chat_fullscreen_loader').css('display', 'none');
             $('#chat_fullscreen').css('display', 'none');
            break;
      case 1:
            $('#chat_converse').css('display', 'block');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 2:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'block');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 3:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'block');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 4:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            $('#chat_fullscreen').css('display', 'block');
            break;
    }
}
// var langs =
// [['Afrikaans',       ['af-ZA']],
//  ['Bahasa Indonesia',['id-ID']],
//  ['Bahasa Melayu',   ['ms-MY']],
//  ['Català',          ['ca-ES']],
//  ['Čeština',         ['cs-CZ']],
//  ['Deutsch',         ['de-DE']],
//  ['English',         ['en-AU', 'Australia'],
//                      ['en-CA', 'Canada'],
//                      ['en-IN', 'India'],
//                      ['en-NZ', 'New Zealand'],
//                      ['en-ZA', 'South Africa'],
//                      ['en-GB', 'United Kingdom'],
//                      ['en-US', 'United States']],
//  ['Español',         ['es-AR', 'Argentina'],
//                      ['es-BO', 'Bolivia'],
//                      ['es-CL', 'Chile'],
//                      ['es-CO', 'Colombia'],
//                      ['es-CR', 'Costa Rica'],
//                      ['es-EC', 'Ecuador'],
//                      ['es-SV', 'El Salvador'],
//                      ['es-ES', 'España'],
//                      ['es-US', 'Estados Unidos'],
//                      ['es-GT', 'Guatemala'],
//                      ['es-HN', 'Honduras'],
//                      ['es-MX', 'México'],
//                      ['es-NI', 'Nicaragua'],
//                      ['es-PA', 'Panamá'],
//                      ['es-PY', 'Paraguay'],
//                      ['es-PE', 'Perú'],
//                      ['es-PR', 'Puerto Rico'],
//                      ['es-DO', 'República Dominicana'],
//                      ['es-UY', 'Uruguay'],
//                      ['es-VE', 'Venezuela']],
//  ['Euskara',         ['eu-ES']],
//  ['Français',        ['fr-FR']],
//  ['Galego',          ['gl-ES']],
//  ['Hrvatski',        ['hr_HR']],
//  ['IsiZulu',         ['zu-ZA']],
//  ['Íslenska',        ['is-IS']],
//  ['Italiano',        ['it-IT', 'Italia'],
//                      ['it-CH', 'Svizzera']],
//  ['Magyar',          ['hu-HU']],
//  ['Nederlands',      ['nl-NL']],
//  ['Norsk bokmål',    ['nb-NO']],
//  ['Polski',          ['pl-PL']],
//  ['Português',       ['pt-BR', 'Brasil'],
//                      ['pt-PT', 'Portugal']],
//  ['Română',          ['ro-RO']],
//  ['Slovenčina',      ['sk-SK']],
//  ['Suomi',           ['fi-FI']],
//  ['Svenska',         ['sv-SE']],
//  ['Türkçe',          ['tr-TR']],
//  ['български',       ['bg-BG']],
//  ['Pусский',         ['ru-RU']],
//  ['Српски',          ['sr-RS']],
//  ['한국어',            ['ko-KR']],
//  ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
//                      ['cmn-Hans-HK', '普通话 (香港)'],
//                      ['cmn-Hant-TW', '中文 (台灣)'],
//                      ['yue-Hant-HK', '粵語 (香港)']],
//  ['日本語',           ['ja-JP']],
//  ['Lingua latīna',   ['la']]];

// for (var i = 0; i < langs.length; i++) {
//   select_language.options[i] = new Option(langs[i][0], i);
// }
// select_language.selectedIndex = 6;
// updateCountry();
// select_dialect.selectedIndex = 6;
// showInfo('info_start');

// function updateCountry() {
//   for (var i = select_dialect.options.length - 1; i >= 0; i--) {
//     select_dialect.remove(i);
//   }
//   var list = langs[select_language.selectedIndex];
//   for (var i = 1; i < list.length; i++) {
//     select_dialect.options.add(new Option(list[i][1], list[i][0]));
//   }
//   select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
// }
var create_email = false;
var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
var temp
if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
    temp = document.getElementById("chatSend").value;
  prime.style.display = 'inline-block';
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() {
    recognizing = true;
    // showInfo('info_speak_now');
    fab_send.src = 'static/img/mic-animate.gif';
  };

  recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
      fab_send.src = 'static/img/mic.gif';
      // showInfo('info_no_speech');
      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {
      fab_send.src = 'static/img/mic.gif';
      // showInfo('info_no_microphone');
      ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
      if (event.timeStamp - start_timestamp < 100) {
          chatSendfinal.innerHTML = 'Microphone Blocked';
      } else {
        chatSendfinal.innerHTML = 'Microphone Denied';
      }
      ignore_onend = true;
    }
  };

  recognition.onend = function() {
    recognizing = false;
    if (ignore_onend) {
      return;
    }
    fab_send.src = 'static/img/mic.gif';
    if (!final_transcript) {
      // showInfo('info_start');
      return;
    }
    // showInfo('');
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      console.log(range)
      range.selectNode(document.getElementById('chatSend'));
      console.log(temp + " " + range.endContainer.childNodes[7].childNodes[0].data);
      range.endContainer.childNodes[7].childNodes[0].data = temp + " " + range.endContainer.childNodes[7].childNodes[0].data
        // range = temp + " " + range;

      console.log(temp + " " + range.endContainer.childNodes[7].childNodes[0].data);
      window.getSelection().addRange(range);
    }
    if (create_email) {
      create_email = false;
      createEmail();

    }
    console.log(temp + " " + chatSend.innerHTML);
    // var x;
    // $("form#voiceForm").find('input[name=data]').attr('value',(temp + " " + chatSend.innerHTML + " "));
    // x=$("form#voiceForm").find('input[name=data]').attr('value');
    // console.log(x);
    //
    //
    //   console.log(x);
    // x = document.getElementById("voiceFormData");
    //   console.log("Before submit");
    //   console.log(x);
    // $("form#voiceForm").submit()

      // $.ajax({
      //     url: "http://localhost:4889/voicebot/",
      //     type: "POST",
      //     contentType: "application/json",
      //     data: JSON.stringify({"voice":chatSend.innerHTML})
      // }).done(function(data){
      //     console.log(data['data']);
      //     window.location.href = "http://127.0.0.1:4889/" + data['data'];
      // })
  };

  recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    final_transcript = capitalize(final_transcript);
    chatSend.innerHTML = linebreak(final_transcript);
    chatSendfinal.innerHTML = linebreak(interim_transcript);
    console.log("onEND");
    // if (final_transcript || interim_transcript) {
    //   // showButtons('inline-block');
    // }
  };
}

function upgrade() {
  prime.style.visibility = 'hidden';
  // showInfo('info_upgrade');
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}

// function createEmail() {
//   var n = final_transcript.indexOf('\n');
//   if (n < 0 || n >= 80) {
//     n = 40 + final_transcript.substring(40).indexOf(' ');
//   }
//   var subject = encodeURI(final_transcript.substring(0, n));
//   var body = encodeURI(final_transcript.substring(n + 1));
//   window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
// }

// function copyButton() {
//   if (recognizing) {
//     recognizing = false;
//     recognition.stop();
//   }
//   copy_button.style.display = 'none';
//   copy_info.style.display = 'inline-block';
//   showInfo('');
// }

// function emailButton() {
//   if (recognizing) {
//     create_email = true;
//     recognizing = false;
//     recognition.stop();
//   } else {
//     createEmail();
//   }
//   email_button.style.display = 'none';
//   email_info.style.display = 'inline-block';
//   showInfo('');
// }

function startButton(event) {
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  recognition.lang =['en-IN', 'India'];//select_dialect.value;
  recognition.start();
  ignore_onend = false;
  console.log("At start");
  temp = document.getElementById("chatSend").value;
  // var temp = $("form#voiceForm").find('input[name=data]').attr('value');
  console.log(temp)
  chatSend.innerHTML = temp+'';
  chatSendfinal.innerHTML = '';
  fab_send.src = 'static/img/mic-slash.gif';
  // showInfo('info_allow');
  // showButtons('none');
  start_timestamp = event.timeStamp;
}

// function showInfo(s) {
//   if (s) {
//     for (var child = info.firstChild; child; child = child.nextSibling) {
//       if (child.style) {
//         child.style.display = child.id == s ? 'inline' : 'none';
//       }
//     }
//     info.style.visibility = 'visible';
//   } else {
//     info.style.visibility = 'hidden';
//   }
// }

// var current_style;
// function showButtons(style) {
//   if (style == current_style) {
//     return;
//   }
//   current_style = style;
//   copy_button.style.display = style;
//   email_button.style.display = style;
//   copy_info.style.display = 'none';
//   email_info.style.display = 'none';
// }
