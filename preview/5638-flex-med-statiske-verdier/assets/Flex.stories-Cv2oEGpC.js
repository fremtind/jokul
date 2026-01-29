import{j as e}from"./iframe-DoBKmmVG.js";import{t as x}from"./tokens-CMcKomMy.js";import{L as u,F as i}from"./Flex-DAmbS_wf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DLsnKZId.js";import"./mergeRefs-DJDbFZHr.js";const p=l=>l.flatMap(n=>[n,...l.filter(r=>r!==n).map(r=>`${n} ${r}`)]),m=p(Object.keys(x.semanticSpacing)),h=p(Object.keys(x.spacing)),v=[...m,...h],F={title:"Komponenter/Flex",component:i,argTypes:{children:{description:"`React.ReactNode`"},layout:{control:"select",options:[...u,"{ small: '1', medium: '2', large: '4' }",'{ small: "1", medium: "auto" }'],mapping:{"{ small: '1', medium: '2', large: '4' }":{small:"1",medium:"2",large:"4"},'{ small: "1", medium: "auto" }':{small:"1",medium:"auto"}},description:`Sets layout for items per row.
            Layouts with equal width is named to correlate with the count of items you want per row, as this gives a consistent experience when nesting.
            Layouts with uneven width, is named based on a 12-column grid to correlate with how designers work in Figma.
            
Accepts both a single value \`layout="2"\` or a object to specify different values for different breakpoints (all breakpoints are optional):
            \`layout={{ small: "1", medium: "2", large: "4" }}\`.
        `},gap:{control:"select",options:[...v,"{ small: 'none', medium: 'xl' }"],mapping:{"{ small: 'none', medium: 'xl' }":{small:"none",medium:"xl"}},description:"Gap can be one of predefined constants. Also accepts two values separated by whitespace to specifiy different row and colum gap.\n            For example `gap=\"l m\"` will cause `l` row gap, and `m` column gap.\n            \nThe gap sizes are `2xs` (`unit-05` / `4px`), `xs` (`unit-10` / `8px`), `s` (`unit-20` / `16px`), `m` (`unit-30` / `24px`), `l` (`unit-40` / `32px`), `xl` (`unit-80` / `64px`), `2xl` (`unit-130` / `104px`).\n            \nAccepts both a single value `gap=\"m\"` or a object to specify different values for different breakpoints (all breakpoints are optional):\n            `gap={{ xs: 'none', m: 'l' }}`.",table:{defaultValue:{summary:"16"}}},direction:{control:"inline-radio",options:["row","column","row-reverse","column-reverse"],description:"Change `flex-direction`",table:{defaultValue:{summary:"'row'"}}},fill:{control:"boolean",description:"Let children automatically fill parent"},inline:{control:"boolean",description:"Use `display: inline-flex` instead of `display: flex`"},center:{control:"select",description:"Center the `<Flex>` and add outer padding left and right",options:[!1,!0,"2xl","xl","l","m"],table:{defaultValue:{summary:"false"}}},alignItems:{control:"select",options:["start","center","end","baseline","stretch"],description:"Change `align-items`"},alignContent:{control:"select",options:["start","center","end","baseline","stretch","space-around","space-between","space-evenly"],description:"Change `align-content`"},justifyContent:{control:"select",options:["start","center","end","space-between","space-around","space-evenly"],description:"Change `justify-content`"},textAlign:{control:"inline-radio",options:["left","center","right"],description:"Change `text-align`",table:{defaultValue:{summary:"'left'"}}},wrap:{control:"inline-radio",options:["wrap","nowrap","reverse"],description:"Change `flex-wrap`",table:{defaultValue:{summary:"'wrap'"}}},as:{description:"By default, all Flex renders as regular `<div>` tags. You can change this by passing any HTML tag name or React component to the `as` prop.",table:{defaultValue:{summary:"'div'"}}},"...all HTMLDivElement attributes":{description:"If no `as`: [See all relevant div attributes →](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes)\n            <br />If `as`: All props of provided tag or component"}},args:{layout:void 0,gap:"m",center:!1,fill:!1,alignItems:"normal",alignContent:"normal",justifyContent:"normal",direction:"row",inline:!1,wrap:"wrap",asChild:!0}},d=[l=>e.jsxs("div",{className:"flex-decorator",children:[e.jsx("style",{children:`
            #storybook-root { width: 1900px }
            :where(.flex-decorator div) { padding: 0.5em; outline: 1px dashed var(--jkl-color-text-default) } /* Show grid columns */
            :where(.flex-decorator .jkl-flex) { outline: 1px solid var(--jkl-color-text-default) }
            :is(.flex-decorator p) { margin-block: 0.5em; }
            * { box-sizing: border-box }
            `}),e.jsx(l,{})]})],s={args:{children:null},decorators:d,render({asChild:l,...n}){return e.jsxs(i,{...n,children:[e.jsx("div",{children:"1"}),e.jsx("div",{children:"2"}),e.jsx("div",{children:"3"}),e.jsx("div",{children:"4"}),e.jsx("div",{children:"5"}),e.jsx("div",{children:"6"}),e.jsx("div",{children:"7"}),e.jsx("div",{children:"8"}),e.jsx("div",{children:"9"}),e.jsx("div",{children:"10"}),e.jsx("div",{children:"11"}),e.jsx("div",{children:"12"})]})}},t={args:{children:null},decorators:d,render({asChild:l,...n}){return e.jsxs(e.Fragment,{children:[e.jsxs(i,{layout:{small:"1",medium:"2",large:"3",xl:"4"},gap:{small:"none",medium:"none",large:"none",xl:"none"},...n,children:[e.jsx("div",{children:"Child 1"}),e.jsx("div",{children:"Child 2"}),e.jsx("div",{children:"Child 3"}),e.jsx("div",{children:"Child 4"}),e.jsx("div",{children:"Child 5"}),e.jsx("div",{children:"Child 6"})]}),e.jsxs(i,{layout:{small:"1",medium:"7.5",large:"8.4",xl:"2"},gap:{medium:"none s",large:"s m",xl:"m xl"},...n,children:[e.jsx("div",{children:"Child even and uneven widths 1"}),e.jsx("div",{children:"Child even and uneven widths 2"})]}),e.jsxs("span",{children:["Resize browser to see how the layout changes, based on this setup:",e.jsx("pre",{children:`<Flex
  layout={{ small: 1, medium: 2, large: 3, xl: 4 }}
  gap={{ small: 'none', medium: 's', large: 'm', xl: 'l' }}
>`})]})]})}},a={args:{children:null},decorators:d,render({gapType:l,asChild:n,...r}){return e.jsxs(i,{layout:"4.8",gap:"xl",...r,children:[e.jsxs("div",{children:["Sidebar",e.jsxs(i,{layout:"2",gap:"xl",children:[e.jsx("div",{children:"Child 1"}),e.jsx("div",{children:"Child 2"})]})]}),e.jsxs(i,{layout:"2",gap:"none",...r,children:[e.jsx("div",{children:"Child 1"}),e.jsxs(i,{layout:"3",...r,children:[e.jsx("div",{children:"Child 2-1"}),e.jsx("div",{children:"Child 2-2"}),e.jsx("div",{children:"Child 2-3"}),e.jsx("div",{children:"Child 2-4"}),e.jsx("div",{children:"Child 2-5"}),e.jsx("div",{children:"Child 2-6"})]}),e.jsx("div",{children:"Child 3"}),e.jsx("div",{children:"Child 4"})]})]})}},o={decorators:d,args:{layout:"3",children:null},render({asChild:l,...n}){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsxs("strong",{children:["Without fill and layout='",String(n.layout),"':"]})}),e.jsxs(i,{...n,children:[e.jsx("div",{children:"a"}),e.jsx("div",{children:"b"}),e.jsx("div",{children:"Praesent elit lorem, fringilla non venenatis auctor, fermentum sed elit. Nulla bibendum posuere convallis. Proin scelerisque mattis pharetra."}),e.jsx("div",{children:"d"}),e.jsx("div",{children:"e - notice this item follows layout"}),e.jsx("div",{children:"f - notice this item follows layout"})]}),e.jsx("p",{children:e.jsxs("strong",{children:["With fill and layout='",String(n.layout),"':"]})}),e.jsxs(i,{fill:!0,...n,children:[e.jsx("div",{children:"a"}),e.jsx("div",{children:"b"}),e.jsx("div",{children:"Praesent elit lorem, fringillanonvenenatisauctor, fermentumsedelit. Nulla bibendum posuere convallis. Proin scelerisque mattis pharetra."}),e.jsx("div",{children:"d"}),e.jsx("div",{children:"e - notice this item fills width"}),e.jsx("div",{children:"f - notice this item fills width"})]})]})}},c={decorators:d.concat([l=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
            /* Set same size for all items in 12 column example */
            code { display: block }
          `}),e.jsx(l,{})]})]),args:{center:!0,gap:"l",layout:"1",children:null},render({asChild:l,...n}){return e.jsxs(i,{center:!0,children:[e.jsxs(i,{id:"example",layout:"6",...n,children:[e.jsx("div",{children:"1"}),e.jsx("div",{children:"2"}),e.jsx("div",{children:"3"}),e.jsx("div",{children:"4"}),e.jsx("div",{children:"5"}),e.jsx("div",{children:"6"})]}),e.jsx(i,{center:"2xl",...n,children:e.jsxs("div",{children:[e.jsx("code",{children:"<Flex center> | <Flex center='xxl'>"}),e.jsx("small",{children:"= 12 units wide on xxl breakpoint"})]})}),e.jsx(i,{center:"xl",...n,children:e.jsxs("div",{children:[e.jsx("code",{children:"<Flex center='xl'>"}),e.jsx("small",{children:"= 10 units wide on xxl breakpoint"})]})}),e.jsx(i,{center:"l",...n,children:e.jsxs("div",{children:[e.jsx("code",{children:"<Flex center='l'>"}),e.jsx("small",{children:"= 8 units wide on xxl breakpoint"})]})}),e.jsx(i,{center:"m",...n,children:e.jsxs("div",{children:[e.jsx("code",{children:"<Flex center='m'>"}),e.jsx("small",{children:"= 6 units wide on xxl breakpoint"})]})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  decorators,
  render({
    asChild,
    ...props
  }) {
    return <Flex {...props}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
            </Flex>;
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  decorators,
  render({
    asChild,
    ...props
  }) {
    return <>
                <Flex layout={{
        small: "1",
        medium: "2",
        large: "3",
        xl: "4"
      }} gap={{
        small: "none",
        medium: "none",
        large: "none",
        xl: "none"
        // biome-ignore lint/suspicious/noExplicitAny: Storybook klager på denne ved bruk i flex story, men ikke der den ellers.
      } as any} {...props}>
                    <div>Child 1</div>
                    <div>Child 2</div>
                    <div>Child 3</div>
                    <div>Child 4</div>
                    <div>Child 5</div>
                    <div>Child 6</div>
                </Flex>
                <Flex layout={{
        small: "1",
        medium: "7.5",
        large: "8.4",
        xl: "2"
      }}
      // biome-ignore lint/suspicious/noExplicitAny: Storybook klager på denne ved bruk i flex story, men ikke der den ellers.
      gap={{
        medium: "none s",
        large: "s m",
        xl: "m xl"
      } as any} {...props}>
                    <div>Child even and uneven widths 1</div>
                    <div>Child even and uneven widths 2</div>
                </Flex>
                <span>
                    Resize browser to see how the layout changes, based on this
                    setup:
                    <pre>
                        {\`<Flex\\n  layout={{ small: 1, medium: 2, large: 3, xl: 4 }}\\n  gap={{ small: 'none', medium: 's', large: 'm', xl: 'l' }}\\n>\`}
                    </pre>
                </span>
            </>;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  decorators,
  render({
    gapType,
    asChild,
    ...props
  }) {
    return <Flex layout="4.8" gap="xl" {...props}>
                <div>
                    Sidebar
                    <Flex layout="2" gap="xl">
                        <div>Child 1</div>
                        <div>Child 2</div>
                    </Flex>
                </div>
                <Flex layout="2" gap="none" {...props}>
                    <div>Child 1</div>
                    <Flex layout="3" {...props}>
                        <div>Child 2-1</div>
                        <div>Child 2-2</div>
                        <div>Child 2-3</div>
                        <div>Child 2-4</div>
                        <div>Child 2-5</div>
                        <div>Child 2-6</div>
                    </Flex>
                    <div>Child 3</div>
                    <div>Child 4</div>
                </Flex>
            </Flex>;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators,
  args: {
    layout: "3",
    children: null
  },
  render({
    asChild,
    ...props
  }) {
    return <>
                <p>
                    <strong>
                        Without fill and layout=&apos;{String(props.layout)}
                        &apos;:
                    </strong>
                </p>
                <Flex {...props}>
                    <div>a</div>
                    <div>b</div>
                    <div>
                        Praesent elit lorem, fringilla non venenatis auctor,
                        fermentum sed elit. Nulla bibendum posuere convallis.
                        Proin scelerisque mattis pharetra.
                    </div>
                    <div>d</div>
                    <div>e - notice this item follows layout</div>
                    <div>f - notice this item follows layout</div>
                </Flex>
                <p>
                    <strong>
                        With fill and layout=&apos;{String(props.layout)}&apos;:
                    </strong>
                </p>
                <Flex fill {...props}>
                    <div>a</div>
                    <div>b</div>
                    <div>
                        Praesent elit lorem, fringillanonvenenatisauctor,
                        fermentumsedelit. Nulla bibendum posuere convallis.
                        Proin scelerisque mattis pharetra.
                    </div>
                    <div>d</div>
                    <div>e - notice this item fills width</div>
                    <div>f - notice this item fills width</div>
                </Flex>
            </>;
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: decorators.concat([Story => <>
                <style>{\`
            /* Set same size for all items in 12 column example */
            code { display: block }
          \`}</style>
                <Story />
            </>]),
  args: {
    center: true,
    gap: "l",
    layout: "1",
    children: null
  },
  render({
    asChild,
    ...props
  }) {
    return <Flex center>
                <Flex id="example" layout="6" {...props}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </Flex>
                <Flex center="2xl" {...props}>
                    <div>
                        <code>
                            &lt;Flex center&gt; | &lt;Flex
                            center=&apos;xxl&apos;&gt;
                        </code>
                        <small>= 12 units wide on xxl breakpoint</small>
                    </div>
                </Flex>
                <Flex center="xl" {...props}>
                    <div>
                        <code>&lt;Flex center=&apos;xl&apos;&gt;</code>
                        <small>= 10 units wide on xxl breakpoint</small>
                    </div>
                </Flex>
                <Flex center="l" {...props}>
                    <div>
                        <code>&lt;Flex center=&apos;l&apos;&gt;</code>
                        <small>= 8 units wide on xxl breakpoint</small>
                    </div>
                </Flex>
                <Flex center="m" {...props}>
                    <div>
                        <code>&lt;Flex center=&apos;m&apos;&gt;</code>
                        <small>= 6 units wide on xxl breakpoint</small>
                    </div>
                </Flex>
            </Flex>;
  }
}`,...c.parameters?.docs?.source}}};const k=["Default","Responsive","Nested","Fill","Center"];export{c as Center,s as Default,o as Fill,a as Nested,t as Responsive,k as __namedExportsOrder,F as default};
