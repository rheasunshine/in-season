if (self.CavalryLogger) { CavalryLogger.start_js(["cu7VW"]); }

__d('XUIDialogCloseButton.react',['fbt','React','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{action:'cancel',label:h._("Close")})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d("ManagedError",[],(function a(b,c,d,e,f,g){function h(i,j){Error.prototype.constructor.call(this,i);this.message=i;this.innerError=j;}h.prototype=new Error();h.prototype.constructor=h;f.exports=h;}),null);
__d('AssertionError',['ManagedError'],(function a(b,c,d,e,f,g){function h(i){c('ManagedError').prototype.constructor.apply(this,arguments);}h.prototype=new (c('ManagedError'))();h.prototype.constructor=h;f.exports=h;}),null);
__d('Assert',['AssertionError','sprintf'],(function a(b,c,d,e,f,g){function h(m,n){if(typeof m!=='boolean'||!m)throw new (c('AssertionError'))(n);return m;}function i(m,n,o){var p;if(n===undefined){p='undefined';}else if(n===null){p='null';}else{var q=Object.prototype.toString.call(n);p=/\s(\w*)/.exec(q)[1].toLowerCase();}h(m.indexOf(p)!==-1,o||c('sprintf')('Expression is of type %s, not %s',p,m));return n;}function j(m,n,o){h(n instanceof m,o||'Expression not instance of type');return n;}function k(m,n){l['is'+m]=n;l['maybe'+m]=function(o,p){if(o!=null)n(o,p);};}var l={isInstanceOf:j,isTrue:h,isTruthy:function m(n,o){return h(!!n,o);},type:i,define:function m(n,o){n=n.substring(0,1).toUpperCase()+n.substring(1).toLowerCase();k(n,function(p,q){h(o(p),q);});}};['Array','Boolean','Date','Function','Null','Number','Object','Regexp','String','Undefined'].forEach(function(m){k(m,i.bind(null,m.toLowerCase()));});f.exports=l;}),null);
__d('VideoScrubberPreviewComponent',['Map'],(function a(b,c,d,e,f,g){function h(i,j){'use strict';if(!j)throw new Error('VideoScrubberPreview Component config null.');this.$VideoScrubberPreviewComponent4=j;this.$VideoScrubberPreviewComponent5=i;this.$VideoScrubberPreviewComponent2=j.hasPreviewThumbnails;this.$VideoScrubberPreviewComponent3=h.getSpriteURIs(j.spriteIndexToURIMap);this.$VideoScrubberPreviewComponent6();}h.prototype.hasPreviewThumbnails=function(){'use strict';return this.$VideoScrubberPreviewComponent2;};h.prototype.$VideoScrubberPreviewComponent6=function(){'use strict';this.$VideoScrubberPreviewComponent5.registerOption('VideoScrubberPreviewComponent','scrubberPreviewSprites',this.getSprites.bind(this));this.$VideoScrubberPreviewComponent5.registerOption('VideoScrubberPreviewComponent','hasPreviewThumbnails',this.hasPreviewThumbnails.bind(this));this.$VideoScrubberPreviewComponent5.registerOption('VideoScrubberPreviewComponent','previewThumbnailInformation',this.getPreviewThumbnailInformation.bind(this));};h.prototype.getSprites=function(){'use strict';return this.$VideoScrubberPreviewComponent3;};h.prototype.getPreviewThumbnailInformation=function(){'use strict';if(this.hasPreviewThumbnails()){this.$VideoScrubberPreviewComponent4.imagesPerColumn=this.$VideoScrubberPreviewComponent4.maxImagesPerSprite/this.$VideoScrubberPreviewComponent4.imagesPerRow;}else this.$VideoScrubberPreviewComponent4.imagesPerColumn=0;return this.$VideoScrubberPreviewComponent4;};h.getSpriteURIs=function(i){'use strict';var j=new (c('Map'))();for(var k in i)if(i.hasOwnProperty(k))j.set(parseInt(k,10),i[k]);return j;};f.exports=h;}),null);
__d('VideoWithClickPlayPause',['VideoPlayerReason','logVideosClickTracking'],(function a(b,c,d,e,f,g){function h(i){'use strict';this.$VideoWithClickPlayPause1=i;this.$VideoWithClickPlayPause2=this.$VideoWithClickPlayPause1.getVideoNode();this.$VideoWithClickPlayPause1.addListener('clickVideo',this.$VideoWithClickPlayPause3.bind(this));if(this.$VideoWithClickPlayPause1.hasSeenClick())this.$VideoWithClickPlayPause3();}h.prototype.$VideoWithClickPlayPause3=function(){'use strict';if(this.$VideoWithClickPlayPause1.isState('playing')){if(this.$VideoWithClickPlayPause1.getOption('VideoWithLiveBroadcast','isLive'))return;this.$VideoWithClickPlayPause1.pause(c('VideoPlayerReason').USER);}else{c('logVideosClickTracking')(this.$VideoWithClickPlayPause2);this.$VideoWithClickPlayPause1.play(c('VideoPlayerReason').USER);}};f.exports=h;}),null);
__d('VideoWithSpacePlayPause',['Event','Run','VideoPlayerReason'],(function a(b,c,d,e,f,g){var h=32;function i(j){'use strict';this.$VideoWithSpacePlayPause1=j;var k=c('Event').listen(window,'keypress',this.$VideoWithSpacePlayPause2.bind(this));c('Run').onLeave(function(){return k.remove();});}i.prototype.$VideoWithSpacePlayPause2=function(j){'use strict';if(this.$VideoWithSpacePlayPause1.isFullscreen()&&j.charCode==h)if(this.$VideoWithSpacePlayPause1.isState('playing')){this.$VideoWithSpacePlayPause1.pause(c('VideoPlayerReason').USER);}else this.$VideoWithSpacePlayPause1.play(c('VideoPlayerReason').USER);};f.exports=i;}),null);
__d('VideoAutoplayControllerBase',['Arbiter','DesktopHscrollUnitEventConstants','Event','VideoPlayerExperiments','VideoPlayerAbortLoadingExperiment','VideoPlayerReason','Visibility','destroyOnUnload','SubscriptionsHandler','throttle','setTimeoutAcrossTransitions','emptyFunction'],(function a(b,c,d,e,f,g){var h=3000;function i(l,m){var n=[];return function(){var o=Date.now();n.unshift(o);var p=0;while(n[++p]+m>o);n=n.slice(0,p);return n.length<=l;};}function j(l,m,n){var o=null;return function(){var p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];if(m()){l.apply(undefined,r);return c('emptyFunction').thatReturnsFalse;}else if(!o)(function(){var t=setTimeout(function(){o=null;l.apply(undefined,r);},n);o=function u(){if(!o)return false;clearTimeout(t);o=null;return true;};})();return o;};}function k(l){'use strict';this.$VideoAutoplayControllerBase3=null;this.$VideoAutoplayControllerBase2=null;this.$VideoAutoplayControllerBase8=[];this.$VideoAutoplayControllerBase1=l;this.$VideoAutoplayControllerBase4=null;this.$VideoAutoplayControllerBase5=new (c('SubscriptionsHandler'))();c('destroyOnUnload')(function(){this.$VideoAutoplayControllerBase8=[];this.$VideoAutoplayControllerBase3=null;if(this.$VideoAutoplayControllerBase4){this.$VideoAutoplayControllerBase4.remove();this.$VideoAutoplayControllerBase4=null;}this.$VideoAutoplayControllerBase5.release();}.bind(this));if(c('VideoPlayerExperiments').autoplayMaxCallsPerWindow)this.$VideoAutoplayControllerBase6=j(function(m){var n=this.$VideoAutoplayControllerBase3;if(n)n.playWithoutUnmute(m);}.bind(this),i(c('VideoPlayerExperiments').autoplayMaxCallsPerWindow,c('VideoPlayerExperiments').autoplayThrottleWindow),c('VideoPlayerExperiments').autoplayThrottleDelay);this.$VideoAutoplayControllerBase7=c('emptyFunction').thatReturnsFalse;}k.prototype.getVideoUnits=function(){'use strict';return this.$VideoAutoplayControllerBase8;};k.prototype.setVideoUnits=function(l){'use strict';this.$VideoAutoplayControllerBase8=l;};k.prototype.addVideoUnit=function(l){'use strict';this.$VideoAutoplayControllerBase8.push(l);};k.prototype.getPlayingVideoUnit=function(){'use strict';return this.$VideoAutoplayControllerBase3;};k.prototype.setPlayingVideoUnit=function(l){'use strict';this.$VideoAutoplayControllerBase3=l;if(this.$VideoAutoplayControllerBase3)this.setupPlayingVideoUnitSubscriptions();};k.prototype.playVideo=function(l,m){'use strict';if(c('VideoPlayerExperiments').disableAutoplayForInactiveTab&&c('Visibility').isHidden()){this.$VideoAutoplayControllerBase2=l;return;}this.setPlayingVideoUnit(l);if(this.$VideoAutoplayControllerBase3){var n=this.$VideoAutoplayControllerBase6;if(n){this.$VideoAutoplayControllerBase7=n.call(this,m);}else this.$VideoAutoplayControllerBase3.playWithoutUnmute(m);}};k.prototype.setupPlayingVideoUnitSubscriptions=function(){'use strict';throw new Error('Should be overridden');};k.prototype.addSubscriberVideoUnit=function(){'use strict';if(!this.getVideoUnits().length){this.$VideoAutoplayControllerBase5.addSubscriptions(c('Event').listen(window,'resize',this.updateAutoplay.bind(this)),c('Event').listen(window,'blur',this.$VideoAutoplayControllerBase9.bind(this)),c('Event').listen(window,'focus',this.$VideoAutoplayControllerBase10.bind(this)),c('Visibility').addListener(c('Visibility').HIDDEN,this.$VideoAutoplayControllerBase9.bind(this)),c('Visibility').addListener(c('Visibility').VISIBLE,this.$VideoAutoplayControllerBase10.bind(this)),c('Arbiter').subscribe(c('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_SHOWN_EVENT,this.updateAutoplay.bind(this)));if(!this.$VideoAutoplayControllerBase11())this.$VideoAutoplayControllerBase12();}};k.prototype.$VideoAutoplayControllerBase9=function(){'use strict';if(!this.$VideoAutoplayControllerBase2){this.$VideoAutoplayControllerBase2=this.getPlayingVideoUnit();this.pausePlayingVideo(c('VideoPlayerReason').PAGE_VISIBILITY);}};k.prototype.$VideoAutoplayControllerBase10=function(){'use strict';if(this.$VideoAutoplayControllerBase2){this.playVideo(this.$VideoAutoplayControllerBase2,c('VideoPlayerReason').PAGE_VISIBILITY);this.$VideoAutoplayControllerBase2=null;}};k.prototype.$VideoAutoplayControllerBase12=function(){'use strict';if(this.$VideoAutoplayControllerBase4)this.$VideoAutoplayControllerBase4.remove();this.$VideoAutoplayControllerBase4=c('Event').listen(window,'scroll',c('throttle')(this.updateAutoplay.bind(this),this.$VideoAutoplayControllerBase1));};k.prototype.$VideoAutoplayControllerBase11=function(){'use strict';return !!this.$VideoAutoplayControllerBase4;};k.prototype.getClosestVideoUnits=function(l){'use strict';return this.$VideoAutoplayControllerBase8.filter(function(m){return m.getDistanceToViewport()>=0;}).sort(function(m,n){return (m.getDistanceToViewport()-n.getDistanceToViewport());}).slice(0,l);};k.prototype.getVisibleUnits=function(){'use strict';var l=[];this.$VideoAutoplayControllerBase8.forEach(function(m){if(m.isVisible()){l.push(m);if(!m.wasVisible){m.wasVisible=true;m.logDisplayed();}}else m.wasVisible=false;});return l;};k.prototype.pausePlayingVideo=function(l){'use strict';var m=this.$VideoAutoplayControllerBase3;if(m){if(!this.$VideoAutoplayControllerBase7())m.pause(l);if(c('VideoPlayerAbortLoadingExperiment').canAbort&&typeof m.getIsInChannel==='function'&&!m.getIsInChannel())c('setTimeoutAcrossTransitions')(function(){if(!m.isState('playing')&&typeof m.abortLoading==='function')m.abortLoading();},h);this.$VideoAutoplayControllerBase3=null;}};k.prototype.updateAutoplay=function(){'use strict';throw new Error('Should be overridden');};f.exports=k;}),null);
__d('Network',['mixInEventEmitter'],(function a(b,c,d,e,f,g){var h=true,i=b.navigator.connection,j={0:'unknown',1:'ethernet',2:'wifi',3:'2g',4:'3g'};function k(){return h;}function l(q){if(q==h)return;h=q;p.emit(q?'online':'offline');}function m(){return i?i.bandwidth:h?Infinity:0;}function n(){return i?i.metered:false;}function o(){var q=i?String(i.type):'0';return j[q]||q;}var p={getBandwidth:m,getType:o,isMetered:n,isOnline:k,setOnline:l};c('mixInEventEmitter')(p,{online:true,offline:true});if(b.addEventListener){b.addEventListener('online',l.bind(null,true));b.addEventListener('offline',l.bind(null,false));}else if(b.attachEvent){b.attachEvent('online',l.bind(null,true));b.attachEvent('offline',l.bind(null,false));}f.exports=p;}),null);
__d("XVideoAutoplayNuxAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video\/autoplay\/nux\/",{});}),null);
__d("XVideoAutoplayNuxDismissAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video\/autoplay\/nux\/dismiss\/",{});}),null);
__d("XVideoAutoplayNuxLogViewAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video\/autoplay\/nux\/log\/view\/",{});}),null);
__d('VideoAutoplayControllerX',['csx','AsyncRequest','DOM','Event','Network','ifRequired','Run','SubscriptionsHandler','VideoAutoplayControllerBase','VideoPlayerExperiments','VideoPlayerPreloadExperiment','VideoPlayerReason','XVideoAutoplayNuxAsyncController','XVideoAutoplayNuxDismissAsyncController','XVideoAutoplayNuxLogViewAsyncController','destroyOnUnload','getViewportDimensions'],(function a(b,c,d,e,f,g,h){var i,j,k=null,l=500,m=false;function n(){return !c('VideoPlayerExperiments').delayAutoplayUntilAfterLoad||m;}i=babelHelpers.inherits(o,c('VideoAutoplayControllerBase'));j=i&&i.prototype;function o(){'use strict';j.constructor.call(this,l);this.$VideoAutoplayControllerX1=new (c('SubscriptionsHandler'))();this.$VideoAutoplayControllerX2=new (c('SubscriptionsHandler'))();this.$VideoAutoplayControllerX3=true;this.$VideoAutoplayControllerX4=true;this.$VideoAutoplayControllerX5=null;this.$VideoAutoplayControllerX6=null;this.$VideoAutoplayControllerX7=false;this.$VideoAutoplayControllerX8=null;this.$VideoAutoplayControllerX9=false;this.$VideoAutoplayControllerX10=false;this.$VideoAutoplayControllerX11=false;var p=c('XVideoAutoplayNuxAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(p).setAllowCrossPageTransition().send();c('destroyOnUnload')(function(){this.$VideoAutoplayControllerX12();if(this===k)k=null;}.bind(this));c('Run').onAfterLoad(function(){m=true;if(c('VideoPlayerExperiments').delayAutoplayUntilAfterLoad)if(k)k.updateAutoplay();});}o.registerVideoUnit=function(p){'use strict';if(k==null)k=new o();k.addSubscriberVideoUnit();k.addVideoUnit(p);if(c('VideoPlayerExperiments').enforceOnlyOneVideoPlayingWithAudio)k.$VideoAutoplayControllerX13(p);k.$VideoAutoplayControllerX14();if(p.isVisible()&&n())k.updateAutoplay();if(k.shouldRestoreAllSubsequentStreamBufferSizes())k.restoreStreamBufferSize();};o.setShouldAutoplay=function(p){'use strict';if(k==null)k=new o();k.$VideoAutoplayControllerX3=p;k.$VideoAutoplayControllerX4=p;k.updateAutoplay();};o.prototype.$VideoAutoplayControllerX12=function(){'use strict';this.$VideoAutoplayControllerX1.release();this.$VideoAutoplayControllerX2.release();};o.setAutoplayNux=function(p,q){'use strict';if(k==null)return;k.$VideoAutoplayControllerX5=p;k.$VideoAutoplayControllerX6=q;k.$VideoAutoplayControllerX7=true;var r=c('DOM').find(q.getContentRoot(),"._5cqr");c('Event').listen(r,'click',function(){k.$VideoAutoplayControllerX15();});var s=c('DOM').scry(q.getContentRoot(),"._36gl")[0];if(s)c('Event').listen(s,'click',function(){k.$VideoAutoplayControllerX15();});};o.prototype.$VideoAutoplayControllerX15=function(){'use strict';this.$VideoAutoplayControllerX6.hide();this.$VideoAutoplayControllerX7=false;var p=c('XVideoAutoplayNuxDismissAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(p).setAllowCrossPageTransition().send();};o.prototype.setupPlayingVideoUnitSubscriptions=function(){'use strict';if(this.getPlayingVideoUnit().addListener){this.$VideoAutoplayControllerX1.release();this.$VideoAutoplayControllerX1.engage();if(!this.getPlayingVideoUnit().isLooping())this.$VideoAutoplayControllerX1.addSubscriptions(this.getPlayingVideoUnit().addListener('finishPlayback',function(){this.setPlayingVideoUnit(null);}.bind(this)));this.$VideoAutoplayControllerX1.addSubscriptions(this.getPlayingVideoUnit().addListener('turnOffAutoplay',function(){this.setPlayingVideoUnit(null);}.bind(this)),this.getPlayingVideoUnit().addListener('pausePlayback',function(){this.$VideoAutoplayControllerX14();}.bind(this)),this.getPlayingVideoUnit().addListener('finishPlayback',function(){this.$VideoAutoplayControllerX14();}.bind(this)),c('Network').addListener('online',function(){this.$VideoAutoplayControllerX14();}.bind(this)),c('Network').addListener('offline',function(){this.$VideoAutoplayControllerX14();}.bind(this)));}};o.prototype.$VideoAutoplayControllerX14=function(){'use strict';if(c('VideoPlayerExperiments').webVideosBlockAutoplayWhenOffline)if(c('Network').isOnline()){this.$VideoAutoplayControllerX3=this.$VideoAutoplayControllerX4;}else{this.$VideoAutoplayControllerX4=this.$VideoAutoplayControllerX3;this.$VideoAutoplayControllerX3=false;return;}var p=this.getVideoUnits();for(var q=0;q<p.length;q++){var r=p[q].getVideoPlayerController();if(r!==null){if(r.getDataInsertionPosition()==='0'){this.$VideoAutoplayControllerX9=true;if(this.$VideoAutoplayControllerX10===false){r.restoreStreamBufferSize();r.once('beginPlayback',function(){this.$VideoAutoplayControllerX11=true;this.restoreStreamBufferSize();}.bind(this));this.$VideoAutoplayControllerX10=true;}}r.updateAutoplayRestrained();}}if(!this.$VideoAutoplayControllerX9)this.restoreStreamBufferSize();};o.prototype.shouldRestoreAllSubsequentStreamBufferSizes=function(){'use strict';if(!this.$VideoAutoplayControllerX9)return true;return this.$VideoAutoplayControllerX11;};o.prototype.restoreStreamBufferSize=function(){'use strict';var p=this.getVideoUnits();for(var q=0;q<p.length;q++){var r=p[q].getVideoPlayerController();if(r!==null)r.restoreStreamBufferSize();}};o.prototype.$VideoAutoplayControllerX13=function(p){'use strict';if(!p.addListener)return;var q=function(){var r=p.getVideoPlayerController();if(!r.isMuted()&&r.isState('playing')){if(this.$VideoAutoplayControllerX8&&this.$VideoAutoplayControllerX8!==p){var s=this.$VideoAutoplayControllerX8.getVideoPlayerController(),t=s.getOption('VideoWithLiveBroadcast','isLive');if(t){s.mute();}else s.pause(c('VideoPlayerReason').USER);}this.$VideoAutoplayControllerX8=p;}}.bind(this);this.$VideoAutoplayControllerX2.addSubscriptions(p.addListener('beginPlayback',q),p.addListener('changeVolume',q),p.addListener('unmuteVideo',q));};o.prototype.showAutoplayNUX=function(p){'use strict';if(this.$VideoAutoplayControllerX6&&!this.$VideoAutoplayControllerX6.isShown()){var q=p.getVideoPlayerController().getRootNode();c('DOM').prependContent(q,this.$VideoAutoplayControllerX5);this.$VideoAutoplayControllerX6.show();var r=c('XVideoAutoplayNuxLogViewAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(r).setAllowCrossPageTransition().send();}this.$VideoAutoplayControllerX7=false;};o.getChannelVideos=function(){'use strict';if(k)return k.getVideoUnits().filter(function(p){return p.getIsInChannel();});return null;};o.prototype.updateAutoplay=function(){'use strict';if(!this.$VideoAutoplayControllerX3){this.pausePlayingVideo(c('VideoPlayerReason').AUTOPLAY);return;}var p=this.getVisibleUnits();this.getClosestVideoUnits(c('VideoPlayerPreloadExperiment').preloadVideosCount).forEach(function(t){return t.preload();});var q=p.length,r=null;if(q==1){r=p[0];r=r.isAutoplayable()?r:null;}else if(q>1){var s=c('getViewportDimensions')().height/2;p.forEach(function(t){if(!t.isAutoplayable())return;var u=t.getDOMPosition(),v=u.y+u.height/2,w=Math.abs(v-s);t.playPriority=w;if(!r||t.playPriority<r.playPriority)r=t;});}if(this.getPlayingVideoUnit()){if(r!=this.getPlayingVideoUnit()){this.pausePlayingVideo(c('VideoPlayerReason').AUTOPLAY);this.playVideo(r,c('VideoPlayerReason').AUTOPLAY);if(this.$VideoAutoplayControllerX7)this.showAutoplayNUX(r);}}else if(r){this.playVideo(r,c('VideoPlayerReason').AUTOPLAY);if(this.$VideoAutoplayControllerX7)this.showAutoplayNUX(r);}};f.exports=o;}),null);
__d('VideoAutoplayPlayerBase',['EventEmitter'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('EventEmitter'));i=h&&h.prototype;function j(){var k,l;'use strict';for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.wasVisible=false,l;}j.prototype.isVisible=function(){'use strict';throw new Error('Should be overridden');};j.prototype.getDistanceToViewport=function(){'use strict';throw new Error('Should be overridden');};j.prototype.getVideoPlayerController=function(){'use strict';return null;};j.prototype.logDisplayed=function(){'use strict';throw new Error('Should be overridden');};j.prototype.playWithoutUnmute=function(k){'use strict';throw new Error('Should be overridden');};j.prototype.pause=function(k){'use strict';throw new Error('Should be overridden');};j.prototype.isAutoplayable=function(){'use strict';throw new Error('Should be overridden');};j.prototype.getDOMPosition=function(){'use strict';throw new Error('Should be overridden');};j.prototype.isLooping=function(){'use strict';throw new Error('Should be overridden');};j.prototype.isState=function(k){'use strict';throw new Error('Should be overridden');};f.exports=j;}),null);
__d('VideoWithLoopingPlayback',['setImmediate','VideoPlayerReason'],(function a(b,c,d,e,f,g){function h(i){var j=arguments.length<=1||arguments[1]===undefined?-1:arguments[1];'use strict';this.$VideoWithLoopingPlayback5=function(){var k=this.$VideoWithLoopingPlayback1.getOption('FeedAutoplay','isVisibleForAutoplay'),l=this.$VideoWithLoopingPlayback1.getOption('WatchAndScroll','isActive'),m=this.$VideoWithLoopingPlayback1.getIsInChannel();if((k||k===undefined)&&!l&&!m&&(!this.$VideoWithLoopingPlayback4||this.$VideoWithLoopingPlayback3<this.$VideoWithLoopingPlayback4)){c('setImmediate')(function(){return this.$VideoWithLoopingPlayback1.play(c('VideoPlayerReason').LOOP);}.bind(this));this.$VideoWithLoopingPlayback3++;if(this.$VideoWithLoopingPlayback4&&this.$VideoWithLoopingPlayback3===this.$VideoWithLoopingPlayback4-1)this.$VideoWithLoopingPlayback1.setOption('Looping','isLooping',false);}}.bind(this);this.$VideoWithLoopingPlayback1=i;this.$VideoWithLoopingPlayback2=true;this.$VideoWithLoopingPlayback3=1;this.$VideoWithLoopingPlayback4=j>-1?j:null;this.$VideoWithLoopingPlayback1.addListener('finishPlayback',this.$VideoWithLoopingPlayback5);this.$VideoWithLoopingPlayback1.registerOption('Looping','isLooping',function(){return this.$VideoWithLoopingPlayback2;}.bind(this),function(k){return this.$VideoWithLoopingPlayback6(k);}.bind(this));}h.prototype.isLooping=function(){'use strict';return this.$VideoWithLoopingPlayback2;};h.prototype.getLoopCount=function(){'use strict';return this.$VideoWithLoopingPlayback3;};h.prototype.getMaxLoopCount=function(){'use strict';return this.$VideoWithLoopingPlayback4;};h.prototype.setMaxLoopCount=function(i){'use strict';this.$VideoWithLoopingPlayback4=i>-1?i:null;};h.prototype.$VideoWithLoopingPlayback6=function(i){'use strict';this.$VideoWithLoopingPlayback2=i;};f.exports=h;}),null);
__d('mergeDeepInto',['invariant','mergeHelpers'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('mergeHelpers').ArrayStrategies,j=c('mergeHelpers').checkArrayStrategy,k=c('mergeHelpers').checkMergeArrayArgs,l=c('mergeHelpers').checkMergeLevel,m=c('mergeHelpers').checkMergeObjectArgs,n=c('mergeHelpers').isTerminal,o=c('mergeHelpers').normalizeMergeArg,p=function t(u,v,w,x){m(u,v);l(x);var y=v?Object.keys(v):[];for(var z=0;z<y.length;z++){var aa=y[z];r(u,v,aa,w,x);}},q=function t(u,v,w,x){k(u,v);l(x);var y=Math.max(u.length,v.length);for(var z=0;z<y;z++)r(u,v,z,w,x);},r=function t(u,v,w,x,y){var z=v[w],aa=v.hasOwnProperty(w),ba=aa&&n(z),ca=aa&&Array.isArray(z),da=aa&&!ca&&!ca,ea=u[w],fa=u.hasOwnProperty(w),ga=fa&&n(ea),ha=fa&&Array.isArray(ea),ia=fa&&!ha&&!ha;if(ga){if(ba){u[w]=z;}else if(ca){u[w]=[];q(u[w],z,x,y+1);}else if(da){u[w]={};p(u[w],z,x,y+1);}else if(!aa)u[w]=ea;}else if(ha){if(ba){u[w]=z;}else if(ca){i[x]||h(0);if(x===i.Clobber)ea.length=0;q(ea,z,x,y+1);}else if(da){u[w]={};p(u[w],z,x,y+1);}else !aa;}else if(ia){if(ba){u[w]=z;}else if(ca){u[w]=[];q(u[w],z,x,y+1);}else if(da){p(ea,z,x,y+1);}else !aa;}else if(!fa)if(ba){u[w]=z;}else if(ca){u[w]=[];q(u[w],z,x,y+1);}else if(da){u[w]={};p(u[w],z,x,y+1);}else !aa;},s=function t(u,v,w){var x=o(v);j(w);p(u,x,w,0);};f.exports=s;}),null);
__d('mergeDeep',['mergeHelpers','mergeDeepInto'],(function a(b,c,d,e,f,g){'use strict';var h=c('mergeHelpers').checkArrayStrategy,i=c('mergeHelpers').checkMergeObjectArgs,j=c('mergeHelpers').normalizeMergeArg,k=function l(m,n,o){var p=j(m),q=j(n);i(p,q);h(o);var r={};c('mergeDeepInto')(r,p,o);c('mergeDeepInto')(r,q,o);return r;};f.exports=k;}),null);
__d('ReactTransitionEvents',['ExecutionEnvironment','getVendorPrefixedEventName'],(function a(b,c,d,e,f,g){'use strict';var h=[];function i(){var m=c('getVendorPrefixedEventName')('animationend'),n=c('getVendorPrefixedEventName')('transitionend');if(m)h.push(m);if(n)h.push(n);}if(c('ExecutionEnvironment').canUseDOM)i();function j(m,n,o){m.addEventListener(n,o,false);}function k(m,n,o){m.removeEventListener(n,o,false);}var l={addEndEventListener:function m(n,o){if(h.length===0){window.setTimeout(o,0);return;}h.forEach(function(p){j(n,p,o);});},removeEndEventListener:function m(n,o){if(h.length===0)return;h.forEach(function(p){k(n,p,o);});}};f.exports=l;}),null);