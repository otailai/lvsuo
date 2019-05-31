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
import setContract from './components/setting/setContract'
import setPower from './components/setting/setPower'
import setBase from './components/setting/setBase'
import mineIndex from './components/mine/mineIndex'
import mineEdit from './components/mine/mineEdit'
import setDemo from './components/setting/setDemo'
import caseWord from './components/case/caseWord'
import caseUpdate from './components/case/caseUpdate'

import caseSearch from './components/search/caseSearch'
import caseAllList from './components/case/caseChild/caseAllList'
import caseBranch from  './components/case/caseChild/caseBranch'
import casePart from  './components/case/caseChild/casePart'
import caseMine from  './components/case/caseChild/caseMine'
import caseEmpower from  './components/case/caseChild/caseEmpower'

import auditingRisk from './components/auditing/auditingRisk'
import auditingRiskBrand from './components/auditing/auditingRiskBrand'
import caseAuditing from './components/auditing/caseAuditing'
import financialAuditing from './components/auditing/financialAuditing'
import interest from './components/auditing/interest'
import auditingCloseCase from './components/auditing/auditingCloseCase'

import setBaseCaseType from './components/setting/setBase/setBaseCaseType'
import customeCaseType from './components/setting/setBase/customeCaseType'
import industryCaseType from './components/setting/setBase/industryCaseType'
import causesCase from './components/setting/setBase/causesCase'
import jobCase from './components/setting/setBase/jobCase'
export default[
    {path:'/',component:login,name:login},
    {path:'/login',component:login,name:login},
    {path:'/index',redirect: '/index/caseIndex/caseAllList',component:index,name:index,
    meta:{requireAuth:true},
    children:[
{path:'/index/caseIndex',redirect: '/index/caseIndex/caseAllList',component:caseIndex,name:caseIndex, meta:{requireAuth:true}, children:[{path:'/index/caseIndex/caseAllList',component:caseAllList,name:caseAllList},
{path:'/index/caseIndex/caseBranch',component:caseBranch,name:caseBranch},
{path:'/index/caseIndex/casePart',component:casePart,name:casePart},
{path:'/index/caseIndex/caseMine',component:caseMine,name:caseMine},
{path:'/index/caseIndex/caseEmpower',component:caseEmpower,name:caseEmpower}
]},
{path:'/index/caseAdd',component:caseAdd,name:caseAdd},
{path:'/index/caseUpdate/:id/:typeId',component:caseUpdate,name:caseUpdate},
{path:'/index/caseEdit/:id/:typeId',component:caseEdit,name:caseEdit},
{path:'/index/customerIndex',component:customerIndex,name:customerIndex},
{path:'/index/search',component:caseSearch,name:caseSearch},
{path:'/index/documentIndex',component:documentIndex,name:documentIndex},
{path:'/index/auditingIndex',component:auditingIndex,name:auditingIndex,redirect: '/index/auditingIndex/caseAuditing',children:[{path:'/index/auditingIndex/caseAuditing',component:caseAuditing,name:caseAuditing},
        {path:'/index/auditingIndex/auditingRisk',component:auditingRisk,name:auditingRisk},
        {path:'/index/auditingIndex/auditingRiskBrand',component:auditingRiskBrand,name:auditingRiskBrand},
        {path:'/index/auditingIndex/financialAuditing',component:financialAuditing,name:financialAuditing},
        {path:'/index/auditingIndex/auditingCloseCase',component:auditingCloseCase,name:auditingCloseCase},
]},
{path:'/index/countIndex',component:countIndex,name:countIndex},
{path:'/index/setIndex',component:setIndex,name:setIndex},
{path:'/index/interest',component:interest,name:interest},
{path:'/index/setContract',component:setContract,name:setContract},
{path:'/index/setPower',component:setPower,name:setPower},
{path:'/index/setBase',component:setBase,name:setBase,redirect:'/index/setBase/setBaseCaseType',children:[{path:'/index/setBase/setBaseCaseType',component:setBaseCaseType,name:setBaseCaseType}, 
                {path:'/index/setBase/customeCaseType',component:customeCaseType,name:customeCaseType},
                {path:'/index/setBase/industryCaseType',component:industryCaseType,name:industryCaseType},
                {path:'/index/setBase/causesCase',component:causesCase,name:causesCase},
                {path:'/index/setBase/jobCase',component:jobCase,name:jobCase},
    ]},
{path:'/index/mineIndex',component:mineIndex,name:mineIndex},
{path:'/index/mineEdit',component:mineEdit,name:mineEdit},
{path:'/index/setDemo',component:setDemo,name:setDemo},
{path:'/index/caseWord',component:caseWord,name:caseWord},

    ]},
    {path:'/topMenu',component:topMenu,name:topMenu},
    {path:'*',redirect: '/index/caseIndex', meta:{requireAuth:true},component:caseIndex,name:caseIndex},
   
]
    
