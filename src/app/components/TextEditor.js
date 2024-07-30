'use client';

import ReactQuill from "react-quill";

import { useState } from "react";
import 'react-quill/dist/quill.snow.css';


export default function TextEditor(){
    const [text,setText]=useState('');
    const [eq,setEq]=useState([]);
    
    const Editormodules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ header: [1, 2, 3, false] }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],['formula']
    ],
    
    clipboard: {
      matchVisual: false
    }
   };
    

    
    return(
        <div>
            SEE FORMULAES
            <a className="font-extrabold text-red-500 m-2" href="https:oeis.org/wiki/List_of_LaTeX_mathematical_symbols" target="blank"> HERE</a> 
            FOR FULL FUNCTIONALITY
        <div>
            
            <ReactQuill 
             modules={Editormodules} value={text} 
             onChange={(value,d,s,txt)=> 
                 {
                     setText(value);
                     if(d.ops[1] && d.ops[1].insert && d.ops[1].insert.formula){
                         console.log(d.ops[1].insert.formula)
                     }
                     else if(d.ops[0] && d.ops[0].insert && d.ops[0].insert.formula){
                        console.log(d.ops[1].insert.formula)
                     }
                    
                
                 }
             }
             className=" border-4 border-gray-400 h-auto w-2/3 mx-auto mt-10"/>
        </div>
        
        
        </div>
        
    )
}