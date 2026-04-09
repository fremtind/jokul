import{j as a,R as b}from"./iframe-QPc0IBld.js";import{N as u}from"./_index-DFO0QKKH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./mergeRefs-DBZboEgd.js";import"./InputGroup-CxPtFf8W.js";import"./useId-sPtuzADl.js";import"./Label-KZLiaYNT.js";import"./SupportLabel-Ba37nKSf.js";import"./WarningIcon-BJV8RI0b.js";import"./Icon-D51viLaQ.js";import"./MinusIcon-CYtuFvc4.js";import"./PlusIcon-CGwXdbGS.js";const{expect:l,fn:h,within:v}=__STORYBOOK_MODULE_TEST__,_={title:"Komponenter/NumberInput",component:u,parameters:{layout:"padded",controls:{include:["label","description","helpLabel","errorLabel","placeholder","defaultValue","min","max","step","width","align","stepper","disabled","readOnly","required","data-size"]},docs:{description:{component:'Skjemakomponent for numeriske verdier basert på native `input type="number"`. Bruk `stepper` når du vil vise egne knapper for stepping.'}}},decorators:[e=>a.jsx("div",{style:{width:"min(100%, 24rem)"},children:a.jsx(e,{})})],argTypes:{label:{control:"text",description:"Ledetekst for feltet."},description:{control:"text",description:"Forklarende tekst som vises mellom label og felt."},helpLabel:{control:"text",description:"Hjelpetekst som vises under feltet når det ikke finnes feil."},errorLabel:{control:"text",description:"Feilmelding som markerer feltet som ugyldig."},placeholder:{control:"text",description:"Hint som vises når feltet er tomt."},defaultValue:{control:"number",description:"Startverdi for et uncontrolled felt."},min:{control:"number",description:"Nedre grense for native validering og stepping."},max:{control:"number",description:"Øvre grense for native validering og stepping."},step:{control:"number",description:"Steglengde for native stepping."},width:{control:"text",description:"Absolutt verdi for bredden til input-feltet."},align:{control:{type:"inline-radio"},options:["left","right"],description:"Justerer teksten i inputfeltet.",table:{defaultValue:{summary:"left"}}},stepper:{control:"boolean",description:"Viser knapper på hver side av feltet som bruker native stepping.",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Deaktiverer feltet og stepper-knappene.",table:{defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"Gjør feltet skrivebeskyttet og deaktiverer stepper-knappene.",table:{defaultValue:{summary:"false"}}},required:{control:"boolean",description:"Markerer feltet som obligatorisk."},"data-size":{control:{type:"select"},options:["small","medium","large"],description:"Visuell størrelse på feltet."},className:{table:{disable:!0}},inputClassName:{table:{disable:!0}},id:{table:{disable:!0}},labelProps:{table:{disable:!0}},supportLabelProps:{table:{disable:!0}},tooltip:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onChange:{control:!1,table:{disable:!0}}},args:{label:"Antall",placeholder:"0",min:0,step:1,width:"",stepper:!1,align:"left",disabled:!1,readOnly:!1,description:"",onChange:h()},tags:["autodocs"]},o={},p={name:"Med stepper",args:{label:"Antall personer",max:8,defaultValue:2,stepper:!0}},d={name:"Reiseforsikring med stepper",args:{label:"Antall reisende",description:"Velg hvor mange som skal være med på samme bestilling.",helpLabel:"Du kan legge til opptil 8 personer.",max:8,defaultValue:2,stepper:!0},render:e=>a.jsx(w,{...e}),play:async({args:e,canvasElement:t,userEvent:r,step:s})=>{const n=v(t),i=n.getByLabelText("Antall reisende"),g=n.getByRole("button",{name:"Øk verdien"}),x=n.getByRole("button",{name:"Senk verdien"});await s("Øk og senk antall reisende",async()=>{await r.click(g),await r.click(g),await r.click(x)}),await s("Vis oppdatert oppsummering",async()=>{await l(i).toHaveValue(3),await l(n.getByTestId("travel-summary")).toHaveTextContent("3 reisende dekkes"),await l(n.getByTestId("travel-summary")).toHaveTextContent("387 kr per måned"),await l(e.onChange).toHaveBeenCalled()})}},c={name:"Egenandel ved skade",args:{label:"Egenandel",description:"Oppgi ønsket egenandel for å sammenligne alternativer.",helpLabel:"Beløpet må være mellom 0 og 15 000 kroner.",max:15e3,step:500,defaultValue:4e3},render:e=>a.jsx(V,{...e}),play:async({args:e,canvasElement:t,userEvent:r,step:s})=>{const n=v(t),i=n.getByLabelText("Egenandel");await s("Oppdater egenandelen",async()=>{await r.clear(i),await r.type(i,"6000")}),await s("Vis oppdatert valgt beløp",async()=>{await l(i).toHaveValue(6e3),await l(n.getByTestId("deductible-summary")).toHaveTextContent(/6.?000 kr/),await l(e.onChange).toHaveBeenCalled()})}},m={name:"Ugyldig verdi",args:{label:"Antall unge førere",description:"Oppgi hvor mange førere under 23 år som skal stå i avtalen.",errorLabel:"Du kan maksimalt legge til 4 unge førere per avtale.",max:4,defaultValue:5,stepper:!0}};function w(e){const[t,r]=b.useState(()=>k(e.defaultValue,2));return a.jsxs("div",{style:{display:"grid",gap:"16px"},children:[a.jsx(u,{...e,value:t,defaultValue:void 0,onChange:s=>{const n=s.target.valueAsNumber;Number.isNaN(n)||r(n),e.onChange?.(s)}}),a.jsxs(f,{testId:"travel-summary",children:[a.jsxs("strong",{children:[t," reisende dekkes"]}),a.jsxs("span",{children:["Estimert pris: ",y(t*129)," kr per måned"]})]})]})}function V(e){const[t,r]=b.useState(()=>k(e.defaultValue,4e3));return a.jsxs("div",{style:{display:"grid",gap:"16px"},children:[a.jsx(u,{...e,value:t,defaultValue:void 0,onChange:s=>{const n=s.target.value;r(n===""?"":Number(n)),e.onChange?.(s)}}),a.jsxs(f,{testId:"deductible-summary",children:[a.jsx("strong",{children:"Valgt egenandel"}),a.jsx("span",{children:t===""?"Ikke valgt ennå":`${y(Number(t))} kr`})]})]})}function f({children:e,testId:t}){return a.jsx("div",{"data-testid":t,style:{display:"grid",gap:"4px",padding:"16px",borderRadius:"12px",background:"var(--jkl-color-background-container-low)"},children:e})}function k(e,t){if(typeof e=="number"||typeof e=="string"){const r=Number(e);if(!Number.isNaN(r))return r}return t}function y(e){return new Intl.NumberFormat("nb-NO").format(e)}o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Ugyldig verdi",
  args: {
    label: "Antall unge førere",
    description: "Oppgi hvor mange førere under 23 år som skal stå i avtalen.",
    errorLabel: "Du kan maksimalt legge til 4 unge førere per avtale.",
    max: 4,
    defaultValue: 5,
    stepper: true
  }
}`,...m.parameters?.docs?.source}}};const D=["NumberInput","Stepper","Reiseforsikring","EgenandelVedSkade","UgyldigAntall"];export{c as EgenandelVedSkade,o as NumberInput,d as Reiseforsikring,p as Stepper,m as UgyldigAntall,D as __namedExportsOrder,_ as default};
