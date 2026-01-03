const PRICING = {
  led: { min: 900, max: 1500 },
  acp: { min: 1200, max: 2500 },
  threeD: { min: 1800, max: 4000 }
};

function calculateEstimate(type, width, height) {
  if (!PRICING[type] || width <= 0 || height <= 0) {
    return null;
  }

  const area = width * height;
  return {
    min: Math.round(area * PRICING[type].min),
    max: Math.round(area * PRICING[type].max)
  };
}
