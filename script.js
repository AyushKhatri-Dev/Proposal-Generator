document.getElementById('proposalForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const favorite = document.getElementById('favorite').value;
    const style = document.getElementById('style').value;


    const romanticQuotes = [
        `Hey ${name}, just like ${favorite}, you warm my heart every day. Will you be mine forever?`,
        `${name}, you are the reason my mornings are brighter, like a perfect cup of ${favorite}. Will you share forever with me?`,
        `From the moment I saw you, ${name}, my heart knew that life would be sweeter with you, just like ${favorite}. Will you be mine?`
    ];

    const funnyQuotes = [
        `Yo ${name}, you're cooler than ${favorite}, and that's saying something. Wanna be my partner-in-crime?`,
        `${name}, life without you is like ${favorite} without sugar. Let's not let that happen! Be mine?`,
        `Roses are red, ${favorite} is sweet, and if you don’t say yes, I’ll fall off my feet!`
    ];

    const poeticQuotes = [
        `${name}, like the sun rises and sets, my heart beats only for you. With ${favorite} by our side, will you say yes?`,
        `Just like ${favorite} fills the air with fragrance, your love fills my soul with joy, ${name}. Will you be mine for eternity?`,
        `${name}, your presence is as constant as the moonlight, and my love for you flows like poetry. With ${favorite} in hand, will you say yes?`
    ];


    let proposal;
    if (style === 'romantic') {
        proposal = romanticQuotes[Math.floor(Math.random() * romanticQuotes.length)];
    } else if (style === 'funny') {
        proposal = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];
    } else if (style === 'poetic') {
        proposal = poeticQuotes[Math.floor(Math.random() * poeticQuotes.length)];
    }

    document.getElementById('proposalText').innerText = proposal;
    document.getElementById('proposalOutput').style.display = 'block';
});