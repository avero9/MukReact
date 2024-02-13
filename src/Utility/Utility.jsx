import mLogo from "../Assets/Images/Muk_Icon.png"

const mukDefaultImg = (onErrorEvent) => onErrorEvent.target.src = mLogo;
export const removeDashesAndUnderscores  =(text)=> text.replace(/[\-_]/g,' ');
export const cleanText =(text)=>text.replace(/[^ -~]+/g," ")
export default mukDefaultImg;