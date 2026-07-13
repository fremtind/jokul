import{p as S,f as p}from"./utils-BJNJLcJU.js";import{r as u,j as a}from"./iframe-BYvTgBBu.js";import{c as J}from"./clsx-B-dksMZM.js";import{F as V}from"./Flex-BzvxBo0z.js";import{B}from"./Button-BreAdbS4.js";import{A as Q,a as X}from"./ArrowRightIcon-ChDQC8AT.js";import{T as R}from"./Text-DbHWw9sa.js";const U=1,F="nb-NO",Z=ee(F),C=5;function ee(n){const s=new Intl.DateTimeFormat(n,{month:"long"});return Array.from({length:12},(i,l)=>s.format(new Date(2e3,l,1)))}function ae(n,s){const i=new Date,l=Number.isFinite(n)?n:i.getFullYear(),r=Number.isFinite(s)?s:i.getMonth(),m=new Date(l,r+1,0).getDate(),h=(new Date(l,r,1).getDay()-U+7)%7,g=[...Array(h).fill(null),...Array.from({length:m},(c,O)=>O+1)];for(;g.length%7!==0;)g.push(null);const w=[];for(let c=0;c<g.length;c+=7)w.push(g.slice(c,c+7));const W=new Intl.DateTimeFormat(F,{weekday:"long"});return{headers:Array.from({length:7},(c,O)=>{const y=new Date(2024,0,7+(U+O)%7);return W.format(y)}),weeks:w}}const te=(n,s,i,l)=>{if(s){const r=new Date(s);if(r.setHours(0,0,0,0),n<r)return!0}if(i){const r=new Date(i);if(r.setHours(0,0,0,0),n>r)return!0}if(l){const r=n.getDay();if(r===0||r===6)return!0}return!1};function ne(n,s,i){const l=s?Math.max(n-C,s.getFullYear()):n-C,r=i?Math.min(n+C,i.getFullYear()):n+C,m=Math.max(r-l+1,1);return Array.from({length:m},(_,h)=>l+h)}const H=n=>{const{value:s,defaultValue:i,className:l,onChange:r,styleOptions:m={hideOutline:!1,hideNavigation:!1,hideWeekdayLabels:!1},min:_,max:h,disableAfterDate:g,disableBeforeDate:w,name:W="dato",disableWeekends:M=!1,...c}=n,y=S(s??i)??new Date,[T,Y]=u.useState(y),L=S(_||w),E=S(h||g),A=u.useMemo(()=>L||void 0,[L]),I=u.useMemo(()=>E||void 0,[E]),[t,f]=u.useState({month:y.getMonth(),year:y.getFullYear()});u.useEffect(()=>{const e=S(s);e&&(Y(e),f({month:e.getMonth(),year:e.getFullYear()}))},[s]);const K=u.useMemo(()=>ne(t.year,A,I),[t.year,A,I]),{headers:P,weeks:$}=u.useMemo(()=>ae(Number(t.year),Number(t.month)),[t]);return a.jsxs("div",{className:J("jkl-calendar-picker",l),"data-no-outline":m.hideOutline,...c,children:[!m.hideNavigation&&a.jsxs(V,{gap:"s",justifyContent:"space-between",className:"navigation",children:[a.jsx(B,{type:"button",icon:a.jsx(Q,{}),variant:"ghost","aria-label":"Forrige måned",onClick:()=>f(({month:e,year:d})=>{const o=new Date(d,e-1,1);return{month:o.getMonth(),year:o.getFullYear()}})}),a.jsxs(V,{gap:"none",className:"dropdowns",children:[a.jsx("select",{"aria-label":"Velg måned",value:t.month,onChange:e=>f({...t,month:Number(e.target.value)}),children:Z.map((e,d)=>a.jsx("option",{value:d,children:e},e))}),a.jsx("select",{"aria-label":"Velg år",value:t.year,onChange:e=>f({...t,year:Number(e.target.value)}),children:K.map(e=>a.jsx("option",{value:e,children:e},e))})]}),a.jsx(B,{type:"button",icon:a.jsx(X,{}),variant:"ghost","aria-label":"Neste måned",onClick:()=>f(({month:e,year:d})=>{const o=new Date(d,e+1,1);return{month:o.getMonth(),year:o.getFullYear()}})})]}),a.jsxs("table",{className:"month",children:[a.jsx("caption",{className:"jkl-sr-only",children:"Kalender"}),a.jsx("thead",{className:"weekdays",children:a.jsx("tr",{children:P.map((e,d)=>a.jsx("th",{scope:"col",className:"weekday","data-disabled":M,"aria-label":e,children:a.jsx(R,{bold:!0,srOnly:m?.hideWeekdayLabels,children:e.charAt(0).toUpperCase()})},d))})}),a.jsx("tbody",{children:$.map((e,d)=>a.jsx("tr",{className:"week",children:e.map((o,z)=>a.jsx("td",{children:o?a.jsxs("label",{className:"day",children:[a.jsx("input",{type:"radio",name:W,disabled:te(new Date(t.year,t.month,Number(o)),A,I,M),"aria-label":new Date(t.year,t.month,Number(o)).toLocaleDateString(F),value:new Date(t.year,t.month,Number(o)).toLocaleDateString(F),checked:T.getDate()===Number(o)&&T.getMonth()===t.month&&T.getFullYear()===t.year,onChange:G=>{const q=new Date(t.year,t.month,Number(o));Y(q),r?.(G,p(q))}}),a.jsx(R,{as:"span",short:!0,"aria-hidden":!0,children:o})]}):""},z))},`${e}-${d}`))})]})]})};H.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{max:{required:!1,tsType:{name:"string"},description:""},min:{required:!1,tsType:{name:"string"},description:""},disableWeekends:{required:!1,tsType:{name:"boolean"},description:`Fjern helgedager som valgbare datoer

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

@default undefined`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent, date: string) => void",signature:{arguments:[{type:{name:"ChangeEvent"},name:"event"},{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:""}}};const{fn:re}=__STORYBOOK_MODULE_TEST__,j=new Date,se=p(new Date(new Date(j).setDate(j.getDate()+7))),oe=p(new Date(new Date(j).setDate(j.getDate()-7))),ie={title:"Komponenter/DatePicker/Calendar",component:H,args:{styleOptions:{hideWeekdayLabels:!1,hideNavigation:!1,hideOutline:!1},disableWeekends:!1,onChange:re()},argTypes:{min:{control:"date"},max:{control:"date"},defaultValue:{control:"date"},value:{control:"date"}}},b={name:"Calendar",args:{value:p(j)}},D={name:"Disabled helger",args:{disableWeekends:!0}},v={name:"Start- og sluttdato",args:{max:se,min:oe}},k={name:"Uten navigasjon",args:{styleOptions:{hideNavigation:!0}}},x={name:"Skjul benevner på uke",args:{styleOptions:{hideWeekdayLabels:!0}}},N={name:"Bare dager",args:{defaultValue:p(new Date(0,0,1)),min:p(new Date(0,0,1)),max:p(new Date(0,0,31)),styleOptions:{hideNavigation:!0,hideWeekdayLabels:!0,hideOutline:!0}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const le=["CalendarStory","NoWeekends","StartEnd","HideNav","NoLabels","OnlyDays"],ye=Object.freeze(Object.defineProperty({__proto__:null,CalendarStory:b,HideNav:k,NoLabels:x,NoWeekends:D,OnlyDays:N,StartEnd:v,__namedExportsOrder:le,default:ie},Symbol.toStringTag,{value:"Module"}));export{H as C,N as O,ye as c,ie as m};
