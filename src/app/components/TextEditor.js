'use client';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import katex from "katex";
import "katex/dist/katex.min.css";

import "mathlive";
import axios from 'axios';
window.katex = katex;


export default function TextEditor(){

    const [text,setText]=useState('');
    const [equation,setEquation]=useState('');
    
    
    const Editormodules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ header: [1, 2, 3, false] }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }]
    ],
    
    clipboard: {
      matchVisual: false
    }
   };
  
   async function handleEnter(e){
    let temp= `<span class="ql-formula" data-value="${e.target.value}"><span>`
    setText(text+temp)
    const response= await axios.post('/api/StoreEquation',{
      "Equation":equation
    })
    alert(response.data);
    setEquation('');

   }

    
    return(
      <div>

        <div className=" h-auto w-2/3 mx-auto mt-10">
          <span className='text-lg font-bold text-gray-600'>Equation Box</span>
          <br/>

          <math-field style={{fontSize:"1.5rem", width :"50rem", border: "2px gray solid"}}
            onKeyDown={(e) => {
              if(e.key==="Enter")
                handleEnter(e)
            }
          }

            onInput={evt => setEquation(evt.target.value)}>{equation}
          </math-field>

          <p className=' text-sm font-extralight'>hit "Enter" after completion</p>
        </div>
        
        <div className=" h-auto w-2/3 mx-auto mt-10">
            <span className='text-lg font-bold text-gray-600'>Text Box</span>
            <br/>
            <ReactQuill 
             modules={Editormodules} value={text} 
             onChange={(value)=> setText(value)}
             className=" border-2 border-gray-500 "/>

        </div>
        
      </div>
    )
}