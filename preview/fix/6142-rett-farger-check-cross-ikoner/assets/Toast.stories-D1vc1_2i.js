import{j as f,r as x}from"./iframe-DGXGSSOU.js";import{T as d}from"./Toast-D7fnDIBE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-BKP_xY3B.js";import"./Button-R8DfPPlT.js";import"./usePreviousValue-CeP2HG_2.js";import"./Loader-BXUd3hKK.js";import"./useDelayedRender-CgiNglFb.js";import"./Countdown-Dt7Dmep9.js";import"./Flex-OkCazpzB.js";import"./SlotComponent-DS2coekL.js";import"./mergeRefs-CyTD42DU.js";import"./IconButton-BnIDZsFe.js";import"./CloseIcon-B3Hw0XwG.js";import"./Icon-Da5PGP6q.js";import"./WarningIcon-CChNyK7j.js";import"./InfoIcon-BDlt_s12.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,u={add:t(()=>"toast-story"),close:t(),pauseAll:t(),remove:t(),resumeAll:t(),visibleToasts:[]},g={key:"toast-neutral",content:{title:"Informasjon",content:"Her kommer relevant informasjon."}},k={key:"toast-info",variant:"info",content:{title:"Dokumentasjon lagt til",content:"Dokumentet er lagret på saken."}},m={key:"toast-success",variant:"success",content:{title:"Dekningen din er oppdatert",content:"Endringene blir aktive etter 31.01.2025"}},T={key:"toast-warning",variant:"warning",content:{title:"Du blir snart logget ut",content:"Lagre arbeidet ditt før økten avsluttes."}},v={key:"toast-error",variant:"error",content:{title:"Kunne ikke lagre endringen",content:"Prøv igjen, eller kontakt kundeservice hvis problemet vedvarer."}},E={key:"toast-progress",variant:"success",timeout:5e3,content:{title:"Dekningen din er oppdatert",content:"Endringene blir aktive etter 31.01.2025"}},S={key:"toast-action",variant:"success",content:{title:"Utkastet er slettet",content:"Du kan angre handlingen i noen sekunder."},action:{label:"Angre",onClick:t()}},b={key:"toast-without-title",variant:"success",content:"Endringene blir aktive etter 31.01.2025"},D=[g,k,m,T,v],B={title:"Komponenter/Toast",component:d,parameters:{layout:"centered"},argTypes:{state:{table:{disable:!0}}},args:{state:u,toast:m}},e={args:{toast:g}},r={args:{toast:k}},s={args:{toast:m}},a={args:{toast:T}},o={name:"Error",args:{toast:v}},n={args:{toast:E}},c={args:{toast:S}},i={args:{toast:b}},p={render:y=>f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"min(480px, 100%)"},children:D.map(l=>x.createElement(d,{...y,key:l.key,state:u,toast:l}))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    toast: neutralToast
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    toast: infoToast
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    toast: successToast
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    toast: warningToast
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Error",
  args: {
    toast: errorToast
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    toast: progressToast
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    toast: actionToast
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    toast: toastWithoutTitle
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "min(480px, 100%)"
  }}>
            {variants.map(toast => <ToastComponent {...args} key={toast.key} state={state} toast={toast} />)}
        </div>
}`,...p.parameters?.docs?.source}}};const Y=["Neutral","Info","Success","Warning","ErrorToast","MedProgress","MedHandling","UtenTittel","AlleVarianter"];export{p as AlleVarianter,o as ErrorToast,r as Info,c as MedHandling,n as MedProgress,e as Neutral,s as Success,i as UtenTittel,a as Warning,Y as __namedExportsOrder,B as default};
