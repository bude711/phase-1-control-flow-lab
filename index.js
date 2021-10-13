function scuberGreetingForFeet(depth){
  if (depth <= 400) {
    return 'This one is on me!';
  } else if (2000 <= depth && depth < 2500){
    return 'I will gladly take your thirty bucks.';
  } else if (depth >= 2500) 
    return 'No can do.';
}

function ternaryCheckCity(city = 'NYC'){
 return city == 'NYC' ? 'Ok, sounds good.' : 'No go.';

}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
       return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return "Bye.";
  }
}