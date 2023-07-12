import React from 'react';
import './index.less';


export default ({ toTime, format, unit, numberColor, numberBgColor, numberUnitColor }) => {
  const countDownTimer = React.useRef<NodeJS.Timeout>();
  const [timeView, setTimeView] = React.useState({
    d: '00',
    h: '00',
    m: '00',
    s: '00',
  })

  const countDown = React.useCallback(() => {
    const nowTime = +new Date();
    const [year, month, day, hour, minute, second] = toTime.split(/-|\s|:/).map(s => parseInt(s));
    const toDate = new Date(year, month - 1, day, hour, minute, second);
    const times = parseInt(`${(toDate.getTime() - nowTime) / 1000}`);
    const d = parseInt(`${(times / 60 / 60 / 24 )}`)
    let h = parseInt(`${(times / 60 / 60 ) % 24}`);
    const m = parseInt(`${(times / 60 ) % 60}`);
    const s = parseInt(`${(times % 60)}`);

    if (format === 'hour' && d > 0) {
      h += 24 * d;
    }

    setTimeView({
      d: d < 10 ? `0${d}`: `${d}`,
      h: h < 10 ? `0${h}`: `${h}`,
      m: m < 10 ? `0${m}`: `${m}`,
      s: s < 10 ? `0${s}`: `${s}`,
    });

    if (times <= 0) {
      clearTimeout(countDownTimer.current);
      setTimeView({
        d: '00',
        h: '00',
        m: '00',
        s: '00',
      });
    } else {
      countDownTimer.current = setTimeout(() => {
        countDown();
      }, 1000);
    }
  }, [toTime, format]);

  React.useEffect(() => {
    countDown();

    return () => {
      clearTimeout(countDownTimer.current);
    }
  }, [toTime, format]);

  return (
    <div styleName="counter-time-bar">
        {
          format === 'day' && (
            <div className="counter-time">
              <span className="time" style={{ color: numberColor.color, backgroundColor: numberBgColor.color }}>{timeView.d}</span>
              <span className="unit" style={{ color: numberUnitColor.color}}>{ unit === 'time' ? '天': ':'}</span>
            </div>
          )
        }
        <div className="counter-time">
          <span className="time" style={{ color: numberColor.color, backgroundColor: numberBgColor.color }}>{timeView.h}</span>
          <span className="unit" style={{ color: numberUnitColor.color}}>{ unit === 'time' ? '时': ':'}</span>
        </div>
        <div className="counter-time">
          <span className="time" style={{ color: numberColor.color, backgroundColor: numberBgColor.color }}>{timeView.m}</span>
          <span className="unit" style={{ color: numberUnitColor.color}}>{ unit === 'time' ? '分': ':'}</span>
        </div>
        <div className="counter-time">
          <span className="time" style={{ color: numberColor.color, backgroundColor: numberBgColor.color }}>{timeView.s}</span>
          <span className="unit" style={{ color: numberUnitColor.color}}>{ unit === 'time' ? '秒': ''}</span>
        </div>
    </div>
  )
}