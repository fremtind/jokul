import{r as h,j as a}from"./iframe-jR_QKpJn.js";import{c as G}from"./clsx-B-dksMZM.js";import{F as C}from"./Flex-CewpwCjP.js";import{B as W}from"./Button-CT9Xbp7X.js";import{A as z,a as J}from"./ArrowRightIcon-fdtpj4wk.js";import{T as _}from"./Text-BffiMEMS.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-BmGJ6vd5.js";import"./mergeRefs-jip3TPOH.js";import"./usePreviousValue-CaPP4WgE.js";import"./Loader-AUKWdQYd.js";import"./useDelayedRender-wxBFHHvf.js";import"./Icon-B4HG5nD5.js";const O=1,q=navigator?.language?navigator.language:"nb-NO",P=Q(),v=5;function Q(n=navigator.language){const t=new Intl.DateTimeFormat(n,{month:"long"});return Array.from({length:12},(s,l)=>t.format(new Date(2e3,l,1)))}function X(n,t){const s=new Date,l=Number.isFinite(n)?n:s.getFullYear(),i=Number.isFinite(t)?t:s.getMonth(),u=new Date(l,i+1,0).getDate(),g=(new Date(l,i,1).getDay()-O+7)%7,m=[...Array(g).fill(null),...Array.from({length:u},(c,p)=>p+1)];for(;m.length%7!==0;)m.push(null);const y=[];for(let c=0;c<m.length;c+=7)y.push(m.slice(c,c+7));const L=new Intl.DateTimeFormat(q,{weekday:"long"});return{headers:Array.from({length:7},(c,p)=>{const D=new Date(2024,0,7+(O+p)%7);return L.format(D)}),weeks:y}}const Z=(n,t,s,l)=>{const i=t?new Date(t.toString()):null,u=s?new Date(s.toString()):null;if(i&&(i.setHours(0,0,0,0),n<i)||u&&(u.setHours(0,0,0,0),n>u))return!0;if(l){const f=n.getDay();if(f===0||f===6)return!0}return!1};function Y(n){if(n==null)return;if(n instanceof Date)return n;const t=n.toString(),s=/^\d{4}-\d{2}-\d{2}$/.test(t)?new Date(`${t}T00:00:00`):new Date(t);return Number.isNaN(s.getTime())?void 0:s}function ee(n,t,s){const l=t?Math.max(n-v,t.getFullYear()):n-v,i=s?Math.min(n+v,s.getFullYear()):n+v,u=Math.max(i-l+1,1);return Array.from({length:u},(f,g)=>l+g)}const V=n=>{const{value:t,defaultValue:s,className:l,onChange:i,name:u,noAccessory:f,min:g,max:m,disableWeekends:y=!1,hideNavigation:L=!1,hideWeekdayLabels:A=!1,...c}=n,p=t??s,D=typeof p=="number"?new Date(p):p?new Date(p.toString()):new Date,[I,S]=h.useState(D),H=h.useMemo(()=>Y(g),[g]),E=h.useMemo(()=>Y(m),[m]),[r,b]=h.useState({month:D.getMonth(),year:D.getFullYear()});h.useEffect(()=>{if(typeof t>"u")return;const e=typeof t=="number"?new Date(t):t?new Date(t.toString()):new Date;S(e),b({month:e.getMonth(),year:e.getFullYear()})},[t]);const B=h.useMemo(()=>ee(r.year,H,E),[r.year,H,E]),{headers:R,weeks:U}=h.useMemo(()=>X(Number(r.year),Number(r.month)),[r]);return a.jsxs("fieldset",{className:G("jkl-calendar-picker",l),"data-no-accessory":f,...c,children:[a.jsx("legend",{className:"jkl-sr-only",children:"Datovelger (kalender)"}),!L&&a.jsxs(C,{gap:"s",justifyContent:"space-between",className:"navigation",children:[a.jsx(W,{type:"button",icon:a.jsx(z,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>b(({month:e,year:d})=>{const o=new Date(d,e-1,1);return{month:o.getMonth(),year:o.getFullYear()}})}),a.jsxs(C,{gap:"none",className:"dropdowns",children:[a.jsx("select",{"aria-label":"Velg måned",name:"month",value:r.month,onChange:e=>b({...r,month:Number(e.target.value)}),children:P.map((e,d)=>a.jsx("option",{value:d,children:e},e))}),a.jsx("select",{"aria-label":"Velg år",name:"year",value:r.year,onChange:e=>b({...r,year:Number(e.target.value)}),children:B.map(e=>a.jsx("option",{value:e,children:e},e))})]}),a.jsx(W,{type:"button",icon:a.jsx(J,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>b(({month:e,year:d})=>{const o=new Date(d,e+1,1);return{month:o.getMonth(),year:o.getFullYear()}})})]}),a.jsxs("table",{className:"month",children:[a.jsx("caption",{className:"jkl-sr-only",children:"Kalender"}),a.jsx("thead",{className:"weekdays",children:a.jsx("tr",{children:R.map((e,d)=>a.jsx("th",{scope:"col",className:"weekday","data-disabled":y,"aria-label":e,children:a.jsx(_,{bold:!0,srOnly:A,children:e.charAt(0).toUpperCase()})},d))})}),a.jsx("tbody",{children:U.map((e,d)=>a.jsx("tr",{className:"week",children:e.map((o,$)=>a.jsx("td",{children:o?a.jsxs("label",{className:"day",children:[a.jsx("input",{type:"radio",name:u,disabled:!o||Z(new Date(r.year,r.month,Number(o)),g,m,y),"aria-label":new Date(r.year,r.month,Number(o)).toLocaleDateString(q),value:new Date(r.year,r.month,Number(o)).toString(),checked:I.getDate()===Number(o)&&I.getMonth()===r.month&&I.getFullYear()===r.year,onChange:K=>{const F=new Date(r.year,r.month,Number(o));S(F),i?.(K,F)}}),a.jsx(_,{as:"span",short:!0,"aria-hidden":!0,children:o})]}):""},$))},`${e}-${d}`))})]})]})};V.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{noAccessory:{required:!1,tsType:{name:"boolean"},description:`Fjerner ramme-stilene så komponenten enklere kan brukes i andre elementer

@default false`},value:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Dato, streng eller tall med gyldig dato.

@example new Date(2026, 7, 20)
@example "2026-7-20"
@example 20409545455

@default new Date()`},defaultValue:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Forhåndsvalgt dato

@default undefined`},max:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Siste valgbare dato

@default undefined`},min:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Første valgbare dato

@default undefined`},disableWeekends:{required:!1,tsType:{name:"boolean"},description:`Fjern helgedager som valgbare datoer

@default false`},hideNavigation:{required:!1,tsType:{name:"boolean"},description:`Fjern navigasjonsmenyen øverst

@default false`},hideWeekdayLabels:{required:!1,tsType:{name:"boolean"},description:`Fjern headeren med ukedager

@default false`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, date: Date) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:ae}=__STORYBOOK_MODULE_TEST__,w=new Date,te=new Date(new Date(w).setDate(new Date(w).getDate()+7)),ne=new Date(new Date(w).setDate(new Date(w).getDate()-7)),ye={title:"Komponenter/Calendar",component:V,args:{disabled:!1,disableWeekends:!1,hideWeekdayLabels:!1,hideNavigation:!1,noAccessory:!1,onChange:ae()},argTypes:{min:{control:"date"},max:{control:"date"},defaultValue:{control:"date"},value:{control:"date"}}},x={name:"Calendar",args:{value:w}},T={name:"Disabled helger",args:{disableWeekends:!0}},N={name:"Start- og sluttdato",args:{max:te,min:ne}},k={name:"Uten navigasjon",args:{hideNavigation:!0}},j={name:"Skjul benevner på uke",args:{hideWeekdayLabels:!0}},M={name:"Bare dager",args:{defaultValue:new Date(0,0,1),min:new Date(0,0,1),max:new Date(0,0,31),hideNavigation:!0,hideWeekdayLabels:!0,noAccessory:!0}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Calendar",
  args: {
    value: today
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Disabled helger",
  args: {
    disableWeekends: true
  }
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Start- og sluttdato",
  args: {
    max: nextWeek,
    min: previousWeek
  }
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Uten navigasjon",
  args: {
    hideNavigation: true
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Skjul benevner på uke",
  args: {
    hideWeekdayLabels: true
  }
}`,...j.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Bare dager",
  args: {
    defaultValue: new Date(0, 0, 1),
    min: new Date(0, 0, 1),
    max: new Date(0, 0, 31),
    hideNavigation: true,
    hideWeekdayLabels: true,
    noAccessory: true
  }
}`,...M.parameters?.docs?.source}}};const De=["CalendarStory","NoWeekends","StartEnd","HideNav","NoLabels","OnlyDays"];export{x as CalendarStory,k as HideNav,j as NoLabels,T as NoWeekends,M as OnlyDays,N as StartEnd,De as __namedExportsOrder,ye as default};
