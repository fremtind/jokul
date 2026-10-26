import{r as $,j as e,R as L}from"./iframe-Dn-RTtUI.js";import{F as a}from"./Flex-RrKE9ei5.js";import{c as C}from"./clsx-B-dksMZM.js";import{B as t}from"./Button-CgpwHTru.js";import{T as _}from"./Tag-CEsOUAq2.js";import{C as R}from"./Chip-DZ7-Uq3Y.js";import{I as d}from"./IconButton-BeQGScj2.js";import{I as c}from"./Icon-BrLF-dqp.js";import{T as s}from"./Text-DybWFjk0.js";import{C as I}from"./Card-C5JfOtv2.js";import{c as K,b as q,T as S,a as E}from"./TabPanel-eebn7tby.js";import{N as M}from"./NavLink-MPL-YGm2.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-DBQZ9JbW.js";import"./mergeRefs-DPKVXR0V.js";import"./usePreviousValue-cRP1osgS.js";import"./Loader-DgkrlpTN.js";import"./useDelayedRender-D7E56Ofl.js";import"./CheckIcon-B3K_HMm1.js";import"./CloseIcon-C-gZpnjO.js";import"./ArrowRightIcon-CmYlJIO4.js";const J="varsler";function U(n,i){return n>i?`${i}+`:n}const r=({className:n,children:i,count:o,max:g=99,hideCounter:T,urgent:P=!1,label:O=J,...A})=>{const V=$.useId(),D=`jkl-notification-badge-${V}`,w=`--jkl-notification-badge-anchor-${V.replace(/[^a-z0-9]/gi,"")}`,F=o>0,H=F?O:void 0;return e.jsxs(e.Fragment,{children:[L.isValidElement(i)?L.cloneElement(i,{"aria-describedby":C(i.props["aria-describedby"],F&&D)||void 0,className:C(i.props.className,"jkl-notification-badge-anchor"),style:{...i.props.style,"--jkl-notification-badge-anchor-name":w},title:i.props.title??H}):i,F?e.jsxs("div",{className:C("jkl-notification-badge",T&&"jkl-notification-badge--dot",n),"data-urgent":P,"data-count":o,"data-hide-counter":T,...A,style:{...A.style,"--jkl-notification-badge-anchor-name":w},id:D,children:[T?null:e.jsx("span",{"aria-hidden":"true",children:U(o,g)}),e.jsx("div",{className:"jkl-sr-only",children:H})]}):null]})};try{r.displayName="NotificationBadge",r.__docgenInfo={description:"",displayName:"NotificationBadge",props:{count:{defaultValue:null,description:"Antall varsler",name:"count",required:!0,type:{name:"number"}},max:{defaultValue:{value:"99"},description:'Høyeste tall som vises før det blir "+".',name:"max",required:!1,type:{name:"number"}},hideCounter:{defaultValue:null,description:"Skjuler tallene visuelt, så det bare vises en prikk. Antallet leses fortsatt opp av skjermlesere.",name:"hideCounter",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elementet varselet skal plasseres på. Må være kun ett element, og klikkbart, for å kunne brukes.",name:"children",required:!1,type:{name:"ReactElement<HTMLAttributes<HTMLElement>, string | JSXElementConstructor<any>>"}},label:{defaultValue:{value:"varsler"},description:`Teksten skjermlesere får, og tittelen på ankeret. Brukes ordrett, slik du
sender den inn.

Antallet vises bare visuelt, så dette er eneste sted skjermlesere kan få
det. Ta det med i strengen, og hold den i takt med \`count\`.
@example \`\${antallMeldinger} uleste meldinger\`
@example "4 produkter"`,name:"label",required:!1,type:{name:"string"}},urgent:{defaultValue:{value:"false"},description:"Endrer farge fra kontrastfarge til en rød-farge.",name:"urgent",required:!1,type:{name:"boolean"}}}}}catch{}const pe={title:"Komponenter/NotificationBadge",component:r,args:{count:3,max:99,hideCounter:!1,urgent:!1}},l=n=>`${n} varsler`,k={parameters:{docs:{description:{story:"Hele spennet på én skjerm. Varselet kan ankres på et element eller ligge inline, det kan vises som tall eller prikk, og det kan være viktig. Ved 0 rendres det ikke i det hele tatt. Skru på kontrollene for å se hvordan hver variant oppfører seg."}}},render:n=>e.jsxs(a,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(r,{...n,label:l(n.count),children:e.jsx(t,{variant:"secondary",children:"Ankret"})}),e.jsx(r,{...n,hideCounter:!0,label:l(n.count),children:e.jsx(t,{variant:"secondary",children:"Prikk"})}),e.jsx(r,{...n,urgent:!0,label:l(n.count),children:e.jsx(t,{variant:"secondary",children:"Viktig"})}),e.jsxs(_,{children:["Inline",e.jsx(r,{...n,label:l(n.count)})]}),e.jsx(r,{...n,count:0,children:e.jsx(t,{variant:"secondary",children:"Tomt"})})]})},u={name:"Ankret og inline",parameters:{docs:{description:{story:"De to plasseringsmodusene. Sender du inn et element som `children`, blir elementet anker og varselet legges oppe til høyre på det – utenfor flyten, så innholdet i ankeret flytter seg ikke. Uten `children` ligger varselet i flyten og tar plass der det står. Inline passer når innholdet selv har en naturlig plass til det, som i en tag eller en fane.\n\nPlasseringen bruker logiske egenskaper, så et ankret varsel speiles til øvre venstre i en høyre-mot-venstre-kontekst."}}},render:n=>e.jsxs(a,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(r,{...n,label:l(n.count),children:e.jsx(t,{children:"Ankret på knappen"})}),e.jsxs(_,{children:["Inline i en tag",e.jsx(r,{...n,label:l(n.count)})]}),e.jsxs(R,{variant:"filter",selected:!0,children:["Inline i en chip",e.jsx(r,{...n,label:l(n.count)})]})]})},m={name:"Bare prikk",args:{count:120,hideCounter:!0},parameters:{docs:{description:{story:"Med `hideCounter` vises bare en prikk. Antallet er borte visuelt, men `label` leses fortsatt av skjermlesere – så bruk prikken når det er nok å vite *at* det er noe nytt, ikke hvor mye.\n\nInnrykket skalerer med ankerets bredde, så prikken legger seg i hjørnet også på smale ankere som ikonknapper."}}},render:n=>e.jsxs(a,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(r,{...n,label:l(n.count),children:e.jsx(t,{children:"En lengre knappetekst"})}),e.jsx(r,{...n,label:l(n.count),children:e.jsx(t,{children:"Kort"})}),e.jsx(r,{...n,label:"3 varer i kurven",children:e.jsx(d,{"aria-label":"Handlekurv",children:e.jsx(c,{children:"shopping_bag"})})})]})},p={parameters:{docs:{description:{story:"Med `urgent` byttes kontrastfargen ut med en rødfarge som følger brandet. Bruk det når varselet krever at brukeren faktisk gjør noe – setter du det på alt, betyr fargen ingenting. `urgent` kan kombineres med `hideCounter`, og endrer ikke teksten skjermlesere får."}}},render:n=>e.jsxs(a,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(r,{...n,urgent:!0,label:"1 forfalt faktura",children:e.jsx(t,{variant:"secondary",children:"Forfalt faktura"})}),e.jsx(r,{...n,urgent:!0,hideCounter:!0,label:"1 forfalt faktura",children:e.jsx(t,{variant:"secondary",children:"Som prikk"})}),e.jsx(r,{...n,label:l(n.count),children:e.jsx(t,{variant:"secondary",children:"Vanlig, til sammenligning"})})]})},b={name:"Antall, max og label",parameters:{docs:{description:{story:"`max` bestemmer når antallet forkortes med «+», og trenger ikke være en hel tierpotens.\n\n`label` er teksten skjermlesere får, og tittelen på ankeret. Den brukes **ordrett**, slik du sender den inn – komponenten bøyer ingenting og legger ikke antallet til selv. Siden tallet bare vises visuelt, er `label` eneste sted skjermlesere kan få det, så ta det med i strengen og hold den i takt med `count`. Bygg den gjerne av samme verdi:\n\n```tsx\n<NotificationBadge count={n} label={`${n} uleste meldinger`} />\n```"}}},render:n=>e.jsxs(a,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(r,{...n,count:120,max:50,label:"120 varsler",children:e.jsx(t,{variant:"secondary",children:"max=50"})}),e.jsx(r,{...n,count:120,label:"120 varsler",children:e.jsx(t,{variant:"secondary",children:"max=99 (default)"})}),e.jsx(r,{...n,count:1,label:"1 ulest melding",children:e.jsx(t,{variant:"secondary",children:"Entall"})}),e.jsx(r,{...n,count:4,label:"4 uleste meldinger",children:e.jsx(t,{variant:"secondary",children:"Flertall"})})]})},v={name:"Når varselet forsvinner",parameters:{docs:{description:{story:"Ved `count={0}` rendres varselet ikke i det hele tatt – heller ikke den skjulte teksten – mens ankeret rendres som normalt og beholder ankernavnet sitt. Ankeret får da verken `title` eller `aria-describedby`, så det er ingen rester å rydde opp i.\n\nDet betyr at du kan la badgen stå permanent i JSX-en og bare sende inn tallet du har. Du trenger ingen `{count > 0 && ...}` rundt den. Negative tall og `NaN` behandles likt."}}},render:n=>e.jsxs(a,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(r,{...n,count:3,label:"3 varsler",children:e.jsx(t,{variant:"secondary",children:"count=3"})}),e.jsx(r,{...n,count:0,children:e.jsx(t,{variant:"secondary",children:"count=0"})}),e.jsx(r,{...n,count:0,hideCounter:!0,children:e.jsx(t,{variant:"secondary",children:"count=0 som prikk"})})]})},f={name:"Tilgjengelighet i praksis",parameters:{docs:{description:{story:'Hva komponenten faktisk gjør i DOM-en. Tallet du ser er `aria-hidden`, så det finnes ikke for skjermlesere – i stedet legges `label` som skjult tekst i varselet, og ankeret peker på den med `aria-describedby`. Ankeret får i tillegg `label` som `title`, så samme tekst dukker opp som tooltip på hover.\n\n```html\n<button\n    class="jkl-button jkl-notification-badge-anchor"\n    aria-describedby="jkl-notification-badge-«id»"\n    title="3 varsler"\n>\n    Meldinger\n</button>\n<div class="jkl-notification-badge" id="jkl-notification-badge-«id»">\n    <span aria-hidden="true">3</span>\n    <div class="jkl-sr-only">3 varsler</div>\n</div>\n```\n\nKomponenten overtar ikke det ankeret har satt selv: har det allerede en `aria-describedby`, slås de sammen, og har det sin egen `title`, beholdes den. Hover over knappene under, eller inspiser dem, for å se forskjellen.'}}},render:n=>e.jsxs(a,{direction:"column",gap:"xl",alignItems:"start",children:[e.jsxs(a,{direction:"column",gap:"m",alignItems:"start",children:[e.jsx(s,{bold:!0,children:"Vanlig: labelen blir både tooltip og skjult tekst"}),e.jsx(r,{...n,label:l(n.count),children:e.jsx(t,{children:"Meldinger"})})]}),e.jsxs(a,{direction:"column",gap:"m",alignItems:"start",children:[e.jsx(s,{bold:!0,children:"Egen title på ankeret beholdes framfor labelen"}),e.jsx(r,{...n,label:l(n.count),children:e.jsx(t,{title:"Gå til innboksen",children:"Meldinger"})})]}),e.jsxs(a,{direction:"column",gap:"m",alignItems:"start",children:[e.jsx(s,{bold:!0,children:"Egen aria-describedby slås sammen med varselets"}),e.jsx(r,{...n,label:l(n.count),children:e.jsx(t,{"aria-describedby":"min-hjelpetekst",children:"Meldinger"})}),e.jsx(s,{id:"min-hjelpetekst",children:"Hjelpetekst som ankeret peker på fra før."})]})]})},X=e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",children:"En"}),e.jsx(t,{variant:"secondary",children:"To"})]}),h={parameters:{docs:{description:{story:"To ting badgen ikke kan.\n\n**Den ankrer bare ett enkelt element.** Sender du inn et Fragment eller en liste, blir ingenting ankret – varselet faller tilbake til å flyte inline, og det skjer helt stille, uten advarsel i konsollen. Trenger du å ankre på flere ting, bruk én badge per element.\n\n**Den kan ikke ankres inni et `Card`.** Kortet har `overflow: hidden`, og varselet er absolutt posisjonert, så det klippes. Legg badgen rundt kortet i stedet – da ligger varselet utenfor og vises i sin helhet."}}},render:n=>e.jsxs(a,{direction:"column",gap:"xl",children:[e.jsxs(a,{direction:"column",gap:"m",children:[e.jsx(s,{bold:!0,children:"Flere elementer som children ankrer ikke"}),e.jsx(a,{gap:"xl",alignItems:"center",wrap:!0,children:e.jsx(r,{...n,label:l(n.count),children:X})})]}),e.jsxs(a,{direction:"column",gap:"m",children:[e.jsx(s,{bold:!0,children:"Rundt et Card virker, inni blir klippet"}),e.jsxs(a,{gap:"xl",alignItems:"start",wrap:!0,children:[e.jsx(r,{...n,label:"3 skadesaker",children:e.jsx(I,{as:"button",padding:"m",children:"Rundt kortet"})}),e.jsx(I,{padding:"m",children:e.jsx(r,{...n,label:l(n.count),children:e.jsx(t,{variant:"primary",children:"Inni kortet"})})})]})]})]})},x={name:"Toppmeny med varselbjelle",args:{count:4},parameters:{docs:{description:{story:"Det vanligste mønsteret: en ikonknapp i toppmenyen som bærer antallet uleste varsler. Ikonknapper er smale, så prikken er ofte nok her – antallet er med for skjermlesere uansett. Husk `aria-label` på selve ikonknappen; den sier hva knappen *gjør*, mens `label` på badgen sier hva tallet *er*."}}},render:n=>e.jsx(I,{outlined:!0,padding:"m",children:e.jsxs(a,{alignItems:"center",justifyContent:"space-between",gap:"xl",children:[e.jsx(s,{bold:!0,children:"Min side"}),e.jsxs(a,{alignItems:"center",gap:"l",children:[e.jsx(r,{...n,label:`${n.count} uleste varsler`,children:e.jsx(d,{"aria-label":"Varsler",children:e.jsx(c,{children:"notifications"})})}),e.jsx(r,{...n,count:2,label:"2 varer",children:e.jsx(d,{"aria-label":"Handlekurv",children:e.jsx(c,{children:"shopping_bag"})})}),e.jsx(d,{"aria-label":"Meny",children:e.jsx(c,{children:"menu"})})]})]})})},j={name:"Faner med antall",parameters:{docs:{description:{story:"Inline-modusen i sin mest naturlige bruk: antallet står i fanetittelen og teller hva som ligger bak fanen. Fanen har allerede sin egen tekst, så badgen trenger ikke ankres – den skal bare ta plass etter teksten.\n\nSett `label` til noe som beskriver fanen, ikke bare «varsler», ellers får skjermlesere samme tekst på hver fane."}}},render:n=>e.jsxs(K,{children:[e.jsxs(q,{children:[e.jsx(S,{children:"Forsikringer"}),e.jsxs(S,{children:["Skadesaker",e.jsx(r,{...n,count:2,label:"2 nye skadesaker"})]}),e.jsxs(S,{children:["Tilbud",e.jsx(r,{...n,count:5,label:"5 nye tilbud"})]})]}),e.jsx(E,{children:"Dine forsikringer"}),e.jsx(E,{children:"Dine skadesaker"}),e.jsx(E,{children:"Dine tilbud"})]})},y={args:{count:4},parameters:{docs:{description:{story:"Badgen brukes til mer enn varslinger, og da er `label` det som gjør den forståelig. Uten den ville skjermlesere fått «4 varsler» om en handlekurv, som er feil. Sett den til noe som faktisk beskriver innholdet, og ta antallet med."}}},render:n=>e.jsxs(a,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(r,{...n,label:`${n.count} varer i kurven`,children:e.jsx(d,{"aria-label":"Handlekurv",children:e.jsx(c,{children:"shopping_bag"})})}),e.jsx(r,{...n,label:`${n.count} varer i kurven`,children:e.jsx(t,{variant:"primary",children:"Til kassen"})})]})},B={name:"Sidemeny med antall",parameters:{docs:{description:{story:"En navigasjonsliste der flere punkter har sine egne antall, slik en innboks eller saksoversikt ofte ser ut. Her er badgen ankret på hver lenke, så tallet legger seg i hjørnet uten å skyve teksten.\n\nLa punkter uten noe nytt stå med `count={0}` – da rendres ingen badge, og du slipper å vilkårsstyre dem i JSX-en."}}},render:n=>e.jsx(I,{outlined:!0,padding:"l",children:e.jsxs(a,{direction:"column",gap:"l",alignItems:"start",children:[e.jsx(r,{...n,count:7,label:"7 uleste",children:e.jsx(M,{href:"#",children:"Innboks"})}),e.jsx(r,{...n,count:2,urgent:!0,label:"2 krever handling",children:e.jsx(M,{href:"#",children:"Skadesaker"})}),e.jsx(r,{...n,count:0,children:e.jsx(M,{href:"#",children:"Arkiv"})})]})})},N={name:"Dynamisk antall",parameters:{docs:{description:{story:`Antallet er bare en prop, så varselet dukker opp og forsvinner med tilstanden din. Legg merke til at ankeret beholder plassen sin hele veien – varselet ligger utenfor flyten, så knappen flytter seg ikke når tallet kommer eller går.

