export function saveResult(templateName, difficulty, timePassed) {
  const currentResult = {
    layout: templateName,
    difficulty: difficulty,
    time: timePassed,
  };

  let results = JSON.parse(localStorage.getItem('gameResults')) || [];

  if (results.length >= 5) {
    results.shift();
  }
  results.push(currentResult);

  results.sort((a, b) => a.time - b.time);

  localStorage.setItem('gameResults', JSON.stringify(results));
}
