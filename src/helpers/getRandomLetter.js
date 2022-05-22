const letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


export const getRandomLetter = () =>{
    let num = Math.floor(Math.random() * (letters.length - 0))
    return letters[num]
}