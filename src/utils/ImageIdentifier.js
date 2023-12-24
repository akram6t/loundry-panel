import { BASE_URL } from "./Constant";

export function ImageItentifier(url){
    if(url.includes('https://')){
        return url;
    }else{
        return BASE_URL + url;
    }
}