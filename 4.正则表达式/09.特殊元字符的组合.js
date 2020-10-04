"abcdddmnabcdddmnppp".replace(/abc.*mn/, function (match) {
  console.log(match);
}); //abcdddmnabcdddmn
"abcdddmnabcdddmnppp".replace(/abc.*?mn/, function (match) {
  console.log(match);
}); //abcdddmn
"abcmnabcdddppp".replace(/abc.+?mn/, function (match) {
  console.log(match);
}); //''
