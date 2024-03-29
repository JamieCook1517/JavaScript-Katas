function calculateDivisors(num) {
    const arr = []
    for(let i = num - 1; i > 1; i--){
      if(i%3 === 0 || i%5 === 0) arr.push(i);
    }
    let total = arr.reduce((acc, number) => acc + number, 0);
    return total;
  }

function tillAddition (cash) {
  const pennyLookUp = {
    '1p': 0.01,
    '2p': 0.02,
    '3p': 0.03,
    '5p': 0.05,
    '10p': 0.10,
    '20p': 0.20,
    '50p': 0.50,
    '£1': 1,
    '£2': 2,
    '£5': 5,
    '£10': 10,
    '£20': 20,
    '£50': 50
  };
  let pounds = Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });
  let total = 0;
  for(const key in cash){
    total += pennyLookUp[key] * cash[key];
  }
  return pounds.format(total);
};

function updateRemoteStudents (str) {
  const newArray = str.map((obj)=>{
    const newObject = {...obj};
    if(!newObject.hasOwnProperty('location')){
      newObject.location='remote';
    }
    return newObject;
  });
  return newArray;
}

function getTweetData (tweet) {
  const obj = {};
  obj.tags = [];
  obj.mentions = [];
  obj.tagCount = 0;
  obj.mentionCount = 0;
  obj.length = tweet.length;
  const tagsSet = new Set();
  const mentionsSet = new Set();
  for(let i = 0; i<tweet.length; i++){
    if(tweet[i]==='#'){
      let tagString = tweet.slice(i);
      if(tagString.includes(' ')){
        tagString=tagString.slice(0,tagString.indexOf(' '));
      }
      tagsSet.add(tagString);
    }
    if(tweet[i]==='@'){
      let mentionString = tweet.slice(i);
      if(mentionString.includes(' ')){
        mentionString=mentionString.slice(0,mentionString.indexOf(' '));
      }
      mentionsSet.add(mentionString);
    }
  }
  obj.tags.push(...tagsSet);
  obj.mentions.push(...mentionsSet);
  obj.tagCount=obj.tags.length;
  obj.mentionCount=obj.mentions.length;
  return obj;
};

function dnaPairs(dna) {
  const arr = [];
  for(const char of dna){
    if(/g/i.test(char)){ // trying to be a little fancy
      const subArray = char.toUpperCase().match(/g/gi);
      subArray.push('C');
      arr.push(subArray);
    }
    if(/c/i.test(char)){
      const subArray = char.toUpperCase().match(/c/gi);
      subArray.push('G');
      arr.push(subArray);
    }
    if(/t/i.test(char)){
      const subArray = char.toUpperCase().match(/t/gi);
      subArray.push('A');
      arr.push(subArray);
    }
    if(/a/i.test(char)){
      const subArray = char.toUpperCase().match(/a/gi);
      subArray.push('T');
      arr.push(subArray);
    }
  }
  return arr;
}

module.exports = {calculateDivisors, tillAddition, updateRemoteStudents, getTweetData, dnaPairs};