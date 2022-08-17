import { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { steps_css } from "./steps-css.module";

interface ListStepsProps { 
  title: string;
  element: JSX.Element
}

interface StepProps { 
  listStep: ListStepsProps[]
}

const Steps: React.FC<StepProps> = (props) => {
  const [listOfSteps, setListOfSteps] = useState<ListStepsProps[]>(props.listStep);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const isFirstStep = () => currentStep === 0;
  const isLastStep = () => currentStep === listOfSteps.length -1;

  const nextStep = () => {
    if (!isLastStep()) {
      setCurrentStep(prev => prev + 1);
    }
  }

  const previousStep = () => {
    if (!isFirstStep()) {
      setCurrentStep(prev => prev - 1);
    }
  }

  return (
    <View>
      <View style={steps_css.containerHeader}>
        {listOfSteps.map((item, index) => {
          return (
            <View style={steps_css.circleRadius} key={index}>
              <Text style={steps_css.textContainerHeader}>{index + 1}</Text>
            </View>
          )
        })}
      </View>
      <View style={steps_css.containerMain}>
        {listOfSteps[currentStep]?.element}
      </View>
      <View style={steps_css.containerBottom}>
        {!isFirstStep() &&
          <TouchableOpacity style={{ ...steps_css.pressableButton }} onPress={() => previousStep()}>
            <Text style={steps_css.color}>Anterior</Text>
          </TouchableOpacity>
        }
        <TouchableOpacity style={{ ...steps_css.pressableButton }} onPress={() => nextStep()}>
          <Text style={steps_css.color}>{isLastStep() ? 'Concluir' : 'Proximo'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { Steps };
export type { ListStepsProps }


