import{e as g,f as k,j as d,o as u,k as t,p as b,q as S}from"./iframe-Bt_Nky6W.js";const _=["for","aria-label"],y=["checked","name","id"],A=["for","aria-label"],D=["value","id"],E=["id","aria-label"],p=g({__name:"Task",props:{task:{default:{id:"",title:"",state:"TASK_INBOX"}},onArchiveTask:{},onPinTask:{}},emits:["archive-task","pin-task"],setup(e,{emit:T}){const i=e,h=k(()=>`list-item ${i.task.state}`),r=k(()=>i.task.state==="TASK_ARCHIVED"),c=T;function v(){c("archive-task",i.task.id)}function f(){c("pin-task",i.task.id)}return(C,l)=>(u(),d("div",{class:S(h.value)},[t("label",{for:"checked"+e.task.id,"aria-label":"archiveTask-"+e.task.id,class:"checkbox"},[t("input",{type:"checkbox",checked:r.value,disabled:"",name:"checked"+e.task.id,id:"archiveTask-"+e.task.id},null,8,y),t("span",{class:"checkbox-custom",onClick:v})],8,_),t("label",{for:"title-"+e.task.id,"aria-label":e.task.title,class:"title"},[t("input",{type:"text",readonly:"",value:e.task.title,id:"title-"+e.task.id,name:"title",placeholder:"Input title"},null,8,D)],8,A),r.value?b("",!0):(u(),d("button",{key:0,class:"pin-button",onClick:f,id:"pinTask-"+e.task.id,"aria-label":"pinTask-"+e.task.id},[...l[0]||(l[0]=[t("span",{class:"icon-star"},null,-1)])],8,E))],2))}});p.__docgenInfo={exportName:"default",displayName:"Task",description:"",tags:{},props:[{name:"task",description:"Composition of the task",required:!0,type:{name:"TaskData"},defaultValue:{func:!1,value:"{ id: '', title: '', state: 'TASK_INBOX' }"}},{name:"onArchiveTask",description:"Event to change the task to archived",required:!0,type:{name:"TSFunctionType"}},{name:"onPinTask",description:"Event to change the task to pinned",required:!0,type:{name:"TSFunctionType"}}],events:[{name:"archive-task",type:{names:["string"]}},{name:"pin-task",type:{names:["string"]}}],sourceFiles:["/Users/GarryPeng/Working/Studio/storybook/taskbox/src/components/Task.vue"]};const{fn:m}=__STORYBOOK_MODULE_TEST__,o={id:"1",title:"Test Task",state:"TASK_INBOX",events:{onArchiveTask:m(),onPinTask:m()}},N={component:p,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...o.events}},a={args:{task:o}},s={args:{task:{...a.args.task,state:"TASK_PINNED"}}},n={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    task: TaskData
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...n.parameters?.docs?.source}}};const x=["TaskData","Default","Pinned","Archived"],O=Object.freeze(Object.defineProperty({__proto__:null,Archived:n,Default:a,Pinned:s,TaskData:o,__namedExportsOrder:x,default:N},Symbol.toStringTag,{value:"Module"}));export{o as T,p as _,O as a};
