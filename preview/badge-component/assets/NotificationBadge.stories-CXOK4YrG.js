import{r as _,j as e,R as F}from"./iframe-CojrUSGT.js";import{F as i}from"./Flex-Bab51KFz.js";import{c as B}from"./clsx-B-dksMZM.js";import{B as t}from"./Button-C78HIcaC.js";import{I as f}from"./IconButton-Dlu-C-j6.js";import{I as h}from"./Icon-1BTzykdB.js";import{C as S}from"./Chip-DA0MXAmK.js";import{T as A}from"./Tag-BUkykm74.js";import{c as w,b as L,T as y,a as H}from"./TabPanel-C2SX85kq.js";import{C as x}from"./Card-zbH6Nnyu.js";import{N as D}from"./NavLink-Bjdgxwqi.js";import{T as E}from"./Text-DUY_eln3.js";import{G as R}from"./GreenCheckIcon-P7K0lNMA.js";import{R as K}from"./RedCrossIcon-C2pvrqcL.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-BUEAyghz.js";import"./mergeRefs-SVScEcvK.js";import"./usePreviousValue-B0Idk8nI.js";import"./Loader-BkxCXTIh.js";import"./useDelayedRender-Cr3HQDBu.js";import"./CheckIcon-BADahsYQ.js";import"./CloseIcon-Dc9ihnCv.js";import"./ArrowRightIcon-DNc_5Ds7.js";const U="varsel/varsler";function q(n,a){return n>a?`${a}+`:n}function O(n,a){const[s,b=s]=a.split("/");return`${n} ${n===1?s:b}`}const r=({className:n,children:a,count:s,max:b=99,hideCounter:j,urgent:M=!1,label:P=U,...N})=>{const I=_.useId(),V=`jkl-notification-badge-${I}`,C=`--jkl-notification-badge-anchor-${I.replace(/[^a-z0-9]/gi,"")}`,v=s>0,T=v?O(s,P):void 0;return e.jsxs(e.Fragment,{children:[F.isValidElement(a)?F.cloneElement(a,{"aria-describedby":B(a.props["aria-describedby"],v&&V)||void 0,className:B(a.props.className,"jkl-notification-badge-anchor"),style:{...a.props.style,"--jkl-notification-badge-anchor-name":C},title:a.props.title??T}):a,v?e.jsxs("div",{className:B("jkl-notification-badge",j&&"jkl-notification-badge--dot",n),"data-urgent":M,"data-count":s,"data-hide-counter":j,...N,style:{...N.style,"--jkl-notification-badge-anchor-name":C},id:V,children:[j?null:e.jsx("span",{"aria-hidden":"true",children:q(s,b)}),e.jsx("div",{className:"jkl-sr-only",children:T})]}):null]})};try{r.displayName="NotificationBadge",r.__docgenInfo={description:"",displayName:"NotificationBadge",props:{count:{defaultValue:null,description:"Antall varsler",name:"count",required:!0,type:{name:"number"}},max:{defaultValue:{value:"99"},description:'Høyeste tall som vises før det blir "+".',name:"max",required:!1,type:{name:"number"}},hideCounter:{defaultValue:null,description:"Skjuler tallene visuelt, så det bare vises en prikk. Antallet leses fortsatt opp av skjermlesere.",name:"hideCounter",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elementet varselet skal plasseres på. Må være kun ett element, og klikkbart, for å kunne brukes.",name:"children",required:!1,type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}},label:{defaultValue:{value:"varsel/varsler"},description:`Dersom du bruker komponenten for noe annet enn "varslinger" kan du endre beskrivelsen av dem.
Dette brukes for å gi tilstrekkelig kontekst for tilgjengelighetsverktøy.
@example 1 ulest melding / 4 uleste meldinger
@example 1 produkt / 4 produkter`,name:"label",required:!1,type:{name:"string"}},urgent:{defaultValue:{value:"false"},description:"Endrer farge fra kontrastfarge til en rød-farge.",name:"urgent",required:!1,type:{name:"boolean"}}}}}catch{}const ue={title:"Komponenter/NotificationBadge",component:r,args:{count:3,max:99,hideCounter:!1,urgent:!1}},$=n=>e.jsx(r,{...n,children:e.jsx(t,{children:"Meldinger"})}),l={name:"På et element",parameters:{docs:{description:{story:"Sender du inn et element som children, blir elementet anker og varselet plasseres oppe til høyre på det. Ankrede varsler ligger utenfor flyten, så de flytter ikke innholdet i ankeret."}}},render:$},d={name:"Inni et element",parameters:{docs:{description:{story:"Uten children ligger varselet i flyten og tar plass der det står, uten posisjonering. Det passer når innholdet selv har en naturlig plass til det, som i en fane eller en tag."}}},render:n=>e.jsxs(i,{direction:"column",gap:"xl",children:[e.jsxs(i,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsxs(S,{variant:"filter","aria-pressed":!0,children:["Ubehandlet",e.jsx(r,{...n})]}),e.jsxs(A,{children:["Skadesaker",e.jsx(r,{...n})]})]}),e.jsxs(w,{children:[e.jsxs(L,{children:[e.jsx(y,{children:"Forsikringer"}),e.jsx(y,{children:"Skadesaker"}),e.jsxs(y,{children:["Tilbud",e.jsx(r,{...n})]})]}),e.jsx(H,{children:"Test"})]})]})},c={name:"Bare prikk",args:{count:120,hideCounter:!0},parameters:{docs:{description:{story:"Med `hideCounter` vises bare en prikk. Antallet er fortsatt tilgjengelig for skjermlesere. Innrykket skalerer med ankerets bredde, så prikken legger seg i hjørnet også på smale ankere som ikonknapper."}}},render:n=>e.jsxs(i,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(r,{...n,children:e.jsx(t,{children:"Meldinger"})}),e.jsx(r,{...n,label:"produkt/produkter",children:e.jsx(f,{"aria-label":"Handlekurv",children:e.jsx(h,{children:"shopping_bag"})})})]})},g={parameters:{docs:{description:{story:"Med `urgent` byttes kontrastfargen ut med en rødfarge som følger brandet. Bruk det når varselet krever at brukeren gjør noe. `urgent` kan kombineres med `hideCounter`."}}},render:n=>e.jsxs(i,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(r,{...n,urgent:!0,children:e.jsx(t,{variant:"primary",children:"Meldinger"})}),e.jsx(r,{...n,urgent:!0,hideCounter:!0,children:e.jsx(t,{variant:"primary",children:"Meldinger"})})]})},p={name:"Antall og label",parameters:{docs:{description:{story:"`max` bestemmer når antallet forkortes, og trenger ikke være en hel tierpotens. `label` tar et `entall/flertall`-par og bestemmer teksten skjermlesere får, og tooltipen på ankeret. Ved 0 rendres ikke varselet i det hele tatt, men ankeret rendres som normalt."}}},render:n=>e.jsxs(i,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(r,{...n,count:120,max:50,children:e.jsx(t,{variant:"secondary",children:"max=50"})}),e.jsx(r,{...n,count:4,label:"produkt/produkter",children:e.jsx(t,{variant:"secondary",children:"4 produkter"})}),e.jsx(r,{...n,count:0,children:e.jsx(t,{variant:"secondary",children:"count=0"})})]})},k={name:"På ulike komponenter",args:{max:9},parameters:{docs:{description:{story:"Varselet kan ankres på alt som er ett klikkbart element. Plasseringen bruker logiske egenskaper, så varselet speiles til øvre venstre i en høyre-mot-venstre-kontekst."}}},render:n=>e.jsxs(i,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(r,{...n,urgent:!0,children:e.jsx(t,{variant:"primary",children:"Eksempel"})}),e.jsx(r,{...n,label:"produkt/produkter",children:e.jsx(f,{"aria-label":"Handlekurv",children:e.jsx(h,{children:"shopping_bag"})})}),e.jsx(r,{...n,children:e.jsx(S,{variant:"filter",children:"Eksempel"})}),e.jsx(r,{...n,label:"skadesak/skadesaker",children:e.jsx(x,{as:"button",padding:"m",children:"Skadesak 2024-1138"})}),e.jsx(r,{...n,label:"melding/meldinger",children:e.jsx(D,{href:"#",children:"Meldinger"})})]})},o=({kind:n,children:a,description:s})=>e.jsx(x,{outlined:!0,padding:"l",children:e.jsxs(i,{direction:"column",gap:"m",children:[e.jsxs(i,{gap:"m",alignItems:"center",justifyContent:"space-between",children:[e.jsx(E,{bold:!0,children:n==="do"?"Riktig":"Feil"}),n==="do"?e.jsx(R,{}):e.jsx(K,{})]}),e.jsx(i,{gap:"xl",alignItems:"center",wrap:!0,children:a}),e.jsx(E,{children:s})]})}),m=({children:n})=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"var(--jkl-spacing-24)",alignItems:"start"},children:n}),u={name:"Riktig og feil",parameters:{docs:{description:{story:"De vanligste fellene når varselet skal plasseres og beskrives."}}},render:n=>e.jsxs(i,{direction:"column",gap:"xl",children:[e.jsxs(m,{children:[e.jsx(o,{kind:"do",description:"Send ankeret inn som children. Varselet blir knyttet til elementet med aria-describedby, og ankeret får antallet som tooltip.",children:e.jsx(r,{...n,children:e.jsx(t,{children:"Meldinger"})})}),e.jsxs(o,{kind:"dont",description:"Ikke legg varselet ved siden av elementet. Som søsken blir det ikke ankret, det tar plass i flyten, og sammenhengen forsvinner for skjermlesere.",children:[e.jsx(t,{children:"Meldinger"}),e.jsx(r,{...n})]})]}),e.jsxs(m,{children:[e.jsx(o,{kind:"do",description:"Ankre rundt et Card. Da ligger varselet utenfor kortet og vises i sin helhet.",children:e.jsx(r,{...n,label:"skadesak/skadesaker",children:e.jsx(x,{as:"button",padding:"m",children:"Skadesak 2024-1138"})})}),e.jsx(o,{kind:"dont",description:"Ikke ankre inni et Card. Kortet har overflow: hidden og klipper varselet, som er absolutt posisjonert.",children:e.jsx(x,{padding:"m",children:e.jsx(r,{...n,children:e.jsx(t,{variant:"primary",children:"Klippes"})})})})]}),e.jsxs(m,{children:[e.jsx(o,{kind:"do",description:"Sett label når antallet ikke er varslinger. Her leses «4 produkter», som faktisk beskriver innholdet.",children:e.jsx(r,{...n,count:4,label:"produkt/produkter",children:e.jsx(f,{"aria-label":"Handlekurv",children:e.jsx(h,{children:"shopping_bag"})})})}),e.jsx(o,{kind:"dont",description:"Ikke behold standardlabelen på noe som ikke er varslinger. Skjermlesere får «4 varsler» om en handlekurv.",children:e.jsx(r,{...n,count:4,children:e.jsx(f,{"aria-label":"Handlekurv",children:e.jsx(h,{children:"shopping_bag"})})})})]}),e.jsxs(m,{children:[e.jsxs(o,{kind:"do",description:"Bruk urgent bare der brukeren må gjøre noe. Da skiller det seg ut fra resten.",children:[e.jsx(r,{...n,urgent:!0,children:e.jsx(t,{variant:"secondary",children:"Forfalt faktura"})}),e.jsx(r,{...n,children:e.jsx(t,{variant:"secondary",children:"Meldinger"})})]}),e.jsxs(o,{kind:"dont",description:"Ikke sett urgent på alt. Når alle varsler er røde, betyr fargen ingenting.",children:[e.jsx(r,{...n,urgent:!0,children:e.jsx(t,{variant:"secondary",children:"Forfalt faktura"})}),e.jsx(r,{...n,urgent:!0,children:e.jsx(t,{variant:"secondary",children:"Meldinger"})})]})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "På et element",
  parameters: {
    docs: {
      description: {
        story: "Sender du inn et element som children, blir elementet anker og varselet plasseres oppe til høyre på det. Ankrede varsler ligger utenfor flyten, så de flytter ikke innholdet i ankeret."
      }
    }
  },
  render: anchoredToButton
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Inni et element",
  parameters: {
    docs: {
      description: {
        story: "Uten children ligger varselet i flyten og tar plass der det står, uten posisjonering. Det passer når innholdet selv har en naturlig plass til det, som i en fane eller en tag."
      }
    }
  },
  render: args => <Flex direction="column" gap="xl">
            <Flex gap="xl" alignItems="center" wrap>
                <Chip variant="filter" aria-pressed>
                    Ubehandlet
                    <NotificationBadge {...args} />
                </Chip>
                <Tag>
                    Skadesaker
                    <NotificationBadge {...args} />
                </Tag>
            </Flex>

            <Tabs>
                <TabList>
                    <Tab>Forsikringer</Tab>
                    <Tab>Skadesaker</Tab>
                    <Tab>
                        Tilbud
                        <NotificationBadge {...args} />
                    </Tab>
                </TabList>
                <TabPanel>Test</TabPanel>
            </Tabs>
        </Flex>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Bare prikk",
  args: {
    count: 120,
    hideCounter: true
  },
  parameters: {
    docs: {
      description: {
        story: "Med \`hideCounter\` vises bare en prikk. Antallet er fortsatt tilgjengelig for skjermlesere. Innrykket skalerer med ankerets bredde, så prikken legger seg i hjørnet også på smale ankere som ikonknapper."
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args}>
                <Button>Meldinger</Button>
            </NotificationBadge>
            <NotificationBadge {...args} label="produkt/produkter">
                <IconButton aria-label="Handlekurv">
                    <Icon>shopping_bag</Icon>
                </IconButton>
            </NotificationBadge>
        </Flex>
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Med \`urgent\` byttes kontrastfargen ut med en rødfarge som følger brandet. Bruk det når varselet krever at brukeren gjør noe. \`urgent\` kan kombineres med \`hideCounter\`."
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} urgent>
                <Button variant="primary">Meldinger</Button>
            </NotificationBadge>
            <NotificationBadge {...args} urgent hideCounter>
                <Button variant="primary">Meldinger</Button>
            </NotificationBadge>
        </Flex>
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Antall og label",
  parameters: {
    docs: {
      description: {
        story: "\`max\` bestemmer når antallet forkortes, og trenger ikke være en hel tierpotens. \`label\` tar et \`entall/flertall\`-par og bestemmer teksten skjermlesere får, og tooltipen på ankeret. Ved 0 rendres ikke varselet i det hele tatt, men ankeret rendres som normalt."
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} count={120} max={50}>
                <Button variant="secondary">max=50</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={4} label="produkt/produkter">
                <Button variant="secondary">4 produkter</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={0}>
                <Button variant="secondary">count=0</Button>
            </NotificationBadge>
        </Flex>
}`,...p.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "På ulike komponenter",
  args: {
    max: 9
  },
  parameters: {
    docs: {
      description: {
        story: "Varselet kan ankres på alt som er ett klikkbart element. Plasseringen bruker logiske egenskaper, så varselet speiles til øvre venstre i en høyre-mot-venstre-kontekst."
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} urgent>
                <Button variant="primary">Eksempel</Button>
            </NotificationBadge>
            <NotificationBadge {...args} label="produkt/produkter">
                <IconButton aria-label="Handlekurv">
                    <Icon>shopping_bag</Icon>
                </IconButton>
            </NotificationBadge>
            <NotificationBadge {...args}>
                <Chip variant="filter">Eksempel</Chip>
            </NotificationBadge>
            <NotificationBadge {...args} label="skadesak/skadesaker">
                <Card as="button" padding="m">
                    Skadesak 2024-1138
                </Card>
            </NotificationBadge>
            <NotificationBadge {...args} label="melding/meldinger">
                <NavLink href="#">Meldinger</NavLink>
            </NotificationBadge>
        </Flex>
}`,...k.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Riktig og feil",
  parameters: {
    docs: {
      description: {
        story: "De vanligste fellene når varselet skal plasseres og beskrives."
      }
    }
  },
  render: args => <Flex direction="column" gap="xl">
            <VerdictPair>
                <Verdict kind="do" description="Send ankeret inn som children. Varselet blir knyttet til elementet med aria-describedby, og ankeret får antallet som tooltip.">
                    <NotificationBadge {...args}>
                        <Button>Meldinger</Button>
                    </NotificationBadge>
                </Verdict>
                <Verdict kind="dont" description="Ikke legg varselet ved siden av elementet. Som søsken blir det ikke ankret, det tar plass i flyten, og sammenhengen forsvinner for skjermlesere.">
                    <Button>Meldinger</Button>
                    <NotificationBadge {...args} />
                </Verdict>
            </VerdictPair>

            <VerdictPair>
                <Verdict kind="do" description="Ankre rundt et Card. Da ligger varselet utenfor kortet og vises i sin helhet.">
                    <NotificationBadge {...args} label="skadesak/skadesaker">
                        <Card as="button" padding="m">
                            Skadesak 2024-1138
                        </Card>
                    </NotificationBadge>
                </Verdict>
                <Verdict kind="dont" description="Ikke ankre inni et Card. Kortet har overflow: hidden og klipper varselet, som er absolutt posisjonert.">
                    <Card padding="m">
                        <NotificationBadge {...args}>
                            <Button variant="primary">Klippes</Button>
                        </NotificationBadge>
                    </Card>
                </Verdict>
            </VerdictPair>

            <VerdictPair>
                <Verdict kind="do" description="Sett label når antallet ikke er varslinger. Her leses «4 produkter», som faktisk beskriver innholdet.">
                    <NotificationBadge {...args} count={4} label="produkt/produkter">
                        <IconButton aria-label="Handlekurv">
                            <Icon>shopping_bag</Icon>
                        </IconButton>
                    </NotificationBadge>
                </Verdict>
                <Verdict kind="dont" description="Ikke behold standardlabelen på noe som ikke er varslinger. Skjermlesere får «4 varsler» om en handlekurv.">
                    <NotificationBadge {...args} count={4}>
                        <IconButton aria-label="Handlekurv">
                            <Icon>shopping_bag</Icon>
                        </IconButton>
                    </NotificationBadge>
                </Verdict>
            </VerdictPair>

            <VerdictPair>
                <Verdict kind="do" description="Bruk urgent bare der brukeren må gjøre noe. Da skiller det seg ut fra resten.">
                    <NotificationBadge {...args} urgent>
                        <Button variant="secondary">Forfalt faktura</Button>
                    </NotificationBadge>
                    <NotificationBadge {...args}>
                        <Button variant="secondary">Meldinger</Button>
                    </NotificationBadge>
                </Verdict>
                <Verdict kind="dont" description="Ikke sett urgent på alt. Når alle varsler er røde, betyr fargen ingenting.">
                    <NotificationBadge {...args} urgent>
                        <Button variant="secondary">Forfalt faktura</Button>
                    </NotificationBadge>
                    <NotificationBadge {...args} urgent>
                        <Button variant="secondary">Meldinger</Button>
                    </NotificationBadge>
                </Verdict>
            </VerdictPair>
        </Flex>
}`,...u.parameters?.docs?.source}}};const fe=["PaaEtElement","InniEtElement","BarePrikk","Viktig","AntallOgLabel","PaaUlikeKomponenter","RiktigOgFeil"];export{p as AntallOgLabel,c as BarePrikk,d as InniEtElement,l as PaaEtElement,k as PaaUlikeKomponenter,u as RiktigOgFeil,g as Viktig,fe as __namedExportsOrder,ue as default};
