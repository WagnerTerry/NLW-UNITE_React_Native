import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Props = {
    image?: string
    onChangeAvatar?: () => void
}

export function Credential({ onChangeAvatar, image }: Props) {
    return (
        <View className="w-full self-stretch items-center">
            <Image
                source={require("@/assets/ticket/band.png")}
                className="w-24 h-52 z-10"
            />

            <View className="bg-black/20 self-stretch items-center pb-6 border border-white/1- mx-3 rounded-lg -mt-5">
                <ImageBackground
                    source={require("@/assets/ticket/header.png")}
                    className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
                >
                    <View className="w-full flex-row items-center justify-between">
                        <Text className="text-zinc-50 text-sm font-bold">Unite summit</Text>
                        <Text className="text-zinc-50 text-sm font-bold">#123</Text>

                    </View>

                    <View className="w-40 h-40 bg-black rounded-full" />

                </ImageBackground>

                {image ? (
                    <Image
                        source={{ uri: image }}
                        className="w-36 h-36 rounded-full -mt-24"
                    />
                ) : (
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPressOut={onChangeAvatar}
                    >
                        <View
                            className="w-36 h-36 rounded-full -mt-24 bg-gray-400 items-center justify-center"
                        >
                            <Feather name="camera" color={colors.green[400]} size={32} />

                        </View>
                    </TouchableOpacity>
                )
                }

                <Text className="font-bold text-2xl text-zinc-50 mt-4">
                    Wagner Gonçalves
                </Text>

                <Text className="font-regular text-base text-zinc-50 mb-4">
                    goncalveswagner15@gmail.com
                </Text>

                <Image
                    source={require("@/assets/ticket/qrcode.png")}
                    className="w-32 h-32"
                />

                <TouchableOpacity
                    activeOpacity={0.7}
                    className="mt-6"
                >
                    <Text className="font-body text-orange-500 text-sm">
                        Ampliar QRCode
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}