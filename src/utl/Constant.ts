type Color={
    Primary:'',
    Secondary:string,
    Thrid:string,
    Fourth:string,
    White:string,
    Black:string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Colors:Color={
    Primary:'',
    Secondary:'',
    Thrid:'',
    Fourth:'',
    White:'',
    Black:''
}
export default {
    Colors
}

export const getTime=(dateTimeInput)=>{
    const selectedDate = new Date(dateTimeInput);
    // Extract the time without seconds
    const hours = selectedDate.getHours();
    const minutes = selectedDate.getMinutes();
    // Format the time as HH:mm
    return `${hours}:${minutes}`;
  }