import{j as m}from"./iframe-BTwN_uBw.js";import{u as S}from"./index.esm-DPpo7Gwb.js";import{T as h}from"./TextInput-DPJh0cIN.js";/* empty css               */import{F as I}from"./FieldGroup-DX8hqyF4.js";import{F as D}from"./Flex-BIKIATbl.js";import{f as K}from"./formatDate-Dke5WO_s.js";import{N as T}from"./unicode-DWvs0Pen.js";import{f as P}from"./formatOrganisasjonsnummer-DW0DyDi9.js";import{f as R}from"./formatNumber-Davy0grG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CiAKmEZq.js";import"./useId-lTbCt4qq.js";import"./Label-Cd0DajG2.js";import"./SupportLabel-GkaKb36n.js";import"./SuccessIcon-DvB-MatB.js";import"./Icon-DBDJaZ0G.js";import"./WarningIcon-Cf1vTwAK.js";import"./BaseTextInput-BTzazADx.js";import"./IconButton-DOpHB9Db.js";import"./SlotComponent-CvDmdtiZ.js";import"./mergeRefs-C4VHKPAy.js";const L={full:/^(\d{6})(\d{5})$/,partial:/^(\d{6})(\d{1,5})?$/};function U(e,t){const r=e.replace(/\W/g,""),o=t?.partial?L.partial:L.full,a=r.match(o);return a?a.slice(1).filter(Boolean).join(T):e}const N={full:/^(\d{4})(\d{2})(\d{5})$/,partial:/^(\d{4})(\d{1,2})?(\d{1,5})?$/};function $(e,t){const r=e.replace(/\W/g,""),o=t?.partial?N.partial:N.full,a=r.match(o);return a?a.slice(1).filter(Boolean).join(t?.separator||T):e}const F={full:/^(\d{4})(\d{4})(\d{4})(\d{4})$/,partial:/^(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?$/};function v(e,t){const r=e.replace(/[\s-.]/g,""),o=t?.partial?F.partial:F.full,a=r.match(o);return a?a.slice(1).filter(Boolean).join(T):e}const x={mobil:/^([8]\d{2})(\d{2})(\d{3})$/,fast:/^([2-9]\d)(\d{2})(\d{2})(\d{2})$/,mobilPartial:/^([8]\d{2})(\d{1,2})?(\d{1,3})?$/,fastPartial:/^([2-9]\d)(\d{1,2})?(\d{1,2})?(\d{1,2})?$/};function B(e,t){const r=e.replace(/\W/g,""),o=t?.partial?x.mobilPartial:x.mobil,a=t?.partial?x.fastPartial:x.fast,c=r.match(o)||r.match(a);return c?[t?.countryCode?`+${t.countryCode}`:void 0,...c.slice(1)].filter(Boolean).join(T):e}const A={date:K,fodselsnummer:U,kortnummer:v,kontonummer:$,telefonnummer:B,number:R,organisasjonsnummer:P},G=(e,t,r)=>Math.min(Math.max(e,t),r),i=e=>(t,r,o)=>{let a=0,c="",g="";const j={setValueAs:n=>n.replace(/\s/g,""),onChange:n=>{o?.onChange?.(n);let d=0;const s=n.target.value.length;n.target.selectionStart!==null&&(d=n.target.selectionStart);const p=A[e](n.target.value,{partial:!0}),l=p.toString().length;t.setValue(r,p);let b=null;if(["Delete","Backspace"].includes(c)){const u=a-d,O=g.trim()===""?0:l-s;b=a-u+O}else if(d<n.target.value.length||s!==l){const u=l-s;b=d+u}if(b!==null){const u=G(b,0,l);n.target.setSelectionRange(u,u,void 0)}}};o&&Object.assign(j,o);const W=t.register(r,j),C={onKeyDown:n=>{g="";const d=n.target,{selectionStart:s,selectionEnd:p,value:l}=d;s!==null&&(a=s,p!==null&&p>s?g=l.slice(s,p):n.key==="Backspace"?g=l[a-1]??"":n.key==="Delete"&&(g=l[a]??"")),c=n.key}};return e==="number"&&(C.align="right"),Object.assign(W,C)},V=e=>({registerWithFodselsnummerMask:(t,r)=>i("fodselsnummer")(e,t,r),registerWithKortnummerMask:(t,r)=>i("kortnummer")(e,t,r),registerWithKontonummerMask:(t,r)=>i("kontonummer")(e,t,r),registerWithTelefonnummerMask:(t,r)=>i("telefonnummer")(e,t,r),registerWithOrganisasjonsnummerMask:(t,r)=>i("organisasjonsnummer")(e,t,r),registerWithDateMask:(t,r)=>i("date")(e,t,r),registerWithNumber:(t,r)=>i("number")(e,t,r)}),be={title:"Komponenter/TextInput/TextInput",component:h,argTypes:{type:{control:"text"},maxLength:{type:"number"},unit:{type:"string"}},args:{label:"E-post",align:"left",inline:!1,placeholder:"ola.nordmann@eksempel.no",maxLength:80,unit:"",disabled:!1,readOnly:!1,defaultValue:"",description:"",helpLabel:"",errorLabel:""},tags:["autodocs","forms"]},k={},y={name:"Ugyldig e-post",args:{label:"E-post",defaultValue:"ola.nordmann",errorLabel:"Skriv inn en gyldig e-postadresse."}},M={name:"Unit + Align",args:{label:"Boareal",align:"right",inputMode:"numeric",maxLength:6,placeholder:"120",unit:"kvm"}},_=e=>{const t=S({defaultValues:{amount:"1 200"}}),{registerWithNumber:r}=V(t);return m.jsx(h,{...e,...r("amount"),label:"Beløp",maxLength:10,placeholder:"0",unit:"kr"})},E={name:"Tallmaskering",parameters:{docs:{description:{story:"Eksempel på TextInput brukt sammen med registerWithMasks().registerWithNumber for formattering av tall."}}},args:{placeholder:"0"},render:e=>m.jsx(_,{...e})},f={args:{labelProps:{srOnly:!1}},render:e=>m.jsx(I,{legend:"Når er du født?",labelProps:{variant:"medium"},children:m.jsxs(D,{gap:"xs",children:[m.jsx(h,{...e,maxLength:2,label:"Dag",placeholder:"dd",autoComplete:"bday-day",inputMode:"numeric","aria-label":"Fødselsdato dag"}),m.jsx(h,{...e,maxLength:2,label:"Måned",placeholder:"mm",autoComplete:"bday-month",inputMode:"numeric","aria-label":"Fødselsdato måned"}),m.jsx(h,{...e,maxLength:3,label:"År",placeholder:"åååå",autoComplete:"bday-year",inputMode:"numeric","aria-label":"Fødselsdato år"})]})})};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"{}",...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Ugyldig e-post",
  args: {
    label: "E-post",
    defaultValue: "ola.nordmann",
    errorLabel: "Skriv inn en gyldig e-postadresse."
  }
}`,...y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Unit + Align",
  args: {
    label: "Boareal",
    align: "right",
    inputMode: "numeric",
    maxLength: 6,
    placeholder: "120",
    unit: "kvm"
  }
}`,...M.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Tallmaskering",
  parameters: {
    docs: {
      description: {
        story: "Eksempel på TextInput brukt sammen med registerWithMasks().registerWithNumber for formattering av tall."
      }
    }
  },
  args: {
    placeholder: "0"
  },
  render: args => <NumberMaskExample {...args} />
}`,...E.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    labelProps: {
      srOnly: false
    }
  },
  render: args => {
    return <FieldGroup legend="Når er du født?" labelProps={{
      variant: "medium"
    }}>
                <Flex gap="xs">
                    <TextInputComponent {...args} maxLength={2} label="Dag" placeholder="dd" autoComplete="bday-day" inputMode="numeric" aria-label={"Fødselsdato dag"} />
                    <TextInputComponent {...args} maxLength={2} label="Måned" placeholder="mm" autoComplete="bday-month" inputMode="numeric" aria-label={"Fødselsdato måned"} />
                    <TextInputComponent {...args} maxLength={3} label="År" placeholder="åååå" autoComplete="bday-year" inputMode="numeric" aria-label={"Fødselsdato år"} />
                </Flex>
            </FieldGroup>;
  }
}`,...f.parameters?.docs?.source},description:{story:`Når du spør om datoer brukerne har et veldig aktivt forhold til,
som for eksempel sin egen fødselsdato kan det være til hjelp å dele opp tekstfeltet
i dato, måned, år.`,...f.parameters?.docs?.description}}};const xe=["TextInput","UgyldigEpost","UnitAlign","Tallmaskering","Datovelger"];export{f as Datovelger,E as Tallmaskering,k as TextInput,y as UgyldigEpost,M as UnitAlign,xe as __namedExportsOrder,be as default};