Merk at komponenten ikke har noen live-region. Endringer i antallet blir derfor **ikke** annonsert av skjermlesere mens brukeren står et annet sted på siden; teksten er tilgjengelig når de treffer ankeret. Skal en endring varsles aktivt, må du gjøre det selv ved siden av badgen.`}}},render:n=>{const[i,o]=$.useState(n.count);return e.jsxs(a,{direction:"column",gap:"xl",alignItems:"start",children:[e.jsxs(a,{gap:"m",wrap:!0,children:[e.jsx(t,{variant:"secondary",onClick:()=>o(g=>g+1),children:"Ny melding"}),e.jsx(t,{variant:"secondary",onClick:()=>o(g=>g+25),children:"25 nye"}),e.jsx(t,{onClick:()=>o(0),children:"Marker som lest"})]}),e.jsxs(a,{gap:"xl",alignItems:"center",wrap:!0,children:[e.jsx(r,{...n,count:i,label:`${i} uleste meldinger`,children:e.jsx(t,{children:"Innboks"})}),e.jsx(r,{...n,count:i,hideCounter:!0,label:`${i} uleste meldinger`,children:e.jsx(d,{"aria-label":"Varsler",children:e.jsx(c,{children:"notifications"})})})]}),e.jsx(s,{children:i===0?"Ingen uleste meldinger, og ingen badge i DOM-en.":`count=${i}`})]})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Hele spennet på én skjerm. Varselet kan ankres på et element eller ligge inline, det kan vises som tall eller prikk, og det kan være viktig. Ved 0 rendres det ikke i det hele tatt. Skru på kontrollene for å se hvordan hver variant oppfører seg."
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} label={varsler(args.count)}>
                <Button variant="secondary">Ankret</Button>
            </NotificationBadge>
            <NotificationBadge {...args} hideCounter label={varsler(args.count)}>
                <Button variant="secondary">Prikk</Button>
            </NotificationBadge>
            <NotificationBadge {...args} urgent label={varsler(args.count)}>
                <Button variant="secondary">Viktig</Button>
            </NotificationBadge>
            <Tag>
                Inline
                <NotificationBadge {...args} label={varsler(args.count)} />
            </Tag>
            <NotificationBadge {...args} count={0}>
                <Button variant="secondary">Tomt</Button>
            </NotificationBadge>
        </Flex>
}`,...k.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Ankret og inline",
  parameters: {
    docs: {
      description: {
        story: "De to plasseringsmodusene. Sender du inn et element som \`children\`, blir elementet anker og varselet legges oppe til høyre på det – utenfor flyten, så innholdet i ankeret flytter seg ikke. Uten \`children\` ligger varselet i flyten og tar plass der det står. Inline passer når innholdet selv har en naturlig plass til det, som i en tag eller en fane.\\n\\nPlasseringen bruker logiske egenskaper, så et ankret varsel speiles til øvre venstre i en høyre-mot-venstre-kontekst."
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} label={varsler(args.count)}>
                <Button>Ankret på knappen</Button>
            </NotificationBadge>
            <Tag>
                Inline i en tag
                <NotificationBadge {...args} label={varsler(args.count)} />
            </Tag>
            <Chip variant="filter" selected>
                Inline i en chip
                <NotificationBadge {...args} label={varsler(args.count)} />
            </Chip>
        </Flex>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Bare prikk",
  args: {
    count: 120,
    hideCounter: true
  },
  parameters: {
    docs: {
      description: {
        story: "Med \`hideCounter\` vises bare en prikk. Antallet er borte visuelt, men \`label\` leses fortsatt av skjermlesere – så bruk prikken når det er nok å vite *at* det er noe nytt, ikke hvor mye.\\n\\nInnrykket skalerer med ankerets bredde, så prikken legger seg i hjørnet også på smale ankere som ikonknapper."
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} label={varsler(args.count)}>
                <Button>En lengre knappetekst</Button>
            </NotificationBadge>
            <NotificationBadge {...args} label={varsler(args.count)}>
                <Button>Kort</Button>
            </NotificationBadge>
            <NotificationBadge {...args} label="3 varer i kurven">
                <IconButton aria-label="Handlekurv">
                    <Icon>shopping_bag</Icon>
                </IconButton>
            </NotificationBadge>
        </Flex>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Med \`urgent\` byttes kontrastfargen ut med en rødfarge som følger brandet. Bruk det når varselet krever at brukeren faktisk gjør noe – setter du det på alt, betyr fargen ingenting. \`urgent\` kan kombineres med \`hideCounter\`, og endrer ikke teksten skjermlesere får."
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} urgent label="1 forfalt faktura">
                <Button variant="secondary">Forfalt faktura</Button>
            </NotificationBadge>
            <NotificationBadge {...args} urgent hideCounter label="1 forfalt faktura">
                <Button variant="secondary">Som prikk</Button>
            </NotificationBadge>
            <NotificationBadge {...args} label={varsler(args.count)}>
                <Button variant="secondary">Vanlig, til sammenligning</Button>
            </NotificationBadge>
        </Flex>
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Antall, max og label",
  parameters: {
    docs: {
      description: {
        story: "\`max\` bestemmer når antallet forkortes med «+», og trenger ikke være en hel tierpotens.\\n\\n\`label\` er teksten skjermlesere får, og tittelen på ankeret. Den brukes **ordrett**, slik du sender den inn – komponenten bøyer ingenting og legger ikke antallet til selv. Siden tallet bare vises visuelt, er \`label\` eneste sted skjermlesere kan få det, så ta det med i strengen og hold den i takt med \`count\`. Bygg den gjerne av samme verdi:\\n\\n\`\`\`tsx\\n<NotificationBadge count={n} label={\`\${n} uleste meldinger\`} />\\n\`\`\`"
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} count={120} max={50} label="120 varsler">
                <Button variant="secondary">max=50</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={120} label="120 varsler">
                <Button variant="secondary">max=99 (default)</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={1} label="1 ulest melding">
                <Button variant="secondary">Entall</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={4} label="4 uleste meldinger">
                <Button variant="secondary">Flertall</Button>
            </NotificationBadge>
        </Flex>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Når varselet forsvinner",
  parameters: {
    docs: {
      description: {
        story: "Ved \`count={0}\` rendres varselet ikke i det hele tatt – heller ikke den skjulte teksten – mens ankeret rendres som normalt og beholder ankernavnet sitt. Ankeret får da verken \`title\` eller \`aria-describedby\`, så det er ingen rester å rydde opp i.\\n\\nDet betyr at du kan la badgen stå permanent i JSX-en og bare sende inn tallet du har. Du trenger ingen \`{count > 0 && ...}\` rundt den. Negative tall og \`NaN\` behandles likt."
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} count={3} label="3 varsler">
                <Button variant="secondary">count=3</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={0}>
                <Button variant="secondary">count=0</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={0} hideCounter>
                <Button variant="secondary">count=0 som prikk</Button>
            </NotificationBadge>
        </Flex>
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Tilgjengelighet i praksis",
  parameters: {
    docs: {
      description: {
        story: 'Hva komponenten faktisk gjør i DOM-en. Tallet du ser er \`aria-hidden\`, så det finnes ikke for skjermlesere – i stedet legges \`label\` som skjult tekst i varselet, og ankeret peker på den med \`aria-describedby\`. Ankeret får i tillegg \`label\` som \`title\`, så samme tekst dukker opp som tooltip på hover.\\n\\n\`\`\`html\\n<button\\n    class="jkl-button jkl-notification-badge-anchor"\\n    aria-describedby="jkl-notification-badge-«id»"\\n    title="3 varsler"\\n>\\n    Meldinger\\n</button>\\n<div class="jkl-notification-badge" id="jkl-notification-badge-«id»">\\n    <span aria-hidden="true">3</span>\\n    <div class="jkl-sr-only">3 varsler</div>\\n</div>\\n\`\`\`\\n\\nKomponenten overtar ikke det ankeret har satt selv: har det allerede en \`aria-describedby\`, slås de sammen, og har det sin egen \`title\`, beholdes den. Hover over knappene under, eller inspiser dem, for å se forskjellen.'
      }
    }
  },
  render: args => <Flex direction="column" gap="xl" alignItems="start">
            <Flex direction="column" gap="m" alignItems="start">
                <Text bold>
                    Vanlig: labelen blir både tooltip og skjult tekst
                </Text>
                <NotificationBadge {...args} label={varsler(args.count)}>
                    <Button>Meldinger</Button>
                </NotificationBadge>
            </Flex>

            <Flex direction="column" gap="m" alignItems="start">
                <Text bold>Egen title på ankeret beholdes framfor labelen</Text>
                <NotificationBadge {...args} label={varsler(args.count)}>
                    <Button title="Gå til innboksen">Meldinger</Button>
                </NotificationBadge>
            </Flex>

            <Flex direction="column" gap="m" alignItems="start">
                <Text bold>
                    Egen aria-describedby slås sammen med varselets
                </Text>
                <NotificationBadge {...args} label={varsler(args.count)}>
                    <Button aria-describedby="min-hjelpetekst">
                        Meldinger
                    </Button>
                </NotificationBadge>
                <Text id="min-hjelpetekst">
                    Hjelpetekst som ankeret peker på fra før.
                </Text>
            </Flex>
        </Flex>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "To ting badgen ikke kan.\\n\\n**Den ankrer bare ett enkelt element.** Sender du inn et Fragment eller en liste, blir ingenting ankret – varselet faller tilbake til å flyte inline, og det skjer helt stille, uten advarsel i konsollen. Trenger du å ankre på flere ting, bruk én badge per element.\\n\\n**Den kan ikke ankres inni et \`Card\`.** Kortet har \`overflow: hidden\`, og varselet er absolutt posisjonert, så det klippes. Legg badgen rundt kortet i stedet – da ligger varselet utenfor og vises i sin helhet."
      }
    }
  },
  render: args => <Flex direction="column" gap="xl">
            <Flex direction="column" gap="m">
                <Text bold>Flere elementer som children ankrer ikke</Text>
                <Flex gap="xl" alignItems="center" wrap>
                    <NotificationBadge {...args} label={varsler(args.count)}>
                        {flereElementer}
                    </NotificationBadge>
                </Flex>
            </Flex>

            <Flex direction="column" gap="m">
                <Text bold>Rundt et Card virker, inni blir klippet</Text>
                <Flex gap="xl" alignItems="start" wrap>
                    <NotificationBadge {...args} label="3 skadesaker">
                        <Card as="button" padding="m">
                            Rundt kortet
                        </Card>
                    </NotificationBadge>
                    <Card padding="m">
                        <NotificationBadge {...args} label={varsler(args.count)}>
                            <Button variant="primary">Inni kortet</Button>
                        </NotificationBadge>
                    </Card>
                </Flex>
            </Flex>
        </Flex>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Toppmeny med varselbjelle",
  args: {
    count: 4
  },
  parameters: {
    docs: {
      description: {
        story: "Det vanligste mønsteret: en ikonknapp i toppmenyen som bærer antallet uleste varsler. Ikonknapper er smale, så prikken er ofte nok her – antallet er med for skjermlesere uansett. Husk \`aria-label\` på selve ikonknappen; den sier hva knappen *gjør*, mens \`label\` på badgen sier hva tallet *er*."
      }
    }
  },
  render: args => <Card outlined padding="m">
            <Flex alignItems="center" justifyContent="space-between" gap="xl">
                <Text bold>Min side</Text>
                <Flex alignItems="center" gap="l">
                    <NotificationBadge {...args} label={\`\${args.count} uleste varsler\`}>
                        <IconButton aria-label="Varsler">
                            <Icon>notifications</Icon>
                        </IconButton>
                    </NotificationBadge>
                    <NotificationBadge {...args} count={2} label="2 varer">
                        <IconButton aria-label="Handlekurv">
                            <Icon>shopping_bag</Icon>
                        </IconButton>
                    </NotificationBadge>
                    <IconButton aria-label="Meny">
                        <Icon>menu</Icon>
                    </IconButton>
                </Flex>
            </Flex>
        </Card>
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Faner med antall",
  parameters: {
    docs: {
      description: {
        story: "Inline-modusen i sin mest naturlige bruk: antallet står i fanetittelen og teller hva som ligger bak fanen. Fanen har allerede sin egen tekst, så badgen trenger ikke ankres – den skal bare ta plass etter teksten.\\n\\nSett \`label\` til noe som beskriver fanen, ikke bare «varsler», ellers får skjermlesere samme tekst på hver fane."
      }
    }
  },
  render: args => <Tabs>
            <TabList>
                <Tab>Forsikringer</Tab>
                <Tab>
                    Skadesaker
                    <NotificationBadge {...args} count={2} label="2 nye skadesaker" />
                </Tab>
                <Tab>
                    Tilbud
                    <NotificationBadge {...args} count={5} label="5 nye tilbud" />
                </Tab>
            </TabList>
            <TabPanel>Dine forsikringer</TabPanel>
            <TabPanel>Dine skadesaker</TabPanel>
            <TabPanel>Dine tilbud</TabPanel>
        </Tabs>
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    count: 4
  },
  parameters: {
    docs: {
      description: {
        story: "Badgen brukes til mer enn varslinger, og da er \`label\` det som gjør den forståelig. Uten den ville skjermlesere fått «4 varsler» om en handlekurv, som er feil. Sett den til noe som faktisk beskriver innholdet, og ta antallet med."
      }
    }
  },
  render: args => <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} label={\`\${args.count} varer i kurven\`}>
                <IconButton aria-label="Handlekurv">
                    <Icon>shopping_bag</Icon>
                </IconButton>
            </NotificationBadge>
            <NotificationBadge {...args} label={\`\${args.count} varer i kurven\`}>
                <Button variant="primary">Til kassen</Button>
            </NotificationBadge>
        </Flex>
}`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Sidemeny med antall",
  parameters: {
    docs: {
      description: {
        story: "En navigasjonsliste der flere punkter har sine egne antall, slik en innboks eller saksoversikt ofte ser ut. Her er badgen ankret på hver lenke, så tallet legger seg i hjørnet uten å skyve teksten.\\n\\nLa punkter uten noe nytt stå med \`count={0}\` – da rendres ingen badge, og du slipper å vilkårsstyre dem i JSX-en."
      }
    }
  },
  render: args => <Card outlined padding="l">
            <Flex direction="column" gap="l" alignItems="start">
                <NotificationBadge {...args} count={7} label="7 uleste">
                    <NavLink href="#">Innboks</NavLink>
                </NotificationBadge>
                <NotificationBadge {...args} count={2} urgent label="2 krever handling">
                    <NavLink href="#">Skadesaker</NavLink>
                </NotificationBadge>
                <NotificationBadge {...args} count={0}>
                    <NavLink href="#">Arkiv</NavLink>
                </NotificationBadge>
            </Flex>
        </Card>
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Dynamisk antall",
  parameters: {
    docs: {
      description: {
        story: "Antallet er bare en prop, så varselet dukker opp og forsvinner med tilstanden din. Legg merke til at ankeret beholder plassen sin hele veien – varselet ligger utenfor flyten, så knappen flytter seg ikke når tallet kommer eller går.\\n\\nMerk at komponenten ikke har noen live-region. Endringer i antallet blir derfor **ikke** annonsert av skjermlesere mens brukeren står et annet sted på siden; teksten er tilgjengelig når de treffer ankeret. Skal en endring varsles aktivt, må du gjøre det selv ved siden av badgen."
      }
    }
  },
  render: args => {
    const [count, setCount] = useState(args.count);
    return <Flex direction="column" gap="xl" alignItems="start">
                <Flex gap="m" wrap>
                    <Button variant="secondary" onClick={() => setCount(value => value + 1)}>
                        Ny melding
                    </Button>
                    <Button variant="secondary" onClick={() => setCount(value => value + 25)}>
                        25 nye
                    </Button>
                    <Button onClick={() => setCount(0)}>
                        Marker som lest
                    </Button>
                </Flex>

                <Flex gap="xl" alignItems="center" wrap>
                    <NotificationBadge {...args} count={count} label={\`\${count} uleste meldinger\`}>
                        <Button>Innboks</Button>
                    </NotificationBadge>
                    <NotificationBadge {...args} count={count} hideCounter label={\`\${count} uleste meldinger\`}>
                        <IconButton aria-label="Varsler">
                            <Icon>notifications</Icon>
                        </IconButton>
                    </NotificationBadge>
                </Flex>

                <Text>
                    {count === 0 ? "Ingen uleste meldinger, og ingen badge i DOM-en." : \`count=\${count}\`}
                </Text>
            </Flex>;
  }
}`,...N.parameters?.docs?.source}}};const be=["Oversikt","AnkretOgInline","BarePrikk","Viktig","AntallMaxOgLabel","NaarVarseletForsvinner","TilgjengelighetIPraksis","Begrensninger","ToppmenyMedVarselbjelle","FanerMedAntall","Handlekurv","SidemenyMedAntall","DynamiskAntall"];export{u as AnkretOgInline,b as AntallMaxOgLabel,m as BarePrikk,h as Begrensninger,N as DynamiskAntall,j as FanerMedAntall,y as Handlekurv,v as NaarVarseletForsvinner,k as Oversikt,B as SidemenyMedAntall,f as TilgjengelighetIPraksis,x as ToppmenyMedVarselbjelle,p as Viktig,be as __namedExportsOrder,pe as default};
