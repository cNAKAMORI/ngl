
stage.compList.map((function(el) {
  if(el.visible){
    el.removeAllRepresentations()
    el.setSelection('/0 /1')
    el.addRepresentation("cartoon" , { colorScheme: "chainindex"})
    el.addRepresentation("spacefill", { sele: "ion"})
    el.addRepresentation("ball+stick" , { sele: "not (protein or nucleic or water) and not apolarh", 
    								  multipleBond: "symmetric"})
    el.addRepresentation("line" , { sele: "(protein or nucleic) and not apolarh",
    							 linewidth: 0.75})
    el.addRepresentation("contact"  , { masterModelIndex: 0, 
    								weakHydrogenBond: true, 
    								maxHbondDonPlaneAngle: 35,
    								sele: "not water"})
    el.addRepresentation("surface"  , { sele: "(protein or nucleic or ACE or NME) and not HET",
    								opaqueBack: false,
    								opacity: 0.67,
    								color: "hydrophobicity",
    								surfaceType: "av"
    });
  }
}))
