export function MillToDate(ms) {
  var miliseconds = Date.now() - ms;
  var seconds = Math.floor(miliseconds / 1000);
  var minutes = Math.floor(miliseconds / 60000);
  var hours = Math.floor(miliseconds / 60000 / 60);
  var days = Math.floor(miliseconds / 60000 / 60 / 24);

  if (days >= 7) return Math.floor(days / 7) + "w";
  else if (hours >= 24) return Math.floor(hours / 24) + "d";
  else if (minutes >= 60) return Math.floor(minutes / 60) + "h";
  else if (seconds >= 60) return Math.floor(seconds / 60) + "m";
  else return Math.floor(seconds) + "s";
}
