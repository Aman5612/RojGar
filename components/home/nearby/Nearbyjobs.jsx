import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import NearbyJobCard from "@/components/common/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";
import { useFetch } from "@/hook/useFetch";

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("search", {
    query: "Full Stack Developer",
    num_pages: 1,
  });

  // console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity
          style={styles.seeAll}
          onPress={() => router.navigate("Jobs")}
        >
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              key={`nearby-job-${job?.job_id}`}
              job={job}
              handleNavigate={() => {
                router.push(`JobDetails/${job.job_id}`);
              }}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
