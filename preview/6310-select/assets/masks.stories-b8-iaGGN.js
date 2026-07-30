import{j as t}from"./iframe-D9kSFuA9.js";import{u as o}from"./index.esm-BG59dB3R.js";import{r as m}from"./registerWithMask-xUHSZgkZ.js";import{T as s}from"./TextInput-CoDygywE.js";import"./preload-helper-PPVm8Dsz.js";import"./formatDate-hwqa_80k.js";import"./unicode-DWvs0Pen.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./formatNumber-Davy0grG.js";import"./clsx-B-dksMZM.js";import"./InputGroup-C9RzT27L.js";import"./useId-D22LZ5n7.js";import"./Label-D8ZibVYC.js";import"./SupportLabel-bo2zjcax.js";import"./SuccessIcon-CIFt1Ycj.js";import"./Icon-BLapKwvt.js";import"./WarningIcon-BtWrpef4.js";import"./BaseTextInput-BgquEMgJ.js";import"./IconButton-De0fcAds.js";const v={title:"Utilities/Masker",component:s,tags:["forms","!autodocs"]},a={name:"Fødselsnummer",render:e=>{const r=o(),{registerWithFodselsnummerMask:n}=m(r);return t.jsx(s,{...e,...n("fodselsnummer")})},args:{label:"Fødselsnummer",description:"11 siffer",maxLength:12,inputMode:"numeric",autoComplete:"off",placeholder:"000000 00000"}},i={name:"Kortnummer",render:e=>{const r=o(),{registerWithKortnummerMask:n}=m(r);return t.jsx(s,{...e,...n("kortnummer")})},args:{label:"Kortnummer",maxLength:19,inputMode:"numeric",autoComplete:"cc-number",placeholder:"0000 0000 0000 0000"}},u={name:"Kontonummer",render:e=>{const r=o(),{registerWithKontonummerMask:n}=m(r);return t.jsx(s,{...e,...n("kontonummer")})},args:{label:"Kontonummer for utbetaling",description:"Hit betaler vi ut skadeoppgjøret",maxLength:13,inputMode:"numeric",placeholder:"0000 00 00000"}},c={name:"Telefonnummer",render:e=>{const r=o(),{registerWithTelefonnummerMask:n}=m(r);return t.jsx(s,{...e,...n("telefonnummer")})},args:{label:"Telefonnummer",maxLength:11,inputMode:"tel",autoComplete:"tel",placeholder:"000 00 000"}},l={name:"Organisasjonsnummer",render:e=>{const r=o(),{registerWithOrganisasjonsnummerMask:n}=m(r);return t.jsx(s,{...e,...n("organisasjonsnummer")})},args:{label:"Organisasjonsnummer",description:"For bedriftskunder",maxLength:11,inputMode:"numeric",placeholder:"000 000 000"}},d={name:"Dato",render:e=>{const r=o(),{registerWithDateMask:n}=m(r);return t.jsx(s,{...e,...n("skadedato")})},args:{label:"Skadedato",maxLength:10,inputMode:"numeric",placeholder:"dd.mm.åååå"}},g={name:"Tall",render:e=>{const r=o(),{registerWithNumber:n}=m(r);return t.jsx(s,{...e,...n("sum")})},args:{label:"Forsikringssum",maxLength:12,inputMode:"numeric",unit:"kr",placeholder:"0"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Fødselsnummer",
  render: args => {
    const form = useForm<{
      fodselsnummer: string;
    }>();
    const {
      registerWithFodselsnummerMask
    } = registerWithMasks(form);
    return <TextInput {...args} {...registerWithFodselsnummerMask("fodselsnummer")} />;
  },
  args: {
    label: "Fødselsnummer",
    description: "11 siffer",
    maxLength: 12,
    inputMode: "numeric",
    autoComplete: "off",
    placeholder: "000000 00000"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Kortnummer",
  render: args => {
    const form = useForm<{
      kortnummer: string;
    }>();
    const {
      registerWithKortnummerMask
    } = registerWithMasks(form);
    return <TextInput {...args} {...registerWithKortnummerMask("kortnummer")} />;
  },
  args: {
    label: "Kortnummer",
    maxLength: 19,
    inputMode: "numeric",
    autoComplete: "cc-number",
    placeholder: "0000 0000 0000 0000"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Kontonummer",
  render: args => {
    const form = useForm<{
      kontonummer: string;
    }>();
    const {
      registerWithKontonummerMask
    } = registerWithMasks(form);
    return <TextInput {...args} {...registerWithKontonummerMask("kontonummer")} />;
  },
  args: {
    label: "Kontonummer for utbetaling",
    description: "Hit betaler vi ut skadeoppgjøret",
    maxLength: 13,
    inputMode: "numeric",
    placeholder: "0000 00 00000"
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Telefonnummer",
  render: args => {
    const form = useForm<{
      telefonnummer: string;
    }>();
    const {
      registerWithTelefonnummerMask
    } = registerWithMasks(form);
    return <TextInput {...args} {...registerWithTelefonnummerMask("telefonnummer")} />;
  },
  args: {
    label: "Telefonnummer",
    maxLength: 11,
    inputMode: "tel",
    autoComplete: "tel",
    placeholder: "000 00 000"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Organisasjonsnummer",
  render: args => {
    const form = useForm<{
      organisasjonsnummer: string;
    }>();
    const {
      registerWithOrganisasjonsnummerMask
    } = registerWithMasks(form);
    return <TextInput {...args} {...registerWithOrganisasjonsnummerMask("organisasjonsnummer")} />;
  },
  args: {
    label: "Organisasjonsnummer",
    description: "For bedriftskunder",
    maxLength: 11,
    inputMode: "numeric",
    placeholder: "000 000 000"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Dato",
  render: args => {
    const form = useForm<{
      skadedato: string;
    }>();
    const {
      registerWithDateMask
    } = registerWithMasks(form);
    return <TextInput {...args} {...registerWithDateMask("skadedato")} />;
  },
  args: {
    label: "Skadedato",
    maxLength: 10,
    inputMode: "numeric",
    placeholder: "dd.mm.åååå"
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Tall",
  render: args => {
    const form = useForm<{
      sum: string;
    }>();
    const {
      registerWithNumber
    } = registerWithMasks(form);
    return <TextInput {...args} {...registerWithNumber("sum")} />;
  },
  args: {
    label: "Forsikringssum",
    maxLength: 12,
    inputMode: "numeric",
    unit: "kr",
    placeholder: "0"
  }
}`,...g.parameters?.docs?.source}}};const E=["Fodselsnummer","Kortnummer","Kontonummer","Telefonnummer","Organisasjonsnummer","Dato","Tall"];export{d as Dato,a as Fodselsnummer,u as Kontonummer,i as Kortnummer,l as Organisasjonsnummer,g as Tall,c as Telefonnummer,E as __namedExportsOrder,v as default};
