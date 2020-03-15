import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FAB, Portal } from "react-native-paper";

interface Props {
  isFocused: boolean;
}

export default function UploadFAB(props: Props) {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <Portal>
      <FAB.Group
        visible={props.isFocused}
        style={{
          position: "absolute",
          bottom: 50,
          right: 0
        }}
        fabStyle={{ backgroundColor: "#3F9142" }}
        open={open}
        icon={open ? "close" : "plus"}
        actions={[
          {
            icon: "pencil",
            label: "Add Note",
            onPress: () => {
              navigation.navigate("Form");
            }
          },
          {
            icon: "camera",
            label: "Take Photo",
            onPress: () => {
              navigation.navigate("Camera");
            }
          },
          {
            icon: "image",
            label: "Upload Image",
            onPress: () => {
              navigation.navigate("Form", { upload: true });
            }
          }
        ]}
        onStateChange={({ open }) => setOpen(open)}
      />
    </Portal>
  );
}
