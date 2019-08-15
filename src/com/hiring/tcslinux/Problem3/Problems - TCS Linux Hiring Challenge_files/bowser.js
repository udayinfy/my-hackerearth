/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */!function(a,b,c){typeof module!="undefined"&&module.exports?module.exports=c():typeof define=="function"&&define.amd?define(b,c):a[b]=c()}(this,"bowser",function(){function b(b){function c(a){var c=b.match(a);return c&&c.length>1&&c[1]||""}function d(a){var c=b.match(a);return c&&c.length>1&&c[2]||""}var e=c(/(ipod|iphone|ipad)/i).toLowerCase(),f=/like android/i.test(b),g=!f&&/android/i.test(b),h=/nexus\s*[0-6]\s*/i.test(b),i=!h&&/nexus\s*[0-9]+/i.test(b),j=/CrOS/.test(b),k=/silk/i.test(b),l=/sailfish/i.test(b),m=/tizen/i.test(b),n=/(web|hpw)os/i.test(b),o=/windows phone/i.test(b),p=/SamsungBrowser/i.test(b),q=!o&&/windows/i.test(b),r=!e&&!k&&/macintosh/i.test(b),s=!g&&!l&&!m&&!n&&/linux/i.test(b),u=c(/edge\/(\d+(\.\d+)?)/i),v=c(/version\/(\d+(\.\d+)?)/i),w=/tablet/i.test(b),x=!w&&/[^-]mobi/i.test(b),y=/xbox/i.test(b),z;/opera/i.test(b)?z={name:"Opera",opera:a,version:v||c(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr|opios/i.test(b)?z={name:"Opera",opera:a,version:c(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||v}:/SamsungBrowser/i.test(b)?z={name:"Samsung Internet for Android",samsungBrowser:a,version:v||c(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(b)?z={name:"Opera Coast",coast:a,version:v||c(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(b)?z={name:"Yandex Browser",yandexbrowser:a,version:v||c(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(b)?z={name:"UC Browser",ucbrowser:a,version:c(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(b)?z={name:"Maxthon",maxthon:a,version:c(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(b)?z={name:"Epiphany",epiphany:a,version:c(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(b)?z={name:"Puffin",puffin:a,version:c(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(b)?z={name:"Sleipnir",sleipnir:a,version:c(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(b)?z={name:"K-Meleon",kMeleon:a,version:c(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:o?(z={name:"Windows Phone",windowsphone:a},u?(z.msedge=a,z.version=u):(z.msie=a,z.version=c(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(b)?z={name:"Internet Explorer",msie:a,version:c(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:j?z={name:"Chrome",chromeos:a,chromeBook:a,chrome:a,version:c(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(b)?z={name:"Microsoft Edge",msedge:a,version:u}:/vivaldi/i.test(b)?z={name:"Vivaldi",vivaldi:a,version:c(/vivaldi\/(\d+(\.\d+)?)/i)||v}:l?z={name:"Sailfish",sailfish:a,version:c(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(b)?z={name:"SeaMonkey",seamonkey:a,version:c(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(b)?(z={name:"Firefox",firefox:a,version:c(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(b)&&(z.firefoxos=a)):k?z={name:"Amazon Silk",silk:a,version:c(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(b)?z={name:"PhantomJS",phantom:a,version:c(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(b)?z={name:"SlimerJS",slimer:a,version:c(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(b)||/rim\stablet/i.test(b)?z={name:"BlackBerry",blackberry:a,version:v||c(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:n?(z={name:"WebOS",webos:a,version:v||c(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(b)&&(z.touchpad=a)):/bada/i.test(b)?z={name:"Bada",bada:a,version:c(/dolfin\/(\d+(\.\d+)?)/i)}:m?z={name:"Tizen",tizen:a,version:c(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||v}:/qupzilla/i.test(b)?z={name:"QupZilla",qupzilla:a,version:c(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||v}:/chromium/i.test(b)?z={name:"Chromium",chromium:a,version:c(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||v}:/chrome|crios|crmo/i.test(b)?z={name:"Chrome",chrome:a,version:c(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:g?z={name:"Android",version:v}:/safari|applewebkit/i.test(b)?(z={name:"Safari",safari:a},v&&(z.version=v)):e?(z={name:e=="iphone"?"iPhone":e=="ipad"?"iPad":"iPod"},v&&(z.version=v)):/googlebot/i.test(b)?z={name:"Googlebot",googlebot:a,version:c(/googlebot\/(\d+(\.\d+))/i)||v}:z={name:c(/^(.*)\/(.*) /),version:d(/^(.*)\/(.*) /)},!z.msedge&&/(apple)?webkit/i.test(b)?(/(apple)?webkit\/537\.36/i.test(b)?(z.name=z.name||"Blink",z.blink=a):(z.name=z.name||"Webkit",z.webkit=a),!z.version&&v&&(z.version=v)):!z.opera&&/gecko\//i.test(b)&&(z.name=z.name||"Gecko",z.gecko=a,z.version=z.version||c(/gecko\/(\d+(\.\d+)?)/i)),!z.windowsphone&&!z.msedge&&(g||z.silk)?z.android=a:!z.windowsphone&&!z.msedge&&e?(z[e]=a,z.ios=a):r?z.mac=a:y?z.xbox=a:q?z.windows=a:s&&(z.linux=a);var A="";z.windowsphone?A=c(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):e?(A=c(/os (\d+([_\s]\d+)*) like mac os x/i),A=A.replace(/[_\s]/g,".")):g?A=c(/android[ \/-](\d+(\.\d+)*)/i):z.webos?A=c(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):z.blackberry?A=c(/rim\stablet\sos\s(\d+(\.\d+)*)/i):z.bada?A=c(/bada\/(\d+(\.\d+)*)/i):z.tizen&&(A=c(/tizen[\/\s](\d+(\.\d+)*)/i)),A&&(z.osversion=A);var B=A.split(".")[0];if(w||i||e=="ipad"||g&&(B==3||B>=4&&!x)||z.silk)z.tablet=a;else if(x||e=="iphone"||e=="ipod"||g||h||z.blackberry||z.webos||z.bada)z.mobile=a;return z.msedge||z.msie&&z.version>=10||z.yandexbrowser&&z.version>=15||z.vivaldi&&z.version>=1||z.chrome&&z.version>=20||z.samsungBrowser&&z.version>=4||z.firefox&&z.version>=20||z.safari&&z.version>=6||z.opera&&z.version>=10||z.ios&&z.osversion&&z.osversion.split(".")[0]>=6||z.blackberry&&z.version>=10.1||z.chromium&&z.version>=20?z.a=a:z.msie&&z.version<10||z.chrome&&z.version<20||z.firefox&&z.version<20||z.safari&&z.version<6||z.opera&&z.version<10||z.ios&&z.osversion&&z.osversion.split(".")[0]<6||z.chromium&&z.version<20?z.c=a:z.x=a,z}function d(a){return a.split(".").length}function e(a,b){var c=[],d;if(Array.prototype.map)return Array.prototype.map.call(a,b);for(d=0;d<a.length;d++)c.push(b(a[d]));return c}function f(a){var b=Math.max(d(a[0]),d(a[1])),c=e(a,function(a){var c=b-d(a);return a+=(new Array(c+1)).join(".0"),e(a.split("."),function(a){return(new Array(20-a.length)).join("0")+a}).reverse()});while(--b>=0){if(c[0][b]>c[1][b])return 1;if(c[0][b]!==c[1][b])return-1;if(b===0)return 0}}function g(a,d,e){var g=c;typeof d=="string"&&(e=d,d=void 0),d===void 0&&(d=!1),e&&(g=b(e));var h=""+g.version;for(var i in a)if(a.hasOwnProperty(i)&&g[i]){if(typeof a[i]!="string")throw new Error("Browser version in the minVersion map should be a string: "+i+": "+String(a));return f([h,a[i]])<0}return d}function h(a,b,c){return!g(a,b,c)}var a=!0,c=b(typeof navigator!="undefined"?navigator.userAgent||"":"");return c.test=function(a){for(var b=0;b<a.length;++b){var d=a[b];if(typeof d=="string"&&d in c)return!0}return!1},c.isUnsupportedBrowser=g,c.compareVersions=f,c.check=h,c._detect=b,c});