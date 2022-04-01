function capitalizeString(string) {
 const capitalCharacter = string.toLowerCase().replace( string[0], string[0].toUpperCase());
 return capitalCharacter; 
}

module.exports = capitalizeString;
