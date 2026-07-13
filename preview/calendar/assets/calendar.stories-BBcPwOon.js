import{r as p,j as a}from"./iframe-BXOzOWGo.js";import{c as K}from"./clsx-B-dksMZM.js";import{F as E}from"./Flex-MyIti3Kc.js";import{B as L}from"./Button-CNj0K-LT.js";import{A as G,a as z}from"./ArrowRightIcon-3f3SAuqr.js";import{T as _}from"./Text-DEn-ffXU.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-DNNVx_Ui.js";import"./mergeRefs-DG22XIY-.js";import"./usePreviousValue-DIHU020c.js";import"./Loader-DnQUAIA9.js";import"./useDelayedRender-DFKgT_rk.js";import"./Icon-BVknPPAF.js";const Y=1,V="nb-NO",J=P(),w=5;function P(r=navigator.language){const n=new Intl.DateTimeFormat(r,{month:"long"});return Array.from({length:12},(o,l)=>n.format(new Date(2e3,l,1)))}function Q(r,n){const o=new Date,l=Number.isFinite(r)?r:o.getFullYear(),i=Number.isFinite(n)?n:o.getMonth(),h=new Date(l,i+1,0).getDate(),u=(new Date(l,i,1).getDay()-Y+7)%7,c=[...Array(u).fill(null),...Array.from({length:h},(m,g)=>g+1)];for(;c.length%7!==0;)c.push(null);const v=[];for(let m=0;m<c.length;m+=7)v.push(c.slice(m,m+7));const T=new Intl.DateTimeFormat(V,{weekday:"long"});return{headers:Array.from({length:7},(m,g)=>{const f=new Date(2024,0,7+(Y+g)%7);return T.format(f)}),weeks:v}}const X=(r,n,o,l)=>{if(n&&(n.setHours(0,0,0,0),r<n)||o&&(o.setHours(0,0,0,0),r>o))return!0;if(l){const i=r.getDay();if(i===0||i===6)return!0}return!1};function O(r){return new Date(r)}function Z(r,n,o){const l=n?Math.max(r-w,n.getFullYear()):r-w,i=o?Math.min(r+w,o.getFullYear()):r+w,h=Math.max(i-l+1,1);return Array.from({length:h},(b,u)=>l+u)}const I=r=>{const{value:n,defaultValue:o,className:l,onChange:i,noAccessory:h,min:b,max:u,disableWeekends:c=!1,hideNavigation:v=!1,hideWeekdayLabels:T=!1,...M}=r,m=n??o,g=typeof m=="string"?new Date(m):new Date,[f,W]=p.useState(g),F=p.useMemo(()=>b&&O(b),[b]),C=p.useMemo(()=>u&&O(u),[u]),[t,y]=p.useState({month:g.getMonth(),year:g.getFullYear()});p.useEffect(()=>{if(typeof n>"u")return;const e=typeof n=="number"?new Date(n):n?new Date(n.toString()):new Date;W(e),y({month:e.getMonth(),year:e.getFullYear()})},[n]);const q=p.useMemo(()=>Z(t.year,F,C),[t.year,F,C]),{headers:H,weeks:B}=p.useMemo(()=>Q(Number(t.year),Number(t.month)),[t]);return a.jsxs("div",{className:K("jkl-calendar-picker",l),"data-no-accessory":h,...M,children:[a.jsx("legend",{className:"jkl-sr-only",children:"Datovelger (kalender)"}),!v&&a.jsxs(E,{gap:"s",justifyContent:"space-between",className:"navigation",children:[a.jsx(L,{type:"button",icon:a.jsx(G,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>y(({month:e,year:d})=>{const s=new Date(d,e-1,1);return{month:s.getMonth(),year:s.getFullYear()}})}),a.jsxs(E,{gap:"none",className:"dropdowns",children:[a.jsx("select",{"aria-label":"Velg måned",name:"month",value:t.month,onChange:e=>y({...t,month:Number(e.target.value)}),children:J.map((e,d)=>a.jsx("option",{value:d,children:e},e))}),a.jsx("select",{"aria-label":"Velg år",name:"year",value:t.year,onChange:e=>y({...t,year:Number(e.target.value)}),children:q.map(e=>a.jsx("option",{value:e,children:e},e))})]}),a.jsx(L,{type:"button",icon:a.jsx(z,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>y(({month:e,year:d})=>{const s=new Date(d,e+1,1);return{month:s.getMonth(),year:s.getFullYear()}})})]}),a.jsxs("table",{className:"month",children:[a.jsx("caption",{className:"jkl-sr-only",children:"Kalender"}),a.jsx("thead",{className:"weekdays",children:a.jsx("tr",{children:H.map((e,d)=>a.jsx("th",{scope:"col",className:"weekday","data-disabled":c,"aria-label":e,children:a.jsx(_,{bold:!0,srOnly:T,children:e.charAt(0).toUpperCase()})},d))})}),a.jsx("tbody",{children:B.map((e,d)=>a.jsx("tr",{className:"week",children:e.map((s,R)=>a.jsx("td",{children:s?a.jsxs("label",{className:"day",children:[a.jsx("input",{type:"radio",name:"dag",disabled:!s||X(new Date(t.year,t.month,Number(s)),F,C,c),"aria-label":new Date(t.year,t.month,Number(s)).toLocaleDateString(V),value:new Date(t.year,t.month,Number(s)).toString(),checked:f.getDate()===Number(s)&&f.getMonth()===t.month&&f.getFullYear()===t.year,onChange:U=>{const A=new Date(t.year,t.month,Number(s));W(A),i?.(U,A)}}),a.jsx(_,{as:"span",short:!0,"aria-hidden":!0,children:s})]}):""},R))},`${e}-${d}`))})]})]})};I.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{noAccessory:{required:!1,tsType:{name:"boolean"},description:`Fjerner ramme-stilene så komponenten enklere kan brukes i andre elementer

@default false`},value:{required:!1,tsType:{name:"union",raw:"ValidDate | Date",elements:[{name:"literal",value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:"Date"}]},description:`Dato, eller gyldig datostreng (YYYY-MM-DD)

@example new Date(2026, 7, 20)
@example "2026-07-20"

@default new Date()`},defaultValue:{required:!1,tsType:{name:"union",raw:"ValidDate | Date",elements:[{name:"literal",value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:"Date"}]},description:`Forhåndsvalgt dato

@default undefined`},max:{required:!1,tsType:{name:"union",raw:"ValidDate | Date",elements:[{name:"literal",value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:"Date"}]},description:`Siste valgbare dato

@default undefined`},min:{required:!1,tsType:{name:"union",raw:"ValidDate | Date",elements:[{name:"literal",value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:"Date"}]},description:`Første valgbare dato

@default undefined`},disableWeekends:{required:!1,tsType:{name:"boolean"},description:`Fjern helgedager som valgbare datoer

@default false`},hideNavigation:{required:!1,tsType:{name:"boolean"},description:`Fjern navigasjonsmenyen øverst

@default false`},hideWeekdayLabels:{required:!1,tsType:{name:"boolean"},description:`Fjern headeren med ukedager

@default false`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, date: Date) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:ee}=__STORYBOOK_MODULE_TEST__,D=new Date,ae=new Date(new Date(D).setDate(D.getDate()+7)),ne=new Date(new Date(D).setDate(D.getDate()-7)),be={title:"Komponenter/Calendar",component:I,args:{disableWeekends:!1,hideWeekdayLabels:!1,hideNavigation:!1,noAccessory:!1,onChange:ee()},argTypes:{min:{control:"date"},max:{control:"date"},defaultValue:{control:"date"},value:{control:"date"}}},x={name:"Calendar",args:{value:D}},k={name:"Disabled helger",args:{disableWeekends:!0}},N={name:"Start- og sluttdato",args:{max:ae,min:ne}},j={name:"Uten navigasjon",args:{hideNavigation:!0}},$={name:"Skjul benevner på uke",args:{hideWeekdayLabels:!0}},S={name:"Bare dager",args:{defaultValue:new Date(0,0,1),min:new Date(0,0,1),max:new Date(0,0,31),hideNavigation:!0,hideWeekdayLabels:!0,noAccessory:!0}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Calendar",
  args: {
    value: today
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Disabled helger",
  args: {
    disableWeekends: true
  }
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Start- og sluttdato",
  args: {
    max: nextWeek,
    min: previousWeek
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Uten navigasjon",
  args: {
    hideNavigation: true
  }
}`,...j.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Skjul benevner på uke",
  args: {
    hideWeekdayLabels: true
  }
}`,...$.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Bare dager",
  args: {
    defaultValue: new Date(0, 0, 1),
    min: new Date(0, 0, 1),
    max: new Date(0, 0, 31),
    hideNavigation: true,
    hideWeekdayLabels: true,
    noAccessory: true
  }
}`,...S.parameters?.docs?.source}}};const fe=["CalendarStory","NoWeekends","StartEnd","HideNav","NoLabels","OnlyDays"];export{x as CalendarStory,j as HideNav,$ as NoLabels,k as NoWeekends,S as OnlyDays,N as StartEnd,fe as __namedExportsOrder,be as default};
