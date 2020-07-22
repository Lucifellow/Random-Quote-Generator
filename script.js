

const TOTAL_COLORS=257;
const DARK_COLOR=100;
const LIGHT_COLOR=200;


 /* 
    quotes with name of authors stored in an array of objects

    sources of quotes and authors: 
    https://www.wiseoldsayings.com/short-inspirational-quotes/ 
    https://www.curatedquotes.com/inspirational-quotes/short/

*/

let quotesArr=[
    {
        quote:"Write it on your heart that every day is the best day in the year.",
        author:"Ralph Waldo Emerson"
    },
    {
        quote:"Perfection is not attainable, but if we chase perfection we can catch excellence.",
        author:"Vince Lombardi"
    },
    {
        quote:"Everything you've ever wanted is on the other side of fear.",
        author:"George Addair"
    },
    {
        quote:"Nothing is impossible, the word itself says ‘I’m possible.",
        author:"Audrey Hepburn"
    },
    {
        quote:"There are two ways of spreading light: to be the candle or the mirror that reflects it",
        author:"Edith Wharton"
    },
    {
        quote:"Failure is the condiment that gives success its flavor. ",
        author:"Truman Capote"
    },
    {
        quote:"It is never too late to be what you might have been.",
        author:"George Eliot"
    },
    {
        quote:"Whatever you are, be a good one.",
        author:"Abraham Lincoln"
    },
    {
        quote:"If you dream it, you can do it.",
        author:"Walt Disney"
    },
    {
        quote:"Never, never, never give up.",
        author:"Winston Churchill"
    },
    {
        quote:"Don’t wait. The time will never be just right.",
        author:"Napoleon Hill"
    },
    {
        quote:"If not us, who? If not now, when?",
        author:"John F. Kennedy"
    },
    {
        quote:"Everything you can imagine is real.",
        author:"Pablo Picasso"
    },
    {
        quote:"I can, therefore I am.",
        author:"Simone Weil"
    },
    {
        quote:"Remember no one can make you feel inferior without your consent.",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"Turn your wounds into wisdom.",
        author:"Oprah Winfrey"
    },
    {
        quote:"Wherever you go, go with all your heart.",
        author:"Confucius"
    },
    {
        quote:"Do what you can, with what you have, where you are.",
        author:"Theodore Roosevelt"
    },
    {
        quote:"Hope is a waking dream.",
        author:"Aristotle"
    },
    {
        quote:"Action is the foundational key to all success.",
        author:"Pablo Picasso"
    },
    {   
        quote:"Do one thing every day that scares you.",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"You must do the thing you think you cannot do.",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"Life is trying things to see if they work.",
        author:"Ray Bradbury"
    },
    {
        quote:"Don’t regret the past, just learn from it.",
        author:"Ben Ipock"
    },
    {
        quote:"Believe you can and you’re halfway there.",
        author:"Theodore Roosevelt"
    },
    {
        quote:"Live what you love.",
        author:"Jo Deurbrouck"
    },
    {
        quote:"The power of imagination makes us infinite.",
        author:"John Muir"},
    {  
        quote:"To be the best, you must be able to handle the worst.",
        author:"Wilson Kanadi"
    },
    {
        quote:"It does not matter how slowly you go as long as you do not stop.",
        author:"Confucius"
    }
];

//returns a random Index from 0 to len
const randIndex=(len)=>{
    return Math.floor(Math.random()*Math.floor(len))
};

let randomIndex=randIndex(quotesArr.length);
//get random quote and respective author
let quote = quotesArr[randomIndex].quote;
let author ="- "+quotesArr[randomIndex].author;


function displayQuoteAuthor(){
    //adds random quote to #text paragraph
    $("#text").html(`<em>" ${quote} "<em>`)
    

    //adds author to #author_name paragraph
    $("#author").html(`${author}`)
    
     //opens twitter with quote and author
     $("#tweet-quote").attr("href","https://www.twitter.com/intent/tweet?&text="+encodeURIComponent(` "${quote}"  ${author}`));  
}


const randShade=(color)=>{
    return Math.floor(Math.random()*Math.floor(color))
}

 //random shades of red , green, and blue color
 let red= randShade(TOTAL_COLORS);
 let blue =randShade(TOTAL_COLORS);
 let green= randShade(TOTAL_COLORS);

//JQuery when the document has finish loading 
$(document).ready(function(){

    //animate button
    $("#new-quote").addClass("animate__animated animate__fadeIn");

    //display author and quote
    displayQuoteAuthor();
 

    //new quote button click
    $("#new-quote").click(function(){
        randomIndex = randIndex(quotesArr.length)
        quote=quotesArr[randomIndex].quote;
        author="- "+quotesArr[randomIndex].author

        //changing color css
        
        //makes darker shade of red 
        if(red>LIGHT_COLOR){

            $("#text").css("color",`rgb(${red=red-DARK_COLOR},${green},${blue})`);
            $("#author").css("color",`rgb(${red=red-DARK_COLOR},${green},${blue})`);
            $("#new-quote").css("background-color",`rgb(${red=red-DARK_COLOR},${green},${blue})`);
        }else{
            $("#text").css("color",`rgb(${red},${green},${blue})`);
            $("#author").css("color",`rgb(${red},${green},${blue})`);
            $("#new-quote").css("background-color",`rgb(${red},${green},${blue})`);
        }


        
        $("body").css("background",`radial-gradient(circle, rgba(${red},${green},${blue},1) 
                        0%,rgba(232,238,229,1) 60%,
                        rgb(${red=Math.floor(Math.random()*Math.floor(TOTAL_COLORS))},
                        ${green=Math.floor(Math.random()*Math.floor(TOTAL_COLORS))}, 
                        ${blue=Math.floor(Math.random()*Math.floor(TOTAL_COLORS))}) 100%)`);
        $("body").css("background-repeat","no-repeat");
        $("body").css("background-attachment","fixed");

        //display random quote with author with new colors 
        displayQuoteAuthor();
    });
    
});