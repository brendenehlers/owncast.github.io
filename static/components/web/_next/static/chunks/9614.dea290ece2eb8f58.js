(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9614],{29614:function(e,l,n){"use strict";n.r(l),n.d(l,{Modal:function(){return h}});var o=n(85893),i=n(85402),s=n(11382),t=n(67294),a=n(4511),d=n(69183),r=n(70051),c=n.n(r);let h=e=>{let{title:l,url:n,open:r,handleOk:h,handleCancel:p,afterClose:u,height:m,width:f,children:x}=e,[_,g]=(0,t.useState)(!!n),v="100%",y="520px";n&&(v="70vh",y="900px");let w={padding:"0px",minHeight:m,height:null!=m?m:v},j=n&&(0,o.jsx)("iframe",{title:l,src:n,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>g(!1)});return(0,o.jsx)(i.default,{title:l,open:r,onOk:h,onCancel:p,afterClose:u,bodyStyle:w,width:null!=f?f:y,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,className:c().modal,children:(0,o.jsx)(a.SV,{fallbackRender:e=>{let{error:l,resetErrorBoundary:n}=e;return(0,o.jsx)(d.A,{componentName:"Modal",message:l.message,retryFunction:n})},children:(0,o.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[j&&(0,o.jsx)("div",{style:{display:_?"none":"inline"},children:j}),x&&(0,o.jsx)("div",{className:c().content,children:x}),_&&(0,o.jsx)(s.Z,{className:c().spinner,spinning:_,size:"large",tip:l})]})})})};h.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0}},70051:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9",modal:"Modal_modal__i0TOf"}}}]);