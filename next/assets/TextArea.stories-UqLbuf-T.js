import{r as E,j as i}from"./iframe-CZz6heH5.js";import{T as h}from"./TextArea-CS1Bl-do.js";/* empty css               */import{B}from"./Button-6EWXCNn7.js";import{T as j}from"./TextInput-DYq_uNA8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-B46sYTb6.js";import"./useId-B9CICPpo.js";import"./types-BlFGa32c.js";import"./Label-Cd5LBgVt.js";import"./SupportLabel-pIWps8rW.js";import"./SuccessIcon-B3AO0fyR.js";import"./Icon-XRI07lHz.js";import"./WarningIcon-BDNFAwOZ.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-DEXswDvx.js";import"./Loader-BHvlcpLI.js";import"./useDelayedRender-CNQP4bxI.js";import"./BaseTextInput-BND9TEZU.js";import"./IconButton-8XdPqxEv.js";const{configure:F,expect:a,fireEvent:R,userEvent:r,waitFor:o,within:l}=__STORYBOOK_MODULE_TEST__;F({asyncUtilTimeout:5e3});const Q={title:"Komponenter/TextArea",component:h,args:{label:"Tilleggsinformasjon",description:"Legg til relevant informasjon som kan påvirke saken.",counter:{maxLength:200,hideProgress:!1},autoExpand:!1,inline:!1,rows:7,startOpen:!0,readOnly:!1,disabled:!1,errorLabel:""},argTypes:{rows:{control:{type:"select"},options:[3,4,5,6,7,8,9,10]}}},s=t=>t.getBoundingClientRect().height,w=t=>t.querySelector(".jkl-text-area__counter-count"),d={args:{label:"Har du noen tilbakemeldinger til oss?",description:"Din tilbakemelding hjelper oss å bli bedre."},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");await r.type(e,"Fin tjeneste!"),await o(()=>a(w(t)).toHaveTextContent("13 / 200"))}},p={args:{label:"Beskriv skaden",description:"Fortell hva som skjedde, hvor og når."},render:t=>{const[e,n]=E.useState(4);return i.jsxs("div",{style:{display:"grid",gap:24},children:[i.jsx(j,{label:"Antall rader",type:"number",min:3,max:10,value:e,onChange:c=>n(Math.min(10,Math.max(3,Number(c.target.value)||3)))}),i.jsx(h,{...t,rows:e})]})},play:async({canvasElement:t})=>{const e=l(t),n=e.getByLabelText("Beskriv skaden"),c=e.getByLabelText("Antall rader"),T=s(n);R.change(c,{target:{value:"9"}}),await o(()=>a(s(n)).toBeGreaterThan(T))}},m={args:{label:"Kommentar til saksbehandler",description:"Valgfritt",startOpen:!1,rows:5,counter:void 0},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox"),n=s(e);await r.click(e),await o(()=>a(s(e)).toBeGreaterThan(n)),await r.tab(),await o(()=>a(s(e)).toBe(n)),await r.type(e,"Ring meg etter kl. 15"),await r.tab(),await o(()=>a(s(e)).toBeGreaterThan(n))}},g={args:{label:"Kommentar til saksbehandler",startOpen:!1,rows:5,counter:void 0,defaultValue:"Ring meg etter kl. 15"},render:t=>i.jsxs("form",{style:{display:"grid",gap:16,justifyItems:"start"},children:[i.jsx(h,{...t}),i.jsx(B,{type:"reset",variant:"secondary",children:"Tilbakestill"})]}),play:async({canvasElement:t})=>{const e=l(t),n=e.getByRole("textbox"),c=s(n);await r.clear(n),await r.tab(),await o(()=>a(s(n)).toBeLessThan(c)),await r.click(e.getByRole("button",{name:"Tilbakestill"})),await o(()=>a(s(n)).toBe(c))}},u={args:{label:"Beskrivelse av skaden",disabled:!0,defaultValue:"Bilen ble påkjørt bakfra i et veikryss."},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");a(e).toBeDisabled(),a(e).toHaveValue("Bilen ble påkjørt bakfra i et veikryss.")}},y={args:{label:"Beskrivelse av skaden",readOnly:!0,defaultValue:"Bilen ble påkjørt bakfra i et veikryss.",counter:{maxLength:400,hideProgress:!1}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");await r.type(e,"mer tekst"),a(e).toHaveValue("Bilen ble påkjørt bakfra i et veikryss.")}},x={args:{label:"Beskriv hendelsesforløpet",autoExpand:!0,rows:3,counter:void 0},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox"),n=s(e);await r.type(e,"Først kom bilen fra høyre{Enter}så bremset jeg{Enter}og så smalt det{Enter}ingen ble skadet{Enter}politiet kom"),CSS.supports("field-sizing","content")?await o(()=>a(s(e)).toBeGreaterThan(n)):a(s(e)).toBe(n),await r.clear(e),await o(()=>a(s(e)).toBe(n))}},v={args:{label:"Melding til ekstern tjeneste",description:"Brukes når en integrasjon håndhever en bytegrense.",counter:{maxLength:4096,strategy:"bytes",hideProgress:!1}},play:async({canvasElement:t})=>{await r.type(l(t).getByRole("textbox"),"æøå"),await o(()=>a(w(t)).toHaveTextContent("6 / 4096"))}},b={args:{label:"Beskriv skaden",errorLabel:"Du må beskrive skaden for å fortsette"},play:async({canvasElement:t})=>{const e=l(t);a(e.getByRole("textbox")).toHaveAttribute("aria-invalid","true"),a(e.getByText("Du må beskrive skaden for å fortsette")).toBeVisible()}},k={args:{label:"Skriv en kort oppsummering",counter:{maxLength:200,hideProgress:!1}},play:async({canvasElement:t})=>{const e=l(t).getByRole("textbox");await r.click(e),await r.paste("Dette er for langt. ".repeat(11)),await o(()=>a(e).toHaveAttribute("aria-invalid","true"))}},f={args:{label:"Utkast til melding",counter:{maxLength:50}},render:t=>{const[e,n]=E.useState("Hei, jeg lurer på noe");return i.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"start"},children:[i.jsx(h,{...t,value:e,onChange:c=>n(c.target.value)}),i.jsx(B,{variant:"secondary",onClick:()=>n(""),children:"Nullstill"})]})},play:async({canvasElement:t})=>{const e=l(t);await o(()=>a(w(t)).toHaveTextContent("21 / 50")),await r.click(e.getByRole("button",{name:"Nullstill"})),await o(()=>{a(e.getByRole("textbox")).toHaveValue(""),a(w(t)).toHaveTextContent("0 / 50")})}},W=["TextArea","Rows","ApnesVedFokus","Tilbakestilling","Disabled","ReadOnly","AutoExpand","ByteCounter","_Error","OverGrensen","Kontrollert"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Har du noen tilbakemeldinger til oss?",
    description: "Din tilbakemelding hjelper oss å bli bedre."
  },
  play: async ({
    canvasElement
  }) => {
    const felt = within(canvasElement).getByRole("textbox");
    await userEvent.type(felt, "Fin tjeneste!");
    await waitFor(() => expect(teller(canvasElement)).toHaveTextContent("13 / 200"));
  }
}`,...d.parameters?.docs?.source},description:{story:"Tilbakemeldingsskjema der telleren viser hvor mye plass brukeren har igjen.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Beskriv skaden",
    description: "Fortell hva som skjedde, hvor og når."
  },
  render: args => {
    const [rows, setRows] = useState(4);
    return <div style={{
      display: "grid",
      gap: 24
    }}>
                <TextInput label="Antall rader" type="number" min={3} max={10} value={rows} onChange={e => setRows(Math.min(10, Math.max(3, Number(e.target.value) || 3)))} />
                <TextAreaComponent {...args} rows={rows} />
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const felt = canvas.getByLabelText("Beskriv skaden");
    const antall = canvas.getByLabelText("Antall rader");
    const fire = hoyde(felt);
    fireEvent.change(antall, {
      target: {
        value: "9"
      }
    });
    await waitFor(() => expect(hoyde(felt)).toBeGreaterThan(fire));
  }
}`,...p.parameters?.docs?.source},description:{story:"Antall rader styres av `rows`. Endre tallet for å se feltet tilpasse seg.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Kommentar til saksbehandler",
    description: "Valgfritt",
    startOpen: false,
    rows: 5,
    counter: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const felt = within(canvasElement).getByRole("textbox");
    const lukket = hoyde(felt);
    await userEvent.click(felt);
    await waitFor(() => expect(hoyde(felt)).toBeGreaterThan(lukket));
    await userEvent.tab();
    await waitFor(() => expect(hoyde(felt)).toBe(lukket));
    await userEvent.type(felt, "Ring meg etter kl. 15");
    await userEvent.tab();
    await waitFor(() => expect(hoyde(felt)).toBeGreaterThan(lukket));
  }
}`,...m.parameters?.docs?.source},description:{story:"Felt som starter lukket og åpner seg når brukeren begynner å skrive.",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Kommentar til saksbehandler",
    startOpen: false,
    rows: 5,
    counter: undefined,
    defaultValue: "Ring meg etter kl. 15"
  },
  render: args => <form style={{
    display: "grid",
    gap: 16,
    justifyItems: "start"
  }}>
            <TextAreaComponent {...args} />
            <Button type="reset" variant="secondary">
                Tilbakestill
            </Button>
        </form>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const felt = canvas.getByRole("textbox");
    const apen = hoyde(felt);
    await userEvent.clear(felt);
    await userEvent.tab();
    await waitFor(() => expect(hoyde(felt)).toBeLessThan(apen));
    await userEvent.click(canvas.getByRole("button", {
      name: "Tilbakestill"
    }));
    await waitFor(() => expect(hoyde(felt)).toBe(apen));
  }
}`,...g.parameters?.docs?.source},description:{story:"Feltet følger DOM-verdien: det blir åpent igjen når form.reset() gjenoppretter teksten.",...g.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Beskrivelse av skaden",
    disabled: true,
    defaultValue: "Bilen ble påkjørt bakfra i et veikryss."
  },
  play: async ({
    canvasElement
  }) => {
    const felt = within(canvasElement).getByRole("textbox");
    expect(felt).toBeDisabled();
    expect(felt).toHaveValue("Bilen ble påkjørt bakfra i et veikryss.");
  }
}`,...u.parameters?.docs?.source},description:{story:"Utfylt felt som låses for redigering etter innsending.",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Beskrivelse av skaden",
    readOnly: true,
    defaultValue: "Bilen ble påkjørt bakfra i et veikryss.",
    counter: {
      maxLength: 400,
      hideProgress: false
    }
  },
  play: async ({
    canvasElement
  }) => {
    const felt = within(canvasElement).getByRole("textbox");
    await userEvent.type(felt, "mer tekst");
    expect(felt).toHaveValue("Bilen ble påkjørt bakfra i et veikryss.");
  }
}`,...y.parameters?.docs?.source},description:{story:"Innsendt beskrivelse som vises som lesbar tekst i en oppsummering.",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Beskriv hendelsesforløpet",
    autoExpand: true,
    rows: 3,
    counter: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const felt = within(canvasElement).getByRole("textbox");
    const start = hoyde(felt);
    await userEvent.type(felt, "Først kom bilen fra høyre{Enter}så bremset jeg{Enter}og så smalt det{Enter}ingen ble skadet{Enter}politiet kom");

    // Uten støtte for field-sizing beholder feltet fast høyde og vanlig scrolling
    if (CSS.supports("field-sizing", "content")) {
      await waitFor(() => expect(hoyde(felt)).toBeGreaterThan(start));
    } else {
      expect(hoyde(felt)).toBe(start);
    }
    await userEvent.clear(felt);
    await waitFor(() => expect(hoyde(felt)).toBe(start));
  }
}`,...x.parameters?.docs?.source},description:{story:"Beskrivelse av et hendelsesforløp der lengden er ukjent på forhånd.",...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Melding til ekstern tjeneste",
    description: "Brukes når en integrasjon håndhever en bytegrense.",
    counter: {
      maxLength: 4096,
      strategy: "bytes",
      hideProgress: false
    }
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.type(within(canvasElement).getByRole("textbox"), "æøå");
    await waitFor(() => expect(teller(canvasElement)).toHaveTextContent("6 / 4096"));
  }
}`,...v.parameters?.docs?.source},description:{story:"Når en integrasjon håndhever en bytegrense, teller æ, ø og å som to.",...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Beskriv skaden",
    errorLabel: "Du må beskrive skaden for å fortsette"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    expect(canvas.getByText("Du må beskrive skaden for å fortsette")).toBeVisible();
  }
}`,...b.parameters?.docs?.source},description:{story:"Feilmelding når beskrivelsen mangler.",...b.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Skriv en kort oppsummering",
    counter: {
      maxLength: 200,
      hideProgress: false
    }
  },
  play: async ({
    canvasElement
  }) => {
    const felt = within(canvasElement).getByRole("textbox");
    await userEvent.click(felt);
    await userEvent.paste("Dette er for langt. ".repeat(11));
    await waitFor(() => expect(felt).toHaveAttribute("aria-invalid", "true"));
  }
}`,...k.parameters?.docs?.source},description:{story:"Feltet markeres som ugyldig når brukeren skriver mer enn grensen.",...k.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Utkast til melding",
    counter: {
      maxLength: 50
    }
  },
  render: args => {
    const [verdi, setVerdi] = useState("Hei, jeg lurer på noe");
    return <div style={{
      display: "grid",
      gap: 16,
      justifyItems: "start"
    }}>
                <TextAreaComponent {...args} value={verdi} onChange={e => setVerdi(e.target.value)} />
                <Button variant="secondary" onClick={() => setVerdi("")}>
                    Nullstill
                </Button>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => expect(teller(canvasElement)).toHaveTextContent("21 / 50"));
    await userEvent.click(canvas.getByRole("button", {
      name: "Nullstill"
    }));
    await waitFor(() => {
      expect(canvas.getByRole("textbox")).toHaveValue("");
      expect(teller(canvasElement)).toHaveTextContent("0 / 50");
    });
  }
}`,...f.parameters?.docs?.source},description:{story:"Kontrollert felt, for eksempel et utkast som kan nullstilles.",...f.parameters?.docs?.description}}};export{m as ApnesVedFokus,x as AutoExpand,v as ByteCounter,u as Disabled,f as Kontrollert,k as OverGrensen,y as ReadOnly,p as Rows,d as TextArea,g as Tilbakestilling,b as _Error,W as __namedExportsOrder,Q as default};
