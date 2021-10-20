import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from "./AppDropdown.styles";

const AppDropdown = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);
  
    return (
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={ styles.dropdownStyle }
      />
    );
}

export default AppDropdown;