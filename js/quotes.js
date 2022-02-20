const quotes = [
    {
        quote: "사랑 받고 싶다면 사랑하라, 그리고 사랑스럽게 행동하라.",
        author: "Benjamin Franklin",
    },
    {
        quote: "사람들이 너를 내버려두면 삶은 아름다울 거야",
        author: "Charlie Chaplin",
    },
    {
        quote: "들은 것은 잊어버리고, 본 것은 기억하고 직접 해본 것은 이해한다",
        author: "Confucius",
    },
    {
        quote: "남에게 이기는 방법의 하나는 예의범절로 이기는 것이다.",
        author: "Josh Billings",
    },
    {
        quote: "계획 없는 목표는 한낱 꿈에 불과하다.",
        author: "Antoine de Saint-Exupery",
    },
    {
        quote: "우리가 어떤 형태로든 '될대로 되라지!'라고 할 때 마다 무슨 일이 생긴다.",
        author: "Stella Terrill Mann",
    },
    {
        quote: "같은 것을 좋아하고 싫어하는 것이 바로 진정한 우정이다.",
        author: "Sallust",
    },
    {
        quote: "친구를 고르는 데는 천천히, 친구를 바꾸는 데는 더 천천히.",
        author: "Benjamin Franklin",
    },
    {
        quote: "이별의 아픔 속에서만 사랑의 깊이를 알게 된다.",
        author: "George Eliot",
    },
    {
        quote: "수마일의 거리가 당신과 친구를 떼어놓을 수도 있다… 하지만 사랑하는 누군가와 정말 함께 있고 싶다면, 이미 거기 가있지 않겠는가?",
        author: "Richard Bach",
    }
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")




const todaysQuote = quotes[Math.floor(Math.random() * quotes.length )];

quote.innerText = `${todaysQuote.quote}`;
author.innerText = `-${todaysQuote.author}-`;