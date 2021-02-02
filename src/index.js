module.exports = function check(str, bracketsConfig) {

    return str.length % 2 != 0 ? false : isValid(str)

    function isValid(str) {
        let stack = []
        let openSimbols = bracketsConfig.map(el => el[0].toString())
        let closeSimbols = bracketsConfig.map(el => el[1].toString())

        for (let i = 0; i < str.length; i++) {
            if (openSimbols.includes(str[i]) && closeSimbols.includes(str[i]) && stack.includes(str[i])) {
                let openBracket = stack.pop()
                let closeBracket = closeSimbols[openSimbols.indexOf(openBracket)]

                if (closeBracket !== str[i]) return false

            } else if (openSimbols.includes(str[i])) {
                stack.push(str[i])
            } else if (closeSimbols.includes(str[i])) {
                let openBracket = stack.pop()
                let closeBracket = closeSimbols[openSimbols.indexOf(openBracket)]

                if (closeBracket !== str[i]) return false
            }
        }
        return true
    }

}
