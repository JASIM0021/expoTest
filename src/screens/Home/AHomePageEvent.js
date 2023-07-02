import React from "react";
import { View, Text, Image } from "react-native";
import { Surface, Card, Button } from "react-native-paper";

const AHomePageEvent = () => {
  // const onFilterClick = React.useCallback(() => {
  //   // Please sync "A Event Filter" to the project
  // }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Surface style={{ elevation: 4, margin: 8, borderRadius: 50 }}>
        <View
          style={{
            width: 322,
            height: 322,
            borderColor: "lightblue",
            borderWidth: 4,
            borderRadius: 50,
          }}
        />
      </Surface>

      <Surface style={{ elevation: 4, margin: 8, borderRadius: 50 }}>
        <View
          style={{
            width: 424,
            height: 424,
            borderColor: "lightblue",
            borderWidth: 4,
            borderRadius: 50,
          }}
        />
      </Surface>

      <Text
        style={{
          fontSize: 24,
          color: "lightseagreen",
          marginLeft: 39,
          marginTop: 32,
        }}
      >
        Upcoming Events
      </Text>

      <Card style={{ margin: 16 }}>
        {/* <Card.Cover
          source={require("/rectangle-363@2x.png")}
          style={{ height: 230 }}
        /> */}

        <Card.Title title="Hotel ABC 47" style={{ marginTop: 24 }} />
        <Card.Content>
          <Text style={{ color: "lightsteelblue" }}>
            California (Distance 2km)
          </Text>
        </Card.Content>

        <Card.Actions>
          <Button icon="thumb-up" mode="contained" color="lightseagreen">
            Interested
          </Button>
        </Card.Actions>
      </Card>

      {/* Render other cards similarly */}

      <View style={{ alignItems: "center", marginTop: 16 }}>
        <Button
          icon="filter"
          mode="contained"
          // onPress={onFilterClick}
          style={{ width: 64, height: 64, borderRadius: 32 }}
          contentStyle={{ height: 64, width: 64 }}
        />
      </View>

      {/* Render other components similarly */}
    </View>
  );
};

export default AHomePageEvent;
