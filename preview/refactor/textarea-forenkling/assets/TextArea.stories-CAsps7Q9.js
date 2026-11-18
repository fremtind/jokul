import{r as E,j as i}from"./iframe-BJ-Z_Cjo.js";import{T as w}from"./TextArea-BYHTvmV8.js";/* empty css               */import{B}from"./Button-CPbyi7ar.js";import{T as j}from"./TextInput-cNCxoS2A.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CwozJa9D.js";import"./useId-37GC0E8t.js";import"./types-BlFGa32c.js";import"./Label-CIuZ6ANC.js";import"./SupportLabel-7UNTNFvJ.js";import"./SuccessIcon-CnIOOGtD.js";import"./Icon-BJ9LRX6a.js";import"./WarningIcon-CJGiKuPC.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-D4RYUxRN.js";import"./Loader-CxxmfuY-.js";import"./useDelayedRender-_u_ZjWg4.js";import"./BaseTextInput-DKtnN0Zn.js";import"./IconButton-CbZTb12s.js";const{configure:T,expect:a,fireEvent:F,userEvent:r,waitFor:s,within:o}=__STORYBOOK_MODULE_TEST__;T({asyncUtilTimeout:5e3});const J={title:"Komponenter/TextArea",component:w,args:{label:"Tilleggsinformasjon",description:"Legg til relevant informasjon som kan påvirke saken.",counter:{maxLength:200,hideProgress:!1},autoExpand:!1,inline:!1,rows:7,startOpen:!0,readOnly:!1,disabled:!1,errorLabel:""},argTypes:{rows:{control:{type:"select"},options:[3,4,5,6,7,8,9,10]}}},l=t=>t.getBoundingClientRect().height,f=t=>t.querySelector(".jkl-text-area__counter-count"),d={args:{label:"Har du noen tilbakemeldinger til oss?",description:"Din tilbakemelding hjelper oss å bli bedre."},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");await r.type(e,"Fin tjeneste!"),await s(()=>a(f(t)).toHaveTextContent("13 / 200"))}},p={args:{label:"Beskriv skaden",description:"Fortell hva som skjedde, hvor og når."},render:t=>{const[e,n]=E.useState(4);return i.jsxs("div",{style:{display:"grid",gap:24},children:[i.jsx(j,{label:"Antall rader",type:"number",min:3,max:10,value:e,onChange:c=>n(Math.min(10,Math.max(3,Number(c.target.value)||3)))}),i.jsx(w,{...t,rows:e})]})},play:async({canvasElement:t})=>{const e=o(t),n=e.getByLabelText("Beskriv skaden"),c=e.getByLabelText("Antall rader"),h=l(n);F.change(c,{target:{value:"9"}}),await s(()=>a(l(n)).toBeGreaterThan(h))}},m={args:{label:"Kommentar til saksbehandler",description:"Valgfritt",startOpen:!1,rows:5,counter:void 0},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox"),n=l(e);await r.click(e),await s(()=>a(l(e)).toBeGreaterThan(n)),await r.tab(),await s(()=>a(l(e)).toBe(n)),await r.type(e,"Ring meg etter kl. 15"),await r.tab(),await s(()=>a(l(e)).toBeGreaterThan(n))}},u={args:{label:"Beskrivelse av skaden",disabled:!0,defaultValue:"Bilen ble påkjørt bakfra i et veikryss."},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");a(e).toBeDisabled(),a(e).toHaveValue("Bilen ble påkjørt bakfra i et veikryss.")}},g={args:{label:"Beskrivelse av skaden",readOnly:!0,defaultValue:"Bilen ble påkjørt bakfra i et veikryss.",counter:{maxLength:400,hideProgress:!1}},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");await r.type(e,"mer tekst"),a(e).toHaveValue("Bilen ble påkjørt bakfra i et veikryss.")}},x={args:{label:"Beskriv hendelsesforløpet",autoExpand:!0,rows:3,counter:void 0},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox"),n=l(e);await r.type(e,"Først kom bilen fra høyre{Enter}så bremset jeg{Enter}og så smalt det{Enter}ingen ble skadet{Enter}politiet kom"),await s(()=>a(l(e)).toBeGreaterThan(n)),await r.clear(e),await s(()=>a(l(e)).toBe(n))}},v={args:{label:"Melding til ekstern tjeneste",description:"Brukes når en integrasjon håndhever en bytegrense.",counter:{maxLength:4096,strategy:"bytes",hideProgress:!1}},play:async({canvasElement:t})=>{await r.type(o(t).getByRole("textbox"),"æøå"),await s(()=>a(f(t)).toHaveTextContent("6 / 4096"))}},y={args:{label:"Beskriv skaden",errorLabel:"Du må beskrive skaden for å fortsette"},play:async({canvasElement:t})=>{const e=o(t);a(e.getByRole("textbox")).toHaveAttribute("aria-invalid","true"),a(e.getByText("Du må beskrive skaden for å fortsette")).toBeVisible()}},k={args:{label:"Skriv en kort oppsummering",counter:{maxLength:200,hideProgress:!1}},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");await r.click(e),await r.paste("Dette er for langt. ".repeat(11)),await s(()=>a(e).toHaveAttribute("aria-invalid","true"))}},b={args:{label:"Utkast til melding",counter:{maxLength:50}},render:t=>{const[e,n]=E.useState("Hei, jeg lurer på noe");return i.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"start"},children:[i.jsx(w,{...t,value:e,onChange:c=>n(c.target.value)}),i.jsx(B,{variant:"secondary",onClick:()=>n(""),children:"Nullstill"})]})},play:async({canvasElement:t})=>{const e=o(t);await s(()=>a(f(t)).toHaveTextContent("21 / 50")),await r.click(e.getByRole("button",{name:"Nullstill"})),await s(()=>{a(e.getByRole("textbox")).toHaveValue(""),a(f(t)).toHaveTextContent("0 / 50")})}},Q=["TextArea","Rows","ApnesVedFokus","Disabled","ReadOnly","AutoExpand","ByteCounter","_Error","OverGrensen","Kontrollert"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Felt som starter lukket og åpner seg når brukeren begynner å skrive.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Utfylt felt som låses for redigering etter innsending.",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Innsendt beskrivelse som vises som lesbar tekst i en oppsummering.",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    await waitFor(() => expect(hoyde(felt)).toBeGreaterThan(start));
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
}`,...v.parameters?.docs?.source},description:{story:"Når en integrasjon håndhever en bytegrense, teller æ, ø og å som to.",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Feilmelding når beskrivelsen mangler.",...y.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Feltet markeres som ugyldig når brukeren skriver mer enn grensen.",...k.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Kontrollert felt, for eksempel et utkast som kan nullstilles.",...b.parameters?.docs?.description}}};export{m as ApnesVedFokus,x as AutoExpand,v as ByteCounter,u as Disabled,b as Kontrollert,k as OverGrensen,g as ReadOnly,p as Rows,d as TextArea,y as _Error,Q as __namedExportsOrder,J as default};
