// kono string er vitore kono word khuje pete hole ei method use korte hobe

const lyrics='is this the real life? is this just fantasy? caught on a landslide, no escape from reality';

const doesExist= lyrics.includes('landslide');
console.log(doesExist);


// item 2

console.log(lyrics.indexOf('life'));
console.log(lyrics.indexOf('is'));


// item 3

if(lyrics.indexOf('fantasy') !== -1){
    console.log('does exist');
}
else{
    console.log('doesnt exist');
}


// startswith endswith

const fileName="fantasy.exe";
const fileName1="reality.exe";

console.log(fileName.startsWith("fantasy"));
console.log(fileName1.endsWith(".exe"));
