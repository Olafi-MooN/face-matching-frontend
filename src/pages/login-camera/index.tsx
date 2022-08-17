import { Text, View } from "react-native"
import { ListStepsProps, Steps } from "../../components/steps";
import { CameraStep } from "./camera-step";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const LoginCamera = () => {
  return (
    <Steps listStep={[
      {title: 'name', element: HomeScreen()},
      {title: 'Câmera Step', element: CameraStep()},
    ] as ListStepsProps[]}/>
  );
}

export { LoginCamera }