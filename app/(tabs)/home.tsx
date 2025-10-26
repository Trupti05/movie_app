import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary"
    >
      <Image
        source={images.bg}
        className="absolute w-full z-0 "/>

        <ScrollView className="flex-1 p-5" 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{minHeight: "100%", paddingBottom: 10 }}>
          <Image source={icons.logo}
          className="w-12 h-10 mt-20 mb-5 mx-auto"/>

          <View className="flex-1 mt-5 justify-center items-center">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />

          </View>
        </ScrollView>
    </View>
  )
}

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       <StatusBar barStyle="dark-content" />
//     <View className="flex-1 justify-center items-center">
//       <Text className="text-5xl text-dark-200 text-center
//        font-bold">Welcome! </Text>
// {/*        
//        <Link href="/movie/avengers">Avengers</Link>
//        <Link href="/movie/black-widow">Black Widow</Link>
//        <Link href="/movie/spider-man">Spider Man</Link> */}

//     </View>
//     </SafeAreaView>
//   );
// }
