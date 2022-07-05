import React, { Suspense, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  graphql,
  PreloadedQuery,
  useMutation,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { OperationType } from "relay-runtime";

const styleSheet = StyleSheet.create({
  waterMeterStyle: {
    textAlign: "center",
    fontSize: 20,
  },
  waterMeterLabelStyle: {
    marginTop: 50,
  },
});

const WaterIntakeQuery = graphql`
  query HomeWateIntakeQuery {
    waterIntake
  }
`;

const WaterIntakeMutation = graphql`
  mutation HomeWateIntakeMutation($input: Int!) {
    addWaterIntake(waterDrank: $input)
  }
`;

export default function Home(): JSX.Element {
  const [queryReference, loadQuery] = useQueryLoader(WaterIntakeQuery);
  useEffect(() => loadQuery({}), [loadQuery]);

  const setValue = () => {
    const mutation = commitMutation(environment, {
      mutation: WaterIntakeMutation,
    });

    console.log(mutation);
  };

  return queryReference ? (
    <Suspense fallback={<ActivityIndicator />}>
      <HomeContent queryReference={queryReference} setValue={setValue} />
    </Suspense>
  ) : (
    <ActivityIndicator />
  );
}

function HomeContent({
  queryReference,
}: {
  queryReference: PreloadedQuery<OperationType, Record<number, unknown>>;
}): JSX.Element {
  const data = usePreloadedQuery(WaterIntakeQuery, queryReference);
  const [intake, setIntake] = useState(data.waterIntake);
  const [commitMutation, areMutationsInFlight] =
    useMutation(WaterIntakeMutation);

  if (areMutationsInFlight) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text
        style={[styleSheet.waterMeterLabelStyle, styleSheet.waterMeterStyle]}
      >
        Water intake for today is
      </Text>
      <Text style={styleSheet.waterMeterStyle}>{intake}</Text>
      <Button
        onPress={() => {
          const increment = intake + 1;
          commitMutation({
            variables: {
              input: increment,
            },
          });
          setIntake(increment);
        }}
        title="I drank more!"
        color="blue"
      />
    </View>
  );
}
