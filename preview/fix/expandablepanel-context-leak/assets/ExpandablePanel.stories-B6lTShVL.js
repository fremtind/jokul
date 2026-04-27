import{R as f,j as e}from"./iframe-DRzrw8Nv.js";import{C as E}from"./Card-C9QHaB-v.js";import{F as b}from"./Flex-LOmdI584.js";import{E as j,a as t}from"./ExpandablePanel-Dpq8wMiE.js";import{E as h}from"./Expander-BIg-VBB2.js";/* empty css               *//* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-2Chx50ER.js";import"./mergeRefs-C-5-UknL.js";import"./useAnimatedHeightBetween-CiVTeIOn.js";import"./tokens-BiWAXAgN.js";import"./useBrowserPreferences-BaEcKvBW.js";import"./usePreviousValue-DrkxaRaE.js";import"./ChevronDownIcon-eS8Jtr_g.js";import"./Icon-DEIppHfe.js";import"./ChevronUpIcon-YndlZxLm.js";const{expect:i,waitFor:o}=__STORYBOOK_MODULE_TEST__,U={title:"Komponenter/ExpandablePanel",component:t,subcomponents:{Expander:h,ExpandablePanelContent:j},args:{variant:"fill"},argTypes:{variant:{control:"radio",options:["fill","stroke"]}}},k={decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(n,{})})],render:n=>e.jsx(b,{direction:"column",gap:"xs",children:["first","second","third"].map(s=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{children:"Klikk på meg for å åpne!"}),e.jsx(t.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},s))})},p={args:{variant:"stroke"},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(n,{})})],render:n=>e.jsx(e.Fragment,{children:["first","second","third"].map(s=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{children:"Klikk på meg for å åpne!"}),e.jsx(t.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},s))})},x={name:"Stroke standalone",args:{variant:"stroke"},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(E,{padding:"l",style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsx("p",{style:{margin:0},children:"Et standalone panel skal beholde ytre border radius selv om det ligger mellom andre elementer."}),e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"stroke-standalone-trigger",children:"Klikk på meg for å åpne!"}),e.jsx(t.Content,{"data-testid":"stroke-standalone-content",children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00."})]}),e.jsx("p",{style:{margin:0},children:"Panelgruppen fortsetter ikke under her."})]}),play:async({canvas:n,userEvent:s,step:d})=>{await d("Åpne standalone stroke-panelet",async()=>{const a=n.getByTestId("stroke-standalone-trigger"),r=n.getByTestId("stroke-standalone-content");i(r).toHaveAttribute("data-expanded","false"),await s.click(a),await o(()=>{i(r).toHaveAttribute("data-expanded","true")})})}},m={name:"Fill standalone",decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsx("p",{style:{margin:0},children:"Et standalone panel med fill-variant skal fungere uten å være del av en panelgruppe."}),e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"fill-standalone-trigger",children:"Hva dekker reiseforsikringen på vei til flyplassen?"}),e.jsx(t.Content,{"data-testid":"fill-standalone-content",children:"Reiseforsikringen dekker blant annet forsinket bagasje og avbestilling ved akutt sykdom når reisen er betalt med kortet."})]})]}),play:async({canvas:n,userEvent:s,step:d})=>{await d("Åpne standalone fill-panelet",async()=>{const a=n.getByTestId("fill-standalone-trigger"),r=n.getByTestId("fill-standalone-content");i(r).toHaveAttribute("data-expanded","false"),await s.click(a),await o(()=>{i(r).toHaveAttribute("data-expanded","true")})})}},v={name:"Kontrollert",args:{variant:"stroke"},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>{const[s,d]=f.useState(!1);return e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsxs("p",{"data-testid":"controlled-state",style:{margin:0},children:["Status: ",s?"Åpen":"Lukket"]}),e.jsxs(t,{...n,open:s,onOpenChange:d,children:[e.jsx(t.Header,{"data-testid":"controlled-trigger",children:"Se dekning for leiebil"}),e.jsx(t.Content,{"data-testid":"controlled-content",children:"Forsikringen dekker skade, tyveri og egenandel når bilen er leid i Norden eller EU og leieforholdet er betalt med kortet."})]})]})},play:async({canvas:n,userEvent:s,step:d})=>{const a=n.getByTestId("controlled-trigger"),r=n.getByTestId("controlled-content"),l=n.getByTestId("controlled-state");await d("Åpne kontrollert panel",async()=>{i(r).toHaveAttribute("data-expanded","false"),i(l).toHaveTextContent("Status: Lukket"),await s.click(a),await o(()=>{i(r).toHaveAttribute("data-expanded","true"),i(l).toHaveTextContent("Status: Åpen")})}),await d("Lukk kontrollert panel",async()=>{await s.click(a),await o(()=>{i(r).toHaveAttribute("data-expanded","false"),i(l).toHaveTextContent("Status: Lukket")})})}},y={name:"Starter åpen",args:{variant:"stroke",defaultOpen:!0},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"initially-open-trigger",children:"Kontaktvalg for skadehjelp"}),e.jsx(t.Content,{"data-testid":"initially-open-content",children:"Ring oss pa 55 55 55 55, start chat eller be om at en rådgiver ringer deg tilbake innen 15 minutter."})]}),play:async({canvas:n,userEvent:s,step:d})=>{const a=n.getByTestId("initially-open-trigger"),r=n.getByTestId("initially-open-content");await d("Panelet er åpent ved start",async()=>{i(r).toHaveAttribute("data-expanded","true")}),await d("Panelet kan lukkes igjen",async()=>{await s.click(a),await o(()=>{i(r).toHaveAttribute("data-expanded","false")})})}},u={name:"Lang tittel",decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 20rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs(t,{...n,children:[e.jsx(t.Header,{"data-testid":"long-title-trigger",children:"Hva skjer med egenandel, avbestilling og forsinket bagasje hvis hele familien blir forsinket pa vei til flyplassen?"}),e.jsx(t.Content,{"data-testid":"long-title-content",children:"Du er dekket for forsinket bagasje, avbestilling ved akutt sykdom og egenandel pa leiebil opptil 15 000 kroner."})]}),play:async({canvas:n,userEvent:s,step:d})=>{const a=n.getByTestId("long-title-trigger"),r=n.getByTestId("long-title-content");await d("Tittelen brytes over flere linjer",async()=>{i(a.getBoundingClientRect().height).toBeGreaterThan(64)}),await d("Panelet kan åpnes med lang tittel",async()=>{await s.click(a),await o(()=>{i(r).toHaveAttribute("data-expanded","true")})})}},c={name:"Nestet Expander leser sin egen state",args:{variant:"stroke"},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 36rem)"},children:e.jsx(n,{})})})],render:n=>{const s=[{key:"bil",navn:"Bilforsikring",pris:"412 kr / mnd",detaljer:"Kasko med leiebil. Egenandel 4 000 kr. Avtalenummer FT-2026-487312."},{key:"hus",navn:"Husforsikring",pris:"289 kr / mnd",detaljer:"Innbo og bygning. Egenandel 6 000 kr. Avtalenummer FT-2026-119041."},{key:"reise",navn:"Reiseforsikring",pris:"98 kr / mnd",detaljer:"Familie, hele verden, hele året. Egenandel 1 500 kr. Avtalenummer FT-2026-552207."}],d=({forsikring:a})=>{const[r,l]=f.useState(!1),g=`details-${a.key}`;return e.jsxs("div",{style:{borderTop:"1px solid rgba(0,0,0,.12)",paddingBlock:"8px"},children:[e.jsx(h,{as:"button",open:r,onClick:()=>l(w=>!w),"data-testid":`row-${a.key}`,"aria-expanded":r,"aria-controls":g,style:{width:"100%"},children:e.jsxs(b,{direction:"row",justifyContent:"space-between",style:{flex:1},children:[e.jsx("span",{children:a.navn}),e.jsx("span",{children:a.pris})]})}),r&&e.jsx("p",{id:g,style:{margin:"8px 0 0",paddingInline:"8px",color:"var(--jkl-color-text-subdued)"},"data-testid":`details-${a.key}`,children:a.detaljer})]})};return e.jsxs(t,{...n,defaultOpen:!0,children:[e.jsx(t.Header,{"data-testid":"outer-trigger",children:"Forsikringene dine (3)"}),e.jsx(t.Content,{children:e.jsx(b,{direction:"column",gap:"none",children:s.map(a=>e.jsx(d,{forsikring:a},a.key))})})]})},play:async({canvas:n,canvasElement:s,userEvent:d,step:a})=>{await a("Alle radene er lukket selv om panelet er åpent",async()=>{const r=n.getByTestId("row-bil"),l=n.getByTestId("row-hus"),g=n.getByTestId("row-reise");i(r.className).not.toContain("jkl-expander--open"),i(l.className).not.toContain("jkl-expander--open"),i(g.className).not.toContain("jkl-expander--open")}),await a("Klikk på en rad åpner kun den raden, ikke det ytre panelet",async()=>{const r=n.getByTestId("row-bil"),l=s.querySelector("[data-testid='jkl-expand-section']");await d.click(r),i(r.className).toContain("jkl-expander--open"),i(n.getByTestId("details-bil")).toBeInTheDocument(),i(l.open).toBe(!0),i(n.getByTestId("row-hus").className).not.toContain("jkl-expander--open")})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <Story />
            </div>],
  render: args => <Flex direction="column" gap="xs">
            {["first", "second", "third"].map(panelKey => <ExpandablePanel key={panelKey} {...args}>
                    <ExpandablePanel.Header>
                        Klikk på meg for å åpne!
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>)}
        </Flex>
}`,...k.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "stroke"
  },
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <Story />
            </div>],
  render: args => <>
            {["first", "second", "third"].map(panelKey => <ExpandablePanel key={panelKey} {...args}>
                    <ExpandablePanel.Header>
                        Klikk på meg for å åpne!
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>)}
        </>
}`,...p.parameters?.docs?.source},description:{story:"Stroke varianten skal ikke ha mellomrom mellom panelene.",...p.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Stroke standalone",
  args: {
    variant: "stroke"
  },
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <Card padding="l" style={{
      width: "min(100%, 32rem)"
    }}>
                    <Story />
                </Card>
            </div>],
  render: args => <div style={{
    display: "grid",
    gap: "16px"
  }}>
            <p style={{
      margin: 0
    }}>
                Et standalone panel skal beholde ytre border radius selv om det
                ligger mellom andre elementer.
            </p>
            <ExpandablePanel {...args}>
                <ExpandablePanel.Header data-testid="stroke-standalone-trigger">
                    Klikk på meg for å åpne!
                </ExpandablePanel.Header>
                <ExpandablePanel.Content data-testid="stroke-standalone-content">
                    Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag
                    til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss
                    fra 10:00 til 16:00.
                </ExpandablePanel.Content>
            </ExpandablePanel>
            <p style={{
      margin: 0
    }}>Panelgruppen fortsetter ikke under her.</p>
        </div>,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    await step("Åpne standalone stroke-panelet", async () => {
      const trigger = canvas.getByTestId("stroke-standalone-trigger");
      const content = canvas.getByTestId("stroke-standalone-content");
      expect(content).toHaveAttribute("data-expanded", "false");
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "true");
      });
    });
  }
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Fill standalone",
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 32rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => <div style={{
    display: "grid",
    gap: "16px"
  }}>
            <p style={{
      margin: 0
    }}>
                Et standalone panel med fill-variant skal fungere uten å være
                del av en panelgruppe.
            </p>
            <ExpandablePanel {...args}>
                <ExpandablePanel.Header data-testid="fill-standalone-trigger">
                    Hva dekker reiseforsikringen på vei til flyplassen?
                </ExpandablePanel.Header>
                <ExpandablePanel.Content data-testid="fill-standalone-content">
                    Reiseforsikringen dekker blant annet forsinket bagasje og
                    avbestilling ved akutt sykdom når reisen er betalt med
                    kortet.
                </ExpandablePanel.Content>
            </ExpandablePanel>
        </div>,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    await step("Åpne standalone fill-panelet", async () => {
      const trigger = canvas.getByTestId("fill-standalone-trigger");
      const content = canvas.getByTestId("fill-standalone-content");
      expect(content).toHaveAttribute("data-expanded", "false");
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "true");
      });
    });
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Kontrollert",
  args: {
    variant: "stroke"
  },
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 32rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <div style={{
      display: "grid",
      gap: "16px"
    }}>
                <p data-testid="controlled-state" style={{
        margin: 0
      }}>
                    Status: {isOpen ? "Åpen" : "Lukket"}
                </p>
                <ExpandablePanel {...args} open={isOpen} onOpenChange={setIsOpen}>
                    <ExpandablePanel.Header data-testid="controlled-trigger">
                        Se dekning for leiebil
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content data-testid="controlled-content">
                        Forsikringen dekker skade, tyveri og egenandel når bilen
                        er leid i Norden eller EU og leieforholdet er betalt med
                        kortet.
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            </div>;
  },
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    const trigger = canvas.getByTestId("controlled-trigger");
    const content = canvas.getByTestId("controlled-content");
    const state = canvas.getByTestId("controlled-state");
    await step("Åpne kontrollert panel", async () => {
      expect(content).toHaveAttribute("data-expanded", "false");
      expect(state).toHaveTextContent("Status: Lukket");
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "true");
        expect(state).toHaveTextContent("Status: Åpen");
      });
    });
    await step("Lukk kontrollert panel", async () => {
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "false");
        expect(state).toHaveTextContent("Status: Lukket");
      });
    });
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Starter åpen",
  args: {
    variant: "stroke",
    defaultOpen: true
  },
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 32rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => <ExpandablePanel {...args}>
            <ExpandablePanel.Header data-testid="initially-open-trigger">
                Kontaktvalg for skadehjelp
            </ExpandablePanel.Header>
            <ExpandablePanel.Content data-testid="initially-open-content">
                Ring oss pa 55 55 55 55, start chat eller be om at en rådgiver
                ringer deg tilbake innen 15 minutter.
            </ExpandablePanel.Content>
        </ExpandablePanel>,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    const trigger = canvas.getByTestId("initially-open-trigger");
    const content = canvas.getByTestId("initially-open-content");
    await step("Panelet er åpent ved start", async () => {
      expect(content).toHaveAttribute("data-expanded", "true");
    });
    await step("Panelet kan lukkes igjen", async () => {
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "false");
      });
    });
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Lang tittel",
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 20rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => <ExpandablePanel {...args}>
            <ExpandablePanel.Header data-testid="long-title-trigger">
                Hva skjer med egenandel, avbestilling og forsinket bagasje hvis
                hele familien blir forsinket pa vei til flyplassen?
            </ExpandablePanel.Header>
            <ExpandablePanel.Content data-testid="long-title-content">
                Du er dekket for forsinket bagasje, avbestilling ved akutt
                sykdom og egenandel pa leiebil opptil 15 000 kroner.
            </ExpandablePanel.Content>
        </ExpandablePanel>,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    const trigger = canvas.getByTestId("long-title-trigger");
    const content = canvas.getByTestId("long-title-content");
    await step("Tittelen brytes over flere linjer", async () => {
      expect(trigger.getBoundingClientRect().height).toBeGreaterThan(64);
    });
    await step("Panelet kan åpnes med lang tittel", async () => {
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "true");
      });
    });
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Nestet Expander leser sin egen state",
  args: {
    variant: "stroke"
  },
  decorators: [Story => <div style={{
    width: "50dvw",
    padding: "24px"
  }}>
                <div style={{
      width: "min(100%, 36rem)"
    }}>
                    <Story />
                </div>
            </div>],
  render: args => {
    const forsikringer = [{
      key: "bil",
      navn: "Bilforsikring",
      pris: "412 kr / mnd",
      detaljer: "Kasko med leiebil. Egenandel 4 000 kr. Avtalenummer FT-2026-487312."
    }, {
      key: "hus",
      navn: "Husforsikring",
      pris: "289 kr / mnd",
      detaljer: "Innbo og bygning. Egenandel 6 000 kr. Avtalenummer FT-2026-119041."
    }, {
      key: "reise",
      navn: "Reiseforsikring",
      pris: "98 kr / mnd",
      detaljer: "Familie, hele verden, hele året. Egenandel 1 500 kr. Avtalenummer FT-2026-552207."
    }];
    const ForsikringsRad = ({
      forsikring
    }: {
      forsikring: (typeof forsikringer)[number];
    }) => {
      const [open, setOpen] = React.useState(false);
      const detailsId = \`details-\${forsikring.key}\`;
      return <div style={{
        borderTop: "1px solid rgba(0,0,0,.12)",
        paddingBlock: "8px"
      }}>
                    <Expander as="button" open={open} onClick={() => setOpen(v => !v)} data-testid={\`row-\${forsikring.key}\`} aria-expanded={open} aria-controls={detailsId} style={{
          width: "100%"
        }}>
                        <Flex direction="row" justifyContent="space-between" style={{
            flex: 1
          }}>
                            <span>{forsikring.navn}</span>
                            <span>{forsikring.pris}</span>
                        </Flex>
                    </Expander>
                    {open && <p id={detailsId} style={{
          margin: "8px 0 0",
          paddingInline: "8px",
          color: "var(--jkl-color-text-subdued)"
        }} data-testid={\`details-\${forsikring.key}\`}>
                            {forsikring.detaljer}
                        </p>}
                </div>;
    };
    return <ExpandablePanel {...args} defaultOpen>
                <ExpandablePanel.Header data-testid="outer-trigger">
                    Forsikringene dine (3)
                </ExpandablePanel.Header>
                <ExpandablePanel.Content>
                    <Flex direction="column" gap="none">
                        {forsikringer.map(f => <ForsikringsRad key={f.key} forsikring={f} />)}
                    </Flex>
                </ExpandablePanel.Content>
            </ExpandablePanel>;
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent,
    step
  }) => {
    await step("Alle radene er lukket selv om panelet er åpent", async () => {
      const bil = canvas.getByTestId("row-bil");
      const hus = canvas.getByTestId("row-hus");
      const reise = canvas.getByTestId("row-reise");
      expect(bil.className).not.toContain("jkl-expander--open");
      expect(hus.className).not.toContain("jkl-expander--open");
      expect(reise.className).not.toContain("jkl-expander--open");
    });
    await step("Klikk på en rad åpner kun den raden, ikke det ytre panelet", async () => {
      const bilRad = canvas.getByTestId("row-bil");
      const outerPanel = canvasElement.querySelector("[data-testid='jkl-expand-section']") as HTMLDetailsElement;
      await userEvent.click(bilRad);
      expect(bilRad.className).toContain("jkl-expander--open");
      expect(canvas.getByTestId("details-bil")).toBeInTheDocument();
      // Det ytre panelet skal fortsatt være åpent
      expect(outerPanel.open).toBe(true);

      // Naborader er fortsatt lukket
      expect(canvas.getByTestId("row-hus").className).not.toContain("jkl-expander--open");
    });
  }
}`,...c.parameters?.docs?.source},description:{story:"Regresjonstest for [#5565](https://github.com/fremtind/jokul/issues/5565):\net åpent `ExpandablePanel` med en liste over forsikringer — hver\nforsikring har sin egen kontrollerte `Expander` som viser detaljer.\nHver indre Expander styrer kun sin egen state, og klikk på dem skal\nikke lukke det ytre panelet.",...c.parameters?.docs?.description}}};const q=["ExpandablePanelFilled","ExpandablePanelStroke","ExpandablePanelStrokeStandalone","ExpandablePanelFillStandalone","ExpandablePanelControlled","ExpandablePanelInitiallyOpen","ExpandablePanelLongTitle","ExpandablePanelNestedExpanders"];export{v as ExpandablePanelControlled,m as ExpandablePanelFillStandalone,k as ExpandablePanelFilled,y as ExpandablePanelInitiallyOpen,u as ExpandablePanelLongTitle,c as ExpandablePanelNestedExpanders,p as ExpandablePanelStroke,x as ExpandablePanelStrokeStandalone,q as __namedExportsOrder,U as default};
