// split karar jonno

const lyrics='is this the real life? is this just fantasy? caught on a landslide, no escape from reality';

const parts= lyrics.split(" ");
const sentence= lyrics.split("?");
const letter= lyrics.split("");
console.log(letter);

const partial= lyrics.slice(3,7);
console.log(partial)


// substring substr

const partial2= lyrics.substring(3,7);
console.log(partial2)


const lines= [
    'is this the real life?',
    'is this just fantasy?',
    'caught on a landslide,',
    'no escape from reality'
];

const newSong=lines.join(";");
console.log(newSong);

const num1=25;
const num2=45;

const gap= num1-num2;
if(gap< 5){
    console.log("become friends");
}
else{
    console.log("do not become friends");
}