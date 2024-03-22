/* eslint-disable react/prop-types */
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';
import clsx from 'clsx';

function CoderHeatMap({theme, values}) {
  const isDark = theme != 'light'
  const pannelColor = {
    dark: {
      0: '#fadfc3',
      2: '#fcca95',
      4: '#fcbc77',
      10: '#ffaf59',
      20: '#fc9b32',
      30: '#fa5902'
    },
    light: {
      0: '#b89ffc',
      2: '#916afc',
      4: '#7e52f7',
      10: '#6f3cfa',
      20: '#5a1fff',
      30: '#2f03ad',
    }
  }
  return (
    <div className={clsx(isDark ? 'dark': '', "text-black  p-4 rounded-lg shadow-md dark:bg-bgCardDark dark:text-white")}>
              <h1 className="text-3xl my-2">Your coding strikes</h1>
              <HeatMap
                value={values}
                weekLabels={['', 'Mon', '', 'Wed', '', 'Fri ', '']}
                startDate={new Date('2016/01/01')} // Start date will be today - year
                style={{width: '100%', color: isDark ? 'white' : 'black'}}
                panelColors={isDark ? pannelColor.dark : pannelColor.light}
                rectRender={(props, data) => {
                  // if (!data.count) return <rect {...props} />;
                  return (
                    <Tooltip placement="top" content={`${data.count || 0} Correct submissions`}>
                      <rect {...props} />
                    </Tooltip>
                  );
                }}
              />
            </div>
  )
}

export default CoderHeatMap