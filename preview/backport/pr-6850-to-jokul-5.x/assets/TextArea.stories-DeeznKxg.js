import{j as o}from"./iframe-D14DQMNp.js";import{T as h}from"./TextArea-B2bz0Ii8.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-tbBES0A5.js";import"./useId-Cruh5tV8.js";import"./Label-RkvDwQf6.js";import"./SupportLabel-D70rlve0.js";import"./SuccessIcon-DaMkAXqo.js";import"./Icon-Id54gOCg.js";import"./WarningIcon-FFgrJmIi.js";import"./mergeRefs-_7lZvp9j.js";const{expect:s,userEvent:g,waitFor:u,within:b}=__STORYBOOK_MODULE_TEST__,R={title:"Komponenter/TextArea",component:h,args:{label:"Tilleggsinformasjon",description:"Legg til relevant informasjon som kan påvirke saken.",counter:{maxLength:200,hideProgress:!1},autoExpand:!1,inline:!1,rows:7,startOpen:!0,readOnly:!1,disabled:!1,errorLabel:""},argTypes:{rows:{control:{type:"select"},options:[3,4,5,6,7,8,9,10]}}},l={args:{label:"Har du noen tilbakemeldinger til oss?",description:"Din tilbakemelding hjelper oss å bli bedre."}},i={args:{label:"Beskriv skaden",errorLabel:"Du må beskrive skaden for å fortsette"}},c={args:{counter:{maxLength:400,hideProgress:!1}}},d={args:{autoExpand:!0}},p={args:{label:"Melding til ekstern tjeneste",description:"Brukes når en integrasjon håndhever en bytegrense.",counter:{maxLength:4096,strategy:"bytes",hideProgress:!1}}},m={args:{errorLabel:"Du må beskrive skaden for å fortsette"}},f=Array.from({length:12},(t,n)=>`Linje ${n+1} i en lang tekst som gjør feltet høyere enn standard.`).join(`
`),r={args:{autoExpand:!0,defaultValue:f,counter:{maxLength:2e3,hideProgress:!1}},render:t=>o.jsxs("div",{"data-testid":"scroll-container",style:{height:520,overflowY:"scroll",border:"1px solid"},children:[o.jsx("div",{style:{height:150},children:"Innhold over feltet"}),o.jsx(h,{...t}),o.jsx("div",{style:{height:600},children:"Innhold under feltet"})]}),play:async({canvasElement:t})=>{const n=b(t),e=n.getByTestId("scroll-container"),x=n.getByRole("textbox");e.scrollTop=120;const a=e.scrollTop;s(a).toBeGreaterThan(0),await g.click(x),await u(()=>s(e.scrollTop).toBe(a)),await g.type(x,"a"),await u(()=>s(e.scrollTop).toBe(a)),await g.tab(),await u(()=>s(e.scrollTop).toBe(a))}},D=["TextArea","Rows","ReadOnly","AutoExpand","ByteCounter","_Error","AutoExpandScrollHopp"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    counter: {
      maxLength: 400,
      hideProgress: false
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    autoExpand: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Melding til ekstern tjeneste",
    description: "Brukes når en integrasjon håndhever en bytegrense.",
    counter: {
      maxLength: 4096,
      strategy: "bytes",
      hideProgress: false
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Reproduserer #6848: scroll-containeren hopper ved fokus, blur og tastetrykk.",...r.parameters?.docs?.description}}};export{d as AutoExpand,r as AutoExpandScrollHopp,p as ByteCounter,c as ReadOnly,i as Rows,l as TextArea,m as _Error,D as __namedExportsOrder,R as default};
