// [1차] 캐시
// 캐시는 최신화해줘야 한다는 것 잊지 말기
// shift가 splice보다 훨씬 빠르다.
const cacheSize = 0;
const cities = ["Jeju", "Jeju", "Jeju", "Jeju", "Jeju", "Jeju", "Jeju"];

function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];
  const cacheHit = 1;
  const cacheMiss = 5;

  if (cacheSize === 0) return cities.length * cacheMiss;

  cities.forEach((v) => {
    let city = v.toLowerCase();

    if (cache.indexOf(city) !== -1) {
      cache = cache.filter((c) => c !== city);
      answer += cacheHit;
    } else {
      if (cache.length === cacheSize) cache = cache.shift();
      answer += cacheMiss;
    }

    cache.push(city);
  });

  return answer;
}

console.log(solution(cacheSize, cities));
