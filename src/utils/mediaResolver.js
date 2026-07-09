/**
 * PWP Intelligent Media Engine - Salience Map Database
 * Resolves optimal crop focal points dynamically for site assets.
 */
const SALIENCE_MAP = {
  'hero-range-action.jpg': { x: '55%', y: '45%' },
  'cheree-at-range.jpg': { x: '65%', y: '35%' },
  'training-scene.jpg': { x: '50%', y: '40%' },
  'dez-tactical.jpg': { x: '50%', y: '35%' },
  'hands-on-training.jpg': { x: '50%', y: '50%' },
  'instructor-shooting.jpg': { x: '60%', y: '40%' },
  'team-partnership.jpg': { x: '50%', y: '45%' }
};

export function getFocalPoint(imagePath) {
  if (!imagePath) return { x: '50%', y: '50%' };
  
  // Extract filename from path (e.g. /images/cheree-at-range.jpg -> cheree-at-range.jpg)
  const filename = imagePath.split('/').pop();
  
  if (SALIENCE_MAP[filename]) {
    return SALIENCE_MAP[filename];
  }
  
  // Default fallback (center/center)
  return { x: '50%', y: '50%' };
}
