const colorVisVar = {
    "type": "color",
    "field": "CrimeCnt",
    "valueExpression": null,
    "stops": [{
        "value": 0,
        "color": [
          255,
          252,
          212,
          255
        ],
        "label": "< 0"
      },
      {
        "value": 25,
        "color": [
          224,
          178,
          193,
          255
        ],
        "label": null
      },
      {
        "value": 50.8,
        "color": [
          193,
          104,
          173,
          255
        ],
        "label": "50.8"
      },
      {
        "value": 75.9,
        "color": [
          123,
          53,
          120,
          255
        ],
        "label": null
      },
      {
        "value": 101,
        "color": [
          53,
          2,
          66,
          20
        ],
        "label": "> 101"
      }
    ]
  };

  const sizeVisVar = {
    "type": "size",
    "field": "NarcoticsC",
    "valueExpression": null,
    "valueUnit": "unknown",
    "minSize": {
      "type": "size",
      "valueExpression": "$feature.scale",
      "stops": [{
          "value": 1128,
          "size": 12
        },
        {
          "value": 2256,
          "size": 12
        },
        {
          "value": 288896,
          "size": 3
        },
        {
          "value": 2311162,
          "size": 3
        },
        {
          "value": 97989703,
          "size": 1.5
        }
      ]
    },
    "maxSize": {
      "type": "size",
      "valueExpression": "$feature.scale",
      "stops": [{
          "value": 1128,
          "size": 60
        },
        {
          "value": 2256,
          "size": 60
        },
        {
          "value": 288896,
          "size": 37.5
        },
        {
          "value": 2311162,
          "size": 37.5
        },
        {
          "value": 97989703,
          "size": 18.75
        }
      ]
    },
    "minDataValue": 0,
    "maxDataValue": 378
  };

const renderer = {
    type: "simple",
    symbol: {
        type: 'simple-marker',
        outline: {
            color: [128,128,128],
            width: 0.5
        }
    },
    label: 'test',
    visualVariables: [colorVisVar, sizeVisVar]
}

export { renderer };
