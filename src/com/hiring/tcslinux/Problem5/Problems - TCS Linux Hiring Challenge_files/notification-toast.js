// This file is dependent on notification_toast.html
typeof $!="undefined"&&$(document).ready(function(){function a(){var a=$(".notification-toast-container"),b=$("#end-test-alert-message");if(b.length>0){var c=b.offset().top+b.height()+10;b.is(":visible")?a.css("top",c):a.css("top","")}}function b(){var a=document.cookie,b=a.split(";"),c=!0;for(var d=0;d<b.length;d++)b[d].split("=")[0].trim()==="show_persistant_notification"&&(c=b[d].split("=")[1]==="true");return c}function c(){return(new Date(2019,0,30,9,0,0,0)).toUTCString()}window.global={},window.global.checkIfIStartWith=function(b,c){return(""+c).indexOf(b)===0},window.global.showAppropriateError=function(b,c){var d=$(".notification-errors"),e=d.find(b);if(c||typeof c!="undefined")e=d.find("#notification-custom-error"),e.text(c);e.length===0&&(e=d.find("#notification-error")),a(),d.find(".error-item").addClass("hidden"),e.removeClass("hidden"),setTimeout(function(){e.addClass("hidden")},1e4)},window.global.checkAndShowServerError=function(a){window.global.checkIfIStartWith(5,a)&&window.global.showAppropriateError("#notification-server-error")},$(document).ajaxError(function(a,b,c,d){var e=b.status;e===403?window.global.showAppropriateError("#notification-auth-error"):window.global.checkIfIStartWith(4,status)&&window.global.showAppropriateError()}),function(){var a=b();if(a){var d=$("#persistant-notification");d.removeClass("hidden")}$("#persistant-notification .close-icon").on("click",function(){$("#persistant-notification").addClass("hidden");var a="expires="+(new Date(c())).toGMTString();document.cookie="show_persistant_notification=false; "+a+"; path=/"})}()});