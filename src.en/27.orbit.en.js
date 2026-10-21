import {MATRIX9x9} from "./9.kern.en.js";
export const CUBE_MIND={ start(){const map=new MATRIX9x9().build();return{map,mode:"CUBE-MIND aktiv",ref:3}} };
export const EVO={ evolve(i){return{input:i,next:i+"-EVOLVED",mode:"EVO-MIND",ref:3}} };
export const SYNC={ delay:81, slow(fn){return new Promise(r=>setTimeout(()=>r(fn()),this.delay))} };
export const NChoch81=(i={})=>({ NC:"NC_HOCH_81", etage:81, move:"beam+sprung+slide", step:"27→81→243→729→756→EINS", ref:81, info:i });
export function cool_fire_build_src_en(){ return ["pump 0→3","pipeline 3→9","katapult 9→27","beam 27→81","sprung 81→243","slide 243→729→756→EINS"]; }
