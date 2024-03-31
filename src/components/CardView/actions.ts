import { fetchGetCarData } from "../../api/getCars";
import { CarModel } from "./props";

export const handlePreviousItem = async(CarData: CarModel | null,setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try{
        if(CarData && CarData?.id > 1){
            const response = await fetchGetCarData(CarData.id - 1);
            if(response){
                setCarData(response);
            }
        }
    }catch(error){
        console.log("Erro ao chamar a API: ", error);
        setCarData(null);
    }
};

export const handleNextItem = async(CarData: CarModel | null,setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try{
        if(CarData && CarData?.id < 10){
            const response = await fetchGetCarData(CarData.id + 1);
            if(response){
                setCarData(response);
            }
        }
    }catch(error){
        console.log("Erro ao chamar a API: ", error);
        setCarData(null);
    }
};

//Fazer uma solicitação pra API
export const loadCarData = async(id: number,setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    const response = await fetchGetCarData(id);
    
    try{
        if(response){
            setCarData(response);
        }
    }catch(error){
        console.log("Erro ao buscar a API: ", error)
        setCarData(null);
    }
};