import{j as f,r as x}from"./iframe-TxGS3kWb.js";/* empty css               */import{T as d}from"./Toast-Clk0TTHK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useBrowserPreferences-ya6Eggwa.js";import"./Button-CwMyuU5M.js";import"./usePreviousValue-Bab2cl0s.js";import"./Loader-uC9mYSiI.js";import"./useDelayedRender-CmDrWK9s.js";import"./Countdown-C3PNRvJz.js";import"./Flex-MTufPaHp.js";import"./SlotComponent-eDh04AsO.js";import"./mergeRefs-_7lZvp9j.js";import"./IconButton-mWNcNoZ2.js";import"./CloseIcon-BSeg6vTL.js";import"./Icon-DbPOiTpX.js";import"./SuccessIcon-CLn8DsAl.js";import"./InfoIcon-DzMU3RAZ.js";import"./WarningIcon-DZvhnaTT.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,u={add:t(()=>"toast-story"),close:t(),pauseAll:t(),remove:t(),resumeAll:t(),visibleToasts:[]},g={key:"toast-neutral",content:{title:"Informasjon",content:"Her kommer relevant informasjon."}},k={key:"toast-info",variant:"info",content:{title:"Dokumentasjon lagt til",content:"Dokumentet er lagret på saken."}},m={key:"toast-success",variant:"success",content:{title:"Dekningen din er oppdatert",content:"Endringene blir aktive etter 31.01.2025"}},T={key:"toast-warning",variant:"warning",content:{title:"Du blir snart logget ut",content:"Lagre arbeidet ditt før økten avsluttes."}},v={key:"toast-error",variant:"error",content:{title:"Kunne ikke lagre endringen",content:"Prøv igjen, eller kontakt kundeservice hvis problemet vedvarer."}},E={key:"toast-progress",variant:"success",timeout:5e3,content:{title:"Dekningen din er oppdatert",content:"Endringene blir aktive etter 31.01.2025"}},S={key:"toast-action",variant:"success",content:{title:"Utkastet er slettet",content:"Du kan angre handlingen i noen sekunder."},action:{label:"Angre",onClick:t()}},b={key:"toast-without-title",variant:"success",content:"Endringene blir aktive etter 31.01.2025"},D=[g,k,m,T,v],q={title:"Komponenter/Toast",component:d,parameters:{layout:"centered"},argTypes:{state:{table:{disable:!0}}},args:{state:u,toast:m}},e={args:{toast:g}},r={args:{toast:k}},s={args:{toast:m}},a={args:{toast:T}},o={name:"Error",args:{toast:v}},n={args:{toast:E}},i={args:{toast:S}},c={args:{toast:b}},p={render:y=>f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"min(480px, 100%)"},children:D.map(l=>x.createElement(d,{...y,key:l.key,state:u,toast:l}))})},z=["Neutral","Info","Success","Warning","ErrorToast","MedProgress","MedHandling","UtenTittel","AlleVarianter"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    toast: actionToast
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    toast: toastWithoutTitle
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "min(480px, 100%)"
  }}>
            {variants.map(toast => <ToastComponent {...args} key={toast.key} state={state} toast={toast} />)}
        </div>
}`,...p.parameters?.docs?.source}}};export{p as AlleVarianter,o as ErrorToast,r as Info,i as MedHandling,n as MedProgress,e as Neutral,s as Success,c as UtenTittel,a as Warning,z as __namedExportsOrder,q as default};
