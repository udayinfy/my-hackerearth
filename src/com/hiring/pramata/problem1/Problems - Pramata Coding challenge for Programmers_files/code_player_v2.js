/**
 * @file: code_player.js
 * This file implements code player.
 */var CodePlayer=function(){if(typeof AceDocument!="undefined")var a=AceDocument;else var a=require("ace/document").Document;return function(b,c){this.video_id=b,this.options={schedule_record_after:3e3},c!==undefined&&c.animate_save!==undefined?this.animate_save=c.animate_save:this.animate_save=null,this.changeset_queue=[],this.record_settimeout_id=null,$.extend(this.options,c),this.enqueue_changeset=function(a,b,c,d){if(!a)return!1;var e={delta:a,source:b,timestamp:d?d:(new Date).getTime()};return c!==undefined&&(e.readonlyRanges=c),this.changeset_queue.push(e),!0},this.is_recording_code_player=!1,this.start_recording=function(a,b){if(g_record_request_failed)return;this.is_recording_code_player=!0,this.stop_recording();var c=this,d=function(){return function(){var a=c.changeset_queue,d=c.video_id,e=a.length;if(e){var f=a.splice(0,e),g=0;record_changesets(f,d,g,!0,b,c.animate_save),c.is_recording_code_player=!1}}}(c);arguments.length==1&&typeof arguments[0]=="function"&&(b=arguments[0],a=undefined),a==undefined&&(a=this.options.schedule_record_after),this.record_settimeout_id=setTimeout(d,a)},this.stop_recording=function(){this.is_recording()&&clearTimeout(this.record_settimeout_id),this.record_settimeout_id=null},this.is_recording=function(){return this.record_settimeout_id?!0:!1},this.finish_recording=function(){var a=this.changeset_queue,b=this.video_id,c=a.length;if(c){var d=a.splice(0,c),e=0;return record_changesets(d,b,e,!0,undefined,this.animate_save),!0}return call_animate_save(".editor-save-code",!0),!1},this.render_video_link=function(a,b,c){if(LAB_FEATURE_MAP.CP){var d="<a id='"+b.id+"' "+"class='"+b.class+"' "+"href='"+b.href+"' "+"target='_blank'>"+"<span class='tool-tip'"+"title='Play your code in CodePlayer'>"+'<i class="fa fa-play"></i>'+c+"</span></a>";$("#"+a).append(d)}};var d=null,e=null,f={changeset_index:0,session_index:0,time:0,code:null,cursor_position:null},g=[],h=1,i=[1,2,5].sort(),k=!1,l=!1,m=h,n=function(a){var b=parseInt(a/60),c=a%60;return c<10&&(c="0"+c),b+":"+c},o=function(a){var b=n(parseInt(a));$(".play-time").text(b)},p=function(a){$(".play-pause-action").removeClass("play-pause-action-active"),$("#"+a).addClass("play-pause-action-active")},q=function(a,b){if(a==b.video_info["length"]){b.pause();var c=b.player_elements.replay_id;p(c)}else if(b.is_video_playing()){var d=b.player_elements.pause_id;p(d)}else{var e=b.player_elements.play_id;p(e)}},r=function(a){return function(b,c){a.is_video_playing()?(a.pause(),l=!0):a.pause()}},s=function(a){return function(b,c){var e=parseInt(c.value);f=a.get_video_state_from_time(e);if(f["code"]!=null)d.setValue(f.code,1);else if(f["changeset_index"]==0&&f["session_index"]==0){var g=a.sessions[f.session_index].initial_code;d.setValue(g,1)}f["cursor_position"]!=null&&d.moveCursorToPosition(f.cursor_position),q(e,a),o(e)}},t=function(a){return function(b,c){a.is_video_playing()&&(l=!1,a.play())}},u=function(a){return function(b,c){var d=parseInt(c.value);q(d,a),o(d)}},v=function(a){return function(b){a.play();var c=a.player_elements.pause_id;p(c)}},w=function(a){return function(b){a.pause();var c=a.player_elements.play_id;p(c)}},x=function(a){return function(b){a.pause(),a.replay();var c=a.player_elements.pause_id;p(c)}},y=function(a){return function(b){m=parseInt($(this).attr("data-speed")),a.is_video_playing()&&(a.pause(),a.play(m)),$(".play-speed").removeClass("play-speed-active"),$(this).addClass("play-speed-active")}},z=function(a){return function(b){a.is_video_playing()&&a.pause()}},A=function(a){return function(a){}};this.init_player=function(a,b){if(!this.is_video_loaded()){var c=load_video(this.video_id);c!==!1&&(!c.status||c.status!="ERROR")&&(this.sessions=c,k=!0)}this.player_elements=a,this.video_info=b;var f=get_lang_mode(b.lang),g=a.editor_id;d=ace.edit(a.editor_id),f&&d.getSession().setMode(new f),d.getSession().setUseWrapMode(!0),d.getSession().setWrapLimitRange(null,null),d.setValue(b.thumbnail_code,-1),d.setTheme("ace/theme/crimson_editor"),d.renderer.setHScrollBarAlwaysVisible(!1),d.setShowPrintMargin(!1),d.setReadOnly(!0),d.setFontSize(14),d.commands.bindKeys({"ctrl-l":null,"ctrl-r":null}),$("#"+g+" .ace_scroller").css("overflow-x","hidden");var h=$("#code-player-container").height(),j=$("#code-player-controlls").height(),l=h-j;$("#"+g).height(l);var m=a.seekbar_id;e=$("#"+m),e.slider({animate:"slow",orientation:"horizontal",range:"min",step:.01,min:0,max:b.length,value:0,start:r(this),slide:s(this),stop:t(this),change:u(this)});var o=2*$(".extra-seekbar").width(),p=$("#seekbar-container").width(),q=p-o;$("#"+m).width(q);var B=a.play_id;$("#"+B).click(v(this));var C=a.pause_id;$("#"+C).click(w(this));var D=a.replay_id;$("#"+D).click(x(this));var E=a.play_speed_id;for(var F=i.length-1;F>=0;F--){var G=i[F];$(".play-speed-container").append('<div id="'+E+"-"+G+'" class="play-speed" data-speed="'+G+'">'+G+"x"+"</div>")}$(".play-speed").click(y(this)),i[0]&&$("#"+E+"-"+i[0]).click();var H=n(b.length);$(".video-length").text("/ "+H),$(window).blur(z(this)),$(window).focus(A(this)),this.play()},this.get_video_state_from_time=function(b){if(b<0)return null;if(b==0)return{session_index:0,changeset_index:0,time:0,code:null,cursor_position:null};var c,d=0,e=null,f=null,g=!1;for(c=0;c<this.sessions.length;c++){var g=!1,h=this.sessions[c];doc=new a(h.initial_code);for(d=0;d<h.changesets.length;d++){var i=h.changesets[d];i.delta&&(delta=fixDelta(i.delta),doc.applyDeltas([delta]),e=doc.getValue(),f=delta.end);if(i.video_time==b){g=!0;break}}if(g)break}var j={session_index:c,changeset_index:d,time:b,code:e,cursor_position:f};return j},this.get_video_state_from_current_time=function(){var a=f.time;return this.get_video_state_from_time(a)},this.play=function(b){if(!this.is_video_loaded()){var c=get_lang_mode("TEXTFILE");d.getSession().setValue(CODE_PLAYER_VIDEO_UNAVAILABLE),d.getSession().setMode(new c),d.setFontSize("18px");return}if(this.is_video_playing()){console.log("Already playing");return}var h=f.session_index,k=f.changeset_index,m=f.time;if(h!=0||k!=0)var k=f.changeset_index+1;var n=this.sessions[h];if(!n){console.log("Video Ended");return}var o=n.changesets;f.code?d.setValue(f.code,-1):d.setValue(n.initial_code,-1),d.focus(),f.cursor_position&&d.moveCursorToPosition(f.cursor_position),i.indexOf(b)>=0?b=b:b=parseInt($(".play-speed-active").attr("data-speed"));var p=function(a){var c=a-m;return c*=1e3,c/=b,c},q=function(b){return function(){if(b.delta){var c=fixDelta(b.delta);d.moveCursorToPosition(c.start);var g=new a(d.getValue());g.applyDeltas([c]),d.setValue(g.getValue(),1),c.action=="remove"?d.moveCursorToPosition(c.start):d.moveCursorToPosition(c.end),f.cursor_position=c.end}f.session_index=b.session_index,f.changeset_index=b.changeset_index,f.time=b.video_time,f.code=d.getValue(),e.slider("value",b.video_time)}},r=function(a,b,c){a.session_index=b,a.changeset_index=c;var d=p(a.video_time),e=q(a),f=setTimeout(e,d);g.push(f)};for(var s=k;s<o.length;s++){var t=o[s];r(t,h,s),l=!0}for(var s=h+1;s<this.sessions.length;s++){var u=this.sessions[s];for(j=0;j<u.changesets.length;j++){var t=u.changesets[j];r(t,s,j)}}},this.pause=function(){for(var a=0;a<g.length;a++)clearTimeout(g[a]);g=[],l=!1;var b=this.player_elements.play_id;p(b)},this.replay=function(){this.pause(),f={session_index:0,changeset_index:0,time:0,code:null,cursor_position:null},e.slider("value",0),this.play()},this.is_video_loaded=function(){return k},this.is_video_playing=function(){return l},this.get_video_state=function(){return f}}}();