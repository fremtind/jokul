import{p as k,f as g}from"./utils-BJNJLcJU.js";import{r as u,j as a}from"./iframe-BI_O4Haf.js";import{c as J}from"./clsx-B-dksMZM.js";import{F as P}from"./Flex-B9qZsFWK.js";import{B as V}from"./Button-RVgZu2bk.js";import{A as Q,a as X}from"./ArrowRightIcon-D_ti27KA.js";import{T as B}from"./Text-CNy5pCPE.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-BrPgS2wR.js";import"./mergeRefs-ChOZp9rd.js";import"./usePreviousValue-DbcYQEhc.js";import"./Loader-Df66y34l.js";import"./useDelayedRender-CtelVvOQ.js";import"./Icon-zZeSCmwQ.js";const R=1,I="nb-NO",Z=ee(I),x=5;function ee(n){const s=new Intl.DateTimeFormat(n,{month:"long"});return Array.from({length:12},(i,l)=>s.format(new Date(2e3,l,1)))}function ae(n,s){const i=new Date,l=Number.isFinite(n)?n:i.getFullYear(),r=Number.isFinite(s)?s:i.getMonth(),c=new Date(l,r+1,0).getDate(),h=(new Date(l,r,1).getDay()-R+7)%7,p=[...Array(h).fill(null),...Array.from({length:c},(m,v)=>v+1)];for(;p.length%7!==0;)p.push(null);const b=[];for(let m=0;m<p.length;m+=7)b.push(p.slice(m,m+7));const W=new Intl.DateTimeFormat(I,{weekday:"long"});return{headers:Array.from({length:7},(m,v)=>{const y=new Date(2024,0,7+(R+v)%7);return W.format(y)}),weeks:b}}const te=(n,s,i,l)=>{if(s){const r=new Date(s);if(r.setHours(0,0,0,0),n<r)return!0}if(i){const r=new Date(i);if(r.setHours(0,0,0,0),n>r)return!0}if(l){const r=n.getDay();if(r===0||r===6)return!0}return!1};function ne(n,s,i){const l=s?Math.max(n-x,s.getFullYear()):n-x,r=i?Math.min(n+x,i.getFullYear()):n+x,c=Math.max(r-l+1,1);return Array.from({length:c},(C,h)=>l+h)}const U=n=>{const{value:s,defaultValue:i,className:l,onChange:r,styleOptions:c={hideOutline:!1,hideNavigation:!1,hideWeekdayLabels:!1},min:C,max:h,disableAfterDate:p,disableBeforeDate:b,name:W="dato",disableWeekends:M=!1,...m}=n,y=k(s??i)||new Date,[T,Y]=u.useState(y),_=k(C||b),L=k(h||p),E=u.useMemo(()=>_||void 0,[_]),A=u.useMemo(()=>L||void 0,[L]),[t,f]=u.useState({month:y.getMonth(),year:y.getFullYear()});u.useEffect(()=>{const e=k(s);e&&(Y(e),f({month:e.getMonth(),year:e.getFullYear()}))},[s]);const H=u.useMemo(()=>ne(t.year,E,A),[t.year,E,A]),{headers:K,weeks:$}=u.useMemo(()=>ae(Number(t.year),Number(t.month)),[t]);return a.jsxs("div",{className:J("jkl-calendar-picker",l),"data-no-outline":c.hideOutline,...m,children:[!c.hideNavigation&&a.jsxs(P,{gap:"s",justifyContent:"space-between",className:"navigation",children:[a.jsx(V,{type:"button",icon:a.jsx(Q,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>f(({month:e,year:d})=>{const o=new Date(d,e-1,1);return{month:o.getMonth(),year:o.getFullYear()}})}),a.jsxs(P,{gap:"none",className:"dropdowns",children:[a.jsx("select",{"aria-label":"Velg måned",value:t.month,onChange:e=>f({...t,month:Number(e.target.value)}),children:Z.map((e,d)=>a.jsx("option",{value:d,children:e},e))}),a.jsx("select",{"aria-label":"Velg år",value:t.year,onChange:e=>f({...t,year:Number(e.target.value)}),children:H.map(e=>a.jsx("option",{value:e,children:e},e))})]}),a.jsx(V,{type:"button",icon:a.jsx(X,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>f(({month:e,year:d})=>{const o=new Date(d,e+1,1);return{month:o.getMonth(),year:o.getFullYear()}})})]}),a.jsxs("table",{className:"month",children:[a.jsx("caption",{className:"jkl-sr-only",children:"Kalender"}),a.jsx("thead",{className:"weekdays",children:a.jsx("tr",{children:K.map((e,d)=>a.jsx("th",{scope:"col",className:"weekday","data-disabled":M,"aria-label":e,children:a.jsx(B,{bold:!0,srOnly:c?.hideWeekdayLabels,children:e.charAt(0).toUpperCase()})},d))})}),a.jsx("tbody",{children:$.map((e,d)=>a.jsx("tr",{className:"week",children:e.map((o,G)=>a.jsx("td",{children:o?a.jsxs("label",{className:"day",children:[a.jsx("input",{type:"radio",name:W,disabled:te(new Date(t.year,t.month,Number(o)),E,A,M),"aria-label":new Date(t.year,t.month,Number(o)).toLocaleDateString(I),value:new Date(t.year,t.month,Number(o)).toString(),checked:T.getDate()===Number(o)&&T.getMonth()===t.month&&T.getFullYear()===t.year,onChange:z=>{const q=new Date(t.year,t.month,Number(o));Y(q),r?.(z,q)}}),a.jsx(B,{as:"span",short:!0,"aria-hidden":!0,children:o})]}):""},G))},`${e}-${d}`))})]})]})};U.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{max:{required:!1,tsType:{name:'DatePickerProps["value"]',raw:'DatePickerProps["value"]'},description:""},min:{required:!1,tsType:{name:'DatePickerProps["value"]',raw:'DatePickerProps["value"]'},description:""},disableWeekends:{required:!1,tsType:{name:"boolean"},description:`Fjern helgedager som valgbare datoer

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

@default undefined`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent, date: Date) => void",signature:{arguments:[{type:{name:"ChangeEvent"},name:"event"},{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:re}=__STORYBOOK_MODULE_TEST__,D=new Date,se=g(new Date(new Date(D).setDate(D.getDate()+7))),oe=g(new Date(new Date(D).setDate(D.getDate()-7))),ke={title:"Komponenter/DatePicker/Calendar",component:U,args:{styleOptions:{hideWeekdayLabels:!1,hideNavigation:!1,hideOutline:!1},disableWeekends:!1,onChange:re()},argTypes:{min:{control:"date"},max:{control:"date"},defaultValue:{control:"date"},value:{control:"date"}}},w={name:"Calendar",args:{value:g(D)}},N={name:"Disabled helger",args:{disableWeekends:!0}},j={name:"Start- og sluttdato",args:{max:se,min:oe}},O={name:"Uten navigasjon",args:{styleOptions:{hideNavigation:!0}}},S={name:"Skjul benevner på uke",args:{styleOptions:{hideWeekdayLabels:!0}}},F={name:"Bare dager",args:{defaultValue:g(new Date(0,0,1)),min:g(new Date(0,0,1)),max:g(new Date(0,0,31)),styleOptions:{hideNavigation:!0,hideWeekdayLabels:!0,hideOutline:!0}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Calendar",
  args: {
    value: formatInput(today)
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Disabled helger",
  args: {
    disableWeekends: true
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Start- og sluttdato",
  args: {
    max: nextWeek,
    min: previousWeek
  }
}`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Uten navigasjon",
  args: {
    styleOptions: {
      hideNavigation: true
    }
  }
}`,...O.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Skjul benevner på uke",
  args: {
    styleOptions: {
      hideWeekdayLabels: true
    }
  }
}`,...S.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const xe=["CalendarStory","NoWeekends","StartEnd","HideNav","NoLabels","OnlyDays"];export{w as CalendarStory,O as HideNav,S as NoLabels,N as NoWeekends,F as OnlyDays,j as StartEnd,xe as __namedExportsOrder,ke as default};
