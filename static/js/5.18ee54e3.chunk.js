(this["webpackJsonpsocial-site"]=this["webpackJsonpsocial-site"]||[]).push([[5],{234:function(e,a,t){"use strict";t.d(a,"b",(function(){return u})),t.d(a,"a",(function(){return d})),t.d(a,"c",(function(){return m}));var s=t(239),n=t(0),r=t.n(n),o=t(235),i=t.n(o),l=t(117),c=function(e){var a=e.meta,t=a.touched,s=a.error,n=e.children,o=t&&s;return r.a.createElement("div",{className:"".concat(i.a.formControl," ").concat(o?i.a.error:"")},n,o&&r.a.createElement("div",{className:i.a.messageError},s))},u=function(e){var a=e.input,t=(e.meta,Object(s.a)(e,["input","meta"]));return r.a.createElement(c,e,r.a.createElement("textarea",Object.assign({},a,t)))},d=function(e){var a=e.input,t=(e.meta,Object(s.a)(e,["input","meta"]));return r.a.createElement(c,e,r.a.createElement("input",Object.assign({},a,t)))};function m(e,a,t,s,n){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7?arguments[7]:void 0;return r.a.createElement("div",{className:n},r.a.createElement(l.a,Object.assign({placeholder:e,name:a,validate:t,component:s},o,{value:c})),i)}},235:function(e,a,t){e.exports={formControl:"FormsControls_formControl__3zCp_",error:"FormsControls_error__3JYew",messageError:"FormsControls_messageError__28IDB",formSummaryError:"FormsControls_formSummaryError__1mX5B"}},236:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return n}));var s=function(e){if(!e)return"field is required"},n=function(e){return function(a){if(a&&a.length>=e)return"Max length is ".concat(e," symbols")}}},246:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1BDi8",messageToSelectDialog:"Dialogs_messageToSelectDialog__1QHyY",dialogsItems:"Dialogs_dialogsItems__tckqV",dialog:"Dialogs_dialog__2DvAn",dialogItem:"Dialogs_dialogItem__2PD1m",active:"Dialogs_active__1SWKo",messages:"Dialogs_messages__2HF1k",newMessagesCount:"Dialogs_newMessagesCount__NtKmc",buttonPrevMes:"Dialogs_buttonPrevMes__2dcFY",text:"Dialogs_text__HVFfX index_commonTextarea__UfkSC"}},259:function(e,a,t){e.exports={message:"Message_message__1f9za",senderName:"Message_senderName__2uFLb",buttons:"Message_buttons__2RgGG",deletedMessage:"Message_deletedMessage__1C4tW",wrapper:"Message_wrapper__14E_9",fromUser:"Message_fromUser__3CpwO",fromInterlocutor:"Message_fromInterlocutor__o0yQ4",notVuived:"Message_notVuived__3qkgM"}},260:function(e,a,t){e.exports=t.p+"static/media/userWithoutPhoto.9bd7cc8a.jpg"},329:function(e,a,t){"use strict";t.r(a);var s=t(19),n=t(20),r=t(22),o=t(21),i=t(48),l=t(0),c=t.n(l),u=t(246),d=t.n(u),m=t(26),g=t(259),p=t.n(g),_=t(53),f=t.n(_),v=function(e){var a,t=!!e.deletedMessages.find((function(a){return a.id===e.oneMessage.id}));return c.a.createElement("div",{className:f()(p.a.wrapper,Object(m.a)({},p.a.notVuived,!e.oneMessage.viewed))},c.a.createElement("div",{className:f()(p.a.message,(a={},Object(m.a)(a,p.a.fromUser,e.ownerId===e.oneMessage.senderId),Object(m.a)(a,p.a.fromInterlocutor,e.ownerId!==e.oneMessage.senderId),Object(m.a)(a,p.a.deletedMessage,t),a))},c.a.createElement("div",{className:p.a.senderName},e.oneMessage.senderName,": "),t?"message is deleted":e.oneMessage.body,c.a.createElement("div",{className:p.a.buttons},c.a.createElement("span",{onClick:t?function(){e.restoreMessage(e.oneMessage.id)}:function(){e.deleteMessageForOwner(e.oneMessage.id)}},t?"restore":"delete for me")," | ",c.a.createElement("span",{onClick:function(){e.addMessageToSpam(e.oneMessage.id)}},"spam"))))},M=t(32),E=t(260),b=t.n(E),h=function(e){var a="/dialogs/"+e.user.id;return void 0!==e.user.id?c.a.createElement("div",{className:d.a.dialogItem},c.a.createElement(M.b,{to:a,activeClassName:d.a.active,className:d.a.dialog},c.a.createElement("div",null,c.a.createElement("img",{src:e.user.photos.small?e.user.photos.small:b.a,alt:"ave"})),c.a.createElement("div",null,e.user.userName),e.user.hasNewMessages&&c.a.createElement("div",{className:d.a.newMessagesCount},e.user.newMessagesCount))):c.a.createElement("div",{className:d.a.dialogItem},"not found")},D=t(117),I=t(118),N=t(236),w=t(234),O=t(49),C=t(8),j=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return c.a.createElement(h,{key:e.id,user:e})})),s=a.messages.map((function(t){return c.a.createElement(v,{addMessageToSpam:e.addMessageToSpam,restoreMessage:e.restoreMessage,deletedMessages:a.deletedMessages,deleteMessageForOwner:e.deleteMessageForOwner,ownerId:e.ownerId,key:t.id,oneMessage:t})})),n=function(){return c.a.createElement("div",{className:d.a.containerMessages},c.a.createElement("div",{className:d.a.buttonPrevMes},c.a.createElement(O.c,{isVisible:e.currentDialogMessagesCount>a.messages.length,name:"show prev messages"})),s)};return c.a.createElement("div",{className:d.a.dialogs},c.a.createElement("div",{className:d.a.dialogsItems},t),c.a.createElement("div",{className:d.a.messages},null===a.selectedDialogId&&c.a.createElement("div",{className:d.a.messageToSelectDialog},"Please select dialog"),null!==a.selectedDialogId&&c.a.createElement(C.b,{path:"/dialogs/".concat(a.selectedDialogId),render:function(){return c.a.createElement(n,null)}})),null!==a.selectedDialogId&&c.a.createElement(k,{onSubmit:function(a){a.newMessageBody&&e.sendMessage(e.userId,a.newMessageBody)}}))},y=Object(N.a)(50),k=Object(I.a)({form:"dialogAddMessageForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement(D.a,{className:d.a.text,placeholder:"Your message...",name:"newMessageBody",component:w.b,validate:[y]}),c.a.createElement("div",null,c.a.createElement(O.b,{name:"SEND"})))})),S=t(24),F=function(e){return{isAuth:e.auth.isAuth}},x=t(14),P=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.init(this.props.userId)}},{key:"componentDidUpdate",value:function(e,a,t){e.userId!=this.props.userId&&this.props.updateDialog(this.props.userId)}},{key:"componentWillUnmount",value:function(){this.props.setCurrentDialog(null)}},{key:"render",value:function(){return c.a.createElement(j,this.props)}}]),t}(c.a.Component),T={init:i.g,updateDialog:i.j,sendMessage:i.i,getMessagesNewerThenLast:i.e,setCurrentDialog:i.d.setCurrentDialog,deleteMessageForOwner:i.c,restoreMessage:i.h,addMessageToSpam:i.a};a.default=Object(x.d)(Object(S.b)((function(e){return{dialogsPage:e.dialogsPage,ownerId:e.auth.userId,currentDialogMessagesCount:e.dialogsPage.currentDialogMessagesCount}}),T),(function(e){var a=function(a){Object(r.a)(i,a);var t=Object(o.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(C.a,{to:"/login"})}}]),i}(c.a.Component);return Object(S.b)(F)(a)}))(P)}}]);
//# sourceMappingURL=5.18ee54e3.chunk.js.map