import { View, StatusBar, Text, ScrollView, TouchableOpacity, Alert, Modal } from "react-native";
import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
import { FontAwesome } from "@expo/vector-icons"
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker"
import { QRCode } from "@/components/qrcode";

export default function Ticket() {
    const [image, setImage] = useState("")
    const [expandQRCode, setExpandQRCode] = useState(false)


    async function handleSelectImage() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4]
            })

            if (result.assets) {
                console.log("result.assets[0].uri", result.assets[0].uri)
                setImage(result.assets[0].uri)
            }

        } catch (error) {
            console.log(error)
            Alert.alert("Foto", "Não foi possível selecionar a imagem.")
        }
    }
    return (
        <View className="flex-1 bg-green-500">
            <StatusBar barStyle="light-content" />
            <Header title="Minha Credencial" />
            <ScrollView
                className="-mt-28 -z-10"
                contentContainerClassName="px-8 pb-8"
                showsVerticalScrollIndicator={false}
            >
                <Credential
                    image={image}
                    onChangeAvatar={handleSelectImage}
                    onExpandQRCode={() => setExpandQRCode(true)}
                />

                <FontAwesome
                    name="angle-double-down"
                    color={colors.gray[300]}
                    size={24}
                    className="self-center my-6"
                />

                <Text className="text-white font-bold text-2xl mt-4">Compartilhar credencial</Text>
                <Text className="text-white font-regular text-base mt-1 mb-6">
                    Mostre ao mundo que você vai participar do Unite Summit!
                </Text>

                <Button
                    title="Compartilhar"
                />

                <TouchableOpacity
                    activeOpacity={0.7}
                    className="mt-10"
                >
                    <Text className="text-base text-white font-bold text-center mt-8">
                        Remover Ingresso
                    </Text>
                </TouchableOpacity>
            </ScrollView>

            <Modal visible={expandQRCode} statusBarTranslucent>
                <View className="flex-1 bg-green-500 items-center justify-center">
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setExpandQRCode(false)}
                    >
                        <QRCode value="teste" size={300} />
                        <Text className="font-body text-orange-500 text-sm mt-10 text-center">
                            Fechar
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}