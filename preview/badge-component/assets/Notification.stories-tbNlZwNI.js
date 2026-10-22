import{r as J,j as e,R as M}from"./iframe-aA0p6r9-.js";import{F as o}from"./Flex-DsUrarOr.js";import{c as B}from"./clsx-B-dksMZM.js";import{B as a}from"./Button-CdYLx6ZN.js";import{I as D}from"./IconButton-B-WfmXBS.js";import{I}from"./Icon-D0i0JE_A.js";import{C as F}from"./Card-BMbm6_HI.js";import{C as l}from"./Chip-Bh9JXz1H.js";import{T as O}from"./Tag-DSIqX5Fo.js";import{M as X}from"./Menu-CvubulSN.js";import{M as P}from"./MenuItem-B64jmP4q.js";import{c as G,b as Q,T,a as W}from"./TabPanel-CX8Z_mFO.js";import{a as Y,L as w}from"./LinkList-CWHqhNAc.js";import{A as Z}from"./Accordion-C02JESFl.js";import{E as A}from"./ExpandablePanel-CFhZht6w.js";import{N as ee}from"./NavLink-ChjxdBQ9.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-BnCqk5vE.js";import"./mergeRefs-BPd1H58I.js";import"./usePreviousValue-IfhV82Fh.js";import"./Loader-DQ5Gcow2.js";import"./useDelayedRender-B9M9aGfC.js";import"./CheckIcon-hG17bcvX.js";import"./CloseIcon-Dt216M9P.js";import"./floating-ui.react-CA-Fa3_f.js";import"./index-DCSMpfX5.js";import"./index-DxQbSn8V.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useBrowserPreferences-BvUXglgP.js";import"./ChevronRightIcon-CfOwIkhX.js";import"./OpenInNewIcon-fa0H7ILz.js";import"./useAnimatedHeightBetween-BwY01ktg.js";import"./tokens-HKQN8Vn-.js";import"./Expander-D6L00C5i.js";import"./ChevronUpIcon-BQsRSg1v.js";import"./ArrowRightIcon-COGBfpiF.js";const re="varsel/varsler";function ne(r,t){return r>t?`${t}+`:r}function te(r,t){const[s,S=s]=t.split("/");return`${r} ${r===1?s:S}`}const n=({className:r,children:t,count:s,max:S=99,hideCounter:V,urgent:R=!1,label:z=re,...U})=>{const L=J.useId(),K=`jkl-notification-${L}`,_=`--jkl-notification-anchor-${L.replace(/[^a-z0-9]/gi,"")}`,N=s>0,H=N?te(s,z):void 0;return e.jsxs(e.Fragment,{children:[M.isValidElement(t)?M.cloneElement(t,{"aria-describedby":B(t.props["aria-describedby"],N&&K)||void 0,className:B(t.props.className,"jkl-notification-anchor"),style:{...t.props.style,"--jkl-notification-anchor-name":_},title:t.props.title??H}):t,N?e.jsxs("div",{className:B("jkl-notification",V&&"jkl-notification--dot",r),"data-urgent":R,"data-count":s,...U,style:{...U.style,"--jkl-notification-anchor-name":_},id:K,children:[V?null:e.jsx("span",{"aria-hidden":"true",children:ne(s,S)}),e.jsx("div",{className:"jkl-sr-only",children:H})]}):null]})};try{n.displayName="Notification",n.__docgenInfo={description:"",displayName:"Notification",props:{count:{defaultValue:null,description:"Antall varsler",name:"count",required:!0,type:{name:"number"}},max:{defaultValue:{value:"99"},description:'Høyeste tall som vises før det blir "+".',name:"max",required:!1,type:{name:"number"}},hideCounter:{defaultValue:null,description:"Skjuler tallene visuelt, så det bare vises en prikk. Antallet leses fortsatt opp av skjermlesere.",name:"hideCounter",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elementet varselet skal plasseres på. Må være kun ett element, og klikkbart, for å kunne brukes.",name:"children",required:!1,type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}},label:{defaultValue:{value:"varsel/varsler"},description:`Dersom du bruker komponenten for noe annet enn "varslinger" kan du endre beskrivelsen av dem.
Dette brukes for å gi tilstrekkelig kontekst for tilgjengelighetsverktøy.
@example 1 ulest melding / 4 uleste meldinger
@example 1 produkt / 4 produkter`,name:"label",required:!1,type:{name:"string"}},urgent:{defaultValue:{value:"false"},description:"Endrer farge fra kontrastfarge til en rød-farge.",name:"urgent",required:!1,type:{name:"boolean"}}}}}catch{}const we={title:"Komponenter/Notification",component:n,args:{count:1,max:99,hideCounter:!1,urgent:!1}},i=r=>e.jsx(n,{...r,children:e.jsx(a,{children:"Eksempel"})}),q=r=>e.jsxs(o,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(n,{...r,children:e.jsx(a,{variant:"primary",children:"Eksempel"})}),e.jsx(n,{...r,label:"produkt/produkter",children:e.jsx(a,{icon:e.jsx(I,{children:"shopping_bag"}),variant:"primary","aria-label":"Handlekurv"})}),e.jsx(n,{...r,label:"produkt/produkter",children:e.jsx(D,{"aria-label":"Handlekurv",children:e.jsx(I,{children:"shopping_bag"})})}),e.jsx(n,{...r,children:e.jsx(l,{variant:"filter",children:"Eksempel"})}),e.jsx(n,{...r,children:e.jsx(l,{variant:"input",children:"Eksempel"})}),e.jsx(n,{...r,label:"skadesak/skadesaker",children:e.jsx(F,{as:"button",clickable:!0,padding:"m",children:"Skadesak 2024-1138"})}),e.jsx(n,{...r,label:"melding/meldinger",children:e.jsx(ee,{href:"#",children:"Meldinger"})})]}),$=r=>e.jsxs(o,{direction:"column",gap:"xl",children:[e.jsxs(o,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsxs(l,{variant:"filter","aria-pressed":!0,children:["Eksempel",e.jsx(n,{...r})]}),e.jsxs(l,{variant:"input",children:["Eksempel",e.jsx(n,{...r})]}),e.jsxs(l,{variant:"filter","aria-pressed":!0,children:[e.jsx(n,{...r}),"Eksempel"]}),e.jsxs(l,{variant:"input",children:[e.jsx(n,{...r}),"Eksempel"]}),e.jsxs(O,{children:["Ubehandlet",e.jsx(n,{...r})]})]}),e.jsxs(o,{gap:"xl",alignItems:"start",wrap:!0,children:[e.jsxs(X,{triggerElement:e.jsx(a,{icon:e.jsx(I,{children:"menu"}),variant:"ghost"}),children:[e.jsx(P,{children:"Forsikringer"}),e.jsx(P,{children:"Skadesaker"}),e.jsxs(P,{children:["Tilbud",e.jsx(n,{...r})]})]}),e.jsxs(G,{children:[e.jsxs(Q,{children:[e.jsx(T,{children:"Forsikringer"}),e.jsx(T,{children:"Skadesaker"}),e.jsxs(T,{children:["Tilbud",e.jsx(n,{...r})]})]}),e.jsx(W,{children:"Test"})]}),e.jsxs(Y,{label:"Snarveier",children:[e.jsx(w,{href:"#",children:"Forsikringer"}),e.jsxs(w,{href:"#",children:["Skadesaker",e.jsx(n,{...r})]})]}),e.jsx(Z,{children:e.jsxs(A,{children:[e.jsxs(A.Header,{children:["Skadesaker",e.jsx(n,{...r})]}),e.jsx(A.Content,{children:"Du har ingen aktive skadesaker."})]})})]})]}),d={name:"Inni et element",parameters:{docs:{description:{story:"Uten children vises varselet der det står i innholdet, uten posisjonering. Det ligger i flyten og tar plass, så innholdet rundt flytter på seg."}}}},c={name:"På et element",args:{count:3},parameters:{docs:{description:{story:"Sender du inn et element som children, blir elementet anker og varselet plasseres oppe til høyre på det."}}},render:i},p={name:"Bare prikk",args:{count:120,hideCounter:!0},parameters:{docs:{description:{story:"Med `hideCounter` vises bare en prikk. Antallet er fortsatt tilgjengelig for skjermlesere."}}},render:i},m={args:{count:3,urgent:!0},parameters:{docs:{description:{story:"Med `urgent` byttes kontrastfargen ut med en rødfarge som følger brandet. Bruk det når varselet krever at brukeren gjør noe."}}},render:i},u={name:"Viktig prikk",args:{count:3,urgent:!0,hideCounter:!0},parameters:{docs:{description:{story:"`urgent` kan kombineres med `hideCounter`."}}},render:i},k={name:"Uten antall",args:{count:0},parameters:{docs:{description:{story:"Ved 0 rendres ikke varselet i det hele tatt, men ankeret rendres som normalt."}}},render:i},g={name:"Eget tak",args:{count:120,max:50},parameters:{docs:{description:{story:"`max` bestemmer når antallet forkortes. Taket trenger ikke være en hel tierpotens."}}},render:i},h={name:"Egen label",args:{count:4,label:"produkt/produkter"},parameters:{docs:{description:{story:"`label` tar et `entall/flertall`-par og bestemmer teksten skjermlesere får, og tooltipen på ankeret. Her blir det «4 produkter» i stedet for «4 varsler»."}}},render:i},x={name:"Firkantede hjørner",args:{count:3},parameters:{docs:{description:{story:"Innrykket skalerer med ankerets bredde, så varselet legger seg i hjørnet også når ankeret ikke er pilleformet. `tertiary` har ingen hjørneradius."}}},render:r=>e.jsxs(o,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(n,{...r,children:e.jsx(a,{variant:"tertiary",children:"Se alle tilbud"})}),e.jsx(n,{...r,hideCounter:!0,children:e.jsx(a,{variant:"tertiary",children:"Se alle tilbud"})}),e.jsx(n,{...r,hideCounter:!0,children:e.jsx(a,{variant:"primary",children:"Se alle tilbud"})})]})},f={name:"Avkuttet ankertekst",args:{count:3},parameters:{docs:{description:{story:"Når ankeret er smalere enn innholdet sitt, følger varselet den avkuttede kanten og ikke tekstens egentlige bredde."}}},render:r=>e.jsx("div",{style:{inlineSize:140},children:e.jsx(n,{...r,children:e.jsx(a,{variant:"primary",children:"En veldig lang knappetekst"})})})},j={name:"Høyre mot venstre",args:{count:3},parameters:{docs:{description:{story:"Plasseringen bruker logiske egenskaper, så varselet speiles til øvre venstre i en høyre-mot-venstre-kontekst."}}},render:r=>e.jsx("div",{dir:"rtl",children:e.jsxs(o,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(n,{...r,children:e.jsx(a,{variant:"primary",children:"مثال"})}),e.jsx(n,{...r,hideCounter:!0,children:e.jsx(D,{"aria-label":"عربة التسوق",children:e.jsx(I,{children:"shopping_bag"})})})]})})},v={args:{count:3},parameters:{docs:{description:{story:"Varselet er absolutt posisjonert, så en beholder med `overflow: hidden` klipper det. Card er en slik beholder: ankre rundt kortet i stedet for inni det."}}},render:r=>e.jsxs(o,{gap:"xl",alignItems:"start",wrap:!0,children:[e.jsx(F,{padding:"s",children:e.jsx(n,{...r,children:e.jsx(a,{variant:"primary",children:"Klippes"})})}),e.jsx(n,{...r,children:e.jsx(F,{as:"button",clickable:!0,padding:"s",children:"Klippes ikke"})})]})},b={name:"På ulike komponenter",args:{count:3,max:9},parameters:{docs:{description:{story:"Ankrede varsler ligger utenfor flyten, så de flytter ikke innholdet i ankeret."}}},render:r=>e.jsx(q,{...r})},y={name:"Prikk på ulike komponenter",args:{count:3,hideCounter:!0},render:r=>e.jsx(q,{...r})},C={name:"Inni ulike komponenter",args:{count:3,max:9},parameters:{docs:{description:{story:"Uten anker ligger varselet i flyten og tar plass der det står. Det passer når innholdet selv har en naturlig plass til det, som i en meny, en fane eller en lenkeliste."}}},render:r=>e.jsx($,{...r})},E={name:"Prikk inni ulike komponenter",args:{count:3,hideCounter:!0},render:r=>e.jsx($,{...r})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Inni et element",
  parameters: {
    docs: {
      description: {
        story: "Uten children vises varselet der det står i innholdet, uten posisjonering. Det ligger i flyten og tar plass, så innholdet rundt flytter på seg."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "På et element",
  args: {
    count: 3
  },
  parameters: {
    docs: {
      description: {
        story: "Sender du inn et element som children, blir elementet anker og varselet plasseres oppe til høyre på det."
      }
    }
  },
  render: anchoredToButton
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Bare prikk",
  args: {
    count: 120,
    hideCounter: true
  },
  parameters: {
    docs: {
      description: {
        story: "Med \`hideCounter\` vises bare en prikk. Antallet er fortsatt tilgjengelig for skjermlesere."
      }
    }
  },
  render: anchoredToButton
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3,
    urgent: true
  },
  parameters: {
    docs: {
      description: {
        story: "Med \`urgent\` byttes kontrastfargen ut med en rødfarge som følger brandet. Bruk det når varselet krever at brukeren gjør noe."
      }
    }
  },
  render: anchoredToButton
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Viktig prikk",
  args: {
    count: 3,
    urgent: true,
    hideCounter: true
  },
  parameters: {
    docs: {
      description: {
        story: "\`urgent\` kan kombineres med \`hideCounter\`."
      }
    }
  },
  render: anchoredToButton
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Uten antall",
  args: {
    count: 0
  },
  parameters: {
    docs: {
      description: {
        story: "Ved 0 rendres ikke varselet i det hele tatt, men ankeret rendres som normalt."
      }
    }
  },
  render: anchoredToButton
}`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Eget tak",
  args: {
    count: 120,
    max: 50
  },
  parameters: {
    docs: {
      description: {
        story: "\`max\` bestemmer når antallet forkortes. Taket trenger ikke være en hel tierpotens."
      }
    }
  },
  render: anchoredToButton
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Egen label",
  args: {
    count: 4,
    label: "produkt/produkter"
  },
  parameters: {
    docs: {
      description: {
        story: "\`label\` tar et \`entall/flertall\`-par og bestemmer teksten skjermlesere får, og tooltipen på ankeret. Her blir det «4 produkter» i stedet for «4 varsler»."
      }
    }
  },
  render: anchoredToButton
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Firkantede hjørner",
  args: {
    count: 3
  },
  parameters: {
    docs: {
      description: {
        story: "Innrykket skalerer med ankerets bredde, så varselet legger seg i hjørnet også når ankeret ikke er pilleformet. \`tertiary\` har ingen hjørneradius."
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="center" wrap>
            <NotificationComponent {...args}>
                <Button variant="tertiary">Se alle tilbud</Button>
            </NotificationComponent>
            <NotificationComponent {...args} hideCounter>
                <Button variant="tertiary">Se alle tilbud</Button>
            </NotificationComponent>
            <NotificationComponent {...args} hideCounter>
                <Button variant="primary">Se alle tilbud</Button>
            </NotificationComponent>
        </Flex>
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Avkuttet ankertekst",
  args: {
    count: 3
  },
  parameters: {
    docs: {
      description: {
        story: "Når ankeret er smalere enn innholdet sitt, følger varselet den avkuttede kanten og ikke tekstens egentlige bredde."
      }
    }
  },
  render: args => <div style={{
    inlineSize: 140
  }}>
            <NotificationComponent {...args}>
                <Button variant="primary">En veldig lang knappetekst</Button>
            </NotificationComponent>
        </div>
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Høyre mot venstre",
  args: {
    count: 3
  },
  parameters: {
    docs: {
      description: {
        story: "Plasseringen bruker logiske egenskaper, så varselet speiles til øvre venstre i en høyre-mot-venstre-kontekst."
      }
    }
  },
  render: args => <div dir="rtl">
            <Flex gap="xl" alignItems="center" wrap>
                <NotificationComponent {...args}>
                    <Button variant="primary">مثال</Button>
                </NotificationComponent>
                <NotificationComponent {...args} hideCounter>
                    <IconButton aria-label="عربة التسوق">
                        <Icon>shopping_bag</Icon>
                    </IconButton>
                </NotificationComponent>
            </Flex>
        </div>
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3
  },
  parameters: {
    docs: {
      description: {
        story: "Varselet er absolutt posisjonert, så en beholder med \`overflow: hidden\` klipper det. Card er en slik beholder: ankre rundt kortet i stedet for inni det."
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="start" wrap>
            <Card padding="s">
                <NotificationComponent {...args}>
                    <Button variant="primary">Klippes</Button>
                </NotificationComponent>
            </Card>

            <NotificationComponent {...args}>
                <Card as="button" clickable padding="s">
                    Klippes ikke
                </Card>
            </NotificationComponent>
        </Flex>
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "På ulike komponenter",
  args: {
    count: 3,
    max: 9
  },
  parameters: {
    docs: {
      description: {
        story: "Ankrede varsler ligger utenfor flyten, så de flytter ikke innholdet i ankeret."
      }
    }
  },
  render: args => <AnchoredExamples {...args} />
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Prikk på ulike komponenter",
  args: {
    count: 3,
    hideCounter: true
  },
  render: args => <AnchoredExamples {...args} />
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Inni ulike komponenter",
  args: {
    count: 3,
    max: 9
  },
  parameters: {
    docs: {
      description: {
        story: "Uten anker ligger varselet i flyten og tar plass der det står. Det passer når innholdet selv har en naturlig plass til det, som i en meny, en fane eller en lenkeliste."
      }
    }
  },
  render: args => <InlineExamples {...args} />
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Prikk inni ulike komponenter",
  args: {
    count: 3,
    hideCounter: true
  },
  render: args => <InlineExamples {...args} />
}`,...E.parameters?.docs?.source}}};const De=["Notification","PaaEtElement","BarePrikk","Viktig","ViktigPrikk","UtenAntall","EgetTak","EgenLabel","FirkantedeHjoerner","AvkuttetAnkertekst","HoeyreMotVenstre","Klipping","PaaUlikeKomponenter","PrikkPaaUlikeKomponenter","InniUlikeKomponenter","PrikkInniUlikeKomponenter"];export{f as AvkuttetAnkertekst,p as BarePrikk,h as EgenLabel,g as EgetTak,x as FirkantedeHjoerner,j as HoeyreMotVenstre,C as InniUlikeKomponenter,v as Klipping,d as Notification,c as PaaEtElement,b as PaaUlikeKomponenter,E as PrikkInniUlikeKomponenter,y as PrikkPaaUlikeKomponenter,k as UtenAntall,m as Viktig,u as ViktigPrikk,De as __namedExportsOrder,we as default};
