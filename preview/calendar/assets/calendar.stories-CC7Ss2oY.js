import{p as k,f as p}from"./utils-BJNJLcJU.js";import{r as u,j as a}from"./iframe-C6c0I4sO.js";import{c as J}from"./clsx-B-dksMZM.js";import{F as V}from"./Flex-Bca8qIcx.js";import{B}from"./Button-xRW_Iq4e.js";import{A as Q,a as X}from"./ArrowRightIcon-CKhwSC9-.js";import{T as R}from"./Text-fRBVez0p.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-l5s7sPI4.js";import"./mergeRefs-B_jEu1Ue.js";import"./usePreviousValue-ChSKcGrh.js";import"./Loader-BiNyratp.js";import"./useDelayedRender-DbJWureZ.js";import"./Icon-DhZ_2Gun.js";const U=1,C="nb-NO",Z=ee(C),x=5;function ee(n){const s=new Intl.DateTimeFormat(n,{month:"long"});return Array.from({length:12},(i,l)=>s.format(new Date(2e3,l,1)))}function ae(n,s){const i=new Date,l=Number.isFinite(n)?n:i.getFullYear(),r=Number.isFinite(s)?s:i.getMonth(),c=new Date(l,r+1,0).getDate(),h=(new Date(l,r,1).getDay()-U+7)%7,g=[...Array(h).fill(null),...Array.from({length:c},(m,v)=>v+1)];for(;g.length%7!==0;)g.push(null);const D=[];for(let m=0;m<g.length;m+=7)D.push(g.slice(m,m+7));const M=new Intl.DateTimeFormat(C,{weekday:"long"});return{headers:Array.from({length:7},(m,v)=>{const y=new Date(2024,0,7+(U+v)%7);return M.format(y)}),weeks:D}}const te=(n,s,i,l)=>{if(s){const r=new Date(s);if(r.setHours(0,0,0,0),n<r)return!0}if(i){const r=new Date(i);if(r.setHours(0,0,0,0),n>r)return!0}if(l){const r=n.getDay();if(r===0||r===6)return!0}return!1};function ne(n,s,i){const l=s?Math.max(n-x,s.getFullYear()):n-x,r=i?Math.min(n+x,i.getFullYear()):n+x,c=Math.max(r-l+1,1);return Array.from({length:c},(W,h)=>l+h)}const H=n=>{const{value:s,defaultValue:i,className:l,onChange:r,styleOptions:c={hideOutline:!1,hideNavigation:!1,hideWeekdayLabels:!1},min:W,max:h,disableAfterDate:g,disableBeforeDate:D,name:M="dato",disableWeekends:L=!1,...m}=n,y=k(s??i)??new Date,[T,Y]=u.useState(y),_=k(W||D),E=k(h||g),A=u.useMemo(()=>_||void 0,[_]),I=u.useMemo(()=>E||void 0,[E]),[t,f]=u.useState({month:y.getMonth(),year:y.getFullYear()});u.useEffect(()=>{const e=k(s);e&&(Y(e),f({month:e.getMonth(),year:e.getFullYear()}))},[s]);const K=u.useMemo(()=>ne(t.year,A,I),[t.year,A,I]),{headers:$,weeks:G}=u.useMemo(()=>ae(Number(t.year),Number(t.month)),[t]);return a.jsxs("div",{className:J("jkl-calendar-picker",l),"data-no-outline":c.hideOutline,...m,children:[!c.hideNavigation&&a.jsxs(V,{gap:"s",justifyContent:"space-between",className:"navigation",children:[a.jsx(B,{type:"button",icon:a.jsx(Q,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>f(({month:e,year:d})=>{const o=new Date(d,e-1,1);return{month:o.getMonth(),year:o.getFullYear()}})}),a.jsxs(V,{gap:"none",className:"dropdowns",children:[a.jsx("select",{"aria-label":"Velg måned",value:t.month,onChange:e=>f({...t,month:Number(e.target.value)}),children:Z.map((e,d)=>a.jsx("option",{value:d,children:e},e))}),a.jsx("select",{"aria-label":"Velg år",value:t.year,onChange:e=>f({...t,year:Number(e.target.value)}),children:K.map(e=>a.jsx("option",{value:e,children:e},e))})]}),a.jsx(B,{type:"button",icon:a.jsx(X,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>f(({month:e,year:d})=>{const o=new Date(d,e+1,1);return{month:o.getMonth(),year:o.getFullYear()}})})]}),a.jsxs("table",{className:"month",children:[a.jsx("caption",{className:"jkl-sr-only",children:"Kalender"}),a.jsx("thead",{className:"weekdays",children:a.jsx("tr",{children:$.map((e,d)=>a.jsx("th",{scope:"col",className:"weekday","data-disabled":L,"aria-label":e,children:a.jsx(R,{bold:!0,srOnly:c?.hideWeekdayLabels,children:e.charAt(0).toUpperCase()})},d))})}),a.jsx("tbody",{children:G.map((e,d)=>a.jsx("tr",{className:"week",children:e.map((o,P)=>a.jsx("td",{children:o?a.jsxs("label",{className:"day",children:[a.jsx("input",{type:"radio",name:M,disabled:te(new Date(t.year,t.month,Number(o)),A,I,L),"aria-label":new Date(t.year,t.month,Number(o)).toLocaleDateString(C),value:new Date(t.year,t.month,Number(o)).toLocaleDateString(C),checked:T.getDate()===Number(o)&&T.getMonth()===t.month&&T.getFullYear()===t.year,onChange:z=>{const q=new Date(t.year,t.month,Number(o));Y(q),r?.(z,p(q))}}),a.jsx(R,{as:"span",short:!0,"aria-hidden":!0,children:o})]}):""},P))},`${e}-${d}`))})]})]})};H.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{max:{required:!1,tsType:{name:"string"},description:""},min:{required:!1,tsType:{name:"string"},description:""},disableWeekends:{required:!1,tsType:{name:"boolean"},description:`Fjern helgedager som valgbare datoer

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

@default undefined`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent, date: string) => void",signature:{arguments:[{type:{name:"ChangeEvent"},name:"event"},{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:re}=__STORYBOOK_MODULE_TEST__,b=new Date,se=p(new Date(new Date(b).setDate(b.getDate()+7))),oe=p(new Date(new Date(b).setDate(b.getDate()-7))),ke={title:"Komponenter/DatePicker/Calendar",component:H,args:{styleOptions:{hideWeekdayLabels:!1,hideNavigation:!1,hideOutline:!1},disableWeekends:!1,onChange:re()},argTypes:{min:{control:"date"},max:{control:"date"},defaultValue:{control:"date"},value:{control:"date"}}},N={name:"Calendar",args:{value:p(b)}},w={name:"Disabled helger",args:{disableWeekends:!0}},j={name:"Start- og sluttdato",args:{max:se,min:oe}},O={name:"Uten navigasjon",args:{styleOptions:{hideNavigation:!0}}},S={name:"Skjul benevner på uke",args:{styleOptions:{hideWeekdayLabels:!0}}},F={name:"Bare dager",args:{defaultValue:p(new Date(0,0,1)),min:p(new Date(0,0,1)),max:p(new Date(0,0,31)),styleOptions:{hideNavigation:!0,hideWeekdayLabels:!0,hideOutline:!0}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Calendar",
  args: {
    value: formatInput(today)
  }
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Disabled helger",
  args: {
    disableWeekends: true
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const xe=["CalendarStory","NoWeekends","StartEnd","HideNav","NoLabels","OnlyDays"];export{N as CalendarStory,O as HideNav,S as NoLabels,w as NoWeekends,F as OnlyDays,j as StartEnd,xe as __namedExportsOrder,ke as default};
