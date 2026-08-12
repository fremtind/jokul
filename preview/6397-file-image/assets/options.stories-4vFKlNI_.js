import{j as n}from"./iframe-D0jGEvlt.js";import{u as m,r as o}from"./index.esm-_NPq27cM.js";import{T as s}from"./TextInput-BC9TqV1t.js";import{F as a}from"./Flex-CmKK2ZAj.js";import{B as i}from"./Button-DFpKOUrv.js";import"./preload-helper-PPVm8Dsz.js";import"./formatDate-hwqa_80k.js";import"./unicode-DWvs0Pen.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./formatNumber-Davy0grG.js";import"./clsx-B-dksMZM.js";import"./InputGroup-BUXvI50b.js";import"./useId-DQEuAQbV.js";import"./Label-CXgb4YC8.js";import"./SupportLabel-CELo4syA.js";import"./SuccessIcon-B15eQp0H.js";import"./Icon-BhmjRupB.js";import"./WarningIcon-x4yL-9lk.js";import"./BaseTextInput-BgxtwX3S.js";import"./IconButton-B2NR7Fwy.js";import"./SlotComponent-1EZLqoFD.js";import"./mergeRefs-D8AuGf56.js";import"./usePreviousValue-BxIkCuXX.js";import"./Loader-Au8-qRJU.js";import"./useDelayedRender-BLeqD9XR.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,U={title:"Utilities/Masker/Options",component:s,tags:["forms","!autodocs"]},u={name:"Required",render:r=>{const e=m(),{registerWithKontonummerMask:t}=o(e);return n.jsx("form",{onSubmit:e.handleSubmit(()=>{}),noValidate:!0,children:n.jsxs(a,{direction:"column",gap:"m",style:{maxWidth:"24rem"},children:[n.jsx(s,{...r,...t("kontonummer",{required:"Du må oppgi et kontonummer"}),errorLabel:e.formState.errors.kontonummer?.message}),n.jsx(i,{type:"submit","data-size":"small",children:"Send inn"})]})})},args:{label:"Kontonummer",maxLength:13,inputMode:"numeric",placeholder:"0000 00 00000"}},l={name:"Min Length",render:r=>{const e=m(),{registerWithFodselsnummerMask:t}=o(e);return n.jsx("form",{onSubmit:e.handleSubmit(()=>{}),noValidate:!0,children:n.jsxs(a,{direction:"column",gap:"m",style:{maxWidth:"24rem"},children:[n.jsx(s,{...r,...t("fodselsnummer",{minLength:{value:11,message:"Fødselsnummer må ha 11 siffer"}}),errorLabel:e.formState.errors.fodselsnummer?.message}),n.jsx(i,{type:"submit","data-size":"small",children:"Send inn"})]})})},args:{label:"Fødselsnummer",maxLength:12,inputMode:"numeric",placeholder:"000000 00000"}},d={name:"Max Length",render:r=>{const e=m(),{registerWithOrganisasjonsnummerMask:t}=o(e);return n.jsx("form",{onSubmit:e.handleSubmit(()=>{}),noValidate:!0,children:n.jsxs(a,{direction:"column",gap:"m",style:{maxWidth:"24rem"},children:[n.jsx(s,{...r,...t("organisasjonsnummer",{maxLength:{value:9,message:"Organisasjonsnummer har maks 9 siffer"}}),errorLabel:e.formState.errors.organisasjonsnummer?.message}),n.jsx(i,{type:"submit","data-size":"small",children:"Send inn"})]})})},args:{label:"Organisasjonsnummer",maxLength:11,inputMode:"numeric",placeholder:"000 000 000"}},g={name:"Pattern",render:r=>{const e=m(),{registerWithFodselsnummerMask:t}=o(e);return n.jsx("form",{onSubmit:e.handleSubmit(()=>{}),noValidate:!0,children:n.jsxs(a,{direction:"column",gap:"m",style:{maxWidth:"24rem"},children:[n.jsx(s,{...r,...t("fodselsnummer",{pattern:{value:/^\d{11}$/,message:"Fødselsnummer må være nøyaktig 11 siffer"}}),errorLabel:e.formState.errors.fodselsnummer?.message}),n.jsx(i,{type:"submit","data-size":"small",children:"Send inn"})]})})},args:{label:"Fødselsnummer",maxLength:12,inputMode:"numeric",placeholder:"000000 00000"}},c={name:"Validate",render:r=>{const e=m(),{registerWithTelefonnummerMask:t}=o(e);return n.jsx("form",{onSubmit:e.handleSubmit(()=>{}),noValidate:!0,children:n.jsxs(a,{direction:"column",gap:"m",style:{maxWidth:"24rem"},children:[n.jsx(s,{...r,...t("mobilnummer",{validate:f=>/^(4|9)/.test(f.replace(/\s/g,""))||"Oppgi et norsk mobilnummer"}),errorLabel:e.formState.errors.mobilnummer?.message}),n.jsx(i,{type:"submit","data-size":"small",children:"Send inn"})]})})},args:{label:"Mobilnummer",maxLength:11,inputMode:"tel",placeholder:"000 00 000"}},p={name:"Disabled",render:r=>{const e=m(),{registerWithKontonummerMask:t}=o(e);return n.jsx(s,{...r,...t("kontonummer",{disabled:!0})})},args:{label:"Kontonummer",defaultValue:"1234 56 78903",maxLength:13}},h={name:"onChange",parameters:{docs:{description:{story:"Egen onChange-callback kjøres i tillegg til maskeringen. Se «Actions»-panelet."}}},render:r=>{const e=m(),{registerWithKortnummerMask:t}=o(e);return n.jsx(s,{...r,...t("kortnummer",{onChange:x()})})},args:{label:"Kortnummer",maxLength:19,inputMode:"numeric",placeholder:"0000 0000 0000 0000"}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Required",
  render: args => {
    const form = useForm<{
      kontonummer: string;
    }>();
    const {
      registerWithKontonummerMask
    } = registerWithMasks(form);
    return <form onSubmit={form.handleSubmit(() => undefined)} noValidate>
                <Flex direction="column" gap="m" style={{
        maxWidth: "24rem"
      }}>
                    <TextInput {...args} {...registerWithKontonummerMask("kontonummer", {
          required: "Du må oppgi et kontonummer"
        })} errorLabel={form.formState.errors.kontonummer?.message} />
                    <Button type="submit" data-size="small">
                        Send inn
                    </Button>
                </Flex>
            </form>;
  },
  args: {
    label: "Kontonummer",
    maxLength: 13,
    inputMode: "numeric",
    placeholder: "0000 00 00000"
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Min Length",
  render: args => {
    const form = useForm<{
      fodselsnummer: string;
    }>();
    const {
      registerWithFodselsnummerMask
    } = registerWithMasks(form);
    return <form onSubmit={form.handleSubmit(() => undefined)} noValidate>
                <Flex direction="column" gap="m" style={{
        maxWidth: "24rem"
      }}>
                    <TextInput {...args} {...registerWithFodselsnummerMask("fodselsnummer", {
          minLength: {
            value: 11,
            message: "Fødselsnummer må ha 11 siffer"
          }
        })} errorLabel={form.formState.errors.fodselsnummer?.message} />
                    <Button type="submit" data-size="small">
                        Send inn
                    </Button>
                </Flex>
            </form>;
  },
  args: {
    label: "Fødselsnummer",
    maxLength: 12,
    inputMode: "numeric",
    placeholder: "000000 00000"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Max Length",
  render: args => {
    const form = useForm<{
      organisasjonsnummer: string;
    }>();
    const {
      registerWithOrganisasjonsnummerMask
    } = registerWithMasks(form);
    return <form onSubmit={form.handleSubmit(() => undefined)} noValidate>
                <Flex direction="column" gap="m" style={{
        maxWidth: "24rem"
      }}>
                    <TextInput {...args} {...registerWithOrganisasjonsnummerMask("organisasjonsnummer", {
          maxLength: {
            value: 9,
            message: "Organisasjonsnummer har maks 9 siffer"
          }
        })} errorLabel={form.formState.errors.organisasjonsnummer?.message} />
                    <Button type="submit" data-size="small">
                        Send inn
                    </Button>
                </Flex>
            </form>;
  },
  args: {
    label: "Organisasjonsnummer",
    maxLength: 11,
    inputMode: "numeric",
    placeholder: "000 000 000"
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Pattern",
  render: args => {
    const form = useForm<{
      fodselsnummer: string;
    }>();
    const {
      registerWithFodselsnummerMask
    } = registerWithMasks(form);
    return <form onSubmit={form.handleSubmit(() => undefined)} noValidate>
                <Flex direction="column" gap="m" style={{
        maxWidth: "24rem"
      }}>
                    <TextInput {...args} {...registerWithFodselsnummerMask("fodselsnummer", {
          pattern: {
            value: /^\\d{11}$/,
            message: "Fødselsnummer må være nøyaktig 11 siffer"
          }
        })} errorLabel={form.formState.errors.fodselsnummer?.message} />
                    <Button type="submit" data-size="small">
                        Send inn
                    </Button>
                </Flex>
            </form>;
  },
  args: {
    label: "Fødselsnummer",
    maxLength: 12,
    inputMode: "numeric",
    placeholder: "000000 00000"
  }
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Validate",
  render: args => {
    const form = useForm<{
      mobilnummer: string;
    }>();
    const {
      registerWithTelefonnummerMask
    } = registerWithMasks(form);
    return <form onSubmit={form.handleSubmit(() => undefined)} noValidate>
                <Flex direction="column" gap="m" style={{
        maxWidth: "24rem"
      }}>
                    <TextInput {...args} {...registerWithTelefonnummerMask("mobilnummer", {
          validate: value => /^(4|9)/.test(value.replace(/\\s/g, "")) || "Oppgi et norsk mobilnummer"
        })} errorLabel={form.formState.errors.mobilnummer?.message} />
                    <Button type="submit" data-size="small">
                        Send inn
                    </Button>
                </Flex>
            </form>;
  },
  args: {
    label: "Mobilnummer",
    maxLength: 11,
    inputMode: "tel",
    placeholder: "000 00 000"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  render: args => {
    const form = useForm<{
      kontonummer: string;
    }>();
    const {
      registerWithKontonummerMask
    } = registerWithMasks(form);
    return <TextInput {...args} {...registerWithKontonummerMask("kontonummer", {
      disabled: true
    })} />;
  },
  args: {
    label: "Kontonummer",
    defaultValue: "1234 56 78903",
    maxLength: 13
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "onChange",
  parameters: {
    docs: {
      description: {
        story: "Egen onChange-callback kjøres i tillegg til maskeringen. Se «Actions»-panelet."
      }
    }
  },
  render: args => {
    const form = useForm<{
      kortnummer: string;
    }>();
    const {
      registerWithKortnummerMask
    } = registerWithMasks(form);
    return <TextInput {...args} {...registerWithKortnummerMask("kortnummer", {
      onChange: fn()
    })} />;
  },
  args: {
    label: "Kortnummer",
    maxLength: 19,
    inputMode: "numeric",
    placeholder: "0000 0000 0000 0000"
  }
}`,...h.parameters?.docs?.source}}};const $=["OptionRequired","OptionMinLength","OptionMaxLength","OptionPattern","OptionValidate","OptionDisabled","OptionOnChange"];export{p as OptionDisabled,d as OptionMaxLength,l as OptionMinLength,h as OptionOnChange,g as OptionPattern,u as OptionRequired,c as OptionValidate,$ as __namedExportsOrder,U as default};
