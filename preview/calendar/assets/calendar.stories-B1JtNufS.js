import{p as C,f as u}from"./utils-BJNJLcJU.js";import{r as h,j as a}from"./iframe-B2lOZauQ.js";import{c as J}from"./clsx-B-dksMZM.js";import{F as Y}from"./Flex-C5Ard3S8.js";import{B as q}from"./Button-DRAu4IdJ.js";import{A as Q,a as X}from"./ArrowRightIcon-D2m7n9IR.js";import{T as B}from"./Text-ZdEJg1un.js";const V=1,U="nb-NO",Z=ee(U),R=5;function ee(r){const i=new Intl.DateTimeFormat(r,{month:"long"});return Array.from({length:12},(d,s)=>i.format(new Date(2e3,s,1)))}function ae(r,i){const d=new Date,s=Number.isFinite(r)?r:d.getFullYear(),t=Number.isFinite(i)?i:d.getMonth(),o=new Date(s,t+1,0).getDate(),w=(new Date(s,t,1).getDay()-V+7)%7,p=[...Array(w).fill(null),...Array.from({length:o},(g,S)=>S+1)];for(;p.length%7!==0;)p.push(null);const O=[];for(let g=0;g<p.length;g+=7)O.push(p.slice(g,g+7));const F=new Intl.DateTimeFormat(U,{weekday:"long"});return{headers:Array.from({length:7},(g,S)=>{const f=new Date(2024,0,7+(V+S)%7);return F.format(f)}),weeks:O}}const te=(r,i,d,s)=>{if(i){const t=new Date(i);if(t.setHours(0,0,0,0),r<t)return!0}if(d){const t=new Date(d);if(t.setHours(23,59,59,999),r>t)return!0}if(s){const t=r.getDay();if(t===0||t===6)return!0}return!1};function ne(r,i,d){const s=i?.getFullYear(),t=d?.getFullYear();let o=r-R,m=r+R;return s!==void 0&&(o=Math.max(o,s)),t!==void 0&&(m=Math.min(m,t)),o>m&&(s!==void 0&&r<s?(o=s,m=s):t!==void 0&&r>t?(o=t,m=t):o=m),Array.from({length:m-o+1},(w,p)=>o+p)}const H=r=>{const{value:i,defaultValue:d,className:s,onChange:t,styleOptions:o={hideOutline:!1,hideNavigation:!1,hideWeekdayLabels:!1},min:m,max:w,disableAfterDate:p,disableBeforeDate:O,name:F,disableWeekends:_=!1,...g}=r,f=C(i??d)??new Date,[W,A]=h.useState(f),M=C(m||O),T=C(w||p),E=h.useMemo(()=>M||void 0,[M]),L=h.useMemo(()=>T||void 0,[T]),[n,y]=h.useState({month:f.getMonth(),year:f.getFullYear()});h.useEffect(()=>{const e=C(i);e&&(A(e),y({month:e.getMonth(),year:e.getFullYear()}))},[i]);const K=h.useMemo(()=>ne(n.year,E,L),[n.year,E,L]),{headers:P,weeks:$}=h.useMemo(()=>ae(Number(n.year),Number(n.month)),[n]);return a.jsxs("div",{className:J("jkl-calendar-picker",s),"data-no-outline":o.hideOutline,...g,children:[!o.hideNavigation&&a.jsxs(Y,{gap:"s",justifyContent:"space-between",className:"navigation",children:[a.jsx(q,{type:"button",icon:a.jsx(Q,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>y(({month:e,year:c})=>{const l=new Date(c,e-1,1);return{month:l.getMonth(),year:l.getFullYear()}})}),a.jsxs(Y,{gap:"none",className:"dropdowns",children:[a.jsx("select",{"aria-label":"Velg måned",value:n.month,onChange:e=>y({...n,month:Number(e.target.value)}),children:Z.map((e,c)=>a.jsx("option",{value:c,children:e},e))}),a.jsx("select",{"aria-label":"Velg år",value:n.year,onChange:e=>y({...n,year:Number(e.target.value)}),children:K.map(e=>a.jsx("option",{value:e,children:e},e))})]}),a.jsx(q,{type:"button",icon:a.jsx(X,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>y(({month:e,year:c})=>{const l=new Date(c,e+1,1);return{month:l.getMonth(),year:l.getFullYear()}})})]}),a.jsxs("table",{className:"month",children:[a.jsx("caption",{className:"jkl-sr-only",children:"Kalender"}),a.jsx("thead",{className:"weekdays",children:a.jsx("tr",{children:P.map((e,c)=>a.jsx("th",{scope:"col",className:"weekday","data-disabled":_,"aria-label":e,children:a.jsx(B,{bold:!0,srOnly:o?.hideWeekdayLabels,children:e.charAt(0).toUpperCase()})},c))})}),a.jsx("tbody",{children:$.map((e,c)=>a.jsx("tr",{className:"week",children:e.map((l,z)=>a.jsx("td",{children:l?a.jsxs("label",{className:"day",children:[a.jsx("input",{type:"radio",name:F,disabled:te(new Date(n.year,n.month,Number(l)),E,L,_),"aria-label":u(new Date(n.year,n.month,Number(l))),value:u(new Date(n.year,n.month,Number(l))),checked:W.getDate()===Number(l)&&W.getMonth()===n.month&&W.getFullYear()===n.year,onChange:G=>{const I=new Date(n.year,n.month,Number(l));A(I),t?.(G,u(I))}}),a.jsx(B,{as:"span",short:!0,"aria-hidden":!0,children:l})]}):""},z))},`${e}-${c}`))})]})]})};H.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{max:{required:!1,tsType:{name:"string"},description:""},min:{required:!1,tsType:{name:"string"},description:""},disableWeekends:{required:!1,tsType:{name:"boolean"},description:`Fjern helgedager som valgbare datoer

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

@default undefined`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent, date: string) => void",signature:{arguments:[{type:{name:"ChangeEvent"},name:"event"},{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:re}=__STORYBOOK_MODULE_TEST__,j=new Date,se=u(new Date(new Date(j).setDate(j.getDate()+7))),oe=u(new Date(new Date(j).setDate(j.getDate()-7))),ie={title:"Komponenter/DatePicker/Calendar",component:H,args:{styleOptions:{hideWeekdayLabels:!1,hideNavigation:!1,hideOutline:!1},disableWeekends:!1,onChange:re()}},b={name:"Calendar",args:{value:u(j)}},D={name:"Disabled helger",args:{disableWeekends:!0}},v={name:"Start- og sluttdato",args:{max:se,min:oe}},k={name:"Uten navigasjon",args:{styleOptions:{hideNavigation:!0}}},x={name:"Skjul benevner på uke",args:{styleOptions:{hideWeekdayLabels:!0}}},N={name:"Bare dager",args:{defaultValue:u(new Date(0,0,1)),min:u(new Date(0,0,1)),max:u(new Date(0,0,31)),styleOptions:{hideNavigation:!0,hideWeekdayLabels:!0,hideOutline:!0}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Calendar",
  args: {
    value: formatInput(today)
  }
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Disabled helger",
  args: {
    disableWeekends: true
  }
}`,...D.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Start- og sluttdato",
  args: {
    max: nextWeek,
    min: previousWeek
  }
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Uten navigasjon",
  args: {
    styleOptions: {
      hideNavigation: true
    }
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Skjul benevner på uke",
  args: {
    styleOptions: {
      hideWeekdayLabels: true
    }
  }
}`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const le=["CalendarStory","NoWeekends","StartEnd","HideNav","NoLabels","OnlyDays"],fe=Object.freeze(Object.defineProperty({__proto__:null,CalendarStory:b,HideNav:k,NoLabels:x,NoWeekends:D,OnlyDays:N,StartEnd:v,__namedExportsOrder:le,default:ie},Symbol.toStringTag,{value:"Module"}));export{H as C,N as O,fe as c,ie as m};
