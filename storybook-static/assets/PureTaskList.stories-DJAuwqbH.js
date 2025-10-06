import{e as L,f as u,j as d,F as k,r as T,k as s,o as n,m as h,h as N}from"./iframe-Bt_Nky6W.js";import{_ as x,T as a}from"./Task.stories-BA26to_d.js";const b={class:"list-items"},E={key:1,class:"list-items","data-testid":"empty",id:"empty"},f=L({__name:"PureTaskList",props:{tasks:{},loading:{type:Boolean}},emits:["archive-task","pin-task"],setup(p,{emit:_}){const m=p,v=u(()=>m.tasks.length===0),S=u(()=>[...m.tasks.filter(e=>e.state==="TASK_PINNED"),...m.tasks.filter(e=>e.state!=="TASK_PINNED")]),g=_;function D(e){g("archive-task",e)}function P(e){g("pin-task",e)}return(e,c)=>(n(),d("div",b,[p.loading?(n(),d(k,{key:0},T(6,l=>s("div",{key:l,class:"loading-item","data-testid":"loading",id:"loading"},[...c[0]||(c[0]=[s("span",{class:"glow-checkbox"},null,-1),s("span",{class:"glow-text"},[s("span",null,"Loading"),h(),s("span",null,"cool"),h(),s("span",null,"state")],-1)])])),64)):v.value?(n(),d("div",E,[...c[1]||(c[1]=[s("div",{class:"wrapper-message"},[s("span",{class:"icon-check"}),s("p",{class:"title-message"},"You have no tasks"),s("p",{class:"subtitle-message"},"Sit back and relax")],-1)])])):(n(!0),d(k,{key:2},T(S.value,l=>(n(),N(x,{key:l.id,task:l,onArchiveTask:D,onPinTask:P},null,8,["task"]))),128))]))}});f.__docgenInfo={exportName:"default",displayName:"PureTaskList",description:"",tags:{},props:[{name:"tasks",required:!0,type:{name:"Array",elements:[{name:"TaskData"}]}},{name:"loading",required:!1,type:{name:"boolean"}}],events:[{name:"archive-task",type:{names:["string"]}},{name:"pin-task",type:{names:["string"]}}],sourceFiles:["/Users/GarryPeng/Working/Studio/storybook/taskbox/src/components/PureTaskList.vue"]};const y=[{...a,id:"1",title:"Task 1"},{...a,id:"2",title:"Task 2"},{...a,id:"3",title:"Task 3"},{...a,id:"4",title:"Task 4"},{...a,id:"5",title:"Task 5"},{...a,id:"6",title:"Task 6"}],I={component:f,title:"PureTaskList",tags:["autodocs"],excludeStories:/.*Data$/,decorators:[()=>({template:'<div style="margin: 3em;"><story/></div>'})],args:{...a.events}},t={args:{tasks:y}},o={args:{tasks:[...t.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]}},r={args:{tasks:[],loading:!0}},i={args:{...r.args,loading:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: TaskListData
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [...Default.args.tasks.slice(0, 5), {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED'
    }]
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tasks: [],
    loading: true
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false
  }
}`,...i.parameters?.docs?.source}}};const A=["TaskListData","Default","WithPinnedTasks","Loading","Empty"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Empty:i,Loading:r,TaskListData:y,WithPinnedTasks:o,__namedExportsOrder:A,default:I},Symbol.toStringTag,{value:"Module"}));export{O as P,y as T,f as _};
