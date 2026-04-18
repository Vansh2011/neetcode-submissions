class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let lenS = s.length;
        let lenT = t.length;
        let sameCharacters = 0;
        let lengthOfSameCharacters = lenS === lenT;
        let isAnag = false;
        if(lengthOfSameCharacters){
            let tArr = t.split('');
            for ( let i = 0 ; i < lenS ; i++){
                for ( let j = 0 ; j < tArr.length ; j++){
                    if(tArr[j] === s[i]){
                        sameCharacters += 1;
                        tArr.splice(j, 1);
                        break;
                    }
                }
            }
            if(sameCharacters === lenS){
                isAnag = true;
            }
        }
        return isAnag
    }
}