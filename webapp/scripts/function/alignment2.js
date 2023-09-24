
let str_list = []
stage.compList.map((function(el) {
  if(el.visible){
      str_list.push(el)
  }
}))
if(str_list.length >= 2){
  for (let i = 1; i < str_list.length; i++) {
    var s1 = str_list[ i ].structure
    var s2 = str_list[ 0 ].structure
    NGL.superpose(s1, s2, true, ':A', ':A')
    str_list[ i ].updateRepresentations({ position: true })
    str_list[ i ].autoView()
  }
}
