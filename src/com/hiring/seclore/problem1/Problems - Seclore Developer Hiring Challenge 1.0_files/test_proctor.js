// Fri Jan 02 1970 05:30:00 GMT+0530 (IST)
// Initialize to epoch time
function openExternalLinksInModal(){$.each($(".problem-description a"),function(a,b){$(b).addClass("show-modal load-external-url"),$(b).attr("target","external-link-modal")}),$.each($(".problem-statement a"),function(a,b){$(b).addClass("show-modal load-external-url"),$(b).attr("target","external-link-modal")})}function checkForLostFocus(){window.onblur=function(a){_isWindowBlurEvent=!0},window.onfocus=function(a){_isWindowBlurEvent=!1},window.onblur=function(a){if(!_isWindowBlurEvent&&!_safeTarget&&!event_admin_preview){var b=new Date($.now()),c=Math.round((b-last_called_timestamp)/1e3);c>5&&(logTabActivity("blurred").always(function(){hasBeenWarned()}),last_called_timestamp=b)}},window.addEventListener("beforeunload",function(){_isWindowBlurEvent=!0})}function logTabActivity(a){var b=$("#activity-log-url").text(),c=$.ajax({url:b,type:"POST",data:{action:a}});return c}function disableTabSwitch(){setTimeout(function(){checkForLostFocus()},3e3)}function makeIframesSafeTargets(){var a=$("iframe");a.length>0&&a.iframeTracker({blurCallback:function(){_safeTarget=!0,debug&&console.log("Third party to track iframe click is ON")},overCallback:function(){_safeTarget=!0,debug&&console.log("Third party to track iframe mouse over")},outCallback:function(){_safeTarget=!1,debug&&console.log("Third party to track iframe mouse out")}})}function hasBeenWarned(){$this=$("#get-user-logout-data");var a=$this.attr("ajax"),b=$this.attr("event_id"),c=$this.attr("user_id");return $.ajax({url:a,data:{event_id:b,user_id:c},type:"POST",dataType:"json",success:function(a){a["status"]==AJAX_OK&&(a.perform_logout?a.is_superuser?alert(PROCTOR_ALERT_1):(logReasonForLogout(),$("#end-test-click").get(0).click()):alert(PROCTOR_ALERT_2))},error:function(a,b){window.global.checkAndShowServerError(a.status)}}),!1}function logReasonForLogout(){$this=$("#logout-reason-url");var a=$this.attr("ajax"),b=$this.attr("event_id"),c=$this.attr("user_id"),d=$(location).attr("href");$.ajax({url:a,data:{page_url:d,event_id:b,user_id:c},type:"POST",dataType:"json"})}function disableCopyPaste(){$("body").addClass("unselectable"),$("body").on("select copy paste cut",function(a){a.preventDefault()})}var last_called_timestamp=new Date(864e5),debug=!1;$(".load-external-url").live("click",function(){var a=$(this).attr("href");$("#external-link-iframe").attr("src",a)});var _isWindowBlurEvent=!1,_safeTarget=!1,safeTargetClasses=[""];setInterval(makeIframesSafeTargets,1e3),$("body").live("click",function(a){makeIframesSafeTargets(),safeTargetClasses.indexOf($(a.srcElement).attr("class"))>-1?(_safeTarget=!0,debug&&console.log("Safe target click detected")):(_safeTarget=!1,debug&&console.log("Clicked target is out of current window"))});