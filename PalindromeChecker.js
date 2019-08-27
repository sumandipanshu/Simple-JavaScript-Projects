function palindrome(str) {

    let regex = /[^a-z0-9]*/ig;
    str = str.replace(regex, '');
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i].toUpperCase() !== str[str.length - i - 1].toUpperCase()) {
            return false;
        }
    }
    return true;
}

palindrome("A man, a plan, a canal. Panama");