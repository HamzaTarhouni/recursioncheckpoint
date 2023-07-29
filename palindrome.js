function palindrome(ch){
    if(ch.length<=2){
        return true
    }
    else if (ch[0]===ch[ch.length -1]){
        
        
        return palindrome(ch.substring(1,ch.length -1))
        
    }
    return false
}