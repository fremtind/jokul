import{j as e,r as y}from"./iframe-CFjl-NK5.js";import{B as f}from"./Button-BrUDkk2c.js";import{C as B}from"./Checkbox-c6NxpXJk.js";import{CheckboxStory as M}from"./Checkbox.stories-BF0jqoo0.js";import{F as l}from"./Flex-Zx6yozat.js";import g,{UnitAlign as j}from"./TextInput.stories-DiUihM8K.js";import{M as F,a as O,b as K,c as V,d as U,e as W,f as _,g as P}from"./Modal-BdvpDkKd.js";import{u as J}from"./useModal-ChwnYzOM.js";/* empty css               */import{F as c}from"./FieldGroup-BYWOG3df.js";import{T as r}from"./TextInput-DOAIM6bf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./usePreviousValue-DMFkw55J.js";import"./Loader-BCzgtSv8.js";import"./useDelayedRender-B-vJJoy6.js";import"./useId-CgkwdTow.js";import"./contactChoices-BqDGeJnV.js";import"./Label-DqqABxmt.js";import"./SupportLabel-MjaeEj-E.js";import"./WarningIcon-yCYLc5al.js";import"./Icon-wLhIYsIH.js";import"./SlotComponent-BCq0RT5a.js";import"./mergeRefs-Dze4Vj3J.js";/* empty css               */import"./IconButton-BCIGCmi5.js";import"./CloseIcon-BpMlDhAd.js";import"./index-LNqxi49e.js";import"./index-Chjiymov.js";import"./InputGroup-yi14pTO1.js";import"./BaseTextInput-CjcFuzGw.js";const{expect:i,screen:t,waitFor:d}=__STORYBOOK_MODULE_TEST__;function s({heading:a,body:n,openLabel:o,primaryLabel:T,secondaryLabel:C,role:L="dialog",placement:w="center",fullWidth:A=!1,slideIn:E=!1,showCloseButton:S=!0}){const[x,{title:I,overlay:R,container:D,modal:G,closeButton:H}]=J({title:a,role:L});return e.jsxs(e.Fragment,{children:[e.jsx(f,{onClick:()=>x?.show(),children:o}),e.jsxs(O,{...D,placement:w,slideIn:E,children:[e.jsx(K,{...R}),e.jsxs(F,{...G,fullWidth:A,children:[e.jsxs(V,{children:[e.jsx(U,{...I,children:a}),S&&e.jsx(W,{...H})]}),e.jsx(_,{children:n}),e.jsxs(P,{children:[e.jsx(f,{variant:"primary",onClick:()=>x?.hide(),children:T}),C&&e.jsx(f,{onClick:()=>x?.hide(),children:C})]})]})]})]})}const fe={title:"Komponenter/Modal",component:F,parameters:{layout:"centered"},args:{role:"dialog",placement:"center",fullWidth:!1,slideIn:!1,showCloseButton:!0},argTypes:{heading:{table:{disable:!0}},body:{table:{disable:!0}},openLabel:{table:{disable:!0}},primaryLabel:{table:{disable:!0}},secondaryLabel:{table:{disable:!0}},role:{control:"select",options:["dialog","alertdialog"],table:{defaultValue:{summary:"dialog"}}},placement:{control:"select",options:["center","left","bottom","right"],table:{defaultValue:{summary:"center"}}},fullWidth:{control:"boolean",table:{defaultValue:{summary:"false"}}},slideIn:{control:"boolean",table:{defaultValue:{summary:"false"}}},showCloseButton:{control:"boolean",table:{defaultValue:{summary:"true"}}}},tags:["autodocs"]},p={name:"Bekreft kansellering",args:{heading:"Bekreft kansellering",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Er du sikker på at du vil kansellere reiseforsikringen?"}),e.jsx(c,{legend:"Kanselleringen gjelder",children:["Reiseforsikring Pluss","Familiedekning"].map(a=>y.createElement(B,{...M.args,key:a,name:"produkt",value:a},a))})]}),openLabel:"Kanseller forsikring",primaryLabel:"Kanseller",secondaryLabel:"Avbryt"},render:a=>e.jsx(s,{...a}),parameters:{docs:{source:{code:['const heading = "Bekreft kansellering";',"const [instance, { title, overlay, container, modal, closeButton }] =",'    useModal({ title: heading, role: "dialog" });',"","<Button onClick={() => instance?.show()}>Kanseller forsikring</Button>",'<ModalContainer {...container} placement="center">',"    <ModalOverlay {...overlay} />","    <Modal {...modal}>","        <ModalHeader>","            <ModalTitle {...title}>{heading}</ModalTitle>","            <ModalCloseButton {...closeButton} />","        </ModalHeader>","        <ModalBody>",'            <Flex direction="column" gap="m">',"                <p>Er du sikker på at du vil kansellere reiseforsikringen?</p>",'                <FieldGroup legend="Kanselleringen gjelder">','                    <Checkbox name="produkt" value="Reiseforsikring Pluss">',"                        Reiseforsikring Pluss","                    </Checkbox>",'                    <Checkbox name="produkt" value="Familiedekning">',"                        Familiedekning","                    </Checkbox>","                </FieldGroup>","            </Flex>","        </ModalBody>","        <ModalActions>",'            <Button variant="primary" onClick={() => instance?.hide()}>',"                Kanseller","            </Button>","            <Button onClick={() => instance?.hide()}>Avbryt</Button>","        </ModalActions>","    </Modal>","</ModalContainer>"].join(`
`)}}},play:async({userEvent:a,step:n})=>{await n("Åpne modal",async()=>{const o=t.getByRole("button",{name:/kanseller forsikring/i});await a.click(o),await d(()=>{i(t.getByRole("heading",{name:/bekreft kansellering/i})).toBeInTheDocument()})})}},u={name:"Kritisk advarsel",args:{heading:"Dette kan ikke angres",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Når du fortsetter, stoppes dekningen umiddelbart."}),e.jsx("p",{children:"Eventuelle pågående saker må avsluttes før du kan opprette en ny avtale."})]}),openLabel:"Vis advarsel",primaryLabel:"Stopp dekning",secondaryLabel:"Avbryt",role:"alertdialog"},render:a=>e.jsx(s,{...a}),parameters:{docs:{source:{code:['const heading = "Dette kan ikke angres";',"const [instance, { title, overlay, container, modal, closeButton }] =",'    useModal({ title: heading, role: "alertdialog" });',"","<Button onClick={() => instance?.show()}>Vis advarsel</Button>","<ModalContainer {...container}>","    <ModalOverlay {...overlay} />","    <Modal {...modal}>","        <ModalHeader>","            <ModalTitle {...title}>{heading}</ModalTitle>","            <ModalCloseButton {...closeButton} />","        </ModalHeader>","        <ModalBody>","            <p>Når du fortsetter, stoppes dekningen umiddelbart.</p>","            <p>Eventuelle pågående saker må avsluttes først.</p>","        </ModalBody>","        <ModalActions>",'            <Button variant="primary" onClick={() => instance?.hide()}>',"                Stopp dekning","            </Button>","            <Button onClick={() => instance?.hide()}>Avbryt</Button>","        </ModalActions>","    </Modal>","</ModalContainer>"].join(`
`)}}},play:async({userEvent:a,step:n})=>{await n("Åpne modal",async()=>{const o=t.getByRole("button",{name:/vis advarsel/i});await a.click(o),await d(()=>{i(t.getByRole("heading",{name:/dette kan ikke angres/i})).toBeInTheDocument()})})}},k={name:"Bunnark for dekning",args:{heading:"Velg dekning",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Velg hvilke dekninger som skal gjelde for avtalen."}),e.jsx("p",{children:"Dette eksempelet bruker bunnplassering og innskyving for å fungere som et ark."}),e.jsx(c,{legend:"Dekninger",children:["Reisegods","Avbestilling","Forsinket avgang","Egenandel"].map(a=>y.createElement(B,{...M.args,key:a,name:"dekning",value:a},a))}),e.jsx(c,{legend:"Tillegg",children:["Leiebil","Utvidet medisinsk"].map(a=>y.createElement(B,{...M.args,key:a,name:"tillegg",value:a},a))})]}),openLabel:"Åpne dekninger",primaryLabel:"Lagre valg",secondaryLabel:"Lukk",placement:"bottom",fullWidth:!0,slideIn:!0},render:a=>e.jsx(s,{...a}),parameters:{docs:{source:{code:['const heading = "Velg dekning";',"const [instance, { title, overlay, container, modal, closeButton }] =","    useModal({ title: heading });","","<Button onClick={() => instance?.show()}>Åpne dekninger</Button>",'<ModalContainer {...container} placement="bottom" slideIn>',"    <ModalOverlay {...overlay} />","    <Modal {...modal} fullWidth>","        <ModalHeader>","            <ModalTitle {...title}>{heading}</ModalTitle>","            <ModalCloseButton {...closeButton} />","        </ModalHeader>","        <ModalBody>",'            <FieldGroup legend="Dekninger">','                <Checkbox name="dekning" value="Reisegods">Reisegods</Checkbox>','                <Checkbox name="dekning" value="Avbestilling">Avbestilling</Checkbox>','                <Checkbox name="dekning" value="Forsinket avgang">Forsinket avgang</Checkbox>','                <Checkbox name="dekning" value="Egenandel">Egenandel</Checkbox>',"            </FieldGroup>","        </ModalBody>","        <ModalActions>",'            <Button variant="primary" onClick={() => instance?.hide()}>',"                Lagre valg","            </Button>","            <Button onClick={() => instance?.hide()}>Lukk</Button>","        </ModalActions>","    </Modal>","</ModalContainer>"].join(`
`)}}},play:async({userEvent:a,step:n})=>{await n("Åpne bunnark",async()=>{const o=t.getByRole("button",{name:/åpne dekninger/i});await a.click(o),await d(()=>{i(t.getByRole("heading",{name:/velg dekning/i})).toBeInTheDocument()})})}},m={name:"Sidepanel for skade",args:{heading:"Skademelding",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Legg til bilder og beskrivelser av skaden."}),e.jsx("p",{children:"Sidepanel gir en rolig og kontekstnær flyt."}),e.jsx(c,{legend:"Skadedetaljer",children:e.jsxs(l,{direction:"column",gap:"s",children:[e.jsx(r,{...g.args,label:"Skadenummer",placeholder:"SKD-123456"}),e.jsx(r,{...g.args,label:"Dato for hendelse",placeholder:"dd.mm.åååå"}),e.jsx(r,{...g.args,label:"Sted",placeholder:"Oslo"})]})})]}),openLabel:"Start skademelding",primaryLabel:"Lagre skaden",secondaryLabel:"Avbryt",placement:"right",slideIn:!0},render:a=>e.jsx(s,{...a}),parameters:{docs:{source:{code:['const heading = "Skademelding";',"const [instance, { title, overlay, container, modal, closeButton }] =","    useModal({ title: heading });","","<Button onClick={() => instance?.show()}>Start skademelding</Button>",'<ModalContainer {...container} placement="right" slideIn>',"    <ModalOverlay {...overlay} />","    <Modal {...modal}>","        <ModalHeader>","            <ModalTitle {...title}>{heading}</ModalTitle>","            <ModalCloseButton {...closeButton} />","        </ModalHeader>","        <ModalBody>",'            <FieldGroup legend="Skadedetaljer">','                <TextInput label="Skadenummer" placeholder="SKD-123456" />','                <TextInput label="Dato for hendelse" placeholder="dd.mm.åååå" />','                <TextInput label="Sted" placeholder="Oslo" />',"            </FieldGroup>","        </ModalBody>","        <ModalActions>",'            <Button variant="primary" onClick={() => instance?.hide()}>',"                Lagre skaden","            </Button>","            <Button onClick={() => instance?.hide()}>Avbryt</Button>","        </ModalActions>","    </Modal>","</ModalContainer>"].join(`
`)}}},play:async({userEvent:a,step:n})=>{await n("Åpne sidepanel",async()=>{const o=t.getByRole("button",{name:/start skademelding/i});await a.click(o),await d(()=>{i(t.getByRole("heading",{name:/skademelding/i})).toBeInTheDocument()})})}},h={name:"Full bredde for skjema",args:{heading:"Oppdater forsikringsavtale",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Dette er et eksempel på en bred modal som kan romme et skjema eller mer komplekst innhold."}),e.jsx("p",{children:"Full bredde gjør det enklere å vise detaljer om dekning og pris."}),e.jsx(c,{legend:"Kontakt og vilkår",children:e.jsxs(l,{direction:"column",gap:"s",children:[e.jsx(r,{...g.args,label:"E-post",placeholder:"ola.nordmann@eksempel.no"}),e.jsx(r,{...g.args,label:"Telefon",placeholder:"900 00 000"}),e.jsx(r,{...j.args||{},label:"Forsikringssum",placeholder:"0",unit:"kr"}),e.jsx(r,{...j.args||{},label:"Egenandel",placeholder:"0",unit:"kr"})]})})]}),openLabel:"Oppdater avtale",primaryLabel:"Lagre endringer",secondaryLabel:"Avbryt",fullWidth:!0},render:a=>e.jsx(s,{...a}),parameters:{docs:{source:{code:['const heading = "Oppdater forsikringsavtale";',"const [instance, { title, overlay, container, modal, closeButton }] =","    useModal({ title: heading });","","<Button onClick={() => instance?.show()}>Oppdater avtale</Button>","<ModalContainer {...container}>","    <ModalOverlay {...overlay} />","    <Modal {...modal} fullWidth>","        <ModalHeader>","            <ModalTitle {...title}>{heading}</ModalTitle>","            <ModalCloseButton {...closeButton} />","        </ModalHeader>","        <ModalBody>",'            <FieldGroup legend="Kontakt og vilkår">','                <TextInput label="E-post" placeholder="ola.nordmann@eksempel.no" />','                <TextInput label="Telefon" placeholder="900 00 000" />','                <TextInput label="Forsikringssum" placeholder="0" unit="kr" />','                <TextInput label="Egenandel" placeholder="0" unit="kr" />',"            </FieldGroup>","        </ModalBody>","        <ModalActions>",'            <Button variant="primary" onClick={() => instance?.hide()}>',"                Lagre endringer","            </Button>","            <Button onClick={() => instance?.hide()}>Avbryt</Button>","        </ModalActions>","    </Modal>","</ModalContainer>"].join(`
`)}}},play:async({userEvent:a,step:n})=>{await n("Åpne modal",async()=>{const o=t.getByRole("button",{name:/oppdater avtale/i});await a.click(o),await d(()=>{i(t.getByRole("heading",{name:/oppdater forsikringsavtale/i})).toBeInTheDocument()})})}},v={name:"Lange vilkår",args:{heading:"Vilkår for forsikring",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Her kan du lese vilkår og begrensninger før du fortsetter."}),e.jsx("p",{children:"Dekningen gjelder fra registrert startdato og omfatter skade på reisegods, forsinket avgang og avbestilling innenfor vilkårene."}),e.jsx("p",{children:"Egenandel, unntak og dokumentasjonskrav fremgår av avtalen og kan variere med valgt dekning."}),e.jsx("p",{children:"Les hele avtalen for detaljer om ansvar, tidsfrister og begrensninger."})]}),openLabel:"Les vilkår",primaryLabel:"Jeg godtar",secondaryLabel:"Avbryt"},render:a=>e.jsx(s,{...a}),parameters:{docs:{source:{code:['const heading = "Vilkår for forsikring";',"const [instance, { title, overlay, container, modal, closeButton }] =","    useModal({ title: heading });","","<Button onClick={() => instance?.show()}>Les vilkår</Button>","<ModalContainer {...container}>","    <ModalOverlay {...overlay} />","    <Modal {...modal}>","        <ModalHeader>","            <ModalTitle {...title}>{heading}</ModalTitle>","            <ModalCloseButton {...closeButton} />","        </ModalHeader>","        <ModalBody>","            <p>Her kan du lese vilkår og begrensninger før du fortsetter.</p>","            <p>Dekningen gjelder fra registrert startdato og omfatter skade på reisegods.</p>","            <p>Egenandel, unntak og dokumentasjonskrav fremgår av avtalen.</p>","        </ModalBody>","        <ModalActions>",'            <Button variant="primary" onClick={() => instance?.hide()}>',"                Jeg godtar","            </Button>","            <Button onClick={() => instance?.hide()}>Avbryt</Button>","        </ModalActions>","    </Modal>","</ModalContainer>"].join(`
`)}}},play:async({userEvent:a,step:n})=>{await n("Åpne modal",async()=>{const o=t.getByRole("button",{name:/les vilkår/i});await a.click(o),await d(()=>{i(t.getByRole("heading",{name:/vilkår for forsikring/i})).toBeInTheDocument()})})}},b={name:"Uten lukkeknapp",args:{heading:"Betalingsvalg",body:e.jsxs(l,{direction:"column",gap:"m",children:[e.jsx("p",{children:"Velg hvordan du vil betale forsikringen."}),e.jsx(c,{legend:"Alternativer",children:["Månedlig","Årlig","Trekk fra konto"].map(a=>y.createElement(B,{...M.args,key:a,name:"betalingsvalg",value:a},a))})]}),openLabel:"Velg betalingsmåte",primaryLabel:"Lagre valg",secondaryLabel:"Avbryt",showCloseButton:!1},render:a=>e.jsx(s,{...a}),parameters:{docs:{source:{code:['const heading = "Betalingsvalg";',"const [instance, { title, overlay, container, modal }] =","    useModal({ title: heading });","","<Button onClick={() => instance?.show()}>Velg betalingsmåte</Button>","<ModalContainer {...container}>","    <ModalOverlay {...overlay} />","    <Modal {...modal}>","        <ModalHeader>","            <ModalTitle {...title}>{heading}</ModalTitle>","        </ModalHeader>","        <ModalBody>",'            <FieldGroup legend="Alternativer">','                <Checkbox name="betalingsvalg" value="Månedlig">Månedlig</Checkbox>','                <Checkbox name="betalingsvalg" value="Årlig">Årlig</Checkbox>','                <Checkbox name="betalingsvalg" value="Trekk fra konto">Trekk fra konto</Checkbox>',"            </FieldGroup>","        </ModalBody>","        <ModalActions>",'            <Button variant="primary" onClick={() => instance?.hide()}>',"                Lagre valg","            </Button>","            <Button onClick={() => instance?.hide()}>Avbryt</Button>","        </ModalActions>","    </Modal>","</ModalContainer>"].join(`
`)}}},play:async({userEvent:a,step:n})=>{await n("Åpne modal",async()=>{const o=t.getByRole("button",{name:/velg betalingsmåte/i});await a.click(o),await d(()=>{i(t.getByRole("heading",{name:/betalingsvalg/i})).toBeInTheDocument()})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: ['const heading = "Bekreft kansellering";', "const [instance, { title, overlay, container, modal, closeButton }] =", '    useModal({ title: heading, role: "dialog" });', "", "<Button onClick={() => instance?.show()}>Kanseller forsikring</Button>", '<ModalContainer {...container} placement="center">', "    <ModalOverlay {...overlay} />", "    <Modal {...modal}>", "        <ModalHeader>", "            <ModalTitle {...title}>{heading}</ModalTitle>", "            <ModalCloseButton {...closeButton} />", "        </ModalHeader>", "        <ModalBody>", '            <Flex direction="column" gap="m">', "                <p>Er du sikker på at du vil kansellere reiseforsikringen?</p>", '                <FieldGroup legend="Kanselleringen gjelder">', '                    <Checkbox name="produkt" value="Reiseforsikring Pluss">', "                        Reiseforsikring Pluss", "                    </Checkbox>", '                    <Checkbox name="produkt" value="Familiedekning">', "                        Familiedekning", "                    </Checkbox>", "                </FieldGroup>", "            </Flex>", "        </ModalBody>", "        <ModalActions>", '            <Button variant="primary" onClick={() => instance?.hide()}>', "                Kanseller", "            </Button>", "            <Button onClick={() => instance?.hide()}>Avbryt</Button>", "        </ModalActions>", "    </Modal>", "</ModalContainer>"].join("\\n")
      }
    }
  },
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: ['const heading = "Dette kan ikke angres";', "const [instance, { title, overlay, container, modal, closeButton }] =", '    useModal({ title: heading, role: "alertdialog" });', "", "<Button onClick={() => instance?.show()}>Vis advarsel</Button>", "<ModalContainer {...container}>", "    <ModalOverlay {...overlay} />", "    <Modal {...modal}>", "        <ModalHeader>", "            <ModalTitle {...title}>{heading}</ModalTitle>", "            <ModalCloseButton {...closeButton} />", "        </ModalHeader>", "        <ModalBody>", "            <p>Når du fortsetter, stoppes dekningen umiddelbart.</p>", "            <p>Eventuelle pågående saker må avsluttes først.</p>", "        </ModalBody>", "        <ModalActions>", '            <Button variant="primary" onClick={() => instance?.hide()}>', "                Stopp dekning", "            </Button>", "            <Button onClick={() => instance?.hide()}>Avbryt</Button>", "        </ModalActions>", "    </Modal>", "</ModalContainer>"].join("\\n")
      }
    }
  },
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
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    fullWidth: true,
    slideIn: true
  },
  render: args => <ModalExample {...args} />,
  parameters: {
    docs: {
      source: {
        code: ['const heading = "Velg dekning";', "const [instance, { title, overlay, container, modal, closeButton }] =", "    useModal({ title: heading });", "", "<Button onClick={() => instance?.show()}>Åpne dekninger</Button>", '<ModalContainer {...container} placement="bottom" slideIn>', "    <ModalOverlay {...overlay} />", "    <Modal {...modal} fullWidth>", "        <ModalHeader>", "            <ModalTitle {...title}>{heading}</ModalTitle>", "            <ModalCloseButton {...closeButton} />", "        </ModalHeader>", "        <ModalBody>", '            <FieldGroup legend="Dekninger">', '                <Checkbox name="dekning" value="Reisegods">Reisegods</Checkbox>', '                <Checkbox name="dekning" value="Avbestilling">Avbestilling</Checkbox>', '                <Checkbox name="dekning" value="Forsinket avgang">Forsinket avgang</Checkbox>', '                <Checkbox name="dekning" value="Egenandel">Egenandel</Checkbox>', "            </FieldGroup>", "        </ModalBody>", "        <ModalActions>", '            <Button variant="primary" onClick={() => instance?.hide()}>', "                Lagre valg", "            </Button>", "            <Button onClick={() => instance?.hide()}>Lukk</Button>", "        </ModalActions>", "    </Modal>", "</ModalContainer>"].join("\\n")
      }
    }
  },
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
}`,...k.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: ['const heading = "Skademelding";', "const [instance, { title, overlay, container, modal, closeButton }] =", "    useModal({ title: heading });", "", "<Button onClick={() => instance?.show()}>Start skademelding</Button>", '<ModalContainer {...container} placement="right" slideIn>', "    <ModalOverlay {...overlay} />", "    <Modal {...modal}>", "        <ModalHeader>", "            <ModalTitle {...title}>{heading}</ModalTitle>", "            <ModalCloseButton {...closeButton} />", "        </ModalHeader>", "        <ModalBody>", '            <FieldGroup legend="Skadedetaljer">', '                <TextInput label="Skadenummer" placeholder="SKD-123456" />', '                <TextInput label="Dato for hendelse" placeholder="dd.mm.åååå" />', '                <TextInput label="Sted" placeholder="Oslo" />', "            </FieldGroup>", "        </ModalBody>", "        <ModalActions>", '            <Button variant="primary" onClick={() => instance?.hide()}>', "                Lagre skaden", "            </Button>", "            <Button onClick={() => instance?.hide()}>Avbryt</Button>", "        </ModalActions>", "    </Modal>", "</ModalContainer>"].join("\\n")
      }
    }
  },
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Full bredde for skjema",
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
    secondaryLabel: "Avbryt",
    fullWidth: true
  },
  render: args => <ModalExample {...args} />,
  parameters: {
    docs: {
      source: {
        code: ['const heading = "Oppdater forsikringsavtale";', "const [instance, { title, overlay, container, modal, closeButton }] =", "    useModal({ title: heading });", "", "<Button onClick={() => instance?.show()}>Oppdater avtale</Button>", "<ModalContainer {...container}>", "    <ModalOverlay {...overlay} />", "    <Modal {...modal} fullWidth>", "        <ModalHeader>", "            <ModalTitle {...title}>{heading}</ModalTitle>", "            <ModalCloseButton {...closeButton} />", "        </ModalHeader>", "        <ModalBody>", '            <FieldGroup legend="Kontakt og vilkår">', '                <TextInput label="E-post" placeholder="ola.nordmann@eksempel.no" />', '                <TextInput label="Telefon" placeholder="900 00 000" />', '                <TextInput label="Forsikringssum" placeholder="0" unit="kr" />', '                <TextInput label="Egenandel" placeholder="0" unit="kr" />', "            </FieldGroup>", "        </ModalBody>", "        <ModalActions>", '            <Button variant="primary" onClick={() => instance?.hide()}>', "                Lagre endringer", "            </Button>", "            <Button onClick={() => instance?.hide()}>Avbryt</Button>", "        </ModalActions>", "    </Modal>", "</ModalContainer>"].join("\\n")
      }
    }
  },
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: ['const heading = "Vilkår for forsikring";', "const [instance, { title, overlay, container, modal, closeButton }] =", "    useModal({ title: heading });", "", "<Button onClick={() => instance?.show()}>Les vilkår</Button>", "<ModalContainer {...container}>", "    <ModalOverlay {...overlay} />", "    <Modal {...modal}>", "        <ModalHeader>", "            <ModalTitle {...title}>{heading}</ModalTitle>", "            <ModalCloseButton {...closeButton} />", "        </ModalHeader>", "        <ModalBody>", "            <p>Her kan du lese vilkår og begrensninger før du fortsetter.</p>", "            <p>Dekningen gjelder fra registrert startdato og omfatter skade på reisegods.</p>", "            <p>Egenandel, unntak og dokumentasjonskrav fremgår av avtalen.</p>", "        </ModalBody>", "        <ModalActions>", '            <Button variant="primary" onClick={() => instance?.hide()}>', "                Jeg godtar", "            </Button>", "            <Button onClick={() => instance?.hide()}>Avbryt</Button>", "        </ModalActions>", "    </Modal>", "</ModalContainer>"].join("\\n")
      }
    }
  },
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: ['const heading = "Betalingsvalg";', "const [instance, { title, overlay, container, modal }] =", "    useModal({ title: heading });", "", "<Button onClick={() => instance?.show()}>Velg betalingsmåte</Button>", "<ModalContainer {...container}>", "    <ModalOverlay {...overlay} />", "    <Modal {...modal}>", "        <ModalHeader>", "            <ModalTitle {...title}>{heading}</ModalTitle>", "        </ModalHeader>", "        <ModalBody>", '            <FieldGroup legend="Alternativer">', '                <Checkbox name="betalingsvalg" value="Månedlig">Månedlig</Checkbox>', '                <Checkbox name="betalingsvalg" value="Årlig">Årlig</Checkbox>', '                <Checkbox name="betalingsvalg" value="Trekk fra konto">Trekk fra konto</Checkbox>', "            </FieldGroup>", "        </ModalBody>", "        <ModalActions>", '            <Button variant="primary" onClick={() => instance?.hide()}>', "                Lagre valg", "            </Button>", "            <Button onClick={() => instance?.hide()}>Avbryt</Button>", "        </ModalActions>", "    </Modal>", "</ModalContainer>"].join("\\n")
      }
    }
  },
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
}`,...b.parameters?.docs?.source}}};const Ce=["BekreftKansellering","KritiskAdvarsel","BunnarkDekning","SidepanelSkade","FullBreddeSkjema","LangeVilkår","UtenLukkeKnapp"];export{p as BekreftKansellering,k as BunnarkDekning,h as FullBreddeSkjema,u as KritiskAdvarsel,v as LangeVilkår,m as SidepanelSkade,b as UtenLukkeKnapp,Ce as __namedExportsOrder,fe as default};
