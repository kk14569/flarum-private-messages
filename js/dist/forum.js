module.exports=function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}([function(e,t){e.exports=flarum.core.compat["forum/app"]},function(e,t){e.exports=flarum.core.compat["common/Model"]},function(e,t){e.exports=flarum.core.compat["common/helpers/username"]},function(e,t){e.exports=flarum.core.compat["common/utils/Stream"]},function(e,t){e.exports=flarum.core.compat["common/helpers/avatar"]},function(e,t){e.exports=flarum.core.compat["common/Component"]},function(e,t){e.exports=flarum.core.compat["common/utils/mixin"]},function(e,t){e.exports=flarum.core.compat["common/components/Button"]},function(e,t){e.exports=flarum.core.compat["common/utils/withAttr"]},function(e,t){e.exports=flarum.core.compat["common/extend"]},,function(e,t){e.exports=flarum.core.compat["common/components/Page"]},function(e,t){e.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["forum/components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["common/models/User"]},function(e,t){e.exports=flarum.core.compat["common/utils/classList"]},function(e,t){e.exports=flarum.core.compat["common/helpers/humanTime"]},function(e,t){e.exports=flarum.core.compat["common/helpers/icon"]},function(e,t){e.exports=flarum.core.compat["common/helpers/userOnline"]},function(e,t){e.exports=flarum.core.compat["common/components/Modal"]},function(e,t){e.exports=flarum.core.compat["forum/components/Search"]},function(e,t){e.exports=flarum.core.compat["common/helpers/highlight"]},function(e,t){e.exports=flarum.core.compat["common/utils/ItemList"]},function(e,t){e.exports=flarum.core.compat["common/utils/extractText"]},function(e,t){e.exports=flarum.core.compat["common/utils/extract"]},function(e,t){e.exports=flarum.core.compat["forum/components/HeaderSecondary"]},function(e,t){e.exports=flarum.core.compat["forum/components/NotificationsDropdown"]},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),o=n(9),i=n(13),r=n.n(i);function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,c(e,t)}var l=n(1),p=n.n(l),h=n(6),d=n.n(h),f=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.apiEndpoint=function(){return"/whisper/messages"+(this.exists?"/"+this.data.id:"")},t}(d()(p.a,{message:p.a.attribute("message"),user:p.a.hasOne("user"),isHidden:p.a.attribute("isHidden"),createdAt:p.a.attribute("createdAt",p.a.transformDate),conversation:p.a.hasOne("conversation"),number:p.a.hasOne("number")})),v=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.apiEndpoint=function(){return"/whisper/conversations"+(this.exists?"/"+this.data.id:"")},t}(d()(p.a,{messages:p.a.hasMany("messages"),recipients:p.a.hasMany("recipients"),totalMessages:p.a.attribute("totalMessages"),notNew:p.a.attribute("notNew"),createdAt:p.a.attribute("createdAt",p.a.transformDate),updatedAt:p.a.attribute("updatedAt",p.a.transformDate)})),g=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t}(d()(p.a,{conversation:p.a.hasOne("conversation"),user:p.a.hasOne("user"),userId:p.a.attribute("userId"),conversationId:p.a.attribute("conversationId"),lastRead:p.a.attribute("lastRead")})),y=n(14),w=n.n(y),b=n(11),x=n.n(b),N=n(7),M=n.n(N),I=n(5),T=n.n(I),C=n(4),R=n.n(C),k=n(2),A=n.n(k),O=n(16),_=n.n(O),P=n(12),S=n.n(P),D=function(e){function t(){return e.apply(this,arguments)||this}u(t,e),t.initAttrs=function(e){e.className=e.className||"",e.content=e.content||"",e.preview=e.preview||!1};var n=t.prototype;return n.view=function(){return m("div",{className:this.attrs.className})},n.oncreate=function(t){var n=this;if(e.prototype.oncreate.call(this,t),this.attrs.preview){var s,a=function(){var e=n.attrs.content;s!==e&&(s=e,s9e.TextFormatter.preview(e||"",t.dom))};a(),this.updateInterval=setInterval(a,50)}else s9e.TextFormatter.preview(this.attrs.content,t.dom)},n.onremove=function(){clearInterval(this.updateInterval)},t}(T.a),L=n(3),B=n.n(L),j=n(8),q=n.n(j),H=n(17),U=n.n(H),F=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.oninit=function(e){var t=this;this.loading=!0,this.vnode=e,this.mobile=e.attrs.mobile,this.idParam=m.route.param("id"),this.firstLoad=!0,this.typingTimeout=!0,this.sendTimeout=!0;this.interval3=function(){if(0===t.timer)return t.sendTimeout=!0,void m.redraw();t.timer--,t.timer>=0&&setTimeout((function(){t.interval3()}),1e3)},function e(){t.typingTimeout=!0,setTimeout((function(){e()}),5e3)}(),function e(){t.typingTime<new Date(Date.now()-6e3)&&(t.typing=!1,m.redraw()),setTimeout((function(){e()}),6e3)}(),this.typing=!1,this.conversation=this.conversation?this.conversation:e.attrs.conversation,this.initPost()},n.initPost=function(){return this.newMessageCount=0,this.load(),this.messageContent=B()(""),new Promise((function(){setTimeout((function(){$(".chat-history").animate({scrollTop:$(".chat-history").prop("scrollHeight")},1e3)}),500)}))},n.onremove=function(){a.a.pusher&&a.a.pusher.then((function(e){var t=e.channels;t.user.unbind("typing"),t.user.unbind("newMessage")}))},n.onupdate=function(){var e=this;$(".chat-history").scroll((function(){if(!e.notNew&&0===$(".chat-history").scrollTop()){var t=$(".message-content:first");e.getMessages(a.a.cache.messages[e.conversation.id()].length),e.notNew||$(".chat-history").scrollTop(t.offset().top)}}))},n.onbeforeupdate=function(){var e=this;$(".UserListItem").off("click").on("click",(function(t){e.conversation=a.a.cache.conversations[$(t.currentTarget).attr("id")],e.index=$(t.currentTarget).attr("id"),e.notNew=!1,e.cipher=null,e.oninit(e.vnode),m.redraw()})),$("#MessageTextArea").off().on("keydown",(function(t){13===t.keyCode&&a.a.forum.attribute("whisperReturnKey")&&($("#MessageTextArea").prop("disabled",!0),e.sendMessage())}))},n.oncreate=function(){var e=this;a.a.pusher&&a.a.pusher.then((function(t){var n=t.channels;n.user.bind("newMessage",(function(t){if(parseInt(t.conversationId)===parseInt(e.conversation.id())&&$(".MessagesDropdown").children(".Dropdown-menu").is(":visible")){var n={id:B()(t.id),message:B()(t.message),user:B()(e.user),createdAt:B()(t.createdAt)};e.decryptMessages([n]),e.newMessageCount++,e.typing=!1,m.redraw(),$(".chat-history").animate({scrollTop:$(".chat-history").prop("scrollHeight")},1e3)}})),n.user.bind("typing",(function(t){if(parseInt(t.conversationId)===parseInt(e.conversation.id())){var n=$(".chat-history"),s=!1;n.scrollTop()+n.innerHeight()>=n[0].scrollHeight-50&&(s=!0),e.typing=!0,e.typingTime=new Date,m.redraw(),s&&n.animate({scrollTop:$(".chat-history").prop("scrollHeight")},400)}})),n.user.bind("readMessage",(function(t){parseInt(t.conversationId)===parseInt(e.conversation.id())&&(e.recipient.lastRead=m.prop(t.number),m.redraw())}))}))},n.view=function(){var e=this;return this.messages=a.a.cache.messages?a.a.cache.messages[this.conversation.id()]:[],m("div",{style:this.idParam&&this.mobile?"width: 100%":"",className:"chat"},m("div",{className:"chat-header clearfix"},R()(this.user),m("div",{className:"chat-about"},m("div",{className:"chat-with"},a.a.translator.trans("kyrne-whisper.forum.chat.chat_with",{username:A()(this.user)})),m("div",{className:"chat-num-messages"},a.a.translator.trans("kyrne-whisper.forum.chat.messages_"+(parseInt(this.conversation.totalMessages())>1?"multiple":"single"),{count:this.conversation.totalMessages()+this.newMessageCount})))),this.messages&&this.messages.length>0&&!this.loading?[m("div",{className:"chat-history"},m("ul",null,this.notNew?m("li",{className:"startConvo"},a.a.translator.trans("kyrne-whisper.forum.chat.start_of_conversation")):"",this.messages?this.messages.filter((function(e,t,n){return t===n.findIndex((function(t){return t.message()===e.message()}))})).sort((function(e,t){return e.createdAt()-t.createdAt()})).map((function(t,n){var s=parseInt(t.user().id())===parseInt(a.a.session.user.id());return m("li",{className:"clearfix message-content"},m("div",{className:"message-data "+(s?"align-right":"")},m("div",{className:"avatar-inline "+(s?"me":"other")},R()(s?a.a.session.user:t.user())),m("span",{className:"message-data-name"},A()(s?a.a.session.user:t.user())),m("span",{className:"message-data-time"},_()(t.createdAt()))),m(D,{content:t.message(),className:"message "+(s?"my-message float-right":"other-message")}),s&&parseInt(e.recipient.lastRead())>=parseInt(t.data.attributes.number)?m("span",{className:"message-read"},U()("fas fa-check")):"")})):"",this.messageContent()?m("li",null,m(D,{content:this.messageContent(),className:"message my-message float-right message-preview",preview:!0})):"",this.typing?m("li",null,m("div",{className:"tiblock"},m("div",{className:"tidot"}),m("div",{className:"tidot"}),m("div",{className:"tidot"}))):""))]:m(S.a,{display:"block",size:"medium"}),m("form",{className:"chat-message clearfix"},m("textarea",{id:"MessageTextArea",value:this.messageContent(),oninput:q()("value",this.typingPush.bind(this)),placeholder:a.a.translator.trans("kyrne-whisper.forum.chat.text_placeholder"),rows:"3"}),M.a.component({onclick:this.sendMessage.bind(this),className:"Button Button--primary",disabled:!this.messageContent()||!this.sendTimeout},a.a.translator.trans("kyrne-whisper.forum.chat.send"))))},n.typingPush=function(e){var t=this;this.messageContent(e),m.redraw(),this.typingTimeout&&a.a.request({method:"POST",url:a.a.forum.attribute("apiUrl")+"/whisper/messages/typing",body:{conversationId:this.conversation.id(),userId:this.user.id()}}).then((function(){t.typingTimeout=!1}))},n.sendMessage=function(){var e=this;if(this.sendTimeout){if(""===this.messageContent()||!this.messageContent().replace(/\s/g,"").length)return;this.sendTimeout=!1,this.timer=1,this.interval3(),this.newMessageCount++,a.a.store.createRecord("messages").save({messageContents:this.messageContent(),conversationId:this.conversation.id()}).then((function(t){a.a.cache.messages[e.conversation.id()].push(t),m.redraw(),e.messageContent(""),$(".chat-history").animate({scrollTop:$(".chat-history").prop("scrollHeight")},500),a.a.request({method:"POST",url:a.a.forum.attribute("apiUrl")+"/whisper/messages/read",body:{conversationId:e.conversation.id(),messageId:t.id()}})}))}},n.getMessages=function(e){var t=this;void 0===e&&(e=0),this.notNew||a.a.store.find("whisper/messages",this.conversation.id(),{offset:e}).then((function(e){var n;if(delete e.payload,t.firstLoad){var s=t.meRecipient.lastRead();a.a.request({method:"POST",url:a.a.forum.attribute("apiUrl")+"/whisper/messages/read",body:{conversationId:t.conversation.id(),messageId:e[0].id()}}).then((function(e){var n=e.data.attributes.lastRead,o=0,i=a.a.session.user.unreadMessages();0!==i&&(o=i-(n-s)),o>=0&&(a.a.session.user.pushAttributes({unreadMessages:o}),m.redraw()),t.firstLoad=!1}))}(n=a.a.cache.messages[t.conversation.id()]).push.apply(n,e),e.length<20&&(t.notNew=!0)})).then((function(){t.loading=!1,m.redraw()}))},n.load=function(){var e=this;this.loading=!0,m.redraw(),a.a.cache.messages||(a.a.cache.messages=[]),this.conversation.recipients().map((function(t){parseInt(t.user().id())!==parseInt(a.a.session.user.id())?(e.user=t.user(),e.recipient=t):e.meRecipient=t})),a.a.cache.messages[this.conversation.id()]||(a.a.cache.messages[this.conversation.id()]=[]),this.getMessages()},t}(T.a),z=n(18),E=n.n(z),K=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.oninit=function(t){var n=this;this.conversation=t.attrs.conversation,this.index=t.attrs.i,this.active=t.attrs.active,this.loading=!0,this.conversation.recipients().map((function(e){parseInt(e.user().id())!==parseInt(a.a.session.user.id())&&(n.user=e.user(),n.loading=!1,m.redraw())}));!function e(){n.typingTime<new Date(Date.now()-6e3)&&(n.typing=!1,m.redraw()),setTimeout((function(){e()}),6e3)}(),e.prototype.oncreate.call(this,t)},n.onremove=function(t){a.a.pusher&&a.a.pusher.then((function(e){e.channels.user.unbind("typing")})),e.prototype.onremove.call(this,t)},n.oncreate=function(t){var n=this;a.a.pusher&&a.a.pusher.then((function(e){e.channels.user.bind("typing",(function(e){parseInt(e.conversationId)===parseInt(n.conversation.id())&&(n.typing=!0,n.typingTime=new Date,m.redraw())}))})),e.prototype.oncreate.call(this,t)},n.view=function(e){var t=this;if(this.loading||!this.user)return null;return m("li",{id:this.index,className:this.active?"UserListItem active":"UserListItem",onclick:function(e){t.attrs.onclick(e),t.active=t.conversation.id()===a.a.cache.conversations[$(e.currentTarget).attr("id")].id()}},m("div",{className:"UserListItem-content"},R()(this.user),m("div",{className:"info"},A()(this.user),E()(this.user)),!!this.typing&&m("div",{className:"tiblock"},m("div",{className:"tidot"}))))},t}(T.a),G=n(19),J=n.n(G),Q=n(20),V=n.n(Q),W=n(21),X=n.n(W),Y=function(){function e(){}var t=e.prototype;return t.view=function(e){var t=this;if(!(e.length<3||this.loading)){if(app.cache.conversationResults||(app.cache.conversationResults=[]),this.query=e,app.cache.conversationResults[this.query])return[m("li",{className:"Dropdown-header"},app.translator.trans("core.forum.search.users_heading")),app.cache.conversationResults[this.query].map((function(e){var n=A()(e);return n=X()(n.text,t.query),m("li",{className:"SearchResult","data-index":e.id()},m("a",{"data-index":"users:"+e.id()},R()(e),n))}))];this.loading=!0,app.cache.conversationResults[this.query]=[],app.store.find("users",{filter:{q:this.query},page:{limit:5}}).then(this.pushResults.bind(this))}},t.pushResults=function(e){var t=this;e.payload.data.map((function(e){var n=app.store.getById("users",e.id);parseInt(n.id())!==parseInt(app.session.user.id())&&app.cache.conversationResults[t.query].push(n)})),this.loading=!1,m.redraw()},e}(),Z=n(22),ee=n.n(Z),te=n(15),ne=n.n(te),se=n(23),ae=n.n(se),oe=n(24),ie=n.n(oe);var re=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.oninit=function(t){this.value=B()(),e.prototype.oninit.call(this,t)},n.view=function(){var e=this;void 0===this.value()&&this.value("");var t=this.value()&&this.value().length>=3;return this.sources||(this.sources=this.sourceItems().toArray()),m("div",{className:"AddRecipientModal-body"},null===a.a.cache.conversationsRecipient?m("div",{className:"AddRecipientModal-form-input"},m("input",{className:"RecipientsInput FormControl "+ne()({open:!!this.value(),focused:!!this.value(),active:!!this.value(),loading:!!this.loadingSources}),config:function(e){e.focus()},type:"search",placeholder:ae()(a.a.translator.trans("kyrne-whisper.forum.modal.search_recipients")),value:this.value(),oninput:q()("value",this.value),onfocus:function(){return e.hasFocus=!0},onblur:function(){return e.hasFocus=!1},onkeyup:function(){clearTimeout(e.typingTimer),e.doSearch=!1,e.typingTimer=setTimeout((function(){e.doSearch=!0,m.redraw()}),900)},onkeydown:function(){clearTimeout(e.typingTimer)}}),m("ul",{className:ne()("Dropdown-menu Search-results fade",{in:!!t}),onclick:function(){var t=e.$(".SearchResult.active");e.addRecipient(t.data("index")),e.$(".RecipientsInput").trigger("focus")}},this.doSearch?this.sources.map((function(t){return t.view(e.value())})):S.a.component({size:"tiny",className:"Button Button--icon Button--link"}),m("li",null,m("span",null,a.a.translator.trans("kyrne-whisper.forum.modal.more_users"))))):m("div",{className:"RecipientsInput-selected RecipientsLabel"},function(e,t){void 0===t&&(t={}),t.style=t.style||{},t.className="RecipientLabel "+(t.className||"");var n=ie()(t,"link");return m(n?"a":"span",t,m("span",{className:"RecipientLabel-text"},R()(e),A()(e)))}(a.a.cache.conversationsRecipient,{onclick:function(){e.removeRecipient(a.a.cache.conversationsRecipient)}})))},n.sourceItems=function(){var e=new ee.a;return e.add("users",new Y),e},n.clear=function(){this.value(""),m.redraw()},n.addRecipient=function(e){a.a.cache.conversationsRecipient=a.a.store.getById("users",e),this.clear()},n.removeRecipient=function(e){a.a.cache.conversationsRecipient=null,m.redraw()},n.findRecipient=function(e,t){return a.a.store.getById(e,t)},t}(V.a),ce=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),a.a.cache.conversationsRecipient=null,this.conversations=this.attrs.conversations,this.already=!1,this.messageContent=B()("")},n.title=function(){return a.a.translator.trans("kyrne-whisper.forum.modal.title")},n.className=function(){return"StartConversationModal Modal--medium"},n.content=function(){return[m("div",{className:"Modal-body",onclick:function(e){return e.stopImmediatePropagation()}},this.already?[m("h2",null,a.a.translator.trans("kyrne-whisper.forum.modal.already",{username:A()(this.recpient)})),m("h2",null,a.a.translator.trans("kyrne-whisper.forum.modal.copied",{username:A()(this.recpient)}))]:m("div",null,m("div",{class:"helpText"},null!==a.a.cache.conversationsRecipient?a.a.translator.trans("kyrne-whisper.forum.modal.help_start",{username:A()(a.a.cache.conversationsRecipient)}):a.a.translator.trans("kyrne-whisper.forum.modal.help")),m("div",{className:"AddRecipientModal-form"},m(re,{state:a.a.search}),null!==a.a.cache.conversationsRecipient?m("div",{className:"AddRecipientModal-form-submit"},m("textarea",{value:this.messageContent(),oninput:q()("value",this.messageContent),placeholder:a.a.translator.trans("kyrne-whisper.forum.chat.text_placeholder"),rows:"3"}),M.a.component({type:"submit",className:"Button Button--primary",disabled:!this.messageContent()},a.a.translator.trans("kyrne-whisper.forum.modal.submit"))):"")))]},n.onsubmit=function(e){var t=this;e.preventDefault();var n=a.a.cache.conversationsRecipient;this.recpient=n,a.a.cache.conversationsRecipient=null,a.a.store.createRecord("conversations").save({messageContents:this.messageContent(),recipient:n.id()}).then((function(e){if(e.notNew()){var n=document.createElement("textarea");document.body.appendChild(n),n.value=t.messageContent(),n.focus(),n.select(),document.execCommand("Copy"),n.remove(),t.already=!0,m.redraw()}else{t.conversations.push(e);var s=a.a.session.user.conversations();s.push(e),a.a.session.user.conversations=B()(s),m.redraw(),a.a.modal.close()}}))},t}(J.a),ue=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.oninit=function(e){this.mobile=e.attrs.mobile,this.load(),this.loading=!1,this.currentConversation=null},n.onupdate=function(){},n.onbeforeupdate=function(){var e=this,t=$(".ConversationsList-list");t.off("scroll").on("scroll",(function(){t.scrollTop()+t.innerHeight()>=t[0].scrollHeight&&e.loadMore()}))},n.view=function(){var e=this;if(!this.loading){var t=a.a.cache.conversations;return null===this.currentConversation&&a.a.cache.conversations&&a.a.cache.conversations.length>0&&(this.currentConversation=a.a.cache.conversations[0]),this.currentConversation&&(this.conversationComponent=F.component({conversation:this.currentConversation,mobile:this.mobile})),m("div",{className:"ConversationsList"},m("div",{style:a.a.session.user.conversations().length?"":"width: unset; padding: 10px;",className:"container clearfix"},m("div",{style:this.mobile?"float: unset; margin: 0 auto; display: block;":"",className:"people-list",id:"people-list"},M.a.component({onclick:this.showModal.bind(this),className:"Button Button--primary",disabled:!a.a.forum.attribute("canMessage")},a.a.forum.attribute("canMessage")?a.a.translator.trans("kyrne-whisper.forum.chat.start"):a.a.translator.trans("kyrne-whisper.forum.chat.cant_start")),!!a.a.session.user.conversations().length&&m("ul",{className:"ConversationsList-list"},Array.isArray(t)&&t.map((function(t,n){return m(K,{conversation:t,i:n,active:!e.mobile&&e.currentConversation===t,onclick:function(t){e.mobile?m.route(a.a.route("messages",{id:a.a.cache.conversations[$(t.currentTarget).attr("id")].id()})):(e.currentConversation=a.a.cache.conversations[$(t.currentTarget).attr("id")],m.redraw())}})})))),!this.mobile&&this.conversationComponent))}},n.showModal=function(){a.a.modal.show(ce,{conversations:a.a.cache.conversations,messages:a.a.cache.messages})},n.loadMore=function(){var e=this;this.loading=!0,m.redraw(),a.a.store.find("whisper/conversations",{offset:a.a.cache.conversations.length}).then((function(e){delete e.payload,e.map((function(e){a.a.cache.conversations.push(e)}))})).catch((function(){})).then((function(){e.loading=!1,m.redraw()}))},n.load=function(){var e=this;a.a.cache.conversations&&!this.mobile||(this.mobile&&(a.a.cache.conversations=[]),this.loading=!0,m.redraw(),a.a.store.find("whisper/conversations").then((function(e){delete e.payload,a.a.cache.conversations=e})).catch((function(){})).then((function(){e.loading=!1,m.redraw()})))},t}(T.a),me=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.oninit=function(){e.prototype.oninit.call(this),app.history.push("messages"),this.bodyClass="App--conversations"},n.view=function(){return m("div",{className:"ConversationsPage"},m(ue,{mobile:!0}))},t}(x.a),le=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.init=function(){var t=this;e.prototype.init.call(this),app.history.push("conversations");var n=m.route.param("id");app.store.find("whisper/conversations",n).then((function(e){app.cache.conversations=[],app.cache.conversations.push(e),t.list=F.component({conversation:e,mobile:!0}),m.redraw()})),this.bodyClass="App--messages"},n.view=function(){return m("div",{className:"MessagesPage"},m("div",{className:"ConversationsList"},m("div",{className:"container clearfix"},this.list?this.list:null)))},t}(x.a),pe=n(25),he=n.n(pe),de=n(26),fe=function(e){function t(){return e.apply(this,arguments)||this}u(t,e),t.initAttrs=function(t){t.label||(t.label=t.label||a.a.translator.trans("kyrne-whisper.forum.dropdown.tooltip")),t.icon||(t.icon="fas fa-comment-alt"),t.className="MessagesDropdown NotificationsDropdown",e.initAttrs.call(this,t)};var n=t.prototype;return n.onclick=function(){a.a.drawer.isOpen()&&this.goToRoute()},n.getMenu=function(){return m("form",{className:"Dropdown-menu "+this.attrs.menuClassName},!!this.showing&&m(ue,{mobile:!1}))},n.goToRoute=function(){m.route(a.a.route("conversations"))},n.getUnreadCount=function(){return a.a.session.user.unreadMessages()},n.getNewCount=function(){return a.a.session.user.unreadMessages()},t}(n.n(de).a);a.a.initializers.add("kyrne-whisper",(function(e){e.store.models.messages=f,e.store.models.conversations=v,e.store.models.conversation_users=g,w.a.prototype.conversations=p.a.hasMany("conversations"),w.a.prototype.unreadMessages=p.a.attribute("unreadMessages"),e.routes.conversations={path:"/whisper/conversations",component:me},e.routes.messages={path:"/whisper/messages/:id",component:le},Object(o.extend)(he.a.prototype,"items",(function(e){(a.a.forum.attribute("canMessage")||a.a.session.user&&a.a.session.user.conversations().length)&&e.add("Messages",m(fe,null),20)})),Object(o.extend)(r.a.prototype,"oncreate",(function(){e.pusher&&e.pusher.then((function(t){var n=t.channels;n.user&&n.user.bind("newMessage",(function(t){e.session.user.unreadMessages=B()(e.session.user.unreadMessages()+1),m.redraw()}))}))})),Object(o.extend)(r.a.prototype,"onremove",(function(){e.pusher&&e.pusher.then((function(e){var t=e.channels;t.user&&t.user.unbind("newMessage")}))}))}))}]);
//# sourceMappingURL=forum.js.map