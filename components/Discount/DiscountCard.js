import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import IonIcons from "react-native-vector-icons/Ionicons";
import { BoltLightText, BoltSemiBoldText } from "../CustomText";

export default function DiscountCard({ data }) {
	const { name, price, rating, discount, image } = data;

	return (
		<View style={tw`flex`}>
			<View style={tw`flex-col mr-4 justify-between`}>
				<View style={tw`flex-row items-center mt-5 h-32 w-64 relative`}>
					<View
						style={{
							...tw`absolute bg-white rounded-full top-2 left-2 px-2.5 py-1`,
							zIndex: 100,
							elevation: 100,
						}}
					>
						<BoltSemiBoldText style={tw`text-xs text-red-500`}>
							-{discount}
						</BoltSemiBoldText>
					</View>
					<View
						style={{
							...tw`absolute bg-white rounded-full bottom-2 right-2 px-2.5 py-1`,
							zIndex: 100,
							elevation: 100,
						}}
					>
						<BoltSemiBoldText style={tw`text-xs text-black`}>
							70-75 min
						</BoltSemiBoldText>
					</View>
					<TouchableOpacity style={tw`w-full h-full`}>
						<Image
							source={image}
							style={tw`w-full h-full rounded-lg`}
						/>
					</TouchableOpacity>
				</View>
				<View style={tw`flex-col justify-between mt-1.5`}>
					<View style={tw`flex-row justify-between`}>
						<View style={tw`flex-col justify-between`}>
							<View style={tw`flex-row`}>
								<BoltSemiBoldText style={tw`text-lg`}>
									{name.length > 25
										? name.substring(0, 25 - 3) + "..."
										: name}
								</BoltSemiBoldText>
							</View>
						</View>
						<View style={tw`flex flex-row items-center`}>
							<IonIcons name="ios-star" size={13} color="#000" />
							<BoltSemiBoldText style={tw`text-lg ml-1`}>
								{rating}
							</BoltSemiBoldText>
						</View>
					</View>
					<View style={tw`flex flex-row items-center`}>
						<BoltLightText style={tw`text-sm`}>
							{price} FCFA
						</BoltLightText>
					</View>
				</View>
			</View>
		</View>
	);
}
