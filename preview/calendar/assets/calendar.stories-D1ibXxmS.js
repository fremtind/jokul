import{p as F,f as p}from"./utils-BJNJLcJU.js";import{r as f,j as a}from"./iframe-GMJ0u05F.js";import{c as z}from"./clsx-B-dksMZM.js";import{F as A}from"./Flex-DsdrmVI8.js";import{B as Y}from"./Button-BBkYfexJ.js";import{A as G,a as J}from"./ArrowRightIcon-Djs9SSVk.js";import{T as I}from"./Text-CdzdDExJ.js";const q=1,B="nb-NO",Q=X(B),V=5;function X(r){const i=new Intl.DateTimeFormat(r,{month:"long"});return Array.from({length:12},(m,s)=>i.format(new Date(2e3,s,1)))}function Z(r,i){const m=new Date,s=Number.isFinite(r)?r:m.getFullYear(),t=Number.isFinite(i)?i:m.getMonth(),o=new Date(s,t+1,0).getDate(),y=(new Date(s,t,1).getDay()-q+7)%7,c=[...Array(y).fill(null),...Array.from({length:o},(g,S)=>S+1)];for(;c.length%7!==0;)c.push(null);const b=[];for(let g=0;g<c.length;g+=7)b.push(c.slice(g,g+7));const C=new Intl.DateTimeFormat(B,{weekday:"long"});return{headers:Array.from({length:7},(g,S)=>{const h=new Date(2024,0,7+(q+S)%7);return C.format(h)}),weeks:b}}const ee=(r,i,m,s)=>{if(i){const t=new Date(i);if(t.setHours(0,0,0,0),r<t)return!0}if(m){const t=new Date(m);if(t.setHours(23,59,59,999),r>t)return!0}if(s){const t=r.getDay();if(t===0||t===6)return!0}return!1};function ae(r,i,m){const s=i?.getFullYear(),t=m?.getFullYear();let o=r-V,d=r+V;return s!==void 0&&(o=Math.max(o,s)),t!==void 0&&(d=Math.min(d,t)),o>d&&(s!==void 0&&r<s?(o=s,d=s):t!==void 0&&r>t?(o=t,d=t):o=d),Array.from({length:d-o+1},(y,c)=>o+c)}const R=r=>{const{value:i,defaultValue:m,className:s,onChange:t,styleOptions:o={hideOutline:!1,hideNavigation:!1,hideWeekdayLabels:!1},min:d,max:y,disableAfterDate:c,disableBeforeDate:b,name:C,disableWeekends:_=!1,...g}=r,h=F(i??m),[W,E]=f.useState(h),M=f.useMemo(()=>F(d||b),[d,b]),T=f.useMemo(()=>F(y||c),[y,c]),[n,D]=f.useState({month:h?h.getMonth():new Date().getMonth(),year:h?h.getFullYear():new Date().getFullYear()});f.useEffect(()=>{const e=F(i);E(e),e&&D({month:e.getMonth(),year:e.getFullYear()})},[i]);const U=f.useMemo(()=>ae(n.year,M,T),[n.year,M,T]),{headers:H,weeks:K}=f.useMemo(()=>Z(Number(n.year),Number(n.month)),[n]);return a.jsxs("div",{className:z("jkl-calendar-picker",s),"data-no-outline":o.hideOutline,...g,children:[!o.hideNavigation&&a.jsxs(A,{gap:"s",justifyContent:"space-between",className:"navigation",children:[a.jsx(Y,{type:"button",icon:a.jsx(G,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>D(({month:e,year:u})=>{const l=new Date(u,e-1,1);return{month:l.getMonth(),year:l.getFullYear()}})}),a.jsxs(A,{gap:"none",className:"dropdowns",children:[a.jsx("select",{"aria-label":"Velg måned",value:n.month,onChange:e=>D({...n,month:Number(e.target.value)}),children:Q.map((e,u)=>a.jsx("option",{value:u,children:e},e))}),a.jsx("select",{"aria-label":"Velg år",value:n.year,onChange:e=>D({...n,year:Number(e.target.value)}),children:U.map(e=>a.jsx("option",{value:e,children:e},e))})]}),a.jsx(Y,{type:"button",icon:a.jsx(J,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>D(({month:e,year:u})=>{const l=new Date(u,e+1,1);return{month:l.getMonth(),year:l.getFullYear()}})})]}),a.jsxs("table",{className:"month",children:[a.jsx("caption",{className:"jkl-sr-only",children:"Kalender"}),a.jsx("thead",{className:"weekdays",children:a.jsx("tr",{children:H.map((e,u)=>a.jsx("th",{scope:"col",className:"weekday","data-disabled":_,"aria-label":e,children:a.jsx(I,{bold:!0,srOnly:o?.hideWeekdayLabels,children:e.charAt(0).toUpperCase()})},u))})}),a.jsx("tbody",{children:K.map((e,u)=>a.jsx("tr",{className:"week",children:e.map((l,P)=>a.jsx("td",{children:l?a.jsxs("label",{className:"day",children:[a.jsx("input",{type:"radio",name:C,disabled:ee(new Date(n.year,n.month,Number(l)),M,T,_),"aria-label":p(new Date(n.year,n.month,Number(l))),value:p(new Date(n.year,n.month,Number(l))),checked:W?.getDate()===Number(l)&&W.getMonth()===n.month&&W.getFullYear()===n.year,onChange:$=>{const L=new Date(n.year,n.month,Number(l));E(L),t?.($,p(L))}}),a.jsx(I,{as:"span",short:!0,"aria-hidden":!0,children:l})]}):""},P))},`${e}-${u}`))})]})]})};R.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{max:{required:!1,tsType:{name:"string"},description:""},min:{required:!1,tsType:{name:"string"},description:""},disableWeekends:{required:!1,tsType:{name:"boolean"},description:`Fjern helgedager som valgbare datoer

@default false`},styleOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    /**
     * Viser kalenderen flatt på siden
     */
    hideOutline?: boolean;
    /**
     * Fjerner piler og nedtrekksliste for valg av måned og år
     */
    hideNavigation?: boolean;
    /**
     * Fjerner ukedag-teksten
     */
    hideWeekdayLabels?: boolean;
}`,signature:{properties:[{key:"hideOutline",value:{name:"boolean",required:!1},description:"Viser kalenderen flatt på siden"},{key:"hideNavigation",value:{name:"boolean",required:!1},description:"Fjerner piler og nedtrekksliste for valg av måned og år"},{key:"hideWeekdayLabels",value:{name:"boolean",required:!1},description:"Fjerner ukedag-teksten"}]}},description:""},name:{required:!1,tsType:{name:"string"},description:`Navn på input-feltet

@default undefined`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent, date: string) => void",signature:{arguments:[{type:{name:"ChangeEvent"},name:"event"},{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:te}=__STORYBOOK_MODULE_TEST__,O=new Date,ne=p(new Date(new Date(O).setDate(O.getDate()+7))),re=p(new Date(new Date(O).setDate(O.getDate()-7))),se={title:"Komponenter/DatePicker/Calendar",component:R,args:{styleOptions:{hideWeekdayLabels:!1,hideNavigation:!1,hideOutline:!1},disableWeekends:!1,onChange:te(),defaultValue:p(O),value:void 0},argTypes:{value:{control:"text"},defaultValue:{control:"text"},min:{control:"text"},max:{control:"text"}}},v={name:"Calendar",args:{}},k={name:"Disabled helger",args:{disableWeekends:!0}},x={name:"Start- og sluttdato",args:{max:ne,min:re}},N={name:"Uten navigasjon",args:{styleOptions:{hideNavigation:!0}}},w={name:"Skjul benevner på uke",args:{styleOptions:{hideWeekdayLabels:!0}}},j={name:"Bare dager",args:{defaultValue:p(new Date(0,0,1)),min:p(new Date(0,0,1)),max:p(new Date(0,0,31)),styleOptions:{hideNavigation:!0,hideWeekdayLabels:!0,hideOutline:!0}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Calendar",
  args: {}
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Disabled helger",
  args: {
    disableWeekends: true
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Start- og sluttdato",
  args: {
    max: nextWeek,
    min: previousWeek
  }
}`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Uten navigasjon",
  args: {
    styleOptions: {
      hideNavigation: true
    }
  }
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Skjul benevner på uke",
  args: {
    styleOptions: {
      hideWeekdayLabels: true
    }
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Bare dager",
  args: {
    defaultValue: formatInput(new Date(0, 0, 1)),
    min: formatInput(new Date(0, 0, 1)),
    max: formatInput(new Date(0, 0, 31)),
    styleOptions: {
      hideNavigation: true,
      hideWeekdayLabels: true,
      hideOutline: true
    }
  }
}`,...j.parameters?.docs?.source}}};const oe=["CalendarStory","NoWeekends","StartEnd","HideNav","NoLabels","OnlyDays"],ge=Object.freeze(Object.defineProperty({__proto__:null,CalendarStory:v,HideNav:N,NoLabels:w,NoWeekends:k,OnlyDays:j,StartEnd:x,__namedExportsOrder:oe,default:se},Symbol.toStringTag,{value:"Module"}));export{R as C,j as O,ge as c,se as m};
