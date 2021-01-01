import React, { useState } from 'react';
import Stats from "./Stats"
import Settings from "../utils/Settings"
import Parses from "../utils/Parser";
import '../styles/App.scss';

const EmbededFontsList = [
  "emb_frijole",
  "emb_shojumaru",
  "emb_ruslan_display",
  "emb_lemon",
  "emb_staatliches",
  "emb_langar",
  "emb_unifraktur_cook",
  "emb_ramaraja",
  "emb_caveat",
  "emb_indie_flower",
  "emb_shadows_into"
];

function App() {
  const [editorSettings, setEditorSettings] = useState({editStats: true, editStyle: false, editLabels: false});
  const [statsText, setStatsText] = useState(() => (localStorage.getItem("stats") || Settings.templateStates));
  const [styleText, setStyleText] = useState(() => (localStorage.getItem("style") || Settings.defaultStyle));
  const [labelsText, setLabelsText] = useState(() => (localStorage.getItem("labels") || Settings.defaultLabels));

  const [stats, setStats] = useState(() => Parses.parseStats(localStorage.getItem("stats") || Settings.templateStates));
  const [style, setStyle] = useState(() => Parses.parseStyle(localStorage.getItem("style") || Settings.defaultStyle))
  const [labels, setLabels] = useState(() => Parses.parseLabels(localStorage.getItem("labels") || Settings.defaultLabels))

  const onStatsChange = (txt) => {
    setStatsText(txt);
    try {
      setStats(Parses.parseStats(txt));
      localStorage.setItem('stats', txt);
    } catch(e) {
      console.error(e);
      setStats([]);
    }
  }

  const onStyleChange = (txt) => {
    setStyleText(txt);
    try {
      setStyle(Parses.parseStyle(txt))
      localStorage.setItem('style', txt);
    } catch(e) {
      setStyle(Parses.parseStyle(Settings.defaultStyle))
    }
  }

  const onLabelsChange = (txt) => {
    setLabelsText(txt);
    try {
      setLabels(Parses.parseLabels(txt))
      localStorage.setItem('labels', txt);
    } catch(e) {
      setLabels(Parses.parseLabels(Settings.defaultLabels))
    }
  }

  const onInsertTemplate = (template) => () => onStatsChange(statsText + template);
  const onStyleReset = (scheme) => () => onStyleChange(scheme);
  const onLabelsReset = () => onLabelsChange(Settings.defaultLabels);
  const onPrint = () => {
    setEditorSettings({editStats: false, editStyle: false, editLabels: false});
    setTimeout(() => window.print(), 250);
    
  }
  const renderStats = () => {
    return stats.map((s, i) => <Stats 
      key={i}
      options={style}
      labels={labels}
      stats={s}
    />)
  };

  return (
    <div className="app">
      <div className="app-header-controls no-print" >
        <input type="checkbox"  checked={editorSettings.editStats} 
          onChange={()=>setEditorSettings({editStats: !editorSettings.editStats, editStyle: false, editLabels: false})} />
        <span>Stats editor</span>
        <input type="checkbox"  checked={editorSettings.editStyle} 
          onChange={()=>setEditorSettings({editStats: false, editStyle: !editorSettings.editStyle, editLabels: false})} />
        <span>Style editor</span>
        <input type="checkbox"  checked={editorSettings.editLabels} 
          onChange={()=>setEditorSettings({editStats: false, editStyle: false, editLabels: !editorSettings.editLabels})} />
        <span>Labels editor</span>

        <button onClick={onPrint}>Print</button>
      </div>

      {(editorSettings.editStats || editorSettings.editStyle || editorSettings.editLabels) && 
      <div className="app-container">
        {editorSettings.editStats && 
        <div className="app-editor no-print">
          <div>
            <button onClick={onInsertTemplate(Settings.templateStates)}>Insert template</button>
            <button onClick={onInsertTemplate(Settings.templateStatesAlternate)}>Insert template (alternate)</button>
          </div>
          <textarea value={statsText} onChange={(e) => onStatsChange(e.target.value)}/>
        </div>}
        {editorSettings.editStyle && 
        <div className="app-editor no-print">
          <div>
            <button onClick={onStyleReset(Settings.defaultStyle)}>Load default style</button>
            <button onClick={onStyleReset(Settings.alternativeStyle)}>Load example style</button>
            <button onClick={onStyleReset(Settings.uglyStyle)}>Load ugly style</button>
            <button onClick={onStyleReset(Settings.heroquestStyle)}>Load HeroQuest style</button>
          </div>
          <div>
            <p>Embeded fonts:</p>
            <ul>
              {EmbededFontsList.map(f => <li style={{fontFamily: f}}>{f}</li>)}
            </ul>
          </div>
          <textarea value={styleText} onChange={(e) => onStyleChange(e.target.value)}/>
        </div>}
        {editorSettings.editLabels && 
        <div className="app-editor no-print">
           <div>
            <button onClick={onLabelsReset}>Load default labels</button>
          </div>
          <textarea value={labelsText} onChange={(e) => onLabelsChange(e.target.value)}/>
        </div>}
        <div className="app-live-stats">{renderStats()}</div>
      </div>}

      {!(editorSettings.editStats || editorSettings.editStyle || editorSettings.editLabels) && renderStats()} 
    </div>
  );
}

export default App;
