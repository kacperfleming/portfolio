const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','w','x','y','z','0','1','2','3','4','5','6','7','8','9','?','!','@'];

export const randNum = (min, max) => Math.floor(Math.random() * (max-min) + min + 1);
export const randChar = () => chars[randNum(0, 36)];