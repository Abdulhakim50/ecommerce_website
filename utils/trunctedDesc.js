

const truncatedesc = (str) => {
    if(str.length<150)return str
  

   return str.substring(0,150) + "...";
}

export default truncatedesc