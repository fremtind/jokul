import{j as s}from"./iframe-BJSFL0jY.js";import{T as f}from"./TextArea-BbAp-sks.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CNaIIao_.js";import"./useId-DFTQ_vHR.js";import"./types-BlFGa32c.js";import"./Label-8jXvBe7O.js";import"./SupportLabel-CS6FSlss.js";import"./SuccessIcon-DislpJYr.js";import"./Icon-Bfw_sYj4.js";import"./WarningIcon-CJfPAawV.js";import"./mergeRefs-_7lZvp9j.js";const{expect:o,userEvent:g,waitFor:x,within:h}=__STORYBOOK_MODULE_TEST__,P={title:"Komponenter/TextArea",component:f,args:{label:"Tilleggsinformasjon",description:"Legg til relevant informasjon som kan påvirke saken.",counter:{maxLength:200,hideProgress:!1},autoExpand:!1,inline:!1,rows:7,startOpen:!0,readOnly:!1,disabled:!1,errorLabel:""},argTypes:{rows:{control:{type:"select"},options:[3,4,5,6,7,8,9,10]}}},l={args:{label:"Har du noen tilbakemeldinger til oss?",description:"Din tilbakemelding hjelper oss å bli bedre."}},i={args:{label:"Beskriv skaden",errorLabel:"Du må beskrive skaden for å fortsette"}},c={args:{disabled:!0,defaultValue:"Bilen ble påkjørt bakfra i et veikryss."}},d={args:{readOnly:!0,defaultValue:"Bilen ble påkjørt bakfra i et veikryss.",counter:{maxLength:400,hideProgress:!1}}},p={args:{autoExpand:!0}},u={args:{label:"Melding til ekstern tjeneste",description:"Brukes når en integrasjon håndhever en bytegrense.",counter:{maxLength:4096,strategy:"bytes",hideProgress:!1}}},m={args:{errorLabel:"Du må beskrive skaden for å fortsette"}},k=Array.from({length:12},(t,a)=>`Linje ${a+1} i en lang tekst som gjør feltet høyere enn standard.`).join(`
`),r={args:{autoExpand:!0,defaultValue:k,counter:{maxLength:2e3,hideProgress:!1}},render:t=>s.jsxs("div",{"data-testid":"scroll-container",style:{height:520,overflowY:"scroll",border:"1px solid"},children:[s.jsx("div",{style:{height:150},children:"Innhold over feltet"}),s.jsx(f,{...t}),s.jsx("div",{style:{height:600},children:"Innhold under feltet"})]}),play:async({canvasElement:t})=>{const a=h(t),e=a.getByTestId("scroll-container"),b=a.getByRole("textbox");e.scrollTop=120;const n=e.scrollTop;o(n).toBeGreaterThan(0),await g.click(b),await x(()=>o(e.scrollTop).toBe(n)),await g.type(b,"a"),await x(()=>o(e.scrollTop).toBe(n)),await g.tab(),await x(()=>o(e.scrollTop).toBe(n))}},F=["TextArea","Rows","Disabled","ReadOnly","AutoExpand","ByteCounter","_Error","AutoExpandScrollHopp"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Har du noen tilbakemeldinger til oss?",
    description: "Din tilbakemelding hjelper oss å bli bedre."
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Beskriv skaden",
    errorLabel: "Du må beskrive skaden for å fortsette"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "Bilen ble påkjørt bakfra i et veikryss."
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: "Bilen ble påkjørt bakfra i et veikryss.",
    counter: {
      maxLength: 400,
      hideProgress: false
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    autoExpand: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Melding til ekstern tjeneste",
    description: "Brukes når en integrasjon håndhever en bytegrense.",
    counter: {
      maxLength: 4096,
      strategy: "bytes",
      hideProgress: false
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    errorLabel: "Du må beskrive skaden for å fortsette"
  }
}`,...m.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    autoExpand: true,
    defaultValue: lang,
    counter: {
      maxLength: 2000,
      hideProgress: false
    }
  },
  render: args => <div data-testid="scroll-container" style={{
    height: 520,
    overflowY: "scroll",
    border: "1px solid"
  }}>
            <div style={{
      height: 150
    }}>Innhold over feltet</div>
            <TextAreaComponent {...args} />
            <div style={{
      height: 600
    }}>Innhold under feltet</div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId("scroll-container");
    const textarea = canvas.getByRole("textbox");
    container.scrollTop = 120;
    const before = container.scrollTop;
    expect(before).toBeGreaterThan(0);
    await userEvent.click(textarea);
    await waitFor(() => expect(container.scrollTop).toBe(before));
    await userEvent.type(textarea, "a");
    await waitFor(() => expect(container.scrollTop).toBe(before));
    await userEvent.tab();
    await waitFor(() => expect(container.scrollTop).toBe(before));
  }
}`,...r.parameters?.docs?.source},description:{story:"Reproduserer #6848: scroll-containeren hopper ved fokus, blur og tastetrykk.",...r.parameters?.docs?.description}}};export{p as AutoExpand,r as AutoExpandScrollHopp,u as ByteCounter,c as Disabled,d as ReadOnly,i as Rows,l as TextArea,m as _Error,F as __namedExportsOrder,P as default};
