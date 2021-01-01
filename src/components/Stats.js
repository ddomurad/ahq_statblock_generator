import "../styles/Stats.scss"

function Stats(props) {
    const {options, labels, stats} = props;

    const renderRect = (p, size, s) => <rect 
        x={transform(p[0])} 
        y={transform(p[1])} 
        width={transform(size[0])} 
        height={transform(size[1])} 
        strokeWidth={transform(s)} 
        stroke={options.borderColor}
        fill="none" />
    
    const renderFilledRect = (p, size, s, color) => <rect 
        x={transform(p[0])} 
        y={transform(p[1])} 
        width={transform(size[0])} 
        height={transform(size[1])} 
        strokeWidth={transform(s)} 
        stroke={options.borderColor}
        fill={color} />

    const renderVLine = (x, y, h, s, key) => <line 
        x1={transform(x)} 
        y1={transform(y)} 
        x2={transform(x)} 
        y2={transform(y+h)} 
        strokeWidth={transform(s)}
        stroke={options.borderColor} 
        key={key} />

    const renderHLine = (x, y, w, s, key) => <line 
        x1={transform(x)} 
        y1={transform(y)} 
        x2={transform(x+w)} 
        y2={transform(y)} 
        strokeWidth={transform(s)}
        stroke={options.borderColor} 
        key={key} />

    const renderCenterText = (p, o, fsize, fntStyle, text, key) => <text 
        x={transform(p[0], o[0])} 
        y={transform(p[1], o[1])} 
        textAnchor="middle"
        {...fntStyle}
        style={{fontSize:transform(fsize), fontFamily: fntStyle.fontFamily}}
        key={key} >
        {text}
    </text>

    const renderNotesText = (p, o, fsize, text, key) => <text 
        x={transform(p[0], o[0])} 
        y={transform(p[1], o[1])}
        fill={options.notesColor}
        stroke={options.notesBorder}
        strokeWidth={options.notesStroke}
        style={{fontSize:transform(fsize), fontFamily: options.notesFont}} 
        key={key} >
        {text}
    </text>

    const renderCenterTextarea = (p, o, fsize, lineHeight, fntStyle, text) => 
        text.split('\n')
        .map((t, i) => renderCenterText([p[0], p[1] + i*lineHeight], o, fsize, fntStyle, t, i))

    const renderNotesTextarea = (p, o, fsize, lineHeight, text) => 
        text.map((t, i) => renderNotesText([p[0], p[1] + i*lineHeight], o, fsize, t, i))

    const renderRepeat = (n, fnc) => [...Array(n)].map((e, i) => fnc(i))
    const mapKeys = (o, fnc) => Object.keys(o).map((k, i) => fnc(k, i))

    const transform = (v, m) => {
        if (!m) {
            return v*options.scale;
        }

        return v*options.scale + m*options.scale;
    }

    const defaultFontStyle = {
        fill: options.textColor,
        stroke: options.textBorder,
        strokeWidth: transform(options.textStroke),
        fontFamily: options.textFont
    }

    const headerFontStyle = {
        fill: options.headerColor1,
        stroke: options.headerBorder1,
        strokeWidth: transform(options.headerStroke1),
        fontFamily: options.headerFont
    }

    const header2FontStyle = {
        fill: options.headerColor2,
        stroke: options.headerBorder2,
        strokeWidth: transform(options.headerStroke2),
        fontFamily: options.headerFont
    }

    const nameFontStyle = {
        fill: options.nameColor,
        stroke: options.nameBorder,
        strokeWidth: transform(options.nameStroke),
        fontFamily: options.headerFont
    }

    const hasType = stats.type && stats.type !== "";
    const extraHandToHandStats = stats.handToHand.fumble || stats.handToHand.critical;
    const extraRangeStats = stats.rangeStats.fumble || stats.rangeStats.critical;

    return <svg width={transform(100, 2)} height={transform(80, 2)} className="stats">
        {renderFilledRect([1, 1], [90, 80], options.borderStroke1, options.bgColor)}
        {renderFilledRect([1, 1], [90, 10], options.borderStroke1, options.nameBgColor)}

        {hasType && renderFilledRect([91, 1], [10, 80], options.borderStroke1,  options.typeBgColor)}
        {renderFilledRect([1, 11], [90, 8], 0, options.headerBgColor)}
        
        {extraHandToHandStats && 
            renderFilledRect([1, 27], [56.25, 6], 0, options.headerBgColor)}
        {!extraHandToHandStats && 
            renderFilledRect([1, 27], [90, 6], 0, options.headerBgColor)}
        {extraHandToHandStats && 
            renderFilledRect([68.25, 27], [11.25, 6], 0, options.headerBgColor)}

        {extraRangeStats &&
            renderFilledRect([1, 45], [56.25, 6], 0, options.headerBgColor)}
        {!extraRangeStats &&
            renderFilledRect([1, 45], [90, 6], 0, options.headerBgColor)}
        {extraRangeStats && 
            renderFilledRect([68.25, 45], [11.25, 6], 0, options.headerBgColor)}
        
        {renderFilledRect([1, 63], [90, 6], 0, options.headerBgColor)}
        
        {renderRect([1, 11], [90, 16], options.borderStroke1)}
        {renderRect([1, 27], [90, 18], options.borderStroke1)}
        {renderRect([1, 45], [90, 18], options.borderStroke1)}
        {renderRect([1, 63], [90, 18], options.borderStroke1)}

        {renderRepeat(8, (i) => renderVLine(10*(i+1)+1, 11, 16, options.borderStroke2, i))}
        {renderHLine(1, 19, 90, options.borderStroke2)}

        {renderHLine(1, 33, 90, options.borderStroke2)}
        {renderHLine(1, 39, 90, options.borderStroke2)}
        
        {extraHandToHandStats && renderVLine(46, 27, 6, options.borderStroke2)}
        {extraHandToHandStats && renderVLine(57.25, 27, 6, options.borderStroke2)}
        {extraHandToHandStats && renderVLine(68.5, 27, 6, options.borderStroke2)}
        {extraHandToHandStats && renderVLine(79.75, 27, 6, options.borderStroke2)}
        {renderRepeat(13, (i) => renderVLine(5.625*i+12.25, 33, 12, options.borderStroke2, i))}

        {renderHLine(1, 51, 90, options.borderStroke2)}
        {renderHLine(1, 57, 90, options.borderStroke2)}
        
        {extraRangeStats && renderVLine(46, 45, 6, options.borderStroke2)}
        {extraRangeStats && renderVLine(57.25, 45, 6, options.borderStroke2)}
        {extraRangeStats && renderVLine(68.5, 45, 6, options.borderStroke2)}
        {extraRangeStats && renderVLine(79.75, 45, 6, options.borderStroke2)}
        
        {renderRepeat(7, (i) => renderVLine(11.25*i+12.25, 51, 12, options.borderStroke2, i))}

        {renderHLine(1, 69, 90, options.borderStroke2)}

        {renderCenterText([90/2, 10/2], [1, 3*options.textScale1], 5*options.textScale1, nameFontStyle, stats.name)}
        
        {labels.chars.map((k, i) => renderCenterText([(10*i) + 10/2, 15], [1, 2.1], 4*options.textScale1, headerFontStyle, k, i))}
        {stats.chars.map((k, i) => renderCenterText([(10*i) + 10/2, 22], [1, 2.1], 4*options.textScale1, defaultFontStyle, k, i))}

        {extraHandToHandStats &&
            renderCenterText([46/2, 29.5], [1, 2*options.textScale1], 4*options.textScale1, headerFontStyle, labels.handToHand.handToHand)}
        {!extraHandToHandStats &&
            renderCenterText([90/2, 29.5], [1, 2*options.textScale1], 4*options.textScale1, headerFontStyle, labels.handToHand.handToHand)}

        {extraHandToHandStats && 
            renderCenterText([50.625, 29.5], [1, 1.8], 2.8*options.textScale2, header2FontStyle, labels.handToHand.fumble)}
        {extraHandToHandStats && 
            renderCenterText([61.875, 29.5], [1, 2.1], 4*options.textScale3, defaultFontStyle, stats.handToHand.fumble)}
        {extraHandToHandStats && 
            renderCenterText([73.125, 29.5], [1, 1.8], 2.4*options.textScale2, header2FontStyle, labels.handToHand.critical)}
        {extraHandToHandStats && 
            renderCenterText([84.625, 29.5], [1, 2.1], 4*options.textScale3, defaultFontStyle, stats.handToHand.critical)}

        {renderCenterTextarea([5.625, 34], [1, 2], 3*options.textScale2, 2.5*options.textScale2, defaultFontStyle, labels.handToHand.targetWs)}
        {renderCenterTextarea([5.625, 39.8], [1, 2], 3*options.textScale2, 2.5*options.textScale2, defaultFontStyle, labels.handToHand.hitRoll)}
        {renderCenterTextarea([5.625*15, 34], [1, 2], 3*options.textScale2, 2.5*options.textScale2, defaultFontStyle, labels.handToHand.damageDice)}

        {renderRepeat(12, (i) => renderCenterText([5.625*i+14.25, 36], [1, 2], 4*options.textScale3, defaultFontStyle, i+1, i))}
        {stats.handToHand.hitRolls.map((v, i) => renderCenterText([5.625*i+14.25, 41.5], [1, 2], 4*options.textScale3, defaultFontStyle, v, i))}

        {renderCenterText([5.625*15, 41.5], [1, 2.1], 4*options.textScale3, defaultFontStyle, stats.handToHand.damageDice)}

        {extraRangeStats &&
            renderCenterText([46/2, 47.4], [1, 2*options.textScale1], 4*options.textScale1, headerFontStyle, labels.rangeStats.rangeStats)}
        {!extraRangeStats &&
            renderCenterText([90/2, 47.4], [1, 2*options.textScale1], 4*options.textScale1, headerFontStyle, labels.rangeStats.rangeStats)}

        {extraRangeStats &&
            renderCenterText([50.625, 47.4], [1, 1.8], 2.8*options.textScale2, header2FontStyle, labels.rangeStats.fumble)}
        {extraRangeStats && 
            renderCenterText([61.875, 47.4], [1, 2.1], 4*options.textScale3, defaultFontStyle, stats.rangeStats.fumble)}
        {extraRangeStats && 
            renderCenterText([73.125, 47.4], [1, 1.8], 2.4*options.textScale2, header2FontStyle, labels.rangeStats.critical)}
        {renderCenterText([84.625, 47.4], [1, 2.1], 4*options.textScale3, defaultFontStyle, stats.rangeStats.critical)}

        {renderCenterTextarea([5.625, 53], [1, 2], 3*options.textScale2, 2.5*options.textScale2, defaultFontStyle, labels.rangeStats.range)}
        {renderCenterTextarea([5.625, 57.8], [1, 2], 3*options.textScale2, 2.5*options.textScale2, defaultFontStyle, labels.rangeStats.hitRoll)}
        {renderCenterTextarea([5.625*13, 52], [1, 2], 3*options.textScale2, 2.5*options.textScale2, defaultFontStyle, labels.rangeStats.maxRange)}
        {renderCenterTextarea([5.625*15, 52], [1, 2], 3*options.textScale2, 2.5*options.textScale2, defaultFontStyle, labels.rangeStats.damageDice)}

        {stats.rangeStats.hitRanges.map((k, i) => renderCenterText([11.25*i + 16.875, 53], [1, 2], 3*options.textScale3, defaultFontStyle, k, i))}
        {stats.rangeStats.hitRolls.map((k, i) => renderCenterText([11.25*i + 16.875, 59], [1, 2], 3*options.textScale3, defaultFontStyle, k, i))}

        {renderCenterText([5.625*13, 59], [1, 2.1], 3*options.textScale3, defaultFontStyle, stats.rangeStats.maxRange)}
        {renderCenterText([5.625*15, 59], [1, 2.1], 3*options.textScale3, defaultFontStyle, stats.rangeStats.damageDice)}

        {renderCenterText([45, 65], [1, 2.5*options.textScale1], 4*options.textScale1, headerFontStyle, labels.notes)}
        {renderNotesTextarea([2, 70.5], [1, 2], 3.5*options.textScale3, 3.5*options.textScale3, stats.notes)}
        
        {hasType && <text 
            textAnchor="middle" 
            style={{fontSize:transform(6*options.textScale1), fontFamily: options.headerFont}} 
            transform={`rotate(90) translate(${transform(40)}, ${transform(-94)})`}
            fill={options.typeColor}
            strokeWidth={transform(options.typeStroke)}
            stroke={options.typeBorder}
        >
            {stats.type}
        </text>}
        
    </svg>
}

export default Stats;