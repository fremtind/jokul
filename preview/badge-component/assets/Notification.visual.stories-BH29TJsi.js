import{j as n}from"./iframe-DG4ODjOJ.js";import{F as r}from"./Flex-BtUDcQWz.js";import{N as t}from"./_index-Dmtauwv4.js";import{I as p}from"./IconButton-DqpczKRl.js";import{I as m}from"./Icon-CKf8FPKn.js";import{B as a}from"./Button-DNaVwgFW.js";import{C as g}from"./Chip-CfVKjidJ.js";import{T as x}from"./Tag-Bhr0Ui67.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DfIqjJGl.js";import"./mergeRefs-rjBz1fQO.js";import"./usePreviousValue-DEFzHm6P.js";import"./Loader-CU9-LaZm.js";import"./useDelayedRender-6UBVe6jC.js";import"./CheckIcon-BnqgOPyp.js";import"./CloseIcon-C8QdPVfz.js";const _={title:"Visuelle regresjonstester/Notification",component:t,args:{count:3,hideCounter:!1}},s={render:()=>n.jsx(r,{gap:"xl",alignItems:"center",wrap:!0,children:[0,1,9,99,100,1e3,-5,1.5].map(e=>n.jsx(t,{count:e,children:n.jsx(a,{variant:"secondary",children:`count=${e}`})},e))})},l={render:()=>n.jsx(r,{gap:"xl",alignItems:"center",wrap:!0,children:[{count:99,max:99},{count:100,max:99},{count:120,max:50},{count:10,max:9},{count:5,max:1},{count:5,max:0}].map(({count:e,max:d})=>n.jsx(t,{count:e,max:d,children:n.jsx(a,{variant:"secondary",children:`${e} / ${d}`})},`${e}-${d}`))})},o={render:()=>n.jsxs(r,{direction:"column",gap:"xl",children:[n.jsx(r,{gap:"xl",alignItems:"center",wrap:!0,children:[1,12,123,1234].map(e=>n.jsx(t,{count:e,children:n.jsx(a,{variant:"secondary",children:`count=${e}`})},e))}),n.jsx(r,{direction:"column",gap:"xl",alignItems:"start",children:[1,12,123].map(e=>n.jsx(t,{count:e,children:n.jsx(a,{variant:"secondary",children:`count=${e}`})},e))})]})},i={name:"Ankerstørrelser",render:()=>n.jsxs(r,{direction:"column",gap:"xl",alignItems:"start",children:[n.jsxs(r,{gap:"xl",alignItems:"center",wrap:!0,children:[n.jsx(t,{count:3,children:n.jsx(p,{"aria-label":"Handlekurv",children:n.jsx(m,{children:"shopping_bag"})})}),n.jsx(t,{count:3,children:n.jsx(a,{variant:"secondary",children:"Kort"})}),n.jsx(t,{count:3,children:n.jsx(a,{variant:"secondary",children:"En ganske mye lengre knappetekst"})}),n.jsx(t,{count:3,children:n.jsx(g,{variant:"filter",children:"Chip"})})]}),n.jsx(t,{count:3,children:n.jsx(a,{variant:"secondary",style:{width:"100%"},children:"Full bredde"})})]})},u={render:()=>n.jsxs(r,{gap:"xl",alignItems:"center",wrap:!0,children:[[0,1,120].map(e=>n.jsx(t,{count:e,hideCounter:!0,children:n.jsx(a,{variant:"secondary",children:`count=${e}`})},e)),n.jsx(t,{count:3,hideCounter:!0,children:n.jsx(p,{"aria-label":"Handlekurv",children:n.jsx(m,{children:"shopping_bag"})})}),n.jsxs(x,{children:["I en tag",n.jsx(t,{count:3,hideCounter:!0})]})]})},c={name:"Uten anker",render:()=>n.jsxs(r,{gap:"xl",alignItems:"center",wrap:!0,children:[n.jsx(t,{count:3}),n.jsx(t,{count:120}),n.jsx(t,{count:3,hideCounter:!0}),n.jsxs(x,{children:["I en tag",n.jsx(t,{count:3})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap="xl" alignItems="center" wrap>
            {[0, 1, 9, 99, 100, 1000, -5, 1.5].map(count => <Notification key={count} count={count}>
                    <Button variant="secondary">{\`count=\${count}\`}</Button>
                </Notification>)}
        </Flex>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Hvert varsel får sitt eget ankernavn fra `useId()`. Står flere varsler ved\nsiden av hverandre, skal hvert av dem feste seg til sitt eget anker — ikke\ntil det første eller siste på siden.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Varselet plasseres med `anchor()` mot ankerets kant, så plasseringen skal\nholde seg uavhengig av hvor stort eller lite ankeret er.",...i.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Uten children er varselet ikke posisjonert — det flyter med innholdet.",...c.parameters?.docs?.description}}};const H=["Antall","Tak","FlereVarsler","AnkerStoerrelser","Prikk","UtenAnker"];export{i as AnkerStoerrelser,s as Antall,o as FlereVarsler,u as Prikk,l as Tak,c as UtenAnker,H as __namedExportsOrder,_ as default};
