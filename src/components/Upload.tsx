import React, { useState } from "react";
import { FAB, Portal, Provider } from "react-native-paper";

export default function Upload() {
  const [open, setOpen] = useState(false);

  return (
    <Provider>
      <Portal>
        <FAB.Group
          visible
          open={open}
          icon={open ? "today" : "plus"}
          actions={[
            { icon: "plus", onPress: () => console.log("Pressed add") },
            {
              icon: "camera",
              label: "Star",
              onPress: () => console.log("Pressed star")
            },
            {
              icon: "camera",
              label: "Email",
              onPress: () => console.log("Pressed email")
            },
            {
              icon: "bell",
              label: "Remind",
              onPress: () => console.log("Pressed notifications")
            }
          ]}
          onStateChange={({ open }) => setOpen(open)}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
}
