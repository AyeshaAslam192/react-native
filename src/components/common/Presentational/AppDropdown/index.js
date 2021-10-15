import React, { useState } from 'react';
import { View } from 'react-native';
// import DropDown from "react-native-paper-dropdown";

function AppDropdown() {
    const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
    const [colors, setColors] = useState("");
    const colorList = [
        {
          label: "White",
          value: "white",
        },
        {
          label: "Red",
          value: "red",
        },
        {
          label: "Blue",
          value: "blue",
        },
        {
          label: "Green",
          value: "green",
        },
        {
          label: "Orange",
          value: "orange",
        },
      ];
    return (
        <View>
            {/* <DropDown
              label={"Colors"}
              mode={"outlined"}
              visible={showMultiSelectDropDown}
              showDropDown={() => setShowMultiSelectDropDown(true)}
              onDismiss={() => setShowMultiSelectDropDown(false)}
              value={colors}
              setValue={setColors}
              list={colorList}
              multiSelect
            /> */}
        </View>
    );
}

export default AppDropdown;