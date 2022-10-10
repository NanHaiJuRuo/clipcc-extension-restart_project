const catId='nhjr.restart_project';
const {api, type, Extension}=require('clipcc-extension');
class E extends Extension{
onInit(){api.addCategory({categoryId: catId, messageId: catId, color: '#FFAB19'});
api.addBlock({
    function: ()=>{api.getVmInstance().greenFlag()}, 
    type:type.BlockType.COMMAND, 
    option: {terminal: true},
    opcode:catId+'.greenFlag', messageId:catId+'.greenFlag', 
    categoryId:catId
})
}onUninit(){api.removeCategory(catId)}}module.exports=E