import React, { useEffect } from 'react';
import { View,Text,Button,Image } from 'react-native';
import {useState} from 'react'

import Logo from '../../../assets/logo.png';

import { styles } from './style';
import { Divider } from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import { BuyButton } from '../BuyButton';
import { CarModel } from './props';
import { handleNextItem, loadCarData, handlePreviousItem } from './actions';

export default function CardView() {
    const [carData,setCarData] = useState<CarModel | null>(null);

    useEffect(() => {
        (async() => {
            await loadCarData(1,setCarData);
        })();
    },[])

    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image style={styles.imageLogo} source={Logo}/>
        </View>
    );
    const renderCarDetails = () => (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.carBrand}>Laborghini</Text>
            <Text style={styles.carName}>{carData?.carName}</Text>
        </View>
    );
    const renderCarImage = () => (
        <Image style={styles.image} 
        source={{uri: 
        `${CAR_ASSETS_BASE_URL}${carData?.id}.png`}}/>
    );
    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button title='<' color={"#01A6B3"} onPress={() => handlePreviousItem(carData, setCarData)}/>
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button title='>' color={"#01A6B3"} onPress={() => handleNextItem(carData,setCarData)}/>
        </View>
    );

  return <View style={styles.imageContainer}>
            {renderLogoBox()}
            <Divider />
            {renderCarDetails()}
            {renderCarImage()}
            <Divider />
            <BuyButton />
            {renderPriceControls()}
        </View>
  
}