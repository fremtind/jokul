import{j as e,r as h}from"./iframe-BLNpsbZz.js";import{B as j}from"./Button-BdpfEjaH.js";import{C as x}from"./Checkbox-Cpg_rado.js";import{CheckboxStory as f}from"./Checkbox.stories-C7Iiye1E.js";import{F as l}from"./Flex-B7qFfxDd.js";import p,{UnitAlign as w}from"./TextInput.stories-C77sg9QW.js";import{M as F,a as O,b as G,c as U,d as _,e as H,f as J,g as N}from"./Modal-BUgBvNgj.js";import{u as P}from"./useModal-D3ioRMTb.js";/* empty css               */import{F as g}from"./FieldGroup-Cb0gr8N4.js";import{T as o}from"./TextInput-CSqxr0yy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-t0OyTIBL.js";import"./Loader-CXJPNTPO.js";import"./useDelayedRender-36WnAI9t.js";import"./useId-D5lXUgzX.js";import"./contactChoices-BqDGeJnV.js";import"./Label-Wc6SeeyB.js";import"./SupportLabel-DcstD1Mr.js";import"./WarningIcon-VPXvzMmB.js";import"./Icon-Dlx8pDqr.js";import"./SlotComponent-H-Ef-fbo.js";import"./mergeRefs-D2s68ZRt.js";/* empty css               */import"./IconButton-DLW9Nmj2.js";import"./CloseIcon-1F-QBzcJ.js";import"./index-vs8zaYkX.js";import"./index-Chjiymov.js";import"./InputGroup-b0cV6sDv.js";import"./BaseTextInput-BI5dLzNo.js";const{expect:s,screen:t,waitFor:i}=__STORYBOOK_MODULE_TEST__;function d({heading:n,body:a,openLabel:r,primaryLabel:E,secondaryLabel:L,padding:S,role:T="dialog",placement:R="center",slideIn:I=!1,showCloseButton:D=!0}){const[B,{title:A,overlay:C,container:M,modal:K,closeButton:V}]=P({title:n,role:T});return e.jsxs(e.Fragment,{children:[e.jsx(j,{onClick:()=>B?.show(),children:r}),e.jsxs(O,{...M,placement:R,slideIn:I,children:[e.jsx(G,{...C}),e.jsxs(F,{...K,padding:S,children:[e.jsxs(U,{children:[e.jsx(_,{...A,children:n}),D&&e.jsx(H,{...V})]}),e.jsx(J,{children:a}),e.jsxs(N,{children:[e.jsx(j,{variant:"primary",onClick:()=>B?.hide(),children:E}),L&&e.jsx(j,{onClick:()=>B?.hide(),children:L})]})]})]})]})}const je={title:"Komponenter/Modal",component:F,parameters:{layout:"centered"},args:{padding:40,role:"dialog",placement:"center",slideIn:!1,showCloseButton:!0},argTypes:{heading:{table:{disable:!0}},body:{table:{disable:!0}},openLabel:{table:{disable:!0}},primaryLabel:{table:{disable:!0}},secondaryLabel:{table:{disable:!0}},padding:{control:"radio",options:[16,24,40],table:{defaultValue:{summary:"40"}}},role:{control:"select",options:["dialog","alertdialog"],table:{defaultValue:{summary:"dialog"}}},placement:{control:"select",options:["center","left","bottom","right"],table:{defaultValue:{summary:"center"}}},slideIn:{control:"boolean",table:{defaultValue:{summary:"false"}}},showCloseButton:{control:"boolean",table:{defaultValue:{summary:"true"}}}},tags:["autodocs"]},c={name:"Bekreft kansellering",args:{heading:"Bekreft kansellering",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Er du sikker på at du vil kansellere reiseforsikringen?"}),e.jsx(g,{legend:"Kanselleringen gjelder",children:["Reiseforsikring Pluss","Familiedekning"].map(n=>h.createElement(x,{...f.args,key:n,name:"produkt",value:n},n))})]}),openLabel:"Kanseller forsikring",primaryLabel:"Kanseller",secondaryLabel:"Avbryt"},render:n=>e.jsx(d,{...n}),play:async({userEvent:n,step:a})=>{await a("Åpne modal",async()=>{const r=t.getByRole("button",{name:/kanseller forsikring/i});await n.click(r),await i(()=>{s(t.getByRole("heading",{name:/bekreft kansellering/i})).toBeInTheDocument()})})}},m={name:"Kritisk advarsel",args:{heading:"Dette kan ikke angres",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Når du fortsetter, stoppes dekningen umiddelbart."}),e.jsx("p",{children:"Eventuelle pågående saker må avsluttes før du kan opprette en ny avtale."})]}),openLabel:"Vis advarsel",primaryLabel:"Stopp dekning",secondaryLabel:"Avbryt",role:"alertdialog"},render:n=>e.jsx(d,{...n}),play:async({userEvent:n,step:a})=>{await a("Åpne modal",async()=>{const r=t.getByRole("button",{name:/vis advarsel/i});await n.click(r),await i(()=>{s(t.getByRole("heading",{name:/dette kan ikke angres/i})).toBeInTheDocument()})})}},k={name:"Bunnark for dekning",args:{heading:"Velg dekning",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Velg hvilke dekninger som skal gjelde for avtalen."}),e.jsx("p",{children:"Dette eksempelet bruker bunnplassering og innskyving for å fungere som et ark."}),e.jsx(g,{legend:"Dekninger",children:["Reisegods","Avbestilling","Forsinket avgang","Egenandel"].map(n=>h.createElement(x,{...f.args,key:n,name:"dekning",value:n},n))}),e.jsx(g,{legend:"Tillegg",children:["Leiebil","Utvidet medisinsk"].map(n=>h.createElement(x,{...f.args,key:n,name:"tillegg",value:n},n))})]}),openLabel:"Åpne dekninger",primaryLabel:"Lagre valg",secondaryLabel:"Lukk",placement:"bottom",slideIn:!0},render:n=>e.jsx(d,{...n}),play:async({userEvent:n,step:a})=>{await a("Åpne bunnark",async()=>{const r=t.getByRole("button",{name:/åpne dekninger/i});await n.click(r),await i(()=>{s(t.getByRole("heading",{name:/velg dekning/i})).toBeInTheDocument()})})}},u={name:"Sidepanel for skade",args:{heading:"Skademelding",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Legg til bilder og beskrivelser av skaden."}),e.jsx("p",{children:"Sidepanel gir en rolig og kontekstnær flyt."}),e.jsx(g,{legend:"Skadedetaljer",children:e.jsxs(l,{direction:"column",gap:"s",children:[e.jsx(o,{...p.args,label:"Skadenummer",placeholder:"SKD-123456"}),e.jsx(o,{...p.args,label:"Dato for hendelse",placeholder:"dd.mm.åååå"}),e.jsx(o,{...p.args,label:"Sted",placeholder:"Oslo"})]})})]}),openLabel:"Start skademelding",primaryLabel:"Lagre skaden",secondaryLabel:"Avbryt",placement:"right",slideIn:!0},render:n=>e.jsx(d,{...n}),play:async({userEvent:n,step:a})=>{await a("Åpne sidepanel",async()=>{const r=t.getByRole("button",{name:/start skademelding/i});await n.click(r),await i(()=>{s(t.getByRole("heading",{name:/skademelding/i})).toBeInTheDocument()})})}},b={name:"Oppdater avtale",args:{heading:"Oppdater forsikringsavtale",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Dette er et eksempel på en bred modal som kan romme et skjema eller mer komplekst innhold."}),e.jsx("p",{children:"Full bredde gjør det enklere å vise detaljer om dekning og pris."}),e.jsx(g,{legend:"Kontakt og vilkår",children:e.jsxs(l,{direction:"column",gap:"s",children:[e.jsx(o,{...p.args,label:"E-post",placeholder:"ola.nordmann@eksempel.no"}),e.jsx(o,{...p.args,label:"Telefon",placeholder:"900 00 000"}),e.jsx(o,{...w.args||{},label:"Forsikringssum",placeholder:"0",unit:"kr"}),e.jsx(o,{...w.args||{},label:"Egenandel",placeholder:"0",unit:"kr"})]})})]}),openLabel:"Oppdater avtale",primaryLabel:"Lagre endringer",secondaryLabel:"Avbryt"},render:n=>e.jsx(d,{...n}),play:async({userEvent:n,step:a})=>{await a("Åpne modal",async()=>{const r=t.getByRole("button",{name:/oppdater avtale/i});await n.click(r),await i(()=>{s(t.getByRole("heading",{name:/oppdater forsikringsavtale/i})).toBeInTheDocument()})})}},y={name:"Lange vilkår",args:{heading:"Vilkår for forsikring",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Her kan du lese vilkår og begrensninger før du fortsetter."}),e.jsx("p",{children:"Dekningen gjelder fra registrert startdato og omfatter skade på reisegods, forsinket avgang og avbestilling innenfor vilkårene."}),e.jsx("p",{children:"Egenandel, unntak og dokumentasjonskrav fremgår av avtalen og kan variere med valgt dekning."}),e.jsx("p",{children:"Les hele avtalen for detaljer om ansvar, tidsfrister og begrensninger."})]}),openLabel:"Les vilkår",primaryLabel:"Jeg godtar",secondaryLabel:"Avbryt"},render:n=>e.jsx(d,{...n}),play:async({userEvent:n,step:a})=>{await a("Åpne modal",async()=>{const r=t.getByRole("button",{name:/les vilkår/i});await n.click(r),await i(()=>{s(t.getByRole("heading",{name:/vilkår for forsikring/i})).toBeInTheDocument()})})}},v={name:"Uten lukkeknapp",args:{heading:"Betalingsvalg",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Velg hvordan du vil betale forsikringen."}),e.jsx(g,{legend:"Alternativer",children:["Månedlig","Årlig","Trekk fra konto"].map(n=>h.createElement(x,{...f.args,key:n,name:"betalingsvalg",value:n},n))})]}),openLabel:"Velg betalingsmåte",primaryLabel:"Lagre valg",secondaryLabel:"Avbryt",showCloseButton:!1},render:n=>e.jsx(d,{...n}),play:async({userEvent:n,step:a})=>{await a("Åpne modal",async()=>{const r=t.getByRole("button",{name:/velg betalingsmåte/i});await n.click(r),await i(()=>{s(t.getByRole("heading",{name:/betalingsvalg/i})).toBeInTheDocument()})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Bekreft kansellering",
  args: {
    heading: "Bekreft kansellering",
    body: <Flex direction="column" gap="m">
                <p>Er du sikker på at du vil kansellere reiseforsikringen?</p>
                <FieldGroup legend="Kanselleringen gjelder">
                    {["Reiseforsikring Pluss", "Familiedekning"].map(produkt => <Checkbox {...CheckboxStory.args} key={produkt} name="produkt" value={produkt}>
                                {produkt}
                            </Checkbox>)}
                </FieldGroup>
            </Flex>,
    openLabel: "Kanseller forsikring",
    primaryLabel: "Kanseller",
    secondaryLabel: "Avbryt"
  },
  render: args => <ModalExample {...args} />,
  play: async ({
    userEvent,
    step
  }) => {
    await step("Åpne modal", async () => {
      const openButton = screen.getByRole("button", {
        name: /kanseller forsikring/i
      });
      await userEvent.click(openButton);
      await waitFor(() => {
        expect(screen.getByRole("heading", {
          name: /bekreft kansellering/i
        })).toBeInTheDocument();
      });
    });
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Kritisk advarsel",
  args: {
    heading: "Dette kan ikke angres",
    body: <Flex direction="column" gap="m">
                <p>Når du fortsetter, stoppes dekningen umiddelbart.</p>
                <p>
                    Eventuelle pågående saker må avsluttes før du kan opprette
                    en ny avtale.
                </p>
            </Flex>,
    openLabel: "Vis advarsel",
    primaryLabel: "Stopp dekning",
    secondaryLabel: "Avbryt",
    role: "alertdialog"
  },
  render: args => <ModalExample {...args} />,
  play: async ({
    userEvent,
    step
  }) => {
    await step("Åpne modal", async () => {
      const openButton = screen.getByRole("button", {
        name: /vis advarsel/i
      });
      await userEvent.click(openButton);
      await waitFor(() => {
        expect(screen.getByRole("heading", {
          name: /dette kan ikke angres/i
        })).toBeInTheDocument();
      });
    });
  }
}`,...m.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Bunnark for dekning",
  args: {
    heading: "Velg dekning",
    body: <Flex direction="column" gap="m">
                <p>Velg hvilke dekninger som skal gjelde for avtalen.</p>
                <p>
                    Dette eksempelet bruker bunnplassering og innskyving for å
                    fungere som et ark.
                </p>
                <FieldGroup legend="Dekninger">
                    {["Reisegods", "Avbestilling", "Forsinket avgang", "Egenandel"].map(dekning => <Checkbox {...CheckboxStory.args} key={dekning} name="dekning" value={dekning}>
                            {dekning}
                        </Checkbox>)}
                </FieldGroup>
                <FieldGroup legend="Tillegg">
                    {["Leiebil", "Utvidet medisinsk"].map(tillegg => <Checkbox {...CheckboxStory.args} key={tillegg} name="tillegg" value={tillegg}>
                            {tillegg}
                        </Checkbox>)}
                </FieldGroup>
            </Flex>,
    openLabel: "Åpne dekninger",
    primaryLabel: "Lagre valg",
    secondaryLabel: "Lukk",
    placement: "bottom",
    slideIn: true
  },
  render: args => <ModalExample {...args} />,
  play: async ({
    userEvent,
    step
  }) => {
    await step("Åpne bunnark", async () => {
      const openButton = screen.getByRole("button", {
        name: /åpne dekninger/i
      });
      await userEvent.click(openButton);
      await waitFor(() => {
        expect(screen.getByRole("heading", {
          name: /velg dekning/i
        })).toBeInTheDocument();
      });
    });
  }
}`,...k.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Sidepanel for skade",
  args: {
    heading: "Skademelding",
    body: <Flex direction="column" gap="m">
                <p>Legg til bilder og beskrivelser av skaden.</p>
                <p>Sidepanel gir en rolig og kontekstnær flyt.</p>
                <FieldGroup legend="Skadedetaljer">
                    <Flex direction="column" gap="s">
                        <TextInput {...TextInputStories.args} label="Skadenummer" placeholder="SKD-123456" />
                        <TextInput {...TextInputStories.args} label="Dato for hendelse" placeholder="dd.mm.åååå" />
                        <TextInput {...TextInputStories.args} label="Sted" placeholder="Oslo" />
                    </Flex>
                </FieldGroup>
            </Flex>,
    openLabel: "Start skademelding",
    primaryLabel: "Lagre skaden",
    secondaryLabel: "Avbryt",
    placement: "right",
    slideIn: true
  },
  render: args => <ModalExample {...args} />,
  play: async ({
    userEvent,
    step
  }) => {
    await step("Åpne sidepanel", async () => {
      const openButton = screen.getByRole("button", {
        name: /start skademelding/i
      });
      await userEvent.click(openButton);
      await waitFor(() => {
        expect(screen.getByRole("heading", {
          name: /skademelding/i
        })).toBeInTheDocument();
      });
    });
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Oppdater avtale",
  args: {
    heading: "Oppdater forsikringsavtale",
    body: <Flex direction="column" gap="m">
                <p>
                    Dette er et eksempel på en bred modal som kan romme et
                    skjema eller mer komplekst innhold.
                </p>
                <p>
                    Full bredde gjør det enklere å vise detaljer om dekning og
                    pris.
                </p>
                <FieldGroup legend="Kontakt og vilkår">
                    <Flex direction="column" gap="s">
                        <TextInput {...TextInputStories.args} label="E-post" placeholder="ola.nordmann@eksempel.no" />
                        <TextInput {...TextInputStories.args} label="Telefon" placeholder="900 00 000" />
                        <TextInput {...UnitAlign.args || {}} label="Forsikringssum" placeholder="0" unit="kr" />
                        <TextInput {...UnitAlign.args || {}} label="Egenandel" placeholder="0" unit="kr" />
                    </Flex>
                </FieldGroup>
            </Flex>,
    openLabel: "Oppdater avtale",
    primaryLabel: "Lagre endringer",
    secondaryLabel: "Avbryt"
  },
  render: args => <ModalExample {...args} />,
  play: async ({
    userEvent,
    step
  }) => {
    await step("Åpne modal", async () => {
      const openButton = screen.getByRole("button", {
        name: /oppdater avtale/i
      });
      await userEvent.click(openButton);
      await waitFor(() => {
        expect(screen.getByRole("heading", {
          name: /oppdater forsikringsavtale/i
        })).toBeInTheDocument();
      });
    });
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Lange vilkår",
  args: {
    heading: "Vilkår for forsikring",
    body: <Flex direction="column" gap="m">
                <p>
                    Her kan du lese vilkår og begrensninger før du fortsetter.
                </p>
                <p>
                    Dekningen gjelder fra registrert startdato og omfatter skade
                    på reisegods, forsinket avgang og avbestilling innenfor
                    vilkårene.
                </p>
                <p>
                    Egenandel, unntak og dokumentasjonskrav fremgår av avtalen
                    og kan variere med valgt dekning.
                </p>
                <p>
                    Les hele avtalen for detaljer om ansvar, tidsfrister og
                    begrensninger.
                </p>
            </Flex>,
    openLabel: "Les vilkår",
    primaryLabel: "Jeg godtar",
    secondaryLabel: "Avbryt"
  },
  render: args => <ModalExample {...args} />,
  play: async ({
    userEvent,
    step
  }) => {
    await step("Åpne modal", async () => {
      const openButton = screen.getByRole("button", {
        name: /les vilkår/i
      });
      await userEvent.click(openButton);
      await waitFor(() => {
        expect(screen.getByRole("heading", {
          name: /vilkår for forsikring/i
        })).toBeInTheDocument();
      });
    });
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Uten lukkeknapp",
  args: {
    heading: "Betalingsvalg",
    body: <Flex direction="column" gap="m">
                <p>Velg hvordan du vil betale forsikringen.</p>
                <FieldGroup legend="Alternativer">
                    {["Månedlig", "Årlig", "Trekk fra konto"].map(valg => <Checkbox {...CheckboxStory.args} key={valg} name="betalingsvalg" value={valg}>
                            {valg}
                        </Checkbox>)}
                </FieldGroup>
            </Flex>,
    openLabel: "Velg betalingsmåte",
    primaryLabel: "Lagre valg",
    secondaryLabel: "Avbryt",
    showCloseButton: false
  },
  render: args => <ModalExample {...args} />,
  play: async ({
    userEvent,
    step
  }) => {
    await step("Åpne modal", async () => {
      const openButton = screen.getByRole("button", {
        name: /velg betalingsmåte/i
      });
      await userEvent.click(openButton);
      await waitFor(() => {
        expect(screen.getByRole("heading", {
          name: /betalingsvalg/i
        })).toBeInTheDocument();
      });
    });
  }
}`,...v.parameters?.docs?.source}}};const Le=["BekreftKansellering","KritiskAdvarsel","BunnarkDekning","SidepanelSkade","OppdaterAvtale","LangeVilkår","UtenLukkeKnapp"];export{c as BekreftKansellering,k as BunnarkDekning,m as KritiskAdvarsel,y as LangeVilkår,b as OppdaterAvtale,u as SidepanelSkade,v as UtenLukkeKnapp,Le as __namedExportsOrder,je as default};
