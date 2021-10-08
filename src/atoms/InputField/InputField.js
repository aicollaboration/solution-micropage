import React from 'react'
import './InputField.css';
export default function InputField({ name, type, placeholder, handleInputchange, value, classname, parentclassname, readonly }) {
    const _placeholder = placeholder || "Enter Value";
    const _type = type || "text"
    const _classname = classname || "";
    const _parentclassname = parentclassname || "inputFieldOrgDetail";

const _readonly = readonly || false;

    return (
        <>
            <div className={_parentclassname}>
                <div className="inputFieldOrgDetailLabel">{_placeholder}</div>
              
                    <input
                        type={_type}
                        name={name}
                        className={_classname}
                        placeholder={_placeholder}
                        value={value}
                        onChange={(e) => handleInputchange(e.target.value, name)}
                        readOnly = {_readonly} 
                    />


            </div>
        </>
    )
}
