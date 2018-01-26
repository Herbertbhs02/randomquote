
var quotes=['Be the change that you wish to see in the world.-Mahatma Gandhi',
'If you tell the truth you do not have to remember anything.-Elbert Hubbard',
'I have learned that people will forget what you said people will forget what you did but people will never forget how you made them feel. -Maya Angelou',
'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Friedrich Nietzsche',
'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. -Ralph Waldo Emerson',
'It does not do t -Martin Luther King Jr',
'The man who does not read has no advantage over the man who cannot read.-Mark Twain'
,'The richest man is not he who has the most, but he who needs the least.-Unknown Author',
' Even if you are on the right track, you will get run over if you just sit there.-Will Rogers'];

function Quote(){

	randomNumber = Math.floor(Math.random()*quotes.length);
	
     document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]; 
 }