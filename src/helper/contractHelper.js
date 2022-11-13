import { ethers } from "ethers";

export const getContract =  (abi, address, library) => {
  try{
    return new ethers.Contract(address, abi, library.getSigner())
  }
  catch(err){
    return false;
  }
}



export const formatPrice = (num) => {
  //return parseFloat(num.toFixed(decimals)).toLocaleString();
  return new Intl.NumberFormat('en-IN').format(num).toFixed(5);
}


