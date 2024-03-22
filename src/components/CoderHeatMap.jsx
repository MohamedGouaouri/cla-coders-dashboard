/* eslint-disable react/prop-types */
import HeatMap from '@uiw/react-heat-map';
import Tooltip from '@uiw/react-tooltip';

function CoderHeatMap({values}) {
  return (
    <div className="w-full bg-gray-100 rounded-lg shadow-md mb-2">
              <h1 className="text-3xl my-2">Your coding strikes</h1>
              <HeatMap
                value={values}
                weekLabels={['', 'Mon', '', 'Wed', '', 'Fri ', '']}
                startDate={new Date('2016/01/01')} // Start date will be today - year
                style={{width: '100%'}}
                panelColors={{
                  0: '#b89ffc',
                  2: '#916afc',
                  4: '#7e52f7',
                  10: '#6f3cfa',
                  20: '#5a1fff',
                  30: '#2f03ad',
                }}
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