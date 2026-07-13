import{r as p,j as a}from"./iframe-BexQfyWH.js";import{c as G}from"./clsx-B-dksMZM.js";import{F as Y}from"./Flex-CRKokY0T.js";import{B as O}from"./Button-DDbeUI4T.js";import{A as z,a as J}from"./ArrowRightIcon-CQvYFJIT.js";import{T as V}from"./Text-odVzqvwi.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-CzjPnB3w.js";import"./mergeRefs-O-s_ZNVy.js";import"./usePreviousValue-Bv_r3NNP.js";import"./Loader-BD1LXNFC.js";import"./useDelayedRender-rlSU-o2h.js";import"./Icon-BCY1HP59.js";const q=1,W="nb-NO",P=Q(W),v=5;function Q(n){const r=new Intl.DateTimeFormat(n,{month:"long"});return Array.from({length:12},(l,i)=>r.format(new Date(2e3,i,1)))}function X(n,r){const l=new Date,i=Number.isFinite(n)?n:l.getFullYear(),s=Number.isFinite(r)?r:l.getMonth(),h=new Date(i,s+1,0).getDate(),c=(new Date(i,s,1).getDay()-q+7)%7,g=[...Array(c).fill(null),...Array.from({length:h},(d,u)=>u+1)];for(;g.length%7!==0;)g.push(null);const f=[];for(let d=0;d<g.length;d+=7)f.push(g.slice(d,d+7));const S=new Intl.DateTimeFormat(W,{weekday:"long"});return{headers:Array.from({length:7},(d,u)=>{const y=new Date(2024,0,7+(q+u)%7);return S.format(y)}),weeks:f}}const Z=(n,r,l,i)=>{if(r){const s=new Date(r);if(s.setHours(0,0,0,0),n<s)return!0}if(l){const s=new Date(l);if(s.setHours(0,0,0,0),n>s)return!0}if(i){const s=n.getDay();if(s===0||s===6)return!0}return!1};function E(n){return n instanceof Date?new Date(n.getTime()):new Date(n)}function ee(n,r,l){const i=r?Math.max(n-v,r.getFullYear()):n-v,s=l?Math.min(n+v,l.getFullYear()):n+v,h=Math.max(s-i+1,1);return Array.from({length:h},(b,c)=>i+c)}const I=n=>{const{value:r,defaultValue:l,className:i,onChange:s,noAccessory:h,min:b,max:c,name:g="dato",disableWeekends:f=!1,hideNavigation:S=!1,hideWeekdayLabels:A=!1,...d}=n,u=r??l,y=u instanceof Date?u:typeof u=="string"?new Date(u):new Date,[F,L]=p.useState(y),C=p.useMemo(()=>b?E(b):void 0,[b]),M=p.useMemo(()=>c?E(c):void 0,[c]),[t,D]=p.useState({month:y.getMonth(),year:y.getFullYear()});p.useEffect(()=>{if(typeof r>"u")return;const e=E(r)??new Date;L(e),D({month:e.getMonth(),year:e.getFullYear()})},[r]);const H=p.useMemo(()=>ee(t.year,C,M),[t.year,C,M]),{headers:B,weeks:R}=p.useMemo(()=>X(Number(t.year),Number(t.month)),[t]);return a.jsxs("div",{className:G("jkl-calendar-picker",i),"data-no-accessory":h,...d,children:[!S&&a.jsxs(Y,{gap:"s",justifyContent:"space-between",className:"navigation",children:[a.jsx(O,{type:"button",icon:a.jsx(z,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>D(({month:e,year:m})=>{const o=new Date(m,e-1,1);return{month:o.getMonth(),year:o.getFullYear()}})}),a.jsxs(Y,{gap:"none",className:"dropdowns",children:[a.jsx("select",{"aria-label":"Velg måned",value:t.month,onChange:e=>D({...t,month:Number(e.target.value)}),children:P.map((e,m)=>a.jsx("option",{value:m,children:e},e))}),a.jsx("select",{"aria-label":"Velg år",value:t.year,onChange:e=>D({...t,year:Number(e.target.value)}),children:H.map(e=>a.jsx("option",{value:e,children:e},e))})]}),a.jsx(O,{type:"button",icon:a.jsx(J,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>D(({month:e,year:m})=>{const o=new Date(m,e+1,1);return{month:o.getMonth(),year:o.getFullYear()}})})]}),a.jsxs("table",{className:"month",children:[a.jsx("caption",{className:"jkl-sr-only",children:"Kalender"}),a.jsx("thead",{className:"weekdays",children:a.jsx("tr",{children:B.map((e,m)=>a.jsx("th",{scope:"col",className:"weekday","data-disabled":f,"aria-label":e,children:a.jsx(V,{bold:!0,srOnly:A,children:e.charAt(0).toUpperCase()})},m))})}),a.jsx("tbody",{children:R.map((e,m)=>a.jsx("tr",{className:"week",children:e.map((o,U)=>a.jsx("td",{children:o?a.jsxs("label",{className:"day",children:[a.jsx("input",{type:"radio",name:g,disabled:Z(new Date(t.year,t.month,Number(o)),C,M,f),"aria-label":new Date(t.year,t.month,Number(o)).toLocaleDateString(W),value:new Date(t.year,t.month,Number(o)).toString(),checked:F.getDate()===Number(o)&&F.getMonth()===t.month&&F.getFullYear()===t.year,onChange:K=>{const _=new Date(t.year,t.month,Number(o));L(_),s?.(K,_)}}),a.jsx(V,{as:"span",short:!0,"aria-hidden":!0,children:o})]}):""},U))},`${e}-${m}`))})]})]})};I.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{noAccessory:{required:!1,tsType:{name:"boolean"},description:`Fjerner ramme-stilene så komponenten enklere kan brukes i andre elementer

@default false`},value:{required:!1,tsType:{name:"union",raw:"ValidDate | Date",elements:[{name:"literal",value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:"Date"}]},description:`Dato, eller gyldig datostreng (YYYY-MM-DD)

@example new Date(2026, 7, 20)
@example "2026-07-20"

@default new Date()`},defaultValue:{required:!1,tsType:{name:"union",raw:"ValidDate | Date",elements:[{name:"literal",value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:"Date"}]},description:`Forhåndsvalgt dato

@default undefined`},max:{required:!1,tsType:{name:"union",raw:"ValidDate | Date",elements:[{name:"literal",value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:"Date"}]},description:`Siste valgbare dato

@default undefined`},min:{required:!1,tsType:{name:"union",raw:"ValidDate | Date",elements:[{name:"literal",value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:"Date"}]},description:`Første valgbare dato

@default undefined`},disableWeekends:{required:!1,tsType:{name:"boolean"},description:`Fjern helgedager som valgbare datoer

@default false`},hideNavigation:{required:!1,tsType:{name:"boolean"},description:`Fjern navigasjonsmenyen øverst

@default false`},hideWeekdayLabels:{required:!1,tsType:{name:"boolean"},description:`Fjern headeren med ukedager

@default false`},name:{required:!1,tsType:{name:"string"},description:`Navn på input-feltet

@default undefined`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, date: Date) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:ae}=__STORYBOOK_MODULE_TEST__,w=new Date,ne=new Date(new Date(w).setDate(w.getDate()+7)),te=new Date(new Date(w).setDate(w.getDate()-7)),fe={title:"Komponenter/Calendar",component:I,args:{disableWeekends:!1,hideWeekdayLabels:!1,hideNavigation:!1,noAccessory:!1,onChange:ae()},argTypes:{min:{control:"date"},max:{control:"date"},defaultValue:{control:"date"},value:{control:"date"}}},x={name:"Calendar",args:{value:w}},N={name:"Disabled helger",args:{disableWeekends:!0}},k={name:"Start- og sluttdato",args:{max:ne,min:te}},j={name:"Uten navigasjon",args:{hideNavigation:!0}},$={name:"Skjul benevner på uke",args:{hideWeekdayLabels:!0}},T={name:"Bare dager",args:{defaultValue:new Date(0,0,1),min:new Date(0,0,1),max:new Date(0,0,31),hideNavigation:!0,hideWeekdayLabels:!0,noAccessory:!0}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Calendar",
  args: {
    value: today
  }
}`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Disabled helger",
  args: {
    disableWeekends: true
  }
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Start- og sluttdato",
  args: {
    max: nextWeek,
    min: previousWeek
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Uten navigasjon",
  args: {
    hideNavigation: true
  }
}`,...j.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Skjul benevner på uke",
  args: {
    hideWeekdayLabels: true
  }
}`,...$.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Bare dager",
  args: {
    defaultValue: new Date(0, 0, 1),
    min: new Date(0, 0, 1),
    max: new Date(0, 0, 31),
    hideNavigation: true,
    hideWeekdayLabels: true,
    noAccessory: true
  }
}`,...T.parameters?.docs?.source}}};const ye=["CalendarStory","NoWeekends","StartEnd","HideNav","NoLabels","OnlyDays"];export{x as CalendarStory,j as HideNav,$ as NoLabels,N as NoWeekends,T as OnlyDays,k as StartEnd,ye as __namedExportsOrder,fe as default};
