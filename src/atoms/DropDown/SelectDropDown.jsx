import React from "react";
// import { Form } from "react-bootstrap";
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./DropDown.css";
/**
 * @author
 * @function SelectDropDown
 **/
 const ITEM_HEIGHT = 48;
 const ITEM_PADDING_TOP = 8;
 const MenuProps = {
   PaperProps: {
     style: {
       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
       width: 250,
     },
   },
 };

 
// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

const SelectDropDown = ({ data, classname,name, label,handleInputchange,optional,defaultValue,defaultSelectValue }) => {
 
  const theme = useTheme();

const _label = label ? true : false;
const _optional=optional||"";
const _default = defaultValue||label;
  return (
    <>
      

      <FormControl sx={{ m: 1, width: 300 }}>
      {_label && <InputLabel id="demo-multiple-name-label" className="inputFieldOrgDetailLabel">{label}</InputLabel>}

        <Select
          className={` SelectDropDown ${classname}`}
          // as="select"
          // custom
          // defaultValue={defaultSelectValue}
          value={defaultSelectValue}
          onChange={(e) => handleInputchange(e.target.value, name,_optional)}

          labelId="demo-multiple-name-label"
          // id="demo-multiple-name"
          // multiple
          // value={personName}
          // onChange={handleChange}
          // input={<OutlinedInput label="Name" /> }
          MenuProps={MenuProps}
        >
           {data.map((item, index) => (
              <MenuItem
              key={index}
              value={item.value}
              // style={getStyles(item.value, defaultSelectValue, theme)}
            >
              {item.value}
            </MenuItem>

         
        ))}

          
        </Select>
      </FormControl>

      {/* <FormControl
        className={` SelectDropDown ${classname}`}
        as="select"
        custom
        defaultValue={defaultSelectValue}
        onChange={(e) => handleInputchange(e.target.value, name,_optional)}
      >
        <option value={""} className="placeHolderColor">{ _default || "Select"}</option>

        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </FormControl> */}
    </>
  );
};

export default SelectDropDown;










// import React from "react";
// import { Form } from "react-bootstrap";
// import "./DropDown.css";
// /**
//  * @author
//  * @function SelectDropDown
//  **/

// const SelectDropDown = ({ data, classname, label }) => {
//   const onChangefn = (value) => {
//     var a = JSON.parse(value);
//     console.log(value);
//   };
//   const _label = label ? true : false;

//   return (
//     <>
//       {_label && <div className="inputFieldOrgDetailLabel">{label}</div>}
//       <Form.Control
//         className={` SelectDropDown ${classname}`}
//         as="select"
//         custom
//         onChange={(event) => onChangefn(event.target.value)}
//       >
//         {data.map((item, index) => (
//           <option key={index} value={JSON.stringify(item)}>
//             {item.label}
//           </option>
//         ))}
//       </Form.Control>
//     </>
//   );
// };

// export default SelectDropDown;