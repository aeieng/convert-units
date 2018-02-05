let metric
  , imperial;

metric = {
  'Wh/m2': {
    name: {
      singular: 'Watt-hour per square meter'
    , plural: 'Watt-hours per square meter'
    }
  , to_anchor: 1
  }
};

imperial = {
  'Btuh/ft2': {
    name: {
      singular: 'Btu-hr per square foot'
    , plural: 'Btu-hrs per square foot'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'Wh/m2'
    , ratio: 0.3169974006
    }
  , imperial: {
      unit: 'Btu/ft2'
    , ratio: 3.1546
    }
  }
};
