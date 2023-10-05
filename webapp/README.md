This web app is designed for cheminformatics purposes, such as for pharmaceutical companies. It mainly provides functions to display docking simulation results, alphafold results, 3D alignment and concatenation of proteins. It also has a feature to save and restore the whole view, so you can share what you are seeing with your colleagues.

## usage
1. Git clone from original source (https://github.com/nglviewer/ngl)
2. Install and build from the clone
3. Download this webapp folder
4. Edit the path in index.html to your build path. See below. <br>
   line 14 <script src="../build/js/ngl.dev.js"></script>
5. Run by apache or nginx

## functions and representations
All function and representations apply to the visible structures only. 

## query
load: some url addresses of web file <br>
script: some function or representation files of scripts floder

exapmle: http://localhost/ngl/webapp?load=http://localhost/rank1.pdb,http://localhost//rank2.pdb&script=representation/alphafold,function/alignment
