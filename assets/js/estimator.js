const pricing = {
  led: { min: 900, max: 1500 },
  acp: { min: 1200, max: 2500 },
  threeD: { min: 1800, max: 4000 }
};

function calculateEstimate(type, width, height) {
  const area = width * height;
  const min = area * pricing[type].min;
  const max = area * pricing[type].max;
  return { min, max };
}
