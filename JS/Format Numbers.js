function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

pad("3", 3);    // => "003"
pad("123", 3);  // => "123"
pad("1234", 3); // => "1234"
