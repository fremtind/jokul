import{j as e}from"./jsx-runtime-BOJBhsC5.js";import"./index-Bv6P490N.js";import{LinkCard as t}from"./Card.stories-B9jdtawB.js";import{c as d}from"./clsx-B-dksMZM.js";import{C as c}from"./Card-DRTpCu7t.js";import{F as p}from"./Flex-DAYRz_h9.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./SlotComponent-CgJtPkTS.js";import"./mergeRefs-BP-F_O_W.js";import"./Image-Bda2t8MS.js";import"./CheckIcon-DREZZ8z7.js";import"./Icon-DYEEOjBa.js";import"./CopyIcon-CTiS2n6z.js";import"./tokens-d2GYn7oW.js";const s=({className:n,density:o,variant:i="neutral",children:l,...m})=>e.jsx("span",{className:d("jkl-tag",`jkl-tag--${i}`,n),"data-density":o,...m,children:l});s.__docgenInfo={description:"",methods:[],props:{density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"neutral" | "info" | "error" | "warning" | "success"',elements:[{name:"literal",value:'"neutral"'},{name:"literal",value:'"info"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"neutral"',computed:!1}}},composes:["HTMLAttributes"]};const w={title:"Komponenter/Tag",component:s,tags:["autodocs"],args:{children:"Under behandling",variant:"neutral"}},r={},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("span",{hidden:!0,children:"Status: "})," Fornyelse"]}),variant:"info"},render:n=>e.jsx(c,{...t.args,children:e.jsxs(p,{direction:"column",gap:"m",children:[e.jsx("div",{children:e.jsx(s,{...n})}),t.args.children]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <span hidden>Status: </span> Fornyelse
            </>,
    variant: "info"
  },
  render: args =>
  // @ts-ignore
  <Card {...LinkCard.args}>
            <Flex direction="column" gap="m">
                <div>
                    <Tag {...args} />
                </div>
                {LinkCard.args.children}
            </Flex>
        </Card>
}`,...a.parameters?.docs?.source}}};const L=["_Tag","CardMedTag"];export{a as CardMedTag,r as _Tag,L as __namedExportsOrder,w as default};
