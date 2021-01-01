const templateStates = `@: Template monster
sp,ws,bs,s,t,w,br,int,pv
dmg
4,5,6,7,8,9,10,10,10,10,10,10
range, dmg
1-3, 4-12, 13-24, 25-36, 37+
8, 10, 11, MISS, MISS
note line 1
note line 2
note line 3

`;

const templateStatesAlternate = `@: Template monster, Optional Text
sp,ws,bs,s,t,w,br,int,pv
dmg, fum, crit
4,5,6,7,8,9,10,10,10,10,10,10
range, dmg, fum, crit
1-3, 4-12, 13-24, 25-36, 37+
8, 10, 11, MISS, MISS
note line 1
note line 2
note line 3

`;

const defaultStyle = `{
    "scale": 3.3,
    
    "bgColor": "#fff",
    "nameBgColor": "#fff",
    "typeBgColor": "#000",
    "headerBgColor": "#000",
    
    "nameColor": "#000",
    "typeColor": "#fff",
    "textColor": "#000",
    "headerColor1": "#fff",
    "headerColor2": "#fff",
    "notesColor": "#000",

    "borderColor": "#000",
    "nameBorder": "#000",
    "typeBorder": "",
    "headerBorder1": "",
    "headerBorder2": "",
    "textBorder": "",
    "notesBorder": "#000",

    "borderStroke1": "1",
    "borderStroke2": "0.5",
    "nameStroke": "0.3",
    "typeStroke": "",
    "headerStroke1": "",
    "headerStroke2": "",
    "textStroke": "",
    "notesStroke": "0.2",

    "headerFont": "emb_frijole",
    "textFont": "emb_frijole",
    "notesFont": "emb_indie_flower",

    "textScale1": 1,
    "textScale2": 0.7,
    "textScale3": 0.9
}`;

const heroquestStyle = `{
    "scale": 3.3,
    
    "bgColor": "#fff",
    "nameBgColor": "#fff",
    "typeBgColor": "#000",
    "headerBgColor": "#000",
    
    "nameColor": "#000",
    "typeColor": "#fff",
    "textColor": "#000",
    "headerColor1": "#fff",
    "headerColor2": "#fff",
    "notesColor": "#000",

    "borderColor": "#000",
    "nameBorder": "#000",
    "typeBorder": "",
    "headerBorder1": "",
    "headerBorder2": "",
    "textBorder": "",
    "notesBorder": "",

    "borderStroke1": "1",
    "borderStroke2": "0.5",
    "nameStroke": "0.3",
    "typeStroke": "",
    "headerStroke1": "",
    "headerStroke2": "",
    "textStroke": "",
    "notesStroke": "",

    "headerFont": "HeroQuest",
    "textFont": "HeroQuest",
    "notesFont": "HeroQuest",

    "textScale1": 1,
    "textScale2": 1,
    "textScale3": 1
}`;

const alternativeStyle = `{
    "scale": 3.3,
    
    "bgColor": "#ff0",
    "nameBgColor": "#fff",
    "typeBgColor": "#000",
    "headerBgColor": "#000",
    
    "nameColor": "#ff0",
    "typeColor": "#550",
    "textColor": "#000",
    "headerColor1": "#550",
    "headerColor2": "#ff0",
    "notesColor": "#000",

    "borderColor": "#000",
    "nameBorder": "#000",
    "typeBorder": "#ff0",
    "headerBorder1": "#ff0",
    "headerBorder2": "",
    "textBorder": "",
    "notesBorder": "",

    "borderStroke1": "1",
    "borderStroke2": "0.5",
    "nameStroke": "0.3",
    "typeStroke": "0.1",
    "headerStroke1": "0.2",
    "headerStroke2": "",
    "textStroke": "",
    "notesStroke": "",

    "headerFont": "emb_shojumaru",
    "textFont": "emb_shojumaru",
    "notesFont": "emb_langar",
    "textScale1": 1,
    "textScale2": 0.7,
    "textScale3": 0.9
}`;

const uglyStyle = `{
    "scale": 5,
    
    "bgColor": "red",
    "nameBgColor": "orange",
    "typeBgColor": "olive",
    "headerBgColor": "green",
    
    "nameColor": "black",
    "typeColor": "white",
    "textColor": "yellow",
    "headerColor1": "orange",
    "headerColor2": "red",
    "notesColor": "white",

    "borderColor": "pink",
    "nameBorder": "white",
    "typeBorder": "black",
    "headerBorder1": "blue",
    "headerBorder2": "black",
    "textBorder": "black",
    "notesBorder": "black",

    "borderStroke1": "1",
    "borderStroke2": "0.5",
    "nameStroke": "0.5",
    "typeStroke": "0.7",
    "headerStroke1": "0.2",
    "headerStroke2": "0.2",
    "textStroke": "0.2",
    "notesStroke": "1",

    "headerFont": "emb_unifraktur_cook",
    "textFont": "emb_unifraktur_cook",
    "notesFont": "emb_ramaraja",

    "textScale1": 1.2,
    "textScale2": 1,
    "textScale3": 1
}`;

const defaultLabels = `{
    "chars": ["Sp", "WS", "BS", "S", "T", "W", "Br", "Int","PV" ],
    "handToHand": {
        "handToHand": "Hand To Hand",
        "fumble": "Fumble",
        "critical": "Critical",
        "targetWs": "Target\\nWs",
        "hitRoll": "Hit\\nRoll",
        "damageDice": "Dmg\\nDice"
    },
    "rangeStats": {
        "rangeStats": "Ranged",
        "fumble": "Fumble",
        "critical": "Critical",
        "range": "Range",
        "maxRange": "Max\\nRange",
        "damageDice": "Dmg\\nDice",
        "hitRoll": "Hit\\nRoll"
    },
    "notes": "Equipment & Notes"
}`;

const statsLabels = {
    'default': {
        chars: ["Sp", "WS", "BS", "S", "T", "W", "Br", "Int","PV" ],
        handToHand: {
            handToHand: "Hand To Hand",
            fumble: "Fumble",
            critical: "Critical",
            targetWs: "Target\nWs",
            hitRoll: "Hit\nRoll",
            damageDice: "Dmg\nDice"
        },
        rangeStats: {
            rangeStats: "Ranged",
            fumble: "Fumble",
            critical: "Critical",
            range: "Range",
            maxRange: "Max\nRange",
            damageDice: "Dmg\nDice",
            hitRoll: "Hit\nRoll",
        },
        notes: "Equipment & Notes"
    }
}

export default {
    statsLabels,
    templateStates,
    templateStatesAlternate,
    defaultStyle,
    alternativeStyle,
    uglyStyle,
    heroquestStyle,
    defaultLabels
};