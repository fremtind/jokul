import{j as n,r as I}from"./iframe-NX5MwhMi.js";import{F as a}from"./Flex-Dn3nftxW.js";import{N as r}from"./_index-BJpmTCPz.js";import{I as v}from"./IconButton-C0cNGKe5.js";import{I as y}from"./Icon-Dcg139aq.js";import{B as t}from"./Button-6cKQZ1PZ.js";import{C as N}from"./Chip-B392cwkV.js";import{T as j}from"./Tag-C8spUmWI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-eiKO-2fM.js";import"./mergeRefs-C71dUN_b.js";import"./usePreviousValue-CeXVoapK.js";import"./Loader-Bx8y-kK2.js";import"./useDelayedRender-Bp0W3iCf.js";import"./CheckIcon-SGKhxRL_.js";import"./CloseIcon-4XwhdvVS.js";const z={title:"Visuelle regresjonstester/Notification",component:r,args:{count:3,hideCounter:!1}},x={render:()=>n.jsx(a,{gap:"xl",alignItems:"center",wrap:!0,children:[0,1,9,99,100,1e3,-5,1.5].map(e=>n.jsx(r,{count:e,children:n.jsx(t,{variant:"secondary",children:`count=${e}`})},e))})},g={render:()=>n.jsx(a,{gap:"xl",alignItems:"center",wrap:!0,children:[{count:99,max:99},{count:100,max:99},{count:120,max:50},{count:10,max:9},{count:5,max:1},{count:5,max:0}].map(({count:e,max:o})=>n.jsx(r,{count:e,max:o,children:n.jsx(t,{variant:"secondary",children:`${e} / ${o}`})},`${e}-${o}`))})},i={render:()=>n.jsxs(a,{direction:"column",gap:"xl",children:[n.jsx(a,{gap:"xl",alignItems:"center",wrap:!0,children:[1,12,123,1234].map(e=>n.jsx(r,{count:e,children:n.jsx(t,{variant:"secondary",children:`count=${e}`})},e))}),n.jsx(a,{direction:"column",gap:"xl",alignItems:"start",children:[1,12,123].map(e=>n.jsx(r,{count:e,children:n.jsx(t,{variant:"secondary",children:`count=${e}`})},e))})]})},s={name:"Ankerstørrelser",render:()=>n.jsxs(a,{direction:"column",gap:"xl",alignItems:"start",children:[n.jsxs(a,{gap:"xl",alignItems:"center",wrap:!0,children:[n.jsx(r,{count:3,children:n.jsx(v,{"aria-label":"Handlekurv",children:n.jsx(y,{children:"shopping_bag"})})}),n.jsx(r,{count:3,children:n.jsx(t,{variant:"secondary",children:"Kort"})}),n.jsx(r,{count:3,children:n.jsx(t,{variant:"secondary",children:"En ganske mye lengre knappetekst"})}),n.jsx(r,{count:3,children:n.jsx(N,{variant:"filter",children:"Chip"})})]}),n.jsx(r,{count:3,children:n.jsx(t,{variant:"secondary",style:{width:"100%"},children:"Full bredde"})})]})},h={render:()=>n.jsxs(a,{gap:"xl",alignItems:"center",wrap:!0,children:[[0,1,120].map(e=>n.jsx(r,{count:e,hideCounter:!0,children:n.jsx(t,{variant:"secondary",children:`count=${e}`})},e)),n.jsx(r,{count:3,hideCounter:!0,children:n.jsx(v,{"aria-label":"Handlekurv",children:n.jsx(y,{children:"shopping_bag"})})}),n.jsxs(j,{children:["I en tag",n.jsx(r,{count:3,hideCounter:!0})]})]})},f={render:()=>n.jsx(a,{direction:"column",gap:"xl",children:[!1,!0].map(e=>n.jsx(a,{gap:"xl",alignItems:"center",wrap:!0,children:[0,3,120].map(o=>n.jsx(r,{count:o,hideCounter:e,urgent:!0,children:n.jsx(t,{variant:"secondary",children:`${o}${e?" prikk":""}`})},o))},String(e)))})},c={render:()=>n.jsxs(a,{direction:"column",gap:"xl",alignItems:"start",children:[n.jsx("div",{style:{overflow:"hidden",padding:8,border:"1px dashed"},children:n.jsx(r,{count:12,children:n.jsx(t,{variant:"secondary",children:"overflow: hidden"})})}),n.jsx("div",{style:{overflow:"auto",maxWidth:200,padding:8,border:"1px dashed"},children:n.jsx(r,{count:12,children:n.jsx(t,{variant:"secondary",children:"I en scroll-container"})})}),n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",width:"100%",border:"1px dashed"},children:n.jsx(r,{count:12,children:n.jsx(t,{variant:"secondary",children:"Helt inntil kanten"})})})]})},l={render:()=>n.jsxs(a,{direction:"column",gap:"xl",alignItems:"start",children:[n.jsx("div",{style:{transform:"translateX(40px)",border:"1px dashed"},children:n.jsx(r,{count:12,children:n.jsx(t,{variant:"secondary",children:"I en transform"})})}),n.jsx("div",{style:{position:"relative",border:"1px dashed"},children:n.jsx(r,{count:12,children:n.jsx(t,{variant:"secondary",children:"I position: relative"})})})]})},d={name:"Inline anker",render:()=>n.jsxs("p",{style:{maxWidth:"20ch"},children:["Les mer om"," ",n.jsx(r,{count:3,children:n.jsx("a",{href:"#test",children:"forsikringene vi tilbyr deg"})})," ","her."]})},u={name:"Tekststørrelse",render:()=>n.jsx(a,{gap:"xl",alignItems:"center",wrap:!0,children:["0.75rem","1rem","1.5rem","2rem"].map(e=>n.jsx(r,{count:12,children:n.jsx(t,{variant:"secondary",style:{fontSize:e},children:e})},e))})},p={name:"Dynamisk antall",render:()=>{const[e,o]=I.useState(0);return n.jsxs(a,{direction:"column",gap:"l",alignItems:"start",children:[n.jsx(r,{count:e,children:n.jsx(t,{variant:"secondary",children:"Varsler"})}),n.jsx(a,{gap:"xs",wrap:!0,children:[0,1,9,99,100].map(k=>n.jsx(t,{variant:"tertiary",onClick:()=>o(k),children:String(k)},k))})]})}},m={name:"Uten anker",render:()=>n.jsxs(a,{gap:"xl",alignItems:"center",wrap:!0,children:[n.jsx(r,{count:3}),n.jsx(r,{count:120}),n.jsx(r,{count:3,hideCounter:!0}),n.jsxs(j,{children:["I en tag",n.jsx(r,{count:3})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap="xl" alignItems="center" wrap>
            {[0, 1, 9, 99, 100, 1000, -5, 1.5].map(count => <Notification key={count} count={count}>
                    <Button variant="secondary">{\`count=\${count}\`}</Button>
                </Notification>)}
        </Flex>
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap="xl" alignItems="center" wrap>
            {[{
      count: 99,
      max: 99
    }, {
      count: 100,
      max: 99
    }, {
      count: 120,
      max: 50
    }, {
      count: 10,
      max: 9
    }, {
      count: 5,
      max: 1
    }, {
      count: 5,
      max: 0
    }].map(({
      count,
      max
    }) => <Notification key={\`\${count}-\${max}\`} count={count} max={max}>
                    <Button variant="secondary">{\`\${count} / \${max}\`}</Button>
                </Notification>)}
        </Flex>
}`,...g.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="xl">
            <Flex gap="xl" alignItems="center" wrap>
                {[1, 12, 123, 1234].map(count => <Notification key={count} count={count}>
                        <Button variant="secondary">{\`count=\${count}\`}</Button>
                    </Notification>)}
            </Flex>
            <Flex direction="column" gap="xl" alignItems="start">
                {[1, 12, 123].map(count => <Notification key={count} count={count}>
                        <Button variant="secondary">{\`count=\${count}\`}</Button>
                    </Notification>)}
            </Flex>
        </Flex>
}`,...i.parameters?.docs?.source},description:{story:"Hvert varsel får sitt eget ankernavn fra `useId()`. Står flere varsler ved\nsiden av hverandre, skal hvert av dem feste seg til sitt eget anker — ikke\ntil det første eller siste på siden.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Ankerstørrelser",
  render: () => <Flex direction="column" gap="xl" alignItems="start">
            <Flex gap="xl" alignItems="center" wrap>
                <Notification count={3}>
                    <IconButton aria-label="Handlekurv">
                        <Icon>shopping_bag</Icon>
                    </IconButton>
                </Notification>
                <Notification count={3}>
                    <Button variant="secondary">Kort</Button>
                </Notification>
                <Notification count={3}>
                    <Button variant="secondary">
                        En ganske mye lengre knappetekst
                    </Button>
                </Notification>
                <Notification count={3}>
                    <Chip variant="filter">Chip</Chip>
                </Notification>
            </Flex>
            <Notification count={3}>
                <Button variant="secondary" style={{
        width: "100%"
      }}>
                    Full bredde
                </Button>
            </Notification>
        </Flex>
}`,...s.parameters?.docs?.source},description:{story:"Varselet plasseres med `anchor()` mot ankerets kant, så plasseringen skal\nholde seg uavhengig av hvor stort eller lite ankeret er.",...s.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap="xl" alignItems="center" wrap>
            {[0, 1, 120].map(count => <Notification key={count} count={count} hideCounter>
                    <Button variant="secondary">{\`count=\${count}\`}</Button>
                </Notification>)}
            <Notification count={3} hideCounter>
                <IconButton aria-label="Handlekurv">
                    <Icon>shopping_bag</Icon>
                </IconButton>
            </Notification>
            <Tag>
                I en tag
                <Notification count={3} hideCounter />
            </Tag>
        </Flex>
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="xl">
            {[false, true].map(hideCounter => <Flex key={String(hideCounter)} gap="xl" alignItems="center" wrap>
                    {[0, 3, 120].map(count => <Notification key={count} count={count} hideCounter={hideCounter} urgent>
                            <Button variant="secondary">
                                {\`\${count}\${hideCounter ? " prikk" : ""}\`}
                            </Button>
                        </Notification>)}
                </Flex>)}
        </Flex>
}`,...f.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="xl" alignItems="start">
            <div style={{
      overflow: "hidden",
      padding: 8,
      border: "1px dashed"
    }}>
                <Notification count={12}>
                    <Button variant="secondary">overflow: hidden</Button>
                </Notification>
            </div>

            <div style={{
      overflow: "auto",
      maxWidth: 200,
      padding: 8,
      border: "1px dashed"
    }}>
                <Notification count={12}>
                    <Button variant="secondary">I en scroll-container</Button>
                </Notification>
            </div>

            <div style={{
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      border: "1px dashed"
    }}>
                <Notification count={12}>
                    <Button variant="secondary">Helt inntil kanten</Button>
                </Notification>
            </div>
        </Flex>
}`,...c.parameters?.docs?.source},description:{story:`Varselet er absolutt posisjonert, så det ligger utenfor ankerets boks.
Ankere i containere som klipper innholdet er derfor en reell risiko.`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="xl" alignItems="start">
            <div style={{
      transform: "translateX(40px)",
      border: "1px dashed"
    }}>
                <Notification count={12}>
                    <Button variant="secondary">I en transform</Button>
                </Notification>
            </div>
            <div style={{
      position: "relative",
      border: "1px dashed"
    }}>
                <Notification count={12}>
                    <Button variant="secondary">I position: relative</Button>
                </Notification>
            </div>
        </Flex>
}`,...l.parameters?.docs?.source},description:{story:"En `transform`-et forelder lager ny containing block for absolutt posisjonering.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Inline anker",
  render: () => <p style={{
    maxWidth: "20ch"
  }}>
            Les mer om{" "}
            <Notification count={3}>
                <a href="#test">forsikringene vi tilbyr deg</a>
            </Notification>{" "}
            her.
        </p>
}`,...d.parameters?.docs?.source},description:{story:"`anchor-name` på et inline element som brytes gir en fragmentert ankerboks.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Tekststørrelse",
  render: () => <Flex gap="xl" alignItems="center" wrap>
            {["0.75rem", "1rem", "1.5rem", "2rem"].map(fontSize => <Notification key={fontSize} count={12}>
                    <Button variant="secondary" style={{
        fontSize
      }}>
                        {fontSize}
                    </Button>
                </Notification>)}
        </Flex>
}`,...u.parameters?.docs?.source},description:{story:"Forskyvningene er i `ch`, så de skalerer med ankerets skriftstørrelse.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Dynamisk antall",
  render: () => {
    const [count, setCount] = useState(0);
    return <Flex direction="column" gap="l" alignItems="start">
                <Notification count={count}>
                    <Button variant="secondary">Varsler</Button>
                </Notification>
                <Flex gap="xs" wrap>
                    {[0, 1, 9, 99, 100].map(value => <Button key={value} variant="tertiary" onClick={() => setCount(value)}>
                            {String(value)}
                        </Button>)}
                </Flex>
            </Flex>;
  }
}`,...p.parameters?.docs?.source},description:{story:`Bredden endres når antallet vokser. Merk at endringen aldri annonseres —
komponenten har ingen live-region, så skjermlesere får den ikke med seg.`,...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Uten anker",
  render: () => <Flex gap="xl" alignItems="center" wrap>
            <Notification count={3} />
            <Notification count={120} />
            <Notification count={3} hideCounter />
            <Tag>
                I en tag
                <Notification count={3} />
            </Tag>
        </Flex>
}`,...m.parameters?.docs?.source},description:{story:"Uten children er varselet ikke posisjonert — det flyter med innholdet.",...m.parameters?.docs?.description}}};const L=["Antall","Tak","FlereVarsler","AnkerStoerrelser","Prikk","Urgent","Klipping","ContainingBlock","InlineAnker","Tekststoerrelse","DynamiskAntall","UtenAnker"];export{s as AnkerStoerrelser,x as Antall,l as ContainingBlock,p as DynamiskAntall,i as FlereVarsler,d as InlineAnker,c as Klipping,h as Prikk,g as Tak,u as Tekststoerrelse,f as Urgent,m as UtenAnker,L as __namedExportsOrder,z as default};
