import{j as n,R as v}from"./iframe-BJKLVHBW.js";import{N as u}from"./_index-B45W39ey.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-PO4j1EW7.js";import"./InputGroup-Dnmfv0zJ.js";import"./useId--68G5vc6.js";import"./Label-B9mWKhIL.js";import"./SupportLabel-CuqxmaQc.js";import"./WarningIcon-Q977JN0d.js";import"./Icon-Dx10nCnm.js";import"./PlusIcon-2v4AhoIE.js";import"./MinusIcon-Dn1-T2xv.js";const{expect:l,fn:w,within:x}=__STORYBOOK_MODULE_TEST__,_={title:"Komponenter/NumberInput",component:u,parameters:{layout:"padded",controls:{include:["label","description","helpLabel","errorLabel","placeholder","defaultValue","min","max","step","width","align","stepper","disabled","readOnly","required"]},docs:{description:{component:'Skjemakomponent for numeriske verdier basert på native `input type="number"`. Bruk `stepper` når du vil vise egne knapper for stepping.'}}},decorators:[e=>n.jsx("div",{style:{width:"min(100%, 24rem)"},children:n.jsx(e,{})})],args:{label:"Antall",placeholder:"0",min:0,step:1,width:"",stepper:!1,align:"left",disabled:!1,readOnly:!1,description:"",onChange:w()},argTypes:{max:{control:"number"}},tags:["autodocs"]},o={},p={name:"Med stepper",args:{label:"Antall personer",max:8,defaultValue:2,stepper:!0}},d={name:"Reiseforsikring med stepper",args:{label:"Antall reisende",description:"Velg hvor mange som skal være med på samme bestilling.",helpLabel:"Du kan legge til opptil 8 personer.",max:8,defaultValue:2,stepper:!0},render:e=>n.jsx(h,{...e}),play:async({args:e,canvasElement:a,userEvent:r,step:s})=>{const t=x(a),i=t.getByLabelText("Antall reisende"),g=t.getByRole("button",{name:"Øk verdien"}),f=t.getByRole("button",{name:"Senk verdien"});await s("Øk og senk antall reisende",async()=>{await r.click(g),await r.click(g),await r.click(f)}),await s("Vis oppdatert oppsummering",async()=>{await l(i).toHaveValue(3),await l(t.getByTestId("travel-summary")).toHaveTextContent("3 reisende dekkes"),await l(t.getByTestId("travel-summary")).toHaveTextContent("387 kr per måned"),await l(e.onChange).toHaveBeenCalled()})}},m={name:"Egenandel ved skade",args:{label:"Egenandel",description:"Oppgi ønsket egenandel for å sammenligne alternativer.",helpLabel:"Beløpet må være mellom 0 og 15 000 kroner.",max:15e3,step:500,defaultValue:4e3},render:e=>n.jsx(V,{...e}),play:async({args:e,canvasElement:a,userEvent:r,step:s})=>{const t=x(a),i=t.getByLabelText("Egenandel");await s("Oppdater egenandelen",async()=>{await r.clear(i),await r.type(i,"6000")}),await s("Vis oppdatert valgt beløp",async()=>{await l(i).toHaveValue(6e3),await l(t.getByTestId("deductible-summary")).toHaveTextContent(/6.?000 kr/),await l(e.onChange).toHaveBeenCalled()})}},c={name:"Ugyldig verdi",args:{label:"Antall unge førere",description:"Oppgi hvor mange førere under 23 år som skal stå i avtalen.",errorLabel:"Du kan maksimalt legge til 4 unge førere per avtale.",max:4,defaultValue:5,stepper:!0}};function h(e){const[a,r]=v.useState(()=>k(e.defaultValue,2));return n.jsxs("div",{style:{display:"grid",gap:"16px"},children:[n.jsx(u,{...e,value:a,defaultValue:void 0,onChange:s=>{const t=s.target.valueAsNumber;Number.isNaN(t)||r(t),e.onChange?.(s)}}),n.jsxs(y,{testId:"travel-summary",children:[n.jsxs("strong",{children:[a," reisende dekkes"]}),n.jsxs("span",{children:["Estimert pris: ",b(a*129)," kr per måned"]})]})]})}function V(e){const[a,r]=v.useState(()=>k(e.defaultValue,4e3));return n.jsxs("div",{style:{display:"grid",gap:"16px"},children:[n.jsx(u,{...e,value:a,defaultValue:void 0,onChange:s=>{const t=s.target.value;r(t===""?"":Number(t)),e.onChange?.(s)}}),n.jsxs(y,{testId:"deductible-summary",children:[n.jsx("strong",{children:"Valgt egenandel"}),n.jsx("span",{children:a===""?"Ikke valgt ennå":`${b(Number(a))} kr`})]})]})}function y({children:e,testId:a}){return n.jsx("div",{"data-testid":a,style:{display:"grid",gap:"4px",padding:"16px",borderRadius:"12px",background:"var(--jkl-color-background-container-low)"},children:e})}function k(e,a){if(typeof e=="number"||typeof e=="string"){const r=Number(e);if(!Number.isNaN(r))return r}return a}function b(e){return new Intl.NumberFormat("nb-NO").format(e)}o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Med stepper",
  args: {
    label: "Antall personer",
    max: 8,
    defaultValue: 2,
    stepper: true
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Reiseforsikring med stepper",
  args: {
    label: "Antall reisende",
    description: "Velg hvor mange som skal være med på samme bestilling.",
    helpLabel: "Du kan legge til opptil 8 personer.",
    max: 8,
    defaultValue: 2,
    stepper: true
  },
  render: args => <TravelInsuranceExample {...args} />,
  play: async ({
    args,
    canvasElement,
    userEvent,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Antall reisende");
    const increment = canvas.getByRole("button", {
      name: "Øk verdien"
    });
    const decrement = canvas.getByRole("button", {
      name: "Senk verdien"
    });
    await step("Øk og senk antall reisende", async () => {
      await userEvent.click(increment);
      await userEvent.click(increment);
      await userEvent.click(decrement);
    });
    await step("Vis oppdatert oppsummering", async () => {
      await expect(input).toHaveValue(3);
      await expect(canvas.getByTestId("travel-summary")).toHaveTextContent("3 reisende dekkes");
      await expect(canvas.getByTestId("travel-summary")).toHaveTextContent("387 kr per måned");
      await expect(args.onChange).toHaveBeenCalled();
    });
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Egenandel ved skade",
  args: {
    label: "Egenandel",
    description: "Oppgi ønsket egenandel for å sammenligne alternativer.",
    helpLabel: "Beløpet må være mellom 0 og 15 000 kroner.",
    max: 15_000,
    step: 500,
    defaultValue: 4_000
  },
  render: args => <DeductibleExample {...args} />,
  play: async ({
    args,
    canvasElement,
    userEvent,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Egenandel");
    await step("Oppdater egenandelen", async () => {
      await userEvent.clear(input);
      await userEvent.type(input, "6000");
    });
    await step("Vis oppdatert valgt beløp", async () => {
      await expect(input).toHaveValue(6000);
      await expect(canvas.getByTestId("deductible-summary")).toHaveTextContent(/6.?000 kr/);
      await expect(args.onChange).toHaveBeenCalled();
    });
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Ugyldig verdi",
  args: {
    label: "Antall unge førere",
    description: "Oppgi hvor mange førere under 23 år som skal stå i avtalen.",
    errorLabel: "Du kan maksimalt legge til 4 unge førere per avtale.",
    max: 4,
    defaultValue: 5,
    stepper: true
  }
}`,...c.parameters?.docs?.source}}};const D=["NumberInput","Stepper","Reiseforsikring","EgenandelVedSkade","UgyldigAntall"];export{m as EgenandelVedSkade,o as NumberInput,d as Reiseforsikring,p as Stepper,c as UgyldigAntall,D as __namedExportsOrder,_ as default};
