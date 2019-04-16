import index from './components/index'
import login from './components/login'
import topMenu from './components/topMenu'

import caseIndex from './components/case/caseIndex'
import caseAdd from './components/case/caseAdd'
import caseEdit from './components/case/caseEdit'
import customerIndex from './components/customer/customerIndex'
import documentIndex from './components/document/documentIndex'
import auditingIndex from './components/auditing/auditingIndex'
import countIndex from './components/count/countIndex'
import setIndex from './components/setting/setIndex'
import interest from './components/auditing/interest'
import setContract from './components/setting/setContract'
import setPower from './components/setting/setPower'
import setBase from './components/setting/setBase'
import mineIndex from './components/mine/mineIndex'
export default[
    {path:'/',component:login,name:login},
    {path:'/login',component:login,name:login},
    {path:'/index',component:index,name:index,children:[
{path:'/index/caseIndex',component:caseIndex,name:caseIndex},
{path:'/index/caseAdd',component:caseAdd,name:caseAdd},
{path:'/index/caseEdit',component:caseEdit,name:caseEdit},
{path:'/index/customerIndex',component:customerIndex,name:customerIndex},
{path:'/index/documentIndex',component:documentIndex,name:documentIndex},
{path:'/index/auditingIndex',component:auditingIndex,name:auditingIndex},
{path:'/index/countIndex',component:countIndex,name:countIndex},
{path:'/index/setIndex',component:setIndex,name:setIndex},
{path:'/index/interest',component:interest,name:interest},
{path:'/index/setContract',component:setContract,name:setContract},
{path:'/index/setPower',component:setPower,name:setPower},
{path:'/index/setBase',component:setBase,name:setBase},
{path:'/index/mineIndex',component:mineIndex,name:mineIndex},
    ]},
    {path:'/topMenu',component:topMenu,name:topMenu},
   
  
]
    
