const parseStatsBlock = (txt) => {
    const getOrDefault = (arr, i, def="") => {
      if(arr && arr.length > i){
        return arr[i];
      }
  
      return def;
    }
      
    const lines = txt.split('\n');
    const names = getOrDefault(lines, 0).split(",")
    const handToHand =  getOrDefault(lines, 2).split(',').map(w => w.trim());
    const ranged  = getOrDefault(lines, 4).split(',').map(w => w.trim());
    
    
    return {
      name: getOrDefault(names, 0).trim(),
      type: getOrDefault(names, 1).trim(),
      chars: getOrDefault(lines, 1).split(',').map(w => w.trim()),
      handToHand: {
        damageDice: getOrDefault(handToHand, 0),
        fumble: getOrDefault(handToHand, 1),
        critical: getOrDefault(handToHand, 2),
        hitRolls: getOrDefault(lines, 3).split(',').map(w => w.trim())
      },
      rangeStats: {
        maxRange: getOrDefault(ranged, 0),
        damageDice: getOrDefault(ranged, 1),
        fumble: getOrDefault(ranged, 2),
        critical: getOrDefault(ranged, 3),
        hitRanges: getOrDefault(lines, 5).split(',').map(w => w.trim()),
        hitRolls: getOrDefault(lines, 6).split(',').map(w => w.trim())
      },
      notes: lines.slice(7, 10)
    }
  }
  
const parseStats = (txt) => {
    try {
      const blocks = txt.split("@:").map(l => l.trim()).filter(l => l !== "");
      return blocks.map(b => parseStatsBlock(b))
    } catch(e) {
      console.error(e);
      return [];
    }
  }
  
const parseStyle = (txt) => JSON.parse(txt);
const parseLabels = (txt) => JSON.parse(txt);

export default {
  parseStats,
  parseStyle,
  parseLabels
};