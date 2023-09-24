
let str_list = []
stage.compList.map((function(el) {
  if(el.visible){
      str_list.push(el)
  }
}))
if(str_list.length >= 2){
  for (let i =0; i < stage.compList.length; i++){
    stage.compList[i].setVisibility(false)
  }
    
  var cs = str_list[0].structure
  for (let i = 1; i < str_list.length; i++) {
    cs = NGL.concatStructures(
      'concat',
      cs.getView(new NGL.Selection('')),
      str_list[i].structure.getView(new NGL.Selection(''))
    )
  }
  var el = stage.addComponentFromObject(cs)
}
