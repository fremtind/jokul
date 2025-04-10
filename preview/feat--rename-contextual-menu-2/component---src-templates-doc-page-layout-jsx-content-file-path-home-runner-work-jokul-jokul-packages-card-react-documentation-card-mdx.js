"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[341],{17070:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return Ce},Head:function(){return ce},default:function(){return Ie}});var a=t(47160),l=t(70079),r=t(85914),g=t(7689),s=t(26372),o=t.n(s);const A=["0","m","l","xl","2xl","3xl","4xl"],i=["0","16","24","40","64","104","168"];function c(e,n){void 0===n&&(n="24");const t=e||n;return function(e){return A.includes(e)}(t)?A.indexOf(t):i.indexOf(t)}function C(e){if("string"==typeof e)return{padding:"var(--jkl-spacing-"+i[c(e)]+")"};const n=Math.max(c(e.left),c(e.right)),t=i[n];return{padding:"var(--jkl-spacing-"+i[Math.max(n,c(e.top,t))]+")"+" "+("var(--jkl-spacing-"+t+")")+" "+("var(--jkl-spacing-"+i[Math.max(n,c(e.bottom,t))]+")")+" "+("var(--jkl-spacing-"+t+")")}}const I=e=>{let{children:n}=e;return l.createElement("div",{className:"jkl-nav-card__info"},n)},d=e=>{let{text:n,type:t,density:a}=e;const r=(e=>{switch(e){case"info":return g._1;case"success":return g.rD;case"warning":return g.wq;case"error":return g.nS;default:return g.Vp}})(t);return l.createElement(r,{density:a},n)},u=l.forwardRef(((e,n)=>{const{component:t="a",padding:a="l",image:g,tag:s,title:A,external:i,description:c,children:I,className:u,density:m,...p}=e,k=t,f=s?Array.isArray(s)?s:[s]:void 0;return l.createElement(k,Object.assign({ref:n,"aria-label":A,className:o()("jkl-nav-card",u),"data-density":m},p),g&&l.createElement(r.E,Object.assign({className:"jkl-nav-card__image"},g)),l.createElement("div",{className:"jkl-nav-card__content",style:C(a)},f&&l.createElement("div",{className:"jkl-nav-card__tag-wrapper"},f.map(((e,n)=>l.createElement(d,{type:e.type,text:e.text,key:n})))),l.createElement("div",null,l.createElement("p",{className:o()("jkl-nav-card__link",i?"jkl-nav-card__link--external":"")},A),c&&l.createElement("p",{className:"jkl-nav-card__description jkl-spacing-xs--top"},c)),I))}));u.displayName="NavCard";var m=t(15089);const p=[{name:"Padding",values:["0","16","24","40","blandet"],defaultValue:2}],k={boolProps:["Image",{prop:"Tag",defaultValue:!0},{prop:"Description",defaultValue:!0},{prop:"Ekstra info",defaultValue:!0},{prop:"Ekstern lenke",defaultValue:!1}],choiceProps:(0,m.Z)(p)},f={choiceProps:(0,m.Z)(p)},b={boolProps:[{prop:"Title",defaultValue:!0}],choiceProps:(0,m.Z)(p)},v={top:"64",right:"40",bottom:"16",left:"24"};var h=t.p+"static/grass-400-6eee40cd619505196392b2281fb18029.jpg",E=t.p+"static/grass-800-15e7eaa86bc079fa693b96219f54837f.jpg",j="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQABLAEsAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAEsAAAAAQAAASwAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAADKgAwAEAAAAAQAAACEAAAAA/+EKYWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmNlYzYyYTAyLTExYjQtNGFmYS04ZTZlLTM2ODczYjgxN2FkYyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSI5QjFBRTc3RjI1RTQwNzgwNkVDN0VBM0M4NDI5OUJBNyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjZWM2MmEwMi0xMWI0LTRhZmEtOGU2ZS0zNjg3M2I4MTdhZGMiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTUtMDgtMjVUMTg6MTM6NDMrMDE6MDAiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+AP/AABEIACEAMgMBEQACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/3QAEAAf/2gAMAwEAAhEDEQA/APT/AA18aNS1e3vIl1O5lMDqIzKvI65HA6gA/pXH9Zm+oJJ30J9G+OGu3GmzXSahJJaRy+XvRQQoxkc+h+YZ9VIqfrM7XuTy6m74a+N+satO9pb33nXICskTkfvDs3kIT1OD0/wpQxc27MJQtsbOm/G7V9SZwXWOWMSBUaMZZx0U++QRjtWrxL2FCPNuaFt8YNU1G1tbxZ7NJJwIo2a3JChmO7Izyf3ZqlierRXKramL4k+LHiNdIm8y+0rRpBO0C6jJaSzrB8oO94Qw3kNgYDAHJ5q/rMdG9B+yV2cM/wAavEts7RPrtzevGdrXMGnqkcpHG9V5wD1AycA0vbvozRUo/wAp/9DtvBfgmzudWuDYSAF4hcDBPXKgc++X5PPPtXkpLRhGTlJo2dZ8OmN9QgiSRFuy8B3rtRFwDGw7MQVPA5wTS1SLqSTk7dDG0vSRY+I5rmECNPsEjr8uDuKMPTuxyOlRyu41OLOyMUNvrUyui3V+98WRgMNsOefTO7aoJ/umq3Vw+GdjGvL640+GyjgkjCxT3C4kwD8qnp+J/WpcnEyvfQtanrUiwQrdrH5U07oVY5yAoLEjsAWq+ay1NL9UYA1uxA+SKMJ2AhzxWfzNPbvuf//Rs/CjxXNYePIlknRIpla1MZyzLI2HVW9MDHB7mvHlHliyaLtWOotfFUmlzsklst3ZXkjl4t4clo5tuUQdCOPm65Kjsau9kkZy0k2/61MLX765XVJTa3wlspEzAx6yRr1dsA4OQwOcd8ZxUtNtWId+U7jTtVhXXrq7Lv56xqfmORIQCSR6H5mNXHWKuXKT52yPUr+BdaC3SReULiadWHO7uwx6Yzn6UNKWrG5csjm/EeqJcaiHLs67mUQg7g8juDyR0G1VyMcVlK6Lh7z0OTutE8PNczG41bWGuC58wxzhVLZ5wOwz2qbLsU6UE9Zan//S4vwvr164028kaFbr7UjTSIgY3ABYpIO4YoME9cpyK82atGUHsSlzOM3v1/Q6aDxYllcsrxW4hfUpriIzuFbGwMWXOTkkenTB5pU7OCfcxqvV26N/ib914y028vpo7q2glQWrz27Qth1g8tGYAHh8kgbfU+9Qnc1kvefyKkuvpHd6vcRXwubcrDKuSCVBCJlcf3sEEH7pPeqvdXXQxlo5X7HO3nxL+267c3L3TKsafZ4xtCkK2BjeenJReB2HfpUHf8iZK8rmSvib7JMisqwTWFlLM0Rw22dlx8x6kDIx759qiUXokddGSTfp/X3HD6j4lu11C6AmuZAJWG8XZXdyecY4qFew5yhzM//T8d+D/wDx+6t/1/L/AOksdeVLd/10Q47f13ZYu/8Aj50L/rrN/wCk610w+BfM5Km7LEH+u0f/ALAE/wD6Nta8+H6nbU3X+H/5Es2//IH13/ej/wDRy1uv4f8AXc4qnxM4Cb78H/Xey/8AR1UvhXr+pqun9dDptd/5CWu/9d//AGV6c/1ZVE5B/vt9aoxl8TP/2Q==";const y={src:h,srcSet:h+" 400w, "+E+" 800w",placeholder:j,alt:"Nærbilde av strå, med en åker i bakgrunnen"},N=e=>{let{boolValues:n,choiceValues:t}=e;const a=null!=n&&n.Image?y:void 0,r=null!=n&&n.Tag?{type:"success",text:"Behandles"}:void 0,g=null!=n&&n.Description?"Balder":void 0,s=(null==t?void 0:t.Padding)||"24",o="blandet"===s?v:s,A=!(null==n||!n["Ekstern lenke"])||void 0;return l.createElement(u,{padding:o,id:"nav-card",href:"#nav-card",image:a,title:"Behandlings- og Veterinærutgifter",description:g,tag:r,external:A},(null==n?void 0:n["Ekstra info"])&&l.createElement(I,null,"Skadedato",l.createElement("br",null),"01.12.2021"))},x=e=>{let{boolValues:n,choiceValues:t}=e;const a=null!=n&&n.Image?'\n    image={{ src:"wheat.jpg", alt:"Nærbilde av strå, med en åker i bakgrunnen" }}':"",l=null!=n&&n.Tag?'\n    tag={{ type: "success", text: "Behandles" }}':"",r=null!=n&&n.Description?'\n    description="Balder"':"",g=(null==t?void 0:t.Padding)||"l";return"<NavCard\n    padding="+("blandet"===g?'{{\n        top: "64",\n        right: "40",\n        bottom: "16",\n        left: "24",\n    }}':'"'+g+'"')+'\n    href="#"\n    title="Behandlings- og Veterinærutgifter"'+(null!=n&&n["Ekstern lenke"]?"\n    external={true}":"")+r+l+a+"\n"+(null!=n&&n["Ekstra info"]?">\n    <InfoBlock>\n        Skadedato\n        <br />\n        01.12.2021\n    </InfoBlock>\n</NavCard>\n":"/>")};var w=t(42913),B=t(8102),D=t(10097);const T=["s","m","l","xl"],Q=["outlined","high","low"],S=l.forwardRef((function(e,n){const{className:t,clickable:a=!1,padding:r="s",variant:g="high",asChild:s,as:A="div",...i}=e,c=s?D.B:A;return l.createElement(c,Object.assign({"data-testid":"jkl-card","data-clickable":a,"data-padding":r,className:o()("jkl-card","jkl-card--"+g,t)},i,{ref:n}))})),_=e=>{let{boolValues:n,choiceValues:t}=e;const a=null==t?void 0:t.Padding,r=null==t?void 0:t.Type;return l.createElement(S,{asChild:!0,clickable:!(null==n||!n.Clickable),padding:a,variant:r},l.createElement("a",{href:"#test",className:"flex gap-x-40"},l.createElement("div",{className:"flex flex-column gap-4"},l.createElement("p",{className:"jkl-heading-2"},(0,w._)(18856),l.createElement("span",{"aria-hidden":!0}," →")),l.createElement("p",{className:"jkl-body"},"Frist 20.03.2023")),l.createElement("div",{className:"flex flex-column gap-12"},l.createElement(B.nS,null,"Ubetalt"),l.createElement("p",{className:"jkl-body"},"Purring"))))},M=e=>{let{boolValues:n,choiceValues:t}=e;return"\n// Her bruker vi asChild-propen for å erstatte Card med child-elementet sitt\n<Card\n    asChild\n    clickable={"+!(null==n||!n.Clickable)+'}\n    padding="'+(null==t?void 0:t.Padding)+'"\n    type="'+(null==t?void 0:t.Type)+'"\n>\n    {/* Siden vi bruker asChild er det denne lenken som blir rendret.\n    Den får også satt alle egenskapene fra Card-komponenten på seg */}\n    <a href="#test" className="flex gap-x-40"> \n        <div className="flex flex-column gap-4">\n            <p className="jkl-heading-2">\n                {formatValuta(18856)}\n                <span aria-hidden> →</span>\n            </p>\n            <p className="jkl-body">Frist 20.03.2023</p>\n        </div>\n        <div className="flex flex-column gap-12">\n            <ErrorTag>Ubetalt</ErrorTag>\n            <p className="jkl-body">Purring</p>\n        </div>\n    </a>\n</Card>'},V={boolProps:[{prop:"Clickable",defaultValue:!0}],choiceProps:[{name:"Padding",values:(0,m.Z)(T),defaultValue:1},{name:"Type",values:(0,m.Z)(Q),defaultValue:0}]};var U=t(45915);const P=l.forwardRef((function(e,n){let{as:t,asChild:a,className:r,placement:g="top",...s}=e;const A=a?D.B:t||"img";return l.createElement(A,Object.assign({ref:n,className:o()("jkl-card-image","jkl-card-image--"+g,r)},s))})),F={src:h,srcSet:h+" 400w, "+E+" 800w",placeholder:j,alt:"Nærbilde av strå, med en åker i bakgrunnen"},R=e=>{let{boolValues:n,choiceValues:t}=e;const a=null==t?void 0:t.Padding,r=null==t?void 0:t.Type;return l.createElement(S,{as:"a",href:"#",clickable:!(null==n||!n.Clickable),padding:a,variant:r,style:{maxWidth:"350px"},className:"flex flex-column gap-24 items-start"},l.createElement(P,Object.assign({as:U.E,placement:"top"},F)),l.createElement(B.rD,null,"Behandles"),l.createElement("div",{className:"flex flex-column gap-4"},l.createElement("p",{className:"jkl-heading-2"},"Behandlings- og veterinærutgifter",l.createElement("span",{"aria-hidden":!0}," →")),l.createElement("p",{className:"jkl-body"},"Balder")),l.createElement("hr",{style:{margin:0,width:"100%",border:0,borderBottom:"1px solid var(--jkl-color-border-separator)"}}),l.createElement("p",{className:"jkl-small"},"Skadedato",l.createElement("br",null),"24.01.2024"))},O=e=>{let{boolValues:n,choiceValues:t}=e;return'\n// Her bruker vi as-propen til å be React rendre Card som et\n// anchor-element. Det er også mulig å rendre komponenten som en\n// egenlaget React-komponent, eller som f.eks. en Link fra en router\n<Card\n    as="a"\n    href="#"\n    clickable={'+!(null==n||!n.Clickable)+'}\n    padding="'+(null==t?void 0:t.Padding)+'"\n    type="'+(null==t?void 0:t.Type)+'"\n    style={{ maxWidth: "350px" }}\n    className="flex flex-column gap-24 items-start"\n>\n    {/* Vi bruker Image-komponenten fra Jøkul for å håndtere responsivitet i bildet */}\n    <CardImage as={Image} placement="top" {...imageProps} />\n    <SuccessTag>Behandles</SuccessTag>\n    <div className="flex flex-column gap-4">\n        <p className="jkl-heading-2">\n            Behandlings- og veterinærutgifter\n            <span aria-hidden> →</span>\n        </p>\n        <p className="jkl-body">Balder</p>\n    </div>\n    <hr\n        style={{\n            margin: 0,\n            width: "100%",\n            border: 0,\n            borderBottom: "1px solid var(--jkl-color-border-separator)",\n        }}\n    />\n    <p className="jkl-small">\n        Skadedato\n        <br />\n        24.01.2024\n    </p>\n</Card>'},L={boolProps:[{prop:"Clickable",defaultValue:!0}],choiceProps:[{name:"Padding",values:(0,m.Z)(T),defaultValue:2},{name:"Type",values:(0,m.Z)(Q),defaultValue:0}]};var Z=t(16514),G=t(3438),X=t(62309),H=t(29674),W=t(73110);const Y=e=>{const{id:n,legend:t,labelProps:a,supportLabelProps:r,tooltipProps:g,className:s,children:A,helpLabel:i,errorLabel:c,density:C,"data-testautoid":I,...d}=e,u=(0,G.M)(n||"jkl-field-group",{generateSuffix:!n}),m=u+"_support-label",p=c||i,k=c?"error":i?"help":void 0,f=p?m:void 0;return l.createElement("fieldset",Object.assign({id:u,className:o()("jkl-field-group",s),"data-testautoid":I},d,{"aria-describedby":f,"data-density":C}),l.createElement("legend",{className:"jkl-field-group__legend"},l.createElement(H._,Object.assign({},a,{density:C}),!g&&t,g&&l.createElement(l.Fragment,null,l.createElement("span",{style:{whiteSpace:"normal"}},t)," ",l.createElement(X.d,g)))),A,(i||c)&&l.createElement(W.A,Object.assign({},r,{label:p,labelType:k,id:m,density:C})))};var z=t(84490),J=t(49467);const q=e=>{let{bgColor:n,background:t="highlighted",withShadow:a=!1,padding:r="l",className:g,children:s,density:A,...i}=e;return l.createElement("div",Object.assign({className:o()("jkl-task-card",g,{["jkl-task-card--"+t]:!n,["jkl-task-card--"+n]:!!n,"jkl-task-card--with-shadow":a}),"data-density":A},i),l.createElement("div",{className:"jkl-task-card__content-wrapper",style:C(r)},s))},K=e=>{let{choiceValues:n}=e;const{0:t,1:a}=(0,l.useState)(!1),[r]=(0,z.v)(t),g=(null==n?void 0:n.Padding)||"24",s="blandet"===g?v:g;return l.createElement(q,{background:t?"highlighted":"subdued",withShadow:t,padding:s},l.createElement(Z.X,{id:"veterinar-checkbox","aria-controls":"expanded-content","aria-expanded":t,name:"veterinar",value:"veterinar",onChange:()=>a((e=>!e))},"Veterinærutgifter"),l.createElement("p",{className:"jkl-body jkl-spacing-12--top"},"Dekker veterinærutgifter og medisiner på resept, som ofte kan bli dyrt."),l.createElement("div",{id:"expanded-content","aria-labelledby":"veterinar-checkbox",role:"group",className:"jkl-task-card-example__content",hidden:!t,ref:r},l.createElement(J.P,{label:"Forsikringssum",name:"forsikringssum",className:"jkl-spacing-40--top",items:["10 000 kr","20 000 kr","30 000 kr"]}),l.createElement(J.P,{label:"Velg egenandel",name:"egenandel",className:"jkl-spacing-24--top",items:["1 500 kr","2 500 kr","3 000 kr"]}),l.createElement(Y,{className:"jkl-spacing-24--top",legend:"Tilleggsforsikring"},l.createElement(Z.X,{name:"tilleggsforsikring",value:"rehab"},"Dekning av rehabilitering")),l.createElement("p",{className:"jkl-body jkl-spacing-40--top"},"Dersom du ønsker ekstra forsikring av valpekull, må du ta kontakt med en rådgiver.")))},$=e=>{let{choiceValues:n}=e;const t=(null==n?void 0:n.Padding)||"24";return'const [selected, setSelected] = useState(false);\nconst [contentRef] = useAnimatedHeight<HTMLDivElement>(selected);\n\nreturn (\n    <TaskCard background={selected ? "highlighted" : "subdued"} withShadow={selected} padding='+("blandet"===t?'{{\n        top: "64",\n        right: "40",\n        bottom: "16",\n        left: "24",\n    }}':'"'+t+'"')+'>\n        <Checkbox\n            id="veterinar-checkbox"\n            aria-controls="veterinar-expanded-content"\n            aria-expanded={selected}\n            name="veterinar"\n            value="veterinar"\n            onChange={() => setSelected((selected) => !selected)}\n        >\n            Veterinærutgifter\n        </Checkbox>\n        <p className="jkl-body jkl-spacing-12--top">\n            Dekker veterinærutgifter og medisiner på resept, som ofte kan bli dyrt.\n        </p>\n        <div\n            id="veterinar-expanded-content"\n            aria-labelledby="veterinar-checkbox"\n            role="group"\n            className="jkl-task-card-example__content"\n            hidden={!selected}\n            ref={contentRef}\n        >\n            <Select\n                label="Forsikringssum"\n                name="forsikringssum"\n                className="jkl-spacing-40--top"\n                items={["10 000 kr", "20 000 kr", "30 000 kr"]}\n            />\n            <Select\n                label="Velg egenandel"\n                name="egenandel"\n                className="jkl-spacing-24--top"\n                items={["1 500 kr", "2 500 kr", "3 000 kr"]}\n            />\n            <FieldGroup className="jkl-spacing-24--top" legend="Tilleggsforsikring">\n                <Checkbox name="tilleggsforsikring" value="rehab">\n                    Dekning av rehabilitering\n                </Checkbox>\n            </FieldGroup>\n            <p className="jkl-body jkl-spacing-40--top">\n                Dersom du ønsker ekstra forsikring av valpekull, må du ta kontakt med en rådgiver.\n            </p>\n        </div>\n    </TaskCard>\n);'};var ee=t(10793);const ne=e=>{let{title:n,children:t,density:a,className:r,padding:g="l",...s}=e;return l.createElement("div",Object.assign({},s,{className:o()("jkl-info-card",r),"data-density":a}),l.createElement("div",{className:o()("jkl-info-card__content-wrapper"),style:C(g)},n&&l.createElement("p",{className:"jkl-info-card__title"},n),t))},te=e=>{let{boolValues:n,choiceValues:t}=e;const a=null!=n&&n.Title?"Samle forsikringer –"+ee.vk+"få"+ee.vk+"rabatt":void 0,r=(null==t?void 0:t.Padding)||"24",g="blandet"===r?v:r;return l.createElement(ne,{title:a,padding:g,className:"example-info-card"},l.createElement("p",{className:"jkl-body"},"Har du tre eller flere forsikringer får du samlerabatt"))},ae=e=>{let{boolValues:n,choiceValues:t}=e;const a=null!=n&&n.Title?"title=`Samle forsikringer –${unicode.nbsp}få${unicode.nbsp}rabatt`":"",l=(null==t?void 0:t.Padding)||"l";return"<InfoCard\n    padding="+("blandet"===l?'{{\n        top: "64",\n        right: "40",\n        bottom: "16",\n        left: "24",\n    }}':'"'+l+'"')+"\n    "+a+'\n>\n    <p className="jkl-body">Har du tre eller flere forsikringer får du samlerabatt</p>\n</InfoCard>'};function le(e){const n=Object.assign({p:"p",strong:"strong",h2:"h2",code:"code",blockquote:"blockquote",em:"em"},(0,a.ah)(),e.components),{Ingress:t,ComponentExample:r}=n;return r||ge("ComponentExample",!0),t||ge("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(t,null,"Kort lar oss løfte frem oppgaver eller innhold som henger sammen."),"\n",l.createElement(r,{title:"Informasjon om forfalt faktura",component:_,codeExample:M,knobs:V}),"\n",l.createElement(n.p,null,"Som hovedsak brukes kort for å vise innhold som hører tett sammen, og eventuelle handlinger som hører til innholdet. Plasser elementer i kortet på en måte som er enkel å skumme for nyttig informasjon, og som gir et tydelig hierarki."),"\n",l.createElement(n.p,null,"Kortkomponenten setter kun noen få egenskaper og stiler, og det er opp til deg å bygge innholdet i kortet ut fra behov og informasjon."),"\n",l.createElement(n.p,null,"Hele kortet kan være ",l.createElement(n.strong,null,"klikkbart"),". Dette indikeres med at kortet får skygge, og en effekt ved hover og fokus. Ikke plasser andre interaktive elementer i et kort som er klikkbart."),"\n",l.createElement(n.h2,null,"CardImage"),"\n",l.createElement(n.p,null,"I pakken finnes også en ",l.createElement(n.code,null,"CardImage"),"-komponent som gjør det enkelt å legge inn bilder som blør ut i kantene av kortet, selv om man har padding på resten av innholdet. Komponenten rendres i utgamgspunktet som et vanlig ",l.createElement(n.code,null,"<img>"),"-element, men du kan også sende inn en egen komponent gjennom ",l.createElement(n.code,null,"as"),"-propen. Dermed kan du for eksempel bruke ",l.createElement(n.code,null,"Image"),"-komponenten fra Jøkul, eller tilsvarende komponenter fra et rammeverk eller CMS, for å håndtere bilder mer avansert."),"\n",l.createElement(r,{title:"Statuskort for forsikring med bilde",component:R,codeExample:O,knobs:L}),"\n",l.createElement(n.h2,null,"Navigasjonskort"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Du ender opp på riktig sted"),"\n"),"\n",l.createElement(r,{title:"NavCard",component:N,knobs:k,codeExample:x}),"\n",l.createElement(n.p,null,"Navigasjonskort er klikkbare, og tar brukeren videre til et annet skjermbilde i løsningen. Kortet inneholder alltid en tittel i form av en ",l.createElement(n.code,null,"NavLink"),", og kan i tillegg ha bilde, undertittel, tag, og ekstra informasjon. Siden hele kortet er klikkbart skal det ",l.createElement(n.em,null,"ikke")," inneholde interaktive elementer."),"\n",l.createElement(n.h2,null,"Oppgavekort"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Du får gjort det du skulle"),"\n"),"\n",l.createElement(r,{title:"TaskCard",component:K,knobs:f,codeExample:$}),"\n",l.createElement(n.p,null,"I oppgavekortet kan du samle handlinger som hører sammen med annen informasjon. Eksempler på dette kan være valg for tilpasning av en tilleggsdekning, muligheter for videre behandling av en åpen skadesak, eller visning av forsikringsdetaljer med mulighet for endring."),"\n",l.createElement(n.p,null,"Du kan velge mellom noen fastsatte bakgrunner, og velge å fremheve kortet med skygge, ellers bestemmer du selv innholdet i kortet. Siden kortet i seg selv ikke er klikkbart kan du bruke interaktivt innhold som lenker, knapper og skjemaelementer."),"\n",l.createElement(n.h2,null,"Infokort"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Du finner det du lurer på"),"\n"),"\n",l.createElement(r,{title:"InfoCard",component:te,knobs:b,codeExample:ae}),"\n",l.createElement(n.p,null,"Infokortet brukes til ren informasjon. Det kan ha et bilde, og bør ellers inneholde en tittel sammen med eventuell ekstra informasjon. Kortet skal ikke ha knapper eller lenker, og du setter selv en bakgrunnsfarge som passer til bruken i din løsning."))}var re=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(le,e)):le(e)};function ge(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var se=t(72285),oe=t(22756),Ae=t(95573),ie=t(1634);const ce=e=>{let{pageContext:n}=e;return l.createElement(oe.p,{title:n.title})},Ce=e=>{let{location:n,data:t,pageContext:a,children:r}=e;const{frontmatter:g}=t.page,{types:s}=a;return l.createElement(ie.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(Ae.M1,Object.assign({},g,{versions:a.versions})),l.createElement(Ae.w5,g),r,s&&l.createElement(se.l,{types:s}))};function Ie(e){return l.createElement(Ce,e,l.createElement(re,e))}},16514:function(e,n,t){t.d(n,{X:function(){return s}});var a=t(3438),l=t(26372),r=t.n(l),g=t(70079);const s=(0,g.forwardRef)(((e,n)=>{const{id:t,children:l,invalid:s,className:o,inline:A=!1,density:i,"data-testautoid":c,checked:C,indeterminate:I,...d}=e,u=(0,g.useRef)(null);(0,g.useImperativeHandle)(n,(()=>u.current),[]);const m=(0,a.M)(t||"jkl-checkbox",{generateSuffix:!t});return(0,g.useEffect)((()=>{u.current&&(u.current.indeterminate=!C&&!!I)}),[C,I]),g.createElement("div",{className:r()("jkl-checkbox",o,{"jkl-checkbox--inline":A,"jkl-checkbox--error":s}),"data-density":i},g.createElement("input",Object.assign({id:m,ref:u,className:"jkl-checkbox__input","data-testid":"jkl-checkbox-input","aria-invalid":s,type:"checkbox","data-testautoid":c,checked:C},d)),g.createElement("label",{htmlFor:m,className:"jkl-checkbox__label"},g.createElement("span",{className:"jkl-checkbox__mark"},g.createElement("span",{className:"jkl-checkbox__indeterminate-mark"}),g.createElement("span",{className:"jkl-checkbox__check-mark"})),g.createElement("span",{className:"jkl-checkbox__text"},l)))}));s.displayName="Checkbox"},20439:function(e,n,t){t.d(n,{u:function(){return r}});var a=t(44820);const l={locale:"no-NB"};function r(e,n){const t=(0,a.p)(e);if(!t)return e.toString();const{locale:r,...g}={...l,...n};return new Intl.NumberFormat(r,g).format(t)}},44820:function(e,n,t){t.d(n,{p:function(){return l}});t(31369);const a=(e,n)=>{const t=Array.isArray(e)?e:e.split(""),a=t.lastIndexOf(n);return t.filter(((e,t)=>e!==n||t===a)).join("")};function l(e){if("number"==typeof e)return e;const n=e.replaceAll(/\s/g,"").split(""),t=n.reduce(((e,n)=>","===n||"."===n?n:e),null);return Number("."===t?a(n,".").replace(",",""):","===t?a(n,",").replace(".","").replace(",","."):n.join(""))}},42913:function(e,n,t){t.d(n,{_:function(){return s}});var a=t(10793),l=t(20439),r=t(44820);const g={locale:"no-NB",minimumFractionDigits:0,maximumFractionDigits:2,suffix:"kr"};function s(e,n){const t=(0,r.p)(e);if(isNaN(t))return e.toString();const s=Number.isInteger(t)?{}:{minimumFractionDigits:2,maximumFractionDigits:2},o=void 0!==(null==n?void 0:n.suffix)?n.suffix:g.suffix,{prefix:A,...i}={...g,...s,...n},c=null!=A&&A.length?""+A+a.vk:"",C=null!=o&&o.length?""+a.vk+o:"";return""+c+(0,l.u)(t,i)+C}},45915:function(e,n,t){t.d(n,{E:function(){return o}});var a=t(15119),l=t(26372),r=t.n(l),g=t(70079);const s=e=>{const n=(0,g.useRef)(null),{0:t,1:a}=(0,g.useState)(!1);return(0,g.useEffect)((()=>{n.current&&((e,n)=>{let t;!function a(){if(e.complete)return clearTimeout(t),void(null==n||n());t=window.setTimeout(a,50)}()})(n.current,(()=>{a(!0),null==e||e()}))}),[e]),[n,t]},o=e=>{let{className:n,placeholder:t,alt:l,...o}=e;const[A,i]=s(),[c,C]=(0,a.L)(400);return g.createElement("div",{ref:c,className:r()("jkl-image",n,{"jkl-image--loading":!i})},g.createElement("img",{className:"jkl-image__placeholder",alt:l,src:t||o.src}),g.createElement("img",Object.assign({alt:l,className:"jkl-image__image","data-testid":"jkl-image__image",ref:A,sizes:C.width+"px",loading:"lazy",decoding:"async"},o)))}},29674:function(e,n,t){t.d(n,{_:function(){return g}});var a=t(26372),l=t.n(a),r=t(70079);const g=e=>{let{variant:n="small",density:t,srOnly:a,children:g,standAlone:s,htmlFor:o,className:A="",...i}=e;const c=l()("jkl-label",A,{["jkl-label--"+n]:n,"jkl-label--sr-only":a}),C=s?"label":"span";return!s&&o&&(o=void 0),r.createElement(C,Object.assign({},i,{className:c,htmlFor:o,"data-density":t}),g)}},73110:function(e,n,t){t.d(n,{A:function(){return A}});var a=t(46746),l=t(52762),r=t(11607),g=t(26372),s=t.n(g),o=t(70079);const A=e=>{let{id:n,helpLabel:t,errorLabel:g,label:A,labelType:i="help",density:c,className:C,srOnly:I,...d}=e;const u=g||t||A,m="help"===i||t&&!g,p="warning"===i||g,k="error"===i,f="success"===i,b=u?s()("jkl-form-support-label",C,{"jkl-form-support-label--sr-only":I,"jkl-form-support-label--help":m,"jkl-form-support-label--error":k,"jkl-form-support-label--warning":p,"jkl-form-support-label--success":f}):"jkl-dormant-form-support-label",v=u?d:{},h=k?a.P:f?l.t:r.a;return o.createElement("span",Object.assign({id:n,className:b},v,{"data-density":c}),o.createElement(h,{variant:"small",className:"jkl-form-support-label__icon"}),o.createElement("span",null,g||t||A))}},49467:function(e,n,t){t.d(n,{P:function(){return m}});var a=t(16151),l=t(68998),r=t(81159),g=t(3438),s=t(96820),o=t(84490),A=t(60314),i=t(26372),c=t.n(i),C=t(70079);function I(e){return void 0===e&&(e=""),e.toLowerCase().replace(/[\W_]+/g,"")}function d(e,n){var t,a;let l=null;n&&(l=e.querySelector('[aria-selected="true"]:not([hidden])')),n&&l||(l=e.querySelector('[role="option"]')),null===(t=l)||void 0===t||t.focus(),e.scrollTop=(null===(a=l)||void 0===a?void 0:a.offsetTop)||0}const u=()=>{},m=(0,C.forwardRef)(((e,n)=>{const{id:t,name:i,items:m,value:p,label:k,labelProps:f,onChange:b,onBlur:v,onFocus:h,className:E,helpLabel:j,errorLabel:y,invalid:N,searchable:x=!1,inline:w=!1,defaultPrompt:B="Velg",density:D,width:T,maxShownOptions:Q=5,style:S,..._}=e,M=(0,g.M)(t||"jkl-select",{generateSuffix:!t}),V=M+"_label",U=M+"_button",P=M+"_search-input",{0:F,1:R}=(0,C.useState)(!1),O=(0,C.useCallback)((()=>{R((e=>!e))}),[]),L=Boolean(x),Z=L&&F,{0:G,1:X}=(0,C.useState)(""),H=(0,C.useCallback)((e=>!!e.label.toLowerCase().includes(G.toLowerCase())||"function"==typeof x&&x(G,e)),[x,G]),W=(0,C.useMemo)((()=>m.map(a.Y).map((e=>{const n=!L||""===G||H(e);return{...e,visible:n}}))),[m,L,G,H]),Y=(0,C.useMemo)((()=>void 0!==p&&m.some((e=>"string"==typeof e?e===p:e.value===p))),[p,m]),{0:z,1:J}=(0,C.useState)(Y&&void 0!==p?p:""),q=""!==z,K=(0,C.useMemo)((()=>{var e;return(null===(e=W.find((e=>e.value===z)))||void 0===e?void 0:e.label)||B}),[W,z,B]),$=(0,C.useRef)(null),ee=(0,C.useCallback)((e=>{$.current=e,n&&("function"==typeof n?n(e):n.current=e),e&&J(e.value)}),[$,n]),ne=(0,s.z)(p);(0,C.useEffect)((()=>{p!==ne&&J(void 0!==p&&Y?p:"")}),[J,p,ne,Y]);const te=(0,C.useCallback)((e=>{const n=e.value;X(""),J(n),O()}),[X,J,O]),ae=(0,s.z)(z);(0,C.useEffect)((()=>{void 0!==ae&&ae!==z&&z!==p&&(b&&b({type:"change",target:{name:i,value:z}}),$.current&&$.current.dispatchEvent(new Event("change",{bubbles:!0})))}),[b,i,p,z,ae]);const le=(0,C.useRef)(null),re=(0,C.useRef)(!1),ge=(0,C.useRef)(null),se=(0,C.useRef)(null),oe=(0,C.useCallback)(((e,n)=>{if(e&&!L){const e=n.current;e&&d(e,z)}else e?ge.current&&ge.current.focus():re.current&&se.current&&se.current.focus()}),[L,z]),[Ae]=(0,o.v)(F,{onFirstVisible:oe,onTransitionEnd:oe});(0,A.c)({ref:Ae});const ie=(0,C.useCallback)((e=>{const n=le.current;if(!(n&&n.contains(e.relatedTarget))){var t;if(L&&X(""),v)v({type:"blur",target:{name:i,value:z}}),null===(t=$.current)||void 0===t||t.dispatchEvent(new Event("focusout",{bubbles:!0}));re.current=!1,R(!1)}}),[v,L,i,z]),ce=(0,C.useCallback)((()=>{re.current||(h&&h({type:"change",target:{name:i,value:z}}),re.current=!0)}),[h,z,i]),Ce=(0,C.useCallback)((e=>{e.target.focus({preventScroll:!0})}),[]);(0,C.useEffect)((()=>{const e=$.current,n=ge.current,t=se.current,a=le.current;return null==e||e.addEventListener("focus",(()=>{Z?null==n||n.focus():null==t||t.focus()})),null==e||e.addEventListener("blur",(function(e){a&&a.contains(e.relatedTarget)&&e.preventDefault()})),()=>{null==e||e.removeEventListener("focus",(()=>{Z?null==n||n.focus():null==t||t.focus()})),null==e||e.removeEventListener("blur",(function(e){a&&a.contains(e.relatedTarget)&&e.preventDefault()}))}}),[Z]);const Ie=(0,C.useCallback)((e=>{"ArrowDown"!==e.key&&" "!==e.key||F?"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),R(!1)):(e.preventDefault(),e.stopPropagation(),R(!0))}),[R,F]),de=(0,C.useCallback)((e=>{if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();const n=Ae.current;n&&d(n,L?void 0:z)}else if("Escape"===e.key)e.preventDefault(),e.stopPropagation(),R(!1);else if("Tab"!==e.key||e.shiftKey)"Enter"===e.key&&F&&(e.preventDefault(),e.stopPropagation());else{const n=Ae.current;n&&(e.preventDefault(),e.stopPropagation(),d(n,z))}}),[R,Ae,z,L,F]),ue=(0,C.useCallback)((e=>{if("Tab"===e.key)e.preventDefault(),e.stopPropagation(),e.shiftKey&&ge.current?ge.current.focus():se.current&&(J(e.currentTarget.value),R(!1),se.current.focus());else if("ArrowUp"===e.key&&Ae.current&&ge.current){const n=Ae.current.querySelector('[role="option"]:not([hidden])');e.currentTarget.id===(null==n?void 0:n.id)&&ge.current&&ge.current.focus()}}),[R,Ae]);return(0,C.useEffect)((()=>{const e=e=>{"Escape"===e.key&&F&&R(!1)};return"undefined"!=typeof window&&F&&window.addEventListener("keydown",e),()=>{"undefined"!=typeof window&&window.removeEventListener("keydown",e)}}),[R,F]),C.createElement(C.Fragment,null,C.createElement("select",{name:i,tabIndex:-1,"data-testid":"jkl-native-select",className:"jkl-sr-only","aria-hidden":!0,ref:ee,value:z,onChange:u},C.createElement("option",{value:""})," ",W.map((e=>C.createElement("option",{key:M+"-opt-"+e.value,hidden:!e.visible,value:e.value},e.label)))),C.createElement(r.B,Object.assign({ref:le,"data-testid":"jkl-select",className:c()("jkl-select",E,{"jkl-select--inline":w,"jkl-select--open":F&&W.some((e=>e.visible)),"jkl-select--no-value":!q,"jkl-select--invalid":!!y||N})},_,{id:L?P:U,style:{"--jkl-select-max-shown-options":Q,...S},density:D,label:k,labelProps:{id:V,srOnly:w,...f,htmlFor:L?P:U},helpLabel:j,errorLabel:y,render:e=>C.createElement("div",{className:"jkl-select__outer-wrapper",style:{width:T}},L&&C.createElement("input",Object.assign({},e,{id:P,hidden:!Z,ref:ge,placeholder:"Søk",value:G,onChange:e=>X(e.target.value),"data-testid":"jkl-select__search-input",className:"jkl-select__search-input","aria-autocomplete":"list","aria-activedescendant":q?M+"__"+I(z):void 0,"aria-controls":M,"aria-expanded":F,role:"combobox",onKeyDown:de,onBlur:ie,onFocus:ce,onClick:e=>{e.stopPropagation()}})),C.createElement("button",Object.assign({},e,{id:U,ref:se,hidden:Z,type:"button",name:i+"-btn",className:c()("jkl-select__button",{"jkl-select__button--active-value":!!z}),"data-testid":"jkl-select__button","aria-label":(K||"Velg")+","+k,"aria-expanded":F,"aria-controls":M,onBlur:ie,onFocus:ce,onKeyDown:Ie,onClick:O,onMouseDown:e=>{var n;e.preventDefault(),null===(n=se.current)||void 0===n||n.focus()}}),K),C.createElement("div",{id:M,ref:Ae,role:"listbox",className:"jkl-select__options-menu",hidden:!F||W.every((e=>!e.visible)),"aria-labelledby":V,tabIndex:-1,"data-focus":"controlled"},W.map(((e,n)=>e.visible?C.createElement("button",{key:M+"-"+e.value,hidden:!e.visible,type:"button",id:M+"__"+I(e.value),className:"jkl-select__option","data-testid":"jkl-select__option","aria-selected":e.value===z,role:"option",value:e.value,"data-testautoid":"jkl-select__option-"+n,onBlur:ie,onFocus:ce,onKeyDown:ue,onClick:n=>{n.preventDefault(),te(e)},onMouseOver:Ce},e.label,e.description?C.createElement("span",{className:"jkl-select__option-description"},e.description):null):null))),C.createElement(l.K,{variant:"medium",pointingDown:!F,className:"jkl-select__arrow"}))})))}));m.displayName="Select"},8102:function(e,n,t){t.d(n,{Vp:function(){return A},_1:function(){return i},nS:function(){return c},rD:function(){return I},wq:function(){return C}});var a=t(10188),l=t(79661),r=t(26372),g=t.n(r),s=t(70079);function o(e){const n=n=>{let{className:t,density:r,dismissAction:o,children:A,...i}=n;return s.createElement("span",Object.assign({className:g()("jkl-tag",{"jkl-tag--info":"info"===e,"jkl-tag--error":"error"===e,"jkl-tag--warning":"warning"===e,"jkl-tag--success":"success"===e},t),"data-density":r},i),A,o&&s.createElement(a.h,{className:"jkl-tag__dismiss-action",density:r,title:o.label,onClick:o.onClick,onFocus:o.onFocus,onBlur:o.onBlur},s.createElement(l.T,{variant:"small",bold:!0})))};return n.displayName=function(e){switch(e){case"info":return"InfoTag";case"error":return"ErrorTag";case"warning":return"WarningTag";case"success":return"SuccessTag";default:return"Tag"}}(e),n}const A=o(),i=o("info"),c=o("error"),C=o("warning"),I=o("success")},10097:function(e,n,t){t.d(n,{B:function(){return g}});var a=t(70079);function l(e,n){const t={...n};for(const a in n){const l=e[a],r=n[a];/^on[A-Z]/.test(a)&&(l&&r?t[a]=function(){r.apply(void 0,arguments),l.apply(void 0,arguments)}:l&&(t[a]=l)),"style"===a&&(t[a]={...l,...r}),"className"===a&&(t[a]=[l,r].filter(Boolean).join(" "))}return{...e,...t}}function r(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return e=>n.forEach((n=>{"function"==typeof n?n(e):null!=n&&(n.current=e)}))}const g=a.forwardRef((function(e,n){let{children:t,...g}=e;if(a.isValidElement(t))return a.cloneElement(t,{...l(g,t.props),ref:r(n,t.ref)});if(a.Children.count(t)>1)throw new Error("Du kan kun bruke ett enkelt React-element som children i en komponent med asChild");return null}))}}]);