// var array = [
//     {
//         id: 1,
//         name: "hungken",
//         age: 18
//     },
//     {
//         id: 2,
//         name: "thuan",
//         age: 20
//     },
//     {
//         id: 3 ,
//         name : "tm",
//         age: 20
//     }
// ]

// // console.log(array)

// // function arrays (array,index,originArray){
// //     return{
// //         index: index,
// //         id: array.id,
// //         name: `ten:  ${array.name}`,
// //         age: `tuoi: ${array.age}`,
// //         originArray: originArray,
// //     }
// // }

// // var newArray = array.map(arrays);

// // console.log(newArray);



// // var tongtuoi = 0;
// // for(var arr of array){
// //     tongtuoi += arr.age;
// // }
// // console.log(tongtuoi)
// // var i =0;
// // function tongAge (accumulator/*biến lưu trữ  */, currentValue /*biến hiện tại */, currentIndex /*chỉ mục hiện tại */, originArray/*array được gọi */){
// //     i++
// //     var total = accumulator + currentValue;
// //     console.table({
// //         'lượt chạy :' : i,
// //         'biến tích trữ : ': accumulator,
// //         'biến công thêm: ': currentValue.age,
// //         'biến tổng cộng: ': total,

// //     });
// //     console.log(currentValue);
// //     return accumulator + currentValue.age , total;
// // }

// var totalAge = array.reduce(function(accumulator,currentValue){
//     return accumulator + currentValue.age;
// });


// //bai tap :

// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]
// // var totalGold =0;
// // function getTotalGold(arr) { 
// //     return arr.reduce((acc,curr) => { return acc + curr.gold; },0); 
// //     }

// // // Expected results:
// // console.log(getTotalGold(sports)) // Output: 23

// var totalCoin  = sports.reduce(function(total, sports){
//     return total += sports.gold;

// },0)

// console.log(totalCoin)

// var numbers = [100,200,200,300,400];

// var totalMunber = numbers.reduce(function(total,number){
//     return total + number;
// })
// console.log(totalMunber);


// var depthArray = [1,2,[3,4],5,6,[7,8,9]];

// var flatArray =  depthArray.reduce(function(flatOutput,depthItem){
//     return flatOutput.concat(depthItem)
// },[])

// console.log(flatArray)

// var totalNameGold = sports.reduce(function(total,sport){
//     return total.concat(sport)
// },[])

// console.log(totalNameGold);


// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];
  



// function find (directors){
//     return directors.Director == "Christopher Nolan"
// }

// var findDirector = watchList.filter(find)
// console.log(findDirector);
// function calculateRating(findDirector){
//     return findDirector.reduce((acc,curr) => {return parseFloat( acc) + parseFloat(curr.imdbRating)/findDirector.length},0)
// }
// // return arr.reduce((acc,curr) => { return acc + curr.gold; },0); 
  
//   // Expected results
//  console.log(calculateRating(watchList)); // Output: 8.675
  
  
  

  
 
// // Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
//  function arrToObj(arr){
//      return arr.reduce(function(obj, current){
//          obj[current[0]] = current[1]
//          return obj
//      }, {})
//  }

// // Expected results:

// console.log(arrToObj(arr)) // { name: 'Sơn Đặng', age: 18 }


// function sumCb(a, b) {
//     return a+b;
// }
// function subCb(a, b) {
//     return a-b;
// }
// function multiCb(a, b) {
//     return a*b;
// }
// function divCb(a, b) {
//     return a/b;
// }
// function caculate(a, b, cb) {
//     return cb(a, b);
// }
// console.log(caculate(1,2,sumCb));
  
var courser =[
    'js',
    'php',
    'css'
]

var htmls = courser.map(function(courser){
    return `<h2>${courser}</h2>`;
});

console.log(htmls);