import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from "./AppDropdown.styles";
import { useTheme } from "../../../../providers/themeProvider";

const AppDropdown = () => {
  const { colors } = useTheme();
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
      showArrowIcon={false}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={{backgroundColor: colors.cardBg, borderColor: colors.cardTxt}}
      containerStyle={ [styles.dropdownStyle, { backgroundColor: colors.cardBg }] }
      dropDownContainerStyle={{backgroundColor: colors.cardBg, borderColor: colors.cardTxt}}
      textStyle = {{ color: colors.cardTxt }}
      modalProps={{ animationType: "fade" }}
    />
  );
}

export default AppDropdown;