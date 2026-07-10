import{r as f,j as a}from"./iframe-DtR4IeDC.js";import{c as G}from"./clsx-B-dksMZM.js";import{F as C}from"./Flex-8Ziw3g66.js";import{B as W}from"./Button-Bu5jRL7_.js";import{A as z,a as J}from"./ArrowRightIcon-Zi10tcX3.js";import{T as _}from"./Text-6ThvhIY_.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-Dd3JR44I.js";import"./mergeRefs-5ukaVgEN.js";import"./usePreviousValue-DEB71QFo.js";import"./Loader-BLPI6cwE.js";import"./useDelayedRender-C1uXgwHn.js";import"./Icon-090sEyNP.js";const B=1,Y=navigator?.language?navigator.language:"nb-NO",P=Q(),v=5;function Q(t=navigator.language){const n=new Intl.DateTimeFormat(t,{month:"long"});return Array.from({length:12},(o,l)=>n.format(new Date(2e3,l,1)))}function X(t,n){const o=new Date,l=Number.isFinite(t)?t:o.getFullYear(),i=Number.isFinite(n)?n:o.getMonth(),d=new Date(l,i+1,0).getDate(),g=(new Date(l,i,1).getDay()-B+7)%7,m=[...Array(g).fill(null),...Array.from({length:d},(c,p)=>p+1)];for(;m.length%7!==0;)m.push(null);const D=[];for(let c=0;c<m.length;c+=7)D.push(m.slice(c,c+7));const L=new Intl.DateTimeFormat(Y,{weekday:"long"});return{headers:Array.from({length:7},(c,p)=>{const b=new Date(2024,0,7+(B+p)%7);return L.format(b)}),weeks:D}}const Z=(t,n,o,l)=>{const i=n?new Date(n.toString()):null,d=o?new Date(o.toString()):null;if(i&&(i.setHours(0,0,0,0),t<i)||d&&(d.setHours(0,0,0,0),t>d))return!0;if(l){const h=t.getDay();if(h===0||h===6)return!0}return!1};function O(t){if(t==null)return;if(t instanceof Date)return t;const n=typeof t=="number"?new Date(t):new Date(t.toString());return Number.isNaN(n.getTime())?void 0:n}function ee(t,n,o){const l=n?Math.max(t-v,n.getFullYear()):t-v,i=o?Math.min(t+v,o.getFullYear()):t+v,d=Math.max(i-l+1,1);return Array.from({length:d},(h,g)=>l+g)}const q=t=>{const{value:n,defaultValue:o,className:l,onChange:i,name:d,noAccessory:h,disableBeforeDate:g,disableAfterDate:m,disableWeekends:D=!1,hideNavigation:L=!1,hideWeekdayLabels:I=!1,...c}=t,p=n??o,b=typeof p=="number"?new Date(p):p?new Date(p.toString()):new Date,S=f.useMemo(()=>O(g),[g]),H=f.useMemo(()=>O(m),[m]),[r,y]=f.useState({month:b.getMonth(),year:b.getFullYear()}),[A,E]=f.useState(b);f.useEffect(()=>{if(typeof n>"u")return;const e=typeof n=="number"?new Date(n):n?new Date(n.toString()):new Date;E(e),y({month:e.getMonth(),year:e.getFullYear()})},[n]);const V=f.useMemo(()=>ee(r.year,S,H),[r.year,S,H]),{headers:R,weeks:U}=f.useMemo(()=>X(Number(r.year),Number(r.month)),[r]);return a.jsxs("fieldset",{className:G("jkl-calendar-picker",l),"data-no-accessory":h,...c,children:[a.jsx("legend",{className:"jkl-sr-only",children:"Datovelger (kalender)"}),!L&&a.jsxs(C,{gap:"s",justifyContent:"space-between",className:"navigation",children:[a.jsx(W,{type:"button",icon:a.jsx(z,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>y(({month:e,year:u})=>{const s=new Date(u,e-1,1);return{month:s.getMonth(),year:s.getFullYear()}})}),a.jsxs(C,{gap:"none",className:"dropdowns",children:[a.jsx("select",{"aria-label":"Velg måned",name:"month",value:r.month,onChange:e=>y({...r,month:Number(e.target.value)}),children:P.map((e,u)=>a.jsx("option",{value:u,children:e},e))}),a.jsx("select",{"aria-label":"Velg år",name:"year",value:r.year,onChange:e=>y({...r,year:Number(e.target.value)}),children:V.map(e=>a.jsx("option",{value:e,children:e},e))})]}),a.jsx(W,{type:"button",icon:a.jsx(J,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>y(({month:e,year:u})=>{const s=new Date(u,e+1,1);return{month:s.getMonth(),year:s.getFullYear()}})})]}),a.jsxs("table",{className:"month",children:[a.jsx("caption",{className:"jkl-sr-only",children:"Kalender"}),a.jsx("thead",{className:"weekdays",children:a.jsx("tr",{children:R.map((e,u)=>a.jsx("th",{scope:"col",className:"weekday","data-disabled":D,"aria-label":e,children:a.jsx(_,{bold:!0,srOnly:I,children:e.charAt(0).toUpperCase()})},u))})}),a.jsx("tbody",{children:U.map((e,u)=>a.jsx("tr",{className:"week",children:e.map((s,K)=>a.jsx("td",{children:s?a.jsxs("label",{className:"day",children:[a.jsx("input",{type:"radio",name:d,disabled:!s||Z(new Date(r.year,r.month,Number(s)),g,m,D),"aria-label":new Date(r.year,r.month,Number(s)).toLocaleDateString(Y),value:new Date(r.year,r.month,Number(s)).toString(),checked:A.getDate()===Number(s)&&A.getMonth()===r.month&&A.getFullYear()===r.year,onChange:$=>{const F=new Date(r.year,r.month,Number(s));E(F),i?.($,F)}}),a.jsx(_,{as:"span",short:!0,"aria-hidden":!0,children:s})]}):""},K))},`${e}-${u}`))})]})]})};q.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{noAccessory:{required:!1,tsType:{name:"boolean"},description:`Fjerner ramme-stilene så komponenten enklere kan brukes i andre elementer

@default false`},value:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Dato, streng eller tall med gyldig dato.

@example new Date(2026, 7, 20)
@example "2026-7-20"
@example 20409545455

@default new Date()`},defaultValue:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Forhåndsvalgt dato

@default undefined`},disableAfterDate:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Siste valgbare dato

@default undefined`},disableBeforeDate:{required:!1,tsType:{name:"union",raw:'InputHTMLAttributes<HTMLInputElement>["value"] | Date',elements:[{name:'InputHTMLAttributes["value"]',raw:'InputHTMLAttributes<HTMLInputElement>["value"]'},{name:"Date"}]},description:`Første valgbare dato

@default undefined`},disableWeekends:{required:!1,tsType:{name:"boolean"},description:`Fjern helgedager som valgbare datoer

@default false`},hideNavigation:{required:!1,tsType:{name:"boolean"},description:`Fjern navigasjonsmenyen øverst

@default false`},hideWeekdayLabels:{required:!1,tsType:{name:"boolean"},description:`Fjern headeren med ukedager

@default false`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, date: Date) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:ae}=__STORYBOOK_MODULE_TEST__,w=new Date,te=new Date(new Date(w).setDate(new Date(w).getDate()+7)),ne=new Date(new Date(w).setDate(new Date(w).getDate()-7)),De={title:"Komponenter/Calendar",component:q,args:{disabled:!1,disableWeekends:!1,hideWeekdayLabels:!1,hideNavigation:!1,noAccessory:!1,onChange:ae()},argTypes:{disableBeforeDate:{control:"date"},disableAfterDate:{control:"date"},defaultValue:{control:"date"},value:{control:"date"}}},T={name:"Calendar",args:{value:w}},N={name:"Disabled helger",args:{disableWeekends:!0}},k={name:"Start- og sluttdato",args:{disableAfterDate:te,disableBeforeDate:ne}},x={name:"Uten navigasjon",args:{hideNavigation:!0}},j={name:"Skjul benevner på uke",args:{hideWeekdayLabels:!0}},M={name:"Bare dager",args:{defaultValue:new Date(0,0,1),disableBeforeDate:new Date(0,0,1),disableAfterDate:new Date(0,0,31),hideNavigation:!0,hideWeekdayLabels:!0,noAccessory:!0}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Calendar",
  args: {
    value: today
  }
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Disabled helger",
  args: {
    disableWeekends: true
  }
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Start- og sluttdato",
  args: {
    disableAfterDate: nextWeek,
    disableBeforeDate: previousWeek
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Uten navigasjon",
  args: {
    hideNavigation: true
  }
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Skjul benevner på uke",
  args: {
    hideWeekdayLabels: true
  }
}`,...j.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Bare dager",
  args: {
    defaultValue: new Date(0, 0, 1),
    disableBeforeDate: new Date(0, 0, 1),
    disableAfterDate: new Date(0, 0, 31),
    hideNavigation: true,
    hideWeekdayLabels: true,
    noAccessory: true
  }
}`,...M.parameters?.docs?.source}}};const be=["CalendarStory","NoWeekends","StartEnd","HideNav","NoLabels","OnlyDays"];export{T as CalendarStory,x as HideNav,j as NoLabels,N as NoWeekends,M as OnlyDays,k as StartEnd,be as __namedExportsOrder,De as default};
