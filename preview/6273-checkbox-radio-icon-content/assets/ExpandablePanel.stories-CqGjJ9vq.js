import{R as v,r as f,j as e}from"./iframe-R-c9LamX.js";import{F as y}from"./Flex-BwaEErmE.js";import{a as w,E as a}from"./ExpandablePanel-BBRHbvuG.js";import{E as b}from"./Expander-DM8lkwF_.js";/* empty css               *//* empty css               */import{B as j}from"./Button-DRAobpzi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-aNjw8Dzl.js";import"./mergeRefs-BovhSIar.js";import"./useAnimatedHeightBetween--NB2Y9PA.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BfzGTemp.js";import"./usePreviousValue-B3jAlU80.js";import"./ChevronDownIcon-BZbrA4Gj.js";import"./Icon-DHBpB8qe.js";import"./ChevronUpIcon-C5dweTwM.js";import"./Loader-Di4Wjtg3.js";import"./useDelayedRender-fNh_e0lx.js";const{expect:i,waitFor:u}=__STORYBOOK_MODULE_TEST__,q={title:"Komponenter/ExpandablePanel",component:a,subcomponents:{Expander:b,ExpandablePanelContent:w},args:{outlined:!1}},c={decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx(n,{})})],render:n=>e.jsx(y,{direction:"column",gap:"xs",children:["first","second","third"].map(r=>e.jsxs(a,{...n,children:[e.jsx(a.Header,{children:"Klikk på meg for å åpne!"}),e.jsx(a.Content,{children:"Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss fra 10:00 til 16:00 (vi liker en rolig start på lørdagen). Søndager hviler vi – og det burde du også!"})]},r))})},g={name:"Standalone",decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs(a,{...n,children:[e.jsx(a.Header,{"data-testid":"standalone-trigger",children:"Hva dekker reiseforsikringen på vei til flyplassen?"}),e.jsx(a.Content,{"data-testid":"standalone-content",children:"Reiseforsikringen dekker blant annet forsinket bagasje og avbestilling ved akutt sykdom når reisen er betalt med kortet."})]}),play:async({canvas:n,userEvent:r,step:d})=>{await d("Åpne standalone panelet",async()=>{const t=n.getByTestId("standalone-trigger"),s=n.getByTestId("standalone-content");i(s).toHaveAttribute("data-expanded","false"),await r.click(t),await u(()=>{i(s).toHaveAttribute("data-expanded","true")})})}},k={name:"Kontrollert",decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>{const[r,d]=v.useState(!1),t=f.useId();return e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsxs("p",{"data-testid":"controlled-state",style:{margin:0},children:["Status: ",r?"Åpen":"Lukket"]}),e.jsx(j,{onClick:()=>d(!r),"aria-expanded":r,"aria-controls":t,children:"Åpne"}),e.jsxs(a,{...n,open:r,onOpenChange:d,id:t,children:[e.jsx(a.Header,{"data-testid":"controlled-trigger",children:"Se dekning for leiebil"}),e.jsx(a.Content,{"data-testid":"controlled-content",children:"Forsikringen dekker skade, tyveri og egenandel når bilen er leid i Norden eller EU og leieforholdet er betalt med kortet."})]})]})},play:async({canvas:n,userEvent:r,step:d})=>{const t=n.getByTestId("controlled-trigger"),s=n.getByTestId("controlled-content"),l=n.getByTestId("controlled-state");await d("Åpne kontrollert panel",async()=>{i(s).toHaveAttribute("data-expanded","false"),i(l).toHaveTextContent("Status: Lukket"),await r.click(t),await u(()=>{i(s).toHaveAttribute("data-expanded","true"),i(l).toHaveTextContent("Status: Åpen")})}),await d("Lukk kontrollert panel",async()=>{await r.click(t),await u(()=>{i(s).toHaveAttribute("data-expanded","false"),i(l).toHaveTextContent("Status: Lukket")})})}},x={name:"Starter åpen",args:{defaultOpen:!0},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 32rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs(a,{...n,children:[e.jsx(a.Header,{"data-testid":"initially-open-trigger",children:"Kontaktvalg for skadehjelp"}),e.jsx(a.Content,{"data-testid":"initially-open-content",children:"Ring oss pa 55 55 55 55, start chat eller be om at en rådgiver ringer deg tilbake innen 15 minutter."})]}),play:async({canvas:n,userEvent:r,step:d})=>{const t=n.getByTestId("initially-open-trigger"),s=n.getByTestId("initially-open-content");await d("Panelet er åpent ved start",async()=>{i(s).toHaveAttribute("data-expanded","true")}),await d("Panelet kan lukkes igjen",async()=>{await r.click(t),await u(()=>{i(s).toHaveAttribute("data-expanded","false")}),await r.click(t)})}},m={name:"Lang tittel",decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 20rem)"},children:e.jsx(n,{})})})],render:n=>e.jsxs(a,{...n,children:[e.jsx(a.Header,{"data-testid":"long-title-trigger",children:"Hva skjer med egenandel, avbestilling og forsinket bagasje hvis hele familien blir forsinket pa vei til flyplassen?"}),e.jsx(a.Content,{"data-testid":"long-title-content",children:"Du er dekket for forsinket bagasje, avbestilling ved akutt sykdom og egenandel pa leiebil opptil 15 000 kroner."})]})},o={name:"Nestet Expander leser sin egen state",args:{variant:"stroke"},decorators:[n=>e.jsx("div",{style:{width:"50dvw",padding:"24px"},children:e.jsx("div",{style:{width:"min(100%, 36rem)"},children:e.jsx(n,{})})})],render:n=>{const r=[{key:"bil",navn:"Bilforsikring",pris:"412 kr / mnd",detaljer:"Kasko med leiebil. Egenandel 4 000 kr. Avtalenummer FT-2026-487312."},{key:"hus",navn:"Husforsikring",pris:"289 kr / mnd",detaljer:"Innbo og bygning. Egenandel 6 000 kr. Avtalenummer FT-2026-119041."},{key:"reise",navn:"Reiseforsikring",pris:"98 kr / mnd",detaljer:"Familie, hele verden, hele året. Egenandel 1 500 kr. Avtalenummer FT-2026-552207."}],d=({forsikring:t})=>{const[s,l]=v.useState(!1),p=`details-${t.key}`;return e.jsxs("div",{style:{borderTop:"1px solid rgba(0,0,0,.12)",paddingBlock:"8px"},children:[e.jsx(b,{as:"button",open:s,onClick:()=>l(h=>!h),"data-testid":`row-${t.key}`,"aria-expanded":s,"aria-controls":p,style:{width:"100%"},children:e.jsxs(y,{direction:"row",justifyContent:"space-between",style:{flex:1},children:[e.jsx("span",{children:t.navn}),e.jsx("span",{children:t.pris})]})}),s&&e.jsx("p",{id:p,style:{margin:"8px 0 0",paddingInline:"8px",color:"var(--jkl-color-text-subdued)"},"data-testid":`details-${t.key}`,children:t.detaljer})]})};return e.jsxs(a,{...n,defaultOpen:!0,children:[e.jsx(a.Header,{"data-testid":"outer-trigger",children:"Forsikringene dine (3)"}),e.jsx(a.Content,{children:e.jsx(y,{direction:"column",gap:"none",children:r.map(t=>e.jsx(d,{forsikring:t},t.key))})})]})},play:async({canvas:n,canvasElement:r,userEvent:d,step:t})=>{await t("Alle radene er lukket selv om panelet er åpent",async()=>{const s=n.getByTestId("row-bil"),l=n.getByTestId("row-hus"),p=n.getByTestId("row-reise");i(s.className).not.toContain("jkl-expander--open"),i(l.className).not.toContain("jkl-expander--open"),i(p.className).not.toContain("jkl-expander--open")}),await t("Klikk på en rad åpner kun den raden, ikke det ytre panelet",async()=>{const s=n.getByTestId("row-bil"),l=r.querySelector("[data-testid='jkl-expand-section']");await d.click(s),i(s.className).toContain("jkl-expander--open"),i(n.getByTestId("details-bil")).toBeInTheDocument(),i(l.open).toBe(!0),i(n.getByTestId("row-hus").className).not.toContain("jkl-expander--open")})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Standalone",
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
            <ExpandablePanel.Header data-testid="standalone-trigger">
                Hva dekker reiseforsikringen på vei til flyplassen?
            </ExpandablePanel.Header>
            <ExpandablePanel.Content data-testid="standalone-content">
                Reiseforsikringen dekker blant annet forsinket bagasje og
                avbestilling ved akutt sykdom når reisen er betalt med kortet.
            </ExpandablePanel.Content>
        </ExpandablePanel>,
  play: async ({
    canvas,
    userEvent,
    step
  }) => {
    await step("Åpne standalone panelet", async () => {
      const trigger = canvas.getByTestId("standalone-trigger");
      const content = canvas.getByTestId("standalone-content");
      expect(content).toHaveAttribute("data-expanded", "false");
      await userEvent.click(trigger);
      await waitFor(() => {
        expect(content).toHaveAttribute("data-expanded", "true");
      });
    });
  }
}`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Kontrollert",
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
    const id = useId();
    return <div style={{
      display: "grid",
      gap: "16px"
    }}>
                <p data-testid="controlled-state" style={{
        margin: 0
      }}>
                    Status: {isOpen ? "Åpen" : "Lukket"}
                </p>
                <Button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls={id}>
                    Åpne
                </Button>
                <ExpandablePanel {...args} open={isOpen} onOpenChange={setIsOpen} id={id}>
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
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Starter åpen",
  args: {
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
      await userEvent.click(trigger);
    });
  }
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        </ExpandablePanel>
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Regresjonstest for [#5565](https://github.com/fremtind/jokul/issues/5565):\net åpent `ExpandablePanel` med en liste over forsikringer — hver\nforsikring har sin egen kontrollerte `Expander` som viser detaljer.\nHver indre Expander styrer kun sin egen state, og klikk på dem skal\nikke lukke det ytre panelet.",...o.parameters?.docs?.description}}};const M=["_ExpandablePanel","ExpandablePanelStandalone","ExpandablePanelControlled","ExpandablePanelInitiallyOpen","ExpandablePanelLongTitle","ExpandablePanelNestedExpanders"];export{k as ExpandablePanelControlled,x as ExpandablePanelInitiallyOpen,m as ExpandablePanelLongTitle,o as ExpandablePanelNestedExpanders,g as ExpandablePanelStandalone,c as _ExpandablePanel,M as __namedExportsOrder,q as default};
