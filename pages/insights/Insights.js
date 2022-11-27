import { StyleSheet, Text, View } from "react-native";

const Insights = () => {
  return (
    <View>
      <View>
        <Text style={styles.insightsTextStyle}>Insights</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  insightsTextStyle: {
    textAlign: "center",
    marginTop: 70,
    marginLeft: 15,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "bold",
  },
});

export default Insights;
